import * as types from '../mutation-types'

const state = {
  [types.USER_LOGIN_MODAL_VISIBLE]:false,
  [types.USER_REGISTER_MODAL_VISIBLE]:false,
  [types.USER_PASSWORD_RECOVERY_MODAL_VISIBLE]:false,
}

const actions = {
  [types.TOGGLE_BASIC_POPUP] ({commit},modalSelector) {
    commit(types.TOGGLE_BASIC_POPUP,modalSelector)
  },
  [types.TOGGLE_SIMPLE_POPUP] ({commit},modalSelector) {
    commit(types.TOGGLE_SIMPLE_POPUP,modalSelector)
  },
  [types.TOGGLE_USER_LOGIN_MODAL] ({commit}) {
    commit(types.TOGGLE_USER_LOGIN_MODAL)
  },
  [types.TOGGLE_USER_REGISTER_MODAL] ({commit}) {
    commit(types.TOGGLE_USER_REGISTER_MODAL)
  },
  [types.TOGGLE_USER_PASSWORD_RECOVERY_MODAL] ({commit}) {
    commit(types.TOGGLE_USER_PASSWORD_RECOVERY_MODAL)
  },
}

const mutations = {
  [types.TOGGLE_BASIC_POPUP] (state, {selector,onApproveAction, onDenyAction}) {
    $(selector).modal({
      detachable: false,
      // onShow    : function(){
      //   onShowAction && onShowAction()
      // },
      onDeny    : function(){
        onDenyAction && onDenyAction()
      },
      onApprove : function() {
        onApproveAction && onApproveAction()
      },
    })
    .modal('toggle')
  },
  [types.TOGGLE_SIMPLE_POPUP] (state, {
    needToggle,
    selector,
    onApproveAction,
    onDenyAction,
    detachable,
    allowMultiple,
    onHidden,
    onHide,
    onShow,
    observeChanges,
    onVisible,
    closable,
    dimmerSettings,
    }) {
    // console.log(closable==undefined)
    $(selector).modal({
      observeChanges:observeChanges!=undefined ? observeChanges:false,
      allowMultiple: allowMultiple!=undefined ? allowMultiple : false,
      detachable: detachable!=undefined ? detachable : false,
      closable: closable!=undefined ? closable : true,
      dimmerSettings: dimmerSettings!=undefined ? dimmerSettings : {closable:false, useCSS:true, opacity:0.8},
      onDeny    : function(){
        onDenyAction && onDenyAction()
      },
      onApprove : function() {
        onApproveAction && onApproveAction()
      },
      onHidden : function() {
        onHidden && onHidden()
      },
      onShow : function() {
        onShow && onShow()
      },
      onHide : function() {
        // console.log('test')
        onHide && onHide()
      },
      onVisible: function () {
        onVisible && onVisible()
      },
    }).modal(needToggle?needToggle:'toggle')
  },
  [types.TOGGLE_USER_LOGIN_MODAL] (state) {
    state[types.USER_LOGIN_MODAL_VISIBLE] = state[types.USER_LOGIN_MODAL_VISIBLE] == true ? false: true
  },
  [types.TOGGLE_USER_REGISTER_MODAL] (state) {
    state[types.USER_REGISTER_MODAL_VISIBLE] = state[types.USER_REGISTER_MODAL_VISIBLE] == true ? false: true
  },
  [types.TOGGLE_USER_PASSWORD_RECOVERY_MODAL] (state) {
    state[types.USER_PASSWORD_RECOVERY_MODAL_VISIBLE] = state[types.USER_PASSWORD_RECOVERY_MODAL_VISIBLE] == true ? false: true
  },
}
const getters = {
  [types.USER_LOGIN_MODAL_VISIBLE]: state => state[types.USER_LOGIN_MODAL_VISIBLE],
  [types.USER_REGISTER_MODAL_VISIBLE]: state => state[types.USER_REGISTER_MODAL_VISIBLE],
  [types.USER_PASSWORD_RECOVERY_MODAL_VISIBLE]: state => state[types.USER_PASSWORD_RECOVERY_MODAL_VISIBLE],
}

export default {
  state,
  actions,
  mutations,
  getters,
}
