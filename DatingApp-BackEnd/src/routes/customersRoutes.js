import express from 'express';
import customersController from '../controllers/customersController.js'
import authMiddleware from './authMiddleware.js';
const upload = customersController.upload;

const router = express.Router({ mergeParams: true });

router.post('/register', upload.single('avatar'), customersController.createCustomer);
router.post('/login', customersController.loginCustomer);
router.get('/profile', authMiddleware, customersController.getCustomerProfile);

export default router;