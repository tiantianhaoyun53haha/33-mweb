// 1 引入根管理员
import reducer from "./reducer";
// 2 引入 仓库的生成器
import { createStore } from "redux";
// 3 把管理员和仓库一并导出
export default createStore(reducer);