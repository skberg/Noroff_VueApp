<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> 
    <h1>Hello im Vue.js</h1>
       <router-view></router-view>
  
  </div>
</template>

<script>


export default {
  name: 'app',
 components:{}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #22313f;
  margin-top: 60px;
}
#app:hover{
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #22313f;
  margin-top: 60px;
}

</style>
