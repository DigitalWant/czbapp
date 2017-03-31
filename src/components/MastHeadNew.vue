<template lang="html">
  <div class="ui fluid basic">
  <div class="ui fluid" style="position:relative;overflow:hidden" id="header1">
    <!-- <swiper :options="swiperOption"> -->
            <!-- <swiper-slide> -->

                <div class="first_img">
                  <div class="first_img_text">
                    <p class="animated fadeInDownBig p1" style="font-weight:600;">每天40分钟，在线注意力训练</p>
                    <p class="animated fadeInDownBig p2">让孩子专注于学习</p>
                    <router-link :to="{'name':'multiIntelligenceBook'}" class="custom-button animated fadeInDownBig" style="border-radius:101px;font-weight:normal; font-size:20px;background-color:#fd9f29;color:#fff">预约体验课</router-link>
                  </div>
              </div>
          <!-- </swiper-slide> -->
            <!-- <swiper-slide><div class="first_img"></div></swiper-slide> -->
            <!-- <swiper-slide><div class="first_img"></div></swiper-slide> -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
            <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- </swiper> -->
  </div>
  <div class="ui container" id="myAdvanage" style="margin-bottom: 150px;margin-top: 20px;" >
    <h1 style="padding-top:80px;">
      <span style="color:#000">我们的优势</span>
    </h1>
    <div class="ui grid">
      <div class="three column row stackable">
        <div class="column column_hover">
            <dl class="dl_list card-front">
                <dt><img v-lazy="images.data1[0]" alt=""></dt>
                <dd class="dd_title">权威测评系统</dd>
            </dl>
            <div class="card-back">
              通过儿童心理专家1对1在线评估孩子注意力、创造力和数理逻辑力你发展状况，出具权威测评报告及训练方案。
            </div>
        </div>
        <div class="column column_hover">
            <dl class="dl_list card-front">
                <dt><img v-lazy="images.data1[1]" alt=""></dt>
                <dd class="dd_title">量身打造训练计划</dd>
            </dl>
            <div class="card-back">
              4800节课中选出最适合孩子的训练课程，提升孩子注意力、创造力和数理逻辑力。
            </div>
        </div>
        <div class="column column_hover">
            <dl class="dl_list card-front">
                <dt><img v-lazy="images.data1[2]" alt=""></dt>
                <dd class="dd_title">在线1对1专业训练</dd>
            </dl>
            <div class="card-back">
              颠覆传统线下1对多教学模式，提供线上1对1训练指导，自由选择训练时间地点，随时约课。
            </div>
        </div>
        <div class="column column_hover">
            <dl class="dl_list card-front">
                <dt><img v-lazy="images.data1[3]" alt=""></dt>
                <dd class="dd_title">游戏式训练方式</dd>
            </dl>
            <div class="card-back">
              独家定制教具，让孩子在新奇有趣的游戏中完成训练，在游戏中轻松提升各项能力。
            </div>
        </div>
        <div class="column column_hover">
            <dl class="dl_list card-front">
                <dt><img v-lazy="images.data1[4]" alt=""></dt>
                <dd class="dd_title">匹配家庭指导师</dd>
            </dl>
            <div class="card-back">
              每个家庭都会有家庭指导师，可以在课后进线询问孩子训练以及成长过程中的各种问题，我们的家庭指导师会给出一定的建议和意见帮助孩子学业进步、健康成长。
            </div>
        </div>
        <div class="column column_hover">
            <dl class="dl_list card-front">
                <dt><img v-lazy="images.data1[5]" alt=""></dt>
                <dd class="dd_title">优质师资保障品质</dd>
            </dl>
            <div class="card-back">
              拥有数百位儿童咨询师和儿童游戏咨询师，对儿童身心发展及综合素质培养有深刻理解。团队曾多次获得心理、教育行业多项专业认可。
            </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui fuild" style="position:relative;overflow:hidden" id="header2">

    <div class="myProduce">
        <h1 style="padding-top: 100px;"><span>我们的产品</span></h1>
      <div class="ui grid container stackable" style="padding-top:60px;">
        <div class="eight wide column" id="computer" >
          <div class="computerBack testVideo">
            <img v-lazy="images.data2[0]" alt="" >
          </div>
        </div>
        <div class="eight wide column" id="myProduces">
              <router-link :to="{'name':'multiIntelligence'}" class="custom-button" style="border-radius:101px; font-size:20px;background-color:#fd9f29;color:#fff">注意力训练课程</router-link>
              <p style="margin-top:80px;"><img v-lazy="images.data2[1]" alt="">针对5-12岁孩子</p>
              <p ><img v-lazy="images.data2[1]" alt="">提升注意力、学习能力50%</p>
              <p ><img v-lazy="images.data2[1]" alt="">学习兴趣浓、学习效率高、考试成绩好！</p>
        </div>
        </div>
    </div>
  </div>
  <h1 style="margin-top:100px; margin-bottom: 10px;"><span style="color:#000">名人推荐</span></h1>
  <div class="ui container" id="star" style="padding-bottom:100px;">
      <div class="ui grid stackable">
          <div class="eight wide column" id="star1">
            <div class="ui items">
              <div class="item">
                <div class="ui image">
                  <img v-lazy="images.data3[0]">
                  <div class="img_shadow">
                      牛文文</br><span>创业黑马创始人兼董事长、黑马学院院长</span>
                  </div>
                </div>
                    <p>“做教育最重要的因素是专业。成长保的专业让它跑的更快，这带给投资人的不仅仅是资本的回报，更是引领家庭教育领域的荣誉感。”</p>
              </div>
            </div>
          </div>
          <div class="eight wide column" id="star2">
            <div class="ui items">
              <div class="item">
                <div class="ui image">
                  <img v-lazy="images.data3[1]">
                  <div class="img_shadow">
                        王钧</br><span>昆仲资本创始人兼管理合伙人</span>
                  </div>
                </div>
                    <p>“成长保是个有激情和远见的企业。团队对教育充满热情并有多年的积淀。企业给予对教育的深刻理解，利用技术手段有效地解决了家庭教育中
                    重要、急迫，但往往让家长不知所措的挑战。我相信成长保会在中国教育圈里独树一帜，为孩子和家长创造价值！”</p>
              </div>
            </div>
          </div>
          <div class="eight wide column" id="star3">
            <div class="ui items">
              <div class="item">
                <div class="ui image">
                  <img v-lazy="images.data3[2]">
                  <div class="img_shadow">
                       王国平</br><span>中国民办学前教育三大领军人物之一</span>
                  </div>
                </div>
                    <p>“成长保做的是关于孩子，包括父母成长的事情。成长保拥有超强的团队，相信这样一个团队，可以提供更多的优质亲子教育内容，让孩子在身
                      心发育时期得到父母正确的引导和高质量的陪伴，充分享受亲子成长的快乐。”</p>
              </div>
            </div>
          </div>
          <div class="eight wide column" id="star4">
            <div class="ui items">
              <div class="item">
                <div class="ui image">
                  <img v-lazy="images.data3[3]">
                  <div class="img_shadow" style="line-height:40px">
                       中国教育创新研究院
                  </div>
                </div>
                    <p>“成长保拥有精准的方向定位、前瞻的技术路径、众多的精英人才、原创的学习内容、教育公益的热情。他应该能够为家庭教育的颠覆式创新担起
                      他应该担起的责任，引领中国家庭教育新的走向。我们期待他能够给我们带来更加精彩的成果。”</p>
              </div>
            </div>
          </div>
      </div>
  </div>
  <div class="" style="position:relative;overflow:hidden" id="header3">
    <div class="ui fuild myproject">
      <h1 style="margin-top: 100px; margin-bottom:0px; height: 100px;"><span>我们的承诺</span></h1>
      <div class="ui container grid">
        <div class="three column row stackable" id="project">
          <div class="column">
            <dl class="myproject-img">
              <dt><img v-lazy="images.data6[0]" alt=""></dt>
              <dd style="font-size:20px">服务承诺</dd>
              <dd>我们将与每位用户签订购买协议 保障服务质量</dd>
            </dl>
          </div>
          <div class="column">
            <dl class="myproject-img">
              <dt><img v-lazy="images.data6[1]" alt=""></dt>
              <dd style="font-size:20px">师资承诺</dd>
              <dd>讲师拥有“儿童心理咨询师”和 “儿童游戏师”两大证书 </dd>
            </dl>
          </div>
          <div class="column">
            <dl class="myproject-img">
              <dt><img v-lazy="images.data6[2]" alt=""></dt>
              <dd style="font-size:20px">效果承诺</dd>
              <dd>4-8节课后，注意力测评分值 提升30%-50%</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui fuild" style="background-color:#f6fbfd;padding-top: 23px;padding-bottom: 170px;">
    <div class="ui container">
      <h1 style="padding-top: 77px;"><span style="color:#000">家长评价</span></h1>
      <div class="ui grid stackable">
        <div class="three column row">
          <div class="column">
            <div class="ui card centered AnimateParent1">
                <div class="image">
                  <img v-lazy="images.data4[0]">
                </div>
                <div class="content">
                  <a class="header">东东妈妈</a>
                  <div class="description">这个课内容很好玩，老师也很棒，每次上课孩子都很开心。孩子的说话、讲故事的能力都有多大的进步，经常语出惊人，用词逻辑都很清楚。</div>
                </div>
                </div>
          </div>
          <div class="column">
            <div class="ui card centered AnimateParent2">
                <div class="image">
                  <img v-lazy="images.data4[1]">
                </div>
                <div class="content">
                  <a class="header">彬彬妈妈</a>
                  <div class="description">每周一的课，都让我们家孩子越来越开朗，也很愿意和小朋友分享。而且孩子的创造力有被激发出来，他越来越喜欢自己搭各种各样式的积木，玩的时候特别专心。</div>
                </div>
                </div>
          </div>
          <div class="column">
            <div class="ui card centered AnimateParent3">
                <div class="image">
                  <img v-lazy="images.data4[2]">
                </div>
                <div class="content">
                  <a class="header">茜茜妈妈</a>
                  <div class="description">我们家是很反对填鸭式教育的，但是又担心什么都不学，以后拖后腿。幸运的是，在这个时候发现了成长保的创造力课程，课程的设计很尊重孩子的发展程度，
                  而且教的不是知识，而是思路，形式也很轻松。我家孩子现在爱上学习了，每个礼拜就盼着这堂课！</div>
                </div>
                </div>
          </div>
        </div>
        </div>
    </div>
  </div>
    <div style="position:relative;overflow:hidden" id="header4">
      <div class="ui fuild index_footer">
        <h3 style="margin-top:67px;"><span>我们的荣誉</span></h3>
        <div class="ui container">
          <div class="ui grid stackable">
            <div class="three column row stackable" style="margin-top:80px">
              <div class="column footer_logo" id="logo1"><img v-lazy="images.data5[0]" alt=""><p>中国品牌影响力教育机构</p><p style="font-size:14px">2015新浪教育</p></div>
              <div class="column footer_logo" id="logo2"><img v-lazy="images.data5[1]" alt=""><p>社会影响力儿童教育品牌</p><p style="font-size:14px">2016腾讯教育</p></div>
              <div class="column footer_logo" id="logo3" ><img v-lazy="images.data5[2]" alt=""><p>中国口碑影响力儿童教育机构</p><p style="font-size:14px">2016新浪教育</p></div>
          </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>

