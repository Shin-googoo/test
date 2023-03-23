<template>
    <div>
      <h1>자식 컴포넌트 Happy,{{test}} </h1>
      <Child username="임시" age="20" my-address="서울" />
    </div>
</template>

<script>
import Child from './Child.vue' //1.불러오기

export default {
    name:'Happy', //name:'컴포넌트명' <Happy />
    props:{
        test:String //전달받을때 사용
    },
    components:{ //자식컴포넌트 등록
       Child
    }
}
</script>

<style>

</style>