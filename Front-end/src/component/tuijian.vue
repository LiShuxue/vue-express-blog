<template>
    <div class="tuijian">
        <h3 class="r-title">图文推荐</h3>
        <div>
            <ul>
                <li>
                    <img src="img/02.jpg"/>
                    <b>住在手机里的朋友</b>
                    <p>
                        <span class="tulanmu">JavaScript</span>
                        <span class="tutime">2017-07-07</span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .tuijian{
        width: 100%;
        overflow: hidden;
        margin: 20px 0;
    }
    .tuijian li{
        overflow: hidden;
        margin-bottom: 10px;
    }

    .tuijian img{
        width: 70px;
        float: left;
        margin: 0 15px 0 10px;
    }

    .tuijian b{
        overflow: hidden;
        width: 100%;
        color: #333;
        font-size: 14px;
        font-weight: normal;
        line-height: 30px;
    }
    .tuijian p{
        margin-top: 5px;
    }

    .tulanmu{
        color: #999;
        padding-left: 17px;
        margin-right: 10px;
        background: url(../assets/img/lanmbq.png) no-repeat center left;
    }
    .tutime{
        color: #999;
        padding-left: 15px;
        margin-right: 10px;
        background: url(../assets/img/datepng.png) no-repeat left center;
    }
</style>