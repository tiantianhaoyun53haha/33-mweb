// 1 引入其他管理员
import cartReducer from "./cartReducer";
// 2 引入 管理员合并的函数
import {  combineReducers} from "redux";

// 3 导出
export default combineReducers({cartReducer});