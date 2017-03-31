<template lang="html">
  <el-dialog title="用户更新手机" v-model="formVisible" size="small" @close="onClose" custom-class="responsive-element-dialog">
    <!-- 进度条 -->
    <el-steps :active="step+1" :center="true" class="steps">
      <el-step title="核实旧手机" :description="mobileBlurNumber" icon="edit">
        <i class="mobile icon" slot="icon"></i>
      </el-step>
      <el-step title="核实新手机" description="输入您的新手机号" icon="upload">
        <i class="mobile icon" slot="icon"></i>
      </el-step>
      <el-step title="完成" description="修改完成" icon="picture">
        <i class="info icon" slot="icon"></i>
      </el-step>
    </el-steps>
    <!-- 步骤一 -->
    <div v-show="step==0">
      <div class="custom-margin-top-bottom-10">
        <center>
          <el-button
            v-show="global.verifyRequestRemain == global.verifyCodeInterval"
            @click="sendVrifyCode">
            <i class="icon send"></i>发送验证码至手机
          </el-button>
        </center>
        <div v-show="global.verifyRequestRemain < global.verifyCodeInterval">
          <el-alert
            title="验证码已发送"
            type="info"
            :description="'请在' + global.verifyRequestRemain + '秒后重试'"></el-alert>
        </div>
        <!-- <div>{{global.verifyRequestRemain}}, {{global.verifyCodeInterval}}</div> -->
      </div>

      <div>
        <div class="field" >
          <label>核实旧手机验证码</label>
          <el-input type placeholder="请输入4位数字" v-model="oldPhoneVerifyCode">
            <!-- <template slot="append" @click="console.log(123)">核实旧手机验证码<i class="icon arrow right"></i></template> -->
            <el-button slot="append" @click="checkOldPhoneVrifyCode">
              核实旧手机验证码
              <i class="icon arrow right"></i>
            </el-button>
          </el-input>
        </div>
      </div>
    </div>
    <!-- 步骤二 -->
    <div v-show="step==1" class="step2">
      <!-- <div class="field" v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']"> -->
      <div class="field" v-show="global.verifyRequestRemain === global.verifyCodeInterval || global.verifyRequestRemain === 0">
        <label>请输入新手机号码</label>
        <el-input type placeholder="请输入新手机号码" v-model="newPhoneNumber">
          <el-button slot="append" @click="sendVerifyCodeToNewPhone">
            <i class="icon send"></i>
            发送新手机验证码
          </el-button>
        </el-input>
      </div>
      <el-alert v-if="global.verifyRequestRemain !== 0 && global.verifyRequestRemain < global.verifyCodeInterval" title="验证码已发送" type="info" :description="'请在' + global.verifyRequestRemain + '秒后重试'"></el-alert>
      <div class="margin-top-bottom-10"></div>
      <div class="field" >
        <!-- <i class="circular checkmark icon olive"></i> -->
        <label>请输入验证码</label>
        <el-input type placeholder="请输入验证码" v-model="newPhoneVerifyCode">
          <!-- <template slot="append">核实旧手机验证码 <i class="icon arrow right"></i></template> -->
          <el-button slot="append" @click="modifyMobile">
            下一步
            <i class="icon arrow right"></i>
          </el-button>
        </el-input>
      </div>
    </div>
    <!-- 步骤三 -->
    <div v-show="step==2">
      <h2 class="ui center aligned icon header">
        <i class="circular checkmark icon olive"></i>
          恭喜！修改手机成功！
      </h2>
    </div>
    <!-- semantic old -->
    <!-- <div class="ui steps tiny attached">
      <div class="step" v-bind:class="[false?'':'disabled']">
        <i class="mobile icon"></i>
        <div class="content">
          <div class="title">核实旧手机</div>
          <div class="description">{{mobileBlurNumber}}</div>
        </div>
      </div>
      <div class="step" v-bind:class="[step==1?'':'disabled']">
        <i class="mobile icon"></i>
        <div class="content">
          <div class="title">核实新手机</div>
          <div class="description">输入您的新手机号</div>
        </div>
      </div>
      <div class="step" v-bind:class="[step==2?'':'disabled']">
        <i class="info icon"></i>
        <div class="content">
          <div class="title">完成</div>
        </div>
      </div>
    </div>

    <div class="ui attached segment center aligned" v-show="false">
      <button v-show="global.verifyRequestRemain == global.verifyCodeInterval" class="ui button olive" type="submit" @click="sendVrifyCode" v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
         <i class="icon send"></i>发送验证码至旧手机
      </button>
      <div class="ui divider">
      </div>
      <div class="ui form">

        <div class="ui success visible message" v-show="global.verifyRequestRemain < global.verifyCodeInterval">
          <i class="close icon"></i>
          <div class="header">
            验证码已经发送成功.
          </div>
          <p>如果您没有收到， 请在{{global.verifyRequestRemain}}秒后重试...</p>
        </div>
        <div class="field" >
          <label>核实旧手机验证码</label>
          <div class="ui action input small">
            <input type="text"  v-model="oldPhoneVerifyCode" placeholder="四位阿拉伯数字">
            <button class="ui button olive" type="submit" @click="checkOldPhoneVrifyCode" >核实旧手机验证码 <i class="icon arrow right"></i></button>
          </div>
        </div>

        <div v-if="VERIFY_ERRORS" class="ui visible message" v-bind:class="VERIFY_ERRORS.isSuccess==true?'success':'error'">
          <ul class="list">
            <li>{{ VERIFY_ERRORS.errorMsg }}</li>
          </ul>
        </div>

      </div>
    </div>
    <div class="ui attached segment" v-show="step==1">
      <div class="ui form">
        <div class="field" >
          <label>请输入您的新手机号码</label>
          <div class="ui action left icon input " v-bind:class="[ global.verifyRequestRemain < global.verifyCodeInterval ? 'disabled':'']">
            <i class="icon mobile"></i>
            <input type="text" v-model="newPhoneNumber" placeholder="">
            <button class="ui button olive" type="submit" @click="sendVerifyCodeToNewPhone" ><i class="icon send"></i> 发送新手机验证码</button>
          </div>
        </div>
        <div class="ui success visible message" v-show="global.verifyRequestRemain < global.verifyCodeInterval">
          <i class="close icon"></i>
          <div class="header">
            验证码已经发送成功.
          </div>
          <p>如果您没有收到， 请在{{global.verifyRequestRemain}}秒后重试...</p>
        </div>
        <div class="field" >
          <label>核实新手机验证码</label>
          <div class="ui action input small">
            <input type="text"  v-model="newPhoneVerifyCode" placeholder="四位阿拉伯数字">
            <button class="ui button olive" type="submit" @click="modifyMobile" >核实新手机验证码 <i class="icon arrow right"></i></button>
          </div>
        </div>

        <div v-if="USER_MODIFY_PHONE_ERRORS" class="ui visible message" v-bind:class="USER_MODIFY_PHONE_ERRORS.isSuccess==true?'success':'error'">
          <ul class="list">
            <li>{{ USER_MODIFY_PHONE_ERRORS.errorMsg }}</li>
          </ul>
        </div>
      </div>

    </div>
    <div class="ui attached segment center aligned" v-show="step==2">
      <h2 class="ui center aligned icon header">
        <i class="circular checkmark icon olive"></i>
          恭喜！修改手机成功！
      </h2>
    </div> -->

  </el-dialog>

