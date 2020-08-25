<template>
    <div class="hr">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>
        <div class="contBox">
            <div class="contbox-left">
                <div class="contleftbox-fill"></div>
                <div class="contleft-box contbox1">
                    <div class="contbox-title">人员专业</div>
                    <div class="chart1-box">
                        <div class="humanr-chart1" ref="humanrChart1"></div>
                        <div class="contbox1-cont">
                            <div class="box1cont-box">
                                <div class="icon-box1cont"></div>
                                <div class="box1cont-title">土木类</div>
                                <div class="box1cont-num">700人</div>
                                <div class="box1cont-num">70%</div>
                            </div>
                            <div class="box1cont-box">
                                <div class="icon-box1cont iconbg2"></div>
                                <div class="box1cont-title">水利类</div>
                                <div class="box1cont-num numcolor2">650人</div>
                                <div class="box1cont-num numcolor2">65%</div>
                            </div>
                            <div class="box1cont-box">
                                <div class="icon-box1cont iconbg3"></div>
                                <div class="box1cont-title">机械类</div>
                                <div class="box1cont-num numcolor3">500人</div>
                                <div class="box1cont-num numcolor3">50%</div>
                            </div>
                            <div class="box1cont-box">
                                <div class="icon-box1cont iconbg4"></div>
                                <div class="box1cont-title">财会类</div>
                                <div class="box1cont-num numcolor4">450人</div>
                                <div class="box1cont-num numcolor4">45%</div>
                            </div>
                            <div class="box1cont-box">
                                <div class="icon-box1cont iconbg5"></div>
                                <div class="box1cont-title">测绘类</div>
                                <div class="box1cont-num numcolor5">300人</div>
                                <div class="box1cont-num numcolor5">30%</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div class="contleft-box contbox2">
                    <div class="contbox-title">人员学历</div>
                    <div class="contbox-chart">
                        <div class="chart-box" ref="educationChart"></div>
                    </div>
                </div>
                <div class="contleft-box contbox3">
                    <div class="contbox-title">八大员统计</div>
                    <div class="contbox3-box"></div>
                </div>
                <div class="contleft-box contbox4">
                    <div class="contbox-title">用工模式</div>
                    <div class="contbox4-cont">
                        <div class="contbox4-box1">
                            <div class="contbox41-top">注册</div>
                            <div class="contbox41-bottom"><span>300</span>个</div>
                        </div>
                        <div class="contbox4-box2">
                            <div class="trapezoid1">
                                <div class="trapezoid-box register">
                                    <div class="trapezoid-top">注册</div>
                                    <div class="trapezoid-bottom">70%</div>
                                </div>
                            </div>
                            <div class="trapezoid2">
                                <div class="trapezoid-box dispatch">
                                    <div class="trapezoid-top">派遣</div>
                                    <div class="trapezoid-bottom dispatchcolor">35%</div>
                                </div>
                            </div>
                            <div class="leader-left"></div>
                            <div class="leader-right"></div>
                        </div>
                        <div class="contbox4-box1 alignleft">
                            <div class="contbox41-top">派遣</div>
                            <div class="contbox41-bottom"><span>120</span>个</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-mid">
                <div class="contbox-midtop">
                    <div class="contmidbox-fill"></div>
                    <div class="contbox-title">证书统计</div>
                    <div class="contbox-midtopbox1">
                        <div class="midtopbox-title">一级建造师</div>
                        <div class="midtopbox1-cont">
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">公路工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl1' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">106</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">建筑工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl2' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">86</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">铁路工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl3' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">70</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">民航机场工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl4' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">34</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">港口与航道工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl5' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">100</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="midtopbox1-cont">
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">水利水电工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl6' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">123</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">市政公用工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl7' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">33</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">通信与广电工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl8' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">26</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">矿业工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl9' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">55</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                            <div class="midtopbox1-interval"></div>
                            <div class="midtopbox1-contbox">
                                <div class="midtopbox1-title">
                                    <div class="midtoptitle-left"></div>
                                    <div class="midtoptitle-right">机电工程</div>
                                </div>
                                <div class="midtopbox1-data">
                                    <div class="midtopdata-icon"><img width="46px" :src='imgUrl10' alt='' /></div>
                                    <div class="midtopdata-quantity">
                                        <div class="midtopdata-num">24</div>
                                        <div class="midtopdata-unit">本</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contbox-midtopbox2">
                        <div class="midtopbox-title">二级建造师</div>
                        <div class="midtopbox-cont2">
                            <div class="midtopcont2-box">
                                <div class="midtopbox2-top">
                                    <div class="midtopbox2-num">88</div>
                                    <div class="midtopbox2-unit">本</div>
                                </div>
                                <div class="midtopbox2-bottom">机电</div>
                            </div>
                            <div class="midtopcont2-box">
                                <div class="midtopbox2-top">
                                    <div class="midtopbox2-num">123</div>
                                    <div class="midtopbox2-unit">本</div>
                                </div>
                                <div class="midtopbox2-bottom">建筑</div>
                            </div>
                            <div class="midtopcont2-box">
                                <div class="midtopbox2-top">
                                    <div class="midtopbox2-num">100</div>
                                    <div class="midtopbox2-unit">本</div>
                                </div>
                                <div class="midtopbox2-bottom">市政</div>
                            </div>
                            <div class="midtopcont2-box">
                                <div class="midtopbox2-top">
                                    <div class="midtopbox2-num">99</div>
                                    <div class="midtopbox2-unit">本</div>
                                </div>
                                <div class="midtopbox2-bottom">水利</div>
                            </div>
                            <div class="midtopcont2-box">
                                <div class="midtopbox2-top">
                                    <div class="midtopbox2-num">86</div>
                                    <div class="midtopbox2-unit">本</div>
                                </div>
                                <div class="midtopbox2-bottom">矿业</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contbox-midbottom">
                    <div class="contbox-title">干部管理</div>
                    <div class="midbottom-box">
                        <div class="midbottom-left">
                            <div class="midbottomdata-box">
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">最年轻年龄</div>
                                    <div class="midbottomdata-right"><span>25</span>岁</div>
                                </div>
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">最资深年龄</div>
                                    <div class="midbottomdata-right"><span>60</span>岁</div>
                                </div>
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">平均年龄</div>
                                    <div class="midbottomdata-right"><span>45</span>岁</div>
                                </div>
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">总人数</div>
                                    <div class="midbottomdata-right"><span>24</span>人</div>
                                </div>
                            </div>
                        </div>
                        <div class="midbottom-right">
                            <div class="midbottomdata-box">
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">最年轻年龄</div>
                                    <div class="midbottomdata-right1"><span>28</span>岁</div>
                                </div>
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">最资深年龄</div>
                                    <div class="midbottomdata-right1"><span>62</span>岁</div>
                                </div>
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">平均年龄</div>
                                    <div class="midbottomdata-right1"><span>47</span>岁</div>
                                </div>
                                <div class="midbottom-data">
                                    <div class="midbottomdata-left">总人数</div>
                                    <div class="midbottomdata-right1"><span>26</span>人</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-right">
                <div class="contrightbox-fill"></div>
                <div class="contright-box rightbox1">
                    <div class="contbox-title">职称统计</div>
                    <div class="rightchart1-box">
                        <div class="humanr-chart5" ref="humanrChart5"></div>
                        <div class="humanr-chart5cont">
                            <div class="chart5cont-box">
                                <div class="icon-chart5cont"></div>
                                <div class="chart5cont-name">助理工程师</div>
                                <div class="chart5cont-num">26人</div>
                                <div class="chart5cont-num">26%</div>
                            </div>
                            <div class="chart5cont-box">
                                <div class="icon-chart5cont chart5icon2"></div>
                                <div class="chart5cont-name">中级工程师</div>
                                <div class="chart5cont-num chart5color2">24人</div>
                                <div class="chart5cont-num chart5color2">24%</div>
                            </div>
                            <div class="chart5cont-box">
                                <div class="icon-chart5cont chart5icon3"></div>
                                <div class="chart5cont-name">高级工程师</div>
                                <div class="chart5cont-num chart5color3">25人</div>
                                <div class="chart5cont-num chart5color3">25%</div>
                            </div>
                            <div class="chart5cont-box">
                                <div class="icon-chart5cont chart5icon4"></div>
                                <div class="chart5cont-name">教授级高级工程师</div>
                                <div class="chart5cont-num chart5color4">25人</div>
                                <div class="chart5cont-num chart5color4">25%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contright-box rightbox2">
                    <div class="contbox-title">岗位统计</div>
                    <div class="contbox-post">
                        <div class="contboxpost-left">
                            <div class="contboxpost-title">管理岗</div>
                            <div class="contboxleft-cont"></div>
                        </div>
                        <div class="contboxpost-right">
                            <div class="contboxpost-title">服务岗</div>
                            <div class="contboxright-cont"></div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title" style="width:120px">学分完成情况</div>
                    <div class="credit-box"></div>
                    <!--<div class="contbox-chart">
                        <div class="rejecttate-chart"></div>
                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
