<template lang="html">
  <el-form :model="userReg" :rules="rules" ref="userReg">
    <el-form-item label="手机号" prop="mobile">
      <el-input type="tel" v-model="userReg.mobile"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="verify_code">
      <el-input type="tel" v-model="userReg.verify_code">
        <el-button v-if="global.verifyRequestRemain < global.verifyCodeInterval" slot="append" >{{global.verifyRequestRemain}}秒后再次发送</el-button>
        <el-button v-else slot="append" @click="sendVerifyCode('userReg','mobile')"><i class="send icon"></i>发送</el-button>
      </el-input>
    </el-form-item>
    <el-form-item label="密码" prop="passWord" >
      <el-input type="password" v-model="userReg.passWord" ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass" >
      <el-input type="password" v-model="userReg.checkPass" ></el-input>
    </el-form-item>
    <el-form-item>
      <a class="ui olive button" :class="[loading==true?'loading':'']" @click="submitRegisterForm('userReg')">注册</a>
      <a class="ui button" @click="resetForm('userReg')">重置</a>
    </el-form-item>
  </el-form>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'user-register-form',
  data () {
    let mobileReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
    let validatorPhone = (rule, value, callback) => {
      if (mobileReg.test(value)===false) {
        callback(new Error('请输入正确的手机'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.userReg.checkPass !== '') {
          this.$refs.userReg.validateField('checkPass')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.userReg.passWord) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      loading:false,
      userReg: {
        mobile: '',
        passWord: '',
        checkPass:'',
        verify_code: '',
        register_from: 'web',
      },
      rules: {
        mobile: [
            { required: true, message: '手机必填', trigger: 'change submit blur' },
            { required: true, validator:validatorPhone, trigger: 'blur,change' },
          ],
        verify_code: [
            { required: true, message: '验证码必填', trigger: 'change submit blur' },
        ],
        passWord: [
            { required: true, validator: validatePass, trigger: 'change submit blur' },
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'change submit blur' }
        ],
      },
    }
  },
  computed: {
     ...mapGetters(['global','USER_REGISTER_ERRORS','VERIFY_ERRORS'])
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    sendVerifyCode (formName,fieldName) {
      let vm = this
      vm.$refs[formName].validateField(fieldName,function(valid){
        if (valid=='') {
            vm.$store.dispatch('GET_VERIFY_CODE', { mobile: vm.userReg.mobile }).then((res)=>{
              vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
              vm.$message(res.msg)
            }).catch((err)=>{
              vm.$message({type:'error',message:err.msg})
            })
        }
      })
    },
    submitRegisterForm (formName) {
      let vm = this
      vm.$refs[formName].validate((valid) => {
        if (valid) {
          vm.loading = true
          vm.$store.dispatch('USER_REGISTER_ACTION', vm.userReg ).then((res)=>{
            vm.loading = false
            vm.$message(vm.USER_REGISTER_ERRORS.errorMsg)
            vm.$emit('registerSuccess')
          }).catch((err)=>{
              vm.loading = false
            vm.$message({type:'error',message:vm.USER_REGISTER_ERRORS.errorMsg})
          })
        } else {
          return false
        }
      })
    },
  },


}
</script>

<style lang="scss" scoped>

  @media only screen and (max-width: 480px) {
    .field input[name=verifyCode] {
      width:110px!important;
    }
  }
</style>
