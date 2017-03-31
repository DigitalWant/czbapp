<template>
	<div class="main">
		<header>
			<div class="shell">
				<div class="circle animated flipInY">
					<div>
						<p>让孩子感受</p>
						<p>学习的快乐</p>
						<p>只需体验一节课</p>
						<div class="gap-5"></div>
						<div class="button" @click="open">免费预约课程</div>
					</div>
				</div>
			</div>
		</header>
		<section class="floor-2">
			<div class="shell">
				<div class="title">
					<transition :enter-active-class="textAnimateType">animated fadeInLeft
						<span v-show="textAnimateInfos.direction.titleShow || isMobile">课程介绍<div class="line"><i></i></div></span>
					</transition>
				</div>
				<div>
					<transition :enter-active-class="textAnimateType">
						<p class="describe"  v-show="textAnimateInfos.direction.directionShow || isMobile">成长保注意力训练，针对5-12岁孩子，通过一对一在线训练授课方式进行注意力训练。不仅提升孩子的注意力，同时激发孩子的学习兴趣、提高孩子的语言表达、逻辑思维和问题解决能力等。</p>
					</transition>
				</div>
				<div class="mob-gap-20"></div>
				<!-- 自适应 -->
				<el-row>
					<el-col :xs="12" :sm="6" v-for="info in infos.directions">
						<transition :enter-active-class="info.type">
							<div class="direction" v-show="info.show">
								<div class="circle">
									<div :class="info.style"></div>
									<p>{{info.title}}</p>
								</div>
								<div class="text-box">
									<span>{{info.direction}}</span>
								</div>
							</div>
						</transition>
					</el-col>
				</el-row>
			</div>
		</section>
		<div class="gap-70"></div>
		<section class="bg-gray floor-3">
			<div class="shell">
				<div class="title">
					<transition :enter-active-class="textAnimateType">
						<span v-show="textAnimateInfos.advantage.titleShow || isMobile">6大课程优势，给孩子最佳的学习效果<div class="line"><i></i></div></span>
					</transition>

				</div>
				<!-- 自适应 -->
				<el-row class="advantage">
					<el-col :span="12" v-for="info in infos.advantages">
						<!-- <transition enter-active-class="animated tada"> -->
						<transition enter-active-class="animated" :enterActiveClass="info.animateType">
							<!-- <p v-show="info.show">test</p> -->

						<el-row v-show="info.show || isMobile">
							<!-- {{typeof info.test}}
							{{info.test}} -->
							<el-col :xs="24" :sm="6">
								<center><img :src="'/static/images/multiIntelligence/' + info.img"></center>
							</el-col>
							<el-col :xs="24" :sm="18" class="text">
								<p>{{info.title}}</p>
								<span>{{info.direction}}</span>
							</el-col>
						</el-row>
						</transition>
					</el-col>
				</el-row>
			</div>
			<div class="gap-70"></div>
		</section>
		<section class="mob-hide floor-4">
			<div class="shell">
				<div class="title">
					<transition :enter-active-class="textAnimateType">
						<span v-show="textAnimateInfos.course.titleShow || isMobile">注意力课程体系<div class="line"><i></i></div></span>
					}
					</transition>
				</div>
				<div>
					<transition :enter-active-class="textAnimateType">
						<p class="describe" v-show="textAnimateInfos.course.directionShow || isMobile">成长保注意力训练课程，课前给每个孩子做注意力测试，根据每个孩子的注意力水平，从1600节课时中选择最合适的训练课程，制定最合适的训练方案。</p>
					</transition>
				</div>
				<!-- 图表 -->
				<div>
					<transition enter-active-class="animated zoomIn">
					<div class="tab" v-show="tabShow || isMobile">
						<div class="flex tab-gap center">
							<div class="flex-1 orange"><span>级别</span></div>
							<div class="flex-2 flex greens tab-gap-min">
								<div class="flex-1">
									<i class="adds h1"></i>
									<span>L1</span>
								</div>
								<div class="flex-1">
									<i class="adds h2"></i>
									<span>L2</span>
								</div>
								<div class="flex-1">
									<i class="adds h3"></i>
									<span>L3</span>
								</div>
								<div class="flex-1">
									<i class="adds h4"></i>
									<span>L4</span>
								</div>
							</div>
							<div class="flex-3 flex blues tab-gap-min">
								<div class="flex-1">
									<i class="adds h5"></i>
									<span>L5</span>
								</div>
								<div class="flex-1">
									<i class="adds h6"></i>
									<span>L6</span>
								</div>
								<div class="flex-1">
									<i class="adds h7"></i>
									<span>L7</span>
								</div>
								<div class="flex-1">
									<i class="adds h8"></i>
									<span>L8</span>
								</div>
								<div class="flex-1">
									<i class="adds h9"></i>
									<span>L9</span>
								</div>
								<div class="flex-1">
									<i class="adds h10"></i>
									<span>L10</span
								></div>
							</div>
							<div class="flex-3 flex reds tab-gap-min">
								<div class="flex-1">
									<i class="adds h11"></i>
									<span>L11</span>
								</div>
								<div class="flex-1">
									<i class="adds h12"></i>
									<span>L12</span>
								</div>
								<div class="flex-1">
									<i class="adds h13"></i>
									<span>L13</span>
								</div>
								<div class="flex-1">
									<i class="adds h14"></i>
									<span>L14</span>
								</div>
								<div class="flex-1">
									<i class="adds h15"></i>
									<span>L15</span>
								</div>
								<div class="flex-1">
									<i class="adds h16"></i>
									<span>L16</span>
								</div>
							</div>
						</div>
						<div class="flex  tab-gap center">
							<div class="flex-1 orange"><span>阶段</span></div>
							<div class="flex-2 green"><span>少儿阶段</span></div>
							<div class="flex-3 blue"><span>少儿阶段</span></div>
							<div class="flex-3 red"><span>少年阶段</span></div>
						</div>
						<div class="flex tab-gap center">
							<div class="flex-1 orange"><span>年龄</span></div>
							<div class="flex-2 green"><span>5~6岁</span></div>
							<div class="flex-3 blue"><span>7~9岁</span></div>
							<div class="flex-3 red"><span>10~12岁</span></div>
						</div>
						<div class="flex tab-gap center">
							<div class="flex-1 orange"><span>课程单元</span></div>
							<div class="flex-2 flex greens tab-gap-min">
								<div class="flex-1"><span>5A</span></div>
								<div class="flex-1"><span>5B</span></div>
								<div class="flex-1"><span>6A</span></div>
								<div class="flex-1"><span>6B</span></div>
							</div>
							<div class="flex-3 flex blues tab-gap-min">
								<div class="flex-1"><span>7A</span></div>
								<div class="flex-1"><span>7B</span></div>
								<div class="flex-1"><span>8A</span></div>
								<div class="flex-1"><span>8B</span></div>
								<div class="flex-1"><span>9A</span></div>
								<div class="flex-1"><span>9B</span></div>
							</div>
							<div class="flex-3 flex reds tab-gap-min">
								<div class="flex-1"><span>10A</span></div>
								<div class="flex-1"><span>10B</span></div>
								<div class="flex-1"><span>11A</span></div>
								<div class="flex-1"><span>11B</span></div>
								<div class="flex-1"><span>12A</span></div>
								<div class="flex-1"><span>12B</span></div>
							</div>
						</div>
						<div class="flex tab-gap center">
							<div class="flex-1 orange">课程重点</div>
							<div class="flex-2 green">
								<p>
									<span>提高视觉分辨能力，正确辨识高相似度的文字、数字、符号等；</span>
									<span>培养学习兴趣，为接下来小学阶段的学习做好准备；</span>
								</p>
							</div>
							<div class="flex-3 blue">
								<p>
									<span>提高抄写速度及准确度；</span>
									<span>开发想象力，培养阅读兴趣，为高年级的作文打好基础；</span>
									<span>养成独立思考并解决问题的习惯。</span>
								</p>
							</div>
							<div class="flex-3 red">
								<p>
									<span>提高语言逻辑，有效运用已经掌握的知识丰满作文内容，提升阅读水平;</span>
									<span>提高策略性思维能力，灵活运用公式，画出正确的辅助线，快速掌握解题技巧，解决复杂题目。</span>
								</p>
							</div>
						</div>
						<div class="grey">
							<span>体验课进行一对一等级测评，每次训练结束后进行复习测评，调整孩子学习进度。</span>
						</div>
					</div>
					</transition>
				</div>
				<!-- 自适应 -->
				<!-- <div class="flex benefit">
						<div class="flex-1" v-for="info in infos.benefits">
							<center><img :src="'/static/images/multiIntelligence/' + info.img"></center>
							<p>{{info.title}}</p>
						</div>
				</div> -->
				<div class="benefit">
					<!-- <transition enter-active-class="animated lightSpeedIn"> -->
					<transition enter-active-class="animated lightSpeedIn">
						<el-row v-show="underTabShow">
							<el-col :span="4" v-for="info in infos.benefits">
								<div>
									<center><img :src="'/static/images/multiIntelligence/' + info.img"></center>
									<p>{{info.title}}</p>
								</div>
							</el-col>
						</el-row>
					</transition>
						<!-- <div class="flex-1" v-for="info in infos.benefits">
							<center><img :src="'/static/images/multiIntelligence/' + info.img"></center>
							<p>{{info.title}}</p>
						</div> -->
					<!-- </transition> -->
				</div>
			</div>
		</section>
		<section class="bg-gray  mob-bg floor-5">
			<div class="shell">
				<div class="title">
					<transition :enter-active-class="textAnimateType">
						<span v-show="textAnimateInfos.skill.titleShow || isMobile">成长保注意力训练，提升孩子4大学习能力<div class="line"><i></i></div></span>
					</transition>
				</div>

				<el-row class="skills">
					<el-col :span="24" v-for="info in infos.skills">
						<transition :enter-active-class="info.type">
							<el-row v-show="info.show || isMobile">
								<el-col :xs="24" :sm="8" class="img">
									<div>
										<img :src="'/static/images/multiIntelligence/' + info.img">
									</div>
								</el-col>
								<el-col :xs="24" :sm="16" class="text">
									<div class="">
										<p>{{info.title}}</p>
										<span>{{info.direction}}</span>
									</div>
								</el-col>
							</el-row>
						</transition>
					</el-col>
				</el-row>
				<div class="gap-70"></div>
			</div>
		</section>
		<footer class="floor-6">
			<div class="shell">
				<div class="title">
					<transition :enter-active-class="textAnimateType">
						<span v-show="textAnimateInfos.teacher.titleShow || isMobile">资深师资团队，打造金牌实力课程<div class="line"><i></i></div></span>
					</transition>
				</div>
				<div>
					<transition :enter-active-class="textAnimateType">
						<p class="describe" v-show="textAnimateInfos.teacher.directionShow || isMobile">成长保拥有超过500名专业儿童心理咨询师和儿童游戏师的师资团队，力求为每位孩子提供最好的学习体验。</p>
					</transition>
				</div>
				<transition enter-active-class="animated fadeInUp">
					<div class="teachers mob-hide" v-show="teachersShow">
						<div class="ctrl">
							<div class="prev" @click="prev"></div>
						</div>
						<swiper :options="swiperOption" class="swiper" ref="swiper">
							<swiper-slide v-for="info in infos.teachers">
								<div class="teacher">
									<div class="card">
										<div class="avatar" :class="info.avatar"></div>
										<div class="content">
											<p>{{info.name}}</p>
											<p>{{info.title}}</p>
											<p>{{info.direction}}</p>
										</div>
									</div>
								</div>
							</swiper-slide>
						</swiper>
						<div class="ctrl">
							<div class="next" @click="next"></div>
						</div>
					</div>
				</transition>
				<div class="mob-show">
					<div v-for="info in infos.teachers" class="teacher">
						<div class="card">
							<div class="avatar" :class="info.avatar"></div>
							<div class="content">
								<p>{{info.name}}</p>
								<p>{{info.title}}</p>
								<p>{{info.direction}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import animate from 'animate.css'
	export default {
		name: 'MultiIntelligence',
		data () {
			return {
				swiperOption: {
					paginationClickable: true,
					slidesPerView: 2,
					spaceBetween: 30
				},
				isMobile: window.innerWidth < 600,
				infos: {
					directions: [
						{
							style: 'bg-01',
							title: '',
							direction: '专业教学体系，从1600课时中选出最合适的训练内容',
							// type: 'animated shake',
							show: true,
						},
						{
							style: 'bg-02',
							title: '',
							direction: '4-8节课后，注意力测评分值提升30%-50%',
							// type: 'animated shake',
							show: true
						},
						{
							style: 'bg-03',
							title: '',
							direction: '家庭指导师12h在线服务，随时解决育儿问题',
							// type: 'animated shake',
							show: true
						},
						{
							style: 'bg-04',
							title: '',
							direction: '讲师100%拥有“儿童心理咨询师”和“儿童游戏师”两大证书',
							// type: 'animated shake',
							show: true
						}
					],
					advantages: [
						{
							img: '01.png',
							title: '国际化课程体系',
							direction: '结合国际优秀科研成果，在家体验美国名校课程',
							animateType: 'animated fadeInLeft',
							show: false
						},
						{
							img: '02.png',
							title: '一对一对在线授课',
							direction: '免去来回接送，随意时间地点都可学',
							animateType: 'animated fadeInRight',
							show: false
						},
						{
							img: '03.png',
							title: '智能上课系统',
							direction: '操作简单，孩子可以独立完成学习',
							animateType: 'animated fadeInLeft',
							show: false
						},
						{
							img: '04.png',
							title: '全面支持',
							direction: '课前测评、课后反馈报告，家长随时了解孩子学习状况',
							animateType: 'animated fadeInRight',
							show: false
						},
						{
							img: '05.png',
							title: '汇集海量名师',
							direction: '提供优质的教学质量，真正做到因材施教',
							animateType: 'animated fadeInLeft',
							show: false
						},
						{
							img: '06.png',
							title: '沉浸式学习体验',
							direction: '将教学内容融入游戏中，让孩子在快乐的中提升注意力',
							animateType: 'animated fadeInRight',
							show: false
						}
					],
					benefits: [
						{
							img: '07.png',
							title: '注意力集中',
							type: 'animated lightSpeedIn',
							show: false
						},
						{
							img: '08.png',
							title: '听课质量高',
							type: 'animated lightSpeedIn',
							show: false
						},
						{
							img: '09.png',
							title: '作业写得快',
							type: 'animated lightSpeedIn',
							show: false
						},
						{
							img: '10.png',
							title: '学习效率高',
							type: 'animated lightSpeedIn',
							show: false
						},
						{
							img: '11.png',
							title: '考试考得好',
							type: 'animated lightSpeedIn',
							show: false
						},
						{
							img: '12.png',
							title: '提高记忆力',
							type: 'animated lightSpeedIn',
							show: false
						}
					],
					skills: [
						{
							img: '13.png',
							title: '阅读理解',
							direction: '成长保注意力训练，提高视觉分辨能力，让孩子正确辨识高相似度的文字、数字、符号等；同时通过生活情景的游戏让孩子学会观察生活细节，增加孩子生活体验，丰富孩子想象力。',
							type: 'animated fadeInRight',
							show: false
						},
						{
							img: '14.png',
							title: '写作能力',
							direction: '通过对语言能力的训练，让孩子学会正确地审题，有效运用已经掌插的知识丰满作文内容，让孩子养成对阅读的兴趣，丰富词汇，写出好作文。',
							type: 'animated fadeInRight',
							show: false
						},
						{
							img: '15.png',
							title: '数学应用',
							direction: '策略性思维的提高，能帮助孩子顺利高效排除题目中的干扰信息，锁定目标信息，提高解题速度，作业/考试的效率提升。',
							type: 'animated fadeInRight',
							show: false
						},
						{
							img: '16.png',
							title: '几何空间',
							direction: '成长保注意力训练，提高空间视觉能力，让孩子形成良好的空间思维能力，在做几何数学时，能画出正确的辅劣线，轻松解决复杂题目。',
							type: 'animated fadeInRight',
							show: false
						}
					],
					teachers: [
						{
							name: '杨红博',
							title: '国家二级心理咨询师',
							direction: '擅长把心理学融入到实际案例解决，与来访者一起解决问题。一直从事儿童青少年心理健康资讯与辅导工作，在儿童不良行为矫正、重建和谐亲子关系、家庭教育方面有独到见解。',
							avatar: 'pic-01'
						},
						{
							name: '付怡然',
							title: '国家二级心理咨询师',
							direction: '有着长期陪伴精神障碍康复者团体的经验，并从事多年儿童青少年心理健康咨询与心理咨询培训工作，擅长情感障碍、亲子关系与家庭教育等方面。善于引导来访者梳理问题， 并陪伴其成长与改变的过程。',
							avatar: 'pic-02'
						},
						{
							name: '许芳',
							title: '儿童游戏心理咨询师',
							direction: '房树人心理咨询师，儿童游戏心理咨询师，正面管教家长讲师，对儿童教育有多年的研究，擅长通过孩子的绘画去解读孩子的内心，用游戏的方式去调整孩子的行为问题。',
							avatar: 'pic-03'
						},
						{
							name: '黄雨晴',
							title: '注册正面管教家长讲师',
							direction: '擅长把心理学融入到实际案例解决，与来访者一起解决问题。一直从事儿童青少年心理健康资讯与辅导工作，在儿童不良行为矫正、重建和谐亲子关系、家庭教育方面有独到见解。',
							avatar: 'pic-04'
						}
					]
				},
				test: false,
				tabShow: false,
				underTabShow: false,
				teachersShow: false,
				numberAnimatePlayed: false,
				numberAnimateInfos: [
					{
						end: 1600,
						tail: '',
						base: 1000,
						range: 999
					},
					{
						end: 50,
						tail: '%',
						base: 10,
						range: 89
					},
					{
						end: 12,
						tail: 'h',
						base: 10,
						range: 89
					},
					{
						end: 100,
						tail: '%',
						base: 10,
						range: 90
					}
				],
				textAnimateType: 'animated fadeInDown',
				textAnimateInfos : {
					direction: {
						titleShow: false,
						directionShow: false
					},
					advantage: {
						titleShow: false,
						directionShow: false
					},
					course: {
						titleShow: false,
						directionShow: false
					},
					skill: {
						titleShow: false,
						directionShow: false
					},
					teacher: {
						titleShow: false,
						directionShow: false
					}
				}
			}
		},
		components: {
			swiper,
			swiperSlide
		},
		methods: {
			prev () {
				let vm = this
				vm.$refs['swiper'].swiper.slidePrev()
			},
			next () {
				let vm = this
				vm.$refs['swiper'].swiper.slideNext()
			},
			open () {
				this.$router.push('/multiIntelligence_section/multiIntelligenceBook')
			},
			handleScroll () {
				let vm = this
				// console.log(window.scrollY)
				// switch(true){
				// 	/*teachers*/
				// 	case window.scrollY > 4555 && window.innerWidth > 600:
				// 		vm.teachersShow = true
				// 	break
				// 	/*skill title*/
				// 	case window.scrollY > 4350 && window.scrollY < 4480:
				// 		vm.textAnimateInfos.teacher.directionShow = true
				// 	break
				// 	case window.scrollY > 4225 && window.scrollY < 4300:
				// 		vm.textAnimateInfos.teacher.titleShow = true
				// 	break
				// 	/*sills*/
				// 	case window.scrollY > 3900 && window.scrollY < 4000:
				// 		vm.infos.skills[3].show = true
				// 	break
				// 	case window.scrollY > 3500 && window.scrollY < 3600:
				// 		vm.infos.skills[2].show = true
				// 	break
				// 	case window.scrollY > 3100 && window.scrollY < 3200:
				// 		vm.infos.skills[1].show = true
				// 	break
				// 	case window.scrollY > 2900 && window.scrollY < 3000:
				// 		vm.infos.skills[0].show = true
				// 	break
				// 	/*skill title*/
				// 	case window.scrollY > 2800 && window.scrollY < 2890:
				// 		vm.textAnimateInfos.skill.titleShow = true
				// 	break;
				// 	/*circle under tab*/
				// 	case window.scrollY >2600:
				// 		vm.underTabShow = true
				// 		vm.infos.benefits[0].show = true
				// 	break
				// 	/*tab*/
				// 	case window.scrollY > 2100 && window.scrollY < 2200:
				// 		vm.tabShow = true;
				// 	break
				// 	/*course title && direction*/
				// 	case window.scrollY > 1745 && window.scrollY < 1875:
				// 		vm.textAnimateInfos.course.directionShow = true
				// 	break
				// 	case window.scrollY > 1600 && window.scrollY < 1730:
				// 		vm.textAnimateInfos.course.titleShow = true
				// 	break
				// 	/*advitage*/
				// 	case window.scrollY > 1400 && window.scrollY < 1500:
				// 		vm.infos.advantages[4].show = true
				// 		vm.infos.advantages[5].show = true
				// 	break;
				// 	case window.scrollY > 1300 && window.scrollY < 1400:
				// 		vm.infos.advantages[2].show = true
				// 		vm.infos.advantages[3].show = true
				// 	break;
				// 	case window.scrollY > 1200 && window.scrollY < 1300:
				// 		vm.infos.advantages[0].show = true
				// 		vm.infos.advantages[1].show = true
				// 	break;
				// 	/*advantage title*/
				// 	case window.scrollY > 910 && window.scrollY < 1030:
				// 		vm.textAnimateInfos.advantage.titleShow = true
				// 	break
				// 	/*direction number animate*/
				// 	case window.scrollY > 560 && window.scrollY < 690:
				// 		vm.numberAnimate();
				// 	break;
				// 	/*direction title && direction*/
				// 	case window.scrollY > 350 && window.scrollY < 450:
				// 		vm.textAnimateInfos.direction.directionShow = true
				// 	break
				// 	case window.scrollY > 220 && window.scrollY < 320:
				// 		vm.textAnimateInfos.direction.titleShow = true
				// 	break
				// }
				switch(true){

					/*skill title*/
					case window.scrollY > 4350:
						vm.textAnimateInfos.teacher.directionShow = true
					case window.scrollY > 4225:
						vm.textAnimateInfos.teacher.titleShow = true
					/*sills*/
					case window.scrollY > 3900:
						vm.infos.skills[3].show = true
					case window.scrollY > 3500:
						vm.infos.skills[2].show = true
					case window.scrollY > 3100:
						vm.infos.skills[1].show = true
					case window.scrollY > 2900:
						vm.infos.skills[0].show = true
					/*skill title*/
					case window.scrollY > 2800:
						vm.textAnimateInfos.skill.titleShow = true;
					/*circle under tab*/
					case window.scrollY >2600:
						vm.underTabShow = true
						vm.infos.benefits[0].show = true
					/*tab*/
					case window.scrollY > 2100:
						vm.tabShow = true;
					/*course title && direction*/
					case window.scrollY > 1745:
						vm.textAnimateInfos.course.directionShow = true
					case window.scrollY > 1600:
						vm.textAnimateInfos.course.titleShow = true
					/*advitage*/
					case window.scrollY > 1400:
						vm.infos.advantages[4].show = true
						vm.infos.advantages[5].show = true;
					case window.scrollY > 1300:
						vm.infos.advantages[2].show = true
						vm.infos.advantages[3].show = true;
					case window.scrollY > 1200:
						vm.infos.advantages[0].show = true
						vm.infos.advantages[1].show = true;
					/*advantage title*/
					case window.scrollY > 910:
						vm.textAnimateInfos.advantage.titleShow = true
					/*direction number animate*/
					case window.scrollY > 560:
						vm.numberAnimate();;
					/*direction title && direction*/
					case window.scrollY > 350:
						vm.textAnimateInfos.direction.directionShow = true
					case window.scrollY > 220:
						vm.textAnimateInfos.direction.titleShow = true
					/*teachers*/
					case window.scrollY > 4555 && window.innerWidth > 600:
						vm.teachersShow = true
					break
				}
			},
			numberAnimate () {
				let vm = this
				if(vm.numberAnimatePlayed) return
				vm.numberAnimatePlayed = true;
				let count = 25;
				let timeID = setInterval (()=>{
					if (count === 0) {
						for (let p in vm.infos.directions) {
							let animate = vm.numberAnimateInfos[p]
							vm.infos.directions[p].title = animate.end + animate.tail
						}
						clearInterval(timeID)
					} else {
						count--
						for(let p in vm.infos.directions) {
							let animate = vm.numberAnimateInfos[p]
							vm.infos.directions[p].title = animate.base + Math.floor(Math.random() * animate.range) + animate.tail
						}
					}
				}, 30)
			}
		},
		created () {
			let vm = this
			if (vm.isMobile) {
				for (let p in vm.infos.directions) {
					vm.infos.directions[p].title = vm.numberAnimateInfos[p].end + vm.numberAnimateInfos[p].tail
				}
			}
		},
		mounted () {
			let vm = this
			if (!vm.isMobile){
				window.addEventListener('scroll', this.handleScroll)
			}
			setTimeout(()=>{
				// console.log(123)
				// document.body.scrollTop = 0
				// document.documentElement.scrollTop = 0
			},30)
		},
		// beforeRouteEnter (to, from, next) {
		// 	console.log('update')
		// },
		beforeRouteLeave (to, from, next) {
			window.removeEventListener('scroll', this.handleScroll)
			next()
		}
	}
</script>
<style lang="scss" scoped>
// 表格从左到右依次增高的基值
$baseIncrementHeight: 1rem;
// 基础颜色
$baseBlue: #72bde4;
$baseOrange: #f39a00;
$baseGreen: #82c043;
$baseRed: #e96462;
$basePink: #eb6b62;
$baseDuration: 2s;

.main {
	width: 100%;

	@media only screen and (min-width: 600px) {
		padding-top: 87px!important;
	}
	@media only screen and (max-width: 600px) {
		padding-top: 0rem!important;
		.mob-gap-20 {
			height: 20px;
		}
	}
}
.shell {
	@media only screen and (min-width: 600px) {
		// min-height: 600px;
		width: 1124px;
	}
	@media only screen and (max-width: 600px) {
		width: 100vw;
	}
	margin: 0 auto;
	position: relative;
}
.describe {
	font-size: 1.3rem;
	line-height: 2.2rem;
	text-align: center;
	padding: 0 7rem;
	@media only screen and (max-width: 600px) {
		padding: 0 2rem;
		font-size: 1rem;
		line-height: 1.5rem;
	}
}

@media only screen and (min-width: 600px) {
	.floor-2 {
		min-height: 606px;
	}
	.floor-3 {
		min-height: 713px;
	}
	.floor-4 {
		min-height: 1218px;
	}
	.floor-5 {
		min-height: 1380px;
	}
	.floor-6 {
		min-height: 926px;
	}
}
header {
	display: flex;
	background: url(/static/images/multiIntelligence/header.jpg) no-repeat center fixed;
	height: 950px;
	@media only screen and (max-width: 600px) {
		height: 100vh;
		background: url(/static/images/multiIntelligence/header.jpg) no-repeat center;
	}
	& > .shell {
		display: flex;
		@media only screen and (min-width: 600px) {
			align-items: center;
		}
		@media only screen and (max-width: 600px) {
			justify-content: center;
			align-items: center;
		}

	}
	background-position: center;
	position: relative;
	overflow: hidden;
	.circle {
		box-shadow: 0 0 0 10px rgba(255, 255, 255, .4);
		position: relative;
		@media only screen and (max-width: 600px) {
			height: 22rem;
			width: 22rem;
		}
		@media only screen and (min-width: 600px) {
			height: 30rem;
			width: 30rem;
		}

		background-color: #FFF;
		border-radius: 30.5rem;
		text-align: center;
		& > div {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 100%;
		}
	}
	p {
		color: #fb9e3a;
		margin: 5px 0;
	}
	p:nth-child(even) {
		font-size: 4.2rem;
		@media only screen and (max-width: 600px) {
			font-size: 2.5rem;
		}
	}
	p:nth-child(odd) {
		font-size: 2.5rem;
		@media only screen and (max-width: 600px) {
			font-size: 1.8rem;
		}
	}
	.button {
		padding: 1.5rem 0;
		background: #fb9e3a;
		width: 60%;
		margin: 0 auto;
		color: #FFF;
		font-size: 2rem;
		cursor: pointer;
		@media only screen and (max-width: 600px) {
			padding: 1rem 0;
			font-size: 1.8rem;
		}
	}
	.button:hover {
		background-color: #fa8200;
	}
}

.gap-5 {
	height: 5px;
}
.gap-70 {
	height: 70px;
}
.gap-125{
	height: 125px;
	@media only screen and (max-width: 600px) {
		height: 50px;
	}
}

.title {
	text-align: center;
	position: relative;
	padding: 5rem 0;
	span {
		font-size: 2rem;
		line-height: 3rem;
		padding: 2rem;
		display: inline-block;
		position: relative;
		font-weight: 600;
		display: inline-block;
		position: relative;
		.line {
			height: 1px;
			width: 160px;
			background-color: #ccc;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			i {
				display: inline-block;
				height: 5px;
				width: 40%;
				position: absolute;
				left: 50%;
				background-color: orange;
				transform: translate(-50%, -50%)
			}
		}
	}
	@media only screen and (max-width: 600px) {
		span {
			font-size: 1.5rem;
			line-height: 2.3rem;
		}
		padding: 1rem 1.5rem 3rem;
	}
}

