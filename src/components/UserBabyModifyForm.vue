<template lang="html">
  <el-form :model="CHILD_DETAIL" :rules="rules" ref="modifyChildInfo" label-width="100px" >
     <el-form-item label="宝宝名字" prop="baby_name">
      <el-input v-model="CHILD_DETAIL.baby_name"></el-input>
    </el-form-item>
    <el-form-item label="生日" prop="baby_birth">
      <input type="hidden" name="baby_birth" v-model="CHILD_DETAIL.baby_birth">
      <el-date-picker
        v-model="datepickerValue"
        type="date"
        :placeholder="CHILD_DETAIL.baby_birth"
        format="yyyy-MM-dd"
        @change="setBirth"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <el-form-item label="宝宝性别" prop="baby_gender">
      <!-- <input type="hidden" name="baby_gender" v-model="CHILD_DETAIL.baby_gender"> -->
      <el-select placeholder="宝宝性别" v-model="CHILD_DETAIL.baby_gender">
        <el-option label="小王子" value="1"></el-option>
        <el-option label="小公主" value="0"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <div class="ui olive right labeled icon button submit" @click="modify('modifyChildInfo')">
        修改完成
        <i class="checkmark icon"></i>
      </div>
    </el-form-item>
  </el-form>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'user-baby-modify-form',
  data () {

    return {
      babyGenderLable:'',
      datepickerValue:'',
      pickerOptions: {
         disabledDate(time) {
           return time.getTime() > Date.now() - 8.64e7;
         },
       },
       rules:{
         baby_name:[{ required: true, message: '请输入宝宝名称', trigger: 'blur change submit' }],
         baby_birth:[{ required: true, message: '请输入宝宝生日', trigger: 'submit change' }],
         baby_gender:[{ required: true, message: '请输入宝宝性别', trigger: 'change' }]
       },
    }
  },
  computed: {
    ...mapGetters(['CHILD_DETAIL','CHILD_MODIFY_ERRORS'])
  },
  methods:{
    setGender(value){
      this.$store.state.baby.CHILD_DETAIL.baby_gender = value
    },
    setBirth(value){
      this.$store.state.baby.CHILD_DETAIL.baby_birth = value
    },
    modify(formName){
      let vm = this
      vm.$refs[formName].validate((valid) => {
          if (valid) {
            let data = JSON.parse(JSON.stringify(vm.CHILD_DETAIL));
            if (data.baby_gender=='小王子'||data.baby_gender==1){
              data.baby_gender = 1
            } else {
              data.baby_gender = 0
            }

            vm.$store.dispatch('CHILD_MODIFY_ACTION', data).then((res)=>{

                vm.$message('修改成功')
                vm.$emit('modifySuccess')

                vm.$store.dispatch('CHILD_GET_ALL', vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id)

              }).catch((err)=>{
                vm.$message('修改失败')
              })

          } else {
            vm.$message('修改失败')
            return false;
          }
        })

    }
  },
  created(){
    this.baby_gender = this.CHILD_DETAIL.baby_gender === '小王子' ? '1' : '0'
  }
}
</script>
<style type="text/css">
	.el-date-editor--date, .el-select{
		width: 100%!important;
	}
</style>
