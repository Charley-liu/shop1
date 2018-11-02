module.exports = [{
  path: 'pages/index/index' // 页面路径，同时是 vue 文件相对于 src 的路径
}, {
  path: 'pages/counter/counter',
  config: {
    navigationBarTitleText: "购物车"
  }
}, {
  path: 'pages/list/list',
  config: {
    navigationBarTitleText: "商品分类"
  }
}, {
  path: 'pages/user/user',
  // subPackage: true,
  config: {
    navigationBarTitleText: "我的"
  }
}, {
  path: 'packageA/Product/Product',
  subPackage: true,
  config: { // 页面配置，即 page.json 的内容
    navigationBarTitleText: '商品列表'
  }
}, {
  path: 'packageA/Detail/Detail',
  subPackage: true,
  config: { // 页面配置，即 page.json 的内容
    navigationBarTitleText: '商品详情'
  }
}, {
  path: 'packageA/logs/logs',
  subPackage: true,
  config: { // 页面配置，即 page.json 的内容
    navigationBarTitleText: '查看启动日志'
  }
}]
