<template>
  <HeaderCom/>
  <router-view></router-view>
  <FooterCom/>
</template>

<script lang="ts">
import HeaderCom from './components/HeaderCom.vue';
import FooterCom from './components/FooterCom.vue';

export default {
  name: 'App',
  components: {
    HeaderCom,
    FooterCom,
  }
};
</script>

<!-- scss写样式更方便 -->
<style lang="scss"> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
