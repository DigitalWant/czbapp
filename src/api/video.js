import Vue from 'vue'
import * as api from './api'
import * as types from '../store/mutation-types'

export default {
    getList ({commit}, params, resolve, reject) {
      const success = res => {
        if (res.body) {
          commit(types.VIDEO_LIST_DATA, res.body)
          resolve(res.body)
        } else {
          reject()
        }
      }
      const failure = err => {
        commit(types.VIDEO_LIST_DATA, undefined)
        reject()
      }

      let orderType = params.orderBy!=0?"&orderType="+params.orderBy:""
      let tags = params.tag!=0?"&courseType="+params.tag:""
      let page = "&pageNum="+params.page
      let orderWay = "&orderWay="+params.sortBy
      let apiPath = ''

      if (params.type ==="course") {
        apiPath = api.API_PATH_GET_VIDEO_LIST
      } else {
        apiPath = api.API_PATH_GET_PROGRAM_LIST
      }

      Vue.http
      .get(apiPath+orderType+tags+page+orderWay)
      .then(success, failure)

    },
    getTags ({commit}, params, resolve, reject) {
      const success = res => {
        if (res.body) {
          commit(types.VIDEO_TAGS, res.body)
          resolve(res.body)
        } else {
          reject()
        }
      }
      const failure = err => {
        commit(types.VIDEO_TAGS, undefined)
        reject()
      }

      Vue.http
      .get(api.API_PATH_GET_TAGS)
      .then(success, failure)
    },
    getPlayerCode({commit}, params, resolve, reject){
      const success = res => {
        if (res.body) {
          resolve(res.body)
        } else {
          reject()
        }
      }
      const failure = err => {
        reject()
      }
      Vue.http
      .get(api.API_PATH_GET_PLAYER_CODE)
      .then(success, failure)
    },
    getBaseInfo ({commit}, params, resolve, reject) {
      const success = res => {
        if (res.body) {
          commit(types.VIDEO_BASE_INFO, res.body)
          resolve(res.body)
        } else {
          reject()
        }
      }
      const failure = err => {
        reject()
      }
      Vue.http
      .get(api.API_PATH_GET_VIDEO_BASE_INFO+params)
      .then(success, failure)
    },
    getTeacherInfo ({commit}, params, resolve, reject) {
      const success = res => {
        if (res.body) {
          commit(types.VIDEO_TEACHER_INFO, res.body)
          resolve(res.body)
        } else {
          reject()
        }
      }
      const failure = err => {
        reject()
      }
      Vue.http
      .get(api.API_PATH_GET_VIDEO_TEACHER_INFO+params)
      .then(success, failure)
    },
    getRefInfo ({commit}, params, resolve, reject) {
      const success = res => {
        if (res.body) {
          commit(types.VIDEO_REF_INFO, res.body)
          resolve(res.body)
        } else {
          reject()
        }
      }
      const failure = err => {
        reject()
      }
      Vue.http
      .get(api.API_PATH_GET_VIDEO_REF_INFO+params)
      .then(success, failure)
    },
}
