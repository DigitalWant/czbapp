<template lang="html">
  <el-dialog title="用户登录" v-model="USER_LOGIN_MODAL_VISIBLE" size="small" custom-class="responsive-element-dialog" @close="onClose"  @open="onOpen">
      <div class="ui two column middle aligned very relaxed stackable grid">
        <div class="column">
          <user-login-form-new></user-login-form-new>
        </div>
        <div class="center aligned column">
          <a class="ui big olive labeled icon button" @click="openRegisterModal">
            <i class="signup icon"></i>
            新用户注册
          </a>
        </div>
      </div>
  </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import UserLoginFormNew from './UserLoginFormNew'

export default {
  name: 'user-login-modal',
  components: {
    UserLoginFormNew,
  },
  computed: {
    ...mapGetters(['USER_LOGIN_MODAL_VISIBLE'])
  },
  methods: {
    onClose () {
      this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
    },
    onOpen () {
      this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
    },
    openRegisterModal () {
      this.$store.state.common.USER_REGISTER_MODAL_VISIBLE = true
    }
  },



}
</script>

<style lang="css">
</style>
