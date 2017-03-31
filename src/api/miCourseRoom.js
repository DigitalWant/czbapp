import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getBooked ({commit}, data, resolve, reject) {

    const success = res => {
      if (res.ok) {
        // commit(types.USER_REGISTER_SUCCESS, res.body)
        resolve(res.body)
      } else {
        // commit(types.USER_REGISTER_FAILURE, res.body)
        reject(res.body)
      }
    }
    const failure = err => {
      // commit(types.USER_REGISTER_FAILURE, types.CONNECTION_ERROR)
      reject()
    }
    Vue.http
    .post(api.API_PATH_GET_BOOKED_MI_COURSE_LIST, JSON.parse(JSON.stringify(data)))
    .then(success, failure)

  },
  getSig ({commit}, data, resolve, reject) {

    const success = res => {
      if (res.ok) {
        resolve(res.body)
      } else {
        reject(res.body)
      }
    }

    const failure = err => {
      reject()
    }

    Vue.http
    .post(api.API_PATH_AGORA_GET_SIG, JSON.parse(JSON.stringify(data)))
    .then(success, failure)

  },
  getChannel ({commit}, data, resolve, reject) {

    const success = res => {
      if (res.ok) {
        resolve(res.body)
      } else {
        reject(res.body)
      }
    }

    const failure = err => {
      reject()
    }

    Vue.http
    .post(api.API_PATH_AGORA_GET_CHANNEL, JSON.parse(JSON.stringify(data)))
    .then(success, failure)

  },
  getPPT ({commit}, data, resolve, reject) {

    // const success = res => {
    //   resolve(res)
    // }
    //
    // const failure = err => {
    //   reject(err)
    // }
    //
    // Vue.http
    // .post(api.API_PATH_GET_PPT, JSON.parse(JSON.stringify(data)))
    // .then(success, failure)

    $.ajax({
      type: "post",
      url: api.API_PATH_GET_PPT,
      data: JSON.stringify(data),
      async: true, //?
      contentType: "application/json",
      success: function(res) {
        // console.log(res)
        // alert(JSON.stringify(data));
        resolve(res)
      },
      error: function(jqXHR, textStatus, errorThrown) {

      }
    })

    // $.ajax({
    //   type: "post",
    //   url: params.ajaxUrl + "/czb/api/getppt",
    //   data: JSON.stringify({
    //     id: params.curr_bookedId
    //   }),
    //   async: true,
    //   contentType: "application/json",
    //   success: function(data) {
    //     if(data == null) {
    //       console.log("无ppt");
    //     } else {
    //       handlePptData(data);
    //       initPpt();
    //     }
    //     loadTag(false);
    //   },
    //   error: function(jqXHR, textStatus, errorThrown) {
    //     console.log("服务器异常");
    //     loadTag(false);
    //   }
    // });



  }

}
