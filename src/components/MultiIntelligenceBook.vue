<template lang="html">
  <div class="ui fluid container" id="multiIntelligenceBook" v-if="USER_SIGN_IN_INFO!==undefined">
    <div class="ui container" >
    <div class="ui basic segment">
      <div class="ui grid stackable">
        <div class="two column row">
          <div class="ten wide column" style="background-color: #fff!important;">
            <div class="ui grid aligned change">请选择预约课程</div>
            <div class="ui grid aligned change2">
              <div class="column">
                <el-radio-group v-model="course.name" size="large" @change="courseTypeChange">
                  <el-radio-button label="训练课预约" ></el-radio-button>
                  <el-radio-button label="体验课预约" ></el-radio-button>
                </el-radio-group>
                <el-popover
                  ref="popover"
                  placement="top-start"
                  title="取消预约课程？"
                  width="200"
                  v-model="eventDetailPopoverVisible">
                  
                  <p>预约课程可以在24小时内取消</p>
                  <div style="text-align: right; margin: 0">
                    <el-button size="mini" type="text"  @click="cancelEvent">确定</el-button>
                    <el-button type="success" size="mini" @click="eventDetailPopoverVisible = false">取消</el-button>
                  </div>
                </el-popover>

                  <full-calendar
                  :events="ACCOUNT_BOOKED_COURSE_INFO"
                  lang="zh"
                  @changeMonth="changeMonth"

                  @dayClick="dayClick"
                  @moreClick="moreClick"
                  slot="reference"
                  ></full-calendar>

                <!-- <el-dialog
                  custom-class="responsive-element-dialog"
                  title="请选择您想预的课程及时间"
                  top="0"
                  v-model="bookTimeVisible"
                  > -->

                  <!-- <el-table
                    :data="bookButtons"
                    style="width: 100%"
                    highlight-current-row
                    :row-class-name="tableRowClassName">
                      <el-table-column
                        label="时间"
                        >
                        <template scope="scope">
                          {{ scope.row.time }}:00
                      </el-table-column>
                      <el-table-column>
                        <template scope="scope">
                          <el-button
                            v-if="scope.row.bookAvaiable"
                            size="small"
                            @click="courseDetailPreview(scope.$index, scope.row)"
                            >马上预约</el-button>
                            <!@click="confirmBooking(scope.$index, scope.row)"-->
                          <!-- </template>
                      </el-table-column>
                  </el-table> -->

                <!-- </el-dialog> -->
                <el-dialog
                custom-class="responsive-element-dialog"
                title="确认信息"
                v-model="bookCourseVisible" v-if="bookedItem!=null">

                    <el-table
                      :data="bookedItem_time.test"
                      style="width: 100%">
                      <el-table-column
                        prop="titleName"
                        label="课程名称">
                      </el-table-column>
                      <el-table-column
                        prop="fieldOneName"
                        label="维度">
                      </el-table-column>
                      <el-table-column
                        prop="fieldTwoName"
                        label="因子">
                      </el-table-column>
                    </el-table>

                    <el-table
                      :data="bookedItem.courseDetail"
                      style="width: 100%">
                      <el-table-column
                        prop="bookingDate"
                        label="预约日期">
                      </el-table-column>
                      <el-table-column
                        prop="bookingTime"
                        label="预约时间">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="">
                      </el-table-column>
                    </el-table>

                    <el-table
                      :data="bookedItem_time.test"
                      style="width: 100%">
                      <el-table-column
                        prop="fieldTypeName"
                        label="课时种类">
                      </el-table-column>
                      <el-table-column
                        prop="useTime"
                        label="消耗课时">
                      </el-table-column>
                      <el-table-column
                        prop=""
                        label="">
                      </el-table-column>
                    </el-table>

                  <span slot="footer" class="dialog-footer">
                    <button @click="confirmBooking" class="fluid large ui green button">确定</button>
                  </span>
                </el-dialog>
              </div>
            </div>
              </div>
              <div class="five wide column columnss row" style="background-color: #fff!important;margin-left:20px;">
                <div class="ui grid aligned change">请选择预约时间</div>
                <div class="ui grid">
                  <div class="two column row">
                    <div class="column" v-for="(item,index) in bookButtons" v-show="item.bookAvaiable" >
                      <div class="ui button fluid" :class="{'red':!item.bookAvaiable?'':'red'}"   @click="courseDetailPreview(index,item)" style="background-color:#fff;margin-top:12px;border:1px solid #ccc;">
                        {{item.time}}:00
                      </div>
                    </div>
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
import fullCalendar from 'vue-fullcalendar'
import {mapGetters} from 'vuex'