.direction {
	.circle {
		height: 8rem;
		width: 8rem;
		border: 0.2rem solid transparent;
		border-radius: 5.1rem;
		color: #fb9e3a;
		margin: 4rem auto;
		div {
			height: 45%;
		}
		p {
			font-size: 3rem;
			text-align: center;
			margin-top: 5px;
			margin-bottom: 0;
		}
	}
	span {
		font-size: 1.1rem;
		color: #666;
		line-height: 1.6rem;
	}
	@for $i from 1 to 5 {
		.bg-0#{$i} {
			background: url('/static/images/multiIntelligence/#{$i + 16}.png') no-repeat center bottom;
			background-size: 35%;
		}
	}
	@media only screen and (max-width: 600px) {
		span {
			font-size: 0.9rem;
		}
		.circle {
			margin: 2rem auto;
		}
	}
}

.mob-hide {
	@media only screen and (max-width: 600px) {
		display: none;
	}
}
.mob-show {
	@media only screen and (min-width: 600px) {
		display: none;
	}
}

.row {
	overflow: hidden;
	& > div {
		float: left;
	}
}

.text-box {
	padding: 0 2rem;
	text-align: center;
	min-height: 6rem;
}

.bg-gray {
	background-color: #f9f9f9;
	@media only screen and (max-width: 600px) {
		background-color: #FFF;
	}
}

