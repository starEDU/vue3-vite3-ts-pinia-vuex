<template>
    <div class='MainHeader'>
        <ul>
            <li> <router-link to="/">首页</router-link> </li>
            <li> <router-link to="/sign">登录</router-link> </li>
            <li> <router-link to="/reg">注册</router-link> </li>
            <li> <router-link to="/user">  用户中心</router-link> </li>
        </ul>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>

.MainHeader{
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ul {
        display: flex;
        margin: 0;
        align-items: center;
        font-size: 18px;
        li {
            height: 36px;
            line-height: 36px;
            margin-right: 16px;
            padding:0 10px;
            border: 1px solid hsla(0,0%,100%,.3);
            color: #fff;
            i{
                font-size: 22px;
            }
            .router-link-active{
                color: orangered;
            }

            a {
                color: #57697e;

                &.router-link-exact-active {
                    color: orangered;
                }
            }
        }

    }
}
</style>
