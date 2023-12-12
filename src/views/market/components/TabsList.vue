<template>
  <div class="mt-[30px]">
    <n-tabs type="segment">
      <n-tab-pane name="Hotest" tab="Hotest">
        <div class="grid grid-cols-2 gap-[20px]">
          <div class="bg-[#1A1B1E] rounded-[20px] h-[416px]"></div>
          <div class="grid grid-cols-2 gap-[20px]">
            <div class="bg-[#1A1B1E] rounded-[20px] h-[198px]"></div>
            <div class="bg-[#1A1B1E] rounded-[20px] h-[198px]"></div>
            <div class="bg-[#1A1B1E] rounded-[20px] h-[198px]"></div>
            <div class="bg-[#1A1B1E] rounded-[20px] h-[198px]"></div>
          </div>
        </div>
      </n-tab-pane>
      <n-tab-pane name="Lastest" tab="Lastest">Lastest</n-tab-pane>
      <n-tab-pane name="Investor" tab="Investor">Investor</n-tab-pane>
      <n-tab-pane name="Coder" tab="Coder">Coder</n-tab-pane>
      <n-tab-pane name="KOL" tab="KOL">KOL</n-tab-pane>
      <n-tab-pane name="PM" tab="PM">PM</n-tab-pane>
      <n-tab-pane name="Lawyer" tab="Lawyer">Lawyer</n-tab-pane>
      <n-tab-pane name="Designer" tab="Designer">Designer</n-tab-pane>
      <n-tab-pane name="Defi" tab="Defi">Defi</n-tab-pane>
      <n-tab-pane name="DAO" tab="DAO">DAO</n-tab-pane>
    </n-tabs>
  </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="less">
:deep(.n-tabs .n-tabs-rail){
  background-color: transparent;
  padding: 0px;
}
:deep(.n-tabs .n-tabs-rail .n-tabs-tab-wrapper){
  margin-right: 10px;
  flex-grow: 0;
}
:deep(.n-tabs .n-tabs-rail .n-tabs-tab-wrapper .n-tabs-tab){
  background: #27282C;
  border-radius: 25px;
  width: auto;
  padding: 5px 20px;
  color: #B9BCD0;
}
:deep(.n-tabs .n-tabs-rail .n-tabs-tab-wrapper .n-tabs-tab.n-tabs-tab--active){
  background: #FFFFFF;
  color: #000000;
}
:deep(.n-tabs.n-tabs--top .n-tab-pane){
  padding: 30px 0 0 0 ;
}
</style>