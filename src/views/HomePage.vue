<template>
    <div class="home">
        <a-layout>
            <a-layout-header>
                <MainHeader />
            </a-layout-header>

            <router-view />
        </a-layout>
    </div>
</template>

<script>
import {reactive, toRefs,defineComponent,} from 'vue'
import MainHeader from "@/components/MainHeader.vue"

export default defineComponent({
    name: 'HomeView',
    components: { MainHeader, },
    setup(props,context){
        const state = reactive({})

        return {
            ...toRefs(state)
        }
    }
})
</script>

<style scoped>
.home{
    height: 100vh;
    display: flex;
}

</style>
