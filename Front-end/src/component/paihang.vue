<template>
    <div class="paihang">
        <h3 class="r-title">阅读排行</h3>
        <ul>
            <li>【心路历程】请不要在设计这条路上徘徊啦</li>
            <li>【心路历程】请不要在设计这条路上徘徊啦</li>
            <li>【心路历程】请不要在设计这条路上徘徊啦</li>
            <li>【心路历程】请不要在设计这条路上徘徊啦</li>
            <li>【心路历程】请不要在设计这条路上徘徊啦</li>
            <li>【心路历程】请不要在设计这条路上徘徊啦</li>
        </ul>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
    .paihang ul{
        margin: 10px 0;
    }
    .paihang li{
        height: 25px;
        line-height: 25px;
        padding-left: 15px;
        margin-left: 10px;
        overflow: hidden;
        background: url(../assets/img/libg.jpg) no-repeat left center;
    }
    .paihang li:first-child {
        color: #f00;
    }
</style>