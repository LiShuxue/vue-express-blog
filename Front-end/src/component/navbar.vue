<template>
    <div id="navbar" class="navbar">
        <el-menu theme="dark" default-active="2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">主页</el-menu-item>
            <el-menu-item index="2">博客</el-menu-item>
            <el-menu-item index="3">分类</el-menu-item>
            <el-menu-item index="4">GitHub</el-menu-item>
            <el-menu-item index="5">About</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    import router from '../router';
    export default {
        methods: {
            handleSelect(key, keyPath) {
                if(key === '1'){
                    router.push('/home');
                }else if(key === '2'){
                    router.push('/app/blog');
                }else if(key === '3'){
                    router.push('/app/category');
                }else if(key === '4'){
                    window.open('https://github.com/LiShuxue');
                }else if(key === '5'){
                    router.push('/app/about');
                }
            }
        }
    }
</script>

<style>  
</style>