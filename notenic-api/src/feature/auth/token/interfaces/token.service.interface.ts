import { LoginDto } from '@auth/token/dto/login.dto';
import { RegisterDto } from '@auth/token/dto/register.dto';
import { LoginSuccessDto } from '@auth/token/dto/login-success.dto';

export interface ITokenService {
  login(userData: LoginDto): Promise<LoginSuccessDto>;

  register(userData: RegisterDto): Promise<any>;

  // validateUser(payload: JwtPayload): Promise<any>;
}
