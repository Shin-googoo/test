<template>
  <div>
    <h3>값이 전달되지 않으면 default값이 적용됨</h3>
    <hr />
    <h5>{{username}} {{age+1}} {{myAddress}}</h5>
    <h5>{{username}} {{age+1}} {{myAddress}}</h5>
  </div>
</template>

<script>
export default {
 name:'Default', //컴포넌트명
 props:{
     username:String,
     /*
      형식) 매개변수명:{type:자료형,default:디폴트값 설정}
            리액트->Default.defaultProps {
                age:~.string,,~.isRequired,.func,~.Object
            }
     */
     age:{
        type:Number,
        default:34  /*전달 못받을시 대신 전달되는 값 */
     },
     myAddress:{
         type:String,
         default:'제주'
        }
    }//props
}
</script>

<style>

</style>