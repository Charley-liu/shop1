<template>
  <div class="counter-warp">
    <div class="shop_car_list scroll" scroll-y="true">
      <ul class="shop_car_content">
        <li>
           <view class="separate"></view>
            <view v-for="(item,index) in carts" :key="item.price" class="border_bottom">
              <view class="cart_container">
                <image class="item-select" bindtap="switchSelect" :index="index" :data-id="index" :src="item.isSelect?'../../static/img/select.png':'../../static/img/no-select.png'" />

                <img class="item-image" :src="item.pic"/>

                <view class="column">
                  <text class="title">{{item.name}}</text>
                  <view class="row">
                    <text class="sku-price">￥</text>
                    <text class="sku-price">{{item.price}}</text>
                    <view class="sku">
                      <template :is="quantity" data="" />
                    </view>
                  </view>

                </view>
              </view>
              <view class="separate"></view>
            </view>
        </li>
      </ul>
      <!-- <p class="shop_car_bottom"></p> -->
    </div>
    <view class="bottom_total">
      <view class="bottom_line"></view>

      <view class="row">
        <image class="item-allselect" bindtap="allSelect" :src="isAllSelect?'../../static/img/select.png':'../../static/img/no-select.png'"/>
        <text class="small_text">全选</text>
        <text>合计:￥ </text>
        <text class="price">{{totalMoney}}</text>
        <button class="button-red" bindtap="toBuy" formType="submit">去结算</button>
      </view>
    </view>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data(){
    return {
      isAllSelect:false,
      totalMoney:0,
      // 商品详情介绍
      carts: [
        {
          pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg",
          name:"日本资生堂洗颜",
          price:200,
          isSelect:false,
          // 数据设定
          count: {
            quantity: 2,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
          name: "倩碧焕妍活力精华露",
          price: 340,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
          name: "特效润肤露",
          price: 390,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 3,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
          name: "倩碧水嫩保湿精华面霜",
          price: 490,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            min: 1,
            max: 20
          },
        },
        {
          pic: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
          name: "兰蔻清莹柔肤爽肤水",
          price: 289,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 10,
            min: 1,
            max: 20
          },
        },
        {
          pic: "http://mz.djmall.xmisp.cn/files/product/20161201/148057921620_middle.jpg",
          name: "LANCOME兰蔻小黑瓶精华",
          price: 230,
          isSelect: false,
          // 数据设定
          count: {
            quantity: 1,
            min: 1,
            max: 20
          },
        },
      ]
    }
  },
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ]),
     handleQuantityChange(e) {
      var componentId = e.componentId;
      var quantity = e.quantity;
      this.data.carts[componentId].count.quantity = quantity;
      this.setData({
        carts: this.data.carts,
      });
    },
     // 去结算
    toBuy() {
      wx.showToast({
        title: '去结算',
        icon: 'success',
        duration: 3000
      });
      this.setData({
        showDialog: !this.data.showDialog
      });
    },
    allSelect: function (e) {
    //处理全选逻辑
      let i = 0;
      if (!this.data.isAllSelect)
      {
        for (i = 0; i < this.data.carts.length; i++) {
          this.data.carts[i].isSelect = true;
          this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price;
        }
      }
      else
      {
        for (i = 0; i < this.data.carts.length; i++) {
          this.data.carts[i].isSelect = false;
        }
        this.data.totalMoney=0;
      }
      this.setData({
        carts: this.data.carts,
        isAllSelect: !this.data.isAllSelect,
        totalMoney: this.data.totalMoney,
      })
    },
    //勾选事件处理函数  
    switchSelect: function (e) {
      // 获取item项的id，和数组的下标值  
      var Allprice = 0,i=0;
      let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index);
      this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
      //价钱统计
      if (this.data.carts[index].isSelect) {
        this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price;
      }
      else {
        this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price;
      }
    //是否全选判断
      for (i = 0; i < this.data.carts.length; i++) {
        Allprice = Allprice + this.data.carts[i].price;
      }
      if (Allprice == this.data.totalMoney)
      {
        this.data.isAllSelect=true;
      }
      else 
      {
        this.data.isAllSelect = false;
      }
      this.setData({
        carts: this.data.carts,
        totalMoney: this.data.totalMoney,
        isAllSelect: this.data.isAllSelect,
      })
    },
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
}
.counter-warp{
  background-color: #f8f8f8;
}
/* 商品列表 */
.shop_car_list{
  height: 100%;
  width: 100%;
  background-color: #ffff;
}
.shop_car_content{
  height: 110%;
}
.shop_car_content li{
  border-bottom: 1px solid #f8f8f8;
  margin-bottom: 60px;
}
.shop_car_bottom{
  height: 30px;
  background-color: #fff;
}



.cart_container {
  display: flex;
  flex-direction: row;
}
.scroll {
  margin-bottom: 60px;
}
.column {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.sku {
  margin-top: 60rpx;
  margin-left: 100rpx;
}
.sku-price {
  color: red;
  position: relative;
  margin-top: 70rpx;
}
.price {
  color: red;
  position: relative;
}
.title {
  font-size: 38rpx;
  margin-top: 40rpx;
}
.small_text {
  font-size: 28rpx;
  margin-right: 40rpx;
  margin-left: 10rpx;
}
.item-select {
  width: 40rpx;
  height: 40rpx;
  margin-top: 90rpx;
  margin-left: 20rpx;
}
.item-allselect {
  width: 40rpx;
  height: 40rpx;
  margin-left: 20rpx;
}
.item-image {
  width: 180rpx;
  height: 180rpx;
  margin: 20rpx;
}
.bottom_line {
  width: 100%;
  height: 2rpx;
  background: lightgray;
}
.bottom_total {
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  height: 120rpx;
  line-height: 120rpx;
  background: white;
}
.button-red {
  background-color: #f44336; /* 红色 */
}
button {
  position: fixed;
  right: 0;
  color: white;
  text-align: center;
  display: inline-block;
  font-size: 30rpx;
  border-radius: 0rpx;
  width: 30%;
  height: 120rpx;
  line-height: 120rpx;
}
.border_bottom{
  border-bottom: 1px solid #ddd;
}
</style>
