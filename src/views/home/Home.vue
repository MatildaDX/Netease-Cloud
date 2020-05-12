<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar>
      <div slot="left" class="left">
        <van-icon name="wap-nav" class="cate-icon wap-nav"/>
      </div>
      <div slot="center" class="center">网易云音乐</div>
      <div slot="right" class="right">
        <van-icon name="search" class="cate-icon search"/>
      </div>
    </nav-bar>
    <tab-control :titels="['推荐', '排行', '歌手']" @tabclick="tabclick"></tab-control>
    <div class="decorate"></div>
    <!-- 页面主体内容 -->
    <scroll class="content" 
          :pullUpLoad="true" 
          @scrollTopData="scrollTopData"
          :class="{content_active: isLogin}">
      <router-view></router-view>
    </scroll>
    <!-- 底部栏 -->
    <main-tab-bar :class="{is_login: isLogin}"></main-tab-bar>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import NavBar from 'components/common/navbar/Navbar'
import TabControl from 'components/content/tabcontrol/TabControl'
import Recommend from 'views/recommend/Recommend'
import MainTabBar from 'components/content/mainTabbar/MainTabBar' 

export default {
  name: 'Home',
  data () {
    return {
      isTabActive: 0,
      isLogin: false
    }
  },
  methods: {
    // tab栏切换
    tabclick(index) {
      this.isTabActive = index
    },
    // 上拉加载更多
    scrollTopData() {
      console.log("上拉加载更多");
    }
  },
  created () {
    const token = window.sessionStorage.getItem("token");
    if (token) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
  },
  components: {
    Scroll,
    NavBar,
    TabControl,
    Recommend,
    MainTabBar
  }
}
</script>

<style scoped>

  .is_login {
    display: none;
  }

  .content_active {
    height: calc(100vh - 94px) !important;
  }

  .home {
    position: relative;
    height: 100vh;
    background-color: #FFF;
  }

  .content {
    height: calc(100vh - 144px);
    overflow: hidden;
    background-color: #ffffff;
    padding-bottom: 44px;
    text-align: center;
    z-index: 99;
  }

  .cate-icon {
    position: absolute;
    font-size: 20px;
    padding-left: 10px;
  }
  
  .wap-nav {
    top: 11px;
    left: 5px;
  }
  
  .search {
    top: 11px;
    right: 10px;
  }

  .decorate {
    position: absolute;
    width: 100%;
    height: 50vh;
    margin-bottom: 44px;
    background-color: #D44439;
  }

</style>