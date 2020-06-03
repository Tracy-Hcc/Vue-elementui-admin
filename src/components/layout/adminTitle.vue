<template>
  <div class="adminTitle">
    <img src="@/assets/imgs/Logo_Blue.png" alt class="adminIcon">
    <span>积分商城管理系统</span>
  </div>
</template>

<script>
export default {
  name: "adminTitle"
};
</script>

<style>
.adminTitle {
  width: 100%;
  height: 64px;
  font-size: 18px;
  color: #ffffff;
  line-height: 64px;
  background-color: #002140;
}
.adminTitle span {
  vertical-align: middle;
}
.adminIcon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 6px;
}
@media screen and (max-width: 1680px) {
    .adminTitle{
        font-size: 15px;
    }
    .adminIcon{
        width: 24px;
        height: 24px
    }
}
</style>
