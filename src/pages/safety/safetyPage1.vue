<template>
    <div class="safety">
        <Head :paramCurrent="current"></Head>
        <div class="contBox">
            <div class="contbox-left">
                <div class="contbox-cont">
                    <div>
                        <div class="contbox-title">施工数据</div>
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
                    <div class="safe-production">
                        <div class="contbox-title">安全生产</div>
                        <div class="safe-progress">
                            <div class="safe-progress-nav">
                                <div class="safe-progress-tab selected">安全检查</div>
                                <div class="safe-progress-tab">环保检查</div>
                            </div>
                            <div class="safe-progress-cont">
                                <div class="safe-progress-statistics">
                                    <div class="statistics-title">计划执行:</div>
                                    <div class="statistics-num">200&nbsp;<span>次</span></div>
                                </div>
                                <div class="safe-progress-box">
                                    <div></div>
                                    <el-progress type="circle" :percentage="50" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="safe-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已执行:</div>
                                    <div class="statistics-num">100&nbsp;<span>次</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="safe-progress">
                            <div class="safe-progress-nav">
                                <div class="safe-progress-tab selected">隐患统计</div>
                                <div class="safe-progress-tab">事故统计</div>
                            </div>
                            <div class="safe-progress-cont">
                                <div class="safe-progress-statistics">
                                    <div class="statistics-title">已发生:</div>
                                    <div class="statistics-num" style="color:#FFFC00">100&nbsp;<span>次</span></div>
                                </div>
                                <div class="safe-progress-box">
                                    <el-progress type="circle" color="#FFFC00" :percentage="50" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="safe-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已处理:</div>
                                    <div class="statistics-num" style="color:#FFFC00">50&nbsp;<span>次</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="contbox-mid">
                <div class="contmid-cont">
                    <div class="contmid-box" style="float:left;">
                        <div class="contmid-title">A基坑</div>
                        <div class="contmid-progress">
                            <div class="contmid-data-box">
                                <div class="contmid-databox-name">
                                    <div class="databox-name" style="line-height:30px">目标</div>
                                    <div class="databox-name" style="line-height:15px">倾斜值</div>
                                </div>
                                <div class="contmid-databox-num">2</div>
                            </div>
                            <div class="contmid-data-box">
                                <div class="contmid-databox-name">
                                    <div class="databox-name" style="line-height:30px">目标</div>
                                    <div class="databox-name" style="line-height:15px">变形值</div>
                                </div>
                                <div class="contmid-databox-num">3.5</div>
                            </div>
                            <div class="contmid-data-box">
                                <div class="contmid-databox-name">
                                    <div class="databox-name" style="line-height:30px">异常</div>
                                    <div class="databox-name" style="line-height:15px">震动值</div>
                                </div>
                                <div class="contmid-databox-num">12</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">斜率</div>
                                    <div class="progressbox-name" style="line-height:15px">变化速率</div>
                                </div>
                                <div class="contmid-progress-box">
                                    <div class="progress-box"></div>
                                </div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">固有振动</div>
                                    <div class="progressbox-name" style="line-height:15px">频率变化率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">裂缝</div>
                                    <div class="progressbox-name" style="line-height:15px">变化率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">水位</div>
                                    <div class="progressbox-name" style="line-height:15px">变化率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                        </div>
                        <div class="contmid-img imgA"></div>
                    </div>
                    <div class="contmid-box" style="float:right;">
                        <div class="contmid-title">B基坑</div>
                        <div class="contmid-progress">
                            <div class="contmid-data-box">
                                <div class="contmid-databox-name">
                                    <div class="databox-name" style="line-height:30px">目标</div>
                                    <div class="databox-name" style="line-height:15px">倾斜值</div>
                                </div>
                                <div class="contmid-databox-num">2</div>
                            </div>
                            <div class="contmid-data-box">
                                <div class="contmid-databox-name">
                                    <div class="databox-name" style="line-height:30px">目标</div>
                                    <div class="databox-name" style="line-height:15px">变形值</div>
                                </div>
                                <div class="contmid-databox-num">3.5</div>
                            </div>
                            <div class="contmid-data-box">
                                <div class="contmid-databox-name">
                                    <div class="databox-name" style="line-height:30px">异常</div>
                                    <div class="databox-name" style="line-height:15px">震动值</div>
                                </div>
                                <div class="contmid-databox-num">12</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">斜率</div>
                                    <div class="progressbox-name" style="line-height:15px">变化速率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">固有振动</div>
                                    <div class="progressbox-name" style="line-height:15px">频率变化率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">裂缝</div>
                                    <div class="progressbox-name" style="line-height:15px">变化率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                            <div class="contmid-databox-progress">
                                <div class="contmid-progress-name">
                                    <div class="progressbox-name" style="line-height:25px">水位</div>
                                    <div class="progressbox-name" style="line-height:15px">变化率</div>
                                </div>
                                <div class="contmid-progress-box"></div>
                                <div class="contmid-progress-num">40</div>
                            </div>
                        </div>
                        <div class="contmid-img imgA"></div>
                    </div>
                </div>
            </div>
            <div class="contbox-right">
                <div class="contright-cont">
                    <div class="train-meeting">
                        <div class="contbox-title">培训&会议</div>
                        <div class="meeting-progress">
                            <div class="meeting-progress-nav">
                                <div class="meeting-progress-tab selected">三级教育培训</div>
                                <div class="meeting-progress-tab">安全活动</div>
                                <div class="meeting-progress-tab">安全会议</div>
                                <div class="meeting-progress-tab">安全技术交流</div>
                            </div>
                            <div class="meeting-progress-cont">
                                <div class="meeting-progress-statistics">
                                    <div class="statistics-title">计划开展:</div>
                                    <div class="statistics-num">100&nbsp;<span>次</span></div>
                                </div>
                                <div class="meeting-progress-box">
                                    <div></div>
                                    <el-progress type="circle" :percentage="70" :stroke-width="10" :width="100"></el-progress>
                                </div>
                                <div class="meeting-progress-statistics" style="padding-left:14px;">
                                    <div class="statistics-title">已开展:</div>
                                    <div class="statistics-num">70&nbsp;<span>次</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="risk-source">
                        <div class="contbox-title">风险源检查</div>
                        <div class="data-risk">
                            <table style="width:100%">
                                <tr>
                                    <td width="36%"></td>
                                    <td width="18%">已检查</td>
                                    <td width="18%">总数</td>
                                    <td width="18%">待处理</td>
                                    <td width="10%">情况</td> 
                                </tr>
                                <tbody>
                                <tr>
                                    <td>临时施工用电:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                <tr>
                                    <td>机械伤害:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                <tr>
                                    <td>高处坠落及临边作业:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                <tr>
                                    <td>承重支模架搭设:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                <tr>
                                    <td>深基坑:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                <tr>
                                    <td>火灾事故:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                <tr>
                                    <td>土方爆破作业:</td>
                                    <td>55</td>
                                    <td>70</td>
                                    <td>15</td>
                                    <td>好</td> 
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="contBox-bottom">
            <div class="contbottom">
                <div class="contbottom-button-prev" slot="button-prev"></div>
                <div class="contbottom-box">
                    <div class="contproject-box"> 
                        <div class="contproject-img imgA"></div>
                        <div class="contproject-img imgB"></div>
                        <div class="contproject-title">项目一</div>
                    </div>
                    <div class="contproject-spacing"></div>
                    <div class="contproject-box">
                        <div class="contproject-img imgA"></div>
                        <div class="contproject-img imgB"></div>
                        <div class="contproject-title">项目二</div>
                    </div>
                    <div class="contproject-spacing"></div>
                    <div class="contproject-box">     
                        <div class="contproject-img imgA"></div>
                        <div class="contproject-img imgB"></div>
                        <div class="contproject-title">项目三</div>
                    </div>
                </div>
                <div class="contbottom-button-next" slot="button-next"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
