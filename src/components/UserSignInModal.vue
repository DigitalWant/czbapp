<template>
	<el-dialog title="登录" v-model="USER_LOGIN_MODAL_VISIBLE" size="small" custom-class="small-element-dialog" @close="onClose" @open="onOpen">
		<el-form ref="signForm" :model="signForm" :rules="signRules">
			<el-form-item prop="username">
				<el-input placeholder="账号" type="text" v-model="signForm.username"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input placeholder="密码" type="password" v-model="signForm.password"></el-input>
				<label class="custom-label pointer" @click="openPasswordReset">忘记密码？</label>
			</el-form-item>
			<el-form-item class="register">
				<span @click="openRegisterModal" class="pointer">没有账号？去注册</span>
			</el-form-item>
			<el-form-item>
				<el-button @click="onSubmit('signForm')" :loading="loading" type="primary">登陆</el-button>
			</el-form-item>
			<!-- <el-form-item>
				<div class="text-center">
    				第三方登陆
				</div>
			</el-form-item> -->
			<!-- <el-form-item>
				<el-row>
					<el-col :span="8">
						<center><i class="wechat icon custom-wechat"></i></center>
					</el-col>
					<el-col :span="8">
						<center><i class="qq icon custom-qq"></i></center>
					</el-col>
					<el-col :span="8">
						<center><i class="weibo icon custom-weibo"></i></center>
					</el-col>
				</el-row>
			</el-form-item> -->
		</el-form>
	</el-dialog>
	
</template>
<script>
	import {mapGetters} from 'vuex'
	// import User

	export default {
		name: 'userSignInModal',
		data: function () {
			return {
				signForm: {
					username: '',
					password: '',
					type: 1,
					from: 'web'
				},
				signRules: {
					username: [
						{required: true, message: '请输入账号！', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请输入密码！', trigger: 'blur'}
					]
				},
				loading: false
			}
		},
		computed: {
			...mapGetters(['USER_LOGIN_MODAL_VISIBLE'])
		},
		methods: {
			onClose () {
				this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
			},
			onOpen () {
				this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = true
			},
			openRegisterModal () {
				this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
				this.$store.state.common.USER_REGISTER_MODAL_VISIBLE = true
			},
			openPasswordReset () {
				let vm = this
				this.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
				vm.$store.state.common.USER_PASSWORD_RECOVERY_MODAL_VISIBLE = true

			},
			onSubmit (formName) {
				let vm = this
				vm.$refs[formName].validate((valid) => {
					console.log(valid)
					if (valid) {
						vm.login()
					} else {
						// console.log('error submit!!')
						vm.loading = false
						vm.$message({
							type: 'warning',
							message: '登陆信息不正确，请检查！'
						})
					}
				})
			},
			login () {
				let vm = this
				vm.loading = true
				vm.$store.dispatch('USER_SIGN_IN_ACTION', vm.signForm).then((res) => {
					if (vm.USER_LOGIN_REDIRECT) {
						vm.loading = false
						vm.$router.push(vm.USER_LOGIN_REDIRECT)
						vm.USER_LOGIN_REDIRECT_BEHAVIOR && vm.USER_LOGIN_REDIRECT_BEHAVIOR()
						vm.$store.state.common.USER_LOGIN_MODAL_VISIBLE = false
					} else {
						vm.$store.dispatch('TOGGLE_USER_LOGIN_MODAL')
						vm.loading = false
					}
				}).catch((err) => {
					vm.loading = false
					vm.$message({
						showClose: true,
						message: '登录信息不正确！',
						type: 'error'
					})
				})
			}
		}
	}
</script>
<style scoped>
	.text-center {
		text-align: center;
		font-size: 1rem;
		/*font-weight: 600;*/
		color: #000;
	}
	.pointer {
		cursor: pointer;
	}
	.el-dialog__header{
		text-align: center;
		color: red;
	}
	button {
		width: 100%;
	}
	.custom-label{
		position: absolute;
		right: 10px;
		top: 0px;
		font-size: 0.8rem;
	}
	.register{
		text-align: right;
	}
	.custom-weibo, .custom-qq, .custom-wechat{
		width: 4rem;
		height: 4rem;
		border-radius: 2rem;
		font-size: 2rem;
		line-height: 4rem;
		color: #FFF;
		/*display: flex;
		justify-content: center;
		align-items: center;*/
	}
	.custom-weibo{
		background-color: #df4d69;
	}
	.custom-qq{
		background-color: #4dafea;
	}
	.custom-wechat {
		background-color: #3eb135;
	}
</style>