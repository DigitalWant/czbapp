import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
// import VueTruncate from 'vue-truncate-filter'

//import semantic ui js
import '../semantic/dist/semantic.css'
import '../semantic/dist/semantic'

import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css' //默认UI样式
import '../theme/#09bb07/index.css'



Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '//cdn.czbapp.com/static/images/loadingfail.gif',
  loading: '//cdn.czbapp.com/static/images/loading.gif',
  attempt: 5
})

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

//import components
import App from './App'
import Home from './components/Homepage'
import Homes from './components/Homepages'
import BookStore from './components/BookStore'

//import store
import store from './store'

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'active',
  routes: [{
      path: '/homes',
      name: 'homes',
      component: Home,
    },
    {
        path: '/home',
        name: 'home',
        component: Homes,
      },
    {
      path: '/user/:id',
      name: 'userDashboard',
      redirect: '/user/:id/profile',
      component: resolve => require(['./components/UserDashboard.vue'], resolve),
      children: [{
        path: 'profile',
        name: 'profile',
        redirect: '/user/:id/profile/info',
        components: {
          userSection: resolve => require(['./components/UserDashboardProfile.vue'], resolve)
        },
        children: [{
          path: 'info',
          name: 'info',
          components: {
            userMain: resolve => require(['./components/UserInfoModify.vue'], resolve),
          }
        }, {
          path: 'modifyPassword',
          name: 'modifyPassword',
          components: {
            userMain: resolve => require(['./components/UserModifyPassword.vue'], resolve),
          }
        }, {
          path: 'babyInfo',
          name: 'babyInfo',
          components: {
            userMain: resolve => require(['./components/UserBabyInfo.vue'], resolve),
          }
        }],
      }, {
        path: 'account',
        name: 'account',
        redirect: '/user/:id/account/info',
        components: {
          userSection: resolve => require(['./components/AccountDashboard.vue'], resolve)
        },
        children: [{
          path: 'info',
          name: 'accountInfo',
          components: {
            userMain: resolve => require(['./components/AccountInfo.vue'], resolve),
          },
        }, {
          path: 'charge',
          name: 'charge',
          components: {
            userMain: resolve => require(['./components/AccountCharge.vue'], resolve),
          },
        }, {
          path: 'myCards',
          name: 'myCards',
          components: {
            userMain: resolve => require(['./components/AccountCards.vue'], resolve),
          },
        }, {
          path: 'consultRecorder',
          name: 'consultRecorder',
          components: {
            userMain: resolve => require(['./components/UnderConstruction.vue'], resolve),
          },
        }, {
          path: 'trainingRecorder',
          name: 'trainingRecorder',
          components: {
            userMain: resolve => require(['./components/UserTrainMultiple.vue'], resolve),
          },
        }],
      }, {
        path: 'order',
        name: 'order',
        components: {
          userSection: resolve => require(['./components/UnderConstruction.vue'], resolve),
        },
      }],
    },
    {
      path: '/CompanyIntroduction',
      name: 'CompanyIntroduction',
      component: resolve => require(['./components/CompanyIntroduction.vue'], resolve),
      children: [{
        path: '/CompanyProfile',
        name: 'CompanyProfile',
        component: resolve => require(['./components/CompanyProfile.vue'], resolve),
      }, {
        path: '/AttentionCourse',
        name: 'AttentionCourse',
        component: resolve => require(['./components/AttentionCourse.vue'], resolve),
      }, {
        path: '/JoinCompany',
        name: 'JoinCompany',
        component: resolve => require(['./components/JoinCompany.vue'], resolve),
      }, {
        path: '/SoftwareDownload',
        name: 'SoftwareDownload',
        component: resolve => require(['./components/SoftwareDownload.vue'], resolve),
      }]
    },
    {
      path: '/multiIntelligence_section',
      name: 'multiIntelligence_section',
      component: resolve => require(['./components/MultiIntelligence_MainContent.vue'], resolve),
      children: [{
        path: 'multiIntelligence',
        name: 'multiIntelligence',
        component: resolve => require(['./components/MultiIntelligence.vue'], resolve),
      }, {
        path: 'payment/:itemName/',
        name: 'multiIntelligencePayment',
        component: resolve => require(['./components/Payment.vue'], resolve),
      }, {
        path: 'multiIntelligenceRoom',
        name: 'multiIntelligenceRoom',
        component: resolve => require(['./components/MultiIntelligenceRoom.vue'], resolve),
      },{
        path: 'multiIntelligenceBook',
        name: 'multiIntelligenceBook',
        component: resolve => require(['./components/MultiIntelligenceBook.vue'], resolve),
      }, {
        path: 'multiIntelligenceTest',
        name: 'multiIntelligenceTest',
        component: resolve => require(['./components/MultiIntelligenceTest.vue'], resolve),
      }],
    },
    {
      path: '/payment/:item',
      name: 'payment',
      component: resolve => require(['./components/Payment.vue'], resolve),
      children: [{
        path: '/payment/:item/cart',
        name: 'cart',
        component: resolve => require(['./components/PaymentCart.vue'], resolve),
      }, {
        path: '/payment/:item/checkout',
        name: 'checkout',
        component: resolve => require(['./components/PaymentCheckout.vue'], resolve),
      }, {
        path: '/payment/:item/result',
        name: 'paymentResult',
        component: resolve => require(['./components/PaymentResult.vue'], resolve),
      }]
    },
    {
      path: '/video',
      name: 'video',
      component: resolve => require(['./components/Video.vue'], resolve),
      redirect: '/video/course/0/0/0/asc',
      children: [{
        name: 'videoLanding',
        path: ':type/:tag/:orderBy/:page/:sortBy',
        components: {
          videoMain: resolve => require(['./components/VideoLanding.vue'], resolve),
        },
      },{
        path: 'detail/:id',
        name: 'videoDetail',
        components: {
          videoMain: resolve => require(['./components/VideoDetail.vue'], resolve),
        },
      }],
    },
    {
      path: '/productDetails/:id',
      name: 'productDetails',
      component: resolve => require(['./components/productDetails.vue'], resolve),
    },
    {
      path: '/consult',
      name: 'consult',
      component: resolve => require(['./components/UnderConstruction.vue'], resolve),
    },
    {
      path: '/test',
      name: 'test',
      component: resolve => require(['./components/UnderConstruction.vue'], resolve),
    },
    {
      path: '/construction',
      name: 'construction',
      component: resolve => require(['./components/UnderConstruction.vue'], resolve),
    },
    {
      path: '/inteltest',
      name: 'inteltest',
      component: resolve => require(['./components/campaign/test/inteltest.vue'], resolve),
    },
    {
      path: '/attntest',
      name: 'attntest',
      component: resolve => require(['./components/campaign/test/attntest.vue'], resolve),
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
})


Vue.filter('capitalize', function(value) {
  // 返回处理后的值
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('two_digits', function(value) {
  if (value.toString().length <= 1) {
    return "0" + value.toString();
  }
  return value.toString();
})
Vue.filter('truncate', function (text, length, clamp) {
  clamp = clamp || '...'
  length = length || 30

  if (text.length <= length) return text

  var tcText = text.slice(0, length - clamp.length)
  var last = tcText.length - 1

  while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0]) last -= 1
  // Fix for case when text dont have any `space`
  last = last || length - clamp.length
  tcText =  tcText.slice(0, last)

  return tcText + clamp
})

/* appInstance */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})

// new Vue({
//   router,
//   store,
//   el: '#sidebar',
//   template:'<Sidebar/>',
//   components: { Sidebar }
// })
