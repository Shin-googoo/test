<template>
    <div>
      <div>{{data.writer}}</div>
      <div>{{data.title}}</div>
      <div>{{data.content}}</div>
      <button @click="updateData">수정</button>
      <button @click="deleteData">삭제</button>
    </div>
</template>
<script>
import data from '../data/index'
export default {
    name:'Detail',
    data:function(){
        const index=this.$route.params.contentid
        console.log('Detail의 index=>',index)
       return{
           data:data[index],
           index:index  //index변수에 선택된 인덱스번호 저장
       }
    },
    methods:{
        deleteData(){//배열명.splice(인덱스번호,1)
            data.splice(this.index,1)
            this.$router.push({
                path:'/'
            })
        },
        updateData(){
            this.$router.push({
          name:'Create', //Detail컴포넌트에게 전달 path대신에 name을 사용
          params:{       //contentid 매개변수에 index 전달
            contentid:this.index
          }
         })
        }//updateData
    }//methods
}
</script>