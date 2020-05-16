<template>
  <div class="top-rank">
    <ul class="top-ul">
      <li class="rank-list" v-for="(item, index) in rankData" :key="index">
        <div class="list-img">
          <img v-lazy="item.coverImgUrl">
        </div>
        <ul class="list-item">
          <li class="list-item-li" v-for="(song, index) in item.top" :key="index">
            <span>{{ index + 1  }}. </span>
            <span>{{ song.name }} - {{ song.ar[0].name }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TopRank',
  props: {
    rankData: {
      type: Array,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped>

  .top-ul {
    padding-top: 5px;
  }

  .list-item {
    width: 90%;
    height: 100px;
  }

  .rank-list {
    display: flex;
    margin-top: 5px;
    background-color: #F2F3F4;
    border-bottom: 1px solid #e4e4e4;
  }

  .list-item-li {
    font-size: 12px;
    line-height: 30px;
    height: 30px;
    overflow: hidden;
    text-align: left;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .list-item {
    padding: 0 20px;
  }

  .list-img {
    width: 100px;
    height: 100px;
  }

  .list-img img {
    width: 100px;
    height: 95px;
    border-radius: 5px;
  }

  .rank-list {
    width: 100%;
    height: 100px;
  }
</style>