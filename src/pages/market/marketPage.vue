<template>
    <div class="market">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>
        <div class="container">
            <div class="cont-box">
                <div class="contbox-top">
                    <div class="conttop-box" style="float:left">
                        <div class="contbox-title">前景分析</div>
                        <div class="contbox-unit">单位：亿</div>
                        <div style="width:100%;float:left">
                            <div class="topleft-box">
                                <div class="topleft-top">
                                    <div class="topleft-local">四川</div>
                                    <div class="topleft-title">预计可承揽</div>
                                </div>
                                <div class="topleft-chart">
                                    <div class="contbox-chart" ref="marketChart11"></div>
                                </div>
                            </div>
                            <div class="topleft-box" style="float:right">
                                <div class="topleft-top">
                                    <div class="topleft-local">贵州</div>
                                    <div class="topleft-title">预计可承揽</div>
                                </div>
                                <div class="topleft-chart">
                                    <div class="contbox-chart" ref="marketChart12"></div>
                                </div>
                            </div>
                        </div>
                        <div style="width:100%;float:left">
                            <div class="topleft-box">
                                <div class="topleft-top">
                                    <div class="topleft-local">云南</div>
                                    <div class="topleft-title">预计可承揽</div>
                                </div>
                                <div class="topleft-chart">
                                    <div class="contbox-chart" ref="marketChart13"></div>
                                </div>
                            </div>
                            <div class="topleft-box" style="float:right">
                                <div class="topleft-top">
                                    <div class="topleft-local">重庆</div>
                                    <div class="topleft-title">预计可承揽</div>
                                </div>
                                <div class="topleft-chart">
                                    <div class="contbox-chart" ref="marketChart14"></div>
                                </div>
                            </div>
                        </div>
                        <div style="width:100%;float:left">
                            <div class="topleft-box" style="width:100%">
                                <div class="topleft-top">
                                    <div class="topleft-local">西藏</div>
                                    <div class="topleft-title">预计可承揽</div>
                                </div>
                                <div class="topleft-chart">
                                    <div class="contbox-chart" ref="marketChart15"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="conttop-mid">
                        <select-map />
                    </div>
                    <div class="conttop-box" style="float:right">
                        <div class="contbox-title">实时动态</div>
                        <div class="topright-list">
                            <ul>
                                <li v-for="(item,index) in trendsList" :key="index">
                                    <span v-if="item.platform==1" class="list-platform platform1">机关单位</span>
                                    <span v-if="item.platform==2" class="list-platform platform2">投资建设平台</span>
                                    <span class="list-content">{{item.content}}</span>
                                    <span class="list-date">{{item.date}}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="contbox-bottom">
                    <div class="contbottom-box" style="float:left">
                        <div class="contbox-title conttitle1">市场招标概览</div>
                        <div class="contbottom-table">
                            <table-com1 />
                        </div>
                    </div>
                    <div class="contbottom-box" style="float:right">
                        <div class="contbox-title">投标情况</div>
                        <div class="contbottom-table">
                            <table-com2 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
import table1 from './table1';
import table2 from './table2';
import selectMap from './map1';
import echarts from 'echarts';
import "echarts-gl";
 
