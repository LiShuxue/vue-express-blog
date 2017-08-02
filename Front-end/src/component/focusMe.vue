<template>
    <div class="focus-on-me">
        <h3 class="r-title">关注我</h3>
        <div>
            <ul>
                <li class="phone">我的电话</li>
                <li class="phone">我的电话</li>
                <li class="phone">我的电话</li>
                <li class="phone">我的电话</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .focus-on-me{
        width: 100%;
        overflow: hidden;
    }
    .focus-on-me li {
        width: 60px;
        margin: 0 10px 0 5px;
        float: left;
    }
    .phone{
        color: #747F8C;
        text-align: center;
        padding-top: 60px;
        background: url(../assets/img/gz01.png) no-repeat;
    }
</style>