import express from 'express';
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import cors from 'cors';
import customerRoutes from './routes/customersRoutes.js';
import multer from 'multer';
import path from 'path';

const setup = async () => {
  const mongod = await MongoMemoryServer.create();
  await mongoose.connect(`${mongod.getUri()}banco`);
  const app = express();

  app.use(cors());
  app.use(express.json());
  

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({ storage: storage });

  app.post('/uploads', upload.single('avatar'), (req, res) => {
    try {
      res.status(200).json({ filePath: req.file.path });
    } catch (error) {
      res.status(500).json({ error: 'Falha ao fazer upload do avatar' });
    }
  });

  app.use('/uploads', express.static('uploads'));
  app.use('/api/customers', customerRoutes);

  app.listen(3001, () => {
    console.log("http://localhost:3001");
  });
};

setup();