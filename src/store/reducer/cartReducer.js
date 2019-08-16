import { ITEM_CHANGE, ITEM_ALL_CHECK, ITEM_NUM_UPDATE } from "../actionTypes";

// 1 定义默认的购物车数据
const defaultState = {
  carts: [{
    id: 11,
    title: "飞利浦",
    img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg",
    num: 1,
    checked: false,
    price: 999
  },
  {
    id: 12,
    title: "飞利浦22",
    img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg",
    num: 2,
    checked: true,
    price: 9939
  }]
}

// 2  暴露一个函数出去 函数 负责根据action的类型 来处理全局的数据
export default (state = defaultState, action) => {

  switch (action.type) {
    case ITEM_CHANGE:
      {
        // 0 获取要修改的商品对象 id
        const { id } = action.value;
        // 1 获取源数组
        let newState = JSON.parse(JSON.stringify(state));
        // 2 获取要修改的元素的索引
        let index = newState.carts.findIndex((v) => v.id === id);
        newState.carts[index].checked = !newState.carts[index].checked;
        // 3 直接返回state
        return newState;
        break;
      }
    case ITEM_ALL_CHECK:
      {
        const { checked } = action.value;
        let newState = JSON.parse(JSON.stringify(state));
        newState.carts.forEach(v => v.checked = checked);
        return newState;
        break;
      }
    case ITEM_NUM_UPDATE: {
      const {id,unit}=action.value;
      let newState = JSON.parse(JSON.stringify(state));
      let index = newState.carts.findIndex((v) => v.id === id);
      newState.carts[index].num+=unit;
      return newState;
      break;
    }
    default:
      break;
  }

  return state;
}