<template>
    <div class="hello">
      <h1>Knu</h1>
      {{username}}<br>
      {{$attrs}}
    </div>
</template>
<script>
export default {
    name:'Knu',
    props:{
        username:String
    }
}
</script>
<style scoped>

</style>