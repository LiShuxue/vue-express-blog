<template>
    <div id="footer" class="footer">
        <div class="line sign">
            <p>© 2017 李树雪</p>
        </div>
        <div class="line back-top">
            <a href="#app">回到顶部</a>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .footer{
        position: fixed;
        bottom: 0px;
        height: 30px;
        width: 100%;
        background-color: #eff2f7;
    }
    .line{
        display: inline-block;
    }
    .sign{
        margin: 5px 0px 0px 50px;
    }
    .back-top{
        position: absolute;
        right: 50px;
        margin: 5px 0px 0px 50px;
        color: black;
    }
</style>
