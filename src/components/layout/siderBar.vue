<template>
  <div class="siderBar">
    <adminTitle></adminTitle>
    <el-menu
      background-color="#002140"
      text-color="#A6A6A6"
      active-text-color="#fff"
      :default-active='activeMenu'
      @select='selectMenu'
    >
      <siderItem v-for='item in routerList' :key="item.name" :routerItem='item' v-if="item.inMenu"></siderItem>
    </el-menu>
  </div>
</template>

<script>
import { routerMap } from '@/router'
import siderItem from './siderItem.vue'
import adminTitle from './adminTitle.vue'
export default {
  name: "siderBar",
  data(){
    return{
      routerList:routerMap,
      activeMenu:''
    }
  },
  components:{
    siderItem,
    adminTitle
  },
  methods:{
    getActiveMenu(route){
      this.activeMenu = route.name
    },
    selectMenu(index){
      this.$router.push({
        name:index
      })
    }
  },
  mounted(){
    this.getActiveMenu(this.$route)
  },
  watch:{
    $route(route){
      this.getActiveMenu(this.$route)
    }
  }
  
};
</script>

<style scoped>
.siderBar {
  width: 13.3%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

}
.el-menu{
    width: 100%;
    height: 100%
}
.el-menu>>>.is-opened>.el-submenu__title .el-submenu__icon-arrow{
  -ms-transform:rotate(180deg) !important;
}
</style>
