<template>
  <div class="flex justify-between text-[#767c82] p-[30px]">
    <LeftCollaps />
    <div class="flex-1 mr-[56px] p-[20px]">
      <div class="bg-[#1A1B1E] p-[20px] rounded-[8px] mb-[20px]">
        <div class="p-[20px] bg-[#27282C] rounded-[8px] mb-[20px]">
          <img />
          <div>点击发表主题</div>
        </div>
        <div class="flex">
          <n-icon :component="HappyOutline" size="20px" class="mr-[8px] cursor-pointer" />
          <n-icon :component="HappyOutline" size="20px" class="mr-[8px] cursor-pointer" />
          <n-icon :component="HappyOutline" size="20px" class="mr-[8px] cursor-pointer" />
          <n-icon :component="HappyOutline" size="20px" class="mr-[8px] cursor-pointer" />
          <div>写文章</div>
        </div>
      </div>
      <PostList />
    </div>
    <RightStarCaptain />
  </div>
</template>
<script lang='ts' setup>
import LeftCollaps from "./components/leftCollapse.vue";
import RightStarCaptain from "./components/rightStarCaptain.vue";
import PostList from "./components/postList.vue";
import { HappyOutline } from '@vicons/ionicons5';
</script>
<style lang='less' scoped></style>