<template>
  <div class="singer">
    <top-song-list :topSongData="letter"></top-song-list>
  </div>
</template>

<script>
import TopSongList from './ChildComprs/TopSongList'

import { getToprAtists } from 'network/home/home'
import { getWordCode } from 'plugin/ChinesePY'

export default {
  name: 'Singer',
  data () {
    return {
      // 前十歌手数据
      topSong: [],
      // 储存前五十歌手数据
      hotSongList: [],
      // 储存所有分类字母和对应数据
      letter: {
        A: [],
        B: [],
        C: [],
        D: [],
        E: [],
        F: [],
        G: [],
        H: [],
        I: [],
        J: [],
        K: [],
        L: [],
        M: [],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [],
        T: [],
        U: [],
        V: [],
        W: [],
        X: [],
        Y: [],
        Z: []
      }
    }
  },
  methods: {
    async getToprAtists(offset, limit) {
      // 获取数据
      const res = await getToprAtists(offset, limit);
      // 循环所有字母
      for (const item in this.letter) {
        // 循环所有歌手数据
        for (let i = 0; i < res.artists.length; i++) {
          // 如果数据的name首字母大写等于 item, 那么将数据存到item的子数组中
          if (getWordCode(res.artists[i].name).toUpperCase().substr(0, 1) === item) {
            this.letter[item].push(res.artists[i]);
          }
        }
      }
    },
    // 删除数组重复数据
    deleteData(array){
      var r = [];
      for(var i = 0, l = array.length; i < l; i++) {
        for(var j = i + 1; j < l; j++)
        if (array[i] === array[j]) j = ++i;
        r.push(array[i]);
      }
      return r;
    }
  },
  created() {
    this.getToprAtists(0, 100);
  },
  components: {
    TopSongList
  }
}
</script>

<style>
  .singer {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 99;
    overflow: hidden;
    background-color: #f2f3f4;
  }
</style>