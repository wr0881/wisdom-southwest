<template>
    <div class="engineer">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div> 
        <div class="container">
            <div class="cont-box">
                <div class="conttop-box">
                    <div class="contbox-title conttitle1">工程产值</div>
                    <div class="conttop-table">
                        <Table
                            :columns="outputVal"
                            :data="outputData"
                        >
                            <template></template>
                        </Table>
                        <div class="conttop-page">
                            <Page 
                                :total="dataCount"
                                :page-size="pageSize"
                                show-total
                                @on-change="changePage"
                            >
                            </Page>
                        </div>
                    </div>
                </div>
                <div class="contbottom-box">
                    <div class="bottom-box">
                        <div class="contbox-title conttitle2">
                            <div class="tabs-conttitle">
                                <ul>
                                    <li v-for="(item,index) in conttitleList" @click="changeTitle(index)" :class="{active:conttitle==index}" :key="index">{{item.name}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="tabs-month">
                            <ul>
                                <li v-for="(item,index) in tabsmonthList" @click="changeMonth(index)" :class="{active:tabsmonth==index}" :key="index">{{item.name}}</li>
                            </ul>
                        </div>
                        <div class="leftcont-box" v-show="conttitle==0">
                            <div v-show="tabsmonth==0">
                                <div class="lefttop-box">
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">在场人数：</div>
                                        <div class="lefttop-num">1200<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">计划偏差：</div>
                                        <div class="lefttop-num">40<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">计划人数：</div>
                                        <div class="lefttop-num">1240<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">累计用工：</div>
                                        <div class="lefttop-num">5<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">人数同比昨日：</div>
                                        <div class="lefttop-num">200<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">连续7日功效：</div>
                                        <div class="lefttop-num">1008<span>人</span></div>
                                    </div>
                                </div>
                                <div class="leftbottom-chart" ref="leftChart11"></div>
                            </div>
                            <div v-show="tabsmonth==1">
                                <div class="lefttop-box">
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">在场人数：</div>
                                        <div class="lefttop-num">300<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">计划偏差：</div>
                                        <div class="lefttop-num">10<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">计划人数：</div>
                                        <div class="lefttop-num">310<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">累计用工：</div>
                                        <div class="lefttop-num">3<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">人数同比昨日：</div>
                                        <div class="lefttop-num">50<span>人</span></div>
                                    </div>
                                    <div class="lefttop-cont">
                                        <div class="lefttop-name">连续7日功效：</div>
                                        <div class="lefttop-num">227<span>人</span></div>
                                    </div>
                                </div>
                                <div class="leftbottom-chart" ref="leftChart12"></div>
                            </div>
                        </div>
                        <div class="leftcont-box" v-show="conttitle==1">
                            <div class="leftbox-box" v-show="tabsmonth==0">
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">设备总数：</div>
                                    <div class="leftbox-num"><span>108</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">在线设备：</div>
                                    <div class="leftbox-num"><span>105</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">工作设备：</div>
                                    <div class="leftbox-num"><span>103</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">怠机设备：</div>
                                    <div class="leftbox-num"><span>2</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">停机设备：</div>
                                    <div class="leftbox-num"><span>3</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">离线设备：</div>
                                    <div class="leftbox-num"><span>3</span>台</div>
                                </div>
                            </div>
                            <div class="leftbox-box" v-show="tabsmonth==1">
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">设备总数：</div>
                                    <div class="leftbox-num"><span>27</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">在线设备：</div>
                                    <div class="leftbox-num"><span>24</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">工作设备：</div>
                                    <div class="leftbox-num"><span>23</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">怠机设备：</div>
                                    <div class="leftbox-num"><span>1</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">停机设备：</div>
                                    <div class="leftbox-num"><span>2</span>台</div>
                                </div>
                                <div class="leftbox-cont">
                                    <div class="leftbox-name">离线设备：</div>
                                    <div class="leftbox-num"><span>1</span>台</div>
                                </div>
                            </div>
                        </div>
                        <div class="leftcont-box" v-show="conttitle==2">
                            <div class="material-box" v-show="tabsmonth==0">
                                <Table
                                    :columns="materialCol1"
                                    :data="materialData1"
                                ></Table>
                                <div class="conttop-page" style="float:right;margin-left:0">
                                    <Page 
                                        :total="dataCount1"
                                        :page-size="pageSize1"
                                        show-total
                                        @on-change="changePage1"
                                    ></Page>
                                </div>
                            </div>
                            <div class="material-box" v-show="tabsmonth==1">
                                <Table
                                    :columns="materialCol2"
                                    :data="materialData2"
                                ></Table>
                                <div class="conttop-page" style="float:right;margin-left:0">
                                    <Page 
                                        :total="dataCount2"
                                        :page-size="pageSize2"
                                        show-total
                                        @on-change="changePage2"
                                    ></Page>
                                </div>
                            </div>
                        </div>
                        <div class="leftcont-box" v-show="conttitle==3">
                            <div v-show="tabsmonth==0">
                                <div class="leftbox-chart" ref="leftChart41"></div>
                                <div class="rightbox-cont">
                                    <ul>
                                        <li v-for="(item,index) in deviceList1" :key="index">
                                            <span class="block-device" :style="{'background':item.color}"></span>
                                            <span class="device-name">{{item.type}}:&nbsp;{{item.name}}</span>
                                            <span class="device-num" :style="{'color':item.color}">{{item.num}}</span>
                                        </li>
                                    </ul>                               
                                </div>
                            </div>
                            <div v-show="tabsmonth==1">
                                <div class="leftbox-chart" ref="leftChart42"></div>
                                <div class="rightbox-cont">
                                    <ul>
                                        <li v-for="(item,index) in deviceList2" :key="index">
                                            <span class="block-device" :style="{'background':item.color}"></span>
                                            <span class="device-name">{{item.type}}:&nbsp;{{item.name}}</span>
                                            <span class="device-num" :style="{'color':item.color}">{{item.num}}</span>
                                        </li>
                                    </ul>                               
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-box">
                        <div class="contbox-title conttitle1">科信管理</div>
                        <div class="contbox-table">
                            <Table  
                                :border="false" 
                                :columns="columns1" 
                                :data="data1"
                            >
                                
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
let testData1 = {
    'outputData1': [
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '地基础分期工程',
                situation: '超前完成15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 0,
            progress: {
                name: '地下防水分项工程',
                situation: '延迟进度15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '钢筋分项工程',
                situation: '延迟进度10%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 1,
            progress: {
                name: '混凝土分项工程',
                situation: '超前完成18%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '内墙砖砌筑分项工程',
                situation: '延迟进度15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '内墙抹灰分项工程',
                situation: '超前完成15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '刮腻子分项工程',
                situation: '超前完成15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '外墙贴砖分项工程',
                situation: '延迟进度15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '钢筋分项分项工程',
                situation: '延迟进度15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '刮腻子分项工程',
                situation: '延迟进度15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 1,
            progress: {
                name: '内墙砖砌筑分项工程',
                situation: '延迟进度15%'
            }
        },
        {
            projectName: '成都市西南华府启动项目',
            planDays: '134/200',
            monthValue: 102,
            cumulative: '2200/700',
            situation: 2,
            progress: {
                name: '钢筋分项工程',
                situation: '延迟进度15%'
            }
        },
    ],
    'materialData1': [
        {
            materialName: '钢材',
            amount: 700,
            check: 690,
            deviation: 10
        },
        {
            materialName: '水泥',
            amount: 80,
            check: 80,
            deviation: '-'
        },
        {
            materialName: '木材',
            amount: 800,
            check: 800,
            deviation: '-'
        },
        {
            materialName: '模板',
            amount: 100,
            check: 80,
            deviation: 20
        },
        {
            materialName: '钢材',
            amount: 700,
            check: 690,
            deviation: 10
        },
        {
            materialName: '水泥',
            amount: 80,
            check: 80,
            deviation: '-'
        },
        {
            materialName: '木材',
            amount: 800,
            check: 800,
            deviation: '-'
        },
        {
            materialName: '模板',
            amount: 100,
            check: 80,
            deviation: 20
        },
        {
            materialName: '钢材',
            amount: 700,
            check: 690,
            deviation: 10
        },
        {
            materialName: '水泥',
            amount: 80,
            check: 80,
            deviation: '-'
        },
        {
            materialName: '木材',
            amount: 800,
            check: 800,
            deviation: '-'
        },
        {
            materialName: '模板',
            amount: 100,
            check: 80,
            deviation: 20
        }
    ],
    'materialData2': [
        {
            materialName: '钢材',
            amount: 180,
            check: 175,
            deviation: 5
        },
        {
            materialName: '水泥',
            amount: 20,
            check: 20,
            deviation: '-'
        },
        {
            materialName: '木材',
            amount: 200,
            check: 200,
            deviation: '-'
        },
        {
            materialName: '模板',
            amount: 25,
            check: 20,
            deviation: 5
        },
        {
            materialName: '钢材',
            amount: 180,
            check: 175,
            deviation: 5
        },
        {
            materialName: '水泥',
            amount: 20,
            check: 20,
            deviation: '-'
        },
        {
            materialName: '木材',
            amount: 200,
            check: 200,
            deviation: '-'
        },
        {
            materialName: '模板',
            amount: 25,
            check: 20,
            deviation: 5
        },
        {
            materialName: '钢材',
            amount: 180,
            check: 175,
            deviation: 5
        },
        {
            materialName: '水泥',
            amount: 20,
            check: 20,
            deviation: '-'
        },
        {
            materialName: '木材',
            amount: 200,
            check: 200,
            deviation: '-'
        },
        {
            materialName: '模板',
            amount: 25,
            check: 20,
            deviation: 5
        }
    ],
}
var that;
let timer;
import Head from '@/components/head/head9.vue';
import echarts from 'echarts';
import 'echarts/map/js/province/sichuan.js';
import "echarts-gl";

export default {
    name: 'engineer',
    data() {
        return {
            pageInfo: 'engineer',
            current: 1,
            deviceList1: [
                {
                    color: '#00ADD0',
                    type: 'A',
                    name: '吊钩',
                    num: 18
                },
                {
                    color: '#FFA12F',
                    type: 'B',
                    name: '塔吊',
                    num: 16
                },
                {
                    color: '#AC14FC',
                    type: 'C',
                    name: '反铲',
                    num: 14
                },
                {
                    color: '#604BFF',
                    type: 'D',
                    name: '钻子机',
                    num: 12
                },
                {
                    color: '#5A1BFC',
                    type: 'E',
                    name: '推土机',
                    num: 11
                },
                {
                    color: '#002AFF',
                    type: 'F',
                    name: '平仓车',
                    num: 10
                },
                {
                    color: '#20C0F4',
                    type: 'G',
                    name: '皮带机',
                    num: 8
                },
                {
                    color: '#95F300',
                    type: 'H',
                    name: '震动夯',
                    num: 7
                },
                {
                    color: '#00FDB6',
                    type: 'I',
                    name: '自卸机',
                    num: 5
                },
                {
                    color: '#B364FD',
                    type: 'J',
                    name: '顶带机',
                    num: 3
                }
            ],
            deviceList2: [
                {
                    color: '#00ADD0',
                    type: 'A',
                    name: '吊钩',
                    num: 5
                },
                {
                    color: '#FFA12F',
                    type: 'B',
                    name: '塔吊',
                    num: 4
                },
                {
                    color: '#AC14FC',
                    type: 'C',
                    name: '反铲',
                    num: 3
                },
                {
                    color: '#604BFF',
                    type: 'D',
                    name: '钻子机',
                    num: 3
                },
                {
                    color: '#5A1BFC',
                    type: 'E',
                    name: '推土机',
                    num: 3
                },
                {
                    color: '#002AFF',
                    type: 'F',
                    name: '平仓车',
                    num: 4
                },
                {
                    color: '#20C0F4',
                    type: 'G',
                    name: '皮带机',
                    num: 2
                },
                {
                    color: '#95F300',
                    type: 'H',
                    name: '震动夯',
                    num: 2
                },
                {
                    color: '#00FDB6',
                    type: 'I',
                    name: '自卸机',
                    num: 1
                },
                {
                    color: '#B364FD',
                    type: 'J',
                    name: '顶带机',
                    num: 1
                }
            ],
            conttitle: 0,
            conttitleList: [
                {
                    name: "人员管理",
                },
                {
                    name: "设备管理",
                },
                {
                    name: "物资管理",
                },
                {
                    name: "设备分类"
                }
            ],
            tabsmonth: 0,
            tabsmonthList: [
                {
                    name: '本月',
                },
                {
                    name: '本周',
                }
            ],
            materialCol1: [
                {
                    title: '物资名称',
                    key: 'materialName',
                    width: ''
                },
                {
                    title: '发货量(吨)',
                    key: 'amount',
                    width: ''
                },
                {
                    title: '验收量(吨)',
                    key: 'check',
                    width: ''
                },
                {
                    title: '偏差量(吨)',
                    key: 'deviation',
                    width: ''
                }
            ],
            
            materialCol2: [
                {
                    title: '物资名称',
                    key: 'materialName',
                    width: ''
                },
                {
                    title: '发货量(吨)',
                    key: 'amount',
                    width: ''
                },
                {
                    title: '验收量(吨)',
                    key: 'check',
                    width: ''
                },
                {
                    title: '偏差量(吨)',
                    key: 'deviation',
                    width: ''
                }
            ],
            outputVal: [
                {
                    title: '项目名称',
                    key: 'projectName',
                    width: 364
                },
                {
                    title: '安全生产天数/计划天数',
                    key: 'planDays',
                    width: 250
                },
                {
                    title: '当月产值(万)',
                    key: 'monthValue',
                    width: 160
                },
                {
                    title: '累计产值/剩余产值(万)',
                    key: 'cumulative',
                    width: 220
                },
                {
                    title: '情况',
                    key: 'situation',
                    width: 104,
                    render: (h, params) => {
                        let situation = params.row.situation;
                        let qk = "";
                        if(situation == 0) {
                            qk = "差"
                            return h('span', {
                                style: {
                                    color: '#FF462D'
                                }
                            },qk)
                        } else if (situation == 1) {
                            qk = "一般"
                            return h('span', {
                                style: {
                                    color: '#FFFB00'
                                }
                            },qk)
                        } else if (situation == 2) {
                            qk = "良好"
                            return h('span', {
                                style: {
                                    color: '#01F954'
                                }
                            },qk)
                        }
                    }
                },
                {
                    key: 'progress',
                    width: 684,
                    align: 'left',
                    render: (h,params) => {
                        let progress = params.row.progress;
                        return h('div',[
                            h('div',{
                                style: {
                                    width: '120px',
                                    height: '34px',
                                    lineHeight: '34px',
                                    float: 'left',
                                    textAlign: 'right',
                                    color: '#59E0FF',
                                }
                            },progress.name),
                            h('div',[
                                h('div',{
                                    style: {
                                        width: '122px',
                                        height: '20px',
                                        float: 'left',
                                        marginLeft: '10px',
                                        marginTop: '7px',
                                        background: '#FF462D'
                                    }
                                }),
                                h('div',{
                                    style: {
                                        width: '80px',
                                        height: '20px',
                                        float: 'left',
                                        marginTop: '7px',
                                        background: '#FFFB00'
                                    }
                                }),
                                h('div',{
                                    style: {
                                        width: '170px',
                                        height: '20px',
                                        float: 'left',
                                        marginTop: '7px',
                                        background: '#01F954'
                                    }
                                }),
                                h('div',{
                                    style: {
                                        width: '372px',
                                        height: '9px',
                                        position: 'absolute',
                                        borderRadius: '9px',
                                        marginTop: '12px',
                                        marginLeft: '130px',
                                        background: 'rgba(4,50,98,0.5)'
                                    }
                                },[
                                    h('div',{
                                        style: {
                                            width: '240px',
                                            height: '9px',
                                            position: 'absolute',
                                            borderRadius: '9px',
                                            backgroundSize: '5px 5px',
                                            backgroundImage: 'linear-gradient(135deg, #12BE7F 25%, rgba(58,255,160,1) 25%,rgba(58,255,160,1) 50%, #12BE7F 50%, #12BE7F 75%,rgba(58,255,160,1) 75%, rgba(58,255,160,1))'
                                        }
                                    })
                                ]),
                                h('div',{
                                    style: {
                                        width: '7px',
                                        height: '17px',
                                        position: 'absolute',
                                        marginTop: '8.5px',
                                        marginLeft: '300px',
                                        background: '#FF0000'
                                    }
                                })
                            ]),
                            h('div',{
                                style: {
                                    width: '100px',
                                    height: '34px',
                                    lineHeight: '34px',
                                    float: 'right',
                                }
                            },progress.situation)
                        ])
                    },
                    renderHeader: (h,params) => {
                        return h('div', [
                            h('div',{
                                style: {
                                    width: '8px',
                                    height: '17px',
                                    float: 'left',
                                    marginTop: '8px',
                                    marginRight: '8px',
                                    background: 'linear-gradient(0deg,rgba(202,19,0,1) 0%,rgba(255,79,1,1) 100%)'
                                }
                            }),
                            h('div',{
                                style: {
                                    lineHeight: '34px',
                                    width: '90px',
                                    height: '34px',
                                    float: 'left',
                                    color: '#FF0000'
                                }
                            },'当前节点情况'),
                            h('img',{
                                style: {
                                    width: '18px',
                                    height: '9px',
                                    float: 'left',
                                    marginLeft: '28px',
                                    marginTop: '12px',
                                    marginRight: '8px',                                    
                                },
                                attrs: {
                                    src: require('../../assets/imgs/engineer/icon_plan.png')
                                }
                            }),
                            h('div',{
                                style: {
                                    lineHeight: '34px',
                                    height: '34px',
                                    width: '90px',
                                    float: 'left',
                                    color: '#0DD7EE'
                                }
                            },'计划完成情况'),
                            h('div',{
                                style: {
                                    width: '10px',
                                    height: '10px',
                                    float: 'left',
                                    marginLeft: '28px',
                                    marginTop: '12px',
                                    marginRight: '8px',
                                    background: '#FF462D'
                                }
                            }),
                            h('div',{
                                style: {
                                    lineHeight: '34px',
                                    height: '34px',
                                    float: 'left',
                                    color: '#FF462D'
                                }
                            },'差'),
                            h('div',{
                                style: {
                                    width: '10px',
                                    height: '10px',
                                    float: 'left',
                                    marginLeft: '28px',
                                    marginTop: '12px',
                                    marginRight: '8px',
                                    background: '#FFFB00'
                                }
                            }),
                            h('div',{
                                style: {
                                    lineHeight: '34px',
                                    height: '34px',
                                    float: 'left',
                                    color: '#FFFB00'
                                }
                            },'一般'),
                            h('div',{
                                style: {
                                    width: '10px',
                                    height: '10px',
                                    float: 'left',
                                    marginLeft: '28px',
                                    marginTop: '12px',
                                    marginRight: '8px',
                                    background: '#04D06E'
                                }
                            }),
                            h('div',{
                                style: {
                                    lineHeight: '34px',
                                    height: '34px',
                                    float: 'left',
                                    color: '#04D06E'
                                }
                            },'良好'),
                            h('div',{
                                style: {
                                    lineHeight: '34px',
                                    height: '34px',
                                    float: 'left',
                                    color: '#77BFED',
                                    marginLeft: '96px'
                                }
                            },'单位：米'),
                        ])
                    }
                }
            ],
            ajaxOutputData: [],
            outputData: [],
            dataCount: 0,
            pageSize: 8,
            ajaxMaterialData1: [],
            materialData1: [],
            dataCount1: 0,
            pageSize1: 8,
            ajaxMaterialData2: [],
            materialData2: [],
            dataCount2: 0,
            pageSize2: 8,
            columns1: [
                {
                    title: '项目名称',
                    key: 'project',
                    width: '204px'
                },
                {
                    title: '课题名称',
                    key: 'name',
                    width: ''
                },
                {
                    title: '负责人',
                    key: 'person',
                    width: ''
                },
                {
                    title: '研发周期',
                    key: 'time',
                    width: ''
                },
                {
                    title: '研发经费',
                    key: 'money',
                    width: '210px',
                    render: (h,params) => {
                        let money = params.row.money;
                        return h('div',[
                            h('div',{
                                style: {
                                    width: '100%',
                                    height: '30px',
                                    float: 'left',
                                    lineHeight: '36px',
                                    color: '#33BFE2',
                                    textAlign: 'left',
                                    //paddingLeft: '26px'
                                }
                            },money+'万'),
                            h('div',{
                                style: {
                                    width: '100%',
                                    height: '18px',
                                    float: 'left',
                                }
                            },[
                                h('el-progress',{
                                    props: {
                                        percentage:money/200*100,
                                        strokeWidth:12
                                    }
                                }),
                                h('div',{
                                    style: {
                                        position: 'absolute',
                                        marginLeft: '110px',
                                        fontSize: '12px',
                                        lineHeight: '14px',
                                        color: 'rgba(145,178,217,0.36)'
                                    }
                                },'200万')
                            ])
                        ])
                    }
                },
                {
                    title: '成果',
                    key: 'result',
                    width: ''
                }
            ],
            data1: [
                {
                    project: '成都市西南华府启动项目',
                    name: '顶管施工',
                    person: '刘宪华',
                    time: '12个月',
                    money: 100,
                    result: '无'
                },
                {
                    project: '成都市锦江二号启动项目',
                    name: '排水',
                    person: '刘宪华',
                    time: '12个月',
                    money: 150,
                    result: '1项工法'
                },
                {
                    project: '成都市溁树湾启动项目',
                    name: '钻机',
                    person: '刘宪华',
                    time: '12个月',
                    money: 70,
                    result: '1项专利'
                },
                {
                    project: '成都市西南华府启动项目二期',
                    name: '顶管施工',
                    person: '刘宪华',
                    time: '12个月',
                    money: 80,
                    result: '1项专利'
                },
                {
                    project: '成都市溁树湾启动项目二期',
                    name: '排水',
                    person: '刘宪华',
                    time: '12个月',
                    money: 90,
                    result: '1项专利'
                },
                {
                    project: '成都市西南华府启动项目',
                    name: '顶管施工',
                    person: '刘宪华',
                    time: '12个月',
                    money: 100,
                    result: '无'
                },
                {
                    project: '成都市锦江二号启动项目',
                    name: '排水',
                    person: '刘宪华',
                    time: '12个月',
                    money: 150,
                    result: '1项工法'
                },
                {
                    project: '成都市溁树湾启动项目',
                    name: '钻机',
                    person: '刘宪华',
                    time: '12个月',
                    money: 70,
                    result: '1项专利'
                },
                {
                    project: '成都市西南华府启动项目二期',
                    name: '顶管施工',
                    person: '刘宪华',
                    time: '12个月',
                    money: 80,
                    result: '1项专利'
                },
                {
                    project: '成都市溁树湾启动项目二期',
                    name: '排水',
                    person: '刘宪华',
                    time: '12个月',
                    money: 90,
                    result: '1项专利'
                },
                {
                    project: '成都市西南华府启动项目',
                    name: '顶管施工',
                    person: '刘宪华',
                    time: '12个月',
                    money: 100,
                    result: '无'
                },
                {
                    project: '成都市锦江二号启动项目',
                    name: '排水',
                    person: '刘宪华',
                    time: '12个月',
                    money: 150,
                    result: '1项工法'
                },
                {
                    project: '成都市溁树湾启动项目',
                    name: '钻机',
                    person: '刘宪华',
                    time: '12个月',
                    money: 70,
                    result: '1项专利'
                },
                {
                    project: '成都市西南华府启动项目二期',
                    name: '顶管施工',
                    person: '刘宪华',
                    time: '12个月',
                    money: 80,
                    result: '1项专利'
                },
                {
                    project: '成都市溁树湾启动项目二期',
                    name: '排水',
                    person: '刘宪华',
                    time: '12个月',
                    money: 90,
                    result: '1项专利'
                }
            ]
        }
    },
    
    components: {
        Head
    },
    created: function() {
        that = this
        that.handleOutputData()
        that.handleMaterialData1()
        that.handleMaterialData2()
    },
    mounted() {
        timer && clearInterval(timer)        
        that.getPageInfo()
        that.leftChart11()
        //that.leftChart12()
        that.leftChart41()
    },
    methods: {
        getPageInfo() {
            that.$emit('postChildInfo',that.pageInfo);
        },
        //获取工程产值数据
        handleOutputData() {
            that.ajaxOutputData = testData1.outputData1;
            that.dataCount = testData1.outputData1.length;
            if(testData1.outputData1.length < that.pageSize) {
                that.outputData = that.ajaxOutputData;
            }else{
                that.outputData = that.ajaxOutputData.slice(0,that.pageSize);
            }
        },
        changePage(index) {
            var _start = (index - 1) * that.pageSize;
            var _end = index * that.pageSize;
            that.outputData = that.ajaxOutputData.slice(_start,_end);
        },
        //获取物资管理数据
        handleMaterialData1() {
            that.ajaxMaterialData1 = testData1.materialData1;
            that.dataCount1 = testData1.materialData1.length;
            if(testData1.materialData1.length < that.pageSize1) {
                that.materialData1 = that.ajaxMaterialData1;
            }else{
                that.materialData1 = that.ajaxMaterialData1.slice(0,that.pageSize1);
            }
        },
        changePage1(index) {
            var _start = (index - 1) * that.pageSize1;
            var _end = index * that.pageSize1;
            that.materialData1 = that.ajaxMaterialData1.slice(_start,_end);
        },
        handleMaterialData2() {
            that.ajaxMaterialData2 = testData1.materialData2;
            that.dataCount2 = testData1.materialData2.length;
            if(testData1.materialData2.length < that.pageSize2) {
                that.materialData2 = that.ajaxMaterialData2;
            }else{
                that.materialData2 = that.ajaxMaterialData2.slice(0,that.pageSize2);
            }
        },
        changePage2(index) {
            var _start = (index - 1) * that.pageSize2;
            var _end = index * that.pageSize2;
            that.materialData2 = that.ajaxMaterialData2.slice(_start,_end);
        },

        changeTitle(index) {
            that.conttitle = index;
            console.log('tab切换:',index);
            if(index === 0) {
                that.$nextTick(() => {
                    that.leftChart11()
                })
            }else if(index === 3) {
                that.$nextTick(() => {
                    that.leftChart4()
                })
            };
        },
        changeMonth(index) {
            that.tabsmonth = index;
            if(index === 0) {
                that.$nextTick(() => {
                    that.leftChart11();
                    that.leftChart41();
                })
            }else if(index === 1) {
                that.$nextTick(() => {
                    that.leftChart12();
                    that.leftChart42();
                })
            }
        },
        leftChart11() {
            let leftchart11 = that.$refs.leftChart11;
            if(leftchart11) {
                let myChart = that.$echarts.init(leftchart11);
                myChart.setOption({
                    title: {
                        text: '单位(人)',
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
                        right: 0,
                        bottom: 0,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['A项目','B项目','C项目'],
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
                            max: 800,
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
                            name: '人数',
                            type: 'bar',
                            data: [202,645,284],
                            barMaxWidth: 64,
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
                                }
                            }
                        }
                    ]
                })
            }
        },
        leftChart12() {
            let leftchart12 = that.$refs.leftChart12;
            if(leftchart12) {
                let myChart = that.$echarts.init(leftchart12);
                myChart.setOption({
                    title: {
                        text: '单位(人)',
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
                        right: 0,
                        bottom: 0,
                        containLabel: true
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['A项目','B项目','C项目'],
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
                            max: 800,
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
                            name: '人数',
                            type: 'bar',
                            data: [51,60,71],
                            barMaxWidth: 64,
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
                                }
                            }
                        }
                    ]
                })
            }
        },
        leftChart41() {
            let leftchart41 = that.$refs.leftChart41;
            if(leftchart41) {
                let myChart = that.$echarts.init(leftchart41);
                myChart.setOption({
                    color: ["#00ADD0","#FFA12F","#AC14FC","#604BFF","#5A1BFC","#002AFF","#20C0F4","#95F300","#00FDB6","#B364FD"],
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        radius: ['60%','80%'],
                        center: ['50%','50%'],
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 0,
                            borderColor: '#051E39'
                        },
                        data: [
                            {name:'A',value:18},
                            {name:'B',value:16},
                            {name:'C',value:14},
                            {name:'D',value:12},
                            {name:'E',value:11},
                            {name:'F',value:10},
                            {name:'G',value:8},
                            {name:'H',value:7},
                            {name:'I',value:5},
                            {name:'J',value:3}
                        ] 
                    }]
                })
            }
        },
        leftChart42() {
            let leftchart42 = that.$refs.leftChart42;
            if(leftchart42) {
                let myChart = that.$echarts.init(leftchart42);
                myChart.setOption({
                    color: ["#00ADD0","#FFA12F","#AC14FC","#604BFF","#5A1BFC","#002AFF","#20C0F4","#95F300","#00FDB6","#B364FD"],
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        radius: ['60%','80%'],
                        center: ['50%','50%'],
                        label: {
                            show: true,
                            position: 'inside'
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 0,
                            borderColor: '#051E39'
                        },
                        data: [
                            {name:'A',value:5},
                            {name:'B',value:4},
                            {name:'C',value:3},
                            {name:'D',value:3},
                            {name:'E',value:3},
                            {name:'F',value:4},
                            {name:'G',value:2},
                            {name:'H',value:2},
                            {name:'I',value:1},
                            {name:'J',value:1}
                        ] 
                    }]
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.engineer {
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
        .conttitle1 {
            background-image: url('../../assets/imgs/engineer/contbox_title1.png');
            width: 55px;
        }
        .conttitle2 {
            background-image: url('../../assets/imgs/engineer/contbox_title2.png');
            width: 193px;
            padding: 5px 5px;
            .tabs-conttitle {
                ul {
                    li{
                        list-style-type: none;
                        width: 45.5px;
                        height: 9px;
                        line-height: 9px;
                        float: left;
                        text-align: center;
                        color: #3875AE;
                        font-size: 8px;
                        border-right: 1px solid #86ECFF;
                        cursor: pointer;
                    }
                    li:nth-child(4){
                        border-right: 0;
                    }
                    li.active {
                        color: #B0F5FF;
                    }
                }
            }
        }
        .contbox-title {
            height: 18px;
            float:left;
            margin-left: 7px;
            margin-top: 7px;
            text-align: center;
            line-height: 18px;
            font-size:8px;
            color:rgba(65,223,246,1);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .conttop-box {
            width: 100%;
            height: 223px;
            float: left;
            box-shadow: inset 0 0 15px #073b73;
            background: rgba(6,37,71,0.6);
            .conttop-table {
                width: 100%;
                height: 200px;
                float: left;
                padding: 12px 20px 0 20px;
            }
        }
        .contbottom-box {
            width: 100%;
            height: 223px;
            float: left;
            margin-top: 10px;
            .bottom-box {
                width: calc(50%-5px);
                height: 100%;
                float: left;
                box-shadow: inset 0 0 15px #073b73;
                background: rgba(6,37,71,0.6);
                .contbox-table {
                    width: 450px;
                    height: 182px;
                    float: left;
                    overflow-y: auto;
                }
                .tabs-month {
                    width: 56px;
                    height: 10px;
                    float: right;
                    margin-right: 11px;
                    margin-top: 11px;
                    ul {
                        li {
                            list-style-type: none;
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
                .leftcont-box {
                    width: 100%;
                    height: 194px;
                    float: left;
                    padding: 13px 17px;
                    .leftbox-chart {
                        width: 162px;
                        height: 162px;
                        float: left;
                        margin-left: 38px;
                        margin-top: 6px;
                        background-image: url('../../assets/imgs/engineer/bg_leftchart4.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .rightbox-cont {
                        width: 212px;
                        height: 162px;
                        padding: 16px 0px 16px 26px;
                        float: left;
                        margin-top: 6px;
                        ul {
                            li {
                                width: 92px;
                                height: 26px;
                                line-height: 26px;
                                list-style-type: none;
                                float: left;
                                border-bottom: 1px solid #074077;
                                .block-device {
                                    width: 7px;
                                    height: 7px;
                                    float: left;
                                    margin-top: 9px;
                                    margin-left: 10px;
                                }
                                .device-name {
                                    width: 40px;
                                    display: inline-block;
                                    font-size: 7px;
                                    margin-left: 7px;
                                }
                                .device-num {
                                    font-size: 8px;
                                    font-weight: bold;
                                }
                            }
                            li:nth-child(2n) {
                                padding-left: 6px;
                            }
                        }
                        .rightbox-box {
                            width: 92px;
                            height: 26px;
                            float: left;
                            border-bottom: 1px solid #074077;
                        }
                    }
                    .leftbox-box {
                        width: 100%;
                        height: 166px;
                        margin-top: 14px;
                        padding: 0 2px;
                        .leftbox-cont {
                            width: 134px;
                            height: 67px;
                            float: left;
                            background: #003061;
                            margin-right: 12px;
                            margin-bottom: 16px;
                            padding: 10px 12px;
                            .leftbox-name {
                                width: 100%;
                                height: 14px;
                                line-height: 14px;
                                font-size: 7px;
                            }
                            .leftbox-num {
                                width: 100%;
                                height: 32px;
                                line-height: 32px;
                                color: #44E2F9;
                                text-align: center;
                                font-size: 7px;
                                span {
                                    height: 20px;
                                    line-height: 20px;
                                    width: 45px;
                                    display: inline-block;
                                    font-size: 14px;
                                    font-weight: bold;
                                    border-bottom: 1px solid #44E2F9;
                                    margin-right: 6px;
                                }
                            }
                        }
                        .leftbox-cont:nth-child(3n){
                            margin-right: 0px;
                        }
                    }
                    .lefttop-box {
                        width: 100%;
                        height: 78px;
                        .lefttop-cont {
                            width: 134px;
                            height: 30px;
                            float: left;
                            background: #003061;
                            margin-right: 14px;
                            margin-bottom: 9px;
                            .lefttop-name {
                                width: 60px;
                                height: 30px;
                                float: left;
                                line-height: 30px;
                                text-align: right;
                                font-size: 7px;
                            }
                            .lefttop-num {
                                width: 74px;
                                height: 30px;
                                float: left;
                                line-height: 30px;
                                padding-left: 9px;
                                font-size: 14px;
                                font-weight: bold;
                                color: #44E2F9;
                                span {
                                    font-size: 8px;
                                    font-weight: normal;
                                    margin-left: 8px;
                                }
                            }
                        }
                        .lefttop-cont:nth-child(3n) {
                            margin-right: 0;
                        }
                    }
                    .leftbottom-chart {
                        width: 100%;
                        height: 92px;
                    }
                }
            }
            .bottom-box:nth-child(2) {
                margin-left: 10px;
            }
        }
    }
}
//iview table样式
.contbox-table >>> .el-progress__text {
    //padding-left: 80px;
    color: #2FCCEA;
    float: right;
}
.contbox-table {
    padding: 5px;
    margin-right: 20px;
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
        font-weight: 400;
        text-align: center;
        font-size: 7px;
    }
    >>> .ivu-table th:nth-child(1) {
        text-align: right;
    }
    >>> .ivu-table td {
        height: 24px;
        background-color: transparent;
        border-bottom: 0;
        text-align: center;
        color: #83CFFE;
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
    >>> .el-progress-bar {
        margin-left: 0;
        float: left;
        padding-right: 20px;
    }
    >>> .el-progress-bar__outer {
        background: #0e3261;
    }
}
//滚动条样式修改
.contbox-table::-webkit-scrollbar {
    width:3px;
    height:4px;
    border-radius: 4px;  
    background:rgba(69,172,238,.1); 
}
.contbox-table::-webkit-scrollbar-thumb {
    display:block; 
    width:3px; 
    margin:0 auto; 
    border-radius: 10px; 
    background:#45ACEE;
}
//table、page样式修改
.conttop-table, .material-box {
    .ivu-table-wrapper {
        border-color: transparent;
    }
    .ivu-table:after {
        width: 0!important;
    }
    .conttop-page {
        margin-left: 360px;
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
    >>> .ivu-table th:nth-child(6) {
        text-align: left;
    }
    >>> .ivu-table td {
        height: 17px;
        background-color: transparent;
        text-align: center;
        color: #59E0FF;
        border-bottom: 0;
    }
    >>> .ivu-table td:nth-child(6) {
        text-align: left;
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
    >>> .ivu-page-item {
        min-width: 16px;
        height: 15px;
        line-height: 14px;
        background-color: transparent;
        border-radius: 0;
        border: 1px solid #0C5395;
    }
    >>> .ivu-page-item-jump-next, 
    >>> .ivu-page-item-jump-prev,
    >>> .ivu-page-next,
    >>> .ivu-page-prev {
        min-width: 16px;
        height: 15px;
        line-height: 13px;
        background-color: transparent;
        border-radius: 0;
        border: 1px solid #0C5395;
    }
    >>> .ivu-page-item a {
        color: #0C5395;
    }
    >>> .ivu-page-item-active a,
    >>> .ivu-page-item-active:hover a {
        color: #fff;
    }
    >>> .ivu-icon {
        font-weight: 100;
    }
    >>> .ivu-page-next a, >>> .ivu-page-prev a {
        font-size: 8px;
    }
    >>> .ivu-page-next a, >>> .ivu-page-prev a {
        color: #2d8cf0;
    }
    >>> .ivu-page-total {
        color: #89A5C0;
        font-size: 7px;
    }
}

</style>