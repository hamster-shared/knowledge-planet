<template>
  <div class="w-[180px]">
    <n-collapse default-expanded-names="1" accordion>
      <n-collapse-item title="我的星球" name="1">
        <div>可以</div>
      </n-collapse-item>
      <n-collapse-item title="加入的星球" name="2">
        <div class="cursor-pointer mb-[16px]" v-for="item in joinPlanetList" :key="item.id">
          <div>{{ item.name }}</div>
        </div>
      </n-collapse-item>
      <n-collapse-item title="免费星球" name="3">
        <div>真棒</div>
      </n-collapse-item>
    </n-collapse>
  </div>
</template>
<script lang='ts' setup>
import { ref } from "vue";
const joinPlanetList = ref([
  { name: '张居正', id: 1, },
  { name: '于谦', id: 2, },
  { name: '李世民', id: 3, },
  { name: '海瑞', id: 4, },
]);
</script>
<style lang='less' scoped>
.n-collapse .n-collapse-item {
  color: #ffffff;
}

.n-collapse .n-collapse-item .n-collapse-item__header .n-collapse-item__header-main {
  color: #ffffff;
}
</style>