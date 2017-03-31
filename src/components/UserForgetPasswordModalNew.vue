<template lang="html">
  <el-dialog title="用户恢复密码" v-model="USER_PASSWORD_RECOVERY_MODAL_VISIBLE" size="small"  @close="onClose"  @open="onOpen" custom-class="responsive-element-dialog">
    <div></div>
    <el-steps :active="USER_MODIFY_PASSWORD_STEP + 1" :center="true">
      <el-step title="步骤 1" icon="upload" description="输入手机号">
        <i class="mobile icon" slot="icon"></i>
      </el-step>
      <el-step title="步骤 2" icon="upload" description="核实验证码">
        <i class="spy icon" slot="icon"></i>
      </el-step>
      <el-step title="步骤 3" icon="picture" description="输入新密码">
        <i class="privacy icon" slot="icon"></i>
      </el-step>
      <el-step title="步骤 4" icon="picture" description="完成">
        <i class="hand peace icon" slot="icon"></i>
      </el-step>
    </el-steps>

      <!-- <div class="ui steps tiny ">
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==0?'':'disabled']">
          <i class="mobile icon"></i>
          <div class="content">
            <div class="title">输入手机号</div>
          </div>
        </div>
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==1?'':'disabled']">
          <i class="spy icon"></i>
          <div class="content">
            <div class="title">核实验证码</div>
          </div>
        </div>
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==2?'':'disabled']">
          <i class="privacy icon"></i>
          <div class="content">
            <div class="title">输入新密码</div>
          </div>
        </div>
        <div class="step" v-bind:class="[USER_MODIFY_PASSWORD_STEP==3?'':'disabled']">
          <i class="hand peace icon"></i>
          <div class="content">
            <div class="title">完成</div>
          </div>
        </div>
      </div> -->
      <div class="ui divider">

      </div>
      <el-form :model="phoneNumber" :rules="phoneNumber" ref="phoneNumber" label-width="100px" v-show="USER_MODIFY_PASSWORD_STEP==0 || USER_MODIFY_PASSWORD_STEP==1">
        <el-form-item label="输入手机号" prop="mobile"
          :rules="phoneNumberRules">
          <el-input type="tel" v-model="phoneNumber.mobile" auto-complete="off">
            <el-button v-if="global.verifyRequestRemain < global.verifyCodeInterval" slot="append" >{{global.verifyRequestRemain}}秒后再次发送</el-button>
            <el-button v-else slot="append" @click="getVerifyCode('phoneNumber','mobile')"><i class="send icon"></i>发送</el-button>
          </el-input>
        </el-form-item>
      </el-form>

      <el-form :model="verify" :rules="verify" ref="verify" label-width="100px" v-show="USER_MODIFY_PASSWORD_STEP==1">
        <el-form-item label="输入验证码" prop="code"
          :rules="verifyCodeRules">
          <el-input type="tel" v-model="verify.code" auto-complete="off">
            <el-button slot="append" @click="checkVerifyCode('verify')"><i class="check icon"></i>确定</el-button>
          </el-input>
        </el-form-item>
      </el-form>

      <el-form :model="newPassword" :rules="newPassword" ref="newPassword" label-width="100px" v-show="USER_MODIFY_PASSWORD_STEP==2">
        <el-form-item label="输入新密码" prop="password"
          :rules="newPasswordRules">
          <el-input type="password" v-model="newPassword.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <a class="ui olive button" @click="changePasswordRequest('newPassword')">更新</a>
        </el-form-item>
      </el-form>

      <div class="ui attached segment" v-show="USER_MODIFY_PASSWORD_STEP==3">
        <h2 class="ui center aligned icon header">
          <i class="circular checkmark icon teal"></i>
            恭喜！恢复密码成功！
        </h2>
      </div>

  </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "user-forget-password",
  data () {
    let mobileReg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/
    let validatorPhone = (rule, value, callback) => {
      if (mobileReg.test(value)===false) {
        callback(new Error('请输入正确的手机'))
      } else {
        callback()
      }
    }

    return {
      step: 0,
      phoneNumber:{mobile:''},
      verify:{code:''},
      newPassword:{password:''},
      phoneNumberRules:[
        { required: true,  trigger: 'blur,change,submit', message: '请输入手机号'},
        {required: true, validator:validatorPhone, trigger: 'blur,change' }
      ],
      verifyCodeRules:[
        { required: true,  trigger: 'blur,change,submit', message: '请输入验证码'},
      ],
      newPasswordRules:[
        { required: true,  trigger: 'blur,change,submit', message: '请输入新密码'},
      ]
    }
  },
  props:['passwordRecoveryStep'],
  computed: {
    ...mapGetters(['VERIFY_ERRORS','global','USER_MODIFY_PASSWORD_ERRORS','USER_MODIFY_PASSWORD_STEP','USER_PASSWORD_RECOVERY_MODAL_VISIBLE'])
  },
  methods:{
    resetAllFields (){
      let vm = this
      vm.phoneNumber.mobile = ''
      vm.verify.code = ''
      vm.newPassword.password = ''
    },
    onClose () {
      let vm = this
      vm.$store.state.common.USER_PASSWORD_RECOVERY_MODAL_VISIBLE = false
      vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 0
      // vm.resetAllFields()
    },
    onOpen () {
      let vm =this
      vm.$store.state.common.USER_PASSWORD_RECOVERY_MODAL_VISIBLE = true
      vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 0
      // vm.resetAllFields()
    },
    getVerifyCode (formName) {
      let vm = this
      vm.$refs[formName].validate((valid) => {
          if (valid) {
            vm.$store.dispatch('GET_VERIFY_CODE',{mobile:vm.phoneNumber.mobile}).then((res)=>{
              vm.$message(res.msg)
              vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
              vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 1
            }).catch(err=>{
              vm.$message(err.errorMsg)
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
    },
    checkVerifyCode (formName) {
      let vm = this
      vm.$refs[formName].validate((valid) => {
          if (valid) {
            vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 2
          } else {
            console.log('error submit!!')
            return false
          }
        })
    },
    changePasswordRequest (formName) {
      let vm = this
      vm.$refs[formName].validate((valid) => {

          if (valid) {
            let changeRequest = {
                mobile:vm.phoneNumber.mobile,
                passWord:vm.newPassword.password,
                verify_code:vm.verify.code,
            }

            vm.$store.dispatch('USER_MODIFY_PASSWORD_ACTION', changeRequest ).then((res)=>{
              vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 3
            }).catch((err)=>{
              vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 0
                vm.resetAllFields()
                vm.$message({type:'error',message:err.errorMsg})
            })

          } else {
            console.log('error submit!!')
            return false
          }
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.el-form-item {
  margin: 22px 0;
}
.ui.tiny.steps .step, .ui.tiny.step {
  padding: 1em;
}
  .ui.steps {
    margin: 0px auto;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
  .ui.attached.segment {
    border:none;
  }
  @media only screen and (max-width: 480px) {
    .input.action.ui input {
      width:120px!important;
    }
  }
</style>
