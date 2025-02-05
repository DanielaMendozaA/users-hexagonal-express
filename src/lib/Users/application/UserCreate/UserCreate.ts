import { User } from "../../domain/User";
import { UserCreateAt } from "../../domain/UserCreateAt";
import { UserEmail } from "../../domain/UserEmail";
import { UserId } from "../../domain/UserId";
import { UserName } from "../../domain/UserName";
import { IUserRepository } from "../../domain/UserRepositoryInterface";

export class UserCreate{
    constructor(private repository: IUserRepository) { }

    async run(
        id: string,
        name: string,
        email: string,
        createAt: Date
    ): Promise<void> {
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreateAt(createAt)
        )
        return this.repository.create(user)
    }

}