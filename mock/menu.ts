import { Request, Response } from 'express';
import routes from '../config/routes';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

//await waitTime(2000); 模拟延时

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
 // GET POST 可省略
  'GET /api/menu': routes,
};