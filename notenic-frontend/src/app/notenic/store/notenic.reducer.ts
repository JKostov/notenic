import { INotenicState } from './notenic.state';
import { NotenicActions, ActionsEnum } from '@notenic/store/notenic.actions';

export const initialRecipesState: INotenicState = {
  user: null,
  token: null,
};

export function notenicReducer(state = initialRecipesState, action: NotenicActions): INotenicState {
  switch (action.type) {
    case ActionsEnum.InitLogin: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
}