<script>
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
import animate from 'animate.css'
export default {
  name: 'mastHeadNew',
  data () {
    return {
      //  scrolled: false,
      // swiperOption: {
      //   pagination: '.swiper-pagination',
      //   paginationClickable: true,
      //   nextButton: '.swiper-button-next',
      //   prevButton: '.swiper-button-prev',
      //   spaceBetween: 30,
      //   loop:true
      // },
      // img1Height: document.getElementById('img1').offsetHeight,
      shell1: $('#header1'),
      img1:$(this.shell1).find('img'),
      top: 0,
      images:{
          data1:[
            '//cdn.czbapp.com/static/images/homepage/001.png',
            '//cdn.czbapp.com/static/images/homepage/002.png',
            '//cdn.czbapp.com/static/images/homepage/003.png',
            '//cdn.czbapp.com/static/images/homepage/004.png',
            '//cdn.czbapp.com/static/images/homepage/005.png',
            '//cdn.czbapp.com/static/images/homepage/006.png',
        ],
        data2:[
          '//cdn.czbapp.com/static/images/homepage/08.png',
          '//cdn.czbapp.com/static/images/homepage/09.png'
        ],
        data3:[
          '//cdn.czbapp.com/static/images/homepage/star_01.png',
          '//cdn.czbapp.com/static/images/homepage/star_02.png',
          '//cdn.czbapp.com/static/images/homepage/star_03.png',
          '//cdn.czbapp.com/static/images/homepage/star_04.png',
        ],
        data4:[
          '//cdn.czbapp.com/static/images/homepage/parents_1.png',
          '//cdn.czbapp.com/static/images/homepage/parents_2.png',
          '//cdn.czbapp.com/static/images/homepage/parents_3.png',
        ],
        data5:[
          '//cdn.czbapp.com/static/images/homepage/logo_1.png',
          '//cdn.czbapp.com/static/images/homepage/logo_2.png',
          '//cdn.czbapp.com/static/images/homepage/logo_3.png',
        ],
        data6:[
          '//cdn.czbapp.com/static/images/homepage/myproject1.png',
          '//cdn.czbapp.com/static/images/homepage/myproject2.png',
          '//cdn.czbapp.com/static/images/homepage/myproject3.png',
        ],
        data7:[
          '//cdn.czbapp.com/static/images/homepage/header1.jpg',
          '//cdn.czbapp.com/static/images/homepage/header2.jpg',
          '//cdn.czbapp.com/static/images/homepage/header3.jpg',
          '//cdn.czbapp.com/static/images/homepage/header4.jpg',
        ]
      }
    }
  },
  mounted () {
      let vm = this
      window.addEventListener('scroll', vm.handleScroll);
    },

    methods: {
      handleScroll () {
        this.scrolled = window.scrollY > 0;
        // console.log(window.scrollY);

        if(window.scrollY>=300){
          // $(".first_img_text .p1").removeClass('AnimateTop1')
          // $(".first_img_text .p2").removeClass('AnimateTop2')
          // $(".first_img_text .button").removeClass('AnimateTop3')
          if(window.scrollY>=1200){
            $("#computer").addClass('animated fadeInLeft')
            // $('#myProduces').addClass('animated fadeInRight')
            console.log($('#myProduces>p').length)
            $('#myProduces>p').addClass('animated fadeInRight')
            $('#myProduces>a').addClass('animated fadeInRight')
          }
          if(window.scrollY>=2000){
            $("#star1").addClass('animated fadeInUp')
            $("#star2").addClass('animated fadeInUp')
            $("#star3").addClass('animated fadeInUp')
            $("#star4").addClass('animated fadeInUp')
          }
          if(window.scrollY>=3000){
            $("#project").addClass('animated fadeInRight')
          }
          if(window.scrollY>=3500){
            $(".AnimateParent1").addClass('animated fadeInLeft')
            $(".AnimateParent2").addClass('animated fadeInLeft')
            $(".AnimateParent3").addClass('animated fadeInLeft')
          }
          if(window.scrollY>=4500){
            $("#logo1").addClass('animated fadeIn')
            $("#logo2").addClass('animated fadeIn')
            $("#logo3").addClass('animated fadeIn')
          }
        }else{
          // $("#myProduces p").removeClass('AnimateLeft')
          // $(".first_img_text .p1").addClass('AnimateTop1')
          // $(".first_img_text .p2").addClass('AnimateLeft2')
          // $(".first_img_text .button").addClass('AnimateShow2')
        }
      }
    },

}
</script>
<style lang="scss" scoped>

