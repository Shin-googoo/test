<template>
    <div class="hello">
      <h1>Foo</h1>
      <router-link to="/fooChild1">Foo Child1</router-link>
      <router-link to="/fooChild2">Foo Child2</router-link>
      <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'Foo'
}
</script>
<style scoped>

</style>