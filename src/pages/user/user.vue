<template>
    <div>
        <div class="userinfo" @click="bindViewTap">
            <!-- <button open-type="getUserInfo">点击调用</button> -->
            <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
            <div class="userinfo-nickname">
                <card :text="userInfo.nickName"></card>
            </div>
        </div>
        <div>{{user}}</div>
    </div>
</template>
<script>
import card from '@/components/card'
export default {
    data(){
        return {
            user:"测试",
            userInfo: {}
        }
    },
    components: {
    card
    },
    methods:{
        bindViewTap () {
        const url = '/packageA/logs/logs'
        wx.navigateTo({ url })
        },
        getUserInfo () {
        // 调用登录接口
        
        wx.login({
            success: () => {
            wx.getUserInfo({
                success: (res) => {
                    console.log(res)
                this.userInfo = res.userInfo
                }
            })
            }
        })
        },
        
        clickHandle (msg, ev) {
        // eslint-disable-next-line
        console.log('clickHandle:', msg, ev)
        }
        
    },
    created () {
    // 调用应用实例的方法获取全局数据
        // wx.setNavigationBarTitle({  
        //     title:'修改后的导航'  
        // })
    this.getUserInfo()
    }
}
</script>
<style scoped>
    .userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}
</style>