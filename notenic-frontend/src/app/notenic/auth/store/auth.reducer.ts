import { IAuthState } from './auth.state';
import { ActionsEnum, AuthActions } from './auth.actions';

export const initialRecipesState: IAuthState = {
  error: null,
  info: null,
  isLoading: false,
  user: null,
  token: null,
};

export function authReducer(state = initialRecipesState, action: AuthActions): IAuthState {
  switch (action.type) {
    case ActionsEnum.InitLogin: {
      return {
        ...state,
        error: null,
        info: null,
        isLoading: true,
      };
    }
    case ActionsEnum.RegisterFail:
    case ActionsEnum.LoginFail: {
      return {
        ...state,
        error: action.payload.error,
        info: null,
        isLoading: false,
      };
    }
    case ActionsEnum.LoginSuccess: {
      return {
        ...state,
        error: null,
        info: null,
        isLoading: false,
        user: action.payload.loginSuccessModel.user,
        token : action.payload.loginSuccessModel.token,
      };
    }
    case ActionsEnum.InitRegister: {
      return {
        ...state,
        error: null,
        info: null,
        isLoading: true,
      };
    }
    case ActionsEnum.RegisterSuccess: {
      return {
        ...initialRecipesState,
        info: 'Confirm email address to finish the registration.'
      };
    }
    default: {
      return state;
    }
  }
}
