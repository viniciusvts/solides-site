<template>
  <div class="hello">
    <h1>Home Landing Pages</h1>
    <ul>
      <li v-for="(route, index) in routes" :key="index">
        <router-link :to="{ name: route.name }">{{route.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      routes: null
    }
  },
  created () {
    this.routes = this.$router.options.routes
  }
}
</script>

<style scoped>
</style>
