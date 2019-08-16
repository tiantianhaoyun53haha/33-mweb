import { ITEM_CHANGE, ITEM_ALL_CHECK, ITEM_NUM_UPDATE, ITEM_REMOVE, ITEM_ADD, LOADDING_TOGGLE } from "../actionTypes";

/**
 * 返回 切换选中商品的action
 * @param {number} id 要修改的商品的id
 */
export const itemChange = (id) => {
  return {
    type: ITEM_CHANGE,
    value: { id }
  }
}

/**
 * 返回 全选的状态的action
 * @param {boolean} checked 是否选中
 */
export const itemAllCheck = (checked) => {
  return {
    type: ITEM_ALL_CHECK,
    value: { checked }
  }
}



/**
 * 修改购物车的数量
 * @param {number} unit +1或者-1
 * @param {number} id 要操作的商品的id
 */
export const itemNumUpdate = (unit, id) => {
  // +1 -1 
  return {
    type: ITEM_NUM_UPDATE,
    value: { unit, id }
  }
}

/**
 * 删除 action
 * @param {number} id 要删除的商品的id
 */
export  const itemRemove=(id)=>{
  return {
    type:ITEM_REMOVE,
    value:{id}
  }
}

/**
 * 执行购物车的添加 或者增加数量
 * @param {object} goodsObj 要添加的商品对象
 */
export const itemAdd=(goodsObj)=>{
  return{
    type:ITEM_ADD,
    value:{goodsObj}
  }
}

/**
 * 控制全局的等待效果
 * @param {boolean} isShow 图片的是否显示
 */
export const loaddingToggle=(isShow)=>{
  return {
    type:LOADDING_TOGGLE,
    value:isShow
  }
}