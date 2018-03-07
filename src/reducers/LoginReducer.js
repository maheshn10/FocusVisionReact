import { LogType } from '../actions/ActionTypes';

const initialState = {
  focusInfo: [],
  loginInfo: null,
  logged: false,
  message: null,
  IsLogged: 'False'
};
export default function reducer(state = initialState, action) {
  let st = state;
  switch (action.type) {
    case LogType.INSERT_LOG:
      {
        st = {
          ...state,
          logged: true,
          message: 'Logged Successfully.'

        };
        break;
      }
    case LogType.ERROR_LOG:
      {
        st = {
          ...state,
          logged: false,
          message: action.message
        };
        break;
      }

    case LogType.AUTH_LOG:
      {
        st = {
          ...state,
          loginInfo: action.loginInfo,
          logged: true
        };
        break;
      }

    case LogType.SHOW_DATA:
      {
        st = {
          ...state,
          focusInfo: action.focusInfo,
          logged: true
        };
        break;
      }

    default:
      {
        return st;
      }
  }
  return st;
}
