<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item>
        <div slot="item-text">
          网易云音乐
        </div>
        <div slot="item-button">
          <van-button round type="default" @click="login">立即登录</van-button>
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/Tabbar' 
import TabBarItem from 'components/common/tabbar/TabbarItem'

export default {
  name: 'MainTabBar',
  methods: {
    login() {
      this.$router.push("/login")
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  .main-tab-bar {
    position: relative;
    z-index: 99;
  }
</style>