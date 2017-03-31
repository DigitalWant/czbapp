<template lang="html">
  <el-form :model="newChildInfo" :rules="rules" ref="newChildInfo" label-width="100px" >
    <el-form-item label="宝宝名字" prop="baby_name">
      <el-input v-model="newChildInfo.baby_name"></el-input>
    </el-form-item>
    <el-form-item label="生日" prop="baby_birth">
      <input type="hidden" name="baby_birth" v-model="newChildInfo.baby_birth">
      <el-date-picker
        v-model="datepickerValue"
        type="date"
        placeholder="选择日期"
        format="yyyy-MM-dd"
        @change="setBirth"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="宝宝性别" prop="baby_gender">
      <input type="hidden" name="baby_gender" v-model="newChildInfo.baby_gender">
      <el-select placeholder="宝宝性别" v-model="newChildInfo.baby_gender">
        <el-option label="小王子" value="1"></el-option>
        <el-option label="小公主" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <div class="ui olive right labeled icon button submit" @click="addChild('newChildInfo')">
        添加
        <i class="checkmark icon"></i>
      </div>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-baby-add-form',
  data () {
    return {
      newChildInfo: {
        user_id: this.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
        baby_name: '',
        baby_gender: '',
        baby_birth: '',
      },
      datepickerValue:'',
      pickerOptions: {
         disabledDate(time) {
           return time.getTime() > Date.now() - 8.64e7;
         },
       },
      rules:{
        baby_name:[{ required: true, message: '请输入宝宝名称', trigger: 'blur change submit' }],
        baby_birth:[{ required: true, message: '请输入宝宝生日', trigger: 'submit change' }],
        baby_gender:[{ required: true, message: '请输入宝宝性别', trigger: 'submit change' }],
      },
    }
  },
  computed: {
    ...mapGetters(['CHILD_ADD_ERRORS'])
  },
  methods:{
    setBirth(value){
      this.newChildInfo.baby_birth = value
    },
    addChild(formName){
      let vm = this
      vm.$refs[formName].validate((valid) => {
          if (valid) {

            vm.$store.dispatch('CHILD_ADD_ACTION', JSON.parse(JSON.stringify(vm.newChildInfo))).then(()=>{

                vm.newChildInfo =  {
                    user_id: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
                    baby_name: '',
                    baby_gender: '',
                    baby_birth: '',
                  }
                  vm.datepickerValue = ''
                  vm.$store.dispatch('CHILD_GET_ALL',vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)
                  vm.$message('添加成功')
                  vm.$emit('addSuccess')
                  vm.$refs[formName].resetFields()
            })

          } else {
            vm.$message('添加失败')
            return false;
          }
        })
    },
  },
}
</script>

<style lang="css">
</style>
