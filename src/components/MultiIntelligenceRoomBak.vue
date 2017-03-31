<template lang="html">
  <div class="ui container" id="multiIntelligenceRoom">
    <el-dialog title="提示" v-model="onMobile" size="tiny" custom-class="responsive-element-dialog" >
      <div class="ui basic segment">
        <h4>对不起...</h4>
        <p>我们的网站暂不支持手机视频</p>
        <small>您可以使用以下方式进行在线课程</small>
        <div class="ui list">
          <div class="item">
            1. 使用桌面电脑访问我们的网站
          </div>
          <div class="item">
            2. 下载android或者iOS应用
          </div>
        </div>
      </div>
    </el-dialog>
    <div class="ui segment basic" v-if="modeSelector==true">
      <el-dialog title="提示：请下载谷歌浏览器观看视频" v-model="browserTips" size="small">
        <div class="ui grid segment stackable center aligned basic">
            <div class="three wide column"><i class="icon huge chrome olive"></i></div>
            <div class="three wide column"></div>
            <div class="five wide column"><a target="_blank" href="http://pan.baidu.com/s/1bpf79CF" class="ui labeled icon orange button"><i class="windows icon"></i> Windows下载 </a></div>
            <div class="five wide column"><a target="_blank" href="http://pan.baidu.com/s/1o7VbL4u" class="ui labeled icon green button"><i class="desktop icon"></i> Mac下载 </a></div>
        </div>
      </el-dialog>
      <div class="ui two column very relaxed grid stackable" >
        <div class="column center aligned">
          <h2 class="ui center aligned icon header">
            <i class="student olive icon"></i>
            正式课入口
          </h2>
          <div class="ui relaxed horizontal divided list small">
            <div class="item">
              <div class="content">
                <span class="header"><router-link style="color:#000;" :to="{name:'SoftwareDownload'}"><i class="download icon"></i>视频直播插件</router-link></span>
              </div>
            </div>
          </div>
          <p>说明：请下载我们的视频插件</p>
          <p>并在安装前退出360安全卫士和杀毒软件</p>
          <p>因为杀毒软件会拦截我们的视频插件</p>
          <p>首次上课请查看<a target="_blank" style="color:#09bb07;text-decoration:underline" href="https://www.czbapp.com/help/Plug-inMode.html">操作流程</a></p>
          <div class="ui divider hidden"></div>
          <a class="olive ui button" @click="pluginMode" >
            <i class="puzzle icon"></i>
            进入训练课
          </a>
        </div>
        <div class="ui vertical divider" style="left:50%;">
          或者
        </div>
        <div class="column center aligned">
          <h2 class="ui center aligned icon header">
            <i class="gift olive icon"></i>
            体验课入口
          </h2>

          <!-- <p>并且保证摄像/传声设备的访问权限</p> -->
          <div class="ui relaxed horizontal divided list tiny">
            <div class="item">
              <i class="chrome icon"></i>
              <div class="content">
                <span class="header">Chrome</span>
              </div>
            </div>
            <!-- <div class="item">
              <i class="firefox icon"></i>
              <div class="content">
                <span class="header">Firefox</span>
              </div>
            </div> -->
            <!-- <div class="item">
              <i class="microsoft edge icon"></i>
              <div class="content" >
                <span class="header" style="text-decoration: line-through;">Edge/IE</span>
              </div>
            </div>
            <div class="item">
              <i class="opera icon"></i>
              <div class="content">
                <span class="header" style="text-decoration: line-through;">Opera</span>
              </div>
            </div>
            <div class="item">
              <i class="help circle icon"></i>
              <div class="content" >
                <span class="header" style="text-decoration: line-through;">360浏览器</span>
              </div>
            </div> -->
          </div>
          <p>说明：请下载最新版的<strong>谷歌浏览器</strong>观看课程</p>
          <p>并且同意摄像/传声设备的访问</p>
          <p>首次上课请查看<a target="_blank" style="color:#09bb07;text-decoration:underline" href="https://www.czbapp.com/help/NonPlug-inMode.html">操作流程</a></p>
          <!-- <div class="ui relaxed horizontal divided list small">
            <div class="item">
              <i class="safari icon"></i>
              <div class="content">
                <span class="header" style="text-decoration: line-through;">Safari</span>
              </div>
            </div>
            <div class="item">
              <i class="opera icon"></i>
              <div class="content">
                <span class="header" style="text-decoration: line-through;">Opera</span>
              </div>
            </div>
            <div class="item">
              <i class="internet explorer icon"></i>
              <div class="content" >
                <span class="header" style="text-decoration: line-through;">IE/360浏览器</span>
              </div>
            </div>
          </div> -->
          <div class="ui divider hidden"></div>

          <a class="ui button olive" @click="webMode">
            <i class="html5 icon"></i>
            进入体验课
          </a>
        </div>
      </div>
    </div>
    <div class="ui segment basic" style="padding:0px; margin:0px;" v-if="modeSelector!=true">

      <div class="ui active centered inline loader" v-if="loading==true"></div>

      <div class="ui segment basic" style="padding:0px; margin:0px;" v-else>

        <div class="ui segment basic" style="padding:0px;" v-if="bookedCourse!=undefined && courseFinished != true">
          <div class="ui segment basic" style="padding:0px;" v-if="!onMobile">

            <el-dialog title="未侦测到客户端" v-model="downloadTips" size="small">
              <p>对不起，请您先下载客户端程序</p>
              <p>如果您已经下载，请打开应用程序</p>
              <p>如果，您还是无法进行视频连接，请联系我们的客服: 400-820-9202</p>
              <div class="ui divider"></div>
              <a class="massive olive ui button" href="http://cdn.czbapp.com/download/WebAgentSetup-1.8.1.exe" target="_blank" >
                <i class="windows icon"></i>
                Windows
              </a>
              <a class="massive olive ui button" href="http://cdn.czbapp.com/download/WebAgent-1.8.1.pkg" target="_blank" >
                <i class="apple icon"></i>
                Mac
              </a>
            </el-dialog>

            <multi-intelligence-room-counter v-if="!timeup" ref="counter" @timeup="timeupEvent" @userKickStart="timeupEvent" :bookedCourse="bookedCourse"></multi-intelligence-room-counter>
            <div class="ui segment basic black inverted" id="server-video" v-else>

             <!--讲师视频-->
             <button class="circular red ui icon button exitButton massive" @click="exitEvent" >
               <i class="icon power"></i>
             </button>
            </div>
            <div id="pptAside" class="ui segment basic" :class="[ppt_at_large==1?'ppt-at-large':'']"  v-if="timeup" style="padding:0px; margin:0px;" >
              <div class="ui active centered inline loader" v-if="!signalReady"></div>
              <div class="ui segment basic" v-else  style="padding:0px;" >
                <div class="floating ui olive label" v-show="ppt.courImgs.length!=0">{{ parseInt(ppt_at) +1}}</div>
                <img :src="ppt.imageUrl" class="ui image fluid" v-show="index == ppt_at"  v-for="(ppt,index) in ppt.courImgs">
                <h4 class="ui header" v-show="ppt.courImgs.length==0">暂无相关讲议</h4>
                <button class="circular olive ui icon button sizeController "  v-show="ppt.courImgs.length!=0" @click="togglePptSize" >
                  <i class="icon maximize" v-if="ppt_at_large==0"></i>
                  <i class="icon compress" v-if="ppt_at_large==1"></i>
                </button>
                <div class="ui icon red buttons mini pptController" v-if="showPPTController==true">
                  <button class="ui button" @click="prevPPT">
                    <i class="left chevron icon"></i>
                  </button>
                  <button class="ui button" @click="nextPPT">
                    <i class="right chevron icon"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="ui segment basic inverted black" id="client-video" v-if="timeup">
              <!-- <span class="ui olive right corner label">
                <i class="record icon"></i>
              </span> -->
              <el-select v-if="mode=='webMode'" class="cameraSelector" v-model="selectedCamera" placeholder="请选择摄像设备" @change="cameraChange">
                <el-option
                  v-for="item in cameras"
                  :label="item.label"
                  :value="item.deviceId">
                </el-option>
              </el-select>
              <el-select v-if="mode=='webMode'" class="microphoneSelector" v-model="selectedMicrophone" placeholder="请选择麦克风" @change="microphoneChange">
                <el-option
                  v-for="item in microphones"
                  :label="item.label"
                  :value="item.deviceId">
                </el-option>
              </el-select>
            </div>

          </div>
        </div>
        <div class="ui floating message" v-else>
          <div class="ui basic segment very padded center aligned" >
            <p>对不起，您还没有预约课程!</p>
            <router-link class="ui olive button" :to="{name:'multiIntelligenceBook'}">
              点此进入预约
            </router-link>
          </div>
        </div>

    </div>

  </div>
