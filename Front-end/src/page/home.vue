<template>
    <div class="home">
        <jz-component></jz-component>
        <div class="container">
            <div class="blog-list f_l">
                <blogintro-component></blogintro-component>
            </div>
            
            <div class="rightbox f_r">
                <focusme-component></focusme-component>
                <tuijian-component></tuijian-component>
                <paihang-component></paihang-component>
            </div>
        </div>
        <jz-component></jz-component>
    </div>
</template>

<script>
    import jzComponent from '../component/jz.vue';
    import blogintroComponent from '../component/blogIntro.vue';
    import focusmeComponent from '../component/focusMe.vue';
    import tuijianComponent from '../component/tuijian.vue';
    import paihangComponent from '../component/paihang.vue';
    export default {
        components: {
            jzComponent,
            blogintroComponent,
            focusmeComponent,
            tuijianComponent,
            paihangComponent
        }
    }
</script>

<style scoped>
    .blog-list{
        width: 620px;
        overflow: hidden;
        margin: 0px 0px 20px 20px;
    }
    .rightbox{
        width: 300px;
        margin: 20px 20px 0 0;
    }  
</style>
