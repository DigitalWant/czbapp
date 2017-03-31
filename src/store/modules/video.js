import videoApi from '../../api/video'
import * as types from '../mutation-types'

const state = {
  [types.VIDEO_LIST_DATA]: undefined,
  [types.VIDEO_TAGS]:undefined,
  [types.VIDEO_BASE_INFO]:undefined,
  [types.VIDEO_REF_INFO]:undefined,
  [types.VIDEO_TEACHER_INFO]:undefined,
}

const actions = {
  [types.VIDEO_GET_LIST] ({ commit }, params) {
    return new Promise((resolve, reject) => {
      videoApi.getList({ commit },params, resolve, reject)
    })
  },
  [types.VIDEO_TAGS] ({ commit }, params) {
    return new Promise((resolve, reject) => {
      videoApi.getTags({ commit },params, resolve, reject)
    })
  },
  [types.VIDEO_GET_PLAYER_CODE] ({ commit }, params) {
    return new Promise((resolve, reject) => {
      videoApi.getPlayerCode({ commit },params, resolve, reject)
    })
  },
  [types.VIDEO_GET_BASE_INFO] ({ commit }, params) {
    return new Promise((resolve, reject) => {
      videoApi.getBaseInfo({ commit },params, resolve, reject)
    })
  },
  [types.VIDEO_GET_TEACHER_INFO] ({ commit }, params) {
    return new Promise((resolve, reject) => {
      videoApi.getTeacherInfo({ commit },params, resolve, reject)
    })
  },
  [types.VIDEO_GET_REF_INFO] ({ commit }, params) {
    return new Promise((resolve, reject) => {
      videoApi.getRefInfo({ commit },params, resolve, reject)
    })
  },
}

const mutations = {
    [types.VIDEO_LIST_DATA] (state, payload) {
      state[types.VIDEO_LIST_DATA] = payload
    },
    [types.VIDEO_TAGS] (state, payload) {
      state[types.VIDEO_TAGS] = payload
    },
    [types.VIDEO_BASE_INFO] (state, payload) {
      state[types.VIDEO_BASE_INFO] = payload
    },
    [types.VIDEO_REF_INFO] (state, payload) {
      state[types.VIDEO_REF_INFO] = payload
    },
    [types.VIDEO_TEACHER_INFO] (state, payload) {
      state[types.VIDEO_TEACHER_INFO] = payload
    },
}

const getters = {
  [types.VIDEO_LIST_DATA]: state => state[types.VIDEO_LIST_DATA],
  [types.VIDEO_TAGS]: state => state[types.VIDEO_TAGS],
  [types.VIDEO_BASE_INFO]: state => state[types.VIDEO_BASE_INFO],
  [types.VIDEO_REF_INFO]: state => state[types.VIDEO_REF_INFO],
  [types.VIDEO_TEACHER_INFO]: state => state[types.VIDEO_TEACHER_INFO],
}

export default {
  state,
  actions,
  mutations,
  getters,
}