#myAdvanage{
  @media only screen and (max-width: 768px) {
  margin-bottom: 0!important;
  }
   .stackable.stackable.row > .column{
     @media only screen and (max-width: 768px) {
         width: 50%!important;
         img{
           width: 100px!important;
           height: 100px!important;
         }
     }
   }

}
// #img1 {
//   background: url('http://cdn.czbapp.com/static/images/homepage/header1.jpg') no-repeat center top fixed;
// }
.animated{
  animation-duration: 3s;
}
.hide {
  display: none;
}
.banners{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  // height:100%;
  @media only screen and (max-width: 768px) {
      height: 100%;
      width: 500%;
      margin-left: -230%;
  }
  z-index: -1;
  img{
    // width: 100%;
    // height: 100%;
    background-position: center
  }
}
.parallax {
  z-index: 100;
  width: 100%;
  height: auto;
  overflow: hidden;
  position: fixed;
  // hei
  img {
    position: absolute;
    top: 0px;
    width: 100%;
  }
}
#header1 {
  background: url('/static/images/homepage/header1.jpg') no-repeat center top fixed;
}
#header2{
  background: url('/static/images/homepage/header2.jpg') no-repeat center fixed;
}
#header3{
  background: url('/static/images/homepage/header3.jpg') no-repeat center fixed;
}
#header4{
  background: url('/static/images/homepage/header4.jpg') no-repeat center top fixed;
}
@media only screen and (max-width: 600px){
  @for $i from 1 to 5 {
    #header#{$i} {
      background: url('/static/images/homepage/header#{$i}.jpg') no-repeat center top;
      background-size: cover;
    }
  }
}
// animateParent1 -- animateParnt3AnimateParent1 
@for $i from 1 to 4 {
  .AnimateParent#{$i} {
    animation-delay: (4 - $i) * 0.4s;
  }
  #logo#{$i} {
    animation-delay: $i * 0.4s;
  }
}

