<template>
  <div id="app">
    <ym-svg
      @click="handleClick"
      svgName="logo"
      className="app-svg"/>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      console.log('test click!!!');
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
