const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

//reducer
export const auth = (state = {isAuth: false, name: 'Yijiang'}, action) => {
  switch(action.type){
    case LOGIN:
      return {...state, isAuth: true};
    case LOGOUT:
      return {...state, isAuth: false};
    default :
      return state;
  }
}

//action
export const login = () => {
  return {type: LOGIN};
}
export const logout = () => {
  return {type: LOGOUT};
}