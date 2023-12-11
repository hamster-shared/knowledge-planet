<template>
  <div class="w-[366px] bg-[#1A1B1E] text-[#fff] rounded-[20px]">
    <div>星球舰长</div>
    <div v-for="item in captainList" :key="item.id">
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
const captainList = ref([
  { name: '张居正', id: 1, },
  { name: '于谦', id: 2, },
  { name: '李世民', id: 3, },
  { name: '海瑞', id: 4, },
])
</script>
<style lang='less' scoped></style>