.ui.cards > .card > .image:not(.ui) > img, .ui.card > .image:not(.ui) > img{
  animation: none;
}
h1{
  width: 100%;
  text-align: center;
  // line-height: 100px;
  height: 150px;
  //margin-left: 10px;
  color: #fff;
  margin-bottom: 80px;
  span{
    padding: 20px 20px 32px 20px;
    position: relative;
    /*margin-right: 20px;*/
    border-bottom: 1px solid #ccc;
    &:after{
      content:"";
      width: 30%;
      border-top: 5px solid orange;
      position: absolute;
      bottom: -3.5%;
      left: 35%;
    }
  }
}

h3{
  line-height: 100px;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding-top: 0px;
  margin-bottom: 30px;
  color: #fff;
  span{
    padding: 20px;
    position: relative;
    &:after{
      content:'';
      position: absolute;
      width: 60%;
      border-bottom: 2px solid #fff;
      left: 20%;
      bottom: 0;
    }
  }
}
.ui.button{
    @media only screen and (max-width: 768px) {
    font-size: 18px!important;
    }
}
.custom-button{
  cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: none;
    border: none;
    vertical-align: baseline;
    background: #E0E1E2 none;
    color: rgba(0, 0, 0, 0.6);
    font-family: 'Lato', "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\5FAE\8F6F\96C5\9ED1", Arial, sans-serif;
    margin: 0em 0.25em 0em 0em;
    padding: 0.78571429em 1.5em 0.78571429em;
    text-transform: none;
    text-shadow: none;
    font-weight: bold;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: 0.28571429rem;
    box-shadow: 0px 0px 0px 1px transparent inset, 0px 0em 0px 0px rgba(34, 36, 38, 0.15) inset;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
    will-change: '';
    -webkit-tap-highlight-color: transparent;
}
.first_img{
  width: 100vw;
  position: relative;
  height:990px;
  // img{
  //   width: 100%;
  // }
  // background: url('//cdn.czbapp.com/static/images/homepage/header.png') no-repeat;
  // background-size: cover;
  // background-position: center;
  background: rgba(0, 0, 0, 0);
  @media only screen and (max-width: 768px) {
    height: 736px;
    padding: 0;
  }
}
.first_img_text{
  position: absolute;
  top: 30%;
  left: 25%;
  color: #fff;
  font-size: 36px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    left: 0;
    font-size: 20px;
  }
  p:nth-child(2) {
    animation-delay: .2s;
  }
  p:nth-child(1) {
    animation-delay: .3s;
  }
}
.card-front dt img{
  width: 130px;
}
#star .ui.grid > .column:not(.row), .ui.grid > .row > .column{
  padding: 20px;
}
#star {
  @for $i from 1 to 5 {
    #star#{$i} {
      animation-delay: $i * 0.2s;
    }
  }
}

