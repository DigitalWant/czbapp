<template lang="html">
<div class="ui container">
    <div class="ui active centered inline loader" v-if="VIDEO_LIST_DATA===undefined"></div>
    <div class="ui stackable four column grid center aligned"  v-else>
      <div class="column" v-for="course in VIDEO_LIST_DATA.courses">
        <router-link :to="{name:'videoDetail',params:{id:course.id}}"  class="ui card ">
        <div class="image">
          <img class="ui image fluid" v-lazy="course.pictureUrl">
        </div>
        <div class="content left aligned">
          <div class="header">{{course.courseName }}</div>
          <div class="description">{{course.title | truncate(50) }}</div>
        </div>
        <div class="extra content left aligned">
          <span class="right floated">{{course.playTimes}}人 </span>
          <span>价格：￥{{course.presentPrice}}</span>
        </div>
      </router-link>
      </div>
    </div>
    <div class="ui segment basic center aligned"  v-if="VIDEO_LIST_DATA!==undefined " >
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="12"
        layout="prev, pager, next, jumper"
        :total="VIDEO_LIST_DATA.totle">
      </el-pagination>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

  data () {
    return {
      loading:true,
       currentPage:0,
       programTime:0,
    }
  },
  computed:{
    ...mapGetters(['VIDEO_LIST_DATA'])
  },
  created () {
    let vm = this
    vm.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      let vm = this
      vm.currentPage = parseInt(vm.$route.params.page)+1
      vm.$store.dispatch('VIDEO_GET_LIST',vm.$route.params)
    },
    handleSizeChange(val) {

    },
    handleCurrentChange(val) {
       let vm =this
       let pageNum = val-1
       vm.$router.push('/video/'+vm.$route.params.type+'/'+vm.$route.params.tag+'/'+vm.$route.params.orderBy+'/'+pageNum+'/'+vm.$route.params.sortBy)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  min-height: 355px;

  .image {
    img {
      height: 160px;
    }
  }
}
</style>
