import { ITEM_CHANGE, ITEM_ALL_CHECK } from "../actionTypes";

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