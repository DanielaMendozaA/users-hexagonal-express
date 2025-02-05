import { body } from 'express-validator';

export const userCreateDto = [
  body('name').isString().notEmpty().withMessage('Name is required'),
  body('email').isEmail().notEmpty().withMessage('Invalid email'),
];
