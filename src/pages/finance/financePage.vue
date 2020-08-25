<template>
    <div class="finance">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>  
        <div class="container">
            <div class="cont-box">
                <div class="contbox-box">
                    <div class="subbox-box">
                        <div class="subbox-title">本年度合同金额目标值与完成值对比</div>
                        <div class="subbox-chart">
                            <div class="subbox-chart3" ref="financeChart1"></div>
                        </div>
                    </div>
                    <div class="subbox-box">
                        <div class="subbox-title">本年度营业收入目标值与完成值对比</div>
                        <div class="subbox-chart">
                            <div class="subbox-chart3" ref="financeChart2"></div>
                        </div>
                    </div>
                    <div class="subbox-box">
                        <div class="subbox-title">本年度利润目标值与完成值对比</div>
                        <div class="subbox-chart">
                            <div class="subbox-chart3" ref="financeChart3"></div>
                        </div>
                    </div>
                </div>
                <div class="contbox-box">
                    <div class="subbox-box">
                        <div class="subbox-title subtitle1">2020年两金分析</div>
                        <div class="subbox-chart">
                            <div class="subbox-chart4" ref="financeChart4"></div>
                        </div>
                    </div>
                    <div class="subbox-box">
                        <div class="subbox-title subtitle1">2020年两控分析</div>
                        <div class="subbox-cont5">
                            <div class="subcont5-box" style="float:left">
                                <div class="subcont5-title">资产负债率</div>
                                <div class="subcont5-num">18%</div>
                            </div>
                            <div class="subcont5-box" style="float:right">
                                <div class="subcont5-title">成本费用</div>
                                <div class="subcont5-num">5000<span>万</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="subbox-box">
                        <div class="subbox-title subtitle1">2020年一治一快分析</div>
                        <div class="subbox-cont6">
                            <div class="subcont6-box" style="float:left">
                                <div class="subcont6-title">治亏损</div>
                                <div class="subcont6-num">3000<span>万</span></div> 
                            </div>
                            <div class="subcont6-fill"></div>
                            <div class="subcont6-box" style="float:right">
                                <div class="subcont6-title">加快周转</div>
                                <div class="subcont6-num">8000<span>万</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contbox-box">
                    <div class="subbox-box">
                        <div class="subbox-title">前三年同期季度成本与预算同比分析</div>
                        <div class="subbox-chart">
                            <div class="subbox-chart3" ref="financeChart7"></div>
                        </div>
                    </div>
                    <div class="subbox-box">
                        <div class="subbox-title subtitle1">债务和备用金</div>
                        <div class="tabs-debt">
                            <ul>
                                <li v-for="(item,index) in debtList" @click="changeDebt(index)" :class="{active:debt==index}" :key="index">{{item.name}}</li>
                                <!--<li @click="debt=0" :class="{active:debt==0}">内部</li>
                                <li @click="debt=1" :class="{active:debt==1}" style="float:right">外部</li>-->
                            </ul>
                        </div>
                        <div class="subbox-chart">
                            <div class="subbox-chart3" v-show="debt==0">
                                <div class="chart-box" ref="financeChart8"></div>
                            </div>
                            <div class="subbox-chart3" v-show="debt==1">
                                <div class="chart-box" ref="financeChart9"></div>
                            </div>
                        </div>
                    </div>
                    <div class="subbox-box">
                        <div class="subbox-title">本年度应收款、预收款、应收款、预付款指标</div>
                        <div class="subbox-info">
                            <div class="info-left">今年1月1号截止目前:</div>
                            <div class="info-right">单位&nbsp;(亿)</div>
                        </div>
                        <div class="payment-box">
                            <div class="paymentleft-box">
                                <div class="payment-title">应收款</div>
                                <div class="payment-num">0.8</div>
                            </div>
                            <div class="paymentleft-box" style="float:right;">
                                <div class="payment-title">预收款</div>
                                <div class="payment-num">0.4</div>
                            </div>
                            <div class="paymentleft-box" style="margin-top:25px;">
                                <div class="payment-title">应付款</div>
                                <div class="payment-num">0.5</div>
                            </div>
                            <div class="paymentleft-box" style="margin-top:25px;float:right;">
                                <div class="payment-title">预付款</div>
                                <div class="payment-num">0.2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let that;
let timer;
import Head from '@/components/head/head9.vue';
import echarts from 'echarts';
import "echarts-gl";

