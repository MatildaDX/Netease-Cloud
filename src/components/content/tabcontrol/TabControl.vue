<template>
  <div class="tab-control">
    <div v-for="(item, index) in titels" :key="index">
      <span @click="titelShow(index)"
            :class="{active: index === isActive}">
      {{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data () {
    return {
      isActive: 0  
    }
  },
  methods: {
    titelShow(index) {
      this.isActive = index
      // 通知 父组件 tab栏发生了切换, 并传值
      this.$emit('tabclick', index)
    }
  },
  props: {
    titels: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>

  .tab-control {
    display: flex;
    text-align: center;
    line-height: 50px;
    z-index: 99;
    font-size: 14px;
    color: #FFF;
    background-color: #D44439;
  }

  .tab-control div {
    flex: 1;
  }

  .tab-control div span {
    padding: 5px;
  }

  .active {
    color: #FFF;
    border-bottom: 2px solid #FFF;
  }
</style>