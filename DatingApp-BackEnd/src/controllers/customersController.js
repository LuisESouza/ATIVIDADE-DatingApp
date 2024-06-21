import Customer from '../models/customersModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

export const createCustomer = async (req, res) => {
  const { firstName, lastName, email, password, age, gender, interests, avatar } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
      interests,
      avatar,
    });

    await newCustomer.save();
    const token = jwt.sign(
      { id: newCustomer._id },
      'your_jwt_secret',
      { expiresIn: '1h' }
    );

    res.status(201).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create customer' });
  }
};

export const loginCustomer = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ email });
    if (!customer) {
      return res.status(400).json({ message: 'Email not found' });
    }
    const isMatch = await bcrypt.compare(password, customer.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: customer._id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, customer: { id: customer._id, email: customer.email, firstName: customer.firstName } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to login' });
  }
};

export const getCustomerProfile = async (req, res) => {
  try {
    const customer = await Customer.findById(req.user.id);
    if (!customer) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(customer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get customer profile' });
  }
};

export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().select();
    res.json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get customers' });
  }
};

export default { createCustomer, loginCustomer, getCustomerProfile, getAllCustomers, upload };