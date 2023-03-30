/*
   Bar.vue,Foo.vue,NotFound.vue
*/
<template>
    <div><!-- $route.params.전달받은 매개변수명-->
     <h1>Foo</h1>
     <!-- {{$route.params.id}} -->
     <router-link to="/fooChild1">Foo child1</router-link>&nbsp;&nbsp;
     <router-link to="/fooChild2">Foo child2</router-link>
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