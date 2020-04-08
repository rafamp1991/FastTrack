import { Repository } from 'typeorm';
import { AuthEntity } from './entities/auth.entity';
import { AuthDto } from './dto/auth.dto';
import { AuthResponseDto } from './dto/auth.response.dto';
export declare class AuthService {
    private readonly authRepository;
    private readonly userRepository;
    constructor(authRepository: Repository<AuthEntity>, userRepository: Repository<any>);
    authIn(auth: AuthDto): Promise<AuthResponseDto>;
    authOut(auth: AuthDto): Promise<AuthResponseDto>;
    private saveTicketing;
    private welcomeTeacher;
    private byeTeacher;
}
