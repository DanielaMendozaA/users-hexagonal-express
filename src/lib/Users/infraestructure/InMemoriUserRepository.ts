import { User } from "../domain/User";
import { IUserRepository } from "../domain/UserRepositoryInterface";
import { UserId } from '../domain/UserId';
import { UserCreateAt } from "../domain/UserCreateAt";

export class InMemoriUserRepository implements IUserRepository {
    private users: User[] = []

    async create(user: User): Promise<void> {
        user.id = new UserId((this.users.length + 50000).toString())
        user.createAt = new UserCreateAt(new Date)
        this.users.push(user)
    }

    async getAll(): Promise<User[]> {
        return this.users
    }

    async getById(id: UserId): Promise<User | null> {
        return this.users.find(user => user.id.value === id.value) || null;
    }

    async edit(user: User): Promise<void> {
        const index = this.users.findIndex((u) => u.id.value == user.id.value);
        this.users[index] = user;
    }

    async delete(id: UserId): Promise<void> {
        this.users = this.users.filter((user) => user.id.value !== id.value);
    }
}