import { LoginDto } from '@auth/token/dto/login.dto';
import { RegisterDto } from '@auth/token/dto/register.dto';

export interface ITokenService {
  login(userData: LoginDto): Promise<string>;

  register(userData: RegisterDto): Promise<any>;

  // validateUser(payload: JwtPayload): Promise<any>;
}