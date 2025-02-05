import { ResourceNotFoundError } from "../../Shared/Errors/ResourceNotFound";
import { ServiceContainer } from "../../Shared/infraestructure/ServiceContainer";
import { NextFunction, Request, Response } from "express"

export class ExpressUserController {
    async getAll(req: Request, res: Response, next: NextFunction): Promise<void>  {
        try {
            const users = await ServiceContainer.user.getAll.run();

            res.json(users.map((user) => user.mapToPrimitive()));

        } catch (error) {
            next(error)

        }

    }

    async getById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            const user = await ServiceContainer.user.getById.run(req.params.id);

            res.json(user?.mapToPrimitive()).status(200);


        } catch (error) {
            if (error instanceof ResourceNotFoundError)
                res.status(404).json({ message: error.message })

            next(error)

        }
    }

    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { createdAt, email, id, name } = req.body as {
                id: string;
                name: string;
                email: string;
                createdAt: string;
            };

            await ServiceContainer.user.create.run(id, name, email, new Date(createdAt))
            res.status(201).send();
        } catch (error) {
            next(error)
        }
    }

    async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { createdAt, email, name } = req.body as {
                name: string;
                email: string;
                createdAt: string;
            };
            const userId = req.params.id
            await ServiceContainer.user.edit.run(
                userId,
                name,
                email,
                new Date(createdAt))

        } catch (error) {
            if (error instanceof ResourceNotFoundError)
               res.status(404).json({ message: error.message })

            next(error)

        }
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {

            await ServiceContainer.user.delete.run(req.params.id)
            res.status(204).send()

        } catch (error) {
            if (error instanceof ResourceNotFoundError)
                res.status(404).json({ message: error.message })

            next(error)
        }
    }
}