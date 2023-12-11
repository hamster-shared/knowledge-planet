<template>
  <div class="flex">
    <!-- right -->
    <div class="bg-[#1A1B1E] h-screen w-[360px]">
      <div class="text-[#fff] text-[18px] font-bold px-[24px] pt-[24px] pb-[12px]">聊天</div>
      <div class="px-[24px] mb-[20px]">
        <n-input round placeholder="Search here...">
          <template #prefix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
      <div>
        <div v-for="item in chatList" :key="item.id" class="flex py-[12px] px-[24px] cursor-pointer"
          @click="selectedChat(item)" :class="selectedId === item.id ? 'selectedCss' : ''">
          <img :src="item.img" class="w-[36px] rounded-full mr-[12px]" />
          <div>
            <div class="text-[#fff] text-[18px]">{{ item.name }}</div>
            <div>{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- left -->
    <div class="px-[24px] flex-1">
      <div class="text-[16px] text-[#fff] py-[30px]">{{ selectedName }}</div>
      <div class="h-[600px] overflow-y-auto">zj</div>
      <div>
        <n-input round placeholder="Please enter...">
          <template #prefix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
import {
  SearchOutline,
} from '@vicons/ionicons5';
import img from "@/assets/img/logo.png";
const selectedId = ref(1);
const selectedName = ref('币圈索罗斯');
const chatList = ref([
  { name: '币圈索罗斯', id: 1, desc: '比特币还能做更多吗？', img: img },
  { name: '琴心幻影', id: 2, desc: '帮我生成一张汉服写真照片', img: img }])

const selectedChat = (item: any) => {
  selectedId.value = item.id;
  selectedName.value = item.name;
}
</script>
<style lang='less' scoped>
.selectedCss {
  background-color: #313131;
}
</style>