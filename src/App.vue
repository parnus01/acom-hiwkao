<template>
  <div id="app">
    <img class="app-logo" src="./assets/acommerce.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app-logo {
  width: 12%;
}

</style>
<style lang="scss">
$fa-font-path: "~font-awesome/fonts";
@import '~font-awesome/scss/font-awesome';
@import '~bulma/sass/utilities/_all';
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