</div>
</template>


<script>
import Vue from 'vue'
import isMobile from 'ismobilejs'
import browser from 'detect-browser'
import MultiIntelligenceRoomCounter from './MultiIntelligenceRoomCounter'

let client = undefined
let localStream = undefined
let remoteStream = undefined
let signal = undefined
let session = undefined
let signal_channel = undefined
let signal_retry = undefined
// let wilddogRef = undefined


export default {
  name: 'multi-intelligence-room',
  data () {
    return {
      appid:'17fe5078e7c9467980c1bccfea996fe3',
      token:'',
      channel:undefined,
      room:'',
      callId:'',
      caller:'',
      called:'',
      bookedCourse:undefined,
      courseFinished:false,
      timeup:false,
      ppt:[],
      ppt_at:0,
      ppt_at_large:0,
      videoDemension:'240p_1',
      selectedCamera:'',
      selectedMicrophone:'',
      microphones:[],
      cameras:[],
      modeSelector:true,
      mode:'pluginMode',
      // lastLocalStreamId:undefined,
      // size:{width: 480,height: 480},
      downloadTips:false,
      browserTips:false,
      onMobile:false,
      loading:true,
      signalReady:false,
      retryTimes:0,
      showPPTController:false,
      debug:false,
    }
  },
  components:{
    MultiIntelligenceRoomCounter,
  },
  beforeRouteLeave (to, from, next){
    window.location.href ="//"+window.location.host+to.path
  },
  beforeRouteEnter (to, from, next) {
      // for local dev mode, force it swith port from 8080 to 55555
      if (window.location.protocol === 'http:') {
        let hostname = window.location.hostname
        let port = window.location.port
        if (port === '8080'){
          port = ':55555'
        } else {
          port = ''
        }
        window.location.href ="https://"+hostname+port+"/"+to.path
      }

      if (window.localStorage.USER_SIGN_IN_INFO) {
        next(vm => {
          vm.checkDevice()
        })
      } else {
        next(vm=>{

          vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true

          //preset for the redirect url
          vm.$store.state.userRegLog.USER_LOGIN_REDIRECT = '/multiIntelligence_section/multiIntelligenceRoom'
          vm.$store.state.userRegLog.USER_LOGIN_REDIRECT_BEHAVIOR = function(){
            vm.checkDevice()
          }
        })
      }
  },
  created () {
    let vm = this
    window.onkeydown=function(e){
        if (e.keyCode == 27) {
          vm.$notify.info('ppt翻页已经打开')
          vm.showPPTController = true
        }
    }
  },
  methods: {
    loadAgoraAgentRTC() {
      let vm = this
      $.getScript( "//cdn.czbapp.com/static/js/AgoraRtcAgentSDK-1.9.0.js", function() {
        vm.initAgoraClientByPlugin()
      })

    },
    loadAgoraWebRTC () {
      let vm = this

      $.getScript( "//cdn.czbapp.com/static/js/AgoraRTCSDK-1.8.0.js", function() {
        $.getScript( "//cdn.czbapp.com/static/js/adapter.js", function() {
          $.getScript( "//cdn.czbapp.com/static/js/socket.io.js", function() {
            vm.initAgoraClientByWeb()
            vm.doGetDevices()
          })
        })
      })

    },
    loadAgoraSignal(){
      let vm = this
      $.getScript( "//cdn.czbapp.com/static/js/AgoraSig-1.1.0.js", function() {
        vm.initSession()
        vm.getUserPPT()
      })
    },
    doGetDevices () {
      // getDevices
      let vm = this
      AgoraRTC.getDevices(function(devices){
        vm.cameras = devices.filter(item=>item.kind == 'videoinput')
        vm.microphones = devices.filter(item=>item.kind == 'audioinput')
      })
    },
    cameraChange (id){
      let vm = this
      vm.selectedCamera = id
      vm.initLocalStreamByWeb()
    },
    microphoneChange (id) {
      let vm = this
      vm.selectedMicrophone = id
      vm.initLocalStreamByWeb()
    },
    togglePptSize () {
      let vm = this
      vm.ppt_at_large = vm.ppt_at_large == 0 ? 1:0
    },
    nextPPT(){
      let vm = this
      vm.ppt_at = vm.ppt_at <  vm.ppt.courImgs.length-1 ?  parseInt(vm.ppt_at) +1 : parseInt(vm.ppt_at)
    },
    prevPPT(){
      let vm = this
      vm.ppt_at = vm.ppt_at > 0 ? parseInt(vm.ppt_at) -1 : 0
    },
    exitEvent () {
      let vm = this

      remoteStream != undefined && remoteStream.stop()
      localStream != undefined && localStream.stop()

      if(client != undefined ){

          client.leave(function () {
            console.log("Leavel channel successfully")
          }, function (err) {
            console.log("Leave channel failed")
          })

          client.unsubscribe(remoteStream)
          client.unpublish(localStream, function (err) {
            console.log("Unpublish local stream failed" + err)
          })
      }

      if(session != undefined){
          signal_channel != undefined && signal_channel.channelLeave(function(){
            session.logout()
          })
      }

      // vm.$notify.info('用户退出成功')

      setTimeout(function(){
        vm.$router.replace('/multiIntelligence_section/multiIntelligence')
      },1000)

    },
    timeupEvent () {
      let vm = this
      vm.timeup = true
      vm.getSig()
    },
    checkDevice () {
      let vm = this

      if (isMobile.phone) {
        vm.onMobile = true
      } else {
        vm.onMobile = false
        vm.checkBrowser()
      }
    },
    checkBrowser () {
      let vm = this
       if (browser.name == 'chrome') {
         vm.browserTips = false
       } else {
         vm.browserTips = true
       }
    },
    getSig () {
        let vm = this

        vm.$store.dispatch('GET_SIG_ACTION',{userId:vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id}).then(res=>{
          vm.token = res.token
          vm.getChannel()
        })
    },
    getChannel () {
      let vm = this

      vm.$store.dispatch('GET_CHANNEL_ACTION',{roomNum:vm.bookedCourse.id,idCardType:"1",userId:vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id}).then(res=>{
          vm.channel = res
          if (!vm.channel.is_online) {

            if (vm.mode =='pluginMode') {
              vm.loadAgoraAgentRTC()
            } else {
              vm.loadAgoraWebRTC()
            }

            vm.loadAgoraSignal()

          } else {
            vm.$notify.error('已经有用户在进行视频连接,请关闭后2分钟后重新再试')
          }

      })
    },

    initAgoraClientByWeb(){
      let vm = this

      client = AgoraRTC.createLiveClient()

      client.init(vm.channel.channelKey,function(res){
        // vm.$notify.success('客户端初始化成功')

        client.join(vm.bookedCourse.id, vm.channel.uid, function(uid) {

          // vm.$notify.success('用户进入频道成功')
          vm.initLocalStreamByWeb()

        }, function(err){
          // vm.$notify.error('用户进入频道失败')
          // console.log(err)
        })

      },function(err){
        vm.$notify.error('客户端初始化失败')
      })

    },
    initAgoraClientByPlugin(){
      let vm = this

      client = AgoraRTC.createLiveClient()

      client.init(vm.appid,function(res){

        // vm.$notify.success('客户端初始化成功')

        client.join(vm.channel.channelKey, vm.bookedCourse.id, vm.channel.uid, function(uid) {

          // vm.$notify.success('用户进入频道成功')
          vm.initLocalStreamByPlugin()

        })

      },function(err){
        vm.showTips(err)
      })

    },
    initSession(uid){
      let vm = this
      // vm.$notify.info('开始初始化信令')

      signal = Signal(vm.appid)
      session = signal.login(vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id, vm.token)

      session.onLoginSuccess = (uid) => {
        // vm.$notify.info('信令登录成功')
        vm.signalReady = true
        vm.initSignalChannel()
        if (signal_retry != undefined) {clearInterval(signal_retry)}
       }

      session.onLoginFailed = (ecode) => {
        // vm.$notify.error('信令登录失败')
        vm.$notify.error('连接失败')
       }

     signal_retry = setInterval(function(){
       vm.retryTimes ++
      //  vm.$notify.info('正在尝试第'+vm.retryTimes+'次信令登录')
       session = signal.login(vm.$store.state.userRegLog.USER_SIGN_IN_INFO.id, vm.token)
       if (vm.retryTimes > 5){
        //  vm.$notify.info('ppt翻页已经打开')
         vm.showPPTController = true
         clearInterval(signal_retry)
       }
     },3000)

      session.onMessageInstantReceive = (account, uid, msg) => {
        console.log(account,uid,msg)
      }

      session.onInviteReceived = function(call){
        console.log(call)
      }

    },
    initSignalChannel(){
      let vm = this

      signal_channel = session.channelJoin(vm.bookedCourse.id)
      signal_channel.onMessageChannelReceive = function(account, uid, msg){
          let serverSignal = msg.split('=')
          // vm.debug == true && vm.$notify.info('信令接收成功'+msg)
          if (serverSignal[0]=='pageNum') {
            vm.ppt_at = serverSignal[1]
          }
          if (serverSignal[0]=='showPPT') {
            vm.ppt_at_large = serverSignal[1]
          }
      }

      signal_channel.onChannelJoined = function(){
        // vm.$notify.info('信令进入频道成功')
      }

      signal_channel.onChannelJoinFailed = function(){
        vm.$notify.error('信令进入频道失败')
      }

      signal_channel.onChannelLeaved = function(){
        vm.$notify.warning('信令已退出频道')
      }
    },
    initLocalStreamByPlugin(){
      let vm = this

      localStream = AgoraRTC.createStream({
            streamID: vm.channel.uid,
            audio: true,
            video: true,
            screen: false,
            local: true
        })

      localStream.setVideoProfile(vm.videoDemension)

      localStream.init(function(){

          // vm.$notify.success('视频流初始化成功')

          localStream.play('client-video')

          client.publish(localStream, function (err) {
            // vm.$notify.success('客户端视频发布成功')
          },function(err){
            vm.$notify.error('客户端视频发布失败')
          })

          client.on('stream-published', function (evt) {
            // vm.$notify.success('客户端视频发布成功')
          })

          client.on('stream-added', function(evt) {
              var stream = evt.stream
              client.subscribe(stream, function(err) {
                // vm.$notify.success('客户端视频连线成功')
              },function(){
                vm.$notify.error('出错啦')
              })
          })

          client.on('stream-subscribed', function(evt) {
            let streamId = evt.stream.getId()

            if (streamId>500000000 && streamId<1000000000){
                // vm.$notify.success('训练师连接成功!')
                remoteStream = evt.stream
                remoteStream.play('server-video')
            }
          })

          client.on('stream-removed', function (evt) {
            var stream = evt.stream
            stream.stop()
            $('#player_' + stream.getId()).remove()
          })

          client.on('peer-leave', function (evt) {
            var stream = evt.stream
            stream.stop()
            $('#player_' + stream.getId()).remove()
          })

      },function(err){
        vm.$notify.error('视频流初始化失败')
      })
    },
    initLocalStreamByWeb(){
      let vm = this

      if (localStream!=undefined) {
        localStream.stop()
        $('#player_' + localStream.getId()).remove()
      }

      localStream = AgoraRTC.createStream({
        streamID: vm.channel.uid,
        audio:true,
        video:true,
        screen:false,
        cameraId: vm.selectedCamera,
        microphoneId: vm.selectedMicrophone})

      localStream.setVideoProfile(vm.videoDemension)

      localStream.init(function(){

          // vm.$notify.success('视频流初始化成功')

          localStream.play('client-video','//cdn.czbapp.com/static/images')

          client.publish(localStream, function (err) {
            vm.$notify.error('客户端视频发布失败')
          })

          client.on('stream-published', function (evt) {
            // vm.$notify.success('客户端视频发布成功')
          })

          client.on('stream-added', function(evt) {
              var stream = evt.stream
              client.subscribe(stream, function(err) {
                vm.$notify.success('客户端视频连线成功')
              },function(){
                vm.$notify.error('出错啦')
              })
          })

          client.on('stream-subscribed', function(evt) {
            let streamId = evt.stream.getId()
            if (streamId>500000000 && streamId<1000000000){
                // vm.$notify.success('训练师连接成功!')
                remoteStream = evt.stream
                remoteStream.play('server-video','//cdn.czbapp.com/static/images')
            }
          })

          client.on('stream-removed', function (evt) {
            var stream = evt.stream
            stream.stop()
            $('#player_' + stream.getId()).remove()

          })

          client.on('peer-leave', function (evt) {
            var stream = evt.stream
            stream.stop()
            $('#player_' + stream.getId()).remove()
          })

      },function(err){
        vm.$notify.error('视频流初始化失败')
      })
    },
    showTips(err){

      let vm = this
      vm.downloadTips = true

    },
    pluginMode (){
      let vm = this
      vm.mode = 'pluginMode'
      vm.getUserBookedInfo()
    },
    webMode () {
      let vm = this
      vm.mode = 'webMode'
      vm.getUserBookedInfo()
    },
    getUserBookedInfo () {
      let vm = this
      vm.modeSelector = false

      vm.$store.dispatch('GET_BOOKED_MI_COURSE_ACTION',{userId:this.$store.state.userRegLog.USER_SIGN_IN_INFO.id})
      .then(res=>{

        vm.bookedCourse = res.slice(-1).pop()
        vm.loading=false

        //fake data
        // vm.bookedCourse = {
        //   fieldOne:"402881875a3117e4015a3140910a000e",
        //   fieldTwoName:"身体运动",
        //   fieldOneName:"身体运动",
        //   courseType:2,
        //   cancelStatus:0,
        //   day:"17",
        //   bookTime:1487322480000,
        //   courseName:"训练课预约",
        //   createTime:"Feb 17, 2017 2:38:31 PM",
        //   fieldTwo:"402881875a3117e4015a3140910a000e",
        //   courseId:"402890ba573b097401573b1c5fe20041",
        //   fieldTypeName:"创造力训练课",
        //   hour:"16",
        //   id:"12d0716e32bf4c69b7cef672a43b4735",
        //   month:"2",
        //   pictureUrl:"http://mp1.yuningwang.com/czb/getPicture?url=62f95f821dbd4759b17157c735e74b41.jpg",
        //   roomNum:"21716-1",
        //   statu:0,
        //   useTimeNum:1,
        //   year:"2017",
        // }

        let currentTime = new Date().getTime()

        if (vm.bookedCourse.statu==1){
          //course has finished
          vm.courseFinished = true
        } else {
          if (currentTime >= vm.bookedCourse.bookTime ){
          //course has started
          //  if (currentTime <= vm.bookedCourse.bookTime){
            vm.timeup = true
            vm.getSig()
          } else {

            vm.$nextTick(function(){
              vm.timeup = false
              vm.$refs.counter && vm.$refs.counter.userWait()
            })

          }
        }

      }).catch(err=>{
        // console.log(err)
      })
    },
    getUserPPT () {
      let vm = this
      vm.$store.dispatch('GET_PPT',{id:vm.bookedCourse.id}).then(res=>{
        vm.ppt = res
      })
    },
  },
}
</script>


