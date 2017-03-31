<template lang="html">
  <el-dialog title="用户注册" v-model="USER_REGISTER_MODAL_VISIBLE" size="small" top="3%" custom-class="responsive-element-dialog"  @close="onClose"  @open="onOpen">
    <div class="ui segment padded basic">
        <div class="ui one column middle aligned very relaxed stackable grid">
          <div class="column">
            <user-register-form-new @registerSuccess="onClose"></user-register-form-new>
          </div>
        </div>
    </div>
  </el-dialog>
</template>

<script>
import {mapGetters} from 'vuex'
import UserRegisterFormNew from './UserRegisterFormNew'

export default {
  name: 'user-register-modal',
  computed:{
    ...mapGetters(['USER_REGISTER_MODAL_VISIBLE']),
  },
  components: {
    UserRegisterFormNew,
  },
  methods: {
    onClose () {
      this.$store.state.common.USER_REGISTER_MODAL_VISIBLE = false
    },
    onOpen () {
      this.$store.state.common.USER_REGISTER_MODAL_VISIBLE = true
    },
  },
  // mounted (){
  //   let vm = this
  //   vm.$on('registerSuccess',function(){
  //     console.log('registerSuccess')
  //   })
  // }
}
</script>

<style lang="css">
</style>
