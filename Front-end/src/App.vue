<template>
    <div id="appContainer" class="app-content">
        <nav-bar></nav-bar>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import navBar from './component/navbar.vue';
    import footerComponent from './component/footer.vue';
    export default {
        components: {
            navBar,
            footerComponent
        }
    }
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
    }
</style>
