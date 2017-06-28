<template>
    <div id="home" class="home-page">
        <div class="intro">
            <h1>李树雪的个人网站</h1>
            <p class="option" v-on:click="goBlog">博客</p>
            <p class="option" v-on:click="goCategory">分类</p>
            <p class="option" v-on:click="goGitHub">GitHub</p>
            <p class="option" v-on:click="goAbout">About</p>
        </div>
    </div>
</template>

<script>
    import router from '../router';
    export default {
        methods: {
            goBlog: function(){
                router.push('/app/blog');
            },
            goCategory: function(){
                router.push('/app/category');
            },
            goGitHub: function(){
                window.open('https://github.com/LiShuxue');
            },
            goAbout: function(){
                router.push('/app/about');
            }
        }
    }
</script>

<style>
    .home-page{
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .intro{
        margin: 200px auto;
        width: 350px;
        height: 200px;
        background-color: gray;
        opacity: 0.4;
        text-align:center;
    }
    .option{
        padding-top: 10px;
        cursor: pointer;
        border-bottom: 1px solid white;
    }
</style>
