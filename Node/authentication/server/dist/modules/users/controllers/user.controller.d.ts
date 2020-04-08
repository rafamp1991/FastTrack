import { User } from '../entities/user.entity';
import { UserService } from '../services/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<User[]>;
    addUser(userDto: {
        uid: string;
        key: string;
    }): Promise<User>;
}
