<template lang="html">
  <div class="ui container" id="videoOnline">

      <aside class="ui container middle aligned divided list" v-if="$route.name=='videoLanding'">
        <nav class="item">
          <div class="left floated content">
            类型:
          </div>
          <a class="ui label"
          :class="[$route.params.type=='course'?'olive':'']"
          @click="filter({type:'course',orderBy:0,tag:0,page:0,sortBy:'asc'})">专业课程</a>
          <a class="ui label"
          :class="[$route.params.type=='program'?'olive':'']"
          @click="filter({type:'program',orderBy:0,tag:0,page:0,sortBy:'asc'})">视频节目</a>
        </nav>
        <nav class="item" v-if="$route.params.type=='course'">
          <div class="left floated content">
            领域:
          </div>
          <a class="ui label"
          :class="[$route.params.tag==0?'olive':'']"
          @click="filter({tag:0,page:0,sortBy:'desc'})">全部</a>
          <div class="ui active tiny inline loader" v-if="VIDEO_TAGS === undefined"></div>

          <a
          v-else
          class="ui label"
          :class="[$route.params.tag==item.id?'olive':'']"
          v-for="item in VIDEO_TAGS" @click="filter({tag:item.id,page:0,orderBy:0,sortBy:'desc'})" >{{item.name}}</a>
        </nav>
        <nav class="item" v-if="$route.params.type=='course'">
          <div class="left floated content">
            排序:
          </div>
          <a class="ui label" @click="filter({orderBy:0,sortBy:'asc'})" :class="[$route.params.orderBy=='0'?'olive':'']">默认</a>
          <a class="ui label" @click="filter({orderBy:1,sortBy:'desc'})" :class="[$route.params.orderBy=='1'?'olive':'']">浏览量</a>
          <a class="ui label" @click="filter({orderBy:3,sortBy:'asc'})" :class="[$route.params.orderBy=='3'?'olive':'']">价格</a>
        </nav>
      </aside>
      <router-view name="videoMain"></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name:"video",
  data () {
    return {
      loadingTags:true,
    }
  },
  computed: {
    ...mapGetters(['VIDEO_TAGS']),
  },
  created () {
    let vm =this
    vm.$store.dispatch('VIDEO_TAGS')
  },
  methods:{
    filter(by){
      let vm = this
      vm.$router.push({name:'videoLanding',params:by})
    },
  },

}

</script>

<style lang="scss" scoped>
#videoOnline{
  padding-top: 10em;
  min-height: 86vh;
  padding-bottom: 10rem;
}
.left.floated.content{
  margin: 0.3em 1em 0 0;
}
</style>
