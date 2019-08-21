<template>
  <div id="app">
    <HomeNavbar />

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import HomeNavbar from '@/components/header/home_navbar';

export default {
  name: 'default',
  components: {
    HomeNavbar,
  },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

#id {
  font-family: 'Open Sans', sans-serif;
}

.container {
  max-width: 1280px;
  margin: auto;
  margin-top: 9px;
  color: #000;
  border: 1px solid red;
}
</style>
