<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import main_mobile from './components/main.vue'
export default {
  name: 'App',
  components: {
    main_mobile
  },
  computed:{
  }
}
</script>


<style>
.mobile{
  position:relative;
  margin: 0 0 0 0 
}
*{
  text-decoration: none !important;
}
</style>
