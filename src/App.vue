<template>
  <!-- <button @click="add">{{ num }}</button> -->
  <button @click="user.add(1)">{{ user.count }}</button>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { useUserStore } from "./stores/user";
const user = useUserStore();
// import { ref } from "vue";
// const num = ref(0);
// const add = () => {
//   num.value++;
// };
</script>
