<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="안녕하세요" >
       <!--전달할 디자인
          태그명 slot="구분자"
        -->
       <div slot="a">
         지금은 슬롯연습중입니다.
       </div>
       <div slot="b">
         슬롯도 구분해서 여러개 작성이 가능합니다.
       </div>
    </HelloWorld>
    <p />
    <hr />
    <SpeechBox class="sanders"
          :headerText="B.header" 
          :footerText="B.footer">
      <div>
        <p>{{B.message}}</p>
      </div>
    </SpeechBox>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//추가
import SpeechBox from './components/SpeechBox.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,SpeechBox
  },
  data:function(){
    return{
      A:{
        header:'오바바 대통령 고별 연설문',
        footer:'2017/01/01',
        message:'저의 동료 여러분...'
      },
      B:{ 
        header:'버니 샌더슨 경선 패배 연설문',
        footer:'2016/07/25',
        message:'감사합니다. 여러분 정말 감사합니다...'
        }
    }
  }
}
</script>

<style>
  .sanders {background-color:white}
</style>
