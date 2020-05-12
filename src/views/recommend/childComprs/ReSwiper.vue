<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.imageUrl" :alt="item.typeTitle" @load="imgLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      isLoad: false  
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad() {
      // 只发送一次加载完成事件
      if (!this.isLoad) {
        this.$emit('imgHomeSwiper')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
</style>