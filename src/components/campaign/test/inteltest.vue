<template lang="html">
  <div class="ui fluid container">
    <div class="ui container" >

        <div class="ui segment stacked">

          <template v-if="loading==false">
              <div class="ui olive ribbon label">
                <i class="eye icon"></i> 创造力测试 - 第{{local.user_at+1}}题
              </div>
              <transition name="slide-fade" appear>
                <div class="ui segment basic stageImg" v-if="local.user_at==0 && local.stageStart==false && showResult==false">
                  <div class="promotion-box ">
                    <h1>创造力测试</h1>
                    <h3>发觉孩子的8大智能</h3>
                    <h5>适合3-6岁的孩子测试</h5>
                  </div>
                  <div class="call-to-action">
                      <el-button class="ui button" type="success" size="large" @click="local.stageStart=true">开始测试</el-button>
                  </div>
                </div>
              </transition>
              <div class="ui segment basic" v-if="showResult==true">
                  <div class="inst_title">创造力测试结果</div>
                  <div class="" style="width:100%;height:100px;line-height:100px;text-align:center;font-size:2rem;">
                      您宝宝的得分
                  </div>
                  <el-table
                  id="dataPc"
                   :data="tableData"
                   style="width: 100%;text-align:center">
                   <el-table-column
                     prop="data0"
                     align="center"
                     label="语言表达">
                   </el-table-column>
                   <el-table-column
                     prop="data1"
                     align="center"
                     label="数学逻辑">
                   </el-table-column>
                   <el-table-column
                     prop="data2"
                     align="center"
                     label="空间思维">
                   </el-table-column>
                   <el-table-column
                     prop="data3"
                     align="center"
                     label="艺术与创造">
                   </el-table-column>
                   <el-table-column
                     prop="data4"
                     align="center"
                     label="身体运动">
                   </el-table-column>
                   <el-table-column
                     prop="data5"
                     align="center"
                     label="人际交往">
                   </el-table-column>
                   <el-table-column
                     prop="data6"
                     align="center"
                     label="自我觉知">
                   </el-table-column>
                   <el-table-column
                     prop="data7"
                     align="center"
                     label="观察能力">
                   </el-table-column>
                 </el-table>
                 <el-row>
                   <div class="ui relaxed divided list" id="moibble">
                         <div class="item">
                          <div class="content">
                            <a class="header">语言表达 : {{resultData[0]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">数学逻辑 : {{resultData[1]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">空间思维 : {{resultData[2]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">艺术与创造 : {{resultData[3]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">身体运动 : {{resultData[4]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">人际交往 : {{resultData[5]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">自我觉知 : {{resultData[6]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                         <div class="item">
                          <div class="content">
                            <a class="header">观察能力 : {{resultData[7]}}</a>
                            <div class="description"></div>
                          </div>
                         </div>
                       </div>
                    <el-col :span="24" v-loading.body="chartLoading" element-loading-text="拼命加载中">
                      <div id="chart_container" style="width: 100%;  height: 400px; margin: 0 auto"></div>
                    </el-col>
                  </el-row>


                 <!-- <div class="inst_title" style="color:#666;border-bottom:0;font-size:1rem;text-align:center">
                   <span>如果想获取专业测评分析，点击"咨询"询问专业讲师</span>&nbsp;&nbsp;&nbsp;<el-button type="warning" style="">去咨询</el-button>
                 </div> -->
              </div>
                <transition name="slide-fade" appear>
                   <transition-group name="list" tag="div" >

                    <div class="ui basic segment" v-if="local.user_at==index && local.stageStart==true && showResult==false" v-bind:key="question" v-for="(question,index) in questions">

                      <div class="ui basic segment  padded">
                          <h3 class="ui header">{{question.problemContent}}</h3>
                      </div>

                      <div class="ui divided selection medium list">
                          <a class="item"
                          v-for="(answer,index) in question.options"
                          v-bind:key="answer"
                          @click="selected(index)">


                            <div
                            :class="[local.answer_sheet[question.question_id] ===answer.option_id?'olive':'grey']"
                            class="ui horizontal label"
                              style="text-transform: uppercase;">
                              {{String.fromCharCode(97 + index)}}
                            </div>
                            {{answer.optionContent}}
                          </a>
                      </div>
                    </div>
                </transition-group>
              </transition>
              <div class="ui segment center aligned basic" v-if="local.stageStart==true && showResult==false">
                <el-progress :text-inside="true" :stroke-width="14" :percentage="percentage" status="success"></el-progress>

                <!-- <div v-if="reachedEnd && completed!=questions.length" class="ui warning message">您还有题目没有完成...</div> -->

                <!-- <button v-if="completed==questions.length" class="ui right labeled icon button green" @click="submit">
                  完成, 提交!
                  <i class="right flag checkered icon"></i>
                </button> -->

                <div class="ui divider"></div>
                <a class="ui circular label"  v-for="item in completion" :class="labelClass(item)" >{{item.id+1}}</a>
              </div>
              <!-- <el-dialog title="提示" v-model="submitSuccess" size="tiny">
                  <span>数据我们已收到,请等待客服电话或与我们联系400-820-9202</span>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="submitSuccess = false">取 消</el-button>
                    <el-button type="primary" @click="submitSuccess = false">确 定</el-button>
                  </span>
                </el-dialog> -->
              <!-- <div class="ui segment center aligned basic">
                <div class="ui buttons" >
                    <button class="ui labeled icon button olive" @click="prev" >
                      <i class="left chevron icon"></i>
                      上一题
                    </button>
                    <button class="ui right labeled icon button olive"  @click="next">
                      下一题
                      <i class="right chevron icon"></i>
                    </button>
                  </div>

              </div> -->


            </template>
            <template v-else>
                <div class="ui active centered inline loader"></div>
            </template>
        </div>

    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name:'inteltest',
  data () {
    return {
      submitAble: false,
      tableData:[{}],
      loading:true,
      local:{
        user_at:0,
        stageStart:false,
        answer_sheet:[],
      },
      jumpTo:'',
      completion: [],
      campaign:{
        host:'https://mp2.yuningwang.com',
        path:'/czb/api/testQuestc',
        submitTo:'https://mp2.yuningwang.com/czb/api/getTestcAnswer',
        // submitTo:'http://192.168.16.188:8099/czb-server/czb/api/getTestcAnswer',
      },
      // submitSuccess:false,
      reachedEnd:false,
      showResult:false,
      resultData:[],
      chartLoading:true,
      radarOptionData: {
          radar: [
                  {
                  indicator: [
                      {text: '语言表达', max: 50},
                      {text: '数学逻辑', max: 50},
                      {text: '空间思维', max: 50},
                      {text: '艺术与创造', max: 50},
                      {text: '身体运动', max: 50},
                      {text: '人际交往', max: 50},
                      {text: '自我觉知', max: 50},
                      {text: '观察能力', max: 50}
                  ],
                  name:{
                    textStyle:{color:'#000'}
                  },
                  center: ['50%','50%'],
                  radius: 70
              }
          ],
          series: [
              {
                  type: 'radar',
                   tooltip: {
                      trigger: 'item'
                  },
                  itemStyle: {normal: {areaStyle: {type: 'default'}}},
                  data: [
                      {
                          value: undefined,
                      }
                  ]
              }
          ]
      }
    }
  },
  computed: {
    questions (){
      let vm = this

      return vm.CAMPAIGN_DATA['server']['problems']
    },
    completed (vm) {
      return vm.completion.filter(item=>item.value ===true).length
    },
    percentage () {
      let vm = this
      return Math.round(vm.completed/vm.questions.length*100)
    },
    ...mapGetters(['CAMPAIGN_DATA','USER_SIGN_IN_INFO'])
  },
  created () {
    let vm = this

    //check if user has local data,
    if (vm.CAMPAIGN_DATA.local==undefined) {
      vm.$router.replace('/multiIntelligence_section/multiIntelligenceTest')
    }
    vm.$store.dispatch('CAMPAIGN_GET_DATA',vm.campaign.host+vm.campaign.path).then(res=>{
      vm.completion = new Array(vm.questions.length).fill({}).map((item,i)=>{
        let answer = {
          id:i,
          value:false,
        }
        return answer
      })
      vm.loading = false
    })
  },
  methods: {
    stagStart(id) {

    },
    inteltestImgHide(){
      let vm = this
      vm.local.stageStart = true
    },
    labelClass(item){
      let vm = this
      if (vm.local.user_at === item.id){
        return 'orange'
      }
      return item.value === true ? 'green':''
    },
    swithTo (val) {
      let vm = this
      vm.local.user_at = val
      if (vm.local.user_at == vm.questions.length-1) {
        vm.reachedEnd = true
      }
    },
    answered () {
      return this.completion.filter(item=>item.value === true).length
    },
    selected(val){
      let vm = this
      let key = vm.questions[vm.local.user_at]['itesType']
      let value = vm.questions[vm.local.user_at]['options'][val]['score']
      let optionId = vm.questions[vm.local.user_at]['options'][val]['id']
      vm.$set(vm.completion[vm.local.user_at],'value',true)
      vm.local.answer_sheet.push({'itesType':key,'score':value,'optionId':optionId})
      if (vm.reachedEnd == true) {
        vm.submit()
      } else {
        vm.next()
      }

    },
    next(){
      let vm = this
      if (vm.local.user_at<vm.questions.length-1) {
        vm.local.user_at += 1
      }
      if (vm.local.user_at == vm.questions.length-1) {
        vm.reachedEnd = true
      }
    },
    prev(){
      let vm = this
      if (vm.local.user_at>0){
         vm.local.user_at -= 1
      }
    },
    showSignIn(){
      let vm = this
      // if the user closed the modal and not proceed
      vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
      vm.$store.state.userRegLog.USER_LOGIN_REDIRECT = '/inteltest'
      vm.$store.state.userRegLog.USER_LOGIN_REDIRECT_BEHAVIOR = function(){
          vm.submit()
          vm.$message('登录成功')
      }

    },
    loadChartScript () {
      let vm = this
      $.ajax({
        url: '//cdn.czbapp.com/assets/js/echarts.min.js',
        dataType: "script",
        success (){
          vm.displayChart()
        }
      })
    },
    displayChart () {
      let vm =this
      let myChart = echarts.init(document.getElementById('chart_container'))

      for(let i=0;i<8;i++){
        vm.resultData[i] = parseInt(vm.resultData[i])
      }

      vm.radarOptionData['series'][0]['data'][0]['value'] = vm.resultData
      vm.chartLoading = false

      setTimeout(()=>{
        myChart.setOption(vm.radarOptionData)
      },500)

    },
    submit(){
      let vm = this
      if (vm.USER_SIGN_IN_INFO==undefined){
        vm.showSignIn()
      } else {

        if(!vm.submitAble) {
          vm.submitAble = true
        }else {
          return
        }


          let submitParameters = {
            'userId': vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
            'testId': 'inteltest',
            'testType': 1,
            'babyAge': vm.$store.state.campaign.CAMPAIGN_DATA.local.babyAge,
            'babySex': vm.$store.state.campaign.CAMPAIGN_DATA.local.babyGender,
            'parentSex': vm.$store.state.campaign.CAMPAIGN_DATA.local.parentGender,
            'answers': vm.local.answer_sheet
          }


        $.ajax({
          'type':'post',
          contentType:"application/json",
          url:vm.campaign.submitTo,
          data: JSON.stringify(submitParameters) ,
          success:function(res){
            vm.submitSuccess = true
            vm.showResult = true;
            vm.resultData = res
            //display table
           res.forEach((item,index)=>{
              vm.tableData[0]['data'+index] = item
           })

           //display radar chart
           vm.loadChartScript()
         },
         error:function(){
           vm.$notify.info({
              title: '消息',
              message: '提交数据失败'
            })
         }
        })
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.ui.list .list > .item a.header, .ui.list > .item a.header {
    color: #000 !important;
}
.ui.divided.selection.list .list > .item, .ui.divided.selection.list > .item{
  &:hover{
    .ui.olive.labels .label, .ui.olive.label{
      background-color: red!important;
    }
  }
}


.ui[class*="right labeled"].icon.button {
    margin-top: 10px!important;
}
#moibble{
  display: none;
  @media only screen and (max-width: 700px) {
    display: block;
  }
}
.ui.relaxed.list:not(.horizontal) > .item{
  text-align:center!important;
  border: 0!important;
  font-size: 1rem!important;
  &:hover{
    background: red;
  }
}
#dataPc{
  @media only screen and (max-width: 700px) {
    display: none;
  }
}
.list .item {
  &:active, &:focus {
    .label {
      background-color: #DB2828 !important;
    }
  }
}
.ui.circular.label {
  margin: 5px;
}
.list-item {
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-active {
  opacity: 0;
  transform: translateY(30px);
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

.mainContent {
  padding-top: 120px;
  padding-bottom: 30px;
  min-height: 86vh;
  .ui.olive.ribbon.label {
    font-size: 1.2em;
  }
  @media only screen and (max-width: 700px) {
    padding-top: 64px;
  }
}
.promotion-box {
  width: 300px;
  position: absolute;
  left:50%;
  top:100px;
  text-align: center;
  padding: 10px 0 10px 0;
  background-color:rgba(255, 185, 0, 0.75);
  color:#fff;
  margin: 0;
  margin-left: -150px;
  @media only screen and (max-width: 700px) {
    width: 220px;
      margin-left: -110px;
  }
  line-height: 1em;
 }
.call-to-action{
  position: absolute;
  left:50%;
  bottom:3vh;
  margin:0px;
  margin-left: -55px;
  button {
    background: #ffb900;
    color:#fff;
    &:hover{
      background-color: #fff;
      color:#ffb900;
    }
  }
}
.stageImg{
  min-height: 60vh;
  background-image: url('//cdn.czbapp.com/static/images/gameTest/inst.jpg')!important;
  background-position: center!important;
  @media only screen and (max-width: 700px) {
      background-position: -1rem !important;
  }
  background-size: cover!important;

  }
  @media only screen and (max-width: 700px) {
      .stageImg.ui.container.basic{
        height: 400px!important;
      }

  }
  .inst_title{
    text-align: left;
    padding-left: 20px;
    color: #27ab31;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    font-size: 25px;
  }
  // .el-table th{
  //   text-align: center!important;
  // }
  // .el-table th>.cell{
  //     position: inherit;
  //     padding: 0;
  //     text-align: center!important;
  // }
  // .el-table td, .el-table th.is-leaf{
  //   text-align: center!important;
  // }
</style>
