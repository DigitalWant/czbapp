<template lang="html">
  <div class="ui fluid" style="background-color:#f5f5f5;padding-bottom:5em;">
    <div class="ui fluid linear">
        <div class="ui container" id="videoOnline">
          <div class="ui grid" style="background-color:#fff;">
            <div class="ui divided items">
            <div class="item" style="padding-left:15px;">
                <div class="image" style="width:400px;height:300px;">
                  <img :src='productData.pictureUrl'>
                  <div class="playerBtn"><i class="play icon" style="color:#fff;"></i></div>
                </div>
                <div class="content">
                  <a class="header" style="font-size:25px;margin-top:20px">{{productData.courseName}}</a>
                  <div class="meta" style="height:70px;width:300px;padding-top:20px;">
                    <span class="cinema">{{productData.title}}</span>
                  </div>
                  <div class="description">
                    <p>优惠价：￥<strong style="font-size:30px;color:orange;">{{productData.presentPrice}}</strong></p>
                    <p>浏览量：{{productData.playTimes}}人</p>
                  </div>
                  <div class="extra" style="margin-top:30px;">
                    <div class="ui left floated orange button" style="padding:10px">立即购买</div>
                    <div class="ui label" style="background:none;font-size:15px;" @click="heartClick"><i class="heart icon" :class="[heartClickShow==true?'orange':'']"></i>收藏</div>
                    <div class="ui label" style="background:none;font-size:15px;" @click="shareClick"><i class="share alternate icon" :class="[shareClickShow==true?'orange':'']"></i>分享</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
      <div class="ui container">
        <div id="bots" style="width:80%;margin:50px auto;background-color:#fff;">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">课程详情</el-menu-item>
              <el-menu-item index="2">课程目录</el-menu-item>
            <el-menu-item index="3">讲师简介</el-menu-item>
          </el-menu>
          <div class="ui container" style="border-top:1px solid #e3e3e3;padding:40px 0;">
            <div v-show=" courseDetails" class="courseDetails" style="width:90%;margin:0 auto;padding:0" v-html="productData.courseDescription"></div>
            <ul v-show="courseCatalogue" class="courseCatalogue"  style="width:90%;margin:0 auto;padding:0">
              <li v-for="item in ChildCourseData">
                  <div class="videoTitle" style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item.subCourseName}}</div>
                  <div class="videoPlayer"><i class="video play outline icon"></i><span>{{item.watchTime/60}}：{{item.watchTime%60<10?'0'+item.watchTime%60:item.watchTime%60}}</span></div></li>
              </li>
            </ul>
            <div v-if="courseIntroduction" class="courseIntroduction"  style="width:90%;margin:0 auto">
              <div class="ui items">
                <div class="item">
                  <div class="image">
                    <img :src="IntroductionData[0].pictureUrl">
                  </div>
                  <div class="content" style="padding-top:20px;">
                    <h3><i class="user icon"></i>姓名：{{IntroductionData[0].name}}</h3>
                      <h4 style="width:100%;">
                        <div class="left" style="width:15%;float:left"><i class="student icon"></i>职称：</div>
                        <div class="right" style="width:85%;float:left">{{IntroductionData[0].education}}</div>
                      </h4>
                  </div>
                </div>
              </div>
              <h4>
                <i class="file text outline icon"></i>咨询师简介：
              </h4>
                <p v-html="IntroductionData[0].brief"></p>

            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name:'productDetails',
  data(){
    return {
      getDataUrl:'http://192.168.16.178:8099/czb-server/czb/api/getCourse?source=web&courseId=',
      getIntroductionUrl:'http://192.168.16.178:8099/czb-server/czb/api/teacher?source=web&courseId=',
      getChildCourseUrl:'http://192.168.16.178:8099/czb-server/czb/api/subCourse?source=web&courseId=',
      productData:'',
      IntroductionData:'',
      ChildCourseData:'',
      activeIndex: '1',
      courseDetails:true,
      courseCatalogue:false,
      courseIntroduction:false,
      heartClickShow:false,
      shareClickShow:false,
    }
  },
  methods: {
    heartClick(){
      let vm =this
      vm.heartClickShow = !vm.heartClickShow
    },
    shareClick(){
      let vm =this
      vm.shareClickShow = true
    },
     handleSelect(key, keyPath) {
       let vm =this
       if(key==1){
         vm.courseDetails = true
         vm.courseCatalogue = false
         vm.courseIntroduction = false
       }else if(key==2){
         vm.courseDetails = false
         vm.courseCatalogue = true
         vm.courseIntroduction = false
       }else if(key==3){
         if(vm.IntroductionData.length!==0){
           vm.courseDetails = false
           vm.courseCatalogue = false
           vm.courseIntroduction = true
         }else{
           vm.courseDetails = false
           vm.courseCatalogue = false
           vm.courseIntroduction = false
         }
       }
     },
     changeClass(){
       $(".courseDetails img").css('width','100%')
     }
   },
  created(){
    let vm = this
    vm.getDataUrl = vm.getDataUrl+vm.$route.params.id
    vm.getIntroductionUrl = vm.getIntroductionUrl+vm.$route.params.id
    vm.getChildCourseUrl = vm.getChildCourseUrl+vm.$route.params.id

    this.$http.get(vm.getDataUrl).then(response => {
      vm.productData = response.body
      setTimeout(function(){
        vm.changeClass()
      },0)
  }, response => {
    // error callback
  });


  this.$http.get(vm.getIntroductionUrl).then(response => {
          vm.IntroductionData = response.body
}, response => {
  // error callback
});

this.$http.get(vm.getChildCourseUrl).then(response => {
        console.log(response.body);
        vm.ChildCourseData = response.body
}, response => {
// error callback
});
  }
}
</script>

