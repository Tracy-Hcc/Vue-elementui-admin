<template>
  <div class="main">
    <siderBar></siderBar>
    <div class="rightContainer">
      <navBar></navBar>
      <tabsView></tabsView>
      <viewMain></viewMain>
    </div>
  </div>
</template>
<script>
import siderBar from "@/components/layout/siderBar";
import navBar from "@/components/layout/navBar";
import tabsView from "@/components/layout/tabsView";
import viewMain from "@/components/layout/viewMain";
export default {
  name: "admin_main",
  components: {
    siderBar,
    navBar,
    tabsView,
    viewMain
  }
};
</script>
<style>
.main {
  width: 100%;
  height: 100%;
}
.rightContainer {
  padding-left: 13.3%;
  height: 100%;
  position: relative;
  overflow: hidden;
  overflow-y: auto;
}
</style>
