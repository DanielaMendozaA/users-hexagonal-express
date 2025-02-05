import { ResourceNotFoundError } from '../../../Shared/Errors/ResourceNotFound';
import { UserId } from '../../domain/UserId';
import { IUserRepository } from '../../domain/UserRepositoryInterface';
export class UserDelete{
    constructor(private repository: IUserRepository){}

    async run(id: string): Promise<void>{
        const userId = new UserId(id);

        const userExists = await this.repository.getById(userId)

        if(!userExists)
            throw new ResourceNotFoundError("User")

        await this.repository.delete(userId)

    }
}