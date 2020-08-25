<template>
	<div class="hello">

		<Head :title="title"></Head>
		<div class="contBox">
			<!-- 总经理驾驶舱管理 -->
			<div class="resources">
				<div class="firstTitle">
					<p class="line"></p>
					<h4>财务动态</h4>
				</div>
				<!-- 财务动态 -->
				<div class="lease">
					<div class="title">
						<span>财务统计</span>
					</div>
					<!-- 总面积 -->
					<div class="allArea" style="padding:0;">
					  <div class="finance_left">
						  <div class="finance_box">
							  <div class="finance_box_title">合同金额</div>
								<div class="finance_content">
								  <div class="finance_content_left">
									  <div class="finance_content_title">完成额</div>
										<div class="finance_content_num">253亿</div>
									</div>
									<div class="finance_content_right">
									  <div class="finance_content_title">年度计划</div>
										<div class="finance_content_num">500亿</div>
									</div>
								</div>
							</div>
							<div class="finance_box">
							  <div class="finance_box_title">营业收入</div>
								<div class="finance_content">
								  <div class="finance_content_left">
									  <div class="finance_content_title">完成额</div>
										<div class="finance_content_num">253亿</div>
									</div>
									<div class="finance_content_right">
									  <div class="finance_content_title">年度计划</div>
										<div class="finance_content_num">500亿</div>
									</div>
								</div>
							</div> 
							<div class="finance_box">
							  <div class="finance_box_title">利润</div>
								<div class="finance_content">
								  <div class="finance_content_left">
									  <div class="finance_content_title">完成额</div>
										<div class="finance_content_num">253亿</div>
									</div>
									<div class="finance_content_right">
									  <div class="finance_content_title">年度计划</div>
										<div class="finance_content_num">500亿</div>
									</div>
								</div>
							</div>   					    
							<div class="water_electricity">
								<div class="water_electricity_box water_box">
									<div class="water_electricity_title water_title">两金</div>
									<div class="water_box_count">
										<span class="water_box_txt">2133</span>
										<span class="water_box_txt1">2135</span>
									</div>
								</div>
								<div class="water_electricity_box electricity_box">
									<div class="water_electricity_title electricity_title">两控</div>
									<div class="water_box_count">
										<span class="water_box_txt">2133</span>
										<span class="water_box_txt1">2135</span>
									</div>
								</div>
							</div>
							
							
						</div>
						<div class="finance_right">
						  <div id="investment" class="addTz"></div> 
							<div class="trouble_box">
								<div class="trouble_title">一治一快</div>
								<div class="trouble_content">
									<p class="trouble_count">2</p>
									<p>2</p>
								</div>
							</div>
						</div>
					</div>
				</div>	
				<!-- 行政服务 -->
				<!-- <div class="administrationServer">
					<div class="title">
						<span>党群党建</span>
					</div>
					<div class="wrapper">
						<div class="huan1 position1">
							<img src="../../assets/imgs/xz_icon_bl@2x.png" alt="">
							<span>党建活动</span>
						</div>
						<div class="huan1 position2">
							<img src="../../assets/imgs/xz_icon_hj@2x.png" alt="">
							<span>大事记</span>
						</div>
						<div class="huan1 position3">
							<img src="../../assets/imgs/xz_icon_design@2x.png" alt="">
							<span>员工信息</span>
						</div>
						<div class="huan1 position4">
							<img src="../../assets/imgs/xz_icon_zx@2x.png" alt="">
							<span>招聘管理</span>
						</div>
						<div class="huan1 position5">
							<img src="../../assets/imgs/xz_icon_pt@2x.png" alt="">
							<span>相关荣誉</span>
						</div>
					</div>
				</div> -->
				<!-- 安全管理 -->
				<!--<div class="businessmen">
					<div class="title">
						<span>项目预算</span>
					</div>
					<div id="investment" class="addTz"></div>
				</div>-->
			</div>

			<!-- banner -->
			<div class="property">
				<div class="property_top">
					<!--<div class="pic1"></div>
					<div class="pic2"></div>
					<div class="pic3"></div>
					<div class="pic4"></div>
					<div class="pic5" @click="toPages('home')"></div>
					<div class="pic6"></div>
					<div class="pic7"></div>-->
					<div id="mapEchart" style="width:100%;height:100%"></div>
				</div>
			</div>

			<!-- 智慧能源管理平台 -->
			<div class="energy">
				<div class="energy_title">
					<p class="line"></p>
					<h4>企业管理</h4>
				</div>
				<div class="warning_box">
					<div class="box_title">
						<span>项目统计</span>
					</div>
					<div class="allArea">
						<div class="leftCount">
							<div class="areaTitle">
								<img src="../../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>区域产值</span>
							</div>
							<div class="count">四川<span>10亿</span></div>
							<div class="count">云南<span>10亿</span></div>
							<div class="count">重庆<span>10亿</span></div>
							<div class="count">贵州<span>10亿</span></div>
						</div>
						<div class="rightEchars1 rightEchars" id="areaEcharts"></div>
					</div>
					<!-- 月度产值 -->
					<div class="untilTips">
						<div class="leftCount">
							<div class="areaTitle">
								<img src="../../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>月度产值</span>
								
							</div> 
							<div class="marquee">
								<div class="marquee_title">
									<span class="beforeUnti">月份</span>
									<span class="afterUnti">产值</span>
								</div>
								<div class="marquee_box">
									<ul class="marquee_list">
										<li v-for="(item,index) in ideaTable" :key="index">
											<span class="beforeCont">{{item.unit}}</span>
											<span class="afterCont">{{item.endTime}}</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="rightEchars2 rightEchars" id="untilEcharts"></div>
					</div>
					<div class="allArea">
						<div class="leftCount">
							<div class="areaTitle">
								<img src="../../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>板块产值</span>
							</div>
							<div class="count">市政<span>10亿</span></div>
							<div class="count">水利<span>25亿</span></div>
							<div class="count">环保<span>7亿</span></div>
							<div class="count">其他<span>3亿</span></div>
						</div>
						<div class="rightEchars3 rightEchars" id="plateEcharts"></div>
					</div>
				</div>
			</div>

		</div>  
        
		<div class="contBottom">
			<div class="project">
			  <Swiper>
				  
				</Swiper>		  			
			</div>
		</div>
	</div>
