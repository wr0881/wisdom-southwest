<template>
    <div class="engineer">
        <Head :paramCurrent="current"></Head>  
        <div class="contBox">
            <div class="contbox-box">
                <div class="contbox-cont">
                    <div class="contbox-top">
                        <div class="contbox-title">工程产值</div>
                        <!--<div class="selects">
                            <span>选择项目:</span>
                            <Select v-model="model1" style="width:120px" size="small">
                                <Option v-for="item in projectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>-->
                    </div>
                    <div class="contbox-progress">
                        <div class="progress-box">
                            <div class="progressbox-title">进度进展</div>
                            <div class="safe-progress-cont">
                                <div class="safe-progress-statistics">
                                    <div class="statistics-title">计划工期:</div>
                                    <div class="statistics-num">200&nbsp;<span>天</span></div>
                                </div>
                                <div class="safe-progress-box">
                                    <el-progress type="circle" :percentage="75" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="safe-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已完成工期:</div>
                                    <div class="statistics-num">150&nbsp;<span>天</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-box" style="float:right">
                            <div class="progressbox-title">产值情况</div>
                            <div class="safe-progress-cont">
                                <div class="safe-progress-statistics">
                                    <div class="statistics-title">计划产值:</div>
                                    <div class="statistics-num" style="color:#FFFC00">100&nbsp;<span>亿元</span></div>
                                </div>
                                <div class="safe-progress-box">
                                    <el-progress type="circle" color="#FFFC00" :percentage="50" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="safe-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已完成产值:</div>
                                    <div class="statistics-num" style="color:#FFFC00">50&nbsp;<span>亿元</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contbox-bottom">
                        <div class="contbottom-box">
                            <div class="contbottom-title">情况</div>
                            <div class="contbottom-status">
                                <div class="contbottom-status1">亏损</div>
                            </div>
                            <div class="contbottom-num">
                                500<span>万</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contbox-cont" style="float:right">
                    <div class="contbox-top">
                        <div class="contbox-title">工程进度</div>
                        <!--<div class="selects">
                            <span>选择项目:</span>
                            <Select v-model="model1" style="width:120px" size="small">
                                <Option v-for="item in projectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>-->
                    </div>
                    <div class="contbox-progress">
                        <div class="progress-box">
                            <div class="progressbox-title">进度进展</div>
                            <div class="safe-progress-cont">
                                <div class="safe-progress-statistics">
                                    <div class="statistics-title">计划工期:</div>
                                    <div class="statistics-num">200&nbsp;<span>天</span></div>
                                </div>
                                <div class="safe-progress-box">
                                    <el-progress type="circle" :percentage="75" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="safe-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已完成工期:</div>
                                    <div class="statistics-num">150&nbsp;<span>天</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="progress-box" style="float:right">
                            <div class="progressbox-title">产值情况</div>
                            <div class="safe-progress-cont">
                                <div class="safe-progress-statistics">
                                    <div class="statistics-title">计划产值:</div>
                                    <div class="statistics-num" style="color:#FFFC00">100&nbsp;<span>亿元</span></div>
                                </div>
                                <div class="safe-progress-box">
                                    <el-progress type="circle" color="#FFFC00" :percentage="50" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="safe-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已完成产值:</div>
                                    <div class="statistics-num" style="color:#FFFC00">50&nbsp;<span>亿元</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contbox-bottom">
                        <div class="contbottom-box">
                            <div class="contbottom-title">情况</div>
                            <div class="contbottom-status" style="background:#F0FFA0">
                                <div class="contbottom-status1">延误</div>
                            </div>
                            <div class="contbottom-num" style="color:#F0FFA0">
                                6<span>天</span>
                                &nbsp;
                                28<span>%进度</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-box" style="bottom: 0">
                <div class="contbox-cont">
                    <div class="contbox-top">
                        <div class="contbox-title">质量检测</div>
                        <!--<div class="selects">
                            <span>选择项目:</span>
                            <Select v-model="model1" style="width:120px" size="small">
                                <Option v-for="item in projectList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                            </Select>
                        </div>-->
                    </div>
                    <div class="contbox-echart">
                        <div id="qualityChart" class="contbottom-chart"></div>
                    </div>
                </div>
                <div class="contbox-cont" style="float:right">
                    <div class="contbox-title">科信管理</div>
                    <div class="contbox-table">
                        <i-table  
                            :border="false" 
                            :columns="columns1" 
                            :data="data1"
                        ></i-table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var that;
