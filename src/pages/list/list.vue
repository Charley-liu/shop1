<template>
    <div class="list_content">
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
        <div class="weui-actionsheet__menu">
            <div class="nav_lists weui-cells" >
                <a class="weui-cell weui-cell_access" v-for="list_data in list" :key="list_data.key">
                    <div class="weui-cell__bd">
                        <p>{{list_data.name}}</p>
                    </div>
                    <div class="weui-cell__ft"></div> 
                </a>
            </div>
        </div>
        <div class="weui-actionsheet__content">
            <ul>
                <li class="content_list" v-for="list_i in list" :key="list_i.key">{{list_i.name}}</li>
            </ul>
            <!-- <div class="content_right"></div> -->
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      inputShowed: false,
      inputVal: "",
      list: [
        { name: "生活用品", key: 1, val: 1 },
        { name: "精品服饰", key: 2, val: 1 },
        { name: "食品", key: 3, val: 1 },
        { name: "饮料", key: 4, val: 1 },
        { name: "出行", key: 5, val: 1 },
        { name: "娱乐", key: 6, val: 1 },
        { name: "服务", key: 7, val: 1 },
        { name: "商务", key: 8, val: 1 },
        { name: "金融", key: 9, val: 1 },
        { name: "金融", key: 10, val: 1 },
        { name: "金融", key: 11, val: 1 },
        { name: "金融", key: 12, val: 1 },
        { name: "金融", key: 13, val: 1 },
        { name: "金融", key: 14, val: 1 },
        { name: "金融", key: 15, val: 1 },
        { name: "金融", key: 16, val: 1 }
      ]
    };
  },
  methods: {
    showInput() {
      this.inputShowed = true;
    },
    hideInput() {
      this.inputVal = "";
      this.inputShowed = false;
    },
    clearInput() {
      this.inputVal = "";
    },
    inputTyping(e) {
      // console.log(e);
      this.inputVal = e.mp.detail.value;
    }
  }
};
</script>
<style scoped>
.page__bd{
    position: fixed;
    z-index: 999;
    width: 100%;
}
.list_content {
  background-color: #ddd;
  height: 100%;
  width: 100%;
}
.weui-actionsheet__menu {
  height: 100%;
  width: 30%;
  float: left;
  position: fixed;
}
.nav_lists {
  height: 100%;
  overflow-y: scroll;
  width: 99%;
  margin-top: 48px;
}
.weui-actionsheet__content{
    width: 70%;
    height: 100%;
    float: right;
    margin-top: 48px;
    overflow: hidden;
    border-bottom: 1px solid #000;
}
.content_list{
    width: 49.5%;
    height: 100px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    background-color: azure;
    float: left;
    
}
.content_right{
    height: 100%;
    width: 50%;
    background-color: aquamarine
}
.scroll {
  margin-bottom: 60px;
}
</style>
