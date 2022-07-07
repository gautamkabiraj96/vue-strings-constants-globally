<template>
  <div id="app">
    <h1>{{ $stringConstants("myTitle") }}</h1>
    <h3>{{ $stringConstants("myDescription") }}</h3>
    <div class="np-credits">wwww.nightprogrammer.com</div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 24px;
}

.np-credits {
  font-size: 12px;
  margin-top: 12px;
  color: #4b4b4b;
}
</style>