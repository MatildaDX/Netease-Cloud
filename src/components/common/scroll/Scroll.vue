<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 引入better-scroll插件
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    // 根据传值来设置是否可以上拉/下拉
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  methods: {
    getFinishPullUp() {
      this.scroll.finishPullUp()
    }
  },
  mounted () {
    // 创建一个scroll组件
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: this.pullUpLoad
    }),
    // 上拉加载更多
    this.scroll.on('pullingUp', () => {
      // 发射事件给父组件 通知加载更多数据
      this.$emit('scrollTopData')
      // 重置
      this.scroll.finishPullUp()
    })
  }
}
</script>

<style scoped>
  .content {
    overflow: hidden;
  }
</style>