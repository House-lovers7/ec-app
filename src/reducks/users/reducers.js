import * as Actions from './actions';
import {initialState} from '../store/initialState';

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        //重複分は後から書いたpayloadに上書きされる
        ...action.payload,
      }
      case Actions.SIGN_OUT:
        return {
          ...action.payload
        };
      default:
        return state
  }
}
