<template>
    <div class='SwiperPage'>
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">slider1</div>
                <div class="swiper-slide">slider2</div>
                <div class="swiper-slide">slider3</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SwiperPage",
    mounted() {
        const mySwiper = new Swiper('.swiper', {
            autoplay: true,//可选选项，自动滑动
            loop: true,
        })
    }
}
</script>

<style lang="less" scoped>
.swiper{
    width: 800px;
    height: 350px;
    border: 1px solid blue;

    .swiper-wrapper div{
        height: 350px;
        user-select: none
    }
    .swiper-wrapper div:nth-child(1){
        background: red;
    }
    .swiper-wrapper div:nth-child(2){
        background: green;
    }
    .swiper-wrapper div:nth-child(3){
        background: blue;
    }
}
</style>
