<template>
    <div class="sidebar-wrap">
        <div class="logo-wrap">
            <n-image class="logo-img" width="36" :src="LOGO" :preview-disabled="true" @click="goHome" />
        </div>
        <n-menu :accordion="true" :icon-size="24" :options="menuOptions" :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon" :value="selectedPath" @update:value="goRouter" />
    </div>
</template>

<script setup lang="ts">
import { h, ref, watch, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { NIcon, NBadge, useMessage } from 'naive-ui';
import {
    HomeOutline,
} from '@vicons/ionicons5';
import { Hash } from '@vicons/tabler';
import LOGO from '@/assets/img/logo.png';

const store = useStore();
const route = useRoute();
const router = useRouter();
const hasUnreadMsg = ref(false);
const selectedPath = ref<any>(route.name || '');
const msgLoop = ref();


watch(route, () => {
    selectedPath.value = route.name;
});

onMounted(() => {
    window.onresize = () => {
        store.commit('triggerCollapsedLeft', document.body.clientWidth <= 821);
        store.commit('triggerCollapsedRight', document.body.clientWidth <= 821);
    };
});

const menuOptions = [
    {
        label: 'Market',
        key: 'market',
        icon: () => h(HomeOutline),
        href: '/',
    },
    {
        label: 'Chat',
        key: 'chat',
        icon: () => h(Hash),
        href: '/chat',
    },
    {
        label: 'Follower',
        key: 'follower',
        icon: () => h(Hash),
        href: '/follower',
    }
]

const renderMenuLabel = (option: AnyObject) => {
    if ('href' in option) {
        return h('div', {}, option.label);
    }
    return option.label;
};
const renderMenuIcon = (option: AnyObject) => {
    if (option.key === 'messages') {
        return h(
            NBadge,
            {
                dot: true,
                show: hasUnreadMsg.value,
                processing: true,
            },
            {
                default: () =>
                    h(
                        NIcon,
                        {
                            color:
                                option.key === selectedPath.value
                                    ? 'var(--n-item-icon-color-active)'
                                    : 'var(--n-item-icon-color)',
                        },
                        { default: option.icon }
                    ),
            }
        );
    }
    return h(NIcon, null, { default: option.icon });
};

const goRouter = (name: string, item: any = {}) => {
    selectedPath.value = name;
    router.push({
        name, query: {
            t: (new Date().getTime())
        }
    });
};
const goHome = () => {
    if (route.path === '/') {
        store.commit('refresh');
    }
    goRouter('market');
};
const triggerAuth = (key: string) => {
    store.commit('triggerAuth', true);
    store.commit('triggerAuthKey', key);
};
const handleLogout = () => {
    store.commit('userLogout');
    store.commit('refresh')
    goHome()
};
window.$store = store;
window.$message = useMessage();
</script>

<style lang="less">
.sidebar-wrap::-webkit-scrollbar {
    width: 0;
    /* 隐藏滚动条的宽度 */
    height: 0;
    /* 隐藏滚动条的高度 */
}

.sidebar-wrap {
    z-index: 99;
    width: 200px;
    height: 100vh;
    position: fixed;
    left: 0;
    // right: calc(50% + var(--content-main) / 2 + 10px);
    padding: 12px 0;
    box-sizing: border-box;
    max-height: calc(100vh);
    /* 调整高度 */
    overflow: auto;
    background-color: darkgrey;

    .n-menu .n-menu-item-content::before {
        border-radius: 21px;
    }


    .logo-wrap {
        display: flex;
        justify-content: flex-start;
        margin-bottom: 12px;

        .logo-img {
            margin-left: 24px;

            &:hover {
                cursor: pointer;
            }
        }
    }
}


@media screen and (max-width: 821px) {
    .sidebar-wrap {
        width: 200px;
        right: calc(100% - 200px);
    }

    .logo-wrap {
        .logo-img {
            margin-left: 12px !important;
        }
    }
}
</style>