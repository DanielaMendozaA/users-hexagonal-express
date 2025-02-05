import { User } from "./User";
import { UserId } from "./UserId";

export interface IUserRepository{
    create(user: User): Promise<void>;
    getAll(): Promise<User[]>;
    getById(id: UserId): Promise<User | null>;
    edit(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
}