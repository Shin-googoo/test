<template>
    <div class="hello">
      <h1>Baz</h1>
      {{pw}}
      {{id}}
    </div>
</template>

<script>
export default {
    name:'Baz',
    props:{
        pw:String,
        id:String
    }
}
</script>
<style scoped>

</style>