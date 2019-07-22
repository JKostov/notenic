import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Inject,
  Post,
  Res,
} from '@nestjs/common';
import { LoginDto } from '@auth/token/dto/login.dto';
import { ITokenService } from '@auth/token/interfaces/token.service.interface';
import { RegisterDto } from '@auth/token/dto/register.dto';

const loginFailedMessage = 'Invalid email address or password.';

@Controller('auth')
export class AuthController {
  constructor(@Inject('ITokenService') private readonly tokenService: ITokenService) {
  }

  @Post('/login')
  public async login(@Body() loginDto: LoginDto, @Res() res) {
    const loginSuccessDto = await this.tokenService.login(loginDto);

    if (!loginSuccessDto) {
      throw new HttpException(loginFailedMessage, HttpStatus.BAD_REQUEST);
    }

    return res.status(HttpStatus.OK).json(loginSuccessDto);
  }

  @Post('/register')
  public async register(@Body() registerDto: RegisterDto, @Res() res) {
    await this.tokenService.register(registerDto);
    res.status(HttpStatus.OK).json({ message: 'Welcome.Please check your email to confirm registration.' });
  }

  // @Post('/forgot-password')
  // public async forgotPassword(@Body() body, @Res() res) {
  //   await this.authService.forgotPassword(body.email);
  //   res.status(HttpStatus.ACCEPTED).json('Password recovery email successfully sent.');
  // }
  //
  // @Post('/verify-token')
  // public async verifyToken(@Body() body, @Res() res) {
  //   await this.authService.verifyToken(body.token);
  //   res.status(HttpStatus.ACCEPTED).json('Token is valid.');
  // }
  //
  // @Post('/reset-password')
  // public async resetPassword(@Body() body: IResetPassword, @Res() res) {
  //   await this.authService.resetPassword(body);
  //   res.status(HttpStatus.ACCEPTED).json('Password successfully changed.');
  // }
  //
  // @Get('/confirm/:token')
  // @UsePipes(new ValidationPipe())
  // public async confirmToken(@Param() param, @Res() res) {
  //   await this.authService.confirmToken(param.token);
  //   res.redirect(this.configService.get('FRONTEND'));
  // }
}
