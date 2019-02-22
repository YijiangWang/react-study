const JOINCLASS = 'JOINCLASS';
const LEAVECLASS = 'LEAVECLASS';

export const reducer = (state, action) => {
  switch(action.type){
    case JOINCLASS:
      return state + 1;
    case LEAVECLASS:
      return state -1;
    default:
      return 40;
  }
};

export const join = () => {
  return {type: JOINCLASS};
};
export const leave = () => {
  return {type: LEAVECLASS};
};
// 异步 action
export const joinAsync = () => {
  return dispatch => {
    setTimeout(()=>{
      dispatch(join());
    }, 2000);
  };
};