<template>
    <div class='IndexPage'>
        <a-layout>
            <a-layout-sider>
                <MainSide />
            </a-layout-sider>
            <a-layout-content>
                <router-view />
            </a-layout-content>
        </a-layout>
    </div>
</template>

<script>

import MainSide from "@/components/MainSide"
export default {
    name: "IndexPage",
    components: {MainSide}
}
</script>

<style lang="less" scoped>

.IndexPage{
    flex: 1;
    background: gold;
    display: flex;
}

.ant-layout-sider{
    background: rgba(0,0,0,0.9);
}

.ant-layout-content {
    display: flex;
}
.ant-layout-content > div {

    flex: 1;
}
</style>
