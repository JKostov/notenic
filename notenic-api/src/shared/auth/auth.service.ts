import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from '@app/shared/auth/interfaces/jwt-payload.interface';
import { IAuthService } from '@app/shared/auth/interfaces/auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    private readonly jwtService: JwtService,
  ) {}

  async signIn(): Promise<string>  {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: JwtPayload = { email: 'user@email.com' };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // return await this.usersService.findOneByEmail(payload.email);
    return new Promise(resolve => resolve({ email: 'test@test.com' }));
  }
}
