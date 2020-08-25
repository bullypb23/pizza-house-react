import * as actionTypes from '../actions/actionTypes';

const initialState = {
  user: {},
  token: null,
  isAuthenticated: false,
  error: '',
  loading: false,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.REGISTRATION_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        token: action.data.token,
        isAuthenticated: true,
        loading: false,
      }
    case actionTypes.REGISTRATION_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
        loading: false,
      }
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.data.user,
        token: action.data.token,
        isAuthenticated: true,
        loading: false,
      }
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: false,
        loading: false,
      }
    case actionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        user: {},
        token: null,
        isAuthenticated: false,
        loading: false,
      }
    case actionTypes.LOGOUT_FAILED:
      return {
        ...state,
        error: action.error,
        isAuthenticated: true,
        loading: false,
      }
    case actionTypes.START_LOADING_USER:
      return {
        ...state,
        loading: true,
      }
    default: return state;
  }
}

export default reducer;