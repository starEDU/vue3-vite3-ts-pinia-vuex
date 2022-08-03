<template>
    <div class='GrandpaPage' ref="GrandpaPage">
        <h1>GrandpaPage </h1>
    </div>
</template>

<script>
import grandpa from "@/echartData/grandpa"
export default {
    name: "GrandpaPage",
    mounted(){
        const myChart = this.$echarts.init(this.$refs.GrandpaPage)

        myChart.setOption(grandpa)
    }
}
</script>

<style scoped>

</style>
