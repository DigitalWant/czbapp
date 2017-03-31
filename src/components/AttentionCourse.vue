<template lang="html">
  <div class="">
        <div class="ui horizontal divider special-header olive">
           注意力课程
         </div>
         <div class="ui divider hidden"> </div>
        <h3>什么是注意力课程？</h3>
        <div class="ui divider hidden"> </div>
        <p>针对5-12岁孩子，采用游戏式训练方式，全面提升孩子的视觉注意力、
          听觉注意力、问题解决能力，让孩子看得懂板书，听得懂讲解，脑瓜转得快，
          下笔如有神，爱上学习的感觉！</p>
          <div class="ui divider hidden"> </div>
          <h3>成长保注意力训练课，帮助孩子从根本上提高学习成绩</h3>
          <div class="ui divider hidden"> </div>

          <table class="ui celled table inverted green" id="studyChart">
            <tbody>
              <tr>
                <td>级别</td>
                <td>L1~L3</td>
                <td>L4~L6</td>
                <td>L7~L9</td>
              </tr>
              <tr>
                <td>阶段</td>
                <td>幼儿阶段</td>
                <td>少儿时期</td>
                <td>少年阶段</td>
              </tr>
              <tr>
                <td>年龄</td>
                <td>4~6岁</td>
                <td>7~9岁</td>
                <td>10~12岁</td>
              </tr>
            </tbody>
          </table>
          <div class="ui divider hidden"> </div>
          <h3>成长保注意力训练课上课流程</h3>
          <div class="ui divider hidden"> </div>

            <div class="ui items stackable">
              <div class="item">
                <div class="image">
                  <img src="../assets/images/AttentionCourse/1.png">
                </div>
                <div class="content">
                  <a class="header">Step1</a>
                  <div class="meta">
                    <span>五分钟检测儿童注意力</span>
                  </div>
                  <div class="description">
                    <p></p>
                  </div>
                  <div class="extra">每个孩子都会先进行注意力测评，准确了解孩子注意力情况，定位孩子专注力问题根源</div>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <img src="../assets/images/AttentionCourse/2.png">
                </div>
                <div class="content">
                  <a class="header">Step2</a>
                  <div class="meta">
                    <span>根据测评结果，选择最合适孩子的体验课</span>
                  </div>
                  <div class="description">
                    <p></p>
                  </div>
                  <div class="extra">成长保课程顾问会根据每个孩子的性格特点、注意力情况，来预约最合适的授课老师。</div>
                </div>
              </div>

              <div class="item">
                <div class="image">
                  <img src="../assets/images/AttentionCourse/3.png">
                </div>
                <div class="content">
                  <a class="header">Step3</a>
                  <div class="meta">
                    <span>老师一对一与家长进行学习效果反馈</span>
                  </div>
                  <div class="description">
                    <p></p>
                  </div>
                  <div class="extra">体验课结束后，家长可以在线与老师进行交流反馈，了解孩子上课情况。</div>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <img src="../assets/images/AttentionCourse/4.png">
                </div>
                <div class="content">
                  <a class="header">Step4</a>
                  <div class="meta">
                    <span>制定个性化训练方案，一对一在线授课</span>
                  </div>
                  <div class="description">
                    <p></p>
                  </div>
                  <div class="extra">课研老师根据结合测评、体验课情况，从1600节课中选出最合适的课程方案，在约定的时间进入在线教室进行一对一训练。</div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
h3{
  // height: 100px;
  // line-height: 50px;
  @media only screen and (max-width: 768px) {
    text-align: center!important;
    height: auto;
  }
}
#studyChart {
  @media only screen and (max-width:768px) {
    tr {
      float: left;
      width: 25vw!important;
    }
  }
}

.ui.items > .item{
 // margin-top: 50px;
 padding-bottom: 30px;
  @media only screen and (min-width: 768px) {
    width: 50%;
    float: left;
  }
  @media only screen and (max-width: 770px) {
    text-align: center;
  }
}
</style>
