import { ITEM_CHANGE, ITEM_ALL_CHECK, ITEM_NUM_UPDATE, ITEM_REMOVE } from "../actionTypes";

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