<template>
  <div class="top-list">
    <top-rank :rankData="topListData"></top-rank>
  </div>
</template>

<script>  
import { getTopList } from "network/home/home"
import TopRank from './childComprs/TopRank'

// 需要展示的榜单
const YUNMUSIC_TOP = [0, 1, 2, 3, 4, 22, 23, 33, 5]

export default {
  name: 'TopList',
  data() {
    return {
      // 歌单排行榜数据
      topListData: []
    }
  },
  methods: {
    // 获取歌曲榜单
    async getTopList(idx) {
      for (let i = 0; i < YUNMUSIC_TOP.length; i++) {
        const res = await getTopList(i)
        let list = res.playlist
        // 只获取前三位展示
        list.top = res.playlist.tracks.slice(0, 3)
        this.topListData.push(list)
      }
    }
  },
  created() {
    this.getTopList();
  },
  components: {
    TopRank
  }
}
</script>

<style>
  .top-list {
    position: relative;
    z-index: 99;
    width: 100%;
    height: 100%;
    background-color: #F2F3F4;
  }
</style>