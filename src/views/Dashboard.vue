<template>
    <div class='Dashboard'>
        <h1>Dashboard </h1>
        <h2> pinia: count {{count}} </h2>
        <button @click="increment"> increment </button>
    </div>
</template>

<script setup>
import {getCurrentInstance, toRefs} from 'vue'
import useGoods from '@/pinia/useGoods'
const {proxy} = getCurrentInstance()
const goods = useGoods()

const {count,increment} = toRefs(goods)

console.log( window.$axios.get )

</script>

<style scoped>

</style>
