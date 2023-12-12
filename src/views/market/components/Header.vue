<template>
  <div class="flex justify-between items-center">
    <n-input round placeholder="Search here…" class="h-[53px]">
      <template #prefix>
        <n-icon :component="SearchOutline" size="23" />
      </template>
    </n-input>
    <div class="flex justify-end items-center w-[30%]">
      <n-icon :component="Bell" size="23" />
      <n-button round text-color="#FFFFFF" class="bg-[#C256FF] ml-[20px]">Connect Wallet</n-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { SearchOutline } from '@vicons/ionicons5';
import { Bell } from '@vicons/tabler';
</script>
<style scoped lang="less">
:deep(.n-input){
  height: 53px;
  background: #0E0E10;
  box-shadow: inset 0px 0px 20px 0px rgba(194,86,255,0.1);
  
  border: 1px solid transparent;
  // border-image: linear-gradient(136deg, rgba(157, 47, 95, 1), rgba(99, 8, 154, 1)) 1 1;
  background-image: linear-gradient(#0E0E10,#0E0E10),linear-gradient(136deg, rgba(157, 47, 95, 1), rgba(99, 8, 154, 1));
  background-clip: padding-box, border-box;
  background-origin: border-box;
}
:deep(.n-input.n-input--round:not(.n-input--textarea)){
  border-radius: 100px;
}
:deep(.n-input .n-input__input-el){
  height: 53px;
  line-height: 53px;
}
:deep(.n-button){
  height: 37px;
  line-height: 35px;
}
</style>