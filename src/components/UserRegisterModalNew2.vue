<template>
	<el-dialog title="注册" custom-class="small-element-dialog" v-model="USER_REGISTER_MODAL_VISIBLE" size="small" @close="onClose">
		<el-form ref="registerForm" :model="registerForm" :rules="registerRules">
			<el-form-item prop="mobile">
				<el-input placeholder="请输入手机号！" v-model="registerForm.mobile"></el-input>
			</el-form-item>
			<el-form-item prop="code">
				<el-row :gutter="20">
					<el-col :span="15">
						<el-input placeholder="请输入验证码！" v-model="registerForm.code"></el-input>
					</el-col>
					<el-col :span="9">
						<el-button @click="getVerifyCode('registerForm', 'mobile')" :disabled="global.verifyRequestRemain < global.verifyCodeInterval" type="primary">
							<span v-if="global.verifyRequestRemain === global.verifyCodeInterval">获取验证码</span>
							<span v-else>{{global.verifyRequestRemain}}秒后可用</span>
						</el-button>
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item prop="password">
				<el-input placeholder="请输入密码！" v-model="registerForm.password" type="password"></el-input>
			</el-form-item>
			<el-form-item prop="agreement">
				<el-checkbox-group v-model="registerForm.agreement">
					<el-checkbox class="custom-agreement" name="agreement" label="同意《成长保用户协议》"></el-checkbox>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item>
				<el-button @click="submitRegisterForm('registerForm')" type="primary">注册</el-button>
			</el-form-item>
			<el-form-item>
				<span @click="onClose">已有账号？<span class="pointer">直接登陆</span></span>
			</el-form-item>
		</el-form>
	</el-dialog>
</template>
<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'userRegisterMoalNew2',
		data: function () {
			let validateMobile = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入手机号码！'))
				} else if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(value))){
					callback(new Error('请输入正确的11位手机号码！'))
				} else {
					callback()
				}
			}
			let validateCode = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输输入验证码！'))
				} else if (!(/^[0-9][0-9]{2}[0-9]$/).test(value)) {
					callback(new Error('请输入4为数字！'))
				} else {
					callback();
				}
			}
			let validatePassWord = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码！'))
				} else if (!/^\w{1}\w{2,14}\w{1}$/.test(value)){
					callback(new Error('请输入4-16位字母数字的组合'))
				} else {
					callback()
				}
			}
			return {
				registerForm: {
					mobile: '',
					code: '',
					password: '',
					agreement: [],
					register_from: 'web'
				},
				registerRules: {
					mobile: [
						{validator: validateMobile, trigger: 'blur'}
					],
					code: [
						{validator: validateCode, trigger: 'blur change'}
					],
					password: [
						{validator: validatePassWord, trigger: 'blur change'}
					],
					agreement: [
						{type: 'array', required: true, message: '同意《成长保用户协议》才能注册', trigger: 'change'}
					]
				}
			}
		},
		computed: {
			...mapGetters(['global', 'USER_REGISTER_ERRORS', 'VERIFY_ERRORS', 'USER_REGISTER_MODAL_VISIBLE', 'USER_LOGIN_MODAL_VISIBLE'])
		},
		methods: {
			// 获取验证码
			getVerifyCode (formName, fieldName) {
				let vm = this
				vm.$refs[formName].validateField(fieldName, function(valid){
					console.log('valid', valid)
					if (valid === '') {
						vm.$store.dispatch('GET_VERIFY_CODE', { mobile: vm.registerForm.mobile }).then((res)=>{
							vm.$store.dispatch('RE_VERIFY_TIME_COUNT')
							vm.$message(res.msg)
						}).catch((err)=>{
							vm.$message({type:'error',message:err.msg})
						})
					} else {
						vm.$message({
							message: valid,
							type: 'warning'
						});
					}
				})
			},
			// 关闭注册界面
			onClose () {
				let vm = this
				vm.$store.state.common.USER_REGISTER_MODAL_VISIBLE = false
				vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
			},
			// 返回登陆界面
			openSignModal () {
				let vm = this
				this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
				vm.onClose()
			},
			// 提交注册表单
			submitRegisterForm (formName) {
				let vm = this
				vm.$refs[formName].validate((valid) => {
					if (valid) {
						console.log(123)
						vm.loading = true
						let data = JSON.parse(JSON.stringify(vm.registerForm))
						data.passWord = data.password
						data.verify_code = data.code
						delete data.agreement
						delete data.code
						console.log(vm.registerForm)
						console.log(data)
						vm.$store.dispatch('USER_REGISTER_ACTION', data ).then((res)=>{
							console.log(123)
							vm.loading = false
							// console.log(vm.USER_REGISTER_ERRORS)
							vm.$message(vm.USER_REGISTER_ERRORS.errorMsg)
							vm.$emit('registerSuccess')
						}).catch((err)=>{
							vm.loading = false
							vm.$message({type:'error',message:vm.USER_REGISTER_ERRORS.errorMsg})
						})
					} else {
						vm.$message({
							type: 'warning',
							message: '注册信息不正确，请检查！'
						})
					}
				})
			},
			// 验证验证码
			validateCode (formName) {
				let vm = this
				vm.$refs[formName].validate((valid) => {

				})
			}
		}
	}
</script>
<style scoped>
	/*.custom-agreement*/
	.custom-agreement > span {
		font-size: 0.9rem;
	}
	.el-button {
		width: 100%;
	}
	.pointer {
		cursor: pointer;
		text-decoration: underline;
	}
</style>