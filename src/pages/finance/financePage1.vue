<template>
    <div class="finance">
        <Head :paramCurrent="current"></Head>  
        <div class="contBox">
            <div class="contbox-box">
                <div class="contbox-cont">
                    <div class="contbox-title">2020年目标值与完成值对比</div> 
                    <div class="contbox-chart">
                        <div id="quarterChart1" class="contbox-chart3"></div>
                    </div>             
                </div>
                <div class="contbox-cont" style="margin-left:15px;">
                    <div class="contbox-title">前三年同期季度同比增长</div>     
                    <div class="contbox-chart">
                        <div id="quarterChart2" class="contbox-chart3"></div>
                    </div>         
                </div> 
                <div class="contbox-cont" style="float:right">
                    <div class="contbox-title">前三年同期季度同比增长</div>
                    <div class="contbox-chart">
                        <div id="quarterChart3" class="contbox-chart3"></div>
                    </div>              
                </div>                            
            </div>
            <div class="contbox-box" style="bottom: 0">
                <div class="contbox-cont">
                    <div class="contbox-title">前三年同期季度同比增长</div>
                    <div class="contbox-chart">
                        <div id="quarterChart4" class="contbox-chart3"></div>
                    </div>
                </div>
                <div class="contbox-cont" style="margin-left:15px;">
                    <div class="contbox-title">前三年同期季度各指标总览</div>
                    <div class="contbox-chart">
                        <div id="quarterChart5" class="contbox-chart3"></div>
                    </div>
                </div>
                <div class="contbox-cont" style="float:right">
                    <div class="contbox-title" style="width:340px;">本季度应收款、预付款、应付款、预收款指标</div>
                    <div class="contbox-info">
                        <div class="info-left">今年1月1日截止目前:</div>
                        <div class="info-right">单位&nbsp;(亿)</div>
                    </div>
                    <div class="payment-box">
                        <div class="paymentleft-box">
                            <div class="payment-title">应收款</div>
                            <div class="payment-num">500</div>
                        </div>
                        <div class="paymentleft-box" style="float:right;">
                            <div class="payment-title">预收款</div>
                            <div class="payment-num">300</div>
                        </div>
                        <div class="paymentleft-box" style="margin-top:25px;">
                            <div class="payment-title">应收款</div>
                            <div class="payment-num">500</div>
                        </div>
                        <div class="paymentleft-box" style="margin-top:25px;float:right;">
                            <div class="payment-title">预收款</div>
                            <div class="payment-num">300</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</template>

<script>
var that;
let timer;
import Head from '@/components/head/head9.vue';
import echarts from 'echarts';
import 'echarts/map/js/province/sichuan.js';
import "echarts-gl";

