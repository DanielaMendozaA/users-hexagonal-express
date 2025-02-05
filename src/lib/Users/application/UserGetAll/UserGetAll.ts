import { User } from "../../domain/User";
import { IUserRepository } from "../../domain/UserRepositoryInterface";

export class UserGetAll{
    constructor(private repository : IUserRepository){}

    async run(): Promise<User[]>{
        return this.repository.getAll();
        
    }
}