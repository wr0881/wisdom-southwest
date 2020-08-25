<template>
    <div class="safety">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>
        <div class="container">
            <div class="cont-box">
                <div class="conttop-box">
                    <div class="conttop-box1">
                        <div class="">
                            <div class="contbox-title">安全设备</div>
                            <div class="data-build">
                                <table style="width:100%">
                                    <tr class="icon-build" style="height:20px;">
                                        <td width="20px">&nbsp;</td>
                                        <td width="30px">&nbsp;</td>
                                        <td width="50px">施工数量</td>
                                        <td width="40px">总数量</td>
                                        <td width="150px">执行率</td>
                                    </tr>
                                    <tr style="height:20px;">
                                        <td><span class="icon-equipment"></span></td>
                                        <td>设备</td>
                                        <td class="data-detail">40</td>
                                        <td class="data-detail">100</td>
                                        <td class="detail-progress">
                                            <el-progress :percentage="40" :stroke-width="8"></el-progress>
                                        </td>
                                    </tr>
                                    <tr style="height:20px;">
                                        <td><span class="icon-person"></span></td>
                                        <td>人员</td>
                                        <td class="data-detail">70</td>
                                        <td class="data-detail">100</td>
                                        <td class="detail-progress">
                                            <el-progress :percentage="70" :stroke-width="8"></el-progress>
                                        </td>
                                    </tr>                                   
                                </table>
                            </div>
                        </div>
                        <div>
                            <div class="contbox-title1">
                                <ul>
                                    <li v-for="(item,index) in safetyList" @click="changeSafety(index)" :class="{active:tabsafety==index}" :key="index">{{item.title}}</li>
                                </ul>
                            </div>
                            <div class="leftbox-cont" v-show="tabsafety==0">
                                <div class="tabs-week">
                                    <ul>
                                        <li v-for="(item,index) in tabsweekList" @click="changeWeek(index)" :class="{active:tabsweek==index}" :key="index">{{item.name}}</li>
                                    </ul>
                                </div>
                                <div class="danger-chart" v-show="tabsweek==0" ref="dangerChart1"></div>
                                <div class="danger-chart" v-show="tabsweek==1" ref="dangerChart2"></div>
                                <div class="tabs-statistics">
                                    <ul>
                                        <li v-for="(item,index) in tabsstatList" @click="changeStat(index)" :class="{active:tabsstat==index}" :key="index">{{item.name}}</li>
                                    </ul>
                                </div>
                                <div class="safe-progress-cont" v-show="tabsstat==0">
                                    <div class="safe-progress-statistics statistics1">
                                        <div class="statistics-title">已发生:</div>
                                        <div class="statistics-num" style="color:#FFFC00">100&nbsp;<span>次</span></div>
                                    </div>
                                    <div class="safe-progress-box">
                                        <el-progress type="circle" color="#FFFC00" :percentage="91" :stroke-width="9" :width="112"></el-progress>
                                    </div>
                                    <div class="safe-progress-statistics statistics2">
                                        <div class="statistics-title">已处理:</div>
                                        <div class="statistics-num" style="color:#FFFC00">50&nbsp;<span>次</span></div>
                                    </div>
                                </div>
                                <div class="safe-progress-cont" v-show="tabsstat==1">
                                    <div class="safe-progress-statistics statistics1">
                                        <div class="statistics-title">已发生:</div>
                                        <div class="statistics-num" style="color:#FFFC00">4&nbsp;<span>次</span></div>
                                    </div>
                                    <div class="safe-progress-box">
                                        <el-progress type="circle" color="#FFFC00" :percentage="100" :stroke-width="9" :width="112"></el-progress>
                                    </div>
                                    <div class="safe-progress-statistics statistics2">
                                        <div class="statistics-title">已处理:</div>
                                        <div class="statistics-num" style="color:#FFFC00">4&nbsp;<span>次</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="leftbox-cont" v-show="tabsafety==1">
                                <div class="safety-table">
                                    <Table
                                        :columns="safetyColumns"
                                        :data="safetyData"
                                    >
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="conttop-box2">
                        <safety-map />
                    </div>
                    <div class="conttop-box1" style="float:right">
                        <div>
                            <div class="contbox-title">培训&会议</div>
                            <div class="tabs-meeting">
                                <ul>
                                    <li v-for="(item,index) in meetingList" @click="changeMeeting(index)" :class="{active:tabsmeeting==index}" :key="index">{{item.name}}</li>
                                </ul>
                            </div>
                            <div class="leftbox-cont meeting-box">
                                <div class="safe-progress-cont" v-show="tabsmeeting==0">
                                    <div class="safe-progress-statistics statistics1">
                                        <div class="statistics-title">计划开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">25&nbsp;<span>次</span></div>
                                    </div>
                                    <div class="safe-progress-box">
                                        <el-progress type="circle" color="#71FDC3" :percentage="92" :stroke-width="9" :width="112"></el-progress>
                                    </div>
                                    <div class="safe-progress-statistics statistics2">
                                        <div class="statistics-title">已开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">23&nbsp;<span>次</span></div>
                                    </div>
                                </div>
                                <div class="safe-progress-cont" v-show="tabsmeeting==1">
                                    <div class="safe-progress-statistics statistics1">
                                        <div class="statistics-title">计划开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">4&nbsp;<span>次</span></div>
                                    </div>
                                    <div class="safe-progress-box">
                                        <el-progress type="circle" color="#71FDC3" :percentage="100" :stroke-width="9" :width="112"></el-progress>
                                    </div>
                                    <div class="safe-progress-statistics statistics2">
                                        <div class="statistics-title">已开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">4&nbsp;<span>次</span></div>
                                    </div>
                                </div>
                                <div class="safe-progress-cont" v-show="tabsmeeting==2">
                                    <div class="safe-progress-statistics statistics1">
                                        <div class="statistics-title">计划开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">25&nbsp;<span>次</span></div>
                                    </div>
                                    <div class="safe-progress-box">
                                        <el-progress type="circle" color="#71FDC3" :percentage="92" :stroke-width="9" :width="112"></el-progress>
                                    </div>
                                    <div class="safe-progress-statistics statistics2">
                                        <div class="statistics-title">已开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">23&nbsp;<span>次</span></div>
                                    </div>
                                </div>
                                <div class="safe-progress-cont" v-show="tabsmeeting==3">
                                    <div class="safe-progress-statistics statistics1">
                                        <div class="statistics-title">计划开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">4&nbsp;<span>次</span></div>
                                    </div>
                                    <div class="safe-progress-box">
                                        <el-progress type="circle" color="#71FDC3" :percentage="100" :stroke-width="9" :width="112"></el-progress>
                                    </div>
                                    <div class="safe-progress-statistics statistics2">
                                        <div class="statistics-title">已开展:</div>
                                        <div class="statistics-num" style="color:#71FDC3">4&nbsp;<span>次</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="contbox-title1">
                                <ul>
                                    <li v-for="(item,index) in inspectList" @click="changeInspect(index)" :class="{active:tabsinspect==index}" :key="index">{{item.name}}</li>
                                </ul>
                            </div>
                            <div class="inspect-table" v-show="tabsinspect==0">
                                <Table
                                    :columns="inspectColumns"
                                    :data="inspectData"
                                ></Table>
                            </div>
                            <div class="inspect-table" v-show="tabsinspect==1">
                                <div class="top-inspect">
                                    <div class="inspect-chart" ref="inspectChart"></div>
                                    <div class="inspect-legend">
                                        <ul>
                                            <li><span style="background-color:#55E8AB"></span>人的不安全：9</li>
                                            <li><span style="background-color:#29AED8"></span>物的不安全：10</li>
                                            <li><span style="background-color:#FFA800"></span>管理原因：15</li>
                                            <li><span style="background-color:#1A65E5"></span>其他：16</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="bottom-inspect">
                                    <ul>
                                        <li><span>顶板夹渣处理措施</span><div class="progress-inspect"><el-progress :percentage="50" color="#1D6FFF" :stroke-width="8"></el-progress></div></li>
                                        <li><span>楼板裂缝处理措施</span><div class="progress-inspect"><el-progress :percentage="70" color="#1D6FFF" :stroke-width="8"></el-progress></div></li>
                                        <li><span>墙体开裂处理措施</span><div class="progress-inspect"><el-progress :percentage="40" color="#1D6FFF" :stroke-width="8"></el-progress></div></li>
                                        <li><span>墙体露筋处理措施</span><div class="progress-inspect"><el-progress :percentage="50" color="#1D6FFF" :stroke-width="8"></el-progress></div></li>
                                        <li><span>混凝土错台处理措施</span><div class="progress-inspect"><el-progress :percentage="30" color="#1D6FFF" :stroke-width="8"></el-progress></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contbottom-box">
                    <div class="safety-swiper">
                        <swiper :options="swiperOption" ref="safetySwiper">
                            <swiper-slide v-for="(item,index) in safeSwiperList" :key="index">
                                <div class="swiper-box">
                                    <div class="swiper-box1">
                                        <div class="img1-swiper"><img :src="item.imgUrl1" alt="" /></div>
                                        <div class="img2-swiper"><img :src="item.imgUrl2" alt="" /></div>
                                        <div class="title-swiper">{{item.name1}}</div>
                                    </div>
                                </div>
                                <div class="swiper-box">
                                    <div class="swiper-box1">
                                        <div class="img1-swiper"><img :src="item.imgUrl3" alt="" /></div>
                                        <div class="img2-swiper"><img :src="item.imgUrl4" alt="" /></div>
                                        <div class="title-swiper">{{item.name2}}</div>
                                    </div>
                                </div>
                                <div class="swiper-box">
                                    <div class="swiper-box1">
                                        <div class="img1-swiper"><img :src="item.imgUrl5" alt="" /></div>
                                        <div class="img2-swiper"><img :src="item.imgUrl6" alt="" /></div>
                                        <div class="title-swiper">{{item.name3}}</div>
                                    </div>
                                </div>
                            </swiper-slide>
                            <div
                                class="swiper-button-prev"
                                slot="button-prev"
                            ></div>
                            <div
                                class="swiper-button-next"
                                slot="button-next"
                            ></div>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
