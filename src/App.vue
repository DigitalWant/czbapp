<template>
      <div id="app" >
          <primary-nav v-bind:userSignInInfo="USER_SIGN_IN_INFO"></primary-nav>
          <router-view class="mainContent"></router-view>
          <sticky-footer></sticky-footer>
          <!-- <user-login-modal-new></user-login-modal-new>
          <user-register-modal-new></user-register-modal-new>
          <user-forget-password-modal-new></user-forget-password-modal-new> -->
          <user-sign-in-modal></user-sign-in-modal>
          <user-register-modal-new2></user-register-modal-new2>
          <user-reset-password-modal></user-reset-password-modal>
      </div>
</template>
<script>
import PrimaryNav from './components/PrimaryNav'
import UserLoginModalNew from './components/UserLoginModalNew'
import UserRegisterModalNew from './components/UserRegisterModalNew'
import UserForgetPasswordModalNew from './components/UserForgetPasswordModalNew'

import UserSignInModal from './components/UserSignInModal'
import UserRegisterModalNew2 from './components/UserRegisterModalNew2'
import UserResetPasswordModal from './components/UserResetPasswordModal'

import StickyFooter from './components/StickyFooter'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    PrimaryNav,
    StickyFooter,
    UserLoginModalNew,
    UserRegisterModalNew,
    UserForgetPasswordModalNew,
    UserSignInModal,
    UserRegisterModalNew2,
    UserResetPasswordModal
  },
  created () {
      this.$store.dispatch('USER_CHECK_IN')
  },
  computed: mapGetters(['USER_SIGN_IN_INFO']),
}
</script>

<style lang="scss">
/*-------------------
     Breakpoints
--------------------*/

// @mobileBreakpoint            : 320px;
// @tabletBreakpoint            : 768px;
// @computerBreakpoint          : 992px;
// @largeMonitorBreakpoint      : 1200px;
// @widescreenMonitorBreakpoint : 1920px;
img[lazy=loading],img[lazy=error] {
  transform: scale(0.2)!important;
  margin: 0px auto 0px;
}

.swiper-pagination-bullet-active {
  background-color: #09bb07!important;
}
@media only screen and (max-width: 1200px) {
  .responsive-element-dialog {
    width: 90vw!important;
  }

}
@media only screen and (max-width: 768px) {
  .responsive-element-messageBox {
    width: 90vw!important;
  }
  .small-element-dialog {
    width: 90vw!important;
  }
}
@media only screen and (min-width: 769px){
  .small-element-dialog{
    width: 400px!important;
  }
}

.text.olive {
  color:#09bb07;
}
//element ui overrid
.el-input__inner:focus {
  border-color:#09bb07!important;
}
.el-dialog__close:hover {
  color:#09bb07!important;
}
.el-button--primary {
  background-color:#09bb07;
  border-color: #09bb07;
}
//el input button style
.el-input-group__append {
  background-color: #09bb07!important;
  color:#FFFFFF!important;
}
//button test

//table
.el-table .info-row {
  background: #c9e5f5;
}

.el-table .positive-row {
  background: #e2f0e4;
}
.el-row.address {
  margin: 0px!important;
  .el-col {
    padding:0px!important;
    padding-right: 5px!important;
  }
}
.el-input-number__decrease.el-icon-minus {
  left:0px;
  border-right:1px solid #c0ccda;
}
.el-input-number .el-input__inner {
  padding-left: 41px;
  padding-right: 41px;
  text-align: center;
}
//calendar cancel event
.event-item {
  background-color: #09bb07!important;
  padding: 3px 0px;
  font-weight: bold;
  color: #fff!important;
  display: block;
  &.is-finished {
    background-color: #adadad!important;
  }
  &.is-start {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;

    &:before{
      display: inline-block;
    }
  }
  &.is-end {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
  &:before{
    display: none;
    color:#fff;
  }
}
//progress
.el-progress.is-success .el-progress-bar__inner {
  background-color: #09bb07!important;

}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #09bb07;
  background: #09bb07;
}
//selector

.el-select-dropdown__item.selected,.el-select-dropdown__item.selected.hover,.el-select-dropdown__item.selected {
  background-color: #09bb07!important;
}
//radio
.el-radio-button.is-active {
  .el-radio-button__inner {
    background-color: #09bb07!important;
    border-color: #09bb07!important;
    &:hover{
      color:#fff!important;

    }
  }
}
// form
.el-form {
  text-align: left;
}
// #a23737
.el-radio-button__inner {
  &:hover{
    color:#09bb07!important;
  }
}
//header -- wrewr--
.special-header {
  margin-top: 30px!important;
  color:#22a231!important;
  font-size: 20px!important;
  &:before,&:after {
    background-image: url('data:image/gif;base64,R0lGODlhoAUCAIAAAP///yKiMSH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4zLWMwMTEgNjYuMTQ1NjYxLCAyMDEyLzAyLzA2LTE0OjU2OjI3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVGNTREMDZGRjAyQzExRTY4OUUzODM0OTY2NDUzQjAwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVGNTREMDcwRjAyQzExRTY4OUUzODM0OTY2NDUzQjAwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NUY1NEQwNkRGMDJDMTFFNjg5RTM4MzQ5NjY0NTNCMDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NUY1NEQwNkVGMDJDMTFFNjg5RTM4MzQ5NjY0NTNCMDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQAAAAAACwAAAAAoAUCAAACVISPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3nTcD3/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+z0sAAA7')!important;
    filter: opacity(0.6);
  }
  &:before {
    width: 10%!important;
  }
  &:after {
    width: 90%!important;
  }
}
</style>
<style lang="scss" scoped>

  #app{
    // font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  #homepage.mainContent {
    padding-top: 0px;
  }

</style>
<style >

@-webkit-keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}
@-moz-keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}
@-o-keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}
@keyframes scroll-down-anim {
	0%{ bottom: 2px; }
	50%{ bottom: 7px; }
	100%{ bottom: 2px; }
}

@keyframes masthead {
 0% {
    background-position: 0% 0%;
 }
 100% {
    background-position: 0% -475px;
 }

}

@-moz-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
   background-position: 0% -475px;
 }
}

@-webkit-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
   background-position: 0% -475px;
 }
}

@-ms-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
  background-position: 0% -475px;
 }
}

@-o-keyframes masthead {
 0% {
   background-position: 0% 0%;
 }
 100% {
   background-position: 0% -475px;
 }

}
</style>
