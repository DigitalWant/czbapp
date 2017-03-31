<template lang="html">
  <div class="ui segment basic" style="margin:20px 0px 0px;padding:0px;">
    <div class="ui fluid image" v-show="step==0">
      <img class="ui bordered image" v-if="USER_SIGN_IN_INFO.avatar==''" src="../assets/images/brand.png" alt="" />
      <img class="ui bordered image" v-else :src="USER_SIGN_IN_INFO.avatar" >
      <a class="ui bottom right attached label olive" v-on:click="trigger"><i class="upload icon"></i> 上传新头像</a>
    </div>
    <div class="ui center aligned segment basic avatarUploader" v-show="step==1">
      <button class="ui olive button massive" v-on:click="trigger"><i class="icon cloud upload"></i> 上传</button>
      <input id="upload" style="display:none;" accept="image/png,image/gif,image/jpeg," ref="uploader" type="file" v-on:change="upload" />

    </div>
    <div class="ui center aligned segment basic" v-show="step==2" >
      <div class="ui buttons olive">
        <button class="ui labeled icon button" v-on:click="cancelModify">
          <i class="icon cancel"></i>
          取消
        </button>
        <!-- <button class="ui button" v-on:click="generateAvatar">
          <i class="icon crop"></i>
          剪裁
        </button> -->
        <button class="ui right labeled icon button" v-on:click="submitAvatar">
          <!-- <i class="icon checkmark"></i> -->
          <i class="icon crop"></i>

          完成
        </button>
      </div>
      <div id="upload-demo" class="croppie-container" style="position:relative;" ></div>
      <!-- <small>预览</small> -->
      <!-- <img id="testImage" class="ui medium image centered bordered" /> -->

      <!-- errors from backend -->
      <!-- <div v-if="USER_MODIFY_AVATAR_ERRORS"  class="ui visible message" v-bind:class="USER_MODIFY_AVATAR_ERRORS.isSuccess==true?'success':'error'">
        <ul class="list">
          <li>{{ USER_MODIFY_AVATAR_ERRORS.errorMsg }}</li>
        </ul>
      </div> -->

    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import Vue from 'vue'
import 'croppie'
import '../../node_modules/croppie/croppie.css'
let Events = new Vue({})
let croppieInstance = undefined

export default {
  name: 'user-avatar',
  computed:{
    ...mapGetters(['USER_SIGN_IN_INFO','USER_MODIFY_AVATAR_ERRORS'])
  },
  data () {
    return {
      step:0,
      loading:false,
    }
  },
  methods:{
    cancelModify () {
      let vm = this
      vm.step = 0
    },
    trigger (event) {
      $('#upload').click()
    },
    submitAvatar () {
      let vm = this
      $('#upload-demo').croppie('result', {
        type: 'blob',
        size: 'viewport'
      }).then(function (resp) {
        	let formData = new FormData()
        	formData.append('uid', vm.USER_SIGN_IN_INFO.id)
        	formData.append('type', 1)
        	formData.append('avatar', resp)
          vm.loading = true

          vm.$store.dispatch('USER_MODIFY_AVATAR_ACTION',formData).then((res)=>{

            setTimeout(()=>{

              vm.loading = false
              vm.$store.state.userAvatarModify.USER_MODIFY_AVATAR_ERRORS = undefined
              vm.$store.state.userRegLog.USER_SIGN_IN_INFO.avatar = res.result
              // modify the local storage
              let localStorageData = JSON.parse(localStorage.getItem('USER_SIGN_IN_INFO'))
              localStorageData.avatar = res.result
              localStorage.setItem('USER_SIGN_IN_INFO', JSON.stringify(localStorageData))
              // vm.$store.dispatch('TOGGLE_SIMPLE_POPUP',{selector:'#userUpdateAvatarModal',detachable:false})
              vm.step = 0
              vm.$message('头像更新成功')
              $("#testImage").removeAttr('src')

            },2000)

          })

      })
    },
    generateAvatar () {
      let vm = this
      vm.step = 2
    	croppieInstance.croppie('result', {
    		type: 'base64',
    		size: 'viewport',
    	}).then(function (resp) {
    		$("#testImage").attr('src',resp)
    	})
    },
    setImageIntoCropper (data) {
      croppieInstance.croppie('bind',{
        url: data
      })
    },
    upload (event) {
      let vm = this
      vm.step = 2
  		if (event.target.files && event.target.files[0]) {
            let reader = new FileReader()
            reader.onload = function (e) {
              Events.$emit('readFileCompleted',e.target.result)
            }
            reader.readAsDataURL(event.target.files[0])
        }
        else {
          swal("Sorry - you're browser doesn't support the FileReader API")
      }
    },
    updateAvatar () {
      let vm = this
      vm.step = 1

    }
  },
  mounted () {
    let vm = this
    croppieInstance = $('#upload-demo').croppie({
        viewport: {
            width: 200,
            height: 200,
        },
        boundary: {
            width: 300,
            height: 300
        }
    })
    Events.$on('readFileCompleted',vm.setImageIntoCropper)
  },
  destroyed () {
    croppieInstance.croppie('destroy')
  }

}
</script>

<style lang="css" scoped>
.ui.action.input input[type="file"] {
    display: none;
}
/*.avatarUploader {
  min-height: 50vh;
}*/

/*#testImage {
  margin-bottom: 40px;
}*/
</style>