let timer1;
let timer;
import Head from '@/components/head/head9.vue';
import echarts from 'echarts';
import 'echarts/map/js/province/sichuan.js';
import "echarts-gl";

export default {
    name: 'engineer',
    data() {
        return {
            animate1: false,
            pageInfo: 'engineer',
            current: 1,

            projectList: [
                {
                    value: '1',
                    label: '项目一'
                },
                {
                    value: '2',
                    label: '项目二'
                },
            ],
            model1: '',
            columns1: [
                {
                    title: '项目',
                    key: 'project'
                },
                {
                    title: '课题名称',
                    key: 'name'
                },
                {
                    title: '负责人',
                    key: 'person'
                },
                {
                    title: '研发周期',
                    key: 'time'
                },
                {
                    title: '研发经费',
                    key: 'money'
                },
                {
                    title: '成果',
                    key: 'result'
                }
            ],
            data1: [
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
                {
                    project: '项目一',
                    name: '顶管施工',
                    person: '张三',
                    time: '12个月',
                    money: '100万',
                    result: '无'
                },
            ]
        }
    },
    
    components: {
        Head
    },
    created: function() {
        that = this
    },
    mounted() {
        timer && clearInterval(timer)
		timer = setInterval(that.showMarquee, 2000)
        that.qualityChart()
        that.getPageInfo()
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        showMarquee1: function() {
            that.animate1 = true
        },
        qualityChart() {
            let myChart = that.$echarts.init(document.getElementById('qualityChart'));
            myChart.setOption({
                title: {
                    text: '单位(项)',
                    show: true,
                    textStyle: {
                        color: '#BAC2CC',
                        fontSize: 12,
                        fontWeight: 100
                    },
                    left: 0,
                    top: '30px'
                },
                grid: {
                    top: '10%',
                    left: '10%',
                    right: '3%',
                    bottom: '50px',
                    // height: '270vh',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    bottom: 20,
                    padding: 0,
                    itemWidth:10,
                    itemHeight: 6,
                    textStyle: {
                        color: '#89A5C0',
                        fontSize: 12
                    },
                    left: 'center',
                    data: ['总单位数', '优良单位数']
                },
                xAxis: [{
                    type: 'category',
                    data: ['单项工程', '分部工程', '分项工程'],
                    axisLabel: {
                        fontSize: 12,
                        interval:0,//代表显示所有x轴标签显示
                    },
                    axisLine: {
                        lineStyle: {
                            fontSize: 16,
                            fontWeight: "bold",
                            color: '#fff',
                            width: 0, //这里是为了突出显示加上的  
                        }
                    },
                    axisTick:{ //刻度线
                        show:false
                    },
                }],
                yAxis: [{
                    type: 'value',
                    min: 0,
                    max: 100,
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
                },{
                    type: 'value',
                    position: 'right',
                    min: 0,
                    max: 100,
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
                    axisLabel: {
                        show: true,
                        formatter: "{value} %", //右侧Y轴文字显示
                    },
                    axisTick:{ //刻度线
                        show:false
                    },
                }],
                series: [
                    {
                        name: '总单位数',
                        type: 'bar',
                        data: [20,40,100],
                        barMaxWidth: '10%',
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
                        name: '优良单位数',
                        type: 'bar',
                        data: [14,32,90],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#00E4FF'
                                        },
                                        {
                                            offset: 1,
                                            color: '#071D38'
                                        }
                                    ]
                                )
                            },
                        },
                    },
                    {
                        name: '完成率',
                        type: 'line',
                        symbol: 'circle',
                        data: [70,80,90],
                        itemStyle: {
                            color: '#14AE96'
                        }
                    }
                ]
            })
        }
    }
}
</script>

