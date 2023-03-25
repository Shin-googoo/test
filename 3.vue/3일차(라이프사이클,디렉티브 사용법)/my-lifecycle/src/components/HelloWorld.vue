<template>
  <div class="hello">
    <h1>이름:{{username}}  나이:{{age}}</h1>
    <!--{{호출할 함수명()}} -->
    정보:{{info()}}
    현재시간:{{sayEcho()}}
    화살표함수:{{my()}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data:function(){
    return{
     username:'임시',
     age:20,
     address:'서울',
     tel:'02-123-0987'
    }
  },//data
  methods:{ //methods:{키명(메서드명):function(){}}
    sayEcho:function(){
      return new Date().toString() //날짜->문자열로
    },
    info:function(){                
      return this.username+"\t"+this.age+"\t"+this.tel
    },
    my:()=>{
      return "my=>"+this  //this는 화살표함수에서는 인식X(사용X)
    }//my
  }//method
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
