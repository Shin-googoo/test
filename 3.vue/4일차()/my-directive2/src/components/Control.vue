<template>
    <div class="hello">
       <h1>index 없이</h1>
       <!-- v-for="출력변수 in 배열명" :key="구분해서 출력할값 지정"-->
        <ul>
           <li v-for="name in names" :key="name">
               {{name}}
           </li>
        </ul>
       <h1>index 지정</h1>
    <!-- v-for="(출력변수,인덱스번호) in 배열명" :key="인덱스번호"-->
        <ul>
           <li v-for="(name,idx) in names" :key="idx">
               {{idx+1}} &nbsp; {{name}}
           </li>
        </ul>  
    <hr />
    <h1>객체인데 index 없이 출력</h1>
     <ul><!--v-for=(출력할값,키명) in 객체명  :key="키명"-->
      <li v-for="(v,k) in person" :key="k">
          {{k}} &nbsp;{{v}}
      </li>
     </ul>
    <h1>객체인데 index값 출력</h1>
     <ul><!--v-for=(출력할값,키명,인덱스번호) in 객체명  :key="인덱스번호"-->
      <li v-for="(v,k,idx) in person" :key="idx">
        {{idx+1}} &nbsp;{{k}} &nbsp;{{v}}
      </li>
     </ul>
    </div>
</template>
<script>
export default {
  name:'Control',
  data:function(){
      return{
          //1.배열=>v-for
        names:['임시','테스트','테스트2'],
          //2.객체
        person:{
            username:'테스트33',
            age:30,
            sal:150,
            job:'대리'
        }//person
      }
  }
}
</script>
<style scoped>

</style>