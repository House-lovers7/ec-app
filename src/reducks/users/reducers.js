import * as Actions from './actions';
import {initialState} from '../store/initialState';

export const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SiGN_IN:
      return {
        ...state,
        //重複分は後から書いたpayloadに上書きされる
        ...action.payload,
      }
      default:
        return state
  }
}