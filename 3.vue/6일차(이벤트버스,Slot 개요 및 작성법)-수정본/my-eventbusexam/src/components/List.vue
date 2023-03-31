<template>
  <div class="hello">
    <ul v-for="(a, idx) in toDoList" :key="idx">
      <li>{{ a }} <button @click="del(idx)">삭제</button></li>
    </ul>
  </div>
</template>

<script>
import eventBus from "./EventBus";
export default {
  name: "List",
  data: function() {
    return {
      toDoList: [], // 입력받은 값(배열)
    };
  },
  // 화면에 입력받은값을 출력하기전에 먼저 input.vue로부터 받은데이터저장
  created: function() {
    // 형식) ~.$on('키워드',호출할 함수를 지정(처리))
    eventBus.$on("xyz", this.add); // xyz이벤트 종류를 전달받아 add호출
  },
  methods: {
    add: function(m) {
      // m->this.mesg
      this.toDoList.push(m); // 배열에 저장
    },
    del: function(idx) {
      console.log("idx->", idx);
      this.toDoList.splice(idx, 1); // 1.삭제할 인덱스번호,2.삭제갯수
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>
