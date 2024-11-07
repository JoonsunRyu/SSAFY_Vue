<template>
  <div>
    <h4>자식 컴포넌트</h4>
    <p>{{ myMsg }}</p>      <!-- 아래와 -->
    <p v-text="myMsg"></p>  <!-- 같음 -->
    <p>{{ dynamicName }}</p>
    <p>{{ person }}</p>
    <hr>
    <button @click="$emit('someEvent')">부모전송</button>  <!-- 요청 날림 -->
    <button @click="buttonClick">부모전송2</button>
    <button @click="emitArgs">추가인자전달</button>
    <hr>
    <ParentGrandChild @update-namee="updateNameee" :my-msg="myMsg"/>
  </div>
</template>

<script setup>
  // 부모로부터 받은 props를 사용하기 위한 방법은 2가지!
  // defineProps(['myMsg'])  // 매우 간단한 받기 방법
  // 적어도 타입 정도는 알려줘 (자세할수록 좋아)
  const props = defineProps({
    myMsg: String,
    dynamicName: String,
    person: Object
  })

  import ParentGrandChild from "./ParentGrandChild.vue";

  const emit = defineEmits(["someEvent", "emitArgss", 'updateNameeee'])

  // 복잡할 경우엔 메서드를 이용해서 작성하는 게 가독성, 작업 편리성 Up
  const buttonClick = function() {
    emit("someEvent")
  }

  const emitArgs = function () {
    emit('emitArgss', 1, 2, 3)
  }

  const updateNameee = function (namee) {
    console.log(namee)
    emit('updateNameeee', namee)
  }

  console.log(props.myMsg)
</script>

<style scoped>
</style>