export default {
  name: 'multiIntelligenceBook',
  beforeRouteEnter (route, from, next) {
    if (window.localStorage.USER_SIGN_IN_INFO) {
      next()
    } else {
      next(vm=>{
        vm.$router.replace('/multiIntelligence_section/multiIntelligence')
        vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true

        //preset for redirect url
        vm.$store.state.userRegLog.USER_LOGIN_REDIRECT = '/multiIntelligence_section/multiIntelligenceBook'
        vm.$store.state.userRegLog.USER_LOGIN_REDIRECT_BEHAVIOR = function(){
          vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
          vm.initCalendar()
        }
      })
    }
  },
  data () {
    return {
      course:{
        name:'训练课预约',
        type:1,
        id:'',
      },
      hours:24,
      canBook:false,
      bookButtons:[],
      bookTimeVisible:false,
      bookCourseVisible:false,
      bookedItem: undefined,
      eventDetailPopoverVisible:false,
      selectedEvent:undefined,
      bookedItem_time:{},
      submitAble: true
    }
  },
  computed: {
    ...mapGetters(['ACCOUNT_BOOKED_COURSE_INFO','COURSE_INFO','COURSE_INFO_REF','USER_SIGN_IN_INFO']),
  },
  created () {
    let vm = this
    //TODO get course type
    for (let i=0; i<vm.hours; i++){
      let bookButton = {
        time:i,
        bookAvaiable: false,
        bookDetail: undefined,
      }
      vm.bookButtons.push(bookButton)
    }
    if (vm.USER_SIGN_IN_INFO != undefined) {
      vm.initCalendar()
    }
  },
  components: {
    fullCalendar,
  },
  methods : {
    initCalendar() {
      let vm = this
      this.$store.dispatch('GET_COURSE_INFO').then(res=>{
        vm.getBookedCourse()
        // if(vm.COURSE_INFO.length === 0) return
        vm.course.id = vm.COURSE_INFO[0]['id'] // 两种课程共用一个id，这样好吗？
        vm.course.type = 1 // 默认情况下是第一种
      })
    },
    getBookedCourse () {
      this.$store.dispatch('ACCOUNT_GET_BOOKED_COURSE_INFO_ACTION',{userId:this.$store.state.userRegLog.USER_SIGN_IN_INFO.id})
      .then(res=>{

        // console.log(res);
      })
    },
    courseTypeChange(val){
      let vm = this

      vm.course.id = vm.COURSE_INFO[0]['id']

      if (val==='训练课预约'){
        vm.course.type = 1
      } else if (val==='体验课预约') {
        vm.course.type = 2
      }
    },
    courseDetailPreview (val,item) {
      let vm = this
      vm.bookTimeVisible=false
      vm.bookedItem = vm.bookButtons[val]['bookDetail']
      vm.bookedItem_time.test[0].useTime=vm.bookedItem.useTimeNum
      // console.log('course type =====',vm.course.type);

      if(vm.course.type==1){
        vm.bookedItem_time.test[0].titleName="训练课预约"
      }else{
        vm.bookedItem_time.test[0].titleName="体验课预约"
      }

      if(vm.bookedItem!=undefined){
        vm.bookedItem.courseDetail = vm.COURSE_INFO.filter(item => item.id == vm.bookedItem.courseId)
        vm.bookedItem.courseDetail[0]['bookingDate'] = vm.bookedItem.year+'年'+vm.bookedItem.month+'月'+vm.bookedItem.day+'日'
        vm.bookedItem.courseDetail[0]['bookingTime'] = vm.bookedItem.hour+':00'
        vm.bookCourseVisible=true
      }
    },

    cancelEvent () {
      let vm = this
      vm.eventDetailPopoverVisible = false

      if (vm.selectedEvent!=undefined){
        vm.$store.dispatch('USER_CANCEL_COURSE',{id:vm.selectedEvent.courseData.id}).then(res=>{


          vm.getBookedCourse()

          if (res.resStatus == 'success') {

            vm.$notify({
              title: '课程取消成功',
              message: '请选择您想预约的日期',
              type: 'success'
            })

          } else {

            vm.$notify({
              title: '课程取消失败',
              message: '您所预定的课程已经超过24小时',
              type: 'error'
            })
          }

        })
        // reset the selectedEvent to undefined
        vm.selectedEvent = undefined
      }
    },
    confirmBooking () {
      let vm = this
      // vm.submitAble = true;
      if(vm.submitAble){
        vm.submitAble = false
      }else{

        return
      }
      console.log(vm.submitAble)
      // vm.bookedItem = this.bookButtons[val]['bookDetail']
      //if bookAvaiable then post data to server
      if (vm.bookedItem != undefined) {
        // vm.bookedItem.userId = vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id
        let data = {
          courseId:vm.bookedItem.courseId,
          userId: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
          bookId: vm.bookedItem.id,
          courseType:vm.course.type,
        }
        // send book requestDate
        vm.$store.dispatch('USER_BOOKING_COURSE',data).then(res=>{
          // 服务器响应后 延迟1秒客再次提交
          setTimeout(() => {
            vm.submitAble = true;
          }, 1000)
          vm.bookCourseVisible=false

          vm.getBookedCourse()

          if (res.resStatus == 'fail') {
            vm.$notify({
              title: '预约失败',
              message: '您已经预约过课程了，请先取消之前的预定再预约！',
              type: 'warning'
            })
          }

          if (res.resStatus == 'fail3'){
            vm.$notify({
              title: '预约失败',
              message: '课程不存在',
              type: 'warning'
            })
          }

          if (res.resStatus == 'fail2'){
            vm.$notify({
              title: '预约失败',
              message: '当用户课时不够',
              type: 'error'
            })
          }
          if (res.resStatus == 'fail1'){
            vm.$notify({
              title: '预约失败',
              message: '当预约人数已满',
              type: 'error'
            })
          }
          if (res.resStatus == 'success'){
            vm.$notify({
              title: '预约成功',
              message: '恭喜你，课程预约成功！',
              type: 'success'
            })
          }


        }).catch(err=>{
          vm.bookCourseVisible=false

          vm.$notify({
            title: '预约失败',
            message: '服务器异常',
            type: 'error'
          })
        })
      }

    },
    tableRowClassName(row, index) {
        if (row.bookAvaiable === true) {
          return 'info-row'
        }
        return ''
      },
    changeMonth (start, end, current) {
      // console.log('changeMonth', start, end, current)
    },
    eventClick (event, jsEvent, pos) {
      let vm = this
      vm.eventDetailPopoverVisible = true
      vm.$refs.popover.referenceElm = jsEvent.toElement
      alert(event)
      vm.selectedEvent = event
    },
    dayClick (day, jsEvent) {
      let vm = this
      let date = new Date(day)
      // console.log(date,day)
      let requestDate = {
        courseId: vm.course.id,
        userId: vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
        year:date.getFullYear(),
        month:date.getMonth()+1,
        day:date.getDate(),
        courseType:vm.course.type,
      }

      this.$store.dispatch('GET_AVAIABLE_COURSE_TIME',requestDate).then(res=>{

          if(vm.bookedItem_time!=undefined){

            // res.titleName=vm.course.name;
            vm.bookedItem_time['test'] = []
            vm.bookedItem_time['test'][0] = res
          }

        if (res.books.length>0){
          vm.canBook = true
          vm.bookTimeVisible = true

        } else {
          vm.$message({
            showClose: true,
            message: '不好意思！当天没有可供预约的课程',
            type: 'warning'
          })
          vm.canBook = false
        }

        //reset previous
        vm.bookButtons.forEach(button=>{
          button['bookAvaiable'] = false
          button['bookDetail'] = undefined
        })

        res.books.forEach(element=>{
          let hour = element.hour.indexOf('0')==0 ? element.hour.replace('0',''):element.hour
          vm.bookButtons[hour]['bookAvaiable'] = true
          vm.bookButtons[hour]['bookDetail'] = element
        })

      }).catch(err=>{

        vm.$message({
          showClose: true,
          message: '请您先联系客服，再预约课程',
          type: 'warning'
        })

      })
    },
    moreClick (day, events, jsEvent) {
      // console.log('moreCLick', day, events, jsEvent)
    }
  },
}
</script>
<style lang="scss">
#multiIntelligenceBook {
  padding-bottom: 0px;
  padding-top: 0px;
  background: url('//cdn.czbapp.com/static/images/book/bookBanner.jpg');
  background-color: #e3f2eb;
  background-position: center bottom;
  background-size: 70%;
  background-repeat: repeat-x;

  &>.ui.container {
    padding-top: 10rem;
    padding-bottom: 10rem;
  }

  .day-cell {
    // display: none;
    min-height: 80px!important;
  }
  .day-cell.today{
    background-color: #d5eed8!important;
  }
 .events-day {
   min-height: 80px!important;
 }
 .el-dialog__header {
   text-align: left;
   .el-dialog__title{
     color: #24ab38;
       }
   }
 .el-table th,.el-table__header-wrapper thead div{
   background-color: #f5fbf5!important;
   border-bottom: 0;
   text-align: center;
 }
 .el-table td{
   border-bottom: 0;
   text-align: center;
 }
}
</style>
<style lang="scss" scoped>