.ui.grid > .column:not(.row), .ui.grid > .row > .column{
  padding: 0px;
}
.column_hover {
  display: block;
  position: relative;
  z-index: 10;
  height: 250px;
}
.ui.grid > .stackable.stackable.row > .column{
  @media only screen and (max-width: 768px) {
    padding: 0!important;
  }
}
.column_hover .card-front,
.column_hover .card-back {
  backface-visibility: hidden;
  transition: transform 500ms;
  display: block;
  height: 100%;
  position: absolute;
  width: 100%;
}
.column_hover .card-front {
  transform: perspective(300) rotateY(0);
  z-index: 1;
}
.column_hover .card-back {
  transform: rotateY(-180deg);
  z-index: 1;
  width: 80%;
  height: 100%;
  margin-left: 10%;
  text-align: left;
}

.column_hover:hover .card-front {
  transform: rotateY(180deg);
  transform: perspective(300) rotateY(180deg);
  @media only screen and (max-width: 768px) {
    transform: rotateY(0);
    transform: perspective(300) rotateY(0);
  }
}
.column_hover:hover .card-back {
  z-index: 1;
  transform: rotateY(0deg);
  transform: perspective(300) rotateY(0deg);
  @media only screen and (max-width: 768px) {
  display: none;
  }
}

