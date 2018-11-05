<template>
  <div class="counter-warp">
    <div class="shop_car_title">
      <span class="shop_car_titlename margin-left">微商城</span><span class="shop_car_titleoption margin-right">完成</span>
    </div>
    <span class="weui-badge">New</span>
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="" class="home">去往首页</a>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState([
      'count'
    ])
  },
  methods: {
    ...mapMutations([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.counter-warp{
  background-color: #f8f8f8;
}
.shop_car_title{
  height:50px;
}
.shop_car_titlename{
  float: left;
}
.shop_car_titleoption{
  float: right;
}
.margin-left{
  margin-left:15px;
  font: 0.75em sans-serif;
  line-height: 50px;
}
.margin-right{
  margin-right: 15px;
  font: 0.75em sans-serif;
  line-height: 50px;
}
</style>
