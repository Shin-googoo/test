<template>
    <div class="hello">
        <!-- 조건에 만족하는 값만 처리(v-if="조건식") -->
     <input type="text" v-model="amount"> 
     <span v-if="amount < 100">100보다 큰 값만 입력이 가능</span>
     <hr />
     이름:<input type="text" v-model="username">
     <span v-if="username.length < 2">이름은 2글자 이상입력</span>
     <hr />
     나이:<input type="text" v-model="age">
     <span v-if="age < 21 || age >50">나이는 21세이상,50세이하만 가능합니다.</span>
     <hr />
     점수:<input type="text" v-model="grade">
     <p v-if="grade > 90">A학점</p>
     <p v-else-if="grade > 80">B학점</p>
     <p v-else-if="grade > 70">C학점</p>
     <p v-else>F학점</p>
    </div>
</template>
<script>
export default {
   name:'Valid',
   data:function(){
       return{
           amount:100,
           username:'임시',
           age:21,
           grade:70
       }
   }
}
</script>
<style>
</style>