.flex {
	display: flex;
}
.flex-1 {
	flex: 1;
}
.flex-2 {
	flex: 2;
}
.flex-3 {
	flex: 3;
}
.advantage {
	@media only screen and (max-width: 600px) {
		text-align: center;
		p {
			padding: .5rem 0;
			font-size: 1rem;
		}
		span {
			font-size: 0.9rem;
			line-height: 1.4rem;
		}
	}
	@media only screen and (min-width: 600px) {
		p {
			font-size: 1.4rem;
		}
		span {
			font-size: 1.1rem;
			line-height: 1.7rem;
		}
	}
	p {
		margin-bottom: 5px;
		margin-top: 17px;
		font-weight: 600;
	}
	span {
		color: #666;
	}
	& > div {
		margin: 1rem 0;
	}
	.text {
		padding: 0 1rem;
	}
	.animated {
		animation-duration: $baseDuration;
	}
}

.tab {
	color: #FFF;
	font-size: 1.3rem;
	position: relative;
	padding: 18 * $baseIncrementHeight 70px 0 70px;
	.flex-1 {
		padding: 0;
		margin: 0;
	}
	& > div {
		margin-top: 2px;
	}
	p {
		padding: 1rem;
		text-align: left;
		span {
			padding: 2px;
		}
	}
	span {
		padding: 1rem 0;
		display: inline-block;
	}
	.orange {
		background-color: $baseOrange;
	}
	.green {
		background-color: $baseGreen;
	}
	.red {
		background-color: $baseRed;
	}
	.blue {
		background-color: $baseBlue;
	}
}

