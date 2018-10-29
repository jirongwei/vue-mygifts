<template>
  <div id="app">

    <!--页面导航-->
    <div class="container-fluid">
      <nav-main v-if="showNav"></nav-main>
    </div>

    <router-view @flushnav="flushnav"/>

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
      isRouterAlive: true,
      showNav: true
    }
  },
  methods:{
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(()=> {
        this.isRouterAlive = true
      })
    },
    flushnav: function () {
      this.showNav = false;
      this.$nextTick(()=>{
        this.showNav = true;
      })
    }
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