export default {
    name: 'market',
    data() {
        return { 
            pageInfo: 'market',
            current: 2,
            
            trendsList: [
                {
                    'platform': 1,
                    'content': '成都水利局王处长前往绿地调研处理调研总事务',
                    'date': '2020-05-15'
                },
                {
                    'platform': 2,
                    'content': '成都水利局王处长前往绿地调研',
                    'date': '2020-05-13'
                },
                {
                    'platform': 2,
                    'content': '成都水利局王处长前往绿地调研',
                    'date': '2020-05-11'
                },
                {
                    'platform': 1,
                    'content': '成都水利局王处长前往绿地调研',
                    'date': '2020-05-09'
                },
                {
                    'platform': 1,
                    'content': '成都水利局王处长前往绿地调研',
                    'date': '2020-05-08'
                },
                {
                    'platform': 2,
                    'content': '成都水利局王处长前往绿地调研',
                    'date': '2020-05-06'
                },
                {
                    'platform': 2,
                    'content': '成都水利局王处长前往绿地调研',
                    'date': '2020-05-03'
                }
            ]
        }
    },   
    components: {
        Head,
        tableCom1: table1,
        tableCom2: table2,
        selectMap
    },
    mounted () {
        this.getPageInfo();
        this.marketChart11();
        this.marketChart12();
        this.marketChart13();
        this.marketChart14();
        this.marketChart15();
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        marketChart11() {
            var marketchart11 = this.$refs.marketChart11;
            if(marketchart11) {
                let myChart = this.$echarts.init(marketchart11);
                myChart.setOption({
                    grid: {
                        top: 10,
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
                            data: ['水利','市政','环保','其他'],
                            axisLabel: {
                                fontSize: 12,
                                interval: 0
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 5,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#969CA4',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '水利',
                            type: 'bar',
                            data: [
                                {
                                    value: 5,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#024CFF'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 3,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FFFB00'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 2.5,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#01F954'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FB7401'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                }
                            ],
                            barMaxWidth: 20,                            
                        },
                        
                    ]
                })
            }
        },
        marketChart12() {
            var marketchart12 = this.$refs.marketChart12;
            if(marketchart12) {
                let myChart = this.$echarts.init(marketchart12);
                myChart.setOption({
                    grid: {
                        top: 10,
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
                            data: ['水利','市政','环保','其他'],
                            axisLabel: {
                                fontSize: 12,
                                interval: 0
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 5,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#969CA4',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            data: [1.5,1.3,1,0.4],
                            data: [
                                {
                                    value: 1.5,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#024CFF'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1.3,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FFFB00'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#01F954'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 0.4,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FB7401'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                } 
                            ],
                            barMaxWidth: 20,
                        },
                        
                    ]
                })
            }
        },
        marketChart13() {
            var marketchart13 = this.$refs.marketChart13;
            if(marketchart13) {
                let myChart = this.$echarts.init(marketchart13);
                myChart.setOption({
                    grid: {
                        top: 10,
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
                            data: ['水利','市政','环保','其他'],
                            axisLabel: {
                                fontSize: 12,
                                interval: 0
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 5,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#969CA4',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            data: [
                                {
                                    value: 1.3,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#024CFF'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1.3,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FFFB00'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#01F954'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 0.5,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FB7401'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                }
                            ],
                            barMaxWidth: 20,
                        },
                        
                    ]
                })
            }
        },
        marketChart14() {
            var marketchart14 = this.$refs.marketChart14;
            if(marketchart14) {
                let myChart = this.$echarts.init(marketchart14);
                myChart.setOption({
                    grid: {
                        top: 10,
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
                            data: ['水利','市政','环保','其他'],
                            axisLabel: {
                                fontSize: 12,
                                interval: 0
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 5,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#969CA4',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            data: [
                                {
                                    value: 1.2,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#024CFF'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1.5,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FFFB00'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 0.7,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#01F954'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 0.6,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FB7401'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                }
                            ],
                            barMaxWidth: 20,
                        },
                        
                    ]
                })
            }
        },
        marketChart15() {
            var marketchart15 = this.$refs.marketChart15;
            if(marketchart15) {
                let myChart = this.$echarts.init(marketchart15);
                myChart.setOption({
                    grid: {
                        top: 10,
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
                            data: ['水利','市政','环保','其他'],
                            axisLabel: {
                                fontSize: 12,
                                interval: 0
                            },
                            axisLine: {
                                lineStyle: {
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                    width: 0
                                }
                            },
                            axisTick: {
                                show: false
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 5,
                            axisLabel: {
                                color: '#6485A3'
                            },
                            axisLine: {
                                lineStyle: {
                                    color: '#969CA4',
                                    width: 0, //这里是为了突出显示加上的  
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: ['#0F2B50']
                                }
                            },
                            axisTick:{ //刻度线
                                show:false
                            },
                        }
                    ],
                    series: [
                        {
                            name: '',
                            type: 'bar',
                            data: [
                                {
                                    value: 3,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#024CFF'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 2,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FFFB00'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 2.4,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#01F954'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                },
                                {
                                    value: 1.5,
                                    itemStyle: {
                                        normal: {
                                            color: new echarts.graphic.LinearGradient(
                                                0, 0, 0, 1, [{
                                                        offset: 0,
                                                        color: '#FB7401'
                                                    },
                                                    {
                                                        offset: 1,
                                                        color: '#08213E'
                                                    }
                                                ]
                                            )
                                        }
                                    }
                                }
                            ],
                            barMaxWidth: 20,
                        },
                        
                    ]
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
.market {
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
            width: 56px;
            height: 18px;
            float: left;
            line-height: 18px;
            color: #B0F5FF;
            font-size: 9px;
            text-align: center;
            background-image: url('../../assets/imgs/market/contbox_title.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .conttitle1 {
            width: 72px!important;
        }
        .contbox-top {
            width: 100%;
            height: 256px;
            float: left;
            .conttop-box {
                width: 233px;
                height: 249px;
                padding: 7px;
                @include horn;
                .contbox-unit {
                    line-height: 18px;
                    float: right;
                    font-size: 7px;
                    color: #607F9D;
                }
                .topright-list {
                    width: 100%;
                    height: 220px;
                    float: left;
                    padding: 10px 0;
                    ul {                        
                        li {
                            height: 28px;
                            //line-height: 28px;
                            list-style-type: none;
                            border-bottom: 1px solid rgba(10,53,102,0.8);
                            .list-platform {
                                width: 51px;
                                height: 9px;
                                line-height: 9px;
                                display: inline-block;
                                margin: 9px 4px;
                                vertical-align: top;
                                color: #fff;
                                font-weight: bold;
                                font-size: 7px;
                                text-align: center;
                            }
                            .platform1 {
                                background-image: url('../../assets/imgs/new/bg_office.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .platform2 {
                                background-image: url('../../assets/imgs/new/bg_platform.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .list-content {
                                width: 105px;
                                font-size: 7px;
                                line-height: 9px;
                                color: #89A5C0;
                                display: inline-block;
                                margin: 9px 0;
                                overflow:hidden;
                                text-overflow:ellipsis;
                                white-space:nowrap;
                            }
                            .list-date {
                                display: inline-block;
                                font-size: 7px;
                                color: #59E0FF;
                                vertical-align: top;
                                margin: 9px 6px;
                            }
                        }
                    }
                }
                .topleft-box {
                    width: 108px;
                    height: 70px;
                    float: left;
                    .topleft-top {
                        width: 100%;
                        height: 10px;
                        float: left;
                        margin-top: 10px;
                        .topleft-local {
                            width: 22px;
                            height: 10px;
                            float: left;
                            background-image: url('../../assets/imgs/new/bg_tabs.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-position: 0 0;
                            text-align: center;
                            line-height: 10px;
                            color: #fff;
                            font-size: 7px;
                        }
                        .topleft-title {
                            float: left;
                            margin-left: 3px;
                            line-height: 10px;
                            color: #225286;
                            font-size: 7px;
                        }
                    }
                    .topleft-chart {
                        width: 100%;
                        height: 50px;
                        float: left;
                        .contbox-chart {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .conttop-mid {
                width: 474px;
                height: 256px;
                float: left;
            }
        }
        .contbox-bottom {
            width: 100%;
            height: 198px;
            float: left;
            margin-top: 3px;
            .contbottom-box {
                width: 465px;
                height: 198px;
                padding: 7px;
                @include horn;
                .contbottom-table {
                    width: 100%;
                    height: 172px;
                    padding: 6px 10px;
                    float: left;
                }
            }
        }
    }
}
</style>