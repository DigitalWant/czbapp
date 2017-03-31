<template lang="html">
  <div class="ui fluid container">
    <div class="ui container" >

        <div class="ui segment stacked">
          <template v-if="loading==false">
            <div class="ui olive ribbon label">
              <p><i class="eye icon"></i> 注意力测试</p>第{{local.user_at+1}}题
            </div>
            <div class="counter" :class="[progressBarTime > 0 ?'visible':'hide']" >
              <radial-progress-bar :diameter="75"
                                    startColor="#25ac38"
                                    stopColor="#25ac38"
                                    :animateSpeed = "progressBarTime"
                                   :completed-steps="progressBarCompleted"
                                   :total-steps="progressBarTotal">
               <p class="text olive"><i class="icon olive" :class="counterIcon()"></i>{{counterTime}}s</p>
              </radial-progress-bar>
            </div>
            <div class="ui segment basic stagView">
              <transition name="fade" appear>

                <div class="ui basic segment"
                  v-for="(stag,index) in local.stag"
                  v-if="local.user_at==stag_setting[index][0]
                  && stag.start==false" >

                  <div class="stageImg ui container basic" v-if="index == 0">
                    <div class="promotion-box ">
                      <h1>注意力测试</h1>
                      <h3>提高孩子注意力,考出好成绩</h3>
                      <h5>适合5-12岁孩子测试</h5>
                    </div>
                    <div class="call-to-action">
                        <el-button class="ui button" type="success" size="large" @click="stagStart(index)">开始测试</el-button>
                    </div>
                  </div>

                  <div class=" ui container basic" v-if="index == 1" style="text-align:center" >
                        <h4>11 ~ 15题</h4>
                        <h1>看图片3秒,选出形状相同的图形</h1>
                        <button class="ui large yellow button" style="margin-top:100px;" @click="stagStart(index)">开始测试</button>
                  </div>
              </div>
            </transition>


            <transition name="slide-fade" appear>
              <transition-group
                 v-on:before-enter="beforeQuestionEnter"
                 name="list"
                 tag="div" >
                    <div class="ui basic segment"
                        v-if="local.user_at==index
                        && stag_setting[local.stag_at].indexOf(local.user_at)!=-1
                        && local.stag[local.stag_at].start==true"
                        v-bind:key="question"
                        v-for="(question,index) in questions">

                          <div class="ui active centered inline loader" v-if="questionLoading == true"></div>

                          <transition
                            class="test"
                            appear
                            name="fade"
                            v-on:after-enter="questionLoadingCompleted">

                            <div class="ui basic segment" v-if="questionLoading != true && showResult!=true" >
                                <div class="ui grid" >
                                    <transition appear name="fade" >
                                      <div class="doubling one column row centered aligned" v-show="displayQuestion==true" >
                                        <h3 class="ui header">{{question.problem}}</h3>
                                        <img v-if="question.imageUrl" :src="campaign.cdn+question.imageUrl" alt="">
                                      </div>
                                    </transition>

                                    <transition appear name="fade">
                                    <div class="doubling four column row option-section" :class="optionClass(question.answer)" v-show="displayOptions==true">
                                      <div class=" column center aligned"
                                      v-for="(option,index) in question.options">
                                          <img
                                          v-on:click.stop.prevent="selected(index)"
                                          :src="campaign.cdn+option" >
                                          <div class="iconContainer" v-if="local.user_selected!='' && local.user_selected == String.fromCharCode(65 + index)">
                                            <i class="icon olive checkmark" v-if="String.fromCharCode(65 + index) == question.answer"></i>
                                            <i class="icon red remove" v-else></i>
                                          </div>
                                      </div>
                                    </div>
                                  </transition>
                                </div>

                            </div>
                          </transition>

                          <!-- show result -->
                          <div class="ui segment basic" v-if="showResult">
                              <div class="attn_title">注意力测试结果</div>
                              <el-row>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles">视觉分辨 : {{result_data[0]}}分</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">分辨能力包括对物体进行辨识（如颜色、大小）、配对和分类，视觉分辨能力好的孩子能轻松分辨相似物品、文字、符号之间的细微差别，较少因看错造成的抄写、运算错误。</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">{{str1}}</div></el-col>
                              </el-row>
                              <el-row>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles">物体恒常 : {{result_data[1]}}分</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">物体恒常能力是指一个物体或图片，不管变大、变小、旋转还是倾斜变形都可以辨认出来。</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">{{str2}}</div></el-col>                              </el-row>
                              <el-row>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles">视觉完形 : {{result_data[2]}}分</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">视觉完形能力是指看到被遮盖住物体的一部分就可以知道那个物体是什么，黑板上的字被擦掉一部分时仍然顺利抄写。</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">{{str3}}</div></el-col>
                              </el-row>
                              <el-row>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles">视觉记忆 : {{result_data[3]}}分</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">视觉记忆能力是指能够快速、准确的记住眼睛看到的东西，如电话号码、车牌等。</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">{{str4}}</div></el-col>
                              </el-row>
                              <el-row>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles">总分 : {{acount}}分</div></el-col>
                                <el-col :span="24"><div class="grid-content bg-purple-dark titles2">{{result_text}}</div></el-col>
                              </el-row>
                              <!-- <div class="inst_title" style="color:#666;border-bottom:0;font-size:1rem;text-align:center">
                                <span>如果想获取专业测评分析，点击"咨询"询问专业讲师</span>&nbsp;&nbsp;&nbsp;<el-button type="warning" style="">去咨询</el-button>
                              </div> -->
                          </div>
                    </div>
                  </transition-group>
                </transition>

              </div>


          </template>
          <template v-else>
              <div class="ui active centered inline loader"></div>
          </template>
      </div>
    </div>
    <div class="ui container segment center aligned basic">
      <!-- <el-dialog title="测试完成" custom-class="responsive-element-dialog" v-model="readyToSubmit" size="tiny">
        <span>恭喜您！已经完成了注意力测试</span>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="submit">提交测试结果</el-button>
        </span>
      </el-dialog> -->
      <div class="ui divider"></div>
      <!-- add debug: @click="switchTo(item,index)" -->
      <a class="ui circular label"   v-for="(item,index) in local.answer_sheet" :class="labelClass(item,index)" >{{index+1}}</a>
    </div>
  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import RadialProgressBar from 'vue-radial-progress'
