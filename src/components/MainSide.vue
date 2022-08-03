<template>
    <div class='MainSide'>
        <ul>
            <li><router-link to="/">仪表盘</router-link></li>
            <li><router-link to="/line">折线图</router-link></li>
            <li><router-link to="/Grandpa">旭日图</router-link></li>
            <li><router-link to="/map3D">map3D</router-link></li>
            <li><router-link to="/IronGlobe">3D地球</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MainSide"
}
</script>

<style lang="less" scoped>
.MainSide{
    font-size: 20px;
    ul {

        li {
            height: 50px;
            line-height: 50px;
            text-align: center;
            margin-bottom: 15px;

            a {
                color: #57697e;

                &.router-link-exact-active{
                    color: orangered;
                }
            }
        }
    }
}
</style>
