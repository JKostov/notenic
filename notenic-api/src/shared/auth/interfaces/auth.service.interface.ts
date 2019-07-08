import { JwtPayload } from '@app/shared/auth/interfaces/jwt-payload.interface';

export interface IAuthService {
  signIn(): Promise<string>;

  validateUser(payload: JwtPayload): Promise<any>;
}
