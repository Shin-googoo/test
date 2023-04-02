<template>
    <div>
      <input v-model="writer" placeholder="글쓴이" /><br>
      <input v-model="title" placeholder="글제목" /><br>
      <textarea v-model="content" placeholder="글내용" /><br>
      <button @click="index!==undefined? update():write()">
              {{index!==undefined?'수정':'작성'}}</button>
      
    </div>
</template>
<script>
import data from '../data/index'
export default {
    name:'Create',
    data:function(){
      const index=this.$route.params.contentid
        return{
          data:data,
          index:index,
          writer:index!==undefined?data[index].writer:'',
          title:index!==undefined?data[index].title:'',
          content:index!==undefined?data[index].content:''
        }
    },
    methods:{
        write(){
          this.data.push({
            writer:this.writer,
            title:this.title,
            content:this.content
          })
          this.$router.push({ //글을 다 쓴뒤 다시 /로 돌아간다.
              path:'/'
          })
        },
        update(){
          data[this.index].writer=this.writer,
          data[this.index].title=this.title,
          data[this.index].content=this.content
          this.$router.push({
            path:'/'
          })
        }
    }
}
</script>