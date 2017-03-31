<template lang="html">
  <div class="ui two column centered grid profile-list stackable">

      <div class="column" v-if="CHILD_LIST==undefined" >
        <div class="ui icon message">
          <i class="notched circle loading icon"></i>
          <div class="content">
            <div class="header">
              没有查询到您的孩子信息
            </div>
            <p>请按添加新宝宝按钮.</p>
          </div>
        </div>
      </div>

    <user-baby-card-item v-for="child in CHILD_LIST" v-bind:baby-info="child"  @modifying="modifyModalVisible=true"></user-baby-card-item>
    <div class="row">
        <div class="ui action">
          <div class="ui olive button right floated" @click="addModalVisible=true">
            <i class="add icon"></i> 添加新宝宝
          </div>
        </div>
    </div>

    <el-dialog title="添加宝宝" v-model="addModalVisible" size="tiny" custom-class="responsive-element-dialog" >
      <user-baby-add-form @addSuccess="addModalVisible=false"></user-baby-add-form>
    </el-dialog>

    <el-dialog title="修改宝贝信息" v-model="modifyModalVisible" size="tiny" custom-class="responsive-element-dialog" >
      <user-baby-modify-form @modifySuccess="modifyModalVisible=false"></user-baby-modify-form>
    </el-dialog>

    <basic-modal id="removeChildModal">
      <div class="header ui icon" slot="header">
        <i class="archive icon"></i>
        删除宝贝资料？
      </div>
      <div class="ui equal width center aligned grid" slot="content">
        <div class="row">
          <div class="column">
              此操作将删除该孩子的信息，请谨慎操作！
          </div>
        </div>
      </div>

      <div class="actions ui equal width center aligned grid" slot="action">
        <div class="ui cancel red inverted button">
          <i class="remove icon"></i>
          取消
        </div>
        <div class="ui ok olive inverted button">
          <i class="checkmark icon"></i>
          确定
        </div>
      </div>

    </basic-modal>
  </div>
</template>

<script>
import UserBabyCardItem from './UserBabyCardItem'
import BasicModal from './BasicModal'
import SimpleModal from './SimpleModal'
import UserBabyAddForm from './UserBabyAddForm'
import UserBabyModifyForm from './UserBabyModifyForm'

import { mapGetters } from 'vuex'

export default {
  name: 'user-baby-card-list',
  components: {
    UserBabyCardItem,
    BasicModal,
    SimpleModal,
    UserBabyAddForm,
    UserBabyModifyForm,
  },
  data () {
    return {
      addModalVisible:false,
      modifyModalVisible:false,
    }
  },
  computed: {
    ...mapGetters(['CHILD_LIST'])
  },
  created () {
    // console.log(this.$store.state.baby.CHILD_LIST)
    this.$store.dispatch('CHILD_GET_ALL', this.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
  },
  destroyed () {
    // console.log()
    $('#removeChildModal').form('destroy')
  },
}
</script>

<style lang="scss">
.cov-vue-date {
  width: 100%;
}
#addChildModal, #modifyChildModal {
.ui.form {
    padding-top: 0px;
  }
  .actions {
    background-color: #fff;
  }
}
</style>
