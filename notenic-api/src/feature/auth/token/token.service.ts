import { Inject, Injectable } from '@nestjs/common';
import { ITokenService } from '@auth/token/interfaces/token.service.interface';
import { JwtService } from '@nestjs/jwt';
import { IUserService } from '@auth/user/interfaces/user.service.interface';
import { User } from '@auth/user/user.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from '@auth/token/dto/register.dto';
import { LoginDto } from '@auth/token/dto/login.dto';
import { plainToClass } from 'class-transformer';
import { MailerService } from '@nest-modules/mailer';
import { LoginSuccessDto } from '@auth/token/dto/login-success.dto';

@Injectable()
export class TokenService implements ITokenService {
  private static readonly saltRounds = 10;

  constructor(
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  async login(userData: LoginDto): Promise<LoginSuccessDto> {
    const user = await this.userService.getOneByEmail(userData.email);

    if (!user) {
      return null;
    }

    const result = await TokenService.compareHash(userData.password, user.password);

    if (!result) {
      return null;
    }

    delete user.password;

    const token = await this.jwtService.signAsync({ email: user.email, username: user.username });

    const loginSuccessDto: LoginSuccessDto = {
      user,
      token,
    };

    return loginSuccessDto;
  }

  async register(userData: RegisterDto): Promise<any> {

    const user = plainToClass(User, userData);

    user.password = await TokenService.generateHash(user.password);

    const newUser = await this.userService.create(user);

    await this.mailerService.sendMail({
      to: newUser.email,
      subject: 'Welcome to Notenic',
      template: 'register',
      context: {
        email: newUser.email,
      },
    });

    return newUser;
  }

  static async compareHash(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  static async generateHash(password: string): Promise<string> {
    return await bcrypt.hash(password, TokenService.saltRounds);
  }
}
