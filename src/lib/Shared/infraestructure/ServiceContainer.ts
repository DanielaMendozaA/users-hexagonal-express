import { UserCreate } from '../../Users/application/UserCreate/UserCreate';
import { UserDelete } from '../../Users/application/UserDelete/UserDelete';
import { UserGetAll } from '../../Users/application/UserGetAll/UserGetAll';
import { UserGetById } from '../../Users/application/UserGetById/UserGetById';
import { UserUpdate } from '../../Users/application/UserUpdate/UserUpdate';
import { InMemoriUserRepository } from '../../Users/infraestructure/InMemoriUserRepository';


const userRepository = new InMemoriUserRepository();

export const ServiceContainer = {
    user: {
        getAll: new UserGetAll(userRepository),
        getById: new UserGetById(userRepository),
        create: new UserCreate(userRepository),
        delete: new UserDelete(userRepository),
        edit: new UserUpdate(userRepository)
    }
}