<template>
    <div>
      <h1>Child,{{username}} {{age}} {{myAddress}}</h1>
    </div>
</template>

<script>
export default {
   name:'Child',
   /*
    매개변수이름 중간에 -이 붙으면 인식X
    -을빼고 그 다음문자를 대문자로 만들어서 출력
   */
   props:['username','age','myAddress'] 
}
</script>

<style>

</style>