<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <slot name="슬롯의 구분자기호"> -->
    <slot name="b"></slot>
    <slot name="a"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
