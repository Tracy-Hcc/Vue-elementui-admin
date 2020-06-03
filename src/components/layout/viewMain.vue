<template>
    <div class="viewMain">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name:'viewMain'
}
</script>

<style scoped>
    .viewMain{
        padding: 20px;
        background-color: #F0F2F5;
    }
</style>
