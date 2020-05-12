<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    background-color: #D44439;
  }

  .nav-bar div {
    position: relative;
    flex: 1;
    width: 100%;
    text-align: center;
    line-height: 44px;
    color: #FFFFFF;
  }
</style>