</template>

<script>
	var that
	let timer1;
	let timer;
	import Swiper from "@/components/swiper/swiper.vue"
	import Head from '@/components/head/head.vue';
	import echarts from 'echarts'
	import 'echarts/map/js/province/sichuan.js'
  import "echarts-gl"
	export default {
		name: 'index',
		data() {
			return {
				title: "天航局西南公司驾驶舱",
				tableDate: [],
				animate1: false,
				animate: false,
        slide:[1,2,3,4,5],
				ideaTable: [{
						"unit": "1月",
						"endTime": "23000万",
					},
					{
						"unit": "2月",
						"endTime": "7000万",
					},
					{
						"unit": "3月",
						"endTime": "13000万",
					},
					
				],
				investmentData: [{
					name: "项目一",
					value: 40
				}, {
					name: "项目二",
					value: 26
				}, {
					name: "项目三",
					value: 27
				}, {
					name: "项目四",
					value: 30
				}, {
					name: "项目五",
					value: 29
				}],
				plateData: [{
					name: "水利",
					value: 10
				}, {
					name: "市政",
					value: 25
				}, {
					name: "环保",
					value: 7
				}, {
					name: "其他",
					value: 3
				}],
				todayCount: "",
				yesterdayCount: "",
				thisWeekReporting: [],
				lastWeekReporting: [],
				fitmentList: ['T5-0933', 'T7-0612'],
				roadshowList: [{
					time: '2019-07-11 16:30',
					name: '建筑园区规划'
				}, {
					time: '2019-07-19 14:30',
					name: '天航局西南公司'
				}],
				
				dataObj: {
					'1': 2018,
					'2': 2019,
				}
			}
		},
		components: {
			Head,
			Swiper
		},
		created: function() {
			that = this
		},
		mounted() {
			timer && clearInterval(timer)
			timer = setInterval(that.showMarquee, 2000)
			that.investment()
			that.areaEcharts()
			that.untilEcharts()
			that.plateEcharts()
			that.mapEcharts()
		},
		methods: {
			toPages(path) {
				this.$router.push({
					path: path
				});
			},
			watchAni() {
				that.ideaTable.push(that.ideaTable[0]);
				that.ideaTable.shift();        
				that.animate = false;      
			},
			showMarquee: function() {        
				that.animate = true;        
			},
			investment() {
				let myChart = that.$echarts.init(document.getElementById('investment'));
				myChart.setOption({
					title: {
						text: '',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: 6
						},
						left: 50,
						top: 2
					},
					grid: {
						top: '6%',
						left: '2%',
						right: '3%',
						bottom: '3%',
						height: '240px',
						containLabel: true
					},
					tooltip: {
						trigger: 'axis'
					},
					
					calculable: true,
					xAxis: [{
						type: 'category',
						data: ['合同金额', '营业收入', '利润'],
						axisLabel: {
							fontSize: 10,
              interval:0,//代表显示所有x轴标签显示
            },
						axisLine: {
							lineStyle: {
								fontSize: 12,
								fontWeight: "bold",
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
					}],
					yAxis: [{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						splitLine: {
							show: false,
							lineStyle: {
								color: ['#fafafa']
							}
						}
					}],
					series: [
						{
							name: '完成额',
							type: 'bar',
							data: [253,253,253],
							barMaxWidth: '30%',
							
						},
						{
							name: '年度计划',
							type: 'bar',
							data: [500,500,500],
							barMaxWidth: '30%',
					  }
					]
				})
			},
			mapEcharts() {
				let myChart = that.$echarts.init(document.getElementById('mapEchart'));
				myChart.setOption({
					series: [{
						type: 'map3D',
						name: '四川',
						selectedMode: 'single',
						boxDepth: 90,
						regionHeight: 6,
						map: '四川',
						viewControl: {
							distance: 150,
							rotateSensitivity: 0,
							zoomSensitivity: 0,
						},
						label: {
							show: true,
							textStyle: {
								color: "#fff",
								fontSize: 12,
								backgroundColor: "rgba(0,0,0,0)",
							}
						},
						itemStyle: {
							color: "#81d0f1",
							borderWidth: 0.5,
							borderColor: "#459bca",
						},
						emphasis: {
							label: {
								show: true,
								textStyle: {
									color: '#fff',
								}
							},
							itemStyle: {
								color: '#0489d6',
							}
						},
						regions:[
							{
								name: "成都市",
								itemStyle: {
									areaColor: "#f00",
								}
							}
						]
				  }]
				});
				myChart.on('click',function(params){
					clearInterval(regions)
					console.log(params)
					count = params.dataIndex
					option.geo3D.regions[0].name = params.name
					myChart.setOption(option);
			  });
			},
			//面积
			areaEcharts() {
				let myChart = that.$echarts.init(document.getElementById('areaEcharts'));
				myChart.setOption({
					title: {
						text: '',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					tooltip: {
						trigger: 'axis',
						formatter: function(params) {
							// return that.dataObj[params[0].name] + "-" + params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + " 个"
							return params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + "亿元"

						},
					},
					color: ['rgba(108,192,66,1)'],
					grid: {
						top: '16%',
						left: '2%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['四川', '云南', '重庆', '贵州'],
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						splitLine: {
							show: false
						},
					},
					yAxis: {
						// name: '单位：条',
						type: 'value',
						// scale : true,
						// max : 1400,
						// min : 0,
						// splitNumber : 7,
						axisLine: {
							lineStyle: {
								color: '#969CA4'
							}
						},
						nameTextStyle: {
							color: "#eee",
							fontSize: '12px'
						},
						splitLine: {
							show: false
						},
					},
					series: [{
						name: '区域产值',
						data: [12, 16, 15, 10],
						type: 'line',
						symbol: 'none', //取消折点圆圈
						areaStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [{
									offset: 0,
									color: 'rgba(108,192,66,1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(46,254,245,0.08)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						},
						lineStyle: {
							color: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: 'rgba(44,254,245,1)' // 0% 处的颜色
								}, {
									offset: 1,
									color: 'rgba(99,213,44,1)' // 100% 处的颜色
								}],
								global: false // 缺省为 false
							}
						}
					}]
				})
			},
			// 到期提醒
			untilEcharts() {
				let myChart2 = this.$echarts.init(document.getElementById('untilEcharts'))
				myChart2.setOption({
					title: {
						text: '',
						show: true,
						textStyle: {
							color: '#BAC2CC',
							fontSize: '6px'
						},
						left: 50,
						top: 2
					},
					grid: {
						top: '16%',
						left: '2%',
						right: '8%',
						bottom: '3%',
						containLabel: true
					},
					tooltip: {
						trigger: 'axis'
					},
					xAxis: [{
						type: 'category',
						data: ['1', '2', '3', '4', '5', '6', '7', '8'],
						axisLine: {
							lineStyle: {
								fontSize: 16,
								fontWeight: "bold",
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							formatter: '{value} '
						},
						axisLine: {
							lineStyle: {
								color: '#969CA4',
								width: 1, //这里是为了突出显示加上的  
							}
						},
						splitLine: {
							show: false,
							lineStyle: {
								color: ['#fafafa']
							}
						}
					}],
					color: ['rgba(225, 244, 21, .3)'],
					series: [{
						name: '每月完成项目',
						type: 'bar',
						barWidth: '40%',
						itemStyle: {
							normal: {
								barBorderRadius: [8, 8, 0, 0],
								color: new echarts.graphic.LinearGradient(
									0, 0, 0, 1, [{
											offset: 0,
											color: '#1EB0FC'
										},
										{
											offset: 1,
											color: '#EB5AFC'
										}
									]
								)
							},
						},
						data: ['11', '5', '6', '8', '15', '12', '16', '14']
					}]
				});
			},
			plateEcharts() {
				let myChart3 = this.$echarts.init(document.getElementById('plateEcharts'))
				myChart3.setOption({
					title: {
						show: false
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c} ({d}%)'
					},
					legend: {
						bottom: 10,
						padding: 5,
						itemWidth:6,
						itemHeight: 4,
						textStyle: {
							color: '#fff',
							fontSize: 11
						},
						left: 'center',
						data: ['水利', '市政', '环保', '其他']
					},
					series: [
						{
							type: 'pie',
							radius: '60%',
							center: ['50%', '40%'],
							selectedMode: 'single',
							label: {
                                show: false
							},
							data: [
								{
									value: 25,
									name: '水利',
								},
								{value: 10, name: '市政'},
								{value: 7, name: '环保'},
								{value: 3, name: '其他'},
							],
							emphasis: {
								itemStyle: {
									shadowBlur: 10,
									shadowOffsetX: 0,
									shadowColor: 'rgba(0, 0, 0, 0.5)'
								}
							}
						}
					]
				})
			},
			
			showMarquee1: function() {
				that.animate1 = true
				// setTimeout(() => {
				// that.tableDate.push(that.tableDate[0])
				// that.tableDate.shift()
				// 	that.animate = false
				// }, 500)
			},
			c_marquee() {
				that.tableDate.push(that.tableDate[0])
				that.tableDate.shift()
				that.animate1 = false;
			},
		},
	}
</script>

<style scoped lang="scss">
	.contBox {
		box-sizing: border-box;
		width: 960px;
		height: 360px;
		padding: 0 10px;
		/*overflow: hidden;*/
		position: absolute;
		top: 54px;
		left: 0;
		display: flex;
		justify-content: space-around;
		&>div {
			width: 245px;
			height: 100%;
			display: flex;
			flex-direction: column;
			// justify-content: space-between;
			/*border:1px solid #ccc;*/
		}
		.resources {
			background: url('../../assets/imgs/title_bg@2x.png')no-repeat;
			background-size: 100% 100%;
		}
		.property {
			position: relative;
			margin-top: -30px;
			flex: 1;
			.property_top {
				position: relative;
				width: 100%;
				height: 450px;
				.pic1 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 100%;
					height: 100%;
					margin: auto;
					border-radius: 50%;
					background: url('../../assets/imgs/menu_bg@2x.png')no-repeat;
					background-size: 100% 100%;
				}
				.pic2 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 375px;
					height: 375px;
					margin: auto;
					border-radius: 50%;
					background: url('../../assets/imgs/menu_Clockwise@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 110;
					animation: mymove1 180s infinite linear;
				}
				.pic3 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 250px;
					height: 250px;
					margin: auto;
					border-radius: 50%;
					background: url('../../assets/imgs/menu_center_anticlockwise@2x.png')no-repeat;
					background-size: 100% 100%;
					animation: mymove2 48s infinite linear;
				}
				.pic4 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 240px;
					height: 240px;
					margin: auto;
					border-radius: 50%;
					background: url('../../assets/imgs/menu_quan01@2x.png')no-repeat;
					background-size: 100% 100%;
					animation: mymove3 36s infinite linear;
				}
				.pic5 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 87.5px;
					height: 87.5px;
					margin: auto;
					border-radius: 50%;
					//background: url('../../assets/imgs/menu_Immobility@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 999;
				}
				.pic6 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 309px;
					height: 309px;
					margin: auto;
					border-radius: 50%;
					background: url('../../assets/imgs/menu_content@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 99;
					animation: mymove4 180s infinite linear;
				}
				.pic7 {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					width: 220px;
					height: 220px;
					margin: auto;
					border-radius: 50%;
					background: url('../../assets/imgs/menu_div@2x.png')no-repeat;
					background-size: 100% 100%;
					z-index: 666;
					animation: mymove1 180s infinite linear;
				}
				.pic7:hover {
					cursor: url('../../assets/imgs/WechatIMG88.gif'), auto;
				}
			}
			.property_bottom {
				position: absolute;
				bottom: -54.5px;
				left: 18px;
				width: 415px;
				height: 137px;
				background: url('../../assets/imgs/title_bg_wy@2x.png')no-repeat;
				background-size: 100% 100%;
				.property_bottom_title {
					width: 100%;
					height: 20px;
					display: flex;
					align-items: center;
					.line {
						width: 2.5px;
						height: 10px;
						background: rgba(6, 177, 255, 1);
						margin: 0 4.5px 0 10px;
					}
					h4 {
						font-size: 11px;
						color: rgba(6, 177, 255, 1);
					}
				}
				.property_bottom_content {
					display: flex;
					.content_item {
						box-sizing: border-box;
						flex: 1;
						height: 117px;
						padding: 11.5px;
						.item_content {
							display: flex;
							.item_content_left {
								width: 44px;
								margin-top: 16px;
								margin-right: 8px;
								.content_left_item {
									width: 100%;
									height: 16px;
									margin-bottom: 6.5px;
									line-height: 16px;
									background: url('../../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
									background-size: 100% 100%;
									text-align: center;
									.left_item_txt {
										font-size: 6px;
										font-family: MicrosoftYaHei;
										font-weight: 400;
										color: rgba(250, 250, 250, 1);
									}
									.left_item_count {
										font-size: 8px;
										font-family: MicrosoftYaHei;
										font-weight: bold;
									}
								}
							}
							.item_content_right {
								flex: 1;
								.chart7 {
									height: 94px;
								}
							}
						}
						.server_list {
							.server_item_wrapper {
								display: flex;
								justify-content: space-around;
								align-items: center;
								height: 21px;
								margin-top: 6px;
								.server_item {
									display: flex;
									align-items: center;
									.server_item_left {
										position: relative;
										width: 21px;
										height: 21px;
										.server_item_left_bg {
											position: absolute;
											top: 0;
											left: 0;
											width: 21px;
											height: 21px;
											background: url('../../assets/imgs/zsfu_icon_znzx@2x.png') no-repeat;
											background-size: 100% 100%;
											animation: mymove5 4s infinite linear;
										}
										img {
											display: block;
											width: 10px;
											height: 10px;
											margin: 5.5px auto;
										}
									}
									.server_item_right {
										width: 70px;
										height: 16px;
										margin-left: -3.5px;
										line-height: 16px;
										border-bottom: 1px solid #2862A2;
										font-size: 6px;
										font-family: PingFangSC-Medium;
										font-weight: 500;
										text-align: center;
										color: rgba(5, 169, 234, 1);
									}
								}
							}
						}
					}
				}
			}
		}
		.firstTitle {
			width: 100%;
			height: 20px;
			display: flex;
			align-items: center;
			background: linear-gradient(90deg, rgba(32, 156, 255, 0.49), rgba(1, 5, 20, 0));
			.line {
				width: 2.5px;
				height: 10px;
				background: rgba(238, 187, 108, 1);
				margin: 0 4.5px 0 10px;
			}
			h4 {
				font-size: 11px;
				color: rgba(238, 187, 108, 1);
			}
		}
		.lease {
			height: 200px;
			padding: 0 10px 0 9px;
			box-sizing: border-box;
			margin-top: 12px;
		}
		.title {
			width: 220px;
			height: 8px;
			background: url('../../assets/imgs/subtitle_line_zy@2x.png') no-repeat;
			background-size: 100% 100%;
			position: relative;
			span {
				font-size: 9px;
				font-family: Adobe Heiti Std R;
				color: rgba(238, 187, 108, 1);
				position: absolute;
				top: -7px;
			}
		}
		.allArea {
			//height: 95px;
			padding: 0 14px;
			margin-top: 8px;
			display: flex;
			.gridtable{
				border-collapse:collapse;
				width:220px;
				thead>tr{
					height: 20px;
					line-height: 20px
				}
				th,td {
					border: 1px solid #28b2fa;
					font-size: 10px;
					color: #28b2fa;
					font-weight: normal;
				}
				.w{
					width:120px
				}
				tbody>tr{
					height: 20px;
					line-height: 20px;
					&:hover{
						//background:#eef1f6;
					}
					td{ 
						padding:0 10px;
					}
					
				}
			}
			.finance_left{
				width: 90px;
				
				.water_electricity {
					display: flex;
					justify-content: space-between;
					margin-top: 15px;
					.water_electricity_box {
						width: 40px;
						.water_electricity_title {
							width: 100%;
							height: 16px;
							margin-bottom: 3px;
							line-height: 16px;
							font-size: 7px;
							text-align: center;
							background: url('../../assets/imgs/ny_div_bg@2x.png') no-repeat;
							background-size: 100% 100%;
							&.water_title {
								color: #78FD30;
							}
							&.electricity_title {
								color: #D2C820;
							}
						}
						.water_box_count {
							box-sizing: border-box;
							width: 100%;
							height: 37px;
							padding: 0 4px;
							line-height: 18.5px;
							font-size: 10px;
							background: url('../../assets/imgs/ny_frame@2x.png') no-repeat;
							background-size: 100% 100%;
							.water_box_txt {
								display: block;
								color: #2CCAD9;
							}
							.water_box_txt1 {
								display: block;
								text-align: right;
								color: #28B2FA;
							}
						}
					}
				}
			}
		}
		.leftCount {
			width: 86px;
			height: 100%;
		}
		.areaTitle {
			height: 8px;
			display: flex;
			align-items: center;
			margin-bottom: 6px;
			img {
				width: 8px;
				height: 8px;
				display: inline-block;
				margin-right: 2.5px;
			}
			span {
				font-size: 8px;
				color: rgba(254, 254, 254, 1);
			}
			b {
				width: 16px;
				height: 7px;
				background: rgba(18, 78, 98, 0.2);
				text-align: center;
				line-height: 7px;
				font-size: 7px;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(250, 40, 40, 1);
				margin-left: 4px;
			}
		}
		.count {
			height: 16px;
			margin-top:4px;
			padding-left:8px;
			background: url('../../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
			background-size: 100% 100%;
			text-align: left;
			line-height: 16px;
			font-size: 8px;
			font-family: Adobe Heiti Std R;
			font-weight: normal;
			color: rgba(40, 178, 250, 1);
			span {
				padding-left:30px;
			}
		}
		.middleInner {
			height: 27px;
			background: url('../../assets/imgs/zl_area_bg@2x.png') no-repeat;
			background-size: 100% 100%;
			margin-top: 4.5px;
			text-align: center;
			span {
				display: block;
				font-size: 5px;
				font-family: MicrosoftYaHei-Bold;
				font-weight: bold;
				color: rgba(229, 182, 39, 1);
				padding-top: 3.5px;
			}
			b {
				display: block;
				font-size: 5px;
				font-family: MicrosoftYaHei;
				font-weight: 400;
				color: rgba(40, 178, 250, 1);
				padding-top: 1px;
			}
		}
		.rightEchars {
			flex: 1;
			margin-left: 8px;
		}
		.untilTips {
			height: 90px;
			padding: 0 14px;
			margin-top: 8px;
			display: flex;
		}
		.marquee {
			height: 68px;
			overflow: hidden;
			box-sizing: border-box;
			background: url('../../assets/imgs/zl_line_dq@2x.png') no-repeat;
			background-size: 100% 100%;
		}
		.marquee_title {
			display: flex;
			height: 19px;
			line-height: 19px;
			font-size: 5px;
			text-align: center;
			color: #fff;
			padding: 0 5px;
			.beforeUnti {
				width: 30px;
			}
			.afterUnti {
				width: 50px;
			}
			span {
				text-align: center;
			}
		}
		.marquee_box {
			display: block;
			position: relative;
			height: 49px;
			overflow: hidden;
		}
		.marquee_list {
			width: 100%;
			display: block;
			position: absolute;
			top: 0;
			left: 0;
			padding-left: 0;
			margin: 0;
		}
		.marquee_list li {
			display: flex;
			height: 16px;
			line-height: 16px;
			font-size: 4px;
			padding: 0 5px;
			span {
				height: 16px;
				line-height: 16px;
				font-size: 4px;
				text-align: center;
				color: #2CFBF2;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
			.beforeCont {
				width: 30px;
				color: #F0F0F0;
			}
			.afterCont {
				width: 50px;
			}
		}
		.marquee_top {
			transition: all 0.5s;
			margin-top: -16px;
		}
		.administrationServer {
			height: 115px;
			margin-top: 15px;
			/*margin-bottom:5px;*/
			padding: 0 10px 0 9px;
			box-sizing: border-box;
		}
		.wrapper {
			height: 94px;
			margin-top: 5px;
			position: relative;
		}
		.huan1 {
			width: 43px;
			height: 43px;
			background: url('../../assets/imgs/xz_icon_bg@2x.png') no-repeat;
			background-size: 100% 100%;
			text-align: center;
			img {
				width: 15px;
				height: 15px;
				margin-top: 7px;
				margin-left: 14px;
				display: block;
			}
			span {
				font-size: 5px;
				color: rgba(255, 255, 255, 1);
			}
		}
		.position1 {
			position: absolute;
			left: 15px;
			top: 6.5px;
			animation: mymove6 5s linear infinite;
		}
		.position2 {
			position: absolute;
			left: 90px;
			top: 6.5px;
			animation: mymove6 5s linear infinite;
		}
		.position3 {
			position: absolute;
			left: 160px;
			top: 6.5px;
			animation: mymove6 5s linear infinite;
		}
		.position4 {
			position: absolute;
			left: 52px;
			top: 42.5px;
			animation: mymove6 5s linear 3s infinite;
		}
		.position5 {
			position: absolute;
			left: 125px;
			top: 42.5px;
			animation: mymove6 5s linear 3s infinite;
		}
		.businessmen {
			height: 102px;
			// border:1px solid yellow;
			padding: 0 10px 0 9px;
			box-sizing: border-box;
		}
		.addTz {
			width:120px;
			height: 180px;
			display: flex;
			margin-top: 30px;
			margin-bottom: 36px;
			margin-left:10px;
			justify-content: center;
			// border:1px solid #ccc;
		}
		.energy {
			background: url('../../assets/imgs/title_bg@2x.png')no-repeat;
			background-size: 100% 100%;
			background-color: linear-gradient(0deg, rgba(245, 101, 61, 0.73), rgba(250, 140, 110, 0.73));
			border: 1px solid rgba(2, 245, 247, 0.1);
			.energy_title {
				width: 100%;
				height: 20px;
				display: flex;
				align-items: center;
				background: linear-gradient(90deg, rgba(32, 156, 255, 0.49), rgba(1, 5, 20, 0));
				.line {
					width: 2.5px;
					height: 10px;
					background: #6CEEAF;
					margin: 0 4.5px 0 10px;
				}
				h4 {
					font-size: 11px;
					color: #6CEEAF;
				}
			}
			.box_title {
				position: relative;
				width: 220px;
				height: 8px;
				margin: 16px auto 10px;
				background: url('../../assets/imgs/subtitle_line_ny@2x.png') no-repeat;
				background-size: 100% 100%;
				span {
					position: absolute;
					top: -7px;
					font-size: 9px;
					font-family: Adobe Heiti Std R;
					color: #6CEEAF;
				}
			}
			.warning_box {
				.list {
					box-sizing: border-box;
					display: flex;
					width: 215px;
					height: 20px;
					margin: 0 auto;
					padding: 0 8px;
					line-height: 20px;
					justify-content: space-between;
					.list_left {
						.left_logo {
							width: 10px;
							height: 10px;
							margin-right: 3px;
							vertical-align: middle;
						}
						.left_txt {
							font-size: 8px;
							font-weight: 600;
							vertical-align: middle;
						}
					}
					.list_right {
						font-size: 8px;
						color: #58B9FC;
						.swiper-container {
							height: 20px;
							overflow: hidden;
							.swiper-wrapper {
								height: 20px;
								.swiper-slide {
									height: 20px;
									text-align: right;
								}
							}
						}
						.right_logo {
							width: 10px;
							height: 10px;
							margin-right: 3px;
							vertical-align: middle;
						}
						.right_time {
							margin-right: 3px;
							vertical-align: middle;
						}
						.right_txt {
							vertical-align: middle;
						}
					}
				}
				.list_fitment {
					background: rgba(57, 117, 174, 0.15);
					table{
						border-collapse : collapse; 
						tr{
							td{
								border: 1px solid #fff;
							}
						}
					}
					.left_txt {
						background: linear-gradient(0deg, rgba(7, 235, 159, 0.73) 0%, rgba(162, 252, 222, 0.73) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
				.list_roadshow .left_txt {
					background: linear-gradient(0deg, rgba(245, 101, 61, 0.73) 0%, rgba(250, 140, 110, 0.73) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.list_shangbao {
					background: rgba(57, 117, 174, 0.15);
					.left_txt {
						background: linear-gradient(0deg, rgba(7, 167, 177, 0.73) 0%, rgba(156, 243, 248, 0.73) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
				.list_parking .left_txt {
					background: linear-gradient(0deg, rgba(174, 61, 227, 0.73) 0%, rgba(217, 141, 252, 0.73) 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
				}
				.list_repairs {
					background: rgba(57, 117, 174, 0.15);
					.left_txt {
						background: linear-gradient(0deg, rgba(6, 177, 255, 0.73) 0%, rgba(80, 199, 254, 0.73) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
					}
				}
			}
			.resource_box {
				margin-top: 20px;
				.resource_content {
					box-sizing: border-box;
					display: flex;
					width: 100%;
					padding: 0 10px;
					justify-content: space-between;
					.resource_left_title {
						height: 20px;
						line-height: 20px;
						.left_title_logo {
							width: 8px;
							height: 8px;
							vertical-align: middle;
						}
						span {
							font-size: 8px;
							color: #FEFEFE;
							vertical-align: middle;
						}
						.warning_count {
							margin-left: 4px;
							padding: 0 4px;
							font-size: 7px;
							background: #124E62;
							color: #FA2828;
							vertical-align: middle;
						}
					}
					.resource_left {
						width: 90px;
						.water_electricity {
							display: flex;
							justify-content: space-between;
							.water_electricity_box {
								width: 40px;
								.water_electricity_title {
									width: 100%;
									height: 16px;
									margin-bottom: 3px;
									line-height: 16px;
									font-size: 7px;
									text-align: center;
									background: url('../../assets/imgs/ny_div_bg@2x.png') no-repeat;
									background-size: 100% 100%;
									&.water_title {
										color: #78FD30;
									}
									&.electricity_title {
										color: #D2C820;
									}
								}
								.water_box_count {
									box-sizing: border-box;
									width: 100%;
									height: 37px;
									padding: 0 4px;
									line-height: 18.5px;
									font-size: 10px;
									background: url('../../assets/imgs/ny_frame@2x.png') no-repeat;
									background-size: 100% 100%;
									.water_box_txt {
										display: block;
										color: #2CCAD9;
									}
									.water_btrouble_contentox_txt1 {
										display: block;
										text-align: right;
										color: #28B2FA;
									}
								}
							}
						}
						.trouble_box {
							width: 100%;
							margin-top: 15px;
							margin-bottom: 23px;
							.trouble_title {
								height: 16px;
								line-height: 16px;
								font-size: 7px;
								text-align: center;
								background: url('../../assets/imgs/ny_gz_bg@2x.png') no-repeat;
								background-size: 100% 100%;
								color: #62AFDF;
							}
							.trouble_content {
								display: flex;
								align-items: center;
								height: 27px;
								margin-top: 3px;
								line-height: 27px;
								font-size: 12px;
								text-align: center;
								background: url('../../assets/imgs/ny_gz_frame@2x.png') no-repeat;
								background-size: 100% 100%;
								color: #FA2828;
								p {
									flex: 1;
									height: 14px;
									line-height: 14px;
								}
								.trouble_count {
									border-right: 1px solid #229CDD;
								}
							}
						}
					}
					.resource_right {
						width: 116px;
						.resource_right_top {
							display: flex;
							justify-content: space-between;
							.right_top_item {
								width: 50px;
								.right_top_count {
									width: 100%;
									height: 12.5px;
									line-height: 12.5px;
									border: 1px solid rgba(19, 106, 183, 0.5);
									border-radius: 3px;
									font-size: 8px;
									text-align: center;
									color: #28B2FA;
								}
							}
						}
						.resource_right_content {
							box-sizing: border-box;
							width: 100%;
							height: 95px;
							margin-top: 9px;
							border: 2px solid rgba(19, 106, 183, 0.5);
							border-radius: 3px;
							.right_content_title {
								height: 18px;
								line-height: 18px;
								font-size: 6px;
								text-indent: 9px;
								background: url('../../assets/imgs/ny_chart_title_bg@2x.png') no-repeat;
								background-size: 100% 100%;
								color: #BAC2CC;
							}
							.chart5 {
								width: 100%;
								height: 100px;
							}
						}
					}
				}
			}
		}
	}
	
	.marquee1 {
		height: 60px;
		align-items: center;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	.marquee_title1 {
		display: flex;
		height: 12px;
		line-height: 12px;
		font-size: 6px;
		text-align: center;
		background: #0C4474;
		color: #fff;
		span {
			flex: 1;
		}
	}
	
	.marquee_box1 {
		display: block;
		position: relative;
		height: 48px;
		overflow: hidden;
	}
	
	.marquee_list1 {
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}
	
	.marquee_top1 {
		transition: all 0.5s;
		margin-top: -12px;
	}
	
	.marquee_list1 li {
		display: flex;
		height: 12px;
		line-height: 12px;
		font-size: 6px;
		span {
			flex: 1;
			height: 12px;
			line-height: 12px;
			font-size: 6px;
			text-align: center;
			color: #fff;
		}
	}
	
	@keyframes mymove1 {
		0% {
			transform: rotate(0) scale(1)
		}
		50% {
			transform: rotate(360deg) scale(1.1)
		}
		100% {
			transform: rotate(0deg) scale(1)
		}
	}
	
	@keyframes mymove2 {
		0% {
			transform: rotate(0)
		}
		50% {
			transform: rotate(-120deg)
		}
		100% {
			transform: rotate(0deg)
		}
	}
	
	@keyframes mymove3 {
		0% {
			transform: rotate(0)
		}
		50% {
			transform: rotate(-180deg)
		}
		100% {
			transform: rotate(0deg)
		}
	}
	
	@keyframes mymove4 {
		0% {
			transform: rotate(0) scale(1)
		}
		50% {
			transform: rotate(-360deg) scale(1.1)
		}
		100% {
			transform: rotate(0deg) scale(1)
		}
	}
	
	@keyframes mymove5 {
		0% {
			transform: rotate(0)
		}
		100% {
			transform: rotate(360deg)
		}
	}
	
	@keyframes mymove6 {
		0% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(0.85);
			opacity: 0.5;
		}
		100% {
			transform: scale(1);
			opacity: 1;
		}
	}
	/*#investment>div>canvas:hover{
        cursor: url('../../assets/imgs/Arrow.png'),auto !important;
	}*/
	.contBottom {
		box-sizing: border-box;
		width: 960px;
		height: 110px;
		padding: 0 10px;
		position: absolute;
		top: 420px;
		left: 0;
		display: flex;
		justify-content: space-around;	
		color: #28b2fa;	
        .project {
            background: url('../../assets/imgs/title_bg@2x.png')no-repeat;
		    background-size: 100% 100%;
			width: 100%;
			.projectBox {
				width: 213px;
				height: 100px;
				float: left;
				text-align: center;
				border: 1px solid #28b2fa;
				border-radius: 8px;
				margin: 10px;
				.projectCon {
					padding: 10px;
					.projectNum {
						margin-top: 4px;
					}
				}
			}
		}
	}
  
	.finance_box_title {
    height: 16px;
		margin-top:4px;
		background: url('../../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
		background-size: 100% 100%;
		text-align: left;
		line-height: 16px;
		font-size: 8px;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: rgba(40, 178, 250, 1);
		text-align: center;
	}
	.finance_content_left {
		float: left;
		width: 40px;
		height: 40px;
	}
	.finance_box {
		margin-bottom:20px;
	}
	.finance_content_right {
		display: inline-block;
		margin-left: 8px;
		width: 40px;
		height: 40px;
	}
	.finance_content_title {
		font-size: 8px;
		text-align: center;
		padding:6px 0;
		color: #28b2fa;
	}
	.finance_content_num {
		text-align: center;
    padding:6px 0;
		color: #28b2fa;
		font-family: LED;
	}
	.finance_right {
		.trouble_box {
			width: 100%;
			margin-left: 10px;
			margin-top: 15px;
			.trouble_title {
				height: 16px;
				line-height: 16px;
				margin-bottom: 12px;
				font-size: 7px;
				text-align: center;
				background: url('../../assets/imgs/ny_gz_bg@2x.png') no-repeat;
				background-size: 100% 100%;
				color: #62AFDF;
			}
			.trouble_content {
				display: flex;
				align-items: center;
				height: 27px;
				margin-top: 3px;
				line-height: 27px;
				font-size: 12px;
				text-align: center;
				background: url('../../assets/imgs/ny_gz_frame@2x.png') no-repeat;
				background-size: 100% 100%;
				color: #FA2828;
				p {
					flex: 1;
					height: 14px;
					line-height: 14px;
				}
				.trouble_count {
					border-right: 1px solid #229CDD;
				}
			}
		}
	}
	
</style>