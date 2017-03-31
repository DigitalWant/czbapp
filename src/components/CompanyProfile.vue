<template lang="html">
  <div class="">
    <div class="ui horizontal divider special-header olive">
       公司简介
     </div>
    <img src="../assets/images/CompanyProfile/5.png" alt="" style="width:100%">
    <h3>成长保作为一对一在线早教第一品牌</h3>
    <p style="margin-bottom:80px">成长保隶属于育宁文化发展（上海）有限公司，成长保拥有超过500名专业儿童咨询师和儿童游戏师，通过独家开发的一对一互动课堂平台，
      为用户提供儿童创造力、注意力、数理逻辑力等测评和开发训练，同时提供针对家庭教育的轻咨询服务。
      随时解答家长疑虑、缓解家长焦虑情绪、定制孩子成长教育模式、提升孩子各项能力指数，为孩子成长保驾护航。</p>
      <div class="ui grid stackable">
          <div class="eight wide column"><img src="../assets/images/CompanyProfile/6.png" alt="" style="width:100%"></div>
          <div class="eight wide column"><h3>成长保拥有500多名专业儿童咨询师和游戏师</h3><p>通过有趣的一对一心理游戏训练，成长保提升儿童的“专注力、数学逻辑力、创造力”三大核心能力。
            通过专业儿童成长顾问一对一的在线训练指导及每次训练后的评估反馈，让孩子在身心发育时期得到父母
            正确的引导和高质量的陪伴，充分享受亲子成长的快乐。</p></div>
          </div>
          <div class="ui grid stackable" style="direction:rtl;margin-top:60px">
            <div class="eight wide column" style="direction:ltr;"><img src="../assets/images/CompanyProfile/7.png" alt="" style="width:100%"></div>
          <div class="eight wide column" style="direction:ltr;"><h3>成长保拥有教育公益的热情和基因</h3><p>成长保精准定位在家庭教育、利用前瞻的技术路径、结合众多的优质师资人才、通过原创的学习内容、
            拥有教育公益的热情和基因，为家庭教育的颠覆式创新担起责任，引领中国家庭教育新的走向。</p></div>
      </div>

  </div>
</template>

<script>
export default {
  name:'CompanyProfile',
  // data(){
  //   return {
  //     pageIndex:""
  //   }
  // },
  // beforeRouteEnter (to, from, next) {
  //   next(vm => {
  //     vm.pageIndex = to['name']
  //   })
  // },
}
</script>
<style lang="scss"scoped>
p{
  margin: 30px 0;
  color:#000;
  line-height: 24px;
}
h3{
  @media only screen and (max-width: 768px) {
    text-align: center!important;
    height: auto;
  }
}
</style>
