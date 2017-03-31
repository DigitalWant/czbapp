<template lang="html">


  <div class="ui equal width centered grid stackable">
    <div class="column eleven wide">
      <div class="ui segments">

        <div class="ui segment red grid">
          <h2 class="ui center aligned icon header" style="margin-top:1em;">
            <i class="circular university icon"></i>
            帐户资料
          </h2>
        </div>

        <div class="ui segment olive grid">
          <div class="row">
            <div class="ten wide column center aligned">
              <div class="statistic ui tiny">
                <div class="label">
                  剩余学习币
                </div>
                <div class="value">
                  <i class="money icon "></i> {{ACCOUNT_COIN_INFO.result}} 枚
                </div>
              </div>
            </div>
            <div class="six wide column">
              <router-link class="ui button olive" :to="{name:'charge'}"><i class="icon add"></i>充值</router-link>
            </div>
          </div>
        </div>
        <div class="ui segment olive grid">
          <div class="row">
            <div class="eight wide column center aligned" v-for="item in ACCOUNT_COURSE_INFO.result">
              <div class="ui tiny statistic" >
                <div class="label">
                  多元智能
                </div>
                <div class="value">
                  <i class="hourglass half icon "></i>{{item.class_hour_name}}<b>{{item.lefthour}}</b>小时
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name:'account-info',
  computed:{
    ...mapGetters(['ACCOUNT_COURSE_INFO','ACCOUNT_COIN_INFO'])
  },
  created(){

    this.$store.dispatch('ACCOUNT_GET_COURSE_INFO_ACTION',{
      user_id:this.userId,
      courseName:'训练课预约',
    }).then(res=>{
      // console.log(res)
      this.$store.dispatch('ACCOUNT_GET_COIN_INFO_ACTION',{
        user_id:this.userId,
      }).then(res=>{
        // console.log(res)

      }).catch(err=>{
        // console.log(err)
      })
    }).catch(err=>{
      // console.log(err)
    })



  },
  data () {
    return {
      activeNames: ['1'],
      userId:this.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
