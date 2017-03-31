<template lang="html" >
  <div class="ui fixed menu">
    <div class="ui container" style="position:relative">
      <router-link :to="{ name: 'home' }" class="brand" >
        <img class="ui logo" src="../assets/images/logo.png" alt="成长保 - 提高注意力，考出好成绩" title="成长保 - 提高注意力，考出好成绩" />
      </router-link>
      <div class="ui large container menu right floated">
        <a class="toc item" @click="mobileMenuVisible = true"><i class="sidebar icon"></i></a>
        <router-link class="item" :to="{name:'home'}">首页</router-link>
        <!-- <router-link class="item" :to="{name:'video'}">在线视频</router-link> -->
        <router-link class="item" :to="{name:'multiIntelligence'}">训练课<i class="caret down icon"></i> <div class="" v-on:mouseover = "headerHover"  v-on:mouseout = "headerHovers" style="width:100%;height:100%;position:absolute;top:0;left:0"></div> </router-link>
        <div class="ui container divided center grid"  v-on:mouseover = "headerHover" v-on:mouseout = "headerHovers" v-show="headerShow"  style="position:absolute;left:0;top:90px;background-color:#fff;padding:1em 0;margin:0;height:150px;border:1px solid #f5f5f5; box-shadow: 0px 0px 2px 2px #f5f5f5, 0px 0px 0px 0px #e3e3e3;" >
             <router-link class="four wide column" style="width:25%;text-align:center;box-shadow:none;" :to="{name:'cart', params: { item: 'multiIntelligence' }}">
               <div class="hoverClass hoverClass1" @click="headerClick">
                 <div class="imgs"></div>
                 <span>购买课程</span>
               </div>
             </router-link>
            <router-link class=" four wide column "  style="width:25%;text-align:center" :to="{name:'multiIntelligenceTest'}">
              <div class="hoverClass hoverClass2" @click="headerClick">
              <div class="imgs"></div>
              <span>课前测试</span>
            </div>
            </router-link>
             <router-link class=" four wide column "  style="width:25%;text-align:center" :to="{name:'multiIntelligenceBook'}">
                <div class="hoverClass hoverClass3" @click="headerClick">
               <div class="imgs"></div>
               <span>课程预约</span>
               </div>
             </router-link>
             <router-link class=" four wide column "  style="width:25%;text-align:center" :to="{name:'multiIntelligenceRoom'}">
                <div class="hoverClass hoverClass4" @click="headerClick">
               <div class="imgs"></div>
               <span>进入教室</span>
               </div>
             </router-link>
        </div>
        <router-link class="item" :to="{ name: 'CompanyProfile' }">关于我们</router-link>
        <!-- <router-link class="item" :to="{name:'consult'}">轻咨询</router-link> -->
        <!-- <router-link class="item" :to="{name:'test'}">专业测评</router-link> -->
        <div class="right item" id="userLogin" >
          <!-- <button class="ui tiny olive button" v-if="!userSignInInfo" @click="openLoginModalNew">
            <i class="icon user"></i>
            登录
          </button>
          <button class="ui tiny olive button" v-if="!userSignInInfo" @click="openLoginModalNew">
            <i class="icon user"></i>
            注册
          </button> -->
          <el-button type="primary" @click="openLoginModalNew" v-if="!userSignInInfo" >登陆</el-button>
          <el-button @click="openRegisterModalNew" v-if="!userSignInInfo" >注册</el-button>

          <user-menu v-if="userSignInInfo" v-bind:userSignInInfo="userSignInInfo"></user-menu>
        </div>
      </div>

      <el-dialog title="" id="mobilePrimaryNav" v-model="mobileMenuVisible" size="large" top="46px" :modal="false" >


        <div class="ui styled fluid accordion" >
          <div class="title" @click="goToRouterLink({ name: 'home' })"> 首页 </div>
          <div class="title">
            <div class="ui grid">
              <div class="fourteen wide column" @click="goToRouterLink({ name: 'multiIntelligence' })">训练课</div>
              <div class="two wide column" @click="headersShowsFunc"><i class="caret down icon"></i></div>
            </div>
           </div>
           <transition name="slide-fade">
             <div class="title" v-show="headersShows" style="padding-left:50px" @click="goToRouterLink({name:'cart', params: { item: 'multiIntelligence' }})">
             <div class="ui grid">
             <div class="fourteen wide column">购买课程</div>
             <div class="two wide column"><i class="angle right icon"></i></div>
           </div>
         </div>
       </transition>
           <transition name="slide-fade">
             <div class="title" v-show="headersShows" style="padding-left:50px" @click="goToRouterLink({name:'multiIntelligenceTest'})">
               <div class="ui grid">
               <div class="fourteen wide column">课前测试</div>
               <div class="two wide column"><i class="angle right icon"></i></div>
             </div>
           </div>
         </transition>
           <transition name="slide-fade">
             <div class="title" v-show="headersShows" style="padding-left:50px" @click="goToRouterLink({name:'multiIntelligenceBook'})">
               <div class="ui grid">
               <div class="fourteen wide column">课程预约</div>
               <div class="two wide column"><i class="angle right icon"></i></div>
             </div>
              </div>
            </transition>
             <transition name="slide-fade">
               <div class="title" v-show="headersShows" style="padding-left:50px" @click="goToRouterLink({name:'multiIntelligenceRoom'})">
                 <div class="ui grid">
                 <div class="fourteen wide column">进入教室</div>
                 <div class="two wide column"><i class="angle right icon"></i></div>
               </div>
               </div>
             </transition>
              <div class="title" @click="goToRouterLink({ name: 'CompanyProfile' })"> 关于我们 </div>
              <div class="title">
                <el-button type="primary" @click="openLoginModalNew" v-if="!userSignInInfo" >登陆</el-button>
                <el-button @click="openRegisterModalNew" v-if="!userSignInInfo" >注册</el-button>
                <user-menu v-if="userSignInInfo" v-bind:userSignInInfo="userSignInInfo" @linkClicked="mobileMenuVisible=false" ></user-menu>
              </div>
        </div>





        <!-- <a class="item" @click="goToRouterLink({ name: 'home' })">首页</a> -->
        <!-- <a class="item" @click="goToRouterLink({ name: 'multiIntelligence' })">训练课</a> -->
        <!-- <a class="item"  @click="goToRouterLink({name:'video'})">在线视频</a> -->
        <!-- <a class="item"  @click="goToRouterLink({ name: 'CompanyProfile' })">关于我们</a> -->
        <!-- <a class="item"  @click="goToRouterLink({name:'consult'})">轻咨询</a>
        <a class="item" @click="goToRouterLink({name:'test'})">专业测评</a> -->
        <!-- <button class="ui tiny olive button" style="margin-top:10px;" v-if="!userSignInInfo" @click="openLoginModalNew"> -->
          <!-- <i class="icon user"></i> -->
          <!-- 登录 | 注册 -->
        <!-- </button> -->
        <!-- <user-menu v-if="userSignInInfo" v-bind:userSignInInfo="userSignInInfo" @linkClicked="mobileMenuVisible=false" ></user-menu> -->
      </el-dialog>
    </div>
  </div>
