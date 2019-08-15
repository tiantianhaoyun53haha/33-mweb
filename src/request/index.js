import Axios from "axios";

// 定义公共的url 
Axios.defaults.baseURL = 'http://react.zbztb.cn/site';

// 拦截器 请求前
// 拦截器 请求成功之后 拦截 
Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response.data.message
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export const getSliderList = () => Axios.get("/goods/gettopdata/goods");
export const getCatesList = () => Axios.get("/goods/getgoodsgroup");