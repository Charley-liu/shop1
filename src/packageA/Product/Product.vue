<template>
    <div>
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__hd">筛选测试</div>
            <div class="weui-panel__bd">
                <a href=""  @click="Go_Detail()" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                        <img src="../../../static/img/index.png" style="width:80px;height:80px;" class="weui-media-box__thumb" alt="">
                    </div>
                    <div class="weui-media-box__bd" style="width:50%">
                        <p class="weui-media-box__bd top">爱礼物口红</p>
                        <p class="weui-media-box__desc">月销售45笔</p>
                        <p class="weui-media-box__bt"><i class="icon_shop"></i><span>￥65</span><span class="money_d">￥75</span></p>
                    </div>
                    <div class="shop_car_box">
                        <i class="shop_car"></i>
                    </div>
                </a>
            </div>
        </div>
        <div class="weui-loadmore">
            <i class="weui-loading"></i>
            <span class="weui-loadmore__tips">正在加载</span>
        </div>
    </div>
</template>
<script>
export default {
    data (){
        return {
            list:'商品列表测试'
        }
    },
    methods:{
        Go_Detail(){
            let url='/packageA/Detail/Detail'
            wx.navigateTo({ url })
        }
    },
    created(){
        // console.log($)
    }
}
</script>
<style scoped>
.top{
    font-size: 17px;
}
.icon_shop{
    display: inline-block;
    width:18px;
    height:18px;
    background: url('../../../static/img/hot.png') no-repeat;
    margin-right: 5px;
}
.weui-media-box__bt{
    padding-top: 20px;
    width: 100%;
}
.money_d{
    color:#848689;
    font-size: 12px;
    text-decoration:line-through;
    margin-top: 4px;
    margin-left: 5px;
}
.shop_car_box{
    width: 50%;
}
.shop_car{
    text-align: right;
    display: block;
    float: right;
    width: 36px;
    height: 36px;
    background: url('../../../static/img/shop_car.png') no-repeat;
}
</style>
