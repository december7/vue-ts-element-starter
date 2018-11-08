import axios from 'axios';
import { Message, MessageBox } from 'element-ui';
import { getToken } from '@/utils/auth';
import { UserModule } from '@/store/modules/user';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? process.env.API_SERVER
    : '',
  timeout: 5000,
});

// request 拦截器
service.interceptors.request.use(
  (config) => {
    config.headers.Accept = 'application/json';
    if (UserModule.token) {
      config.headers.Authorization = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config;
  },
  (error) => {
    // Handle request error here
    Promise.reject(error);
  },
);

// respone 拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非0是抛错 可结合自己业务进行修改
     */
    // 业务逻辑错误
    if (response.data.code !== 0) {
      // Token失效
      if (response.data.code === 12) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning',
          },
        ).then(() => {
          UserModule.LogOut().then(() => {
            location.reload(); // 为了重新实例化vue-router对象 避免bug
          });
        });
      } else {
        Message({
          message: response.data.message,
          type: 'error',
          duration: 5 * 1000,
        });
      }
    }
    return response.data;
  }, (error) => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);

export default service;
