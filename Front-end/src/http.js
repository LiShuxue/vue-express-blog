import axios from 'axios';
import store from './store/store';

// axios 默认配置
axios.defaults.timeout = 5000;

//添加请求拦截器
axios.interceptors.request.use( 
    config=>{
        if(store.state.common.token){
            config.headers.Authorization = store.state.common.token;
        }else{
            config.headers.Authorization = localStorage.token;
        }
        return config;
    }, 
    error=>{
        return Promise.reject(error);
    }
);

//添加响应拦截器
axios.interceptors.response.use( 
    response=>{
        return response;
    }, 
    error=>{
        return Promise.reject(error);
    }
);

export default axios;