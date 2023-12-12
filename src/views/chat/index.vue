<template>
  <div class="flex">
    <!-- right -->
    <div class="bg-[#1A1B1E] h-screen w-[360px] left-chat">
      <div
        class="text-[#fff] text-[20px] font-semibold px-[24px] pt-[14px] pb-[12px] border-b border-solid border-[#26282C]">
        聊天
      </div>
      <div class="px-[24px] my-[20px]">
        <n-input round placeholder="Search here..." size="large">
          <template #prefix>
            <n-icon :component="SearchOutline" />
          </template>
        </n-input>
      </div>
      <div>
        <div v-for="item in chatList" :key="item.id" class="flex py-[12px] px-[24px] cursor-pointer items-center"
          @click="selectedChat(item)" :class="selectedId === item.id ? 'selectedCss' : ''">
          <img :src="item.img" class="w-[56px] rounded-full mr-[14px]" />
          <div>
            <div class="text-[#FFFFFF] text-[16px] font-semibold">{{ item.name }}</div>
            <div class="text-[14px] text-[#656D7A]">{{ item.desc }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- left -->
    <div class=" flex-1">
      <div class="text-[16px] font-semibold text-[#fff] py-[16px] px-[24px] border-b border-solid border-[#26282C]">{{
        selectedName }}
      </div>
      <div class="chat-box overflow-y-auto px-[150px] py-[50px]">聊天内容</div>
      <div class="h-[135px] px-[150px] border-t border-solid border-[#26282C]">
        <n-input round placeholder="Please enter..." class="mt-[50px]" size="large">
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

.left-chat {
  border-right: 1px solid #26282C;
}

.chat-box {
  height: calc(100vh - 195px);
}
</style>