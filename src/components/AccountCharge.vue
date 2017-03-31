<template lang="html">
  <div class="ui equal width centered grid stackable">
    <div class="column eleven wide">
      <div class="ui segment basic">
        <div class="ui olive segment">
          <h2 class="ui header olive">卡片激活</h2>
          <span class="ui olive ribbon label"><i class="icon credit card alternative"></i></span>
          <div class="ui divider"></div>

          <el-form label-position="top" :rules="rules" ref="chargeForm" :model="ruleForm">
            <el-form-item label="请输入卡号" prop="card_no">
              <el-input name="card_no" v-model="ruleForm.card_no" placeholder="请输入卡号"></el-input>
            </el-form-item>
            <el-form-item label="请输入激活码" prop="card_pwd">
              <el-input name="card_pwd" v-model="ruleForm.card_pwd" placeholder="请输入激活码"></el-input>
            </el-form-item>
            <el-button type="primary" @click="submitForm('chargeForm')">激活卡片</el-button>
          </el-form>
          <!-- <div class="ui form" id="activateCard">
            <div class="field">
              <label>请输入卡号</label>
              <input type="text" name="card_no" v-model="card_no" placeholder="请输入卡号">
            </div>
            <div class="field">
              <label>请输入激活码</label>
              <input type="text" name="card_pwd" v-model="card_pwd" placeholder="请输入激活码">
            </div>
            <button class="ui button olive" type="submit" @click="activateCard">激活卡片</button> -->
            <!-- errors from frontend -->
            <!-- <div class="ui error message" v-show="frontErr == false">
              <ul>
                <li></li>
              </ul>
            </div> -->
            <!-- errors from backend -->
            <!-- <div v-if="ACCOUNT_CARD_ACTIVE_ERRORS && frontErr == true" class="ui visible message back-end" v-bind:class="ACCOUNT_CARD_ACTIVE_ERRORS.isSuccess==true?'success':'error'">
              <ul class="list">
                <li>{{ ACCOUNT_CARD_ACTIVE_ERRORS.errorMsg }}</li>
              </ul>
            </div>
        </div> -->
      </div>
  </div>
</div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'account-charge',
  data () {
    return {
      frontErr: false,
      card_no: '',
      card_pwd: '',
      ruleForm: {
        card_no: '',
        card_pwd: ''
      },
      rules:{
        card_no: [
          {required: true, message: '请输入12位的卡号', trigger: 'blur change'},
          {min:12, max:12, message: '请输入12位的卡号', trigger: 'blur'}
        ],
        card_pwd: [
          {required: true, message: '请输入您的密码', trigger: 'blur change'}
        ]
      }
    }
  },
  computed: {
    ...mapGetters(['ACCOUNT_CARD_ACTIVE_ERRORS'])
  },
  methods: {
    submitForm(formName){
      let vm = this;
      vm.$refs[formName].validate((valid) => {
        if(valid){
          // vm.$message('success');
          vm.$store.dispatch('ACCOUNT_CARD_ACTIVE_ACTION',{
            user_id: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
            card_no: vm.ruleForm.card_no,
            card_pwd:vm.ruleForm.card_pwd,
          }).then((res)=>{
            // console.log('success',res)
          }).catch((err)=>{
            // console.log('failure',err)
          })
        }else{
          return vm.$message({
            type: 'warning',
            message: '请输入正确的卡号和密码！'
          });
        }
      });
    },
    activateCard(){
      let vm = this
      $('#activateCard')
      .form({
        fields:{
          card_no: {
            identifier: 'card_no',
            rules:[
              {
                type: 'minLength[12]',
                prompt: '请正确输入卡号'
              }
            ]
          },
          card_pwd: {
            identifier: 'card_pwd',
            rules:[
              {
                type: 'empty',
                prompt: '请正确输入激活码'
              }
            ]
          }
        },
        onSuccess () {
          vm.frontErr = true
          vm.$store.dispatch('ACCOUNT_CARD_ACTIVE_ACTION',{
            user_id: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
            card_no: vm.card_no,
            card_pwd:vm.card_pwd,
          }).then((res)=>{
            // console.log('success',res)
          }).catch((err)=>{
            // console.log('failure',err)
          })

        },
        onFailure () {
          vm.frontErr = false
        }
      }).form('submit')
    }
  }
}
</script>

<style lang="css">
</style>
