import { User } from '@notenic/models';

export const createAuthStoreName = 'auth';

export interface IAuthState {
  error: string;
  info: string;
  isLoading: boolean;
  user: User;
  token: string;
}
