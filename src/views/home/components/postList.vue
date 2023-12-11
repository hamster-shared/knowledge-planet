<template>
  <div v-for="item in postList" :key="item.id"
    class="bg-[#1A1B1E] py-[16px] px-[32px] text-[#ffffff] rounded-[8px] mb-[20px]">
    <div class="flex justify-between">
      <div class="flex">
        <img :src="item.img" class="w-[36px] rounded-full mr-[12px]" />
        <div>
          <div class="text-[16px]">报告小助手</div>
          <div class="text-[12px] text-[#a9a9a9]">{{ item.postTime }}</div>
        </div>
      </div>
      <!-- <img /> -->
      <n-icon :component="EllipsisHorizontal" />

    </div>
    <div>#小红书#</div>
    <div>{{ item.content }}</div>
    <span class="border border-solid border-[] rounded-[2px] px-[6px] py-[2px]">{{ item.tag }}</span>
    <div class="flex justify-between">
      <div>一键三连</div>
      <div class="cursor-pointer">查看详情></div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import { EllipsisHorizontal, HappyOutline } from '@vicons/ionicons5';
import { Star28Regular, LikeOutlined } from "@vicons/antd";
import img from "@/assets/img/logo.png";
const postList = ref([
  { name: '张居正', id: 1, img: img, postTime: '2023 / 12 /08 13: 10:08', content: '2023小红书企业号运营规划报告 & 小红书', tag: '小红书' },
  { name: '朱一龙', id: 1, img: img, postTime: '2023 / 12 /08 13: 10:08', content: '2023小红书企业号运营规划报告 & 小红书', tag: '小红书' }
])
</script>
<style lang='less' scoped></style>