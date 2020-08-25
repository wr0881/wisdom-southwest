<template>
  <div id="app" class="bg_index">
    <router-view v-if="isRouterAlive" :key="this.$route.path"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload,
      //bg2: bg2
    }
  },
  data() {
    return {
      isRouterAlive: true,
      childInfo: '',
      bg1: require('./assets/app_bg.jpg'),
      bg2: require('./assets/imgs/party/bg_party.png'),
    }
  },
  mounted() {
    
  },
  methods: {
    reload () {
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true
      })
    },
    // getChildInfo(pageInfo) {
    //   this.childInfo = pageInfo;
    //   console.log('子页面传来的页面信息', this.childInfo);
    //   if(this.childInfo === 'party' || this.childInfo === 'party3') {       
    //     document.getElementById('app').style.background='url('+this.bg2+') no-repeat'
    //     document.getElementById('app').style.backgroundSize='100% 100%'
    //   }else{
    //     document.getElementById('app').style.background='url('+this.bg1+') no-repeat'
    //     document.getElementById('app').style.backgroundSize='100% 100%'
    //   }
    // }
  },
}
</script>

<style>
@import './common/font/font.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
}
.bg_index {
  width: 100vw;
  height:100vh;
  background-size: 100% 100%;
  position: relative;
  overflow: hidden;
}
.lizi {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
body {
  margin: 0;
  font-family: LED, AgencyFB;
}
</style>