export default {
    name: 'safety',
    data() {
        return {
            pageInfo: 'safety',
            current: 0
        }
    },
    
    components: {
        Head
    },
    mounted() {
        this.getPageInfo()
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
    }
}
</script>

<style scoped lang="scss">
.hr {
    background-image: url('../../assets/app_bg.jpg');
    width: 100vw;
    height:100vh;
    background-size: 100% 100%;
    position: relative;
}
.contBox {
    box-sizing: border-box;
    width: 960px;
    height: 330px;
    padding: 0 4px;
    padding-top: 0px; 
    /*overflow: hidden;*/
    position: absolute;
    top: 54px;
    left: 0;
    display: flex;
    justify-content: space-around;
    .contbox-left {
        width: 250px;
        height: 330px;
        background-image: url('../../assets/imgs/new/bg_contbox.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contbox-cont {
            width: 220px;
            height: 300px;
            margin:15px auto;
        }
    } 
    .contbox-mid {
        width: 440px;
        height: 330px;
        left: 5px;
        background-image: url('../../assets/imgs/new/bg_contboxmid.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contmid-cont {
            width: 410px;
            height: 300px;
            margin:15px auto;
            .contmid-box {
                width: 200px;
                height: 300px;
                .contmid-title {
                    width: 60px;
                    height: 20px;
                    margin: 0 auto;
                    text-align: center;
                    line-height: 20px;
                    color:#4DECFF;
                    font-size: 8px;
                    background-image: url('../../assets/imgs/new/contmid_title.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .contmid-progress {
                    width: 200px;
                    height: 140px;
                    .contmid-databox-progress {
                        width: 200px;
                        height: 25px;
                        float: left;
                        .contmid-progress-name {
                            width: 36px;
                            height: 25px;
                            float: left;
                            .progressbox-name {
                                width: 36px;
                                height: 12px;
                                font-size: 8px;
                                color: #B6C0CA;
                                text-align: right;
                            }
                        }
                        .contmid-progress-box {
                            width: 120px;
                            height: 10px;
                            float: left;
                            margin-left: 4px;
                            margin-top: 8px;
                            background-image: url('../../assets/imgs/new/bg_progress.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-position: 0 0;
                            .progress-box {

                            }
                        }
                        .contmid-progress-num {
                            width: 30px;
                            height: 25px;
                            float: left;
                            font-family: LED;
                            font-size: 24px;
                            line-height: 25px;
                            text-align: center;
                            background:linear-gradient(0deg,rgba(71,229,250,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip: text;
                            color: transparent;
                            -webkit-text-fill-color: transparent;
                            text-fill-color: transparent;
                        }
                    }
                    .contmid-data-box {
                        width: 66px;
                        height: 30px;
                        
                        float: left;
                        .contmid-databox-name {
                            width: 36px;
                            height: 30px;
                            float:left;
                            .databox-name {
                                width: 36px;
                                height: 15px;
                                font-size: 8px;
                                color: #B6C0CA;
                                text-align: right;
                            }
                        }
                        .contmid-databox-num {
                            width: 30px;
                            height: 30px;
                            float: left;
                            font-family: LED;
                            font-size: 24px;
                            line-height: 30px;
                            text-align: center;
                            background:linear-gradient(0deg,rgba(71,229,250,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip: text;
                            color: transparent;
                            -webkit-text-fill-color: transparent;
                            text-fill-color: transparent;
                        }
                    }
                }
                .contmid-img {
                    width: 200px;
                    height: 140px;
                    
                }
            }
        }
    }
    .contbox-right {
        width: 250px;
        height: 330px;
        left: 5px;
        background-image: url('../../assets/imgs/new/bg_contbox.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contright-cont {
            width: 220px;
            height: 300px;
            margin:15px auto;
        }
    }
}
.contBox-bottom {
    box-sizing: border-box;
    width: 960px;
    height: 140px;
    padding: 0 6px;
    position: absolute;
    top: 390px;
    display: flex;
    justify-content: space-around;
    .contbottom{
        width: 960px;
        height: 140px;
        background-image: url('../../assets/imgs/new/bg_contboxbot.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contbottom-box {
            width: 890px;
            height: 128px;
            margin: 0 auto;
            margin-top: 10px;
            .contproject-spacing {
                width: 10px;
                height: 118px;
                float: left;
            }
            .contproject-box {
                width: 290px;
                height: 120px;
                float: left;
                background: rgba(11,54,96,0.53); 
                .contproject-img {
                    width: 145px;
                    height: 102px;
                    float: left;
                }
                .contproject-title {
                    width: 290px;
                    height: 18px;
                    line-height: 18px;
                    font-size: 10px;
                    text-align: center;
                    color: #fff;
                }
            }
        }
        .contbottom-button-prev {
            width: 20px;
            height: 130px;
            position: absolute;
            top: 4px;
            left: 10px;
            background-image: url('../../assets/imgs/new/button_prev.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .contbottom-button-next {
            width: 20px;
            height: 130px;
            position: absolute;
            top: 4px;
            right: 10px;
            background-image: url('../../assets/imgs/new/button_next.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
    }
}
.contbox-title {
    width: 60px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size:8px;
    color:rgba(65,223,246,1);
    background-image: url('../../assets/imgs/new/contbox_title.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
.data-build {
    margin-top: 6px;
    font-size: 8px;
    color: #BEC8D2;
    text-align: center;
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
        font-size:10px;
        font-family:Arial;
        font-weight:bold;
        color:rgba(47,204,234,1);
    }
}

.safe-production {
    margin-top:10px;    
}
.safe-progress {
    width: 100%;
    height: 98px;
    .safe-progress-nav {
        width: 100px;
        height: 16px;
        margin: 0 auto ;
        padding-top: 4px;
        .safe-progress-tab {
            width: 50px;
            height: 16px;
            float: left;
            border-radius: 2px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            font-size: 8px;
            
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
}
.meeting-progress {
    width: 100%;
    height: 98px;
    .meeting-progress-nav {
        width: 220px;
        height: 16px;
        margin: 0 auto ;
        padding-top: 4px;
        .meeting-progress-tab {
            width: 55px;
            height: 16px;
            float: left;
            border-radius: 2px;
            text-align: center;
            line-height: 16px;
            color: #fff;
            font-size: 6px;
            
        }
    }
    .meeting-progress-cont {
        margin: 0 auto;
        margin-top:10px;
        width: 180px;
        height: 78px;
        .meeting-progress-statistics {
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
        .meeting-progress-box {
            width:70px;
            height: 78px;
            float:left;
        }
    }
}
.risk-source {
    width: 100%;
    height: 180px;
    padding-top: 10px;
    .data-risk {
        margin-top: 6px;
        font-size: 6px;
        color: #BEC8D2;
        text-align: center;
        table tr {
            height: 17px;
        }
        table tbody tr td:nth-child(2),tbody tr td:nth-child(3),tbody tr td:nth-child(4),tbody tr td:nth-child(5) {
            color: #2FCCEA;
            font-weight: bold;
        }
        table tbody tr td:nth-child(1){
            text-align: right;
        }
    }
}
.selected {
    background-color: #4DECFF;
    color: #051E39!important;
}
.imgA {
    background-image: url('../../assets/imgs/new/img_a.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
.imgB {
    background-image: url('../../assets/imgs/new/img_b.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
.detail-progress >>> .el-progress-bar__outer {
    background-color: rgba(14,50,97,1);
}
.safe-progress-box >>> svg path:first-child {
    stroke: rgba(14,50,97,1);
}
.meeting-progress-box >>> svg path:first-child {
    stroke: rgba(14,50,97,1);
}

</style>