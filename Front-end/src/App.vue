<template>
    <div id="wrapper" class="wrapper">
        <header-component></header-component> 
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import headerComponent from './component/header.vue';
    import footerComponent from './component/footer.vue';
    export default {
        components: {
            headerComponent,
            footerComponent
        }
    }
</script>

<style scoped>
    @import "./assets/style/base.css"; 
</style>
