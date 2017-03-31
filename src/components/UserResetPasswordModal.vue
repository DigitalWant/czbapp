<template>
	<el-dialog title="重置密码" v-model="USER_PASSWORD_RECOVERY_MODAL_VISIBLE" custom-class="small-element-dialog" @close="onClose">
		<el-form ref="resetStepFirst" v-show="step === 1" :rules="resetStepFirstRules" :model="resetStepFirstForm">
			<el-form-item prop="mobile">
				<el-input placeholder="请输入手机号！" v-model="resetStepFirstForm.mobile"></el-input>
			</el-form-item>
			<el-form-item  prop="code">
				<el-row :gutter="20">
					<el-col :span="15" prop="code">
						<el-input placeholder="请输入验证码！" v-model="resetStepFirstForm.code" ></el-input>
					</el-col>
					<el-col :span="9">
						<el-button @click="getVerifyCode('resetStepFirst', 'mobile')" :disabled="global.verifyRequestRemain < global.verifyCodeInterval" type="primary">
							<span v-if="global.verifyRequestRemain === global.verifyCodeInterval">获取验证码</span>
							<span v-else>{{global.verifyRequestRemain}}秒后可用</span>
						</el-button>
					</el-col>
				</el-row>
				
			</el-form-item>
			<el-form-item>
				<el-button @click="checkVerifyCode('resetStepFirst')" type="primary">下一步</el-button>
			</el-form-item>
		</el-form>

		<el-form ref="resetStepSecondForm" v-show="step === 2" :model="resetStepSecondForm" :rules="resetStepSecondRules">
			<el-form-item prop="password">
				<el-input placeholder="请输入新密码！" type="password" v-model="resetStepSecondForm.password"></el-input>
			</el-form-item>
			<el-form-item prop="confirmPassword">
				<el-input placeholder="再次输入新密码！" type="password" v-model="resetStepSecondForm.confirmPassword"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="modifyPassword('resetStepSecondForm')" type="primary">重置密码</el-button>
			</el-form-item>
		</el-form>

		<el-form v-show="step === 3">
			<el-form-item> </el-form-item>
			<el-form-item><center>密码重置成功，{{times}}秒后返回登陆页面</center></el-form-item>
			<el-form-item> </el-form-item>
		</el-form>
	</el-dialog>
</template>
<script>
	import {mapGetters} from 'vuex'

	export default {
		
		data: function () {
			let validateConfirmPassword = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入确认密码！'))
				} else if (value !== this.resetStepSecondForm.password) {
					callback(new Error('两次输入的密码不一致！'))
				} else {
					callback()
				}
			}
			let validatePassword = (rule, value, callback) => {
				if (!/^[A-Za-z0-9][A-Za-z0-9]{3,15}$/.test(value)) {
					callback(new Error('请输入4-16位字母数字组合的密码'))
				} else {
					callback()
				}
			}
			let validateCode = (rule, value, callback) => {
				if (!/^\d{1}\d{3}$/.test(value)) {
					callback(new Error('请输入4位纯数字验证码！'))
				} else {
					callback()
				}
			}
			let validateMobile = (rule, value, callback) => {
				if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))){
					callback(new Error('请输入正确的11位手机号码！'))
				} else {
					callback()
				}
			}
			return {
				step: 1,
				times: 3,
				resetStepFirstForm: {
					mobile: '',
					code: ''
				},
				resetStepSecondForm: {
					password: '',
					confirmPassword: ''
				},
				resetStepFirstRules: {
					mobile: [
						{validator: validateMobile, trigger: 'blur'}
					],
					code: [
						{validator: validateCode, trigger: 'change blur'}
					]
				},
				resetStepSecondRules: {
					password: [
						{validator: validatePassword, trigger: 'change blur'}
					],
					confirmPassword: [
						{validator: validateConfirmPassword, trigger: 'change blur'}
					]
				},
			}
		},
		computed: {
			...mapGetters(['VERIFY_ERRORS','global','USER_MODIFY_PASSWORD_ERRORS','USER_MODIFY_PASSWORD_STEP','USER_PASSWORD_RECOVERY_MODAL_VISIBLE'])
		},
		methods: {
			onClose () {
				let vm = this
				vm.$store.state.common.USER_PASSWORD_RECOVERY_MODAL_VISIBLE = false
				if (vm.step = 3) vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
				vm.step = 1;
			},
			getVerifyCode (formName, fieldName) {
				let vm = this
				vm.$refs[formName].validateField(fieldName, (valid) => {
					console.log(valid)
					if (!valid) {
						vm.$store.dispatch('GET_VERIFY_CODE',{mobile:vm.resetStepFirstForm.mobile}).then((res)=>{
							vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
							vm.$message(res.msg)
							// vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
							// vm.$store.state.userPasswordModify.USER_MODIFY_PASSWORD_STEP = 1
							vm.step = 1;
						}).catch(err=>{
							vm.$message(err.errorMsg)
						})
					} else {
						// console.log('error submit!!', fieldName, formName)
						vm.$message({
							type: 'warning',
							message: valid
						})
						return false
					}
				})
			},
			checkVerifyCode (formName) {
				let vm = this
				// vm.step++
				vm.$refs[formName].validate((valid)=>{
					if (valid) {
						let data = {
							mobile: vm.resetStepFirstForm.mobile,
							verify_code: vm.resetStepFirstForm.code
						}
						vm.$store.dispatch('CHECK_VERIFY_CODE', data).then((res) => {
							// console.log(res)
							vm.step++
						}).catch((err) => {
							// console.log(err)
							vm.$message({
								type: 'warning',
								message: err.errorMsg
							})
						})
					} else {
						vm.$message({
							type: 'warning',
							message: '请输入正确的信息！'
						})
					}
				})
			},
			modifyPassword (formName) {
				let vm = this
				// vm.step++
				// vm.timer()
				vm.$refs[formName].validate((valid) => {
					if (valid) {
						let changeData = {
							mobile: vm.resetStepFirstForm.mobile,
							passWord: vm.resetStepSecondForm.password,
							verify_code: vm.resetStepFirstForm.code
						}

						vm.$store.dispatch('USER_MODIFY_PASSWORD_ACTION', changeData).then((res) => {
							vm.step = 3
							vm.timer()
							// setTimeout(function(){}, 1000)
						}).catch((err) => {
							vm.step = 1
							// vm.resetAllFields()
							vm.$message({
								type: 'error',
								message: err.errorMsg
							})
						})
					} else {
						console.log('error submit!!');
						return vm.$message({
							type: 'error',
							message: '提交的信息不正确请检查！'
						})
					}
				});
			},
			timer (callback) {
				let vm = this
				setTimeout(function(){
					vm.times--
					if(vm.times === 0){
						// vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
						if (!vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE) vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
						vm.onClose()
						
						vm.times = 3;
					} else {
						vm.timer()
					}
				}, 1000)
			}
			// 验证验证码
			// validateCode (formName) {
			// 	let vm = this
			// 	vm.$refs[formName].validate((valid) => {
			// 		if(valid) {
			// 			let data = {}
			// 			data.mobile = vm.resetStepFirstForm.mobile
			// 			data.verify_code = vm.resetStepFirstForm.code
			// 			vm.$store.dispatch('CHECK_VERIFY_CODE', data).then((res) => {
			// 				console.log(res)
			// 			})
			// 		} else {

			// 		}
			// 	})
			// }
		}
	}
</script>
<style scoped>
	.el-button {
		width: 100%;
	}
	center {
		font-size: 1.4rem;
	}
</style>