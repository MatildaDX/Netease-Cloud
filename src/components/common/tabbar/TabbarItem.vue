<template>
  <div class="tab-bar-item">
    <div class="left">
      <slot name="item-text"></slot>
    </div>
    <div class="right">
      <slot name="item-button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabbarItem'
}
</script>

<style scoped>
  .tab-bar-item {
    position: relative;
  }

  .right, .left{
    position: absolute;
    width: 50%;
    text-align: center;
    line-height: 50px;
  }

  .left {
    color: #FFFFFF;
    left: 0;
  }

  .right {
    right: 0;
  }

  .right button {
    height: 30px;
  }
</style>