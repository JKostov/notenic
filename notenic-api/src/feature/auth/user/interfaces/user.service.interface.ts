import { User } from '@auth/user/user.entity';
import { IService } from '@app/shared/types/abstract.service.interface';

export interface IUserService extends IService<User> {
  getOneByEmail(email: string): Promise<User>;

  getOneByUsername(username: string): Promise<User>;
}