import echarts from 'echarts';
import "echarts-gl"

export default {
    name: 'humanr',
    data() {
        return {   
            bg1: require('../../assets/imgs/a.png'),
            pageInfo: 'humanr',
            current: 6,

            imgUrl1: require('../../assets/imgs/humanr/icon_gonglu.png'),
            imgUrl2: require('../../assets/imgs/humanr/icon_jianzhu.png'),
            imgUrl3: require('../../assets/imgs/humanr/icon_tielu.png'),
            imgUrl4: require('../../assets/imgs/humanr/icon_jichang.png'),
            imgUrl5: require('../../assets/imgs/humanr/icon_hangdao.png'),
            imgUrl6: require('../../assets/imgs/humanr/icon_shuidian.png'),
            imgUrl7: require('../../assets/imgs/humanr/icon_shizheng.png'),
            imgUrl8: require('../../assets/imgs/humanr/icon_tongxin.png'),
            imgUrl9: require('../../assets/imgs/humanr/icon_kuangye.png'),
            imgUrl10: require('../../assets/imgs/humanr/icon_jidian.png'),
        }
    },
    
    components: {
        Head
    },
    mounted() {
        this.educationChart()
        this.getPageInfo()
        this.humanrChart1()
        this.humanrChart5()    
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        humanrChart1() {
            var humanr1 = this.$refs.humanrChart1;
            if(humanr1) {
                var dataStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        shadowBlur: 30,
                        shadowColor: 'rgba(40, 40, 40, 0.3)',
                    }
                };
                var placeHolderStyle = {
                    normal: {
                        color: 'rgba(0,0,0,0)',
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                    emphasis: {
                        //color: 'rgba(0,0,0,0)'
                    }
                };
                let myChart = this.$echarts.init(humanr1);
                myChart.setOption({
                    color: ['#024CFF','#4CEAFE','#C9F94D','#01F954','#00A7FD' ],
                    tooltip: {
                        show: false
                    },
                    legend: {
                        show: false
                    },
                    
                    series: [{
                            name: 'Line 1',
                            type: 'pie',
                            clockWise: false,
                            radius: [63, 70],
                            itemStyle: dataStyle,
                            hoverAnimation: false,
                            data: [{
                                    value: 700,
                                    name: '土木类'
                                },
                                {
                                    value: 380,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }

                            ]
                        },
                        {
                            name: 'Line 2',
                            type: 'pie',
                            clockWise: false,
                            radius: [49, 56],
                            itemStyle: dataStyle,
                            hoverAnimation: false,

                            data: [{
                                    value: 650,
                                    name: '水利类'
                                },
                                {
                                    value: 420,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: 'Line 3',
                            type: 'pie',
                            clockWise: false,
                            hoverAnimation: false,
                            radius: [35, 42],
                            itemStyle: dataStyle,

                            data: [{
                                    value: 500,
                                    name: '机械类'
                                },
                                {
                                    value: 700,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: 'Line 4',
                            type: 'pie',
                            clockWise: false,
                            hoverAnimation: false,
                            radius: [21, 28],
                            itemStyle: dataStyle,
                            data: [{
                                    value: 450,
                                    name: '财会类'
                                },
                                {
                                    value: 900,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        },
                        {
                            name: 'Line 5',
                            type: 'pie',
                            clockWise: false,
                            hoverAnimation: false,
                            radius: [7, 14],
                            itemStyle: dataStyle,

                            data: [{
                                    value: 300,
                                    name: '测绘类'
                                },
                                {
                                    value: 800,
                                    name: 'invisible',
                                    itemStyle: placeHolderStyle
                                }
                            ]
                        }

                    ]
                })
            }
        },
        educationChart() {
            var education = this.$refs.educationChart;
            if(education){
                let myChart = this.$echarts.init(education);
                myChart.setOption({
                    color: ['#4CEBFE'],
                    grid: {
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        height: '60px',
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    radar:{
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#fff'
                            }
                        },
                        indicator: [
                            {text: '博士', max: 300},
                            {text: '专科', max: 300},
                            {text: '本科', max: 300},
                            {text: '硕士', max: 300}
                        ],
                        center: ['50%', '50%'],
                        radius: 60,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                color: '#01305C' 
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                color: '#01305C'
                            }
                        },
                        splitArea: {
                            show: true,
                            areaStyle: {
                                color: 'transparent'
                            }
                        }
                    },
                    series: {
                        type: 'radar',
                        tooltip: {
                            trigger: 'item'
                        },
                        areaStyle: {
                            normal: {
                                width: 1,
                                color: '#023CF7',
                                opacity: 0.5,
                            },
                        },
                        data: [
                            {
                                value: [210, 260, 230, 220],
                                name: '学历'
                            }
                        ]
                    },
                })
            }
        },
        humanrChart5() {
            var chart5 = this.$refs.humanrChart5;
            if(chart5) {
                let myChart = this.$echarts.init(chart5);
                myChart.setOption({
                    backgroundColor: '',
                    color: ["#024CFF", "#01F954", "#57F0FE", "#AFB911"],
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        radius: ['60%', '85%'],
                        center: ['50%', '50%'],
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 6,
                            borderColor: '#051E39'
                        },
                        data: [
                            {name:'教授级高级工程师',value:25},
                            {name:'高级工程师',value:25},
                            {name:'中级工程师',value:24},
                            {name:'助理工程师',value:24}
                        ]
                    }]
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
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
.contBox {
    box-sizing: border-box;
    width: 960px;
    height: 457px;
    padding: 0 4px; 
    position: absolute;
    top: 73px;
    left: 0;
    display: flex;
    justify-content: space-around;
    .contbox-left {
        width: 250px;
        height: 457px;
        background-image: url('../../assets/imgs/humanr/bg_contleft.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contleftbox-fill {
            height: 6px;
        }
        .contbox1 {
            height: 110px!important;
        }
        .contbox2 {
            height: 115px!important;
        }
        .contbox3 {
            height: 124px!important;
        }
        .contbox4 {
            height: 108px!important;
        }
        .contleft-box {
            width: 100%;
            height: 108px;
            .contbox3-box {
                width: 208px;
                height: 76px;
                float: left;
                margin-top: 10px;
                margin-left: 24px;
                background-image: url('../../assets/imgs/humanr/bg_contbox3.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .chart1-box {
                width: 100%;
                height: 92px;
                float: left;
                padding: 6px 30px; 
                .humanr-chart1 {
                    width: 80px;
                    height: 80px;
                    float: left;
                }
                .contbox1-cont {
                    width: 105px;
                    height: 80px;
                    float: right;
                    .box1cont-box {
                        width: 100%;
                        height: 16px;
                        line-height: 16px;
                        .icon-box1cont {
                            width: 8px;
                            height: 2px;
                            border-radius: 2px;
                            background: #024CFF;
                            float: left;
                            margin-top: 7px;
                        }
                        .iconbg2 {
                            background: #4CEAFE!important;
                        }
                        .iconbg3 {
                            background: #C9F94D!important;
                        }
                        .iconbg4 {
                            background: #01F954!important;
                        }
                        .iconbg5 {
                            background: #00A7FD!important;
                        }
                        .numcolor2 {
                            color: #4CEAFE!important;
                        }
                        .numcolor3 {
                            color: #C9F94D!important;
                        }
                        .numcolor4 {
                            color: #01F954!important;
                        }
                        .numcolor5 {
                            color: #00A7FD!important;
                        }
                        .box1cont-title {
                            width: 24px;
                            height: 16px;
                            line-height: 16px;
                            float: left;
                            font-size: 7px;
                            color: #9EB2C9;
                            margin-left: 2px;
                        }
                        .box1cont-num {
                            width: 35px;
                            height: 16px;
                            float: left;
                            text-align: right;
                            color: #024CFF;
                            font-size: 7px;
                            font-weight: bold;
                        }
                    }
                }
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                float: left;
                margin-left: 6px;
                // margin-top: 6px;
                text-align: center;
                line-height: 16px;
                font-size:8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .contbox-chart {
                width: 100%;
                height: 90px;
                float: left;
                .majornum-chart {
                    width: 160px;
                    height: 80px;
                    margin-top: 10px;
                    margin-left: 40px;
                    // background-image: url('../../assets/imgs/new/bg_chart1.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .chart-box {
                    width: 100%;
                    height: 90px;
                }
            }
            .contbox4-cont {
                width: 100%;
                height: 80px;
                float: left;
                .alignleft {
                    text-align: left!important;
                }
                .contbox4-box1 {
                    width: 55px;
                    height: 80px;
                    float: left;
                    text-align: right;
                    .contbox41-top {
                        width: 100%;
                        height: 16px;
                        margin-top: 20px;
                        line-height: 16px;
                        color: #9EB2C9;
                        font-size: 7px;                        
                    }
                    .contbox41-bottom {
                        width: 100%;
                        height: 20px;
                        line-height: 20px;
                        color: #FFFFFF;
                        font-size: 7px;
                        span{
                            font-size: 12px;
                        }
                    }
                }
                .contbox4-box2 {
                    width: 140px;
                    height: 80px;
                    float: left;
                    .trapezoid-box {
                        width: 30px;
                        height: 36px;
                        text-align: center;
                        .trapezoid-top {
                            width: 100%;
                            height: 20px;
                            line-height: 20px;
                            font-size: 7px;
                            color: #fff;
                        }
                        .trapezoid-bottom {
                            width: 100%;
                            height: 16px;
                            line-height: 16px;
                            font-size: 12px;
                            color: #3898F1;
                        }
                        .dispatchcolor {
                            color: #C9F94D!important;
                        }
                    }
                    .register {
                        position: absolute;
                        left: 106px;
                        bottom: 30px;
                    }
                    .dispatch {
                        position: absolute;
                        left: 12px;
                    }
                    .trapezoid1 {
                        width: 126px;
                        height: 80px;
                        margin: auto;
                        background-image: url('../../assets/imgs/humanr/bg_trapezoid1.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .trapezoid2 {
                        width: 52px;
                        height: 41px;
                        position: absolute;
                        bottom: 17px;
                        left: 135px;
                        background-image: url('../../assets/imgs/humanr/bg_trapezoid2.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .leader-left {
                        width: 31px;
                        height: 13px;
                        position: absolute;
                        bottom: 40px;
                        background-image: url('../../assets/imgs/humanr/bg_leaderleft.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .leader-right {
                        width: 31px;
                        height: 13px;
                        position: absolute;
                        bottom: 40px;
                        left: 170px;
                        background-image: url('../../assets/imgs/humanr/bg_leaderright.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                }
            }
        }
    } 
    .contbox-mid {
        width: 420px;
        height: 480px;
        left: 5px;
        .contbox-midtop {
            width: 100%;
            height: 312px;
            background-image: url('../../assets/imgs/humanr/bg_midtop.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .contmidbox-fill {
                width: 100%;
                height: 6px;
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                margin-left: 6px;
                text-align: center;
                line-height: 16px;
                font-size: 8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .midtopbox-title {
                width: 100%;
                height: 18px;
                line-height: 18px;
                text-align: center;
                color: #fff;
                font-size: 8px;
                font-weight: bold;
            }
            .contbox-midtopbox1 {
                width: 415px;
                height: 152px;
                margin: auto;
                margin-top: 12px;
                background-image: url('../../assets/imgs/humanr/bg_contmidtop1.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
                .midtopbox1-cont {
                    width: 100%;
                    height: 63px;
                    .midtopbox1-contbox {
                        width: 82px;
                        height: 63px;
                        float: left;
                        .midtopbox1-title {
                            width: 100%;
                            height: 20px;
                            margin-top: 4px;
                            .midtoptitle-left {
                                width: 12px;
                                height: 12px;
                                float: left;
                                margin-left: 10px;
                                margin-top: 6px;
                                background-image: url('../../assets/imgs/humanr/midtoptitle_left.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .midtoptitle-right {
                                float: left;
                                height: 20px;
                                line-height: 24px;
                                font-size: 7px;
                            }
                        }
                        .midtopbox1-data {
                            width: 100%;
                            height: 20px;
                            .midtopdata-icon {
                                width: 24px;
                                height: 20px;
                                float: left;
                                position: absolute;
                                margin-left: 8px;
                            }
                            .midtopdata-quantity {
                                width: 50px;
                                height: 20px;
                                float: right;
                                font-family: LED;
                                font-size: 16px;
                                color:rgba(24,165,195,1);
                                background:linear-gradient(0deg,rgba(1,249,84,1) 0%, rgba(243,254,255,1) 100%);
                                -webkit-background-clip:text;
                                -webkit-text-fill-color:transparent;
                                .midtopdata-num {
                                    width: 26px;
                                    height: 20px;
                                    line-height: 20px;
                                    float: left;
                                    text-align: right;
                                    letter-spacing: 1.5px;
                                }
                                .midtopdata-unit {
                                    width: 22px;
                                    height: 20px;
                                    line-height: 24px;
                                    float: right;
                                    text-align: left;
                                    font-size: 8px;
                                }
                            }
                        }
                    }
                    .midtopbox1-interval {
                        width: 1.2px;
                        height: 32px;
                        float: left;
                        margin-top: 10px;
                        background-image: url('../../assets/imgs/humanr/bg_interval.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                }
            }
            .contbox-midtopbox2 {
                width: 415px;
                height: 91px;
                margin: auto;
                margin-top: 14px;
                background-image: url('../../assets/imgs/humanr/bg_contmidtop2.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
                .midtopbox-cont2 {
                    width: 411px;
                    height: 48px;
                    float: left;
                    margin: auto;
                    margin-top: 10px;
                    .midtopcont2-box {
                        width: 70px;
                        height: 48px;
                        float: left;
                        margin: 0 6px;
                        background-image: url('../../assets/imgs/humanr/bg_midtopcont2.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        .midtopbox2-top {
                            width: 100%;
                            height: 24px;
                            float: left;
                            margin-top: 6px;
                            font-family: LED;
                            font-size: 16px;
                            color:rgba(24,165,195,1);
                            background:linear-gradient(0deg,rgba(54,139,255,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            .midtopbox2-num {
                                width: 40px;
                                height: 24px;
                                float: left;
                                text-align: right;
                                letter-spacing: 1.5px;
                            }
                            .midtopbox2-unit {
                                width: 30px;
                                height: 24px;
                                line-height: 30px;
                                float: right;
                                text-align: left;
                                font-size: 8px;
                            }
                        }
                        .midtopbox2-bottom {
                            width: 100%;
                            height: 20px;
                            float: left;
                            text-align: center;
                            font-size: 7px;
                        }
                    }
                }
            }
        }
        .contbox-midbottom {
            width: 100%;
            height: 140px; 
            float: left;
            margin-top: 5px;
            background-image: url('../../assets/imgs/humanr/bg_midbottom.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .contbox-title {
                width: 50px;
                height: 16px;
                margin-left: 6px;
                margin-top: 6px;
                text-align: center;
                line-height: 16px;
                font-size: 8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .midbottom-box {
                width: 100%;
                height: 86px;
                margin: auto;
                margin-top: 12px;
                .midbottom-left {
                    width: 176px;
                    height: 86px;
                    float: left;
                    margin-left: 24px;
                    background-image: url('../../assets/imgs/humanr/bg_midbottomleft.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .midbottom-right {
                    width: 176px;
                    height: 86px;
                    float: right;
                    margin-right: 24px;
                    background-image: url('../../assets/imgs/humanr/bg_midbottomright.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .midbottomdata-box {
                    width: 74px;
                    height: 64px;
                    float: left;
                    margin-top: 18px;
                    .midbottom-data {
                        width: 74px;
                        height: 16px;
                        float: left;
                        font-size: 7px;
                        .midbottomdata-left {
                            width: 50px;
                            height: 16px;
                            float: left;
                            letter-spacing: 1px;
                            text-align: right;
                        }
                        .midbottomdata-right {
                            width: 20px;
                            height: 16px;
                            line-height: 10px;
                            float: right;
                            text-align: center;
                            color:rgba(158,178,201,1);
                            background:linear-gradient(0deg,rgba(25,159,255,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-size: 10px;
                                font-weight: bold;
                            }
                        }
                        .midbottomdata-right1 {
                            width: 20px;
                            height: 16px;
                            line-height: 10px;
                            float: right;
                            text-align: center;
                            color:rgba(158,178,201,1);
                            background:linear-gradient(0deg,rgba(192,240,79,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-size: 10px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
    .contbox-right {
        width: 250px;
        height: 457px;
        left: 5px;
        background-image: url('../../assets/imgs/humanr/bg_contleft.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contrightbox-fill {
            height: 6px;
        }
        .rightbox1 {
            height: 116px!important;
        }
        .rightbox2 {
            height: 175px!important;
        }
        .contright-box {
            width: 100%;
            height: 160px;
            .credit-box {
                width: 211px;
                height: 132px;
                float: left;
                margin-top: 4px;
                margin-left: 24px;
                background-image: url('../../assets/imgs/humanr/bg_credit.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                float:left;
                margin-left: 6px;
                text-align: center;
                line-height: 16px;
                font-size:8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .rightchart1-box {
                width: 100%;
                height: 100px;
                float: left;
                padding: 12px 22px;
                .humanr-chart5 {
                    width: 75px;
                    height: 75px;
                    float: left;
                    background-image: url('../../assets/imgs/humanr/bg_humanrchart5.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .humanr-chart5cont {
                    width: 120px;
                    height: 75px;
                    float: right;
                    padding: 5px 0;
                    .chart5cont-box {
                        width: 100%;
                        height: 16px;
                        .chart5icon2{
                            background: #57F0FE!important;
                        }
                        .chart5icon3{
                            background: #01F954!important;
                        }
                        .chart5icon4{
                            background: #024CFF!important;
                        }
                        .chart5color2 {
                            color: #57F0FE!important;
                        }
                        .chart5color3 {
                            color: #01F954!important;
                        }
                        .chart5color4 {
                            color: #024CFF!important;
                        }
                        .icon-chart5cont {
                            width: 4px;
                            height: 4px;
                            float: left;
                            margin-top: 6px;
                            border-radius: 4px;
                            background: #AFB911;
                        }
                        .chart5cont-name {
                            width: 66px;
                            height: 16px;
                            float: left;
                            line-height: 16px;
                            font-size: 7px;
                            margin-left: 2px;
                            color: #9EB2C9;
                        }
                        .chart5cont-num {
                            width: 24px;
                            height: 16px;
                            float: left;
                            line-height: 16px;
                            font-size: 8px;
                            font-weight: bold;
                            color: #AFB911;
                        }
                    }
                }
            }
            .contbox-post {
                width: 100%;
                height: 132px;
                float: left;
                .contboxpost-title {
                    width: 100%;
                    height: 16px;
                    margin-top: 10px;
                    line-height: 16px;
                    text-align: center;
                    font-size: 7px;
                    color: #94C5FF;
                    background-image: url('../../assets/imgs/humanr/bg_posttitle.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .contboxpost-left {
                    width: 100px;
                    height: 132px;
                    float: left;
                    margin-left: 20px;
                    .contboxleft-cont {
                        width: 100%;
                        height: 110px;
                        margin-top: 4px;
                        background-image: url('../../assets/imgs/humanr/bg_gangwei1.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    
                }
                .contboxpost-right {
                    width: 100px;
                    height: 132px;
                    float: right;
                    margin-right: 20px;
                    .contboxright-cont {
                        width: 100%;
                        height: 110px;
                        float: left;
                        margin-top: 4px;
                        background-image: url('../../assets/imgs/humanr/bg_gangwei2.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                }
            }
        }
    }
}
.personal {
    width: 56px;
    height: 60px;
    background-image: url('../../assets/imgs/new/icon_personal.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
.collective {
    width: 76px;
    height: 60px;
    background-image: url('../../assets/imgs/new/icon_collective.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}

.activity-table table {
    thead {
        tr th {
            background: #01305C;
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 8px;
            color: #83CFFE;
        }
    }
    tbody {
        tr td {
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 8px;
            color: #83CFFE;
        }
        tr:nth-child(2n) {
            background: #06274A;
        }
    }
}

.outer-box {
    width: 40px;
    height: 37px;
    float: left;
    margin-left: 30px;
    .outer-title {
        width: 100%;
        height: 18px;
        font-size: 8px;
        float: left;
        text-align: left;
        line-height: 40px;
    }
    .outer-num {
        width: 60px;
        height: 18px;
        font-size: 12px;
        float: left;
        text-align: left;
        line-height: 40px;
        span {
            font-size: 8px;
        }
    }
}
//iview Table样式
.ivu-table th {
    background-color: #f00!important;
}
//弹窗
.righttop {
    width: 100px;
    height: 20px;
    position: absolute;
    right: 10px;
    top: 40px;
    .top-initiate {
        margin-top: 2px;
        width: 45px;
        height: 18px;
        border-radius: 2px;
        box-shadow: inset 0px 0px 5px 1px #0f81d0;
        float: left;
        color: #BEC8D2;
        text-align: center;
        line-height: 20px;
        font-size: 8px;
        cursor: pointer;
    }
    .top-receive {
        margin-top: 2px;
        width: 45px;
        height: 18px;
        border-radius: 2px;
        box-shadow: inset 0px 0px 5px 1px #0f81d0;
        float: right;
        color: #BEC8D2;
        text-align: center;
        line-height: 20px;
        font-size: 8px;
        cursor: pointer;
    }
}
.popup-footer {
    width: 100px;
    height: 20px;
    float: right;
    margin-top: 10px;
    .footer-button {
        margin-top: 2px;
        width: 45px;
        height: 18px;
        border-radius: 2px;
        box-shadow: inset 0px 0px 5px 1px #0f81d0;
        float: left;
        color: #BEC8D2;
        text-align: center;
        line-height: 20px;
        font-size: 8px;
        cursor: pointer;
    }
}
.popup {
    position: fixed;
    //height: 230px;
    width: 250px;
    padding: 10px;
    background-image: url('../../assets/imgs/new/bg_popup_top.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    left: 86.2%;
    top: 158px;
    transform: translate(-50%, -50%);
    z-index: 1000;   
    .popup-cancel {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 10px;
        text-align: center;
        cursor: pointer;
    }

}
.reply {
    position: fixed;
    //height: 200px;
    width: 250px;
    padding: 10px 15px;
    background-image: url('../../assets/imgs/new/bg_popup_top.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    left: 86.2%;
    top: 166px;
    transform: translate(-50%, -50%);
    z-index: 1000;   
    .reply-back {
        width: 48px;
        height: 16px;
        padding-left: 6px;
        line-height: 18px;
        float: left;
        text-align: center;
        font-size: 8px;
        border-radius: 2px;
        box-shadow: inset 0px 0px 5px 1px #0f81d0;
        cursor: pointer;
        .icon-back {
            width: 5px;
            height: 7px;
            position: absolute;
            margin-top: 4px;
            margin-left: 4px;
            background-image: url('../../assets/imgs/new/back.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
    }
    .reply-box {
        width: 100%;
        float: left;
        margin-top: 4px;
        font-size: 8px;
        .reply-title {           
            width: 40px;
            height: 16px;
            float: left;
            line-height: 16px;            
        }
        .reply-cont {
            width: calc(100%-40px);
            height: 16px;
            line-height: 16px; 
            float:left;
            color: #59E0FF;
        }
    }
}
.receive {
    position: fixed;
    height: 200px;
    width: 250px;
    padding: 10px;
    background-image: url('../../assets/imgs/new/bg_popup_top.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    left: 86.2%;
    top: 162px;
    transform: translate(-50%, -50%);
    z-index: 1000;
    cursor: pointer;
    .receive-cancel {
        width: 20px;
        height: 20px;
        float: right;
        text-align: center;
        cursor: pointer;
    }
    .receive-page {
        height: 20px;
    }
}
.popup-box {
    width: 100%;
    float: left;
    margin-top: 4px;
    font-size: 8px;
    .popup-personicon {
        width: 20px;
        height: 20px;
        float: left;
        margin-left:10px;
        background-image: url('../../assets/imgs/new/bg_popup_person.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
    }
    .popup-personname {
        width: 30px;
        height: 20px;
        float: left;
        margin-left: 4px;
        line-height: 20px;
        font-size: 10px;
    }
    .popup-title {
        width: 40px;
        height: 16px;
        float: left;
        line-height: 16px;
        text-align: center;
    }
    .popup-cont {
        width: calc(100%-40px);
        height: 16px;
        line-height: 16px;
        float: left;
        color: #59E0FF;
        .popupcont-line {
            width: 1px;
            height: 10px;
            margin-left: 13px;
            background: #59E0FF;
        }
    }
    .popup-line {
        float:left;
        height: 80px;
        padding:6px 4px;
        .time, .content {
            font-size:8px;
            color: #59E0FF;
        }
    }
}
//iviewTable样式
.receive-table {
    margin-top: 6px;
    >>> .ivu-table {
        font-size: 8px;
        color: #5ce8fb;
        background-color: transparent;
    }
    >>> .ivu-table-cell {
        padding-left:5px;
        padding-right:5px;
    }
    >>> .ivu-table td {
        height: 24px;
        background-color: transparent;
        border-bottom: 0;
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
//iview分页样式
.receive-page {
    width: 100px;
    float: right;
    margin-top: 0px;
    >>> .ivu-page-prev ,>>> .ivu-page-next {
        width: 16px;
        height: 16px;
        min-width: 16px;
        line-height: 12px;
        background-color: transparent;
        margin-right: 0;
    }
    >>> .ivu-page-item {
        width: 16px;
        height: 16px;
        min-width: 16px;
        line-height: 14px;
        text-align: center;
        background-color: transparent;
        margin-right: 0;
    }
    >>> .ivu-page-item a {
        margin: 0px;
    }
    >>> .ivu-page-prev a,>>> .ivu-page-item a,>>> .ivu-page-next a {
        font-size: 8px;
    }
    >>> .ivu-page-total {
        font-size: 10px;
        margin-right: 0;
        color: #999;
    }
}
//iview input textarea
.reply-cont {
    >>> textarea.ivu-input {
        font-size: 8px;
        background-color: transparent;
        border:1px solid #0f81d0;
    }
}
.popup-cont {
    >>> textarea.ivu-input {
        font-size: 8px;
        background-color: transparent;
        border:1px solid #0f81d0;
    }
}
</style>