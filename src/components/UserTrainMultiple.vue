<template lang="html">
  <div class="">
    <el-tabs v-model="activeName">
      <el-tab-pane label="未开始" name="second">
        <span slot="label"><i class="el-icon-date"></i> 未开始</span>
        <el-row class="train" v-for="(item,index) in afterCourseDesc">
          <el-col :span="24">预约时间 : <span class="green">{{item.start}} {{item.courseData.hour}}:00</span></el-col>
          <el-col :span="24">预约课程 : <span class="green">{{item.courseData.fieldTypeName}}</span></el-col>
          <el-col :xs="24" :sm="12" :md="6">课程维度 : {{item.courseData.fieldOneName}}</el-col>
          <el-col :xs="24" :sm="12" :md="6">课程因子 : {{item.courseData.fieldTwoName}}</el-col>
          <div class="ui divider clearing hidden"></div>
          <el-col :span="24">
            <router-link class="ui button olive" :to="{name:'multiIntelligenceRoom'}" >
              开始上课
            </router-link>
            <button class="ui button red" type="button" name="button" @click="quitTrainMultiple(item)">取消预约</button>
          </el-col>
        </el-row>
      </el-tab-pane>
       <el-tab-pane label="已完结" name="first">
         <span slot="label"><i class="el-icon-circle-check"></i> 已完结</span>

         <el-row class="train" v-for="(item,index) in beforeCourseDesc">
           <el-col :span="24">开课时间 : <span class="green">{{item.start}} {{item.courseData.hour}}:00</span></el-col>
           <el-col :span="24">课程名称 : <span class="green">{{item.courseData.fieldTypeName}}</span></el-col>
           <el-col :xs="24" :sm="12" :md="6">课程维度 : {{item.courseData.fieldOneName}}</el-col>
           <el-col :xs="24" :sm="12" :md="6">课程因子 : {{item.courseData.fieldTwoName}}</el-col>
            <!-- <div class="ui divider clearing"></div>
          <button class="ui button basic"  >
             课程评价
           </button>
           <button class="ui button basic" :to="{name:'multiIntelligenceRoom'}" >
             下载作业
           </button> -->
         </el-row>
       </el-tab-pane>
     </el-tabs>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return {
      haveCourse:false,
      beforeCourse:[],
      afterCourse:[],
       activeName: 'second'
    }
  },
  computed: {
    afterCourseDesc(){
      let vm = this
      return vm.afterCourse.reverse()
    },
    beforeCourseDesc(){
      let vm = this
      return vm.beforeCourse.reverse()
    },
    ...mapGetters(['ACCOUNT_BOOKED_COURSE_INFO','COURSE_INFO','COURSE_INFO_REF','USER_SIGN_IN_INFO']),
  },
  created(){
    let vm = this
    vm.getBookedCourse()
  },
  methods:{
    getBookedCourse () {
      let vm = this
      vm.$store.dispatch('ACCOUNT_GET_BOOKED_COURSE_INFO_ACTION',{userId:vm.USER_SIGN_IN_INFO.id}).then(res=>{
        if(vm.ACCOUNT_BOOKED_COURSE_INFO.length==0){
          vm.haveCourse = true
        }
        vm.beforeCourse = vm.ACCOUNT_BOOKED_COURSE_INFO.filter((item)=>{
          return item.courseData.statu== 1
        })
        vm.afterCourse = vm.ACCOUNT_BOOKED_COURSE_INFO.filter((item)=>{
          return item.courseData.statu== 0
        })
      })
    },
    quitTrainMultiple(item){
        this.$confirm('您将要删除已经预约的课程, 是否继续?', '提示', {
          customClass:'responsive-element-messageBox',
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let vm = this

          vm.$store.dispatch('USER_CANCEL_COURSE',{id:item.courseData.id}).then(res=>{
            if (res.resStatus == 'success') {
              vm.getBookedCourse()
              vm.$message({
                type: 'success',
                message: '取消预约成功!'
              });
            } else if(res.resStatus =="fail") {
              vm.$message({
                type: 'info',
                message: '课程已经开始，不可取消!'
              });
            } else {
              vm.$message({
                type: 'info',
                message: '取消失败'
              });
            }
          })

        }).catch(() => {

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
h1{
color: #22ad38;
border-bottom: 1px solid #ccc;
}
.train{
background-color: #fafafa;
padding: 20px;
.green{
  color: #27ab31;
}
}
.el-row {
margin-bottom: 20px;
&:last-child {
  margin-bottom: 0;
}
}
.el-col {
border-radius: 4px;
margin-bottom: 10px;
}

.grid-content {
border-radius: 4px;
min-height: 36px;
}
.row-bg {
padding: 10px 0;
}
</style>
