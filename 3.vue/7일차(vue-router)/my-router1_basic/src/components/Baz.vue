<template>
    <div class="hello">
      <h1>Baz</h1>
      {{$route.params.id}}
      {{id}}
    </div>
</template>
<script>
export default {
    name:'Baz',
    props:{
      id:String
    }
}
</script>
<style scoped>

</style>