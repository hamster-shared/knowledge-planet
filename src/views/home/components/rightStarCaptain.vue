<template>
  <div class="rigt-star-captain w-[366px] bg-[#1A1B1E] text-[#fff] rounded-[20px] p-[30px]">
    <div class="text-[16px] font-bold mb-[12px]">星球舰长</div>
    <div v-for="item in captainList" :key="item.id" class="bg-[#a9a9a9] rounded-[20px] mb-[20px]">
      <div class="flex items-center py-[4px]">
        <img :src="item.img" class="w-[32px] ml-[20px] mr-[10px]" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import img from "@/assets/img/logo.png";
const captainList = ref([
  { name: '张居正', id: 1, img: img },
  { name: '于谦', id: 2, img: img },
  { name: '李世民', id: 3, img: img },
  { name: '海瑞', id: 4, img: img },
])
</script>
<style lang='less' scoped>
.rigt-star-captain {
  height: calc(100vh - 60px);
}
</style>