export default {
    name: 'finance',
    data() {
        return {
            pageInfo: 'finance',
            current: 5,
  
            debt: 0,
            debtList: [
                {
                    name: '内部'
                },
                {
                    name: '外部'
                }
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
        timer && clearInterval(timer);
        that.getPageInfo();
        that.financeChart1();
        that.financeChart2();
        that.financeChart3();
        that.financeChart4();
        that.financeChart7();
        that.financeChart8();
        that.financeChart9();
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        //打开活动规则页面
        showpopup() {
            this.popup = 1;
        },
        //关闭活动规则页面
        closepopup() {
            this.popup = 0;
        },
        changeDebt(index) {
            that.debt = index;
            if(index === 0) {
                that.$nextTick(() => {
                    that.financeChart8()
                })
            }else if(index === 1) {
                that.$nextTick(() => {
                    that.financeChart9()
                })
            }
        },
        financeChart1() {
            let financechart1 = this.$refs.financeChart1;
            if(financechart1){
                let myChart = that.$echarts.init(financechart1);
                myChart.setOption({
                    title: {
                        text: '单位(亿)',
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 100
                        },
                        left: 36,
                        top: 30
                    },
                    grid: {
                        top: 60,
                        left: 40,
                        right: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: 2,
                        padding: 0,
                        itemWidth: 15,
                        itemHeight: 12,
                        itemGap: 40,
                        left: 38,
                        align: 'left',
                        data: [
                            {
                                name:'合同金额完成值',
                                textStyle: {
                                    color: '#00A4FA',
                                    fontSize: 14
                                }
                            },
                            {
                                name:'合同金额目标值',
                                textStyle: {
                                    color: '#0B5DBD',
                                    fontSize: 14
                                }
                            },
                            {
                                name:'完成率',
                                textStyle: {
                                    color: '#2EE1C5',
                                    fontSize: 14
                                }
                            },
                        ]
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
                        axisLabel: {
                            color: '#00A4FA'
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
                            color: '#2EE1C5',
                            formatter: "{value} %", //右侧Y轴文字显示
                        },
                        axisTick:{ //刻度线
                            show:false
                        },
                    }],
                    series: [
                        {
                            name: '合同金额完成值',
                            type: 'bar',
                            barGap: 0,
                            data: [25,33,47],
                            barMaxWidth: '20%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#59C6FF'
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
                            name: '合同金额目标值',
                            type: 'bar',
                            data: [30,40,50],
                            barMaxWidth: '20%',
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
                                },
                            },
                        },
                        {
                            name: '完成率',
                            type: 'line',
                            symbol: 'circle',
                            data: [20,30,50],
                            itemStyle: {
                                color: '#2EE1C5'
                            },
                            areaStyle: {         
                                color: 'rgba(0,255,255,0.2)',
                            }
                        }
                    ]
                })
            }
        },
        financeChart2() {
            let financechart2 = this.$refs.financeChart2;
            if(financechart2){
                let myChart = that.$echarts.init(financechart2);
                myChart.setOption({
                    title: {
                        text: '单位(亿)',
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 100
                        },
                        left: 36,
                        top: 30
                    },
                    grid: {
                        top: 60,
                        left: 40,
                        right: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: 2,
                        padding: 0,
                        itemWidth: 15,
                        itemHeight: 14,
                        itemGap: 40,
                        left: 38,
                        align: 'left',
                        data: [
                            {
                                name: '营业收入完成值',
                                textStyle: {
                                    color: '#CFFF4E',
                                    fontSize: 14
                                }
                            },
                            {
                                name: '营业收入目标值',
                                textStyle: {
                                    color: '#179586',
                                    fontSize: 14
                                }
                            },
                            {
                                name: '完成率',
                                textStyle: {
                                    color: '#2EE1C5',
                                    fontSize: 14
                                }
                            },
                        ]
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
                        axisLabel: {
                            color: '#CFFF4E'
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
                            color: '#2EE1C5',
                            formatter: "{value} %", //右侧Y轴文字显示
                        },
                        axisTick:{ //刻度线
                            show:false
                        },
                    }],
                    series: [
                        {
                            name: '营业收入完成值',
                            type: 'bar',
                            barGap: 0,
                            data: [25,33,47],
                            barMaxWidth: '20%',
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
                                },
                            },
                        },
                        {
                            name: '营业收入目标值',
                            type: 'bar',
                            data: [30,40,50],
                            barMaxWidth: '20%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#2A8A7E'
                                            },
                                            {
                                                offset: 1,
                                                color: '#071F3A'
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
                                color: '#2EE1C5'
                            },
                            areaStyle: {         
                                color: 'rgba(0,255,255,0.2)',
                            }
                        }
                    ]
                })
            }
        },
        financeChart3() {
            let financechart3 = this.$refs.financeChart3;
            if(financechart3){
                let myChart = that.$echarts.init(financechart3);
                myChart.setOption({
                    title: {
                        text: '单位(亿)',
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 12,
                            fontWeight: 100
                        },
                        left: 36,
                        top: 30
                    },
                    grid: {
                        top: 60,
                        left: 40,
                        right: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: 2,
                        padding: 0,
                        itemWidth: 15,
                        itemHeight: 10,
                        itemGap: 40,
                        textStyle: {
                            color: '#00A4FA',
                            fontSize: 12
                        },
                        left: 38,
                        align: 'left',
                        data: [
                            {
                                name:'利润完成值',
                                textStyle: {
                                    color: '#01FE54',
                                    fontSize: 14
                                }
                            },
                            {
                                name:'利润目标值',
                                textStyle: {
                                    color: '#098A4A',
                                    fontSize: 14
                                }
                            },
                            {
                                name:'完成率',
                                textStyle: {
                                    color: '#2EE1C5',
                                    fontSize: 14
                                }
                            },
                        ]
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
                        axisLabel: {
                            color: '#01FE54'
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
                    },
                    {
                        type: 'value',
                        position: 'right',
                        min: 0,
                        max: 60,
                        axisLine: {
                            lineStyle: {
                                color: '#2EE1C5',
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
                            color: '#2EE1C5',
                            formatter: "{value} %", //右侧Y轴文字显示
                        },
                        axisTick:{ //刻度线
                            show:false
                        },
                    }],
                    series: [
                        {
                            name: '利润完成值',
                            type: 'bar',
                            barGap: 0,
                            data: [25,33,47],
                            barMaxWidth: '20%',
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
                                },
                            },
                        },
                        {
                            name: '利润目标值',
                            type: 'bar',
                            data: [30,40,50],
                            barMaxWidth: '20%',
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(
                                        0, 0, 0, 1, [{
                                                offset: 0,
                                                color: '#098B4A'
                                            },
                                            {
                                                offset: 1,
                                                color: '#071F3A'
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
                                color: '#2EE1C5'
                            },
                            areaStyle: {         
                                color: 'rgba(0,255,255,0.2)',
                            }
                        }
                    ]
                })
            }
        },
        financeChart4() {
            let financechart4 = this.$refs.financeChart4;
            if(financechart4) {
                let myChart = that.$echarts.init(financechart4);
                myChart.setOption({
                    color: ['#199FFF','#75F92F'],
                    tooltip: {
                        trigger: 'item',
                        formatter: '{b}<br/>{c}亿({d}%)'
                    },
                    series: [{
                        name: '两金',
                        type: 'pie',
                        radius: [40, 80],
                        center: ['50%', '50%'],
                        roseType: 'radius',
                        label: {
                            show: true,
                            formatter: [
                                '{title|{b}}',
                                '{num|{c}}{fill|}{unit|亿}'
                            ].join('\n'),
                            fontSize: 20,
                            rich: {
                                title: {
                                    color: '#fff',
                                    fontSize: 16,
                                    align: 'left'
                                },
                                num: {
                                    fontSize: 34,
                                    fontWeight: 'bold',
                                    height: 30,
                                    lineHeight: 40
                                },
                                fill: {
                                    width: 10
                                },
                                unit: {
                                    fontSize: 20,
                                    height: 30,
                                    lineHeight: 48,
                                }
                            }
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
                                value: 2.5,
                                name: '应收账款'
                            }
                        ]
                    }]
                })
            }
        },
        financeChart7() {
            let financechart7 = this.$refs.financeChart7;
            if(financechart7) {
                let myChart = that.$echarts.init(financechart7);
                myChart.setOption({
                    title: {
                        text: '单位(亿)',
                        show: true,
                        textStyle: {
                            color: '#698AA9',
                            fontSize: 12,
                            fontWeight: 100
                        },
                        left: 36,
                        top: 20
                    },
                    grid: {
                        top: 60,
                        left: 40,
                        right: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        top: 2,
                        padding: 0,
                        itemWidth: 15,
                        itemHeight: 10,
                        left: 'center',
                        data: [
                            {
                                name: '成本',
                                textStyle: {
                                    color: '#89A5C0',
                                    fontSize: 14
                                }
                            },
                            {
                                name: '预算',
                                textStyle: {
                                    color: '#89A5C0',
                                    fontSize: 14
                                }
                            }
                        ]
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
                            barMaxWidth: '20%',
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
                                    ),
                                    barBorderRadius: [10,10,0,0]
                                },
                            },
                        },
                        {
                            name: '预算',
                            type: 'bar',
                            barGap: 0,
                            data: [30,40,50],
                            barMaxWidth: '20%',
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
                                    ),
                                    barBorderRadius: [10,10,0,0]
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
                                color: '#115E9B'
                            }
                        },
                        {
                            name: '',
                            type: 'line',
                            symbol: 'circle',
                            smooth:true,
                            data: [50,20,30],
                            itemStyle: {
                                color: '#FA7401'
                            }
                        },
                    ]
                })
            }
        },
        financeChart8() {
            let financechart8 = this.$refs.financeChart8;
            if(financechart8) {
                let myChart = that.$echarts.init(financechart8);
                myChart.setOption({
                    title: {
                        text: '单位(万)',
                        show: true,
                        textStyle: {
                            color: '#698AA9',
                            fontSize: 12,
                            fontWeight: 400
                        },
                        left: 36,
                        top: 0
                    },
                    grid: {
                        top: 30,
                        left: 40,
                        right: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
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
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 60,
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
                            name: '债务',
                            type: 'bar',
                            data: [48,54,60,80,84,68,0,0,0,0,0,0],
                            barMaxWidth: 10,
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
                                    ),
                                    barBorderRadius: [5,5,0,0]
                                }
                            }
                        }
                    ]
                })
            }
        },
        financeChart9() {
            let financechart9 = this.$refs.financeChart9;
            if(financechart9) {
                let myChart = that.$echarts.init(financechart9);
                myChart.setOption({
                    title: {
                        text: '单位(万)',
                        show: true,
                        textStyle: {
                            color: '#698AA9',
                            fontSize: 12,
                            fontWeight: 400
                        },
                        left: 36,
                        top: 0
                    },
                    grid: {
                        top: 30,
                        left: 40,
                        right: 40,
                        bottom: 10,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
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
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            min: 0,
                            max: 60,
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
                            name: '债务',
                            type: 'bar',
                            data: [40,50,60,70,75,62,0,0,0,0,0,0],
                            barMaxWidth: 10,
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
                                    ),
                                    barBorderRadius: [5,5,0,0]
                                }
                            }
                        }
                    ]
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.finance {
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
        .contbox-box {
            width: 100%;
            height: 146px;
            .subbox-box {
                width: 307px;
                height: 146px;
                float: left;
                margin-right: 9px;
                box-shadow: inset 0 0 10px #073b73;
                background: rgba(6,37,71,0.6);
                // background-image: url('../../assets/imgs/engineer/bg_box.png');
                // background-repeat: no-repeat;
                // background-size: 100% 100%;
                // background-position: 0 0;
                padding: 7px;
                .tabs-debt {
                    width: 55px;
                    height: 10px;
                    float: right;
                    margin-right: 6px;
                    margin-top: 4px;
                    ul {
                        li {
                            list-style: none;
                            width: 25px;
                            height: 10px;
                            line-height: 10px;
                            display: inline-block;
                            text-align: center;
                            background-image: url('../../assets/imgs/new/bg_tabs.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-position: 0 0;
                            color: #3875AE;
                            cursor: pointer;
                            font-size: 7px;
                        }
                        li.active {
                            background-image: url('../../assets/imgs/new/bg_tabs_active.png');
                            color: #04186C;
                        }
                        li:nth-child(2) {
                            float: right;
                        }
                    }
                }
                .subbox-info {
                    width: calc(100% - 40px);
                    height: 20px;
                    line-height: 20px;
                    float: left;
                    margin: 0 20px;
                    font-size: 7px;
                    font-weight: 400;
                    .info-left {
                        width: 80px;
                        height: 20px;
                        float: left;
                    }
                    .info-right {
                        width: 40px;
                        height: 20px;
                        float: right;
                        text-align: right;
                    }
                }
                .payment-box {
                    width: calc(100% -40px);
                    height: 82px;
                    float: left;
                    margin: 0 20px;
                    .paymentleft-box {
                        width: 113px;
                        height: 39px;
                        float: left;
                        background-image: url('../../assets/imgs/new/bg_payment.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        .payment-title {
                            width: 38px;
                            height: 16px;
                            float: left;
                            margin-left: 5px;
                            margin-top: 5px;
                            background-image: url('../../assets/imgs/new/bg_payment_title.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-position: 0 0;
                            line-height: 16px;
                            font-size: 8px;
                            font-weight: bold;
                            color: #041F3F;
                            text-align: center;
                        } 
                        .payment-num {
                            width: 60px;
                            height: 39px;
                            float: right;
                            font-size: 24px;
                            font-weight: normal;
                            font-family: LED;
                            line-height: 39px;
                            color:rgba(255,255,255,1);
                            background:linear-gradient(0deg,rgba(71,229,250,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                        }
                    }
                }
                .subbox-title {
                    width: 165px;
                    height: 18px;
                    float: left;
                    line-height: 18px;
                    color: #B0F5FF;
                    font-size: 8px;
                    text-align: center;
                    background-image: url('../../assets/imgs/engineer/contbox_title.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .subtitle1 {
                    width: 86px!important;
                }
                .subbox-chart {
                    width: 100%;
                    height: 115px;
                    float: left;
                    .subbox-chart3{
                        width: 100%;
                        margin-top: 10px;
                        height: 100px;
                        .chart-box {
                            width: 292px;
                            height: 100px;
                            float: left;
                        }
                    }
                    .subbox-chart4 {
                        width: 100%;
                        height: 108px;
                        background-image: url('../../assets/imgs/engineer/bg_chart4.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: 38% 100%;
                    }
                }
                .subbox-cont5 {
                    width: 255px;
                    height: 72px;
                    float: left;
                    margin-left: 20px;
                    margin-top: 20px;
                    .subcont5-box {
                        width: 123px;
                        height: 72px;
                        background-image: url('../../assets/imgs/engineer/bg_subbox5.png');
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        background-size: 100% 100%;
                        text-align: center;
                        .subcont5-title {
                            width: 100%;
                            height: 20px;
                            margin-top: 12px;
                            font-family: 'Microsoft YaHei';
                            font-size: 10px;                            
                        }
                        .subcont5-num {
                            width: 100%;
                            height: 28px;
                            font-family: AgencyFB;
                            font-weight: bold;
                            font-size: 18px;
                            color:rgba(255,166,1,1);
                            background:linear-gradient(0deg,rgba(251,116,1,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-size: 12px;
                                padding-left: 4px;
                                font-weight: normal;
                            }
                        }
                    }
                }
                .subbox-cont6 {
                    width: 262px;
                    height: 72px;
                    float: left;
                    margin-left: 23px;
                    margin-top: 20px;
                    background:linear-gradient(180deg,rgba(17,107,175,0.38),rgba(3,32,66,0.38));
                    border:1px solid rgba(11,75,139,1);
                    border-radius:12px;
                    .subcont6-fill {
                        width: 1px;
                        height: 35px;
                        float: left;
                        margin-top: 18px;
                        background-image: url('../../assets/imgs/humanr/bg_interval.png');
                        background-repeat: no-repeat;
                        background-position: 0 0;
                        background-size: 100% 100%;
                    }
                    .subcont6-box {
                        width: 130px;
                        height: 72px;
                        text-align: center;
                        .subcont6-title {
                            width: 100%;
                            height: 20px;
                            margin-top: 12px;
                            font-family: 'Microsoft YaHei';
                            font-size: 10px;
                        }
                        .subcont6-num {
                            width: 100%;
                            height: 28px;
                            font-family: AgencyFB;
                            font-weight: bold;
                            font-size: 18px;
                            color:rgba(255,166,1,1);
                            background:linear-gradient(0deg,rgba(25,159,255,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-size: 12px;
                                padding-left: 4px;
                                font-weight: normal;
                            }
                        }
                    }
                }
            }
            .subbox-box:nth-child(3) {
                margin-right: 0px!important;
                float: right;
            }
        }
        .contbox-box:nth-child(2) {
            margin-top: 10px;
        }
        .contbox-box:nth-child(3) {
            margin-top: 10px;
        }
    }
}
</style>