# tw-table
小程序表格组件，支持左右列定位，和自定义按钮
![GIF.gif](https://upload-images.jianshu.io/upload_images/5622382-c36bf39bbb14682d.gif?imageMogr2/auto-orient/strip)


基于vant weapp
1.支持左右定位显示
2.支持自定义按钮操作

参数 | 说明 | 类型 | 可选值 | 默认值
lists | 表格list数据,数据包含当前页码总条数等 | Object | - | {} | 
headList | 每个表格head列 | Array | -	[ {
title: "单列名", 
name: "列key",
fixed: "左右定位",
formatter：'自定义显示内容函数',
click:"点击事件名",
btns: "操作按钮",
}] | 
headList--fixed | "right"表格右边位置固定显示
“left”表格左边位置固定显示			
headList--btns: 
表格最后一行里面操作按钮的属性配置 | headList  -  btn   { label: '操作', name: 'btn', width: 120, fixed: 'right' }
所有表格数据的操作按钮都是由后台人员配置而来。配置什么名字就以配置的名字在table组件上  binddelete=“delete” 这样注册事件。参数会在注册事件的e.detail里面
因为操作按钮数据不是后后台提供，所以按钮数据基本需要由前端组装好			 | 
headList-click | headList-click  自定义事件回调 | 
比如在headList 声明后在得在table组件上面注册事件
回调参数（e.detail{包含当前行数据，当前行下标，当前操作项headlist的key}）			 | 
headList-formatter | headList-formatter  自定义显示内容-用来自定义显示“特殊场景请查看common/commonFn.wxs语法使用规范”			 | 
headList-width | headList---width    指定当前列的列宽。都默认给固定宽的情况就会默认自适应。当表格列太多的情况推荐每列给上适当的列宽		 | 	


参数 | 说明 | 类型 | 可选值 | 默认值
sizeChange | 当前页条数切换 | Function(val)/Number | - | -
pren | 上一页 | Function(val)/Number | - | -
next | 下一页 | Function() | - | -
close	关闭操作弹框事件响应 | Function() | - | -
