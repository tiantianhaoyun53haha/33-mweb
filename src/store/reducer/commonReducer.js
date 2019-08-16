import { LOADDING_TOGGLE } from "../actionTypes";

// 1 定义默认的购物车数据
const defaultState = {
  showLoadding: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOADDING_TOGGLE:
      let newState = JSON.parse(JSON.stringify(state));
      newState.showLoadding = action.value;
      console.log(newState);
      return newState;
      break;
    default:
      break;
  }
  return state;
}