export default {
    name: 'finance',
    data() {
        return {
            pageInfo: 'finance',
            current: 5,

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
            popup: 0,
            url1: 'https://www.baidu.com/',
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
        that.quarterChart1()
        that.quarterChart2()
        that.quarterChart3()
        that.quarterChart4()
        that.quarterChart5()
        that.getPageInfo()
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        getChart1() {
            window.location.href = this.url1;
        },
        //打开活动规则页面
        showpopup() {
            this.popup = 1;
        },
        //关闭活动规则页面
        closepopup() {
            this.popup = 0;
        },
        quarterChart1() {
            let myChart = that.$echarts.init(document.getElementById('quarterChart1'));
            myChart.setOption({
                title: {
                    text: '单位(万元)',
                    show: true,
                    textStyle: {
                        color: '#BAC2CC',
                        fontSize: 12,
                        fontWeight: 100
                    },
                    left: 0,
                    top: 0
                },
                grid: {
                    top: '10%',
                    left: '2%',
                    right: '3%',
                    bottom: '30px',
                    //height: '250px',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: 2,
                    padding: 0,
                    itemWidth:10,
                    itemHeight: 6,
                    textStyle: {
                        color: '#DE7A66',
                        fontSize: 12
                    },
                    left: 'center',
                    data: ['完成值', '目标值', '完成率']
                },
                xAxis: [{
                    type: 'category',
                    data: ['2017', '2018', '2019'],
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
                    max: 60,
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
                },
                {
                    type: 'value',
                    position: 'right',
                    min: 0,
                    max: 60,
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
                        name: '完成值',
                        type: 'bar',
                        data: [25,33,47],
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
                        name: '目标值',
                        type: 'bar',
                        data: [30,40,50],
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
                        data: [20,30,50],
                        itemStyle: {
                            color: '#14AE96'
                        }
                    }
                ]
            })
        },
        quarterChart2() {
            let myChart = that.$echarts.init(document.getElementById('quarterChart2'));
            myChart.setOption({
                title: {
                    text: '单位(万元)',
                    show: true,
                    textStyle: {
                        color: '#BAC2CC',
                        fontSize: 12,
                        fontWeight: 100
                    },
                    left: 0,
                    top: 0
                },
                grid: {
                    top: '10%',
                    left: '2%',
                    right: '3%',
                    bottom: '30px',
                    //height: '250px',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: 2,
                    padding: 0,
                    itemWidth:10,
                    itemHeight: 6,
                    textStyle: {
                        color: '#DE7A66',
                        fontSize: 12
                    },
                    left: 'center',
                    data: ['合同金额', '营业收入', '利润']
                },
                xAxis: [{
                    type: 'category',
                    data: ['2017', '2018', '2019'],
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
                    max: 50,
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
                    max: 50,
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
                        name: '合同金额',
                        type: 'bar',
                        data: [25,33,47],
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
                        name: '营业收入',
                        type: 'bar',
                        data: [30,40,50],
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
                        name: '利润',
                        type: 'bar',
                        data: [30,40,50],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#D8FF6F'
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
                        name: '',
                        type: 'line',
                        symbol: 'circle',
                        data: [20,30,50],
                        itemStyle: {
                            color: '#D7FD6F'
                        }
                    },
                    {
                        name: '',
                        type: 'line',
                        symbol: 'circle',
                        data: [40,45,15],
                        itemStyle: {
                            color: '#1A99F2'
                        }
                    },
                    {
                        name: '',
                        type: 'line',
                        symbol: 'circle',
                        data: [10,35,40],
                        itemStyle: {
                            color: '#42CDE1'
                        }
                    },
                ]
            })
        },
        quarterChart3() {
            let myChart = that.$echarts.init(document.getElementById('quarterChart3'));
            myChart.setOption({
                title: {
                    text: '单位(万元)',
                    show: true,
                    textStyle: {
                        color: '#BAC2CC',
                        fontSize: 12,
                        fontWeight: 100
                    },
                    left: 0,
                    top: 0
                },
                grid: {
                    top: '10%',
                    left: '2%',
                    right: '3%',
                    bottom: '30px',
                    //height: '250px',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: 2,
                    padding: 0,
                    itemWidth:10,
                    itemHeight: 6,
                    textStyle: {
                        color: '#DE7A66',
                        fontSize: 12
                    },
                    left: 'center',
                    data: ['长期收款', '两金', '两控', '一治一快']
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    data: ['2017', '2018', '2019'],
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
                }],
                series: [
                    {
                        name: '长期收款',
                        type: 'bar',
                        data: [253,253,253],
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
                        name: '两金',
                        type: 'bar',
                        data: [500,500,500],
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
                    },{
                        name: '两控',
                        type: 'bar',
                        data: [253,253,253],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#1631D5'
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
                        name: '一治一快',
                        type: 'bar',
                        data: [500,500,500],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#5FFF9F'
                                        },
                                        {
                                            offset: 1,
                                            color: '#071D38'
                                        }
                                    ]
                                )
                            },
                        },
                    }
                ]
            })
        },
        quarterChart4() {
            let myChart = that.$echarts.init(document.getElementById('quarterChart4'));
            myChart.setOption({
                title: {
                    text: '单位(万元)',
                    show: true,
                    textStyle: {
                        color: '#BAC2CC',
                        fontSize: 12,
                        fontWeight: 100
                    },
                    left: 0,
                    top: 0
                },
                grid: {
                    top: '10%',
                    left: '2%',
                    right: '3%',
                    bottom: '30px',
                    //height: '250px',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: 2,
                    padding: 0,
                    itemWidth:10,
                    itemHeight: 6,
                    textStyle: {
                        color: '#DE7A66',
                        fontSize: 12
                    },
                    left: 'center',
                    data: ['成本', '预算']
                },
                xAxis: [{
                    type: 'category',
                    data: ['2017', '2018', '2019'],
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
                    max: 50,
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
                    max: 50,
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
                        name: '成本',
                        type: 'bar',
                        data: [25,33,47],
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
                        name: '预算',
                        type: 'bar',
                        data: [30,40,50],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#5FFF9F'
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
                        name: '',
                        type: 'line',
                        symbol: 'circle',
                        smooth:true,
                        data: [20,30,50],
                        itemStyle: {
                            color: '#5EFC9E'
                        }
                    },
                    {
                        name: '',
                        type: 'line',
                        symbol: 'circle',
                        smooth:true,
                        data: [50,20,30],
                        itemStyle: {
                            color: '#115E9B'
                        }
                    },
                ]
            })
        },
        quarterChart5() {
            let myChart = that.$echarts.init(document.getElementById('quarterChart5'));
            myChart.setOption({
                title: {
                    text: '单位(万元)',
                    show: true,
                    textStyle: {
                        color: '#BAC2CC',
                        fontSize: 12,
                        fontWeight: 100
                    },
                    left: 0,
                    top: 0
                },
                grid: {
                    top: '10%',
                    left: '2%',
                    right: '3%',
                    bottom: '30px',
                    //height: '250px',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    top: 2,
                    padding: 0,
                    itemWidth:10,
                    itemHeight: 6,
                    textStyle: {
                        color: '#DE7A66',
                        fontSize: 12
                    },
                    left: 'center',
                    data: ['工程资金', '保证金', '违约金']
                },
                calculable: true,
                xAxis: [{
                    type: 'category',
                    data: ['2017', '2018', '2019'],
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
                }],
                series: [
                    {
                        name: '工程资金',
                        type: 'bar',
                        data: [253,253,253],
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
                        name: '保证金',
                        type: 'bar',
                        data: [200,200,200],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#4CEBFE'
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
                        name: '违约金',
                        type: 'bar',
                        data: [253,253,253],
                        barMaxWidth: '10%',
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1, [{
                                            offset: 0,
                                            color: '#D8FF6F'
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
    // display: flex;
    justify-content: space-around;
    .contbox-box {
        width: calc(100% - 20px);
        height: 233px;
        position: absolute;
        .contbox-cont {
            width: 308px;
            height: 233px;
            background-image: url('../../assets/imgs/engineer/bg_box.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            float: left;
            padding:10px;           
            .contbox-title {
                width: 140px;
                height: 20px;
                float:left;
                text-align: center;
                line-height: 20px;
                font-size:8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/engineer/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .contbox-chart {
                width: 100%;
                height: 190px;
                float: left;
                .contbox-chart3 {
                    width: 100%;
                    margin-top: 20px;
                    height: 180px;
                }
            }
            .contbox-info {
                width: calc(100% -40px);
                height: 40px;
                line-height: 40px;
                float: left;
                margin: 0 20px;
                font-size: 6px;
                font-weight: 100;
                .info-left {
                    width: 80px;
                    height: 40px;
                    float: left;
                }
                .info-right {
                    width: 40px;
                    height: 40px;
                    float: right;
                    text-align: right;
                }
            }
            .payment-box {
                width: calc(100% -40px);
                height: 150px;
                float: left;
                margin: 0 20px;
                .paymentleft-box {
                    width: 46%;
                    height: 65px;
                    float: left;
                    background-image: url('../../assets/imgs/new/bg_payment.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .payment-title {
                        width: 45px;
                        height: 16px;
                        float: left;
                        margin-left: 5px;
                        margin-top: 10px;
                        background-image: url('../../assets/imgs/new/bg_payment_title.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        line-height: 16px;
                        font-size: 10px;
                        font-weight: bold;
                        color: #041F3F;
                        text-align: center;
                    } 
                    .payment-num {
                        width: 60px;
                        height: 65px;
                        float: right;
                        font-size: 24px;
                        font-weight: 400;
                        font-family: LED;
                        line-height: 65px;
                        color:rgba(255,255,255,1);
                        background:linear-gradient(0deg,rgba(71,229,250,1) 0%, rgba(243,254,255,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                }
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

//element-ui.select样式
//弹窗
.righttop {
    width: 200px;
    height: 20px;
    position: absolute;
    right: 0px;
    top: 40px;
    background: #f00;
    .top-receive {
        width: 40px;
        height: 16px;
        background: #f00;
        float: left;
    }
}
.login {
    position: fixed;
    font-size: 24px;
    height: 360px;
    width: 240px;
    background-color: gold;
    border-radius: 0.25rem;
    left: 85%;
    top: 60%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}
.over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.7;//透明度为70%
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111111;
}

</style>