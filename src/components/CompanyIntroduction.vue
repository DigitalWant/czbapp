<template lang="html">
  <div class="ui fluid" style="background-color:#f5f5f5;">
  <div class="ui container" id="CompanyMainContent">
    <div class="ui grid stackable">
      <div class="column three wide stackable">
        <div class="ui vertical menu" style="width:100%">
          <router-link class="item" :to="{ name: 'CompanyProfile' }" >公司简介</router-link>
          <router-link class="item" :to="{ name: 'AttentionCourse' }" >注意力课程 </router-link>
          <router-link class="item" :to="{ name: 'JoinCompany' }" >加入我们 </router-link>
          <router-link class="item" :to="{ name: 'SoftwareDownload' }" >软件下载 </router-link>
          <!-- <router-link class="item" :to="{ name: 'HelpCenter' }" >帮助中心 </router-link> -->
        </div>
      </div>
      <div class="column twelve wide" id="company" style="background-color:#fff;padding-left:3rem;padding-right:3rem;padding-top:0">
        <router-view></router-view>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name:'CompanyIntroduction',
  // data(){
  //   return {
  //     pageIndex:""
  //   }
  // },
  //   beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     vm.pageIndex = to['name']
  //   })
  // },
  methods:{
    // clik(){
    //   $('a').addClass("active")
    //   console.log($(this).index());
    // }
  }
}
</script>
<style lang="scss" scoped>
// .el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{
//   color:#000;
// }
// .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
//   color:#09bb07;
//   background-color: #eafcea;
//   &:after{
//     content: "";
//     border-left: 10px solid #09bb07;
//     height: 100%;
//     position: absolute;
//     left: 0;
//     top: 0;
//   }
// }
// .el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover{
//     color: #09bb07;
//     background-color: #fff;
// }
// .el-menu--dark{

// }
.item{
   text-align: center;
}
.active{
  color:#09bb07!important;
    background-color: #eafcea!important;
    &:after{
      content: ""!important;
      border-left: 10px solid #09bb07!important;
      height: 100%!important;
      position: absolute!important;
      transform: rotate(0deg)!important;
      left: 0!important;
      top: 0%!important;
    }
}
#CompanyMainContent {
  background-color: #f5f5f5;
  padding-top: 10em;
  min-height: 86vh;
  padding-bottom: 10rem;
  #company{
    @media only screen and (max-width: 768px) {
      padding-left: 2rem!important;
      padding-right: 2rem!important;
    }
  }
  @media only screen and (max-width: 768px) {
    padding-top: 4rem!important;
    padding-bottom: 0rem!important;
    margin: 0px!important;
  }
  .main {
    margin-top: 3em;
  }
}
.ui.grid > .column:not(.row){
  padding-top: 0;
  @media only screen and (max-width: 768px) {
    padding-bottom: 0rem!important;
  }
}
.ui.container > .ui.stackable.grid > .column, .ui.container > .ui.stackable.grid > .row > .column{
  @media only screen and (max-width: 768px) {
    padding-top: 0rem!important;
  }
}
</style>