.cell-gap {
	width: 2px;
}
/*.cell-gaps*/
.tab-gap>div:not(:first-child){
	margin-left: 2px;
}
.tab-gap-min>div:not(:first-child){
	margin-left: 1px;
}
.flow {
	.orange {
		background-color: $baseOrange;
	}
	.green {
		background-color: $baseGreen;
	}
	.blue {
		background-color: $baseBlue;
	}
	.pink {
		background-color: $basePink;
	}
}

.greens {
	& > div {
		background-color: $baseGreen;
	}
	i {
		background-color: $baseGreen;
	}
}

.blues {
	& > div {
		background-color: $baseBlue;
	}
	i {
		background-color: $baseBlue;
	}
}
.reds {
	& > div {
		background-color: $baseRed;
	}
	i {
		background-color: $baseRed;
	}
}


@for $i from 1 to 17 {
	.h#{$i} {
		height: $i * $baseIncrementHeight
	}
}
.adds {
	position: absolute;
	left: 0;
	top: 0;
	transform: translateY(-100%);
	width: 100%;
}
.tab-gap-min .flex-1 {
	position: relative;
}
.center {
	text-align: center;
}
.grey {
	background-color: #ccc;
	text-align: center;
}
.benefit {
	text-align: center;
	padding: 50px 0;
	font-size: 1.3rem;
	p {
		padding: 10px 0;
	}
	img {
		width: 46%;
	},
	.animated {
		animation-duration: $baseDuration;
	}
}

