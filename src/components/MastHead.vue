<template lang="html">
  <div class="ui basic segment masthead">
    <div class="ui segment basic ctx">
      <div class="introduction">
        <h1 class="ui header center aligned">
          <div class="ui statistic">
              <div class="value" >
              成长保
              </div>
              <div class="label" style="font-size:50px;" >
                150万父母的选择
              </div>
              <div class="label" >
                提高注意力，考出好成绩
              </div>
            </div>
        </h1>
      </div>
    </div>
    <div class="ui grid">
      <div class="sixteen wide column">
        <router-link :to='{"name":"multiIntelligence"}'><div class="ui button orange huge" tabindex="0">进入训练课</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mast-head'
}
</script>
<style lang="scss" scoped>
.ui.masthead{
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/banner/multiIntelligence/banners.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}
.ui.statistic{
  margin-top: 10em;
  .value {
    font-size: 5rem!important;
  }
  .label,.value {
    color: #fff;
    margin-bottom: 0.3em;
    font-weight: normal;
    text-shadow: 1px 1px 5px #737373;

  }
}
.ui.grid{
  text-align: center;
}
  @media only screen and (max-width: 768px) {
    .ui.statistic{
      margin-top: 5em;
    }
    .ui.masthead{
      background-size: auto 100%;
    }
    &.segment {
      min-height: 350px;
    }
    & h1.ui.header {
      font-size: 2em;
      margin-top: 0.5em;
      .ui.statistic > .label {
        font-size: 1.5rem!important;
      }
      .ui.statistic > .value {
        font-size: 3rem!important;
      }
    }
    & h2 {
      margin-top: 0.5em;
      font-size: 1.5em;
    }

  }
</style>
