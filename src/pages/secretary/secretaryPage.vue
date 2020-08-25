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
						<div class="more" @click="more1()">详情</div>
					</div>
					<!-- 总面积 -->
					<div class="finance_box">
					  <div class="finance_top">
						  <table>
							  <tr>
								  <td width="60px"></td>
									<td width="80px"><span class="bg_financetop">合同金额</span></td>
									<td width="80px"><span class="bg_financetop">营业收入</span></td>
									<td width="80px"><span class="bg_financetop">利润</span></td>
								</tr>
								<tbody>
									<tr>
										<td>完成额</td>
										<td>25<span>亿</span></td>
										<td>28<span>亿</span></td>
										<td>3.0<span>亿</span></td>
									</tr>
									<tr >
										<td>年度计划</td>
										<td>30<span>亿</span></td>
										<td>32<span>亿</span></td>
										<td>3.2<span>亿</span></td>
									</tr>
								</tbody>
							</table>
							<div id="investment" class="financeEchart" ref="investment"></div>
						</div>
						<div class="finance_bottom">
						  <div class="finbottom-box">
							  <div class="finbottom-title" style="color:#74FC2C">两金</div>
								<div class="finbottom-chart">
								  <div id="financeChart1" class="financeChart1" ref="financeChart1"></div>
								</div>
							</div>
							<div class="finbottom-box">
							  <div class="finbottom-title" style="color:#F2B753">两控</div>   
							  <div class="finbottom-chart">
								  <div id="financeChart2" class="financeChart1" ref="financeChart2"></div>
								</div>
							</div>
							<div class="trouble_box">
								<div class="trouble_title">一治一快</div>
								<div class="trouble_content">
									<p class="trouble_count">3000<span>万</span></p>
									<p>8000<span>万</span></p>
								</div>
							</div>								
						</div>
					</div>
				</div>	
			</div>

			<!-- map -->
			<div class="property">
				<div class="property_top">
					<div class="property-topbox"></div>
					<div class="property-mapbox">
					  <div class="point-sichuan" @click="showPoint1"></div>
						<div v-show="point1" @click="closePoint1" class="popup">
						  <div class="sichuan">
							  <div class="point-title">四川省</div>
								<div class="point-box">
								  <div class="pointbox-cont">
									  <div class="cont-title">市场估值:</div>
									  <div class="cont-num"><span>30</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">目前在建:</div>
									  <div class="cont-num"><span>12</span>亿</div>
									</div>
									<div class="pointbox-cont">
									  <div class="cont-title">预计投标:</div>
									  <div class="cont-num"><span>09</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">利润分析:</div>
									  <div class="cont-num"><span></span>偏高</div>
									</div>
								</div>
							</div>
						</div>
						<div class="point-chongqing" @click="showPoint2"></div>
						<div v-show="point2" @click="closePoint2" class="popup">
						  <div class="chongqing">
								<div class="point-title">重庆市</div>
								<div class="point-box">
								  <div class="pointbox-cont">
									  <div class="cont-title">市场估值:</div>
									  <div class="cont-num"><span>3</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">目前在建:</div>
									  <div class="cont-num"><span>2</span>亿</div>
									</div>
									<div class="pointbox-cont">
									  <div class="cont-title">预计投标:</div>
									  <div class="cont-num"><span>0.9</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">利润分析:</div>
									  <div class="cont-num"><span></span>适中</div>
									</div>
								</div>
							</div>
						</div>
						<div class="point-guizhou" @click="showPoint3"></div>
						<div v-show="point3" @click="closePoint3" class="popup">
						  <div class="guizhou">
							  <div class="point-title">贵州省</div>
								<div class="point-box">
								  <div class="pointbox-cont">
									  <div class="cont-title">市场估值:</div>
									  <div class="cont-num"><span>30</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">目前在建:</div>
									  <div class="cont-num"><span>12</span>亿</div>
									</div>
									<div class="pointbox-cont">
									  <div class="cont-title">预计投标:</div>
									  <div class="cont-num"><span>09</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">利润分析:</div>
									  <div class="cont-num"><span></span>偏高</div>
									</div>
								</div>
							</div>
						</div>
						<div class="point-yunnan" @click="showPoint4"></div>
						<div v-show="point4" @click="closePoint4" class="popup">
						  <div class="yunnan">
							  <div class="point-title">云南省</div>
								<div class="point-box">
								  <div class="pointbox-cont">
									  <div class="cont-title">市场估值:</div>
									  <div class="cont-num"><span>30</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">目前在建:</div>
									  <div class="cont-num"><span>12</span>亿</div>
									</div>
									<div class="pointbox-cont">
									  <div class="cont-title">预计投标:</div>
									  <div class="cont-num"><span>09</span>亿</div>
									</div>
									<div class="cont-fill"></div>
									<div class="pointbox-cont">
									  <div class="cont-title">利润分析:</div>
									  <div class="cont-num"><span></span>偏高</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- 企业管理 -->
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
							<div class="count">四川<span>1.2亿</span></div>
							<div class="count">云南<span>9000万</span></div>
							<div class="count">重庆<span>8000万</span></div>
							<div class="count">贵州<span>1.05亿</span></div>
						</div>
						<div class="rightEchars1 rightEchars" id="areaEcharts" ref="areaEcharts"></div>
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
						<div class="rightEchars2 rightEchars" id="untilEcharts" ref="untilEcharts"></div>
					</div>
					<div class="allArea">
						<div class="leftCount">
							<div class="areaTitle">
								<img src="../../assets/imgs/tourongz_icon_zsbk@2x.png" alt="">
								<span>板块产值</span>
							</div>
							<div class="count">市政<span>1.4亿</span></div>
							<div class="count">水利<span>1.15亿</span></div>
							<div class="count">环保<span>1.05亿</span></div>
							<div class="count">其他<span>3500万</span></div>
						</div>
						<div class="rightEchars3 rightEchars" id="plateEcharts" ref="plateEcharts"></div>
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

	import Swiper from "@/components/swiper/swiper.vue"
	import Head from '@/components/head/head.vue';
	import echarts from 'echarts'
	import 'echarts/map/js/province/sichuan.js'
    import "echarts-gl"
	export default {
		name: 'secretary',
		data() {
			return {
				pageInfo: 'secretary',
				point1: 0,
                point2: 0,
				point3: 0,
				point4: 0,
				title: "智慧西南",
				tableDate: [],
				animate1: false,
				animate: false,
                slide:[1,2,3,4,5],
				ideaTable: [{
						"unit": "3月",
						"endTime": "3000万",
					},
					{
						"unit": "4月",
						"endTime": "1.2亿",
					},
					{
						"unit": "5月",
						"endTime": "1.5亿",
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
		// created: function() {
		// 	that = this
		// },
		mounted() {
			this.getPageInfo()
			this.financeChart1()
			this.financeChart2()
			this.investment()
			this.areaEcharts()
			this.untilEcharts()
			this.plateEcharts()
			this.mapEcharts()	
		},
		methods: {
			getPageInfo() {
				this.$emit('postChildInfo',this.pageInfo);
			},
			//地图弹窗
			showPoint1() {
				this.point1 = 1;
			},
			closePoint1() {
				this.point1 = 0;
				console.log('关闭11111111',this.point1);
			},
			showPoint2() {
				this.point2 = 1;
			},
			closePoint2() {
				this.point2 = 0;
			},
			showPoint3() {
				this.point3 = 1;
			},
			closePoint3() {
				this.point3 = 0;
			},
			showPoint4() {
				this.point4 = 1;
			},
			closePoint4() {
				this.point4 = 0;
			},
			toPages(path) {
				this.$router.push({
					path: path
				});
			},
			more1() {
				this.$router.push({path: '/backsystem/index'});
			},
			financeChart1() {
				var bar = this.$refs.financeChart1;
				if(bar){
				let myChart = this.$echarts.init(bar);
			    myChart.setOption({
					title: {
						show: false,
					},
					color:['#0C406F','#78FD30'],
					tooltip: {
						trigger: 'axis',
						formatter: function(params) {
							// return that.dataObj[params[0].name] + "-" + params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + " 个"
							return params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + "亿元"

						},
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b}:{c}'
					},
					series:{
						name: '两金',
						type: 'pie',
						radius: [15,30],
						center:['50%','50%'],
						//roseType: 'radius',
						//startAngle: 130,
						label: {
							formatter: '{b|{b}}{abg|}\n{hr|}\n{c}亿元',
							position: 'outside',
							rich: {
								b: {
									color: '#fff',
									fontSize: 10,
									lineHeight: 12,
									align: 'left'
								},
                c: {
									fontSize: 10,
									lineHeight: 10,
									align: 'left'
								}
							},
						},
						labelLine: {
							show: false,
							length: 2,
							length2: 4,
						},
						emphasis: {
							label: {
								show: true
							}
						},
						data: [
							{
								value: 3.5,
								name: '存货'
							},
							{
								value: 0.5,
								name: '应收账款'
							},
						]
					}
				})
				}
			},
			financeChart2() {
				var bar = this.$refs.financeChart2;
				if(bar){
				let myChart = this.$echarts.init(bar);
			    myChart.setOption({
					title: {
						show: false,
					},
					color:['#0C406F','#F2B753'],
					tooltip: {
						trigger: 'item',
						formatter: '{a}<br/>{b}:{c}({d}%)'
					},
					series:{
						name: '两控',
						type: 'pie',
						radius: [15,30],
						center:['50%','50%'],
						//roseType: 'area',
						labelLine: {
							show: false,
							length: 2,
							length2: 4,
						},
						emphasis: {
							label: {
								show: true
							}
						},
						//startAngle: 130,
						label: {
							formatter: '{b|{b}}{abg|}\n{hr|}\n{c}万',
							position: 'outside',
							rich: {
								b: {
									color: '#fff',
									fontSize: 10,
									lineHeight: 12,
									align: 'left'
								},
                c: {
									fontSize: 8,
									lineHeight: 10,
									align: 'left'
								}
							},
							distanceToLabelLine: 1
						},
						data: [
							{
								value: 8000,
								name: '成本费用'
							},
							{
								value: 1700,
								name: '资产负债'
							},
						]
					}
				})
				}
			},
			investment() {
				var bar = this.$refs.investment;
				if(bar){
				let myChart = this.$echarts.init(bar);
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
						height: '100px',
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
							fontSize: 12,
						    interval:0,//代表显示所有x轴标签显示
						},
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
							data: [25,28,3.0],
							barMaxWidth: '15%',
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#1BA0FD'
											},
											{
												offset: 1,
												color: '#071C38'
											}
										]
									)
								},
							},
						},
						{
							name: '年度计划',
							type: 'bar',
							data: [30,32,3.2],
							barMaxWidth: '15%',
							itemStyle: {
								normal: {
									color: new echarts.graphic.LinearGradient(
										0, 0, 0, 1, [{
												offset: 0,
												color: '#071F3A'
											},
											{
												offset: 1,
												color: '#0A3363'
											}
										]
									)
								},
							},
					  }
					]
				})
				}
			},
			mapEcharts() {
				var bar = this.$refs.mapEchart;
				if(bar){
				let myChart = this.$echarts.init(bar);
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
			  }
			},
			//面积
			areaEcharts() {
				var bar = this.$refs.areaEcharts;
				if(bar){
				let myChart = this.$echarts.init(bar);
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
						top: '22%',
						left: '2%',
						right: '8%',
						bottom: '1%',
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
						data: [1.2, 0.9, 0.8, 1.05],
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
				}
			},
			// 到期提醒
			untilEcharts() {
				var bar = this.$refs.untilEcharts;
				if(bar){
				let myChart2 = this.$echarts.init(bar);
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
						top: '22%',
						left: '2%',
						right: '8%',
						bottom: '1%',
						containLabel: true
					},
					tooltip: {
						trigger: 'axis',
						formatter: function(params) {
							// return that.dataObj[params[0].name] + "-" + params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + " 个"
							return params[0].name + "<br>" + params[0].seriesName + ": " + params[0].data + "亿元"

						},
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
						name: '月度产值',
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
						data: ['1.6', '0.4', '0.3', '1.2', '1.5', '1.4', '1.6', '1.4']
					}]
				});
				}
			},
			plateEcharts() {
				var bar = this.$refs.plateEcharts;
				if(bar){
				let myChart3 = this.$echarts.init(bar);
				myChart3.setOption({
					title: {
						show: false
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b} : {c} ({d}%)'
					},
					legend: {
						bottom: 5,
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
							center: ['50%', '50%'],
							selectedMode: 'single',
							label: {
                                show: false
							},
							data: [
								{
									value: 1.15,
									name: '水利',
								},
								{value: 1.4, name: '市政'},
								{value: 1.05, name: '环保'},
								{value: 0.35, name: '其他'},
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
				}
			}
		},
	}
</script>

<style scoped lang="scss">
	.hello {
		background-image: url('../../assets/app_bg.jpg');
		width: 100vw;
		height:100vh;
		background-size: 100% 100%;
		position: relative;
	}
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
			flex: 1;
			.property_top {
				position: relative;
				width: 100%;
				height: 450px;
				.property-topbox {
					width: 430px;
					height: 60px;
					margin: 0 auto;
					background-image: url('../../assets/imgs/new/img_maptop.png');
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-position: 0 0;
				}
				.property-mapbox {
					width: 340px;
					height: 280px;
					margin: 20px auto;
					background-image: url('../../assets/imgs/new/img_map.png');
					background-repeat: no-repeat;
					background-size: 100% 100%;
					background-position: 0 0;
					.point-sichuan {
						cursor: pointer;
						width: 20px;
						height: 20px;
						position: relative;
						top: 56px;
						left: 140px;
					}
					.point-title {
                        width: calc(100% - 32px);
						height: 30px;
						margin-left: 16px;
						font-size: 10px;
						font-weight: bold;
						color:rgba(89,224,255,1);
						line-height:34px;
						background:linear-gradient(0deg,rgba(142,246,255,0.63) 0%, rgba(1,238,254,0.63) 100%);
						-webkit-background-clip: text;
						-webkit-text-fill-color: transparent;
						border-bottom: 1px solid rgba(7,143,206,0.2);
						float: left;
					}
					.point-box {
						width: calc(100% - 32px);
						height: 40px;
						margin-top: 6px;
						margin-left: 16px;
						float: left;
						.cont-fill {
							width: 6%;
							height: 20px;
							float: left;
						}		
						.pointbox-cont {
							width: 47%;
							height: 20px;
							float: left;							
							.cont-title {
                                width: 60%;
								height: 20px;
								line-height: 20px;
								float: left;
								font-size: 8px;
								text-align: left;
							}
							.cont-num {
								width: 40%;
								height: 20px;
								line-height: 20px;
								float: left;
								color: #01EEFE;
								font-size: 8px;
								text-align: left;
								color:rgba(255,255,255,1);							
								background:linear-gradient(0deg,rgba(142,246,255,0.63) 0%, rgba(1,238,254,0.63) 100%);
								-webkit-background-clip:text;
								-webkit-text-fill-color:transparent;
								span {
									font-family: LED;
									font-size: 16px;
									line-height:12px;
								}
							}
						}
					}
					.popup {
						.sichuan {
							cursor: pointer;
                            left: 540px;
						    top: 230px;
							position: fixed;						
							width: 160px;
							height: 100px;
							background-image: url('../../assets/imgs/new/bg_popup.png');
							background-repeat: no-repeat;
							background-size: 100% 100%;
							background-position: 0 0;
							transform: translate(-50%, -50%);
							z-index: 1000;
						}
						.chongqing {
							cursor: pointer;
							left: 650px;
						    top: 250px;
							position: fixed;					
							width: 160px;
							height: 100px;
							background-image: url('../../assets/imgs/new/bg_popup.png');
							background-repeat: no-repeat;
							background-size: 100% 100%;
							background-position: 0 0;
							transform: translate(-50%, -50%);
							z-index: 1000;
						}
						.guizhou {
							cursor: pointer;
                            left: 636px;
						    top: 296px;
							position: fixed;						
							width: 160px;
							height: 100px;
							background-image: url('../../assets/imgs/new/bg_popup.png');
							background-repeat: no-repeat;
							background-size: 100% 100%;
							background-position: 0 0;
							transform: translate(-50%, -50%);
							z-index: 1000;
						}
						.yunnan {
							cursor: pointer;
							left: 506px;
						    top: 342px;
							position: fixed;					
							width: 160px;
							height: 100px;
							background-image: url('../../assets/imgs/new/bg_popup.png');
							background-repeat: no-repeat;
							background-size: 100% 100%;
							background-position: 0 0;
							transform: translate(-50%, -50%);
							z-index: 1000;
						}
					}
					.point-chongqing {
						cursor: pointer;
						width: 20px;
						height: 20px;
						position: relative;
						top: 56px;
						left: 252px;
					}
					.point-guizhou {
						cursor: pointer;
						width: 20px;
						height: 20px;
						position: relative;
						top: 84px;
						left: 236px;
					}
					.point-yunnan {
						cursor: pointer;
						width: 20px;
						height: 20px;
						position: relative;
						top: 108px;
						left: 108px;
					}
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
			.finance_box {
				.finance_bottom {
					width: 100%;
					height: 120px;
					margin-top: 10px;
					.trouble_box {
						width: 90%;
						height: 22px;
						background: #f00;
						float: left;
						margin-left: 5%;
						margin-top: 20px;
						background: url('../../assets/imgs/ny_gz_frame@2x.png') no-repeat;
						background-size: 100% 100%;
						.trouble_title {
							width: 33%;
							height: 22px;
							float: left;
							line-height: 22px;
							text-align: center;
							font-size: 10px;
						}
						.trouble_content {
							width: 62%;
							height: 14px;
							line-height: 16px;
							margin-top: 3.5px;
              float: left;
							background: #0A3363;
							font-size: 16px;
							font-family: LED;
							color: #7DCFFF;
							.trouble_count {
								border-right: 1px solid #229CDD;
								width: 49%;
								height:14px;
								float: left;
								text-align: center;
							}
							p {
								width: 50%;
								text-align: center;
								float: left;
								span {
									font-size: 10px;
								}
							}
						}
					}
					.finbottom-box {
						width: 50%;
						height: 100px;
						float:left;
						.finbottom-chart {
							width: 100%;
							height: 90px;
							.financeChart1 {
								width: 100%;
								height: 80px;
								display: flex;
								margin-top: 4px;
								
								justify-content: center;
							}
						}
						.finbottom-title {
							width: 36px;
							height: 18px;
              margin: 0 auto;
							margin-top: 10px;
							font-size: 10px;
							text-align: center;
							line-height: 18px;
							background: url('../../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
		          background-size: 100% 100%;
						}
					}
				}
        .finance_top {
					width: 100%;
          .financeEchart {
						width: 100%;
						height: 80px;
						display: flex;
						margin-top: 4px;
						justify-content: center;
					}
					table{
						width: 100%;
						tbody tr {
							td:nth-child(1) {
								text-align: right;
								font-size: 8px;
							}
							td:nth-child(2),td:nth-child(3),td:nth-child(4) {
								text-align: center;
								font-size: 16px;
								font-family: LED;
								color: #44BAFF;
								span {
									font-size: 10px;
								}
							}
						}
						tr {
							height: 24px;
							font-size: 10px;
							td {
								.bg_financetop {
									width: 90%;
									display: inline-block;
									text-align:center;
									padding: 2px 0;
									background: url('../../assets/imgs/wy_bottom_frame@2x.png') no-repeat;
		              background-size: 100% 100%;
								}
							}
						}
					}
				}
			}
		}
		.title {
			width: 220px;
			height: 8px;
			line-height: 8px;
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
			.more {
				position: absolute;
				top: -6px;
				left: 200px;
				color: blue;
				cursor: pointer;
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
				padding-left:28px;
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
									.water_box_txt1 {
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