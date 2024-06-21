import { Schema, model } from 'mongoose';

const schemaCustomers = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  interests: {
    type: [String],
    default: [],
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  galery: {
    type: [String],
    required: false
  },
  matches: [{
    customer: {
      type: Schema.Types.ObjectId,
      ref: 'Customer'
    }
  }]
});

const Customer = model('Customer', schemaCustomers);

export default Customer;