<style lang="scss" scoped>
#bots{
  @media only screen and (max-width: 768px) {
    width: 100%!important;
  }
}
.left{
  @media only screen and (max-width: 768px) {
    width: 30%!important;
  }
}
.right{
  @media only screen and (max-width: 768px) {
    width: 70%!important;
  }
}
.linear{
background:-moz-linear-gradient(top,#cdfdcb,#b7f6d7);/*火狐*/
background:-webkit-gradient(linear, 0% 0%, 0% 100%,from(#cdfdcb), to(#b7f6d7));/*谷歌*/
background-image: -webkit-gradient(linear,left bottom,left top,color-start(0, #cdfdcb),color-stop(1, #b7f6d7));/* Safari & Chrome*/
}
#videoOnline{
  padding-top: 10em;
  padding-bottom: 4em;
}
.ui.divided.items{
  padding:70px 0;
  margin: 0 auto;
  .image{
    width:300px;
    margin-right: 50px;
      position: relative;
    .playerBtn{
      position: absolute;
      width: 100%;
      height:100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 50px;
      left: 0;
      top:0;
    }
    @media only screen and (max-width: 768px) {
      margin-right: 10px;
    }
  }
}
.active{
  width: 100px!important;
}
.courseCatalogue{
  li{
    line-height: 30px;
    height: 30px;
    width: 100%;
    list-style: none;
    margin-top: 10px;
    padding-left: 10px;
    @media only screen and (max-width: 768px) {
      padding-left: 0px;
    }
    &:hover{
      background: #0abb08;
      color: #fff;
    }
  }
  .videoTitle{
    font-size: 14px;
    width: 80%;
    height: 100%;
    float: left;
    @media only screen and (max-width: 768px) {
        width: 60%;
    }
  }
  .videoPlayer{
    font-size: 25px;
    width: 20%;
    line-height: 30px;
    height: 100%;
    float: right;
    @media only screen and (max-width: 768px) {
        width: 40%;
    }
    span{
      width: 50%;
      height: 100%;
      display: block;float: right;
      font-size:15px;line-height:30px;
    }
  }
}
</style>