.skills {
	& > div {
		margin: 1rem 0;
		& > div {
			animation-duration: 3s;
			background-color: #FFF;
		}
	}
	p {
		font-size: 1.7rem;
		margin: 10px 0;
		font-weight: 600;
		@media only screen and (max-width: 600px) {
			text-align: center;
			font-size: 1.3rem;
			// margin: 1.5rem 0;
			margin-bottom: 1.5rem;
		}
	}
	span {
		font-size: 1.2rem;
		line-height: 1.8rem;
		color: #666;
		@media only screen and (max-width: 600px) {
			font-size: 0.9rem;
			line-height: 1.4rem;
		}
	}
	img {
		vertical-align: top;
	}
	.img {
		@media only screen and (max-width: 600px) {
			// text-align: center;
			padding: 1rem 0;
			text-align: center;
		}
	}

	.text {
		@media only screen and (max-width: 600px) {
			// text-align: center;
			padding: 2rem 1rem;
		}
		@media only screen and (min-width: 600px) {
			// text-align: center;
			padding: 2rem;
			p {
				padding: 1rem 0;
			}
		}
	}
}
.teachers {
	@media only screen and (min-width: 600px) {
		display: flex;
	}
	.animated {
		animation-duration: $baseDuration;
	}
}
.teachers, .mob-show {
	.ctrl {
		flex: 1;
		position: relative;
		& > div {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 50px; height: 100px;
			background-color: #ccc;
			cursor: pointer;
		}
		& > div:hover {
			opacity: 0.5;
		}
	}
	.swiper {
		flex: 8;
	}
	.contents {
		flex: 8;
		overflow: hidden;
		margin: auto;
		position: relative;
		& > div {
			width: 200%;
			overflow: hidden;
		}
	}
	.next {
		right: 0;
		background: url('/static/images/multiIntelligence/arrow_right.png') no-repeat center;
	}
	.prev {
		background: url('/static/images/multiIntelligence/arrow_left.png') no-repeat center;
	}
	.card {
		position: relative;
		padding: 0px 22px 20px 22px;
		.content {
			padding: 100px 20px 20px 20px;
			box-shadow: 0 0 13px 5px #e3e3e3, 0 0 0 0 #e3e3e3;
			min-height: 23rem;
		}
		p:nth-child(1) {
			font-weight: 700;
			font-size: 1.8rem;
			margin-bottom: 10px;
			@media only screen and (max-width: 600px) {
				text-align: center;
				font-size: 1.5rem;
			}
		}
		p:nth-child(2) {
			font-size: 1.5rem;
			margin-bottom: 30px;
			margin-top: 10px;
			@media only screen and (max-width: 600px) {
				text-align: center;
				font-size: 1rem;
			}
		}
		p:nth-child(3) {
			font-size: 1.2rem;
			line-height: 2.5rem;
			color: #666;
			@media only screen and (max-width: 600px) {
				font-size: 0.9rem;
				line-height: 1.4rem;
			}
		}
	}
	.avatar {
		width: 14rem;
		height: 14rem;
		background-size: cover;
		transform: translate(-50%, 40%);
		margin-left: 50%;
	}
	// pic-01 -- pic-04 老师头像
	@for $i from 1 to 5 {
		.pic-0#{$i} {
			background: url('/static/images/multiIntelligence/#{$i + 20}.png') no-repeat top center;
			background-size: cover;
		}
	}
}
</style>