/*** Just for show... ***/
.column_hover {
  text-align: center;
  text-transform: uppercase;
}
.column_hover .card-front {
  *zoom: 1;
}
.column_hover .card-back {
  *zoom: 1;
  background-color: #fd9f29;
  color: #fff;
  font-size: 16px;
  line-height: 28px;
  padding: 20px 10px 10px 10px ;
}

.dl_list{
  text-align: center;
  .dd_title{
    position: relative;
    padding: 20px;
    margin:0;
    font-size: 18px;
    // &:after{
    //   content:"";
    //   width: 20%;
    //   border-top: 1px solid #bfbfbf;
    //   position: absolute;
    //   bottom: -3.5%;
    //   left: 40%;
    // }
  }
  .dd_text{
    padding: 20px;
    margin: 0;
  }
}

.myProduce{
  height: auto;
  padding-bottom: 100px;
  background: rgba(0,0,0,0.4);
  color: #fff;
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding: 0;
    p{
      margin: 0!important;
      padding: 0;
    }
  }
  h1 {
    padding-top: 23px;
  }
  #myProduces{
      padding-left: 120px;
      a {
        animation-delay: .2s;
      }
      @for $i from 1 to 5 {
        p:nth-child(#{$i}) {
          animation-delay: ($i) * .2s;
        }
      }
  }
  p{
      @media only screen and (max-width: 768px) {
          font-size: 14px;
          img{
              margin-right: 10px;
          }
      }
    position: relative;
    line-height: 50px;
    height: 50px;
    font-size: 20px;
    img{
      width: 40px;
      height: 40px;
      vertical-align: middle;
      margin-right: 20px;
    }
  }
  #computer{
    .computerBack{
      // background: url( '//cdn.czbapp.com/static/images/homepage/07.png') no-repeat;
      background: url( '../assets/images/ipad.png') no-repeat;
      background-size:100% 100%;
      text-align: center;
      overflow:hidden;
      img{
        padding: 50px;
        height:100%!important;
        width: 100%!important;
        // width: 100%;
          @media only screen and (max-width: 768px) {
            padding: 30px;
          }
      }
    }
    @media only screen and (max-width: 768px) {
      text-align: center;
      height: auto;
      img{
        width: 100%;
        margin: 0!important;
        padding: 30px;
      }
    }
  }
}
.ui.items > .item:last-child{
  background-color: #f6fbfd;
}
.ui.items > .item > .image > img{
  width: 90%;
}
.ui.items {
  p:last-child{
    padding: 15px 20px 15px 0;
    line-height:22px;
    @media only screen and (max-width: 768px) {
        padding:20px;
    }
  }
  .item{
    margin-top: 10px;
  }
}
.ui.items > .item > .image, .ui.items > .item > .image > img{
  @media only screen and (max-width: 768px) {
      width: 100%!important;
      max-height: 500px!important;
  }
}
.ui.image{
  position: relative;
  .img_shadow{
    position: absolute;
    bottom: 0;
    left: 0;
    color:#fff;
    padding-left: 10px;
     background-color:#000;
     width:90%;
     height:40px ;
     opacity: 0.6;
     span{
       font-size: 12px;
     }
       @media only screen and (max-width: 768px) {
         width:100%;
       }
  }
}
.myproject{
  background: rgba(0,0,0,0.4);
  padding-bottom: 60px;
  overflow: hidden;
}
.myproject-img{
  padding: 50px 0;
  @media only screen and (max-width: 768px) {
    padding: 0!important;
    margin: 0;
  }
  dt{
    padding:50px 0;
  }
  dd{
    padding-left: 0!important;
    @media only screen and (max-width: 768px) {
      padding:0 50px!important;
    }
  }
  text-align: center;
  color: #fff;
  font-size: 16px;
    overflow: hidden;
   img{
    @media only screen and (max-width: 768px) {
      // padding: 0!;
      width: 100px;
      height: 100px;
      margin-left: 0!important;
    }
  }
  dd{
    margin-bottom: 30px;
    padding: 0 50px;
    line-height: 20px;
    @media only screen and (max-width: 768px) {
      // padding: 0!;
      margin-left: 0!important;
    }
  }
}

