Component({
  properties: {
    total: Number,
    page: {
      type: Number,
      value: 1
    },
    pageSize: {
      type: Number,
      value: 10
    },
  },
  data: {
    list:[],
    left:'<',
    right:'>'
  },
  ready(){
    this.data.page
    this.changePage()
  },
  methods: {
    changePage(){
      let page = this.data.page,total = Math.ceil(this.data.total/this.data.pageSize),arr = []
      if(total <8 ){
        for (let i = 0; i < total; i++) {
          arr.push(i+1);
        }
      }else{
          if(page<5){
            arr = [1,2,3,4,5,6,0,total]
          }else  if(total-page<3){
            arr = [1,0,total-5,total-4,total-3,total-2,total-1,total]
          }else{
            arr = [1,0,page-2,page-1,page,page+1,page+2,0,total]
          }
      }
      this.setData({
        list:arr
      })
    },
    // 当前页
    setPage(e){
      let page = e.currentTarget.dataset.page
      this.setData({
        page:page
      })
      this.changePage()
      this.triggerEvent('pagination', {page:page,click:"sizeChange"})
    },
    // 上一页
    prev(){
      let page = this.data.page
      if(page == 1) return
      this.setData({
        page:page-1
      })
      this.changePage()
      this.triggerEvent('pagination', {page:page,click:"prev"})

    },
    // 下一页
    next(){
      let page = this.data.page,total = Math.ceil(this.data.total/this.data.pageSize)
      if(page == total) return
      this.setData({
        page:page+1
      })
      this.changePage()
      this.triggerEvent('pagination', {page:page,click:"next"})
    }
  }
});
