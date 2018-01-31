<template>
    <header>
        <div class="head-top"></div>
        <div class="head-content">
            <div class="logo f_l">在前进的道路上永不停歇</div>
            <div class="search f_r">
                <input name="keyboard" id="keyboard" class="input_text" value="请输入关键字" type="text" @focus="searchFocus()" @blur="searchBlur()">
                <input name="Submit" class="input_submit" value="搜索" type="submit">
            </div>
            <div class="f_clear"></div>
            <nav class="navigation">
                <ul class="menu">
                    <li v-on:click="goHome"><a>首页</a></li>
                    <li v-on:click="goBlog"><a>博客</a></li>
                    <li v-on:click="goCategory"><a>分类</a></li>
                    <li v-on:click="goGitHub"><a>GitHub</a></li>
                    <li v-on:click="goAbout"><a>About</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
    import router from '../router';
    import $ from 'jquery';
    export default {
        methods: {
            searchFocus(){
                if($('#keyboard').val() == '请输入关键字'){
                    $('#keyboard').val('');
                    $('#keyboard').css('color', '#000');
                }
            },
            searchBlur(){
                if($('#keyboard').val() == ''){
                    $('#keyboard').val('请输入关键字');
                    $('#keyboard').css('color', '#999');
                }
            },
            goHome(){
                router.push('/');
            },
            goBlog(){
                router.push('/app/blog');
            },
            goCategory(){
                router.push('/app/category');
            },
            goGitHub(){
                window.open('https://github.com/LiShuxue');
            },
            goAbout(){
                router.push('/app/about');
            }
        }
    }
</script>

<style scoped>
    header {
        width: 100%;
        background: url(../assets/img/yuanshan.jpg) right bottom no-repeat;
        margin: 0px 0px 10px 0px;
    }

    .head-top {
        height: 28px;
        background: url(../assets/img/topbg.jpg) repeat-x;
    }

    .head-content {
        width: 1000px;
        margin: auto;
    }

    .logo {
        margin: 50px 0px 20px 20px;
        font-size: 26px;
        font-family: "微软雅黑", sans-serif;
        color: #333;
        font-weight: blod;
    }

    .search {
        margin: 50px 0px 20px 20px;
        width: 240px;
    }

    .input_text {
        color: #999;
        padding-left: 5px;
        border: 1px solid #ccc;
        width: 158px;
        height: 26px;
        line-height: 26px;
        background-color: #e5e5e5;
    }

    .input_submit {
        width: 50px;
        height: 28px;
        color: #FFF;
        line-height: 28px;
        margin-left: 5px;
        cursor: pointer;
        background-color: #333;
        border: none;
        border-radius: 5px;
    }

    .navigation {
        height: 64px;
        background: url(../assets/img/navbg.jpg) no-repeat;
        font-family: "微软雅黑";
    }

    .menu {
        margin-left: 70px;
        padding-top: 10px;
    }

    .menu li {
        float: left;
        width: 110px;

    }

    .menu li a {
        display: block;
        text-decoration: none;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        line-height: 46px;
    }
</style>