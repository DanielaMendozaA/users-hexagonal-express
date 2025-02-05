import { ResourceNotFoundError } from '../../../Shared/Errors/ResourceNotFound';
import { User } from '../../domain/User';
import { UserId } from '../../domain/UserId';
import { IUserRepository } from '../../domain/UserRepositoryInterface';
export class UserGetById {
    constructor(private repository: IUserRepository) {}

    async run(id: string): Promise<User | null>{
        const user = await this.repository.getById(new UserId(id))
        if(!user)
            throw new ResourceNotFoundError("User")

        return user;
    }
}