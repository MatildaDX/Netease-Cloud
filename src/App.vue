<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>>

<style>
  @import 'assets/css/base.css';
  #app {
    background-color: #D44439;
  }
</style>
