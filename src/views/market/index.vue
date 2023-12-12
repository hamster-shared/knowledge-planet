<template>
  <div class="p-[30px]">
    <Header></Header>
    <div class="grid grid-cols-4 gap-[30px]">
      <div class="col-span-3">
        <TabsList></TabsList>
      </div>
      <div class="bg-[#1A1B1E] rounded-[20px] h-[888px] mt-[90px]"></div>
    </div>
    
  </div>
</template>
<script lang='ts' setup>
import Header from './components/Header.vue';
import TabsList from './components/TabsList.vue';
</script>
<style lang='less' scoped></style>