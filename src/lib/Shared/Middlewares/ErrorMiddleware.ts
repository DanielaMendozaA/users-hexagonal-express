import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../Errors/ValidationError';

const errorMiddleware = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ValidationError) {

        res.status(400).json({
            message: err.message
        });
    }else if (err instanceof Error) {
        console.error(err.stack);
        res.status(500).json({ message: err.message });
    }

    console.error(err);
    res.status(500).json({ message: "Something went wrong" });
};

export default errorMiddleware;