<style lang="scss" scoped>
#multiIntelligenceRoom {
  padding: 120px 1rem 0rem 1rem;
  position: relative;
  min-height: 700px;

}

#server-video {
  width:640px;
  height: 500px;
  padding: 0px!important;
  margin: 0px!important;
  canvas {
    width:640px!important;
    height: 480px!important;
  }
}

#client-video {
  position: absolute;
  right:0px;
  bottom:0px;
  width:420px!important;
  height: 240px;
  padding: 0px!important;
  margin: 0px!important;
  canvas {
    width:320px!important;
    height: 240px!important;
  }

  .cameraSelector,.microphoneSelector {
      position: absolute;
      width: 190px;
      left:0px;
      bottom:-40px;
      z-index: 1;
  }
  .microphoneSelector {
    right: 0px;
    left:auto;
  }

}
.exitButton {
  position: absolute;
  left:48%;
  bottom:-30px;
  z-index: 1;

}
.sizeController {
  position: absolute;
  left:-18px;
  top:48%;
}
.pptController{
  position: absolute;
  top:100%;
  left:0px;
  button {
    padding: 0.3em!important;
  }
  i {
    margin: 0em!important;
  }
}

#pptAside {
  position: absolute;
  right:0px;
  top:0px;
  width:420px;
  height: 240px;
  z-index: 1;
  img {
    width:420px;
    height: 240px;
  }
  .loader {
    margin-top: 90px;
  }


  &.ppt-at-large {
    width: 700px;
    height: 500px;

    img {
      width: 700px;
      height: 500px;
    }
  }
}
</style>
