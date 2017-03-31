<template lang="html">
  <el-form :model="userInfo" :rules="rules" ref="userInfo" label-width="80px">
    <el-form-item label="手机号" prop="username">
     <el-input type="tel" v-model="userInfo.username" auto-complete="off"></el-input>
   </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input type="password"  auto-complete="off" v-model="userInfo.password" ></el-input>
    </el-form-item>
    <el-form-item>
      <div class="ui olive submit button" :class="[loading==true?'loading':'']" @click="onSubmit('userInfo')">登录</div>
      <a class="ui label right button" @click="openPasswordRecovery">
        <i class="help icon"></i> 忘记密码
      </a>
    </el-form-item>
  </el-form>
</template>

<script>
import UserForgetPassword from './UserForgetPassword'
import { mapGetters } from 'vuex'

export default {
  name: 'user-login-form',
  data () {
    let mobileReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
    let validatorPhone = (rule, value, callback) => {
      if (mobileReg.test(value)===false) {
        callback(new Error('用户名为手机号'))

      } else {

        callback()
        
      }
    }

    return {
      loading:false,
      userInfo: {
        // username: '',
        // password: '',
        username: '',
        password: '',
        type: 1,
        from: 'web',
      },
      rules: {
        username: [
            { required: true, message: '手机是必填字段', trigger: 'change submit blur' },
            { required: true, validator:validatorPhone, trigger: 'blur,change' },
          ],
        password: [
            { required: true, message: '密码是必填字段', trigger: 'change submit blur' },
          ]
      },
    }
  },
  computed: {
     ...mapGetters(['USER_SIGN_IN_ERRORS','USER_LOGIN_REDIRECT','USER_LOGIN_REDIRECT_BEHAVIOR'])
  },
  methods: {
    openPasswordRecovery(){
      let vm = this
      vm.$store.state.common.USER_PASSWORD_RECOVERY_MODAL_VISIBLE = true
    },
    onSubmit(formName) {
      let vm = this

        vm.$refs[formName].validate((valid) => {

          if (valid) {
              vm.login()
          } else {
            // console.log('error submit!!')
            vm.loading = false
            return false
          }

        })

    },
    login () {
      let vm = this
      vm.loading = true

      vm.$store.dispatch('USER_SIGN_IN_ACTION', vm.userInfo)
      .then((res) => {
        vm.loading = false

        if (vm.USER_LOGIN_REDIRECT) {
          //custom redirect
          vm.$router.push(vm.USER_LOGIN_REDIRECT)
          vm.USER_LOGIN_REDIRECT_BEHAVIOR && vm.USER_LOGIN_REDIRECT_BEHAVIOR()
          vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
        } else {
          vm.$store.dispatch('TOGGLE_USER_LOGIN_MODAL')
        }

      })
      .catch((err) => {
        vm.loading = false
        vm.$message({
          showClose: true,
          message: '登录信息不正确！',
          type: 'error'
        })
      })
    }
  },
}
</script>
