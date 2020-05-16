<template>
  <div>
    <!-- 轮播图 -->
    <div class="swiper-main">
      <home-swiper class="home-swiper" :banners= "banners"></home-swiper>
    </div>
    <div class="content-main" >
      <song-list :title="'推荐歌单'" :songData="personalized"></song-list>
      <song-list :title="'推荐歌曲'" :songData="reSongs" :isSong="false"></song-list>
    </div>
  </div>
</template>

<script>
import { getBanners,
         getPersonalized, 
         getSongs,
         getReSongs
} from "network/home/home"

import HomeSwiper from './childComprs/ReSwiper'
import SongList from 'components/common/songlist/SongList'

export default {
  name: 'Recommend',
  data () {
    return {
      // 储存每日推荐歌曲
      reSongs: [],
      // 储存轮播图数据
      banners: [],
      // 储存推荐歌单数据
      personalized: [],
      // 储存每日推荐歌曲
      songs: []  
    }
  },
  methods: {
    // 获取每日推荐歌曲
    async getReSongs() {
      const res = await getReSongs()
      if (res.code !== 200) return this.$notify("网络连接失败!");
      this.reSongs = res.data.dailySongs.splice(0, 9)
      for (let i = 0; i < this.reSongs.length; i++) {
        // 获取歌曲封面
        this.reSongs[i].picUrl = this.reSongs[i].album.picUrl;
        // 获取歌曲歌手
        this.reSongs[i].songName = this.reSongs[i].artists[0].name;
      }
      console.log(this.reSongs);
    },
    // 获取每日推荐歌单
    async getPersonalized() {
      const res = await getPersonalized()
      if (res.code !== 200) return this.$notify("网络连接失败!")
      this.personalized = res.result
    },
    // 获取轮播图数据
    async getBanners() {
      const res = await getBanners()
      if (res.code !== 200) return this.$notify("网络连接失败!");
      this.banners = res.banners
    },
  },
  created () {
    this.getBanners();
    this.getPersonalized();
    this.getReSongs();
  },
  components: {
    HomeSwiper,
    SongList
  }
}
</script>

<style scoped>
  .swiper-main {
    position: relative;
    height: 135px;
  }

  .content-main {
    position: relative;
    top: 15px;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: #F2F3F4;
    
  }

  .home-swiper {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    z-index: 999;
    height: 150px;
    border-radius: 10px;
    overflow: hidden;
  }
</style>