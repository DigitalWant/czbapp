<template lang="html">
  <div class="ui grid">
    <div class="sixteen wide column">
      <div v-if="USER_SIGN_IN_INFO!=undefined" class="ui  segment  piled raised ">
          <a class="ui olive ribbon label"><i class="settings icon"></i> 个人资料</a>
          <div class="ui grid stackable">
            <div class="seven wide column">
              <user-avatar></user-avatar>
            </div>
            <div class="nine wide column">
              <div class="ui form" id="userModifyInfoForm">
                <div class="ui horizontal divider">基本信息</div>

                  <div class="fields">
                    <div class="eight wide field">
                      <label><i class="user icon"></i> 用户名</label>
                      <!-- <input type="text" name="nickname" v-model="changeRequest.nickname" v-bind:value="USER_SIGN_IN_INFO.nickname"> -->
                      <el-input name="nickname" v-model="changeRequest.nickname" v-bind:value="USER_SIGN_IN_INFO.nickname"></el-input>
                      <div v-show="!USER_SIGN_IN_INFO.nickname" class="ui pointing label">
                        您的用户id，中文，数字，字符...
                      </div>
                    </div>

                    <div class="eight wide field">
                      <label> 性别</label>
                      <!-- <template>
                        <el-radio class="radio" v-model="radio" label="1" size="small">爸爸</el-radio>
                        <el-radio class="radio" v-model="radio" label="2" size="small">妈妈</el-radio>
                      </template> -->
                      <div class="inline fields">
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input class="hidden" type="radio" name="gender" id="father" value="1" v-model="changeRequest.gender" v-bind:checked="USER_SIGN_IN_INFO.gender == 1">
                            <label for="father"><i class="icon man"></i> 爸爸 </label>
                          </div>
                        </div>
                        <div class="field">
                          <div class="ui radio checkbox">
                            <input class="hidden" type="radio" name="gender" id="mother" value="0" v-model="changeRequest.gender" v-bind:checked="USER_SIGN_IN_INFO.gender == 0">
                            <label for="mother"><i class="icon woman"></i> 妈妈 </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="ui horizontal divider">联系信息</div>
                  <div class="fields">
                    <div class="eight wide field">
                      <label><i class="icon mobile"></i> 手机</label>
                      <!-- <div class="ui action input">
                        <input class="disabled" disabled type="text" name="mobile" v-bind:value="USER_SIGN_IN_INFO.mobile">
                        <button class="ui right olive icon button" @click="modifyMobile">
                          <i class="edit icon"></i>
                        </button>
                      </div> -->
                      <el-input type name="mobile" :value="USER_SIGN_IN_INFO.mobile" :disabled="true">
                        <el-button slot="append" @click="modifyMobile">
                          <i class="edit icon custom-icon-position"></i>
                        </el-button>
                      </el-input>
                      <user-mobile id="userUpdateMobileMobile"
                      :user-old-mobile="USER_SIGN_IN_INFO.mobile"
                      :user-id="USER_SIGN_IN_INFO.id"
                      :atModifyMobile="atModifyMobile"
                      @atModifyMobileClose="atModifyMobile=false"></user-mobile>
                    </div>
                    <div class="eight wide field">
                      <label><i class="icon mail"></i> Email</label>
                      <!-- <input type="text" name="email" v-model="changeRequest.email" v-bind:value="USER_SIGN_IN_INFO.email"> -->
                      <el-input name="email" v-model="changeRequest.email" :value="USER_SIGN_IN_INFO.email"></el-input>
                      <div v-show="!USER_SIGN_IN_INFO.email" class="ui pointing label">
                        请正确填写您的email，订阅我们的最新活动消息
                      </div>
                    </div>
                  </div>
                  <div class="fields">
                    <div class="sixteen wide field">
                      <label><i class="icon map"></i> 地址</label>
                      <!-- <input type="text" name="name" v-model="changeRequest.region" v-bind:value="USER_SIGN_IN_INFO.region"> -->
                      <el-input name="name" v-model="changeRequest.region" :value="USER_SIGN_IN_INFO.region"></el-input>
                      <div v-show="!USER_SIGN_IN_INFO.region" class="ui pointing label">
                        请正确填写您的地址, 以便我们寄送奖品
                      </div>
                    </div>
                  </div>
                <div class="ui action">
                  <!-- <el-button type="primary" @click="submitAction()"><i class="save icon"></i> 修改信息</el-button> -->
                  <div class="ui olive submit button">
                    <i class="save icon"></i> 修改信息
                  </div>
                </div>
                <div class="ui error message">
                  <ul>
                    <li></li>
                  </ul>
                </div>
                <div v-if="USER_MODIFY_INFO_ERRORS"  class="ui visible message" v-bind:class="USER_MODIFY_INFO_ERRORS.isSuccess==true?'success':'error'">
                  <ul class="list">
                    <li>{{ USER_MODIFY_INFO_ERRORS.errorMsg }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import UserAvatar from './UserAvatar'
import UserMobile from './UserMobile'

import { mapGetters } from 'vuex'

export default {
  name: 'user-info',
  components: {
    UserAvatar,
    UserMobile,
  },
  methods: {
    modifyMobile () {
      // console.log('test')
      // this.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userUpdateMobileMobile'})
      let vm = this
      vm.atModifyMobile = true
    }
  },
  data () {
    return {
      atModifyMobile:false,
      changeRequest: {
        user_id: this.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
        nickname: this.$store.state.userRegLog.USER_SIGN_IN_INFO.nickname,
        gender: this.$store.state.userRegLog.USER_SIGN_IN_INFO.gender,
        email: this.$store.state.userRegLog.USER_SIGN_IN_INFO.email,
        region: this.$store.state.userRegLog.USER_SIGN_IN_INFO.region,
      }
    }
  },
  computed: mapGetters([
    'USER_SIGN_IN_INFO',
    'USER_MODIFY_INFO_ERRORS',
  ]),
  mounted () {
    const vm = this
    const $form = $('#userModifyInfoForm')
    const $formTrigger = $('#userModifyInfoForm .submit')

    const submitRules = {
      nickname: {
        identifier: 'nickname',
        rules: [
          {
            type: 'empty',
            prompt: '请输入您的昵称'
          }
        ]
      },
      email: {
        identifier: 'email',
        rules: [
          {
            type: 'email',
            prompt: '请正确输入您的email'
          }
        ]
      },
      region: {
        identifier: 'region',
        rules: [
          {
            type: 'empty',
            prompt: '请输入您的地址'
          }
        ]
      },
    }
    const formAction = function(rules, validateAction) {
      $form.form({
        fields: rules,
        onSuccess: function(event){
          validateAction && validateAction()
        }
      })
    }
    const submitAction = () => {
      vm.$store.dispatch('USER_MODIFY_INFO_ACTION', JSON.parse(JSON.stringify(vm.changeRequest))).then((res)=>{

          setTimeout(()=>{

            vm.$store.state.userInfoModify.USER_MODIFY_INFO_ERRORS = undefined

            //TODO it shall be refresh the page, and get the lastest user profile from server
            vm.$store.state.userRegLog.USER_SIGN_IN_INFO.nickname = vm.changeRequest.nickname
            vm.$store.state.userRegLog.USER_SIGN_IN_INFO.gender = vm.changeRequest.gender
            vm.$store.state.userRegLog.USER_SIGN_IN_INFO.email = vm.changeRequest.email
            vm.$store.state.userRegLog.USER_SIGN_IN_INFO.region = vm.changeRequest.region

            // modify the local storage
            let localStorageData = JSON.parse(localStorage.getItem('USER_SIGN_IN_INFO'))
            localStorageData.nickname = vm.changeRequest.nickname
            localStorageData.gender = vm.changeRequest.gender
            localStorageData.email = vm.changeRequest.email
            localStorageData.region = vm.changeRequest.region

            // console.log(localStorageData)

            localStorage.setItem('USER_SIGN_IN_INFO', JSON.stringify(localStorageData))


            // console.log('modifyInfo success',vm.$store.state.userInfoModify.USER_MODIFY_INFO_ERRORS)

          },2000)
      })
    }
    // form submit events
    $formTrigger.on('click',function(){
        formAction(submitRules, submitAction)
    })
  }
}
</script>

<style lang="scss" scoped>
  .ui.fluid.image {
    padding-top: 40px;
  }
  .el-input .el-input-group__append>button{
    padding: 10px 8px;
  }
  .custom-icon-position{
    transform: translate(16%, 14%)
  }
</style>
