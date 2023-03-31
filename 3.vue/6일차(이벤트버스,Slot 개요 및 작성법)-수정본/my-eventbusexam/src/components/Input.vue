<template>
 <div class="hello">
   <!--onKeyup={this.add} react   -->
    <input type="text" @keyup.enter="add" v-model="mesg">
</div>
</template>

<script>
import eventBus from './EventBus'
export default { //사용자로부터 입력
  name:'Input',
  data:function(){
    return {
      mesg:''//초기값은 ''
    }
  },
  methods:{
    add:function(){
      //형식) eventBus객체명.$emit(1.이벤트종류(키워드),2.전달할값)
      eventBus.$emit('xyz',this.mesg)//입력받은 값을 전달
      this.mesg=''//연결된 input의 value도 같이 지워진다.
    }
  }
}
</script>
<style scoped>

</style>