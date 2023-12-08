<template>
    <n-config-provider>
        <n-message-provider>
            <n-dialog-provider>
                <div class="app-container">
                    <div has-sider class="main-wrap" position="static">
                        <!-- 侧边栏 -->
                        <sidebar />
                        <div class="content-wrap">
                            <router-view class="app-wrap" v-slot="{ Component }">
                                <keep-alive>
                                    <component v-if="$route.meta.keepAlive" :is="Component" />
                                </keep-alive>
                                <component v-if="!$route.meta.keepAlive" :is="Component" />
                            </router-view>
                        </div>
                        <!-- 右侧 -->
                    </div>
                </div>
            </n-dialog-provider>
        </n-message-provider>
        <n-global-style />
    </n-config-provider>
</template>

<script setup lang="ts">
</script>

<style lang="less">
@import '@/assets/css/main.less';
</style>