</template>

<script>
import {mapGetters} from 'vuex'
import SimpleModal from './SimpleModal'

export default {
  name: 'user-mobile',
  components: {
    SimpleModal,
  },
  data () {
    return {
      step:0,
      oldPhoneNumber: this.userOldMobile,
      user_id: this.userId,
      oldPhoneVerifyCode: '',
      newPhoneNumber: '',
      newPhoneVerifyCode: '',
    }
  },
  computed:{
    mobileBlurNumber () {
      return this.userOldMobile.substring(0,3)+'****'+this.userOldMobile.substring(7,11)
    },
    formVisible () {
      return this.atModifyMobile
    },
    ...mapGetters(['global','VERIFY_ERRORS','USER_MODIFY_PHONE_ERRORS'])
  },
  props:['userOldMobile','userId','atModifyMobile'],
  methods:{
    onClose () {
      let vm = this
      vm.$emit('atModifyMobileClose')
    },
    sendVerifyCodeToNewPhone () {
      let vm = this
      if(!(/^1[3|4|5|8][0-9]\d{9}$/.test(this.newPhoneNumber))) return vm.message({
        message: '请输入正确的手机号码！',
        type: 'success'
      })
      vm.$store.dispatch('GET_VERIFY_CODE',{ mobile:this.newPhoneNumber }).then((res)=>{
        // console.log(res)
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
      })
    },
    modifyMobile () {

      let vm = this
      vm.$store.dispatch('USER_MODIFY_PHONE_ACTION',{
        user_id: this.userId,
        mobile:this.newPhoneNumber,
        verify_code:this.newPhoneVerifyCode
      }).then((res)=>{
        setTimeout(()=>{
          vm.step = 2

          vm.$store.state.userMobileModify.USER_MODIFY_PHONE_ERRORS = undefined

          //TODO it shall be refresh the page, and get the lastest user profile from server
          vm.$store.state.userRegLog.USER_SIGN_IN_INFO.mobile = vm.newPhoneNumber

          // modify the local storage
          let localStorageData = JSON.parse(localStorage.getItem('USER_SIGN_IN_INFO'))
          localStorageData.mobile = vm.newPhoneNumber

          // console.log(localStorageData)

          localStorage.setItem('USER_SIGN_IN_INFO', JSON.stringify(localStorageData))


        },1000)
      }).catch((err)=>{
      })
    },
    checkOldPhoneVrifyCode () {
      let vm = this
      if(vm.oldPhoneVerifyCode.length != 4 || !(/\d{4}/.test(vm.oldPhoneVerifyCode))) return vm.$message({
        message: '请输入4位验证码！',
        type: 'warning'
      });// 判断输入验证码是否正常
      vm.$store.dispatch('CHECK_VERIFY_CODE',{ mobile:this.oldPhoneNumber, verify_code:this.oldPhoneVerifyCode }).then((res)=>{
        console.log(res)
        vm.step = 1
        vm.global.verifyRequestRemain !== vm.global.verifyCodeInterval
        // global.verifyRequestRemain
        vm.global.verifyRequestRemain = 0
        console.log(global.verifyRequestRemain);
      }).catch((err)=>{
        vm.$message({
          message: '输入的验证码不正确',
          type: 'warning'
        });// 提示输入的验证码不正确
      })
    },
    sendVrifyCode () {
      let vm = this
      vm.$store.dispatch('GET_VERIFY_CODE',{ mobile:this.oldPhoneNumber }).then((res)=>{
        // console.log(res)
        vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
      })
      // console.log(this.oldPhoneNumber,API_PATH_USER_GET_VERIFY_CODE)
    }
  },
  watch: {
    'formVisible':function (val) {
      // console.log(val);
      if(val === false) this.step = 0
    }
  }

}
</script>

<style lang="css" scoped>
  .step2>div {
    margin-top: 20px;
  }
  .steps {
    margin-bottom: 20px;
  }
  .margin-top-bottom-10 {
    margin: 10px 0;
  }
</style>
