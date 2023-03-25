<template>
   <div>
     <div class="hello">
       <h1>수정전:{{mesg}}</h1>
     </div>
     <h1>World 수정후:{{mesg}}</h1>
   </div>
</template>
<script>
export default {
  name:'Life',
  //데이터저장
  data:function(){
      return {mesg:`Hello  Vue!!!`}
  },
  //life Cycle
  beforeCreate:function(){
      console.log("beforeCreate(컴포넌트가 DOM결합되기 전 호출",this)
  },
  created:function(){
      console.log("created(data,event가 활성화되어 접근가능)")
  },
  beforeMount:function(){
      console.log("beforeMount(랜더링이 실행되기전에 호출)")
  },
  mounted:function(){//리액트의 render()와 비슷한 역할
      console.log("mounted(컴포넌트,템플릿,랜더링 DOM에 접근가능")
      this.mesg="happy" //접근가능->내마음대로 수정->출력
      console.log("mounted",this.mesg)
  },
  beforeUpdate:function(){
     console.log("beforeUpdate(데이터가 수정된후 새로고침전에 호출")
  },
  updated:function(){
     console.log("updated(데이터가 변경되고 새로고침후에 호출")
  },
  beforeDestroy:function(){
     console.log("destroyed() 뷰객체가 제거된 전에 호출")
  },
  destroyed:function(){
      console.log("destroyed() 뷰객체가 제거된 후에 호출")
  }
}
</script>
<style scoped>
</style>