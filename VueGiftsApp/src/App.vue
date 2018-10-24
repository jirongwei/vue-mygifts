<template>
  <div id="app">

    <!--页面导航-->
    <div class="container-fluid">
      <nav-main></nav-main>
    </div>

    <router-view v-if="isRouterAlive"/>

    <nav-footer></nav-footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods:{
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
  }


}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f8fa;
  }

   .container-fluid{
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
