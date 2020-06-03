<template>
  <div>
    <el-submenu :index="routerItem.path">
      <template slot="title">
        <img src="@/assets/imgs/product_icon.png" alt="" class="titleIcon">
        <span slot="title">{{routerItem.meta.title}}</span>
      </template>
      <el-menu-item :index="item.name" class="menu-item" v-for="item in routerItem.children" :key="item.name">{{item.meta.title}}</el-menu-item>
    </el-submenu>
  </div>
</template> 

<script>
export default {
  name: "siderItem",
  props:['routerItem'],
  data(){
      return{

      }
  },
  methods:{

  },
  mounted(){
    console.log(this.routerItem)
  },
  watch:{

  }
};
</script>

<style scoped>
.el-submenu{
  text-align: left;
}
.el-menu-item{
    min-width: 100px;
    padding: 0 50px !important;
    height: 40px;
    line-height: 40px;
}
.is-opened .menu-item{
  background-color: #000C17 !important;
  color: rgba(0, 0, 0, 0.45)
}
.el-menu-item.is-active{
  background-color: #1790FF !important;
}
.is-opened>>>.el-submenu__title{
  background-color: #001529 !important;
  color: #FFFFFF !important;  
}
.el-submenu>>>.el-submenu__title{
  height: 62px;
  padding: 0 26px !important;
}

.titleIcon{
  margin-right: 8px
}
</style>
