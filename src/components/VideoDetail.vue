<template lang="html">
  <section class="ui container">
    <div class="ui active inverted dimmer" v-if="loading==true">
      <div class="ui loader"></div>
    </div>
    <div class="ui grid" v-else>
      <el-breadcrumb class="sixteen wide column computer only" separator="/">
        <el-breadcrumb-item :to="{ path: '/video' }">在线视频</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/video/course/0/0/0/asc' }" v-if="" >专业课程</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/video/program/0/0/0/asc'}">视频节目</el-breadcrumb-item>
        <el-breadcrumb-item >{{VIDEO_BASE_INFO.courseName}}</el-breadcrumb-item>
      </el-breadcrumb>

      <div class="ten wide computer sixteen wide tablet sixteen wide mobile column">
        <div class="ui tiny horizontal divided list">
          <div class="item" v-for="teacher in VIDEO_TEACHER_INFO">
            <img class="ui avatar image" :src="teacher.pictureUrl">
            <div class="content">
              <div class="header">{{teacher.name}}</div>
            </div>
          </div>
        </div>
        <div class="ui embed" v-lazy:background-image="VIDEO_BASE_INFO.pictureUrl">
          <!-- <img class="ui image fluid" alt=""  v-lazy="VIDEO_BASE_INFO.pictureUrl"> -->

          <i class="ui icon video play"></i>
        </div>
        <div class="ui segment basic" id="videoPlayer"></div>
      </div>

      <div class="ui divided items six wide computer sixteen wide tablet sixteen wide mobile column">
        <el-table
         :data="VIDEO_REF_INFO"
         border
         style="width: 100%">
         <el-table-column
           prop="subCourseName"
           label="视频列表"
           >
           <template scope="scope">
             {{scope.row.subCourseName}}
           </template>
         </el-table-column>

         <el-table-column
           fixed="right"
           width="100"
           >
           <template scope="scope">
             <button class="circular ui icon button">
               <i class="icon play"></i>
             </button>
           </template>
         </el-table-column>
       </el-table>
      </div>
      <div class="sixteen wide computer column">

        <el-tabs type="border-card">
          <el-tab-pane v-html="VIDEO_BASE_INFO.courseDescription">
            <span slot="label"><i class="ui icon file text"></i> 课程介绍</span>

          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="ui icon unordered list"></i> 课程目录</span>
          </el-tab-pane>
          <el-tab-pane >
            <span slot="label"><i class="ui icon comment"></i> 课程咨询</span>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-star-on"></i> 收藏课程</span>
          </el-tab-pane>
        </el-tabs>
        <div class="ui segment basic" id="videoPlayerDemo"></div>

      </div>
    </div>
  </section>

</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name:"video-detail",
  beforeRouteLeave (to, from, next){
    window.location.href ="//"+window.location.host+to.path
  },
  data () {
    return {
      loading:true,
    }
  },
  computed: {
    ...mapGetters(['VIDEO_BASE_INFO','VIDEO_REF_INFO','VIDEO_TEACHER_INFO'])
  },
  created () {
    let vm = this
    let id = vm.$route.params.id
    vm.$store.dispatch('VIDEO_GET_BASE_INFO',id).then(res=>{
      vm.$store.dispatch('VIDEO_GET_REF_INFO',id).then(res=>{
        vm.$store.dispatch('VIDEO_GET_TEACHER_INFO',id).then(res=>{
          vm.loading = false
          vm.getPlayerCode()

        })
      })
    })

  },
  methods: {
    getPlayerCode(id){
      let vm = this
      $.ajax({
        url : "//192.168.16.188:8099/czb-server/czb/api/cc/getPlaycode/A9F771311583DFA89C33DC5901307461",
        success : function(data) {
          $('#videoPlayerDemo').html(data)
        }
      })
    }
  },
  mounted () {



  },

}
</script>
<style lang="scss">

.el-tab-pane {
  img {
    max-width: 100%;
  }
}
</style>

<style lang="scss" scoped>
img[lazy=loading],img[lazy=error] {
  margin: 0px auto 0px;
  transform-origin: 50% 20%;

}
.ui.embed {
  text-align: center;
  padding-bottom: 70%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
}
.ui.embed[lazy=loading] {
  background-size: 30%;
}

.ccH5playerBox {
  width: 100%!important;
  height: 50vh!important;

}
video {
  width: 100%;
}

</style>
