<template>
  <el-menu
    mode="horizontal"
    class="navbar"
  >  
    <el-menu-item><img src="@/assets/imgs/ser_icon.png" alt=""></el-menu-item>
    <el-menu-item><el-badge is-dot class="item"><img src="@/assets/imgs/mes_icon.png" alt=""></el-badge></el-menu-item>
    <el-menu-item>
      <img src="@/assets/imgs/headPic.jpg" alt="" class="headPic">
      <span class="usname"> 林可爱 </span>
    </el-menu-item>
    <el-menu-item><span class="logout">退出</span> </el-menu-item>
  </el-menu>
</template>

<script>
export default {
    name:'navBar',
    data(){
      return{

      }
    },
    mounted(){
      
    }
};
</script>

<style scoped>
  .navbar{
    box-shadow: 0px 7px 7px -10px #5E5E5E;
    -ms-box-shadow: 0px 7px 7px -10px #5E5E5E;
    text-align: right;
    padding: 20px 0;
  }
  .el-menu-item{
    display: inline-block;
    float: none;
    padding: 0 13px;
  }
  .logout{
    color: rgba(179, 32, 32, 0.65)
  }
  .headPic{
    height: 28px;
    border-radius: 500px
  }
  .el-menu--horizontal>.el-menu-item{
    height: auto;
    line-height: inherit;
  }
  .navbar>>>.el-badge__content.is-fixed.is-dot{
    right: 0
  }
  @media screen and (max-width: 1680px) {
    .navbar{
      box-shadow: 0px 7px 7px -12px #5E5E5E;
      -ms-box-shadow: 0px 7px 7px -12px #5E5E5E;
    }
  }
</style>
