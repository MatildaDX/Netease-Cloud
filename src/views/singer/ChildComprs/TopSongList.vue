<template>
  <div class="top-song-list">
    <ul>
      <li v-for="(value, key, index) in topSongData" :key="index" >
          <div class="code">{{ key  }}</div>
          <ul class="song-list">
            <li class="song-list-item" v-for="(item, index) in value" :key="index">
              <img v-lazy="item.picUrl" alt="" width="50" height="50">
              <span>{{ item.name }}</span>
            </li>
          </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopSongList',
  data () {
    return {
    }
  },
  props: {
    topSongData: {
      type: Object,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .top-song-list {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .code {
    height: 30px;
    text-align: left;
    font-size: 14px;
    line-height: 30px;
    background-color: #d9dadb;
    padding-left: 10px;
  }

  .song-list-item {
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    padding: 5px 0;
    margin: 0 5px;
    border-bottom: 1px solid #e4e4e4;
  }

  .song-list-item span{
    padding-left: 20px;
    font-size: 14px;
  }

</style>