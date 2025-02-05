import { validationResult } from 'express-validator';
import { ValidationError } from '../Errors/ValidationError';
import { NextFunction, Request, Response } from 'express';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new ValidationError(errors.array()));
  }
  next();
};
