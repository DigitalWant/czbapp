<template lang="html">
  <div class="">
      <div class="ui horizontal divider special-header olive">
         加入我们
       </div>
       <div class="ui divider hidden"> </div>
      <img src="../assets/images/JoinCompany/6.png" alt="" style="width:100%">
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-dark">我们拿什么吸引你？</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">注重沟通、平等交流，不装不端、创新团结。</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">我们既懂家长的心情，又懂年轻人的次元。</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">我们既懂心理的专业，又懂互联网的思维。</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">我们重视每一位成员的自我成长与突破，你的每一份才情都将被重视与珍惜。</div></el-col>
      </el-row>
      <p>我们在寻找这样的你：<br/>敬业/活力/敢拼/靠谱/执行力/聪明伶俐/接受变化/不抱怨/有创意/互联网思维</p>
      <div class="ui divider hidden"> </div>
      <h3>我们提供的职位 : </h3>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-darks" @click="showOne"> <i class=" ui icon circle" :class="[showOneData==false?'add':'minus']" ></i> 一、幼儿教师/早教老师</div></el-col>
      </el-row>
      <transition name="slide-fade">
      <el-row v-show = "showOneData">
        <el-col :span="24"><div class="grid-content bg-purple-dark">工作职责：</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1、积极参与教研学习，独立完成专业课程的教学；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">2、线上教学与小朋友及家长进行良好的沟通互动，观察开发小朋友的活动能力及潜力；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">3、协助本部门完成各项活动任务；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">4、完成领导交待的其他工作。</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">职位要求：</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1、相貌端正，有良好的的亲和力和沟通能力；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">2、热爱幼儿教育事业，有爱心、有责任感；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">3、大专以上学历，心理学、学前教育、教育学专业优先；有早教、幼教行业工作经验优先；</div></el-col>
      </el-row>
      </transition>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-darks" @click="showTwo"> <i class=" ui icon circle" :class="[showTwoData==false?'add':'minus']" ></i> 二、课程顾问</div></el-col>
      </el-row>
      <transition name="slide-fade">
        <el-row v-show = "showTwoData">
        <el-col :span="24"><div class="grid-content bg-purple-dark">工作职责：</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1、通过电话沟通的形式向客户提供课程咨询，达成购买意愿并促成订单；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">2、有效维护客户资源，提供优质的课前课后服务，保证客户满意度；营造良好客户口碑，达成长期合作；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">3、按时完成业绩目标并达成各项绩效考核标准；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">4、完成领导交待的其他工作</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">职位要求：</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1、年龄20-35岁，中专或以上学历。</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">2、普通话标准，具有良好的沟通表达能力；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">3、有自信心，乐观向上，工作态度积极认真，愿意挑战高薪，具有团队合作精神。</div></el-col>
      </el-row>
      </transition>
      <el-row>
        <el-col :span="24"><div class="grid-content bg-purple-darks" @click="showThree" > <i class=" ui icon circle" :class="[showThreeData==false?'add':'minus']" ></i> 三、广告投放经理</div></el-col>
      </el-row>
      <transition name="slide-fade">
      <el-row v-show = "showThreeData">
        <el-col :span="24"><div class="grid-content bg-purple-dark">工作职责：</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1、负责公司产品的效果营销推广的管理工作，对整体投放效果负责；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">2、有效管理各个推广媒体的预算、投放内容、投放结果，不断优化CPA和用户量；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">3、对每月、季度、年度的投放数据进行预估和分析，规划月度、年度的投放推广计划；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">4、管理包括PC、APP、DSP、广点通、垂直网站等综合互联网媒体的投放工作；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">5、日常日报、周报、月报制作，总结及发现媒体效益；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">6、负责日常流程执行及跟进。</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">职位要求：</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">1、 全日制本科以上学历 ，市场营销、广告、传媒相关专业优先；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">2、 2年以上线上推广、效果类推广、网络营销相关经验；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">3、 对互联网常规指标CPC、CPM、CPA有概念，数据敏感，能从数据中发现问题并提出解决方案；</div></el-col>
        <el-col :span="24"><div class="grid-content bg-purple-dark">4、 为人踏实、认真，有很强的结果导向和抗压能力。</div></el-col>
      </el-row>
      </transition>
      <p>如果你足够优秀，同时有创业者的胸怀和热情，相信青春只有投身到自己热爱的事情中才有价值，也才可能得到最大的回报，那么赶快加入我们吧！</p>
      <p style="margin-bottom:2em">联系人 : HR</br>邮箱 : hr@czbapp.com</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      showOneData:false,
      showTwoData:false,
      showThreeData:false,
    }
  },
  methods:{
    showOne(){
      let vm =this
      vm.showOneData = !vm.showOneData
    },
    showTwo(){
      let vm =this
      vm.showTwoData = !vm.showTwoData
    },
    showThree(){
      let vm =this
      vm.showThreeData = !vm.showThreeData
    },
  }
}
</script>

<style lang="scss" scoped>
.grid-content {
     min-height: 36px;
     line-height: 36px;
}
p{
  //  padding-bottom: 50px;
}
.bg-purple-darks{
    background: #09bb07;
    border-radius: 4px;
    line-height: 36px;
    color: #fff;
    font-size: 16px;
    margin: 10px 0;
    padding-left: 30px;
    cursor:pointer;
 }
h3{
   @media only screen and (max-width: 768px) {
     text-align: center!important;
     height: auto;
   }
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(100px);
  opacity: 0;
}
</style>
