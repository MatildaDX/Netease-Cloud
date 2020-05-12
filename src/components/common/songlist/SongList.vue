<template>
  <div class="recommend-personal">
    <h1 class="title">推荐歌单</h1>
    <div class="content">
      <div class="song-list">
        <van-row  gutter="10">
          <van-col span="8" v-for="(item, index) in songData" :key="index" class="item">
            <div class="item-content">
              <img v-lazy="item.picUrl" alt="">
              <span class="item-name">{{ item.name }}</span>
              <div class="item-icon">
                <van-icon name="audio">{{ item.playCount | fullPlayCount }}</van-icon>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    songData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    fullPlayCount(playCount) {
      return parseInt(playCount / 10000) + '万'
    }
  }
}
</script>

<style scoped>
  
  .recommend-personal {
    background-color: #f2f3f4;
  }

  .title{
    height: 55px;
    line-height: 65px;
    padding-left: 1.5%;
    text-align: left;
    font-size: 14px;
    font-weight: 700;
    color: #2e3030;
  }

  .content {
    padding: 5px;
  }

  .item {
    position: relative;
    display: inline-block;
    height: 180px;
  }

  .item-content {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  .item-content img{
    width: 100%;
    height: 130px;
    border-radius: 5px;
  }

  .item-name {
    width: 100%;
    font-size: 10px; 
  }

  .item-icon {
    position: absolute;
    top: 5px;
    right: 10px;
    line-height: 10px;
    color: #FFF;
    font-size: 8px;
  }

  .van-icon::before {
    display: inline-block;
    position: absolute;
    top: 1px;
    left: -15px;
  }
</style>