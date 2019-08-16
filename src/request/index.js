import Axios from "axios";
import { loaddingToggle } from "../store/actionCreator";
import store from "../store";

let ajaxTimes = 0;
// 定义公共的url 
Axios.defaults.baseURL = 'http://react.zbztb.cn/site';

// 拦截器 请求前
Axios.interceptors.request.use(function (config) {
  ajaxTimes++;
  store.dispatch(loaddingToggle(true));
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 拦截器 请求成功之后 拦截 
Axios.interceptors.response.use(function (response) {
  ajaxTimes--;
  ajaxTimes === 0 && store.dispatch(loaddingToggle(false));
  // 对响应数据做点什么
  return response.data.message
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

/**
 * 获取首页轮播图和推荐商品
 */
export const getSliderList = () => Axios.get("/goods/gettopdata/goods");
/**
 * 获取首页-分类商品
 */
export const getCatesList = () => Axios.get("/goods/getgoodsgroup");


/**
 * 根据商品id获取商品详细信息
 * @param {any} id 商品的id
 */
export const getGoodsInfo = (id) => Axios.get("/goods/getgoodsinfo/" + id);