.ui.fluid.container{
  background-color: #f5f5f5;
}
.ui.green.button:hover{
  background-color: #ed6606;
}
.red:hover{
  background-color: red !important;
  color: #fff!important;
}
.ui.red.button{
    color: #000;
}
.ui.change{
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  padding-left: 30px;
  margin-top: 10px;
  background-color: #f5f5f5;
}
.ui.segment{
  padding: 0;
}
.ui.segment:last-child{
  overflow: hidden;
}
.ui.grid > .column:only-child{
  text-align: center;
}
.full-calendar-header{
  height: 40px;
  background-color: #d7d7d7;
  .title{
    color: #000;
  }
}
// .bookBanner{
//   position: absolute;
//   left: 0;
//   top:0px;
//   width: 100vw;
//   height: 100vh;
//   background: url('/static/images/book/bookBanner.jpg') no-repeat;
//   background-position: center;
//   background-size: cover;
// }
#multiIntelligenceBook {
  .cell{
    text-align: center;
  }
  .events-day {
    height: 90px
  }
  .day-cell {
      min-height: 109px;
  }
  .comp-full-calendar {
    margin: 0 auto;
    max-width: 600px;
    .header-center {
      font-size: 2rem;
      color:#57a437;
    }
  }
  .flexs{
    display: flex;
    justify-content: space-around;
  }
 .time{
   box-sizing: border-box;
   border: 1px solid #ccc;
   height: 40px;
   line-height: 40px;
 }
  @media only screen and (max-width: 700px) {

    .comp-full-calendar {
      .header-center {
        font-size: 1rem;
      }
    }
  }
}

</style>
