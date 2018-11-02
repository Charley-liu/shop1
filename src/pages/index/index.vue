<template>
  <div class="container">
    <!-- 搜索区 -->
    <div class="page__bd">
      <div class="weui-search-bar">
        <div class="weui-search-bar__form">
          <div class="weui-search-bar__box">
            <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
            <input type="text" class="weui-search-bar__input" placeholder="搜索" v-model="inputVal" :focus="inputShowed" @input="inputTyping" />
            <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput">
              <icon type="clear" size="14"></icon>
            </div>
          </div>
          <label class="weui-search-bar__label" :hidden="inputShowed" @click="showInput">
            <icon class="weui-icon-search" type="search" size="14"></icon>
            <div class="weui-search-bar__text">搜索</div>
          </label>
        </div>
        <div class="weui-search-bar__cancel-btn" :hidden="!inputShowed" @click="hideInput">取消</div>
      </div>
      <div class="weui-cells searchbar-result" v-if="inputVal.length > 0">
        <navigator url="" class="weui-cell" hover-class="weui-cell_active">
          <div class="weui-cell__bd">
            <div>实时搜索文本</div>
          </div>
        </navigator>
      </div>
    </div>
    <!-- 轮播区 -->
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
      <block v-for="(item, key) in movies" :index="index" :key="key">
        <swiper-item>
            <img :src="item.url" class="slide-image" mode="aspectFill"/>
        </swiper-item>
      </block>
    </swiper>
    <div class="weui-grids color">
      <a href="" @click="bindViewTap()" class="weui-grid js_grid" v-for="(grid,index) in grids" :key="index">
        <div class="weui-grid__icon">
          <img :src="grid.url" alt="" style="width:100%;height:100%;">
        </div>
        <p class="weui-grid__label">{{grid.val}}</p>
      </a>
    </div>
    <!-- 公告 -->
    <div class="weui-cells" style="margin-top:10px;">
      <a href="" class="weui-cell weui-cell_access" id="padding">
        <div class="weui-cell__hd">
          <img src="../../../static/img/Notice.png" alt="" style="width:20px;height:20px;margin-right:10px;display:block"/>
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <p>通知</p>
        </div>
        <span class="weui-cell__ft jiao"></span>
      </a>
    </div>
    <!-- 商品展示区 -->
    <div class="page flex js_show">
      <div class="page__bd page__bd_spacing">
        <div class="weui-flex">
          <div class="weui-flex__item">
            <div class="placeholder background" v-for="(ev,index) in lists" :key="index">
              <div class="index_title "><i :class="ev.class"></i>{{ev.text}}</div>
              <div class="index_content"></div>
            </div>
          </div>
        </div>
        <div class="weui-flex border">
          <div class="weui-flex__item">
            <div class="placeholder">
              <div class="border">
                <div class="border_title"><i class="up_new"></i>新品上架</div>
                <div class="border_content">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->
    <!-- <button class="weui_btn">点击</button> -->
    <!-- <a href="/pages/counter" class="counter">去往Vuex示例页面</a>-->
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      
      inputShowed: false,
      inputVal: '',
      movies:[
        {url:'../../static/image/1.jpg',key:0},
        {url:'../../static/image/2.jpg',key:1},
        {url:'../../static/image/3.jpg',key:2},
        {url:'../../static/image/4.jpg',key:3}
      ],
      lists: [
        { key: 0, text: '品牌专区', val: 0 ,url:'',class:'logo_img'},
        { key: 1, text: '商家推荐', val: 1 ,url:'',class:'title_img'},
        { key: 2, text: '热品推荐', val: 2 ,url:'',class:'hot_img'},
      ],
      grids:[
        { href:'', url:'../../static/img/life.png', val:'生活'},
        { href:'', url:'../../static/img/servise.png', val:'服务'},
        { href:'', url:'../../static/img/dayly.png', val:'日常'},
        { href:'', url:'../../static/img/gocar.png', val:'出行'},
        { href:'', url:'../../static/img/phone.png', val:'通信'},
        { href:'', url:'../../static/img/mony.png', val:'理财'}
      ]
    }
  },

  components: {
    card
  },
  methods: {
    bindViewTap () {
        const url = '/packageA/Product/Product'
        wx.navigateTo({ url })
    },
    showInput () {
      this.inputShowed = true
    },
    hideInput () {
      this.inputVal = ''
      this.inputShowed = false
    },
    clearInput () {
      this.inputVal = ''
    },
    inputTyping (e) {
      // console.log(e);
      this.inputVal = e.mp.detail.value
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>
.color{
  background-color: #fff;
}
/* 公告 */
#padding{
  padding-left: 15px;
  margin-right: 15px;
}
.jiao{
    content: " ";
    display: inline-block;
    height: 6px;
    width: 6px;
    border-width: 2px 2px 0 0;
    border-color: #C8C8CD;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: 2px;
}
.container{
  background-color: #fdfdfd;
}
/* 面板样式和背景图片 */
.index_title{
  height: 40px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  line-height: 40px;
}
.logo_img{
  display: inline-block;
  width: 25px;
  height: 19px;
  background: url('../../../static/img/logo_new.png')  no-repeat;
}
.title_img{
  display: inline-block;
  width: 25px;
  height: 19px;
  background: url('../../../static/img/shop_new.png')  no-repeat;
  
}
.hot_img{
  display: inline-block;
  width: 25px;
  height: 19px;
  background: url('../../../static/img/hot.png')  no-repeat;
}
/* 面板内容区 */
.index_content{
  background-color: #fff;
  height: 400px;
}
/* 新品上架 */
.border{
  height: 40px;
  border-top:1px solid #e5e5e5;
  background-color: #fff;
  margin-top: 20px;
}
.border_title{
  text-align: center;
  width: 140px;
  height: 40px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: -16px;
}
.up_new{
  display: inline-block;
  width: 25px;
  height: 20px;
  background: url('../../../static/img/new.png')  no-repeat;
}
.border_content{
  height: 400px;
}

/* .placeholder{
margin: 5px;
    padding: 0 10px;
    background-color: #ebebeb;
    height: 200px;
    line-height: 2.3em;
    text-align: center;
    color: #cfcfcf; 
} */
.page__bd{
  width: 100%;
}
.searchbar-result {
  margin-top: 0;
  font-size: 14px;
}
.weui-search-bar{
  position: fixed;
  z-index: 999;
  width: 100%;
  opacity:0.8;
}
.searchbar-result:before {
  display: none;
}
.weui-cell {
  padding: 12px 15px 12px 35px;
}
/* 轮播 */
.swiper{
  height: 290px;
  width:100%;
}
.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.container{
  background-color: #ddd;
}
.background{
  background-color: #fff;
  margin-top: 10px;
}
</style>
