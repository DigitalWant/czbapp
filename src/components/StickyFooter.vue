<template lang="html">
    <div class="ui fluid container" id="stickyFooter">
      <div class="ui container" >
        <div class="ui grid stackable">
        <div class="three column row" style="padding-bottom:3rem;">
            <div class="column tablet" >
              <div class="ui list " id="friend-links">
                <el-row>
                  <router-link :to="{ name: 'CompanyProfile' }"><el-col :span="12"><div class="grid-content bg-purple minHeight">公司简介</div></el-col></router-link>
                  <router-link :to="{ name: 'AttentionCourse' }"><el-col :span="12"><div class="grid-content bg-purple minHeight" style="text-align:left">注意力课程</div></el-col></router-link>
                  <router-link :to="{ name: 'JoinCompany' }"><el-col :span="12"><div class="grid-content bg-purple minHeight">加入我们</div></el-col></router-link>
                  <router-link :to="{ name: 'SoftwareDownload' }"><el-col :span="12"><div class="grid-content bg-purple minHeight" style="text-align:left">软件下载</div></el-col></router-link>
                </el-row>
                <el-row>
                  <el-col :span="12"><div class="grid-content bg-purple-light">友情链接 : </div></el-col>
                  <el-col :span="12"><div class="grid-content bg-purple" style="text-align:left">
                    <a target="_blank" href="http://www.ximalaya.com/explore/">喜马拉雅FM</a> |
                    <a target="_blank" href="http://www.ajmide.com/">阿基米德</a> |
                    <a target="_blank" href="http://www.smg.cn/">SMG</a> |
                    <a target="_blank" href="http://www.toysrus.com.cn/">玩具翻斗城</a>
                  </div></el-col>
                </el-row>
              </div>
            </div>
            <div class="column" style="color:#767676;padding-top:1rem;border-left:1px solid #e3e3e3">
              <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark grid-contentss">客服热线  : <span >4008-209-202</span></div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple-dark grid-contentss">公司热线  : <span >021-5878-6064</span></div></el-col>
                <el-col :span="24"><div class="grid-content bg-purple-dark grid-contentss">公司地址  : <span style="width:300px" >上海市徐汇区冠生园路227号3号楼2楼</span></div></el-col>
              </el-row>
            </div>
            <div class="column" style="border-left:1px solid #e3e3e3">
              <div class="text-img">
                <dl>
                  <dt><img src="../assets/images/qrcode/WeChat.jpg" alt=""></dt>
                  <dd>微信公众号</dd>
                </dl>
                <dl>
                  <dt><img src="../assets/images/qrcode/appImg.jpg" alt=""></dt>
                  <dd>APP下载</dd>
                </dl>
                </div>
            </div>
          </div>
      </div>
    </div>
    <!-- <div class="icons talkIcon">
      <i class="talk Outline icon"></i>
    </div> -->
    <div class="ui fluid container footers">
      <b>成长保&copy;2011-2017 育宁文化发展 (上海) 有限公司</b><b> All rights Reserved 沪ICP备 <a style="color:#fff;" href="http://www.miitbeian.gov.cn"  target="_blank">13005274号-6</a></b>
    </div>
  </div>
  <!-- <el-col :span="24">
    <div class="grid-content bg-purple-dark">
      <div class="icons" style="margin-left:0">
        <i class="qq icon"></i>
      </div>
      <div class="icons">
        <i class="wechat icon"></i>
      </div>
      <div class="icons">
        <i class="weibo icon"></i>
      </div>
    </div>
  </el-col> -->
</template>

<script>
export default {
  name: "sticky-footer",
  data () {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
#stickyFooter {
  background-color:#fff;
  position:relative;
  margin: 0px!important;
  border-top:1px solid #e3e3e3;
  padding-top: 20px;
}

#friend-links {
  padding-top: 1em;
  span {
    float:left;
    line-height:2.4em;
  }
  p{
    padding: 0px;
    margin: 0px;
    line-height: 1em;
  }
  @media only screen and (max-width: 768px) {
    a {
      line-height: 1em;
      padding: 0px;
      margin: 0px;
    }
    p {

    }
  }
}
.talkIcon{
  width: 60px!important;
  height: 60px!important;
  background-color: #ff9f00!important;
  border: 5px solid #fedaa0;
  color: #fff;
  border-radius:60px;
  position: absolute;
  right: 50px;
  top: 50px;
}
.footers{
  width: 100%;
  line-height: 40px;
  text-align: center;
  color: #a9a7a8;
  background: #454545;
  margin: 0px!important;
}
.column a,#friend-links .bg-purple{
  color:#767676;
  &:hover{
    color:#25ac38;
  }
}
.column{
  margin-top: 1rem;
  @media only screen and (max-width: 768px) {
    border: 0!important;
  }
}
.links{
  margin-left: 5rem;
  @media only screen and (max-width: 768px) {
    margin: 0;
    display: none;
  }
}
.text-img{
  width: 100%;
  height: 100%;
    display: inline-flex!important;
  justify-content: space-around!important;
  align-items: center!important;
}
.column dl{
  display: inline-block;
  text-align: center;
  dd{
    text-align: center;
    width: 100%;
    margin: 0;
  }
}
.column img{
  width: 100px;
  height: 100px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.minHeight{
  min-height: 25px!important;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  margin-top: 0.5rem;
  text-align: center;
}
.grid-contentss{
  border-radius: 4px;
  min-height: 36px;
  margin-top: 0.5rem;
  text-align: left;
  padding-left: 50px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    padding-left: 0;
  }
}
.icons{
  height: 40px;
  width: 40px;
  margin-left: 2.4rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 40px;
  &:hover{
    background-color:#bbb;
  }
  i{
    color: #fff;
    font-size: 25px;
    margin-left: 3px;
    margin-top: 5px;
  }
}



</style>
