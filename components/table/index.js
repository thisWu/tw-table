Component({
  properties: {
    // 表格渲染数据
    list: Object,
    // 表格显示数据格式
    headers: {
      type: Array,
      value: []
    },
    // 显示分页开关
    showPagination:{
      type: Boolean,
      value: true
    },
  },
  data: {
    show:false,           // 操作按钮显示开关
    isAutoWidth:false,    // 是否自动宽度
    arrWidth:[],          // 列宽度集合
    fixedLeft:[],         // 左侧需要定位列集合
    fixedRight:[],        // 右侧需要定位列集合
    fixedRightWidth:0,    // 右侧定位的显示区域宽度
    fixedLeftWidth:0,     // 左侧定位的显示区域宽度
    item:{},              // 当前操作对象
    index:0,              // 当前操作下标
  },
  ready(){
    this.isAutoWidth()
  },
  methods: {
    isAutoWidth(){
      let lists = this.data.headers,
      isAutoWidth = false,        //宽度状态
      arr = [],                   // 当前数据宽度
      fixedLeft = [],             // 需要左侧定位数据
      fixedRight = [],            // 需要右侧定位数据
      fixedRightWidth = 0,
      fixedLeftWidth = 0


      for (let i=0;i<lists.length;i++) {
        if(lists[i].width){     //  宽度
          isAutoWidth = true
          this.setData({
            isAutoWidth:true
          })
        }

        lists[i]['i'] = i
        if(lists[i].fixed){ 
          switch(lists[i].fixed){
            case 'left':        //  左定位
              fixedRight.push(lists[i])
              fixedLeft.unshift(lists[i])
            break;
            case 'right':       //  右定位
              fixedLeft.push(lists[i])
              fixedRight.unshift(lists[i])
            break;
          }
        }else{
          fixedLeft.push(lists[i])
          fixedRight.push(lists[i])
        }
      }
      if(isAutoWidth){
        for (let i=0;i<lists.length;i++) {
          if(lists[i].width){
            arr[i] = `${lists[i].width}rpx`
          }else{
            arr[i] = '200rpx'
          }
        }

        for (let i = 0; i < fixedRight.length; i++) {
          switch(lists[i].fixed){
            case 'left':        //  左定位
              let num = Number(arr[fixedLeft[i].i].replace('rpx',''))
              fixedLeftWidth =fixedLeftWidth+num
            break;
            case 'right':       //  右定位
              let numr = Number(arr[fixedRight[i].i].replace('rpx',''))
              fixedRightWidth= fixedRightWidth +numr
            break;
          }
        }
      }else{
        for (let i=0;i<lists.length;i++) {
            arr[i] = '100%'
        }
      }
      
      this.setData({
        fixedRightWidth:fixedRightWidth,
        fixedLeftWidth:fixedLeftWidth,
        arrWidth:arr,
          fixedLeft:fixedLeft,
          fixedRight:fixedRight
      })
    },
    // 显示当前数据的应该显示的操作按钮
    caozuo(e){
      let dataset = e.currentTarget.dataset,item = dataset.item,i = dataset.i,list = this.data[dataset.name][dataset.j].formatter(item)
      this.setData({
        item:item,
        index:i,
        btns:list,
        show:true
      })
    },
    // 列点击事件
    clcik(e){
      let data = e.currentTarget.dataset,item = data.item,head = data.head
      if(head.click){
        this.triggerEvent(head.click,{item:this.data.item,head:head,index:data.i})
      }
    },
    // 关闭所有弹框
    onClose(){
      this.setData({
        show:false
      })
    },
    // 操作事件分发
    handle(e){
      let click = e.currentTarget.dataset.click
      this.onClose()
      this.triggerEvent(click,{item:this.data.item,index:this.data.index})
    },
    // 分页事件响应（上一页，下一页，点击页）
    pagination(e){
      let data = e.detail
      this.triggerEvent(data.click, data)
    },
    // 关闭由操作事件打开操作弹框响应
    close(){
      this.triggerEvent('close', false)
    }
  }
});
