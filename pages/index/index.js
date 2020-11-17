import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

const app = getApp()
const btns = [{
  name: "del",
  title: "删除"
}]
Page({
  data: {
    headers: [{
        name: 'equcode',
        title: '设备代码',
        width: 200
      },
      {
        name: 'equname',
        title: '设备名称'
      },
      {
        name: 'useorgname',
        title: '使用单位'
      },
      {
        name: 'productno',
        title: '出厂编号'
      },
      {
        name: 'specification',
        title: '规格型号'
      },
      {
        name: 'c_equstatus',
        title: '状态'
      },
      {
        name: 'regcertno',
        title: '使用证编号'
      },
      {
        name: 'innerno',
        title: '内部编号'
      },
      {
        name: 'equuseaddress',
        title: '设备安装地址'
      },
      {
        name: 'btns',
        fixed: "right",
        title: "操作",
        btns: btns,
        formatter: (item) => btns
      } // 此处formatter是测试demo ，用于按钮自定义返回
    ],
    lists: {
      current_page: 1,
      extendMSG: {},
      from: 1,
      last_page: 1,
      per_page: 10,
      to: 1,
      total: 1,
      data: [{
        dangerequno: "154",
        dangerno: "4232",
        datasource: null,
        dealunitname: null,
        dealunitno: null,
        equcode: "4323",
        equname: "电动单梁起3重机",
        equno: "34234",
        equstatus: "143",
        equuseaddress: "湖北省黄石市阳新县",
        id: "5444",
        innerno: "/",
        productno: "5",
        regcertno: "/",
        specification: "ADSAFDS",
        useorgname: "阳新民生机械设备有限公司",
        useorgno: "7"
      }]
    }
  },
  onLoad: function () {
    console.log('代码片段是一种迷你、可分享的小程序或小游戏项目，可用于分享小程序和小游戏的开发经验、展示组件和 API 的使用、复现开发问题和 Bug 等。可点击以下链接查看代码片段的详细文档：')
    console.log('https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/devtools.html')
  },
  del(){
    Notify({ type: 'primary', message: '删除' });
  }
})