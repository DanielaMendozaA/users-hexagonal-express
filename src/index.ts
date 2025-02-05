import express, { Request, Response, NextFunction } from 'express';
import { ExpressUserRouter } from './lib/Users/infraestructure/ExpressUserRouter';
import errorMiddleware from './lib/Shared/Middlewares/ErrorMiddleware';

const app = express();

app.use(express.json());

app.use("/api", ExpressUserRouter);

app.use(errorMiddleware)

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
