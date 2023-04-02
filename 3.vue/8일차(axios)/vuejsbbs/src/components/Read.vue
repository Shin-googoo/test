<template>
    <div>
      <!-- Read -->
      <table align="center">
        <tr>
          <td>글쓴이</td>
          <td>제  목</td>
          <td>내  용</td>
        </tr>
        <tr :key="index" v-for="(value,index) in data" @click="detail(index)">
          <td>{{value.writer}}</td>
          <td>{{value.title}}</td>
          <td>{{value.content}}</td>
        </tr>
      </table><br>
    <button @click="write">글쓰기</button>
    </div>
</template>

<script>
import data from '../data/index'
//import data from '@/data' npm install --save @를 설치해야 된다.
export default {
    name:'Read',
    data:function(){
      return{
        data:data
      }
    },
    methods:{
      write(){
        this.$router.push({
          path:'Create'
        })
      },
      detail(index){ //글목록 항목을 클릭했을때 처리해주는 함수 작성
        this.$router.push({
          name:'Detail', //Detail컴포넌트에게 전달 path대신에 name을 사용
          params:{       //contentid 매개변수에 index 전달
            contentid:index
          }
        })//push
      }
    }
}
</script>