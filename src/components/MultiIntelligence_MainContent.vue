<template lang="html">

    <router-view></router-view>

</template>

<script>
export default {
  name:'main-content'
}
</script>

<style lang="scss" scoped>
.mainContent {
  padding-top: 10rem;
  padding-bottom: 10rem;

  min-height: 86vh;

  @media only screen and (max-width: 700px) {
    padding-top: 64px;
    margin: 0px!important;
  }
  .main {
    margin-top: 3rem;
  }
}

// .mainContent {
//   padding-top: 85px;
//   min-height: 85vh;
//
//   @media only screen and (max-width: 700px) {
//     padding-top: 44px;
//
//   }
// }

</style>
