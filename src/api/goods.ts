import request from '@/utils/request';

// 获取类目信息
export function getCategoryList() {
  return request({
    url: '/mall/auth/CategoryList',
    method: 'get',
  });
}

// 获取商品列表
export function getProductList() {
  return request({
    url: '/mall/auth/ProductList',
    method: 'get',
  });
}

// 获取分组列表
export function getMallGroup() {
  return request({
    url: '/mall/auth/MallGroup',
    method: 'get',
  });
}

// 获取类目绑定的店铺额规格信息
export function getSkuInfoOfCategory() {
  return request({
    url: '/mall/auth/SkuInfoOfCategory',
    method: 'get',
  });
}
