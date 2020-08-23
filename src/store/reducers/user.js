import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: {},
  token: null,
  isAuthenticated: false,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        token: action.data.token,
        isAuthenticated: true
      }
    case actionTypes.REGISTRATION_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        token: action.data.token,
        isAuthenticated: true
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        token: null,
        isAuthenticated: false
      }
    case actionTypes.LOGOUT_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: true
      }
    default: return state;
  }
}

export default reducer;