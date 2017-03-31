<template lang="html">
  <div class="ui compact menu" >
    <div class="ui simple dropdown item">
      <img class="ui avatar image" v-if="userSignInInfo.avatar==''" src="../assets/images/brand.png" alt="" />
      <img class="ui avatar image" v-else v-bind:src="userSignInInfo.avatar">
      <span v-if="userSignInInfo.nickname!=''">{{ truncateNickname }}</span>
      <span v-else>新用户</span>
      <i class="dropdown icon"></i>
      <div class="menu">
        <a class="item" @click="goToRouterLink({ name: 'userDashboard', params: { id: userSignInInfo.id }})">用户中心</a>
        <div class="item" @click="userSignOut">注销</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'user-menu',
  props: ['userSignInInfo'],
  computed: {
    truncateNickname: function() {
      if (this.userSignInInfo.nickname.length > 15 ) {
        return this.userSignInInfo.nickname.substring(0, 15) + '...'
      } else {
        return this.userSignInInfo.nickname
      }
    },
  },
  methods: {
    goToRouterLink (toName) {
      let vm = this
      vm.$emit('linkClicked')
      vm.$router.push(toName)
    },
    userSignOut () {
      let vm = this
      vm.$emit('linkClicked')
      vm.$store.dispatch('USER_SIGN_OUT').then(()=>{
        vm.$router.push('/')
        window.location.reload()
      })
    },
  }
}
</script>

<style lang="css">
</style>
