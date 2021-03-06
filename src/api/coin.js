import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
  getCoinRemainValue ({commit}, data , resolve, reject) {
    const success = res => {
      if (res.body.isSuccess) {
        commit(types.ACCOUNT_GET_COIN_INFO_SUCCESS,res.body)
        resolve(res.body)
      } else {
        commit(types.ACCOUNT_GET_COIN_INFO_FAILURE,res.body)
        reject(res.body)
      }

    }
    // connection failure
    const failure = err => {
      reject(err.body)
    }

    Vue.http
    .post(api.API_PATH_ACCOUNT_LEFT_COIN, data)
    .then(success, failure)
  },
}