<style scoped lang="scss">
.contBox {
    box-sizing: border-box;
    width: 960px;
    height: 475px;
    padding: 0 10px;
    /*overflow: hidden;*/
    position: absolute;
    top: 54px;
    left: 0;
    //display: flex;
    justify-content: space-around;
    .contbox-box {
        width: calc(100% -20px);
        height: 233px;
        position: absolute;
        .contbox-cont {
            width: 48.5vw;
            height: 233px;
            background-image: url('../../assets/imgs/engineer/bg_box.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            float: left;
            padding:10px;
            .contbox-table {
                width: 100%;
                height: 192px;
                float: left;
                overflow-y: auto;
            }
            .contbox-top {
                width: 100%;
                height: 20px;
            } 
            .contbox-echart {
                width: 100%;
                height: 192px;
                .contbottom-chart {
                    width: 80%;
                    height: 192px;
                    
                }
            }
            .contbox-progress {
                width: 100%;
                height: 140px;
                .progress-box {
                    width: 50%;
                    height: 140px;
                    float: left;
                    .progressbox-title {
                        font-size: 8px;
                        padding: 20px 20px 0px 20px;
                    }
                }
            } 
            .contbox-bottom {
                width: 100%;
                height: 52px;
                border:1px solid rgba(23,56,99,1);
                .contbottom-box {
                    width: calc(100% - 10px);
                    height: calc(100% - 10px);
                    margin: 5px;
                    background-image: url('../../assets/imgs/engineer/bg_contbox.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .contbottom-title{
                        width: 50px;
                        height: 14px;
                        line-height: 15px;
                        float: left;
                        border-radius: 4px;
                        background: #4DECFF;
                        text-align: center;
                        color: #071D39;
                        font-size: 8px;
                    }
                    .contbottom-status {
                        width: 50px;
                        height: 26px;
                        background: #FE9972;
                        float: left;
                        margin-left: 110px;
                        margin-top: 8px;
                        .contbottom-status1 {
                            width: 46px;
                            height: 22px;
                            line-height: 22px;
                            text-align: center;
                            float: left;
                            margin: 2px 2px;
                            border: 1px dashed #082D4E;
                            color: #082D4E;
                            font-weight: bold;
                            font-size: 14px;
                        }
                    }
                    .contbottom-num {
                        width: 90px;
                        height: 42px;
                        line-height: 42px;
                        float: left;
                        margin-left: 20px;
                        font-size: 16px;
                        font-weight: bold;
                        color: #FE9972;
                        span {
                            font-size: 10px;
                            margin-left: 4px;
                        }
                    }
                }
            }
            .contbox-title {
                width: 60px;
                height: 20px;
                float:left;
                text-align: center;
                line-height: 20px;
                font-size:8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/new/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .contbox-select {
                width: 60px;
                height: 20px;
                float: left;
            }
        }
    }
}

.safe-progress-cont {
    margin: 0 auto;
    margin-top:10px;
    width: 180px;
    height: 78px;
    .safe-progress-statistics {
        width: 50px;
        height:78px;
        float:left;
        .statistics-title {
            color: #BEC8D2;
            font-size: 8px;
            height:30px;
            line-height: 50px;
        }
        .statistics-num {
            color: #44E2F9;
            font-size: 14px;
            font-family:Arial;
            font-weight:bold;
            height: 30px;
            line-height: 30px;
            span {
                font-size:8px;
            }
        }
    }
    .safe-progress-box {
        width:70px;
        height: 78px;
        float:left;
    }
}

//iview select样式
.selects {
    width: 124px;
    height: 20px;
    float: right;
    span {
        font-size: 8px;
        color: #89A5C0;
    }
    >>> .ivu-select-selection,>>> .ivu-select-item-focus {
        background-color: transparent;
        height: 20px;
        border: 1px solid rgba(110, 198, 219, 0.29);
    }
    >>> .ivu-select-placeholder,>>> .ivu-select-selected-value {
        font-size: 8px;
        color: #fff;
        height: 14px;
        line-height: 14px;
    }
    >>> .ivu-select-dropdown, {
        background-color: transparent;
    }
    >>> .ivu-select-item {
        font-size: 8px!important;
        padding: 4px 6px;
    }
}
//iview table样式
.contbox-table {
    padding: 5px;
    >>> .ivu-table {
        font-size: 8px;
        color: #5ce8fb;
        background-color: transparent;
    }
    >>> .ivu-table-cell {
        padding-left:5px;
        padding-right:5px;
    }
    >>> .ivu-table th {
        height: 18px;
        background-color: transparent;
        border-bottom: 0;
        color: #BEC8D2;
        text-align: center;
    }
    >>> .ivu-table td {
        height: 24px;
        background-color: transparent;
        border-bottom: 0;
        text-align: center;
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
.safe-progress-box >>> svg path:first-child {
    stroke: rgba(14,50,97,1);
}
//滚动条样式修改
.contbox-table::-webkit-scrollbar {
    width:8px;
    height:4px;
    border-radius: 4px;  
    background:rgba(69,172,238,.1); 
    border-radius:10px;
}
.contbox-table::-webkit-scrollbar-thumb {
    display:block; 
    width:6px; 
    margin:0 auto; 
    border-radius: 10px; 
    background:#45ACEE;
}

</style>