let showQuestionAndOptionsTimer = undefined
let showQuestionThenOptionsPeekTimer = undefined
let showQuestionThenOptionsAnswerTimer = undefined
let showResultTimer = undefined
let counterInterval = undefined
let switchingTime = undefined //TODO

export default {
  name:'attntest',
  data () {
    return {
      str1:"",
      str2:"",
      str3:"",
      str4:"",
      result_text:"",
      acount:0,
      result_data:[],
      attntestImg:true,
      progressBarCompleted: 0,
      progressBarTotal: 1,
      progressBarTime:0,
      displayOptions:false,
      displayQuestion:false,
      questionMode:'',
      counterTime:0,
      loading:true,
      readyToSubmit:false,
      local:{
        user_at:0,
        stag_at:0,
        user_selected:"",
        stag:[
          {
            title:'stag 1 title',
            intro:'stag 1 intro',
            start:false,
          },
          {
            title:'stag 2 title',
            intro:'stag 2 intro',
            start:false,
          }
        ],
        answer_sheet:[],
      },
      jumpTo:'',
      completion: [],
      campaign:{
        host:'https://mp2.yuningwang.com',
        path:'/czb/api/testQuestz',
        test_id:'8a2f4e91583db1ad015842cda7781238',
        cdn:'http://cdn.czbapp.com/',
        submitTo:'https://mp2.yuningwang.com/czb/api/getTestzAnswer',
        // submitTo:'http://192.168.16.188:8099/czb-server/czb/api/getTestzAnswer',
      },
      reachedEnd:false,
      questionLoading:false,
      showResult:false,
    }
  },
  components: {
    RadialProgressBar,
  },
  computed:{
    questions (){
      let vm = this
      return this.CAMPAIGN_DATA['server']['answers']
    },
    stag_setting () {
      return [[0,1,2,3,4,5,6,7,8,9],[10,11,12,13,14,15,16,17,18,19,20,21,22,23,24]]
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
  methods:{
    attntestImgHide(){
      this.attntestImg = false
    },
    resetQuestion(){
      let vm = this
      vm.progressBarCompleted=0
      vm.progressBarTime = 500
      vm.local.user_selected = ""
      vm.displayOptions = false
      vm.displayQuestion = false

      clearTimeout(showQuestionAndOptionsTimer)
      clearTimeout(showResultTimer)
      clearTimeout(showQuestionThenOptionsPeekTimer)
      clearTimeout(showQuestionThenOptionsAnswerTimer)
      clearTimeout(switchingTime)
      clearInterval(counterInterval)

      // console.log(vm.reachedEnd)
      if (vm.reachedEnd==true) {
        // alert('end')

      } else {
        vm.loadQuestionImages(vm.local.user_at)

      }

    },
    beforeQuestionEnter: function (el) {
      let vm = this
      vm.resetQuestion()
    },
    questionLoadingCompleted (el) {
      let vm = this
      if (vm.questions[vm.local.user_at].mode=='showQuestionAndOptions') {
        vm.showQuestionAndOptionsMode()
      } else if (vm.questions[vm.local.user_at].mode=='showQuestionThenOptions') {
        vm.showQuestionThenOptionsMode()
      }
    },
    showQuestionAndOptionsMode () {
      let vm = this
      vm.displayOptions = true
      vm.displayQuestion = true
      vm.questionMode = 'showQuestionAndOptionsMode'
      vm.progressBarCompleted= 1
      vm.counterTime = vm.questions[vm.local.user_at].questionTime
      vm.progressBarTime=vm.counterTime*1000
      // vm.progressBarTime=vm.counterTime*100000000

      counterInterval = setInterval(()=>{
        vm.counterTime -= 1
      },1000)

      showQuestionAndOptionsTimer = setTimeout(()=>{
        vm.next()
      },vm.progressBarTime)

    },
    showQuestionThenOptionsMode () {
      let vm = this
      let viewTime = vm.questions[vm.local.user_at].viewQuestionTime*1000
      let answerTime = vm.questions[vm.local.user_at].answerTime*1000
      // let viewTime = vm.questions[vm.local.user_at].viewQuestionTime*1000000
      // let answerTime = vm.questions[vm.local.user_at].answerTime*1000000
      vm.questionMode = 'showQuestionThenOptionsViewMode'
      vm.displayQuestion = true
      vm.progressBarCompleted= 1
      vm.progressBarTime= viewTime
      vm.counterTime = viewTime/1000

      counterInterval = setInterval(()=>{
        vm.counterTime -= 1
      },1000)

      showQuestionThenOptionsPeekTimer = setTimeout(()=>{
        //give it a little time for counterTime restore
        vm.progressBarCompleted = 0
        vm.progressBarTime = 500


        switchingTime = setTimeout(()=>{
          clearTimeout(switchingTime)
          clearInterval(counterInterval)
          vm.displayOptions = true
          vm.displayQuestion = false
          vm.progressBarCompleted = 1
          vm.progressBarTime= answerTime
          vm.questionMode = 'showQuestionThenOptionsAnswerMode'
          vm.counterTime = answerTime/1000


          counterInterval = setInterval(()=>{
            if (vm.counterTime > 0){
              vm.counterTime -= 1
            } else {
              clearInterval(counterInterval)
            }
          },1000)

          showQuestionThenOptionsAnswerTimer = setTimeout(()=>{

            if (vm.reachedEnd==false){
              vm.next()
            } else {
              // vm.readyToSubmit = true
              vm.submit()
            }
          },answerTime)
        },500)


      },viewTime)
    },
    counterIcon(){
      let vm = this
      if (vm.questionMode=='showQuestionThenOptionsViewMode'){
        return 'unhide'
      }
      return 'alarm'
    },
    stagStart(val){
      let vm = this
      vm.attntestImg = false
      vm.questionLoading = true
      vm.$set(vm.local.stag[val],'start', true)
      vm.$set(vm.local,'stag_at', val)
      vm.loadQuestionImages(vm.local.user_at)

    },
    labelClass(item,index){
      let vm = this
      if (vm.local.user_at === index){
        return 'grey'
      }

      if (item.answer === vm.questions[index].answer) {
        return 'green'
      } else {
        if (vm.completion[index].value==true){
          return 'red'
        }
        return ''
      }
      return ''
    },
    optionClass(correctAnswer){
      let vm = this
      if (vm.local.user_selected !='') {
        if (vm.local.user_selected == correctAnswer) {
          return 'correct'
        } else {
          return 'error'
        }
      }

      if (vm.questionMode == 'showQuestionThenOptionsViewMode') {
        return 'showQuestionThenOptionsViewMode'
      }
      return vm.questionMode
    },
    switchTo (item,val) {
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
      // console.log(val);
      // console.log(vm.questions[vm.local.user_at]['answer'])
      if (vm.completion[vm.local.user_at].value==false) {
        let translateArray = ['A','B','C','D']
        let key = vm.questions[vm.local.user_at]['problemType']
        let answers = vm.questions[vm.local.user_at]['answer']
        let optionId = vm.questions[vm.local.user_at]['id']
        let value = String.fromCharCode(65 + val) //ABCDEFG....max is 25
        vm.$set(vm.completion[vm.local.user_at],'value',true)
        vm.$set(vm.local.answer_sheet[vm.local.user_at],'problemType',key)
        vm.$set(vm.local.answer_sheet[vm.local.user_at],'optionId',optionId)
        vm.$set(vm.local.answer_sheet[vm.local.user_at],'answer',answers)
        vm.$set(vm.local.answer_sheet[vm.local.user_at],'seleAnswer',value)
        // console.log(vm.local.answer_sheet[vm.local.user_at]);
        // vm.local.answer_sheet.push({'problemType':key,'answer':1,'seleAnswer':value})


        vm.$set(vm.local,'user_selected',value)
        showResultTimer = setTimeout(()=>{
          if (vm.reachedEnd !=true) {
            vm.next()
          } else {
            vm.resetQuestion()
            vm.submit()
          }
        },1000)



      }

    },

    next(){
      let vm = this
      vm.resetQuestion()

      //mark it
      vm.$set(vm.completion[vm.local.user_at],'value',true)

      if (vm.local.user_at<vm.questions.length-1) {
        vm.local.user_at += 1
      }
      if (vm.local.user_at==vm.questions.length-1) {
        vm.reachedEnd = true
      }

    },
    prev(){
      let vm = this
      vm.resetQuestion()
      if (vm.local.user_at>0){
         vm.local.user_at -= 1
      }
    },
    loadQuestionImages(index){
      let vm = this
      vm.questionLoading = true
      let question = Object.values(vm.questions[index])
      let questionAssets = question.filter(item=>typeof(item)=='string').filter(item=>item.indexOf('images/')==0)

      questionAssets.forEach((url,assetsIndex)=>{
        let image = new Image()
        image.src = vm.campaign.cdn+url
        image.onload = () => {
          vm.questions[index].assetsLoadStatus[assetsIndex] = true
          if(vm.questions[index].assetsLoadStatus.every(item=>item == true)){
            vm.questionLoading = false
          }
        }
      })

    },
    showSignIn(){
      let vm = this
      vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
      vm.$store.state.userRegLog.USER_LOGIN_REDIRECT = '/attntest'
      vm.$store.state.userRegLog.USER_LOGIN_REDIRECT_BEHAVIOR = function(){
        vm.submit()
      }
    },
    submit(){
      let vm = this

      if (vm.USER_SIGN_IN_INFO==undefined){

        vm.resetQuestion()
        vm.showSignIn()

      } else {

        var submitDatas = vm.local.answer_sheet.filter(function(item){
           return item.seleAnswer!==""
        });
        let submitParameters = {
                  "userId":vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id,
                  "testId":"attntest",
                  "testType":2,
                  "babyAge":vm.$store.state.campaign.CAMPAIGN_DATA.local.babyAge,
                  "babySex":vm.$store.state.campaign.CAMPAIGN_DATA.local.babyGender,
                  "parentSex":vm.$store.state.campaign.CAMPAIGN_DATA.local.parentGender,
                  "answers": submitDatas
        }

        $.ajax({
          'type':'post',
          contentType:"application/json",
          url:vm.campaign.submitTo,
          data: JSON.stringify(submitParameters) ,
          success:function(res){
              console.log(res);
              vm.showResult = true;
              vm.result_data = res

              // vm.readyToSubmit = false

              vm.acount = parseInt(vm.result_data[0])+parseInt(vm.result_data[1])+parseInt(vm.result_data[2])+parseInt(vm.result_data[3])
              // console.log(vm.acount);
              if(vm.result_data[0]>8) {vm.str1 = "孩子对相似物品辨识、分类的能力很好，在学习中可以轻松分辨文字、符号间的细微差别，不容易因此造成抄写、运算错误。"}
              else if(vm.result_data[0]<=8 && vm.result_data[0]>=6) {vm.str1= "孩子在辨识相似的文字、符号时可能会遇到问题，有时会因为看错而造成抄写、运算错误。"}
              else {vm.str1 = "孩子的视觉分辨能力有待提升，在学习中可能经常会因无法辨识相似的文字、符号而造成抄写、运算错误。"}

              if(vm.result_data[1] == 5) {vm.str2 = "孩子能顺利识别不熟悉的字体和放大、缩小或旋转的图形，不会因此而造成阅读缓慢和解题失误。"}
              else if(vm.result_data[1] == 4) {vm.str2 = "孩子在辨识相同文字的不同字体，相同图形的不同呈现方式时，会遇到一些困难，可能造成阅读缓慢等。"}
              else {vm.str2 = "孩子物体恒常的辨识能力有待提升，在学习中可能经常因此造成解题失误，甚至有可能丧失学习兴趣。"}

              if(vm.result_data[2] == 5) {vm.str3 = "当图形或文字被遮盖住一部分时，孩子能够迅速根据上下文等其他信息推断出正确的内容。"}
              else if(vm.result_data[2] == 4) {vm.str3 = "当图形或文字被遮盖住一部分时，孩子仅根据上下文等其他信息判断原始内容时，会产生推断错误，造成解题失误。"}
              else {vm.str3 = "当图形或文字被遮盖住一部分时，孩子很难根据上下文等其他信息推断出原始内容。"}

              if(vm.result_data[3] == 5) {vm.str4 = "孩子视觉记忆的能力较强，在抄写时能迅速记住整个句子快速书写，而不是看一个字抄一个字。"}
              else if(vm.result_data[3] == 4){ vm.str4 = "孩子视觉记忆的准确性良好，不会因此产生学习问题。"}
              else {vm.str4 = "孩子的视觉记忆能力有待提升，可能会导致阅读、解题缓慢等学习问题。"}

              if(vm.acount <= 10) {vm.result_text = "视觉认知不足可能会影响孩子生活技能的学习，带来许多危险，如使用剪刀时容易弄伤自己；走路判断高低失误而容易摔倒等；在学习中，也会遇到比较多的困难，如阅读、书写缓慢，无法理解题目等，容易造成学习兴趣丧失、自卑、人际不佳等较为严重的问题。需要加强对孩子视觉认知的训练。"}
              else if(vm.acount > 10 && vm.acount <= 15) {vm.result_text = "孩子的视觉认知能力不佳所造成的阅读速度缓慢、抄写和运算容易出错，在家长和老师眼中可能会归结为孩子粗心马虎，事实上，孩子已经很努力了，只是受到基础的视觉认知能力不足所限，这就急需找到根本原因做针对性的训练来提升孩子的学习能力，一味苛责，只会造成孩子额外的情绪负担而丧失学习兴趣。"}
              else if(vm.acount > 15 && vm.acount <= 20) {vm.result_text ="孩子的视觉认知能力发展较好，如果在某些事件上表现出注意力不足的话，可能是问题解决能力不佳所致，需要从兴趣出发做一些思维训练，帮孩子找到学习方法，激活学习兴趣。同时提升孩子目标管理、受挫后的情绪管理等能力，养成良好的学习习惯。"}
              else if(vm.acount > 20) {vm.result_text ="孩子的视觉认知能力发展的很好，请继续保持。如果在某些事件上表现出注意力不足的话，可能是问题解决能力不佳所致，需要从兴趣出发做一些思维训练，帮孩子找到学习方法，激活学习兴趣。同时提升孩子目标管理、受挫后的情绪管理等能力，养成良好的学习习惯。"}

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
  },
  created () {
    let vm = this
    //check if user has local data,
    if (vm.CAMPAIGN_DATA.local==undefined) {
      vm.$router.replace('/multiIntelligence_section/multiIntelligenceTest')
    }

    vm.$store.dispatch('CAMPAIGN_GET_DATA',vm.campaign.host+vm.campaign.path).then(res=>{
      // console.log(res);
      //make answer_sheet for submit
      vm.completion = new Array(vm.questions.length).fill({}).map((item,i)=>{
        let answer = {
          id:i,
          value:false,
        }
        return answer
      })
      vm.local.answer_sheet = new Array(vm.questions.length).fill({}).map((item,i)=>{
        let answer = {
          'problemType':'',
          'answer':'',
          'seleAnswer':''
        }
        return answer
      })
      vm.questions.forEach((question,index,array)=>{
        let stringResource = Object.values(question).filter(item=>typeof(item)=='string')
        let questionAssets = stringResource.filter(item=>item.indexOf('images/')==0)
        let questionAssetsLength = questionAssets.length
        let optionAssets = questionAssets.filter(item=>{
          if (item.indexOf('A')!=-1||item.indexOf('B')!=-1||item.indexOf('C')!=-1||item.indexOf('D')!=-1){
            return item
          }
        })

        question['assetsLoadStatus']= new Array(questionAssetsLength).fill(false)
        question['options']= optionAssets

        if (index<10){
          question['questionTime'] = 8
          question['mode'] = 'showQuestionAndOptions'
        } else {
          question['viewQuestionTime'] = 3
          question['answerTime'] = 8
          question['mode'] = 'showQuestionThenOptions'
        }
      })

      vm.loading = false
    })

  },
}
</script>

<style lang="scss" scoped>
.ui.olive.ribbon.label{
    text-align: center!important;
}
.titles2[data-v-cbbdfb04] {
    padding-top: 1rem!important;
}
.ui.stacked.segment {
    padding-bottom: 1.4em;
}
.stagView,.stageImg {
  padding: 0px!important;
  margin: 0px!important;
  &>.segment {
    padding: 0px!important;
    margin: 0px!important;
  }
}

.promotion-box {
  width: 300px;
  position: absolute;
  left:50%;
  top:100px;
  padding: 10px 0 10px 0;
  background-color:rgba(135, 184, 253, 0.75);
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
    background: #87b8fd;
    color:#fff;
    &:hover{
      background-color: #fff;
      color:#87b8fd;
    }
  }
}
.stagView,.itemView {
  min-height: 60vh;
  text-align: center;


  .stageImg {
    min-height: 60vh;
    background-image: url('//cdn.czbapp.com/static/images/gameTest/attn.jpg');
    background-position: center;
    background-size: cover;

    @media only screen and (max-width: 700px) {
      background-position: 17rem !important;
    }

      // .sfooter{
      //
      //   button{
      //     color:#fff;
      //     border: 1px solid #fff;
      //     background-color: #ffb900;
      //   }
      //   button:hover{
      //     color:#ffb900;
      //     border: 1px solid #fff;
      //       background-color: #fff;
      //   }
      // }
    }

  .showQuestionThenOptionsAnswerMode {
    position: absolute!important;
    left:0px;
    top:0px;
  }
}
.iconContainer {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 1em;
  font-size: 250px;
  vertical-align: middle!important;

  @media only screen and (max-width: 768px) {
    font-size: 25vw;
  }

  i {
    font-size: 1em;
    position: absolute;
    left:50%;
    top:50%;
    margin:-0.55em 0px 0px -0.5em!important;
    width: auto!important;
    text-align: center!important;
    vertical-align: middle!important;
  }
  i.remove {
    margin:-0.55em 0px 0px -0.4em!important;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.counter {
  position: absolute;
  right:10px;
  top:10px;
  p {
    text-align: center;
    i {
      margin: 0px!important;
    }
  }
  &:after {
    content: '';
    display: block;
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    left:0px;
    top:0px;
  }
  &.visible {
    &:after {
      display: none;
    }
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
  transition: all .5s;
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
  min-height: 86vh;
  padding-bottom: 30px;
  .ui.olive.ribbon.label {
    font-size: 1.2em;
  }
  @media only screen and (max-width: 700px) {
    padding-top: 64px;

  }
}
.attn_title{
  text-align: left;
  padding-left: 20px;
  color: #27ab31;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  font-size: 25px;
}
.el-row {
  margin-top: 10px;

  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  text-align: left;

}
.bg-purple-dark {
  background: #f5f5f5;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.titles{
  font-weight: 900;
  font-size: 20px;
  color: #000;
  padding-left: 20px;
  line-height: 40px;
}
.titles2{
  background-color: #fff;
  padding:0 1rem 0 1rem;
  display: block;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.inst_title{
  text-align: left;
  padding-left: 20px;
  color: #27ab31;
  line-height: 60px;
  border-bottom: 1px solid #ccc;
  font-size: 25px;
}
</style>