import SafetyMap from './map';
export default {
    name: 'safety',
    data() {
        return {
            pageInfo: 'safety',
            current: 0,

            tabsafety: 0,
            safetyList: [
                {
                    title: '隐患趋势分析'
                },
                {
                    title: '安全考核'
                }
            ],
            tabsweek: 0,
            tabsweekList: [
                {
                    name: '周'
                },
                {
                    name: '月'
                }
            ],
            tabsstat: 0,
            tabsstatList: [
                {
                    name: '隐患统计'
                },
                {
                    name: '事故统计'
                }
            ],
            tabsmeeting: 0,
            meetingList: [
                {
                    name: '三级教育培训'
                },
                {
                    name: '安全活动'
                },
                {
                    name: '安全会议'
                },
                {
                    name: '安全技术交流'
                }
            ],
            tabsinspect: 0,
            inspectList: [
                {
                    name: '风险源检查'
                },
                {
                    name: '隐患及整改'
                }
            ],
            inspectColumns: [
                {
                    title: '风险源',
                    key: 'risk',
                    width: '132px'
                },
                {
                    title: '已检查(处)',
                    key: 'checked',
                    width: ''
                },
                {
                    title: '总数(处)',
                    key: 'total',
                    width: ''
                },
                {
                    title: '待处理(处)',
                    key: 'pending',
                    width: ''
                },
                {
                    title: '情况',
                    key: 'situation',
                    width: '',
                    render: (h, params) => {
                        let situation = params.row.situation;
                        let qk = "";
                        if(situation == 0) {
                            qk = "极差"
                            return h('span', {
                                style: {
                                    color: '#FF0000'
                                }
                            },qk)
                        }else if(situation == 1) {
                            qk = "差"
                            return h('span', {
                                style: {    
                                    color: '#FF9600'
                                }
                            },qk)
                        }else if(situation == 2) {
                            qk = "好"
                            return h('span', {
                                style: {
                                    color: '#00FF90'
                                }
                            },qk)
                        }
                    }
                },
            ],
            inspectData: [
                {
                    risk: '临时施工用电',
                    checked: 55,
                    total: 70,
                    pending: 15,
                    situation: 2,
                },
                {
                    risk: '机械伤害',
                    checked: 10,
                    total: 60,
                    pending: 50,
                    situation: 1,
                },
                {
                    risk: '高处坠落及临边作业',
                    checked: 60,
                    total: 80,
                    pending: 20,
                    situation: 2,
                },
                {
                    risk: '承重支模架搭设',
                    checked: 0,
                    total: 40,
                    pending: 40,
                    situation: 0,
                },
                {
                    risk: '深基坑',
                    checked: 50,
                    total: 60,
                    pending: 10,
                    situation: 2,
                },
                {
                    risk: '火灾事故',
                    checked: 30,
                    total: 80,
                    pending: 50,
                    situation: 1,
                },
                {
                    risk: '土方爆破作业',
                    checked: 33,
                    total: 40,
                    pending: 7,
                    situation: 2,
                },
            ],
            safetyColumns: [
                {
                    title: '招标标段',
                    key: 'bidSection',
                    width: '202px'
                },
                {
                    title: '打分',
                    key: 'scoring',
                    width: ''
                },
                {
                    title: '责任人',
                    key: 'liable',
                    width: ''
                },
                {
                    title: '排名',
                    key: 'ranking',
                    width: ''
                }
            ],
            safetyData: [
                {
                    bidSection: '锦江截污干管项目1标段',
                    scoring: 98,
                    liable: '李小峰',
                    ranking: 1
                },
                {
                    bidSection: '锦江水生态治理项目2标段',
                    scoring: 99,
                    liable: '赵羽',
                    ranking: 2
                },
                {
                    bidSection: '锦江绿道项目3标段',
                    scoring: 100,
                    liable: '陈浩',
                    ranking: 1
                },
                {
                    bidSection: '锦江截污干管项目1标段',
                    scoring: 98,
                    liable: '李小峰',
                    ranking: 3
                },
                {
                    bidSection: '锦江水生态治理项目2标段',
                    scoring: 99,
                    liable: '赵羽',
                    ranking: 2
                },
                {
                    bidSection: '锦江绿道项目3标段',
                    scoring: 100,
                    liable: '陈浩',
                    ranking: 1
                },
                {
                    bidSection: '锦江水生态治理项目2标段',
                    scoring: 98,
                    liable: '赵羽',
                    ranking: 3
                },
                {
                    bidSection: '锦江绿道项目3标段',
                    scoring: 99,
                    liable: '赵羽',
                    ranking: 2
                }
            ],
            swiperOption: {
                loop: true,
                speed: 3000,
                notNextTick: true,
                autoplay: true,
                preloadImages: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            safeSwiperList: [
                {
                    imgUrl1: require('../../assets/imgs/safety/swiper/img_safeswiper1.png'),
                    imgUrl2: require('../../assets/imgs/safety/swiper/img_safeswiper2.png'),
                    imgUrl3: require('../../assets/imgs/safety/swiper/img_safeswiper3.png'),
                    imgUrl4: require('../../assets/imgs/safety/swiper/img_safeswiper4.png'),
                    imgUrl5: require('../../assets/imgs/safety/swiper/img_safeswiper5.png'),
                    imgUrl6: require('../../assets/imgs/safety/swiper/img_safeswiper3.png'),
                    name1: '西南华府项目',
                    name2: '锦江一号项目',
                    name3: '成都溁树湾项目'
                },
                {
                    imgUrl1: require('../../assets/imgs/safety/swiper/img_safeswiper4.png'),
                    imgUrl2: require('../../assets/imgs/safety/swiper/img_safeswiper1.png'),
                    imgUrl3: require('../../assets/imgs/safety/swiper/img_safeswiper5.png'),
                    imgUrl4: require('../../assets/imgs/safety/swiper/img_safeswiper3.png'),
                    imgUrl5: require('../../assets/imgs/safety/swiper/img_safeswiper2.png'),
                    imgUrl6: require('../../assets/imgs/safety/swiper/img_safeswiper4.png'),
                    name1: '锦江二号项目',
                    name2: '锦江三号项目',
                    name3: '成都溁树湾二期项目'
                },
                {
                    imgUrl1: require('../../assets/imgs/safety/swiper/img_safeswiper5.png'),
                    imgUrl2: require('../../assets/imgs/safety/swiper/img_safeswiper4.png'),
                    imgUrl3: require('../../assets/imgs/safety/swiper/img_safeswiper3.png'),
                    imgUrl4: require('../../assets/imgs/safety/swiper/img_safeswiper2.png'),
                    imgUrl5: require('../../assets/imgs/safety/swiper/img_safeswiper1.png'),
                    imgUrl6: require('../../assets/imgs/safety/swiper/img_safeswiper5.png'),
                    name1: '西南华府二期项目',
                    name2: '锦江四号项目',
                    name3: '成都溁树湾三期项目'
                },
                {
                    imgUrl1: require('../../assets/imgs/safety/swiper/img_safeswiper2.png'),
                    imgUrl2: require('../../assets/imgs/safety/swiper/img_safeswiper5.png'),
                    imgUrl3: require('../../assets/imgs/safety/swiper/img_safeswiper1.png'),
                    imgUrl4: require('../../assets/imgs/safety/swiper/img_safeswiper3.png'),
                    imgUrl5: require('../../assets/imgs/safety/swiper/img_safeswiper4.png'),
                    imgUrl6: require('../../assets/imgs/safety/swiper/img_safeswiper1.png'),
                    name1: '锦江五号项目',
                    name2: '锦江六号项目',
                    name3: '成都溁树湾四期项目'
                },
                {
                    imgUrl1: require('../../assets/imgs/safety/swiper/img_safeswiper3.png'),
                    imgUrl2: require('../../assets/imgs/safety/swiper/img_safeswiper2.png'),
                    imgUrl3: require('../../assets/imgs/safety/swiper/img_safeswiper5.png'),
                    imgUrl4: require('../../assets/imgs/safety/swiper/img_safeswiper1.png'),
                    imgUrl5: require('../../assets/imgs/safety/swiper/img_safeswiper4.png'),
                    imgUrl6: require('../../assets/imgs/safety/swiper/img_safeswiper2.png'),
                    name1: '西南华府三期项目',
                    name2: '锦江七号项目',
                    name3: '成都溁树湾五期项目'
                },
            ]
        }
    },
    
    components: {
        Head,
        SafetyMap
    },
    mounted() {
        this.getPageInfo()

        this.dangerChart1()
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        changeSafety(index) {
            this.tabsafety = index;
        },
        changeWeek(index) {
            this.tabsweek = index;
            if(index === 0) {
                this.$nextTick(() => {
                    this.dangerChart1()
                })
            }else if(index === 1) {
                this.$nextTick(() => {
                    this.dangerChart2()
                })
            }
        },
        changeStat(index) {
            this.tabsstat = index;
        },
        changeMeeting(index) {
            this.tabsmeeting = index;
        },
        changeInspect(index) {
            this.tabsinspect = index;
            if(index === 1) {
                this.$nextTick(() => {
                    this.inspectChart()
                })
            }
        },
        dangerChart1() {
            let dangerchart1 = this.$refs.dangerChart1;
            if(dangerchart1) {
                let myChart = this.$echarts.init(dangerchart1);
                myChart.setOption({
                    title: {
                        text: '单位(项)',
                        show: true,
                        textStyle: {
                            color: '#89A5C0',
                            fontSize: 12,
                            fontWeight: 100
                        },
                        left: 0,
                        top: 0
                    },
                    grid: {
                        top: 30,
                        left: 0,
                        right: 10,
                        bottom: 0,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['1周','2周','3周','4周'],
                            axisLabel: {
                                fontSize: 12,
                                interval:0,//代表显示所有x轴标签显示
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#89A5C0',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 10,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '969CA4',
                                    width: 0
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            smooth: true,
                            data: [3,5,9,4],
                            itemStyle: {
                                color: '#1AA1FF'
                            },
                            areaStyle: {         
                                color: 'rgba(26,161,255,0.2)',
                            }
                        }
                    ]
                })
            }
        },
        dangerChart2() {
            let dangerchart2 = this.$refs.dangerChart2;
            if(dangerchart2) {
                let myChart = this.$echarts.init(dangerchart2);
                myChart.setOption({
                    title: {
                        text: '单位(项)',
                        show: true,
                        textStyle: {
                            color: '#89A5C0',
                            fontSize: 12,
                            fontWeight: 100
                        },
                        left: 0,
                        top: 0
                    },
                    grid: {
                        top: 30,
                        left: 0,
                        right: 10,
                        bottom: 0,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            data: ['1月','2月','3月','4月','5月','6月'],
                            axisLabel: {
                                fontSize: 12,
                                interval:0,//代表显示所有x轴标签显示
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 12,
                                    fontWeight: 400,
                                    color: '#89A5C0',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 20,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '969CA4',
                                    width: 0
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    series: [
                        {
                            type: 'line',
                            smooth: true,
                            data: [9,4,12,7,18,4],
                            itemStyle: {
                                color: '#1AA1FF'
                            },
                            areaStyle: {         
                                color: 'rgba(26,161,255,0.2)',
                            }
                        }
                    ]
                })
            }
        },
        inspectChart() {
            let inspectchart = this.$refs.inspectChart;
            if(inspectchart) {
                let myChart = this.$echarts.init(inspectchart);
                var colorList = [{
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 1,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#0E3261' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#1C6DFA' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                            offset: 0,
                            color: '#FFFF00' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#FF6D00' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 1,
                    y: 0,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: '#026BAD' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#37C6E7' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                },
                {
                    type: 'linear',
                    x: 0,
                    y: 1,
                    x2: 0,
                    y2: 0,
                    colorStops: [{
                            offset: 0,
                            color: '#17B875' // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#74FFC6' // 100% 处的颜色
                        }
                    ],
                    globalCoord: false // 缺省为 false
                }]
                var colorLine = ['#1A65E5','#FFA800','#29AED8','#55E8AB']

                function getRich() {
                    let result = {}
                    colorLine.forEach((v, i) => {
                        result[`hr${i}`] = {
                            backgroundColor: colorLine[i],
                            borderRadius: 3,
                            width: 3,
                            height: 3,
                            padding: [3, 3, 0, -12]
                        }
                        result[`a${i}`] = {
                            padding: [8, -60, -20, -20],
                            color: colorLine[i],
                            fontSize: 12
                        }
                    })
                    return result
                }
                let data = [{
                    'name': '人的不安全',
                    'value': 9
                }, {
                    'name': '物的不安全',
                    'value': 10
                }, {
                    'name': '管理原因',
                    'value': 15
                }, {
                    'name': '其他',
                    'value': 16
                }].sort((a, b) => {
                    return b.value - a.value
                })
                data.forEach((v, i) => {
                    v.labelLine = {
                        lineStyle: {
                            width: 1,
                            color: colorLine[i]
                        }
                    }
                })
                myChart.setOption({
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}:{c}({d}%)'
                    },
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        radius: '60%',
                        center: ['40%', '50%'],
                        clockwise: false,
                        avoidLabelOverlap: true,
                        startAngle: 90,
                        label: {
                            show: true,
                            position: 'outside',
                            formatter: function(params) {
                                const name = params.name
                                const percent = params.percent + '%'
                                const index = params.dataIndex
                                return [`{a${index}|${name}(${percent})}`].join('\n')
                            },
                            rich: getRich()
                        },
                        itemStyle: {
                            normal: {
                                color: function(params) {
                                    return colorList[params.dataIndex]
                                }
                            }
                        },
                        data,
                        roseType: 'radius'
                    }]
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
@mixin horn() {
    box-shadow: inset 0 0 15px #073b73;
    background: rgba(6,37,71,0.6);
    background-image: url('../../assets/imgs/safety/bg_horn1.png'),
        url('../../assets/imgs/safety/bg_horn2.png'),
        url('../../assets/imgs/safety/bg_horn3.png'),
        url('../../assets/imgs/safety/bg_horn4.png');
    background-repeat: no-repeat,no-repeat,no-repeat,no-repeat;
    background-position: top left, top right, bottom left, bottom right;
}
.safety {
    background-image: url('../../assets/app_bg.jpg');
    width: 100vw;
    height:100vh;
    background-size: 100% 100%;
    position: relative;
}
.bg-typeface {
    width: 680px;
    height: 14px;
    position: absolute;
    top: 50px;
    left: 140px;
    background-image: url('../../assets/imgs/new/bg_typeface.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
.container {
    width: 960px;
    height: 100%;
    padding: 0 10px 10px 10px;
    position: absolute;
    top: 72px;
    .cont-box {
        width: 100%;
        height: calc(100%-72px);
        .contbox-title {
            width: 60px;
            height: 20px;
            float: left;
            margin-left: 12px;
            margin-top: 12px;
            text-align: center;
            line-height: 20px;
            font-size: 9px;
            color: #86ECFF;
            background-image: url('../../assets/imgs/safety/bg_conttitle.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .inspect-table {
            width: 100%;
            height: 160px;
            float: left;
            padding: 6px 7px;
            .top-inspect {
                width: 100%;
                height: 80px;
                float: left;
                .inspect-chart {
                    width: 150px;
                    height: 80px;
                    float: left;
                }
                .inspect-legend {
                    width: 66px;
                    height: 80px;
                    float: left;
                    padding-top: 17px;
                    ul {
                        li {
                            list-style-type: none;
                            font-size: 6px;
                            height: 14px;
                            line-height: 14px;
                            span {
                                width: 5px;
                                height: 5px;
                                float: left;
                                margin-right: 6px;
                                margin-top: 4px;
                            }
                        }
                    }
                }
            }
            .bottom-inspect {
                width: 100%;
                height: 70px;
                float: left;
                padding-top: 4px;
                ul {
                    li {
                        list-style-type: none;
                        width: 100%;
                        height: 12px;
                        line-height: 12px;
                        span {
                            width: 64px;
                            height: 12px;
                            float: left;
                            text-align: right;
                            margin-right: 4px;
                        }
                        .progress-inspect {
                            width: 148px;
                            height: 10px;
                            float: left;
                            margin-top: 1.8px;
                        }
                    }
                }
            }
            //table样式修改
            >>> .ivu-table {
                font-size: 7px;
                color: #2FCCEA;
                background-color: transparent;
            }
            >>> .ivu-table-cell {
                padding-left: 0px;
                padding-right: 0px;
            }
            >>> .ivu-table th {
                height: 16px;
                background-color: transparent;
                border-bottom: 0;
                color: #fff;
                font-weight: 400;
                text-align: center;
            }
            >>> .ivu-table th:nth-child(1) {
                text-align: right;
            }
            >>> .ivu-table td {
                height: 19px;
                background-color: transparent;
                border-bottom: 0;
                text-align: center;
                color: #2FCCEA;
                font-size: 7px;
                border-bottom: 1px solid #0E2B50;
            }
            >>> .ivu-table td:nth-child(1) {
                text-align: right;
                color: #BEC8D2;
            }
            >>> .ivu-table-wrapper {
                border: 0;
            }
            >>> .ivu-table:before {
                height: 0;
            }
            >>> .ivu-table:after {
                width: 0;
            }
        }
        .contbox-title1 {
            width: 120px;
            height: 20px;
            float: left;
            margin-left: 12px;
            margin-top: 8px;
            line-height: 20px;
            background-image: url('../../assets/imgs/safety/bg_conttitle1.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            padding: 0 6px;
            ul {
                li {
                    list-style-type: none;
                    height: 10px;
                    line-height: 10px;
                    color: #3875AE;
                    font-size: 9px;
                    padding: 0px 4px;
                    margin-top: 5px;
                    float: left;
                    cursor: pointer;
                }
                li:nth-child(1) {
                    border-right: 1px solid #86ECFF;
                }
                li.active {
                    color: #86ECFF;
                    cursor: pointer;
                }
            }
        }
        .tabs-meeting {
            width: 100%;
            height: 12px;
            float: left;
            margin-top: 8px;
            padding: 0 22px;
            ul {
                li {
                    list-style-type: none;
                    height: 12px;
                    line-height: 12px;
                    padding: 0 5px;
                    float: left;
                    cursor: pointer;
                    font-size: 7px;
                }
                li.active {
                    background: #86ECFF;
                    border-radius: 2px;
                    color: #06213E;
                    cursor: pointer;
                }
            }
        }
        .meeting-box {
            height: 70px!important;
        }
        .leftbox-cont {
            width: 100%;
            height: 196px;
            float: left;
            padding: 0 12px;
            .tabs-week {
                width: 25px;
                height: 10px;
                float: right;
                margin-top: 4px;
                ul {
                    li {
                        width: 10px;
                        height: 10px;
                        line-height: 10px;
                        text-align: center;
                        list-style-type: none;
                        float: left;
                        box-shadow: inset 0 0 4px #073b73;
                        background: rgba(6,37,71,0.6);
                        color: #3875AE;
                        cursor: pointer;
                    }
                    li:nth-child(2) {
                        margin-left: 4px;
                    }
                    li.active {
                        background: #86ECFF;
                        color: #04186C;
                        box-shadow: inset 0 0 0 #073b73;
                        cursor: pointer;
                    }
                }
            }
            .danger-chart {
                width: 100%;
                height: 94px;
                float: left;
                
            }
            .tabs-statistics {
                width: 100%;
                height: 12px;
                float: left;
                padding: 0 62px;
                margin-top: 6px;
                ul {
                    li {
                        width: 40px;
                        height: 12px;
                        line-height: 12px;
                        list-style-type: none;
                        float: left;
                        font-size: 7px;
                        text-align: center;
                        cursor: pointer;
                    }
                    li.active {
                        background: #86ECFF;
                        border-radius: 2px;
                        color: #051E37;
                        cursor: pointer;
                    }
                }
            }
            .safe-progress-cont {
                margin: 0 auto;
                float: left;
                margin-top: 10px;
                width: 206px;
                height: 60px;
                .statistics1 {
                    padding-left: 30px;
                    width: 78px!important;
                }
                .statistics2 {
                    padding-left: 10px;
                }
                .safe-progress-statistics {
                    width: 64px;
                    height: 60px;
                    float: left;
                    .statistics-title {
                        color: #89A5C0;
                        font-size: 7px;
                        height: 20px;
                        line-height: 40px;
                    }
                    .statistics-num {
                        color: #44E2F9;
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: bold;
                        height: 30px;
                        line-height: 30px;
                        span {
                            font-size: 8px;
                        }
                    }
                }
                .safe-progress-box {
                    width: 62px;
                    height: 60px;
                    float: left;
                }
            }
            .safety-table {
                width: 100%;
                height: 196px;
                float: left;
                padding: 20px 6px;
                .ivu-table-wrapper {
                    border-color: transparent;
                }
                .ivu-table:after {
                    width: 0!important;
                }
                >>> .ivu-table-cell {
                    padding-left: 0px;
                    padding-right: 0px;
                }
                >>> .ivu-table {
                    font-size: 7px;
                    background-color: transparent;
                }
                >>> .ivu-table th {
                    height: 17px;
                    background-color: #01305C;
                    color: #83CFFE;
                    font-weight: 400;
                    text-align: center;
                    border-bottom: 0;
                    border: 1px solid #061F3A;
                }
                >>> .ivu-table td {
                    height: 17px;
                    background-color: transparent;
                    text-align: center;
                    color: #59E0FF;
                    border-bottom: 0;
                }
                >>> .ivu-table tbody tr:nth-child(2n) {
                    background-color: #06274A;
                }
                >>> .ivu-table tbody tr:nth-child(2n) td {
                    border: 1px solid #061F3A;
                }
                >>> .ivu-table:before {
                    height: 0;
                }
                >>> .ivu-table:after {
                    width: 0;
                }
            }
        }
        .conttop-box {
            width: 100%;
            height: 309px;
            float: left;
            .conttop-box1 {
                width: 230px;
                height: 309px;
                float: left;
                @include horn;
            }
            .conttop-box2 {
                width: 460px;
                height: 309px;
                float: left;
                margin-left: 10px;
                padding: 6px 8px;
                @include horn;
            }
        }
        .contbottom-box {
            width: 100%;
            height: 138px;
            float: left;
            margin-top: 10px;
            padding: 9px;
            @include horn;
            .safety-swiper {
                width: 100%;
                height: 100%;
                .swiper-button-prev {
                    width: 18px;
                    height: 116px;
                    left: 0;
                    margin-top: -60px;
                    background-image: url('../../assets/imgs/safety/swiper/bg_swiper_prev.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .swiper-button-prev:hover {
                    background-image: url('../../assets/imgs/safety/swiper/bg_swiper_prev_active.png');
                }
                .swiper-button-next {
                    width: 18px;
                    height: 116px;
                    right: 0;
                    margin-top: -60px;
                    background-image: url('../../assets/imgs/safety/swiper/bg_swiper_next.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .swiper-button-next:hover {
                    background-image: url('../../assets/imgs/safety/swiper/bg_swiper_next_active.png');
                }
                .swiper-box {
                    width: 284px;
                    height: 120px;
                    float: left;
                    margin-right: 12px;
                    cursor: pointer;
                    .swiper-box1 {
                        width: 280px;
                        height: 116px;
                        float: left;
                        background: rgba(11,54,96,0.53);
                    }
                    .img1-swiper img,.img2-swiper img {
                        width: 139px;
                        height: 92px;
                        float: left;
                    }
                    .img1-swiper img {
                        margin-right: 2px;
                    }
                    .title-swiper {
                        width: 100%;
                        height: 24px;
                        line-height: 24px;
                        float: left;
                        font-size: 8px;
                        text-align: center;
                        font-weight: 400;
                    }
                }
                .swiper-box:hover {
                    border: 2px solid #45F8FF;
                    box-shadow: inset 0 0 15px #45F8FF;
                }
                .swiper-box:nth-child(1) {
                    margin-left: 25px;
                }
            }
        }
    }
}
.data-build {
    margin-top: 6px;
    font-size: 7px;
    width: 100%;
    float: left;
    color: #BEC8D2;
    text-align: center;
    padding: 0 12px;
    .icon-equipment {
        width: 10px;
        height: 10px;
        display: block;
        background-image: url('../../assets/imgs/new/icon_equipment.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
    }
    .icon-person {
        width: 10px;
        height: 10px;
        display: block;
        background-image: url('../../assets/imgs/new/icon_person.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
    }
    .data-detail {
        font-size:9px;
        font-family:Arial;
        font-weight:bold;
        color:rgba(47,204,234,1);
    }
}
.detail-progress >>> .el-progress-bar__outer {
    background-color: rgba(14,50,97,1);
}
.detail-progress >>> .el-progress__text {
    font-size:9px;
    font-family:Arial;
    font-weight:bold;
    color:rgba(69,228,250,1);
}
.progress-inspect >>> .el-progress-bar__outer {
    background-color: rgba(14,50,97,1);
}
.progress-inspect >>> .el-progress__text {
    font-size: 6px;
}
.progress-inspect >>> .el-progress-bar {
    padding-right: 4px;
}
.progress-inspect >>> .el-progress__text {
    position: relative;
    color: #fff;
}
.safe-progress-cont >>> svg path:first-child {
    stroke: rgba(14,50,97,1);
}
.safe-progress-cont >>> .el-progress__text {
    color: #fff;
    font-size: 10px!important;
    font-weight: 400;
}
.safe-progress-cont >>> .el-progress-circle__path {
    background:linear-gradient(0deg,rgba(255,255,0,1),rgba(255,109,0,1))!important;
}
</style>