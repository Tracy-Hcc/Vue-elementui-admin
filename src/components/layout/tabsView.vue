<template>
  <div class="tabs">
    <el-breadcrumb >
      <el-breadcrumb-item :to="{ path: item.path }" v-for="item in breadCrumbList" :key="item.name">{{item.meta.title}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="tab">
      <el-tabs type="card" :value="$route.name"  @tab-click='selectTabs' @tab-remove='removeTabs'>
        <!-- 首页不能被关闭 -->
        <el-tab-pane :label="item.meta.title" :name='item.name' :closable='item.name!=="home"' v-for="item in tabList" :key="item.name" ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex"
import { localSave, localRead, getTabListToLocal } from '@/lib/util'
export default {
  name: "tabsView",
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      "UPDATE_ROUTER", 
      "REMOVE_ROUTER",
      'REMOVE_TAB',
      'setBreadCrumb'
      ]),
    selectTabs(name) {
      this.$router.push({
        name: name.$vnode.key
      });
    },
    removeTabs(name){
      //  如果选择关闭的tab不是当前激活的
      if (this.$route.name !== name){
        this.REMOVE_TAB(name)
      }else{
        this.REMOVE_ROUTER(name)
        this.$router.push({
          name:this.newPath.name
        })
      }
    }
  },
  mounted() {
    // 增加tabs
    this.UPDATE_ROUTER(this.$route);
    this.setBreadCrumb(this.$route);
  },
  created() {

  },
  watch: {
    $route(newRoute) {
      // 增加tabs
      this.UPDATE_ROUTER(newRoute);
      this.setBreadCrumb(newRoute);
    }
  },
  computed: {
    ...mapState({
      tabList: state => state.tabView.tabList,
      newPath: state => state.tabView.newPath,
      breadCrumbList:state => state.breadCrumb.breadCrumbList
    })
  }
};
</script>

<style scoped>
.tabs {
  padding-top: 24px;
  background-color: #fff;
}
.el-breadcrumb {
  margin-left: 24px;
}
.tab {
  text-align: left;
  margin-top: 20px;
}
.el-tabs >>> .el-tabs__header {
  margin: 0;
  padding-left: 24px;
}
.el-tabs--card > .el-tabs__header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.el-tabs>>>.el-tabs__item{
  padding: 0 16px !important;
  border-bottom: 1px solid #E4E7ED !important;
}
</style>