.ui.cards > .card, .ui.card{
  box-shadow: 0px 0px 13px 5px #e3e3e3, 0px 0px 0px 0px #e3e3e3;
  height: 450px;
}
.ui.card.centered{
  .header{
    margin: 20px 0;
  }
}
.description{
  height: 200px;
  background: url('//cdn.czbapp.com/static/images/homepage/parents_back.png') no-repeat;
  background-position: top center;
}
.index_footer{
  overflow: hidden;
  width: 100%;
  height: auto;
  background:rgba(0,0,0,0.4) ;
  background-size: cover;
  background-position: center;
  padding-bottom: 250px;
    @media only screen and (max-width: 768px) {
      padding-bottom: 0;
    }
  p{
    color: #fff;
    font-size: 20px;
    text-align: center;
  }
}
.footer_logo{
  margin-top: 50px;
  text-align: center;
  vertical-align: middle;
  @media only screen and (max-width: 768px) {
    height: 200px;
  }
}




//从下往上移动
.AnimateBottom{
    animation: myShowBottom 5s!important;
}
@keyframes myShowBottom
{
  from {transform: translateY(50px)}
  to {transform: translateX(0) }
}


//从上往下移动
.AnimateTop1{
    animation: myShowTop1 3s!important;
}
@keyframes myShowTop1
{
  from {transform: translateY(-400px)}
  to {transform: translateY(0) }
}
.AnimateTop2{
    animation: myShowTop2 2s!important;
}
@keyframes myShowTop2
{
  from {transform: translateY(-400px);display: block!important}
  to {transform: translateY(0);display: block!important }
}

