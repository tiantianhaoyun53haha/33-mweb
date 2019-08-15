// 1 定义默认的购物车数据
const defaultState = {
  carts: [{
    id: 11,
    title: "飞利浦",
    img_url: "http://react.zbztb.cn/upload/201504/20/thumb_201504200119256512.jpg",
    num: 1,
    checked: true,
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
  return state;
}