</template>
<script>
import UserMenu from './UserMenu'

export default {
  name: 'primary-nav',
  props: ['userSignInInfo'],
  data () {
    return {
      timer:'',
      mobileMenuVisible: false,
      headerShow:false,
      headersShows:false,
    }
  },
  components: {
    UserMenu,
  },
  methods: {
    headersShowsFunc(){
      let vm = this
      vm.headersShows = !vm.headersShows
    },
    headerHover(){
      let vm = this
      clearTimeout(vm.timer)
      vm.headerShow = true
    },
    headerHovers(){
      let vm = this
      vm.timer = setTimeout(()=>{
          vm.headerShow = false
      },300)
    },
    headerClick(){
      let vm = this
      vm.headerShow = false
    },
    goToRouterLink (toName) {
      let vm = this
      vm.mobileMenuVisible = false
      vm.$router.push(toName)
    },
    openLoginModalNew () {
      this.$store.dispatch('TOGGLE_USER_LOGIN_MODAL')
    },
    openRegisterModalNew () {
      this.$store.dispatch('TOGGLE_USER_REGISTER_MODAL')
    },
    openForgetPasswordModalNew() {
      this.$store.dispatch('TOGGLE_USER_PASSWORD_RECOVERY_MODAL')
    }
  },
}
</script>
<style lang="scss" scoped>
@import '../style/mixins/_sprite.scss';
.ui.styled.accordion, .ui.styled.accordion .accordion {
  box-shadow: none;

}
.ui.divided.grid:not([class*="vertically divided"]) > .column:not(.row), .ui.divided.grid:not([class*="vertically divided"]) > .row > .column{
      box-shadow: -1px 0px 0px 0px rgba(34, 36, 38, 0.1);
}
.hoverClass{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  span{
    color: #353535;
  }
}
.hoverClass1{
  .imgs{
    width: 32px;
    height:32px;
    @include sprite($hovers-01)
  }
}
.hoverClass1:hover{
  span{
    color:#09bb07;
  }
  .imgs{
    @include sprite($hover-01)
  }
}
.hoverClass2{
  .imgs{
    width: 32px;
    height:32px;
    // background: url('/static/images/primaryNav/hovers-02.png') no-repeat;
    @include sprite($hovers-02)
  }
}
.hoverClass2:hover{
  span{
    color:#09bb07;
  }
  .imgs{
  // background: url('/static/images/primaryNav/hover-02.png') no-repeat;
  @include sprite($hover-02)
  }
}
.hoverClass3{
  .imgs{
    width: 32px;
    height:32px;
    // background: url('/static/images/primaryNav/hovers-03.png') no-repeat;
    @include sprite($hovers-03)
  }
}
.hoverClass3:hover{
  span{
    color:#09bb07;
  }
  .imgs{
  // background: url('/static/images/primaryNav/hover-03.png') no-repeat;
  @include sprite($hover-03)
  }
}
.hoverClass4{
  .imgs{
    width: 32px;
    height:32px;
    // background: url('/static/images/primaryNav/hovers-04.png') no-repeat;
    @include sprite($hovers-04)
  }
}
.hoverClass4:hover{
  span{
    color:#09bb07;
  }
  .imgs{
  // background: url('/static/images/primaryNav/hover-04.png') no-repeat;
  @include sprite($hover-04)
  }
}
.el-dropdown-menu li a{
  color: #000!important;
}
.ui.menu .ui.dropdown .menu>.item {
  padding: 1.5em!important;
}
.ui.menu .active.item {
    background: none;
}
.ui.search {
  .ui.icon.input {
    margin-top: 20px;
    margin-left: 20px;
  }
}
#mobilePrimaryNav {
  // display: none;
  .el-dialog {
    width:100%;
    left:auto;
    right:0px;
    transform: translateX(0%);
  }
  .el-dialog__title,.el-dialog__close {
    display: none;
  }
  .el-dialog__body {
    padding-top: 0px;
    a {
      &:before{
        display: none;
      }
    }
  }
}
</style>
<style lang="scss" scoped >
.overlay {
  float: right;
  margin: 0em 3em 1em 0em;
}
.overlay .menu {
  position: relative;
  left: 0;
  transition: right 0.5s ease;
}
.overlay.fixed .menu {
  left: 0px;
}
.ui.fixed.menu {
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#feffff+80,ededed+100 */
// background: #feffff; /* Old browsers */
// background: -moz-linear-gradient(top,  #feffff 80%, #ededed 100%); /* FF3.6-15 */
// background: -webkit-linear-gradient(top,  #feffff 80%,#ededed 100%); /* Chrome10-25,Safari5.1-6 */
// background: linear-gradient(to bottom,  #feffff 80%,#ededed 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#feffff', endColorstr='#ededed',GradientType=0 ); /* IE6-9 */
  box-shadow: none;
  .ui.menu .item:before {
    background: none;
  }
}

.logo{
  padding: 0em 2em 0em 0em;
  height: 80px;

  @media only screen and (max-width: 700px) {
    // float: right;
    // transform: scale(0.5);
    width: 80px;
    height: 40px;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 10px;
  }
}
.user-info {

}
.large.menu .active.item {
  color:#25ac38!important;
}
.large.menu, .compact.menu {
  border: none;
  box-shadow: none;
  background-color: transparent;
}
.large.menu {
  .item {
    color:#484848;
  }
  .active.item {
    border-color:#25ac38;
  }
  .toc.item {
    display: none;
  }

  @media only screen and (max-width: 700px) {
    margin-right: 0px!important;
    .ui.search,.item {display: none;}
    #userLogin {display: none;}
    .toc.item {
      // float: left;
      display: block;
    }
  }
}
.ui.styled.accordion > .title{
  color:#000;
  font-weight: 400;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateY(10px);
  opacity: 0;
}
</style>