.AnimateTop3{
    animation: myShowTop3 1s!important;
}
@keyframes myShowTop3
{
  from {transform: translateY(-400px)}
  to {transform: translateY(0) }
}



//大小闪烁
.AnimateBig{
    animation: myShowBig 3s!important;
}
@keyframes myShowBig
{
  from {transform: scale(1)}
  25% {transform: scale(0.8)}
  50% {transform: scale(1)}
  75% {transform: scale(0.8)}
  to {transform: scale(1)}
}


//从左向右
.AnimateLeft1{
  animation: myShowLeft1 4s!important;
}
@keyframes myShowLeft1
{
  from {transform: translateX(-700px)}
  to {transform: translateX(0) }
}
.AnimateLeft2{
  animation: myShowLeft2 2.5s!important;
}
@keyframes myShowLeft2
{
  from {transform: translateX(-300px)}
  to {transform: translateX(0) }
}

.AnimateLeft3{
  animation: myShowLeft3 2s!important;
}
@keyframes myShowLeft3
{
  from {transform: translateX(-300px)}
  to {transform: translateX(0) }
}
//从右往左
.AnimateRight{
  animation: myShowRight 2.5s!important;
}
@keyframes myShowRight
{
  from {transform: translateX(600px)}
  to {transform: translateX(0) }
}
.AnimateRight1{
  animation: myShowRight1 2s!important;
}
@keyframes myShowRight1
{
  from {transform: translateX(300px)}
  to {transform: translateX(0) }
}
//从下往上
.AnimateShow1{
    animation: myShow1 1s!important;
}
@keyframes myShow1{
  from {transform: translateY(600px)}
  to {transform: translateY(0)}
}
.AnimateShow2{
    animation: myShow2 2s!important;
}
@keyframes myShow2{
  from {transform: translateY(600px)}
  to {transform: translateY(0)}
}
.AnimateShow3{
    animation: myShow3 3s!important;
}
@keyframes myShow3{
  from {transform: translateY(600px)}
  to {transform: translateY(0)}
}
.AnimateShow4{
    animation: myShow4 4s!important;
}
@keyframes myShow4{
  from {transform: translateY(600px)}
  to {transform: translateY(0)}
}
//渐渐显示
.AnimateHiddenShow1{
    animation: AnimateHiddenShow1 2s!important;
}
@keyframes AnimateHiddenShow1{
  from {opacity: 0;}
     to {opacity:1;}
}
.AnimateHiddenShow2{
    animation: AnimateHiddenShow2 4s!important;
}
@keyframes AnimateHiddenShow2{
  from {opacity: 0;}
     to {opacity:1;}
}
.AnimateHiddenShow3{
    animation: AnimateHiddenShow3 6s!important;
}
@keyframes AnimateHiddenShow3{
  from {opacity: 0;}
     to {opacity:1;}
}
//   img[lazy=loaded] {
//   animation: myShow 5s
// }
// @keyframes myShow
// {
//     from {opacity: 0;}
//     to {opacity:1;}
// }
//
// @-moz-keyframes myShow /* Firefox */
// {
//   from {opacity: 0;transform: translateX(50px)}
//   to {opacity:1;transform: translateX(0) }
// }
//
// @-webkit-keyframes myShow /* Safari 和 Chrome */
// {
//   from {opacity: 0;transform: translateX(50px)}
//   to {opacity:1;transform: translateX(0) }
// }
//
// @-o-keyframes myShow /* Opera */
// {
//   from {opacity: 0;transform: translateX(50px)}
//   to {opacity:1;transform: translateX(0) }
// }
</style>
