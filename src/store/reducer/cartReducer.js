import { ITEM_CHANGE, ITEM_ALL_CHECK, ITEM_NUM_UPDATE, ITEM_REMOVE, ITEM_ADD } from "../actionTypes";

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
      const { id, unit } = action.value;
      let newState = JSON.parse(JSON.stringify(state));
      let index = newState.carts.findIndex((v) => v.id === id);
      newState.carts[index].num += unit;
      return newState;
      break;
    }
    case ITEM_REMOVE: {
      const { id } = action.value;
      let newState = JSON.parse(JSON.stringify(state));
      let index = newState.carts.findIndex((v) => v.id === id);
      newState.carts.splice(index, 1);
      return newState;
      break;
    }
    case ITEM_ADD: {
      // 1 假如该商品不存在 添加商品
      // 2 假如商品已经存在了 则添加数量 ++
      let newState = JSON.parse(JSON.stringify(state));
      const { goodsObj } = action.value;

      let index = newState.carts.findIndex((v) => v.id === goodsObj.id);
      if (index === -1) {
        // 该商品不存在
        // 传递过来的商品的属性和 我们定义的购物车的对象属性不一致！！！ 
        newState.carts.push({
          id: goodsObj.id,
          title: goodsObj.title,
          img_url: goodsObj.img_url,
          num: 1,
          checked: true,
          price: goodsObj.sell_price
        });
      } else {
        // 商品 已经存在
        newState.carts[index].num++;
      }
      return newState;
    }
    default:
      break;
  }

  return state;
}