<template>
  <div class="flex justify-between text-[#767c82]">
    <LeftCollaps />
    <div class="flex-1 mr-[56px] p-[20px]">
      <div class="bg-[#1A1B1E] p-[20px] rounded-[8px] mb-[20px]">
        <div class="p-[20px] bg-[#a9a9a9] rounded-[8px] mb-[20px]">
          <img />
          <div>点击发表主题</div>
        </div>
        <div class="flex">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
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
</script>
<style lang='less' scoped></style>