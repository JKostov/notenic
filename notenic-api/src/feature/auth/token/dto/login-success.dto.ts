import { User } from '@auth/user/user.entity';

export class LoginSuccessDto {
  user: User;
  token: string;
}
