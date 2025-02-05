import { ResourceNotFoundError } from '../../../Shared/Errors/ResourceNotFound';
import { User } from '../../domain/User';
import { UserCreateAt } from '../../domain/UserCreateAt';
import { UserEmail } from '../../domain/UserEmail';
import { UserId } from '../../domain/UserId';
import { UserName } from '../../domain/UserName';
import { IUserRepository } from '../../domain/UserRepositoryInterface';
export class UserUpdate {
    constructor(private repository: IUserRepository) { }

    async run(
        id: string,
        name: string,
        email: string,
        createAt: Date
    ) {
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreateAt(createAt)
        );

        const userExists = await this.repository.getById(user.id);

        if (!userExists)
            throw new ResourceNotFoundError("User");

        return this.repository.edit(user);


    }
}