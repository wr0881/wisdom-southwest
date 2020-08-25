<template>
    <div class="mapbox-cont">
        <div class="tabs-province">
            <ul>
                <li @click="province=0" :class="{active:province==0}">云南</li>
                <li @click="province=1" :class="{active:province==1}">贵州</li>
                <li @click="province=2" :class="{active:province==2}">四川</li>
                <li @click="province=3" :class="{active:province==3}">重庆</li>
                <li @click="province=4" :class="{active:province==4}">西藏</li>
            </ul>
        </div>
        <div class="mark-box">项目位置</div>
        <div class="map-box" v-show="province==0">
            <div class="area-info">
                <div class="areainfo-box">
                    <div class="areainfo-title">云南区域</div>
                    <div class="areainfo-personal"><span>人员：</span>张晓晓&nbsp;李国涛&nbsp;王欣</div>
                    <div class="areainfo-table">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th width="20%"></th>
                                    <th width="40%">数量(个)</th>
                                    <th width="40%">合同额(亿)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>招标</td>
                                    <td>5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>跟踪</td>
                                    <td>4</td>
                                    <td>3.2</td>
                                </tr>
                                <tr>
                                    <td>中标</td>
                                    <td>3</td>
                                    <td>2.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="area-map yunnan">
                <div class="point-kunming">
                    <div class="ripple" @click="showKunming">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <transition
                        name="slide-fade"
                    >
                        <div class="popup" v-show="pointKunming" @click="closeKunming">
                            <div class="popup-box">
                                <div class="popupbox-title">昆明市市政污水治理项目</div>
                                <div class="popupbox-cont">
                                    <div class="popupbox-li"><span>人员&nbsp;:&nbsp;</span>宋启超&nbsp;  李艳云&nbsp;  王源宇</div>
                                    <div class="popupbox-li"><span>时间&nbsp;:&nbsp;</span>2019.9.10-2020.5.30</div>
                                    <div class="popupbox-li"><span>合同额&nbsp;:&nbsp;</span>1.2亿</div>
                                    <div class="popupbox-li"><span>业主&nbsp;:&nbsp;</span>宇宙投标有限公司</div>
                                    <div class="popupbox-li"><span>难点&nbsp;:&nbsp;</span>疫情原因项目搁置</div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="point-qujing">
                    <div class="ripple" @click="showQujing">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <transition
                        name="slide-fade"
                    >
                        <div class="popup" v-show="pointQujing" @click="closeQujing">
                            <div class="popup-box">
                                <div class="popupbox-title">曲靖市市政污水治理项目</div>
                                <div class="popupbox-cont">
                                    <div class="popupbox-li"><span>人员&nbsp;:&nbsp;</span>宋启超&nbsp;  李艳云&nbsp;  王源宇</div>
                                    <div class="popupbox-li"><span>时间&nbsp;:&nbsp;</span>2019.9.10-2020.5.30</div>
                                    <div class="popupbox-li"><span>合同额&nbsp;:&nbsp;</span>1.2亿</div>
                                    <div class="popupbox-li"><span>业主&nbsp;:&nbsp;</span>宇宙投标有限公司</div>
                                    <div class="popupbox-li"><span>难点&nbsp;:&nbsp;</span>疫情原因项目搁置</div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <div class="map-box" v-show="province==1">
            <div class="area-info">
                <div class="areainfo-box">
                    <div class="areainfo-title">贵州区域</div>
                    <div class="areainfo-personal"><span>人员：</span>张晓晓&nbsp;李国涛&nbsp;王欣</div>
                    <div class="areainfo-table">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th width="20%"></th>
                                    <th width="40%">数量(个)</th>
                                    <th width="40%">合同额(亿)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>招标</td>
                                    <td>5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>跟踪</td>
                                    <td>4</td>
                                    <td>3.2</td>
                                </tr>
                                <tr>
                                    <td>中标</td>
                                    <td>3</td>
                                    <td>2.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="area-map guizhou"></div>
        </div>
        <div class="map-box" v-show="province==2">
            <div class="area-info">
                <div class="areainfo-box">
                    <div class="areainfo-title">四川区域</div>
                    <div class="areainfo-personal"><span>人员：</span>张晓晓&nbsp;李国涛&nbsp;王欣</div>
                    <div class="areainfo-table">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th width="20%"></th>
                                    <th width="40%">数量(个)</th>
                                    <th width="40%">合同额(亿)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>招标</td>
                                    <td>5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>跟踪</td>
                                    <td>4</td>
                                    <td>3.2</td>
                                </tr>
                                <tr>
                                    <td>中标</td>
                                    <td>3</td>
                                    <td>2.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="area-map sichuan"></div>
        </div>
        <div class="map-box" v-show="province==3">
            <div class="area-info">
                <div class="areainfo-box">
                    <div class="areainfo-title">重庆区域</div>
                    <div class="areainfo-personal"><span>人员：</span>张晓晓&nbsp;李国涛&nbsp;王欣</div>
                    <div class="areainfo-table">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th width="20%"></th>
                                    <th width="40%">数量(个)</th>
                                    <th width="40%">合同额(亿)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>招标</td>
                                    <td>5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>跟踪</td>
                                    <td>4</td>
                                    <td>3.2</td>
                                </tr>
                                <tr>
                                    <td>中标</td>
                                    <td>3</td>
                                    <td>2.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="area-map chongqing"></div>
        </div>
        <div class="map-box" v-show="province==4">
            <div class="area-info">
                <div class="areainfo-box">
                    <div class="areainfo-title">西藏区域</div>
                    <div class="areainfo-personal"><span>人员：</span>张晓晓&nbsp;李国涛&nbsp;王欣</div>
                    <div class="areainfo-table">
                        <table border="0" cellpadding="0" cellspacing="0">
                            <thead>
                                <tr>
                                    <th width="20%"></th>
                                    <th width="40%">数量(个)</th>
                                    <th width="40%">合同额(亿)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>招标</td>
                                    <td>5</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>跟踪</td>
                                    <td>4</td>
                                    <td>3.2</td>
                                </tr>
                                <tr>
                                    <td>中标</td>
                                    <td>3</td>
                                    <td>2.8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="area-map xizang"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'map1',
    data() {
        return {
            province: 0,
            pointKunming: 0,
            pointQujing: 0,
        }
    },
    mounted() {
        
    },
    methods: {
        showKunming() {
            this.pointKunming = 1;
        },
        closeKunming() {
            this.pointKunming = 0;
        },
        showQujing() {
            this.pointQujing = 1;
        },
        closeQujing() {
            this.pointQujing = 0;
        }
    }
}
</script>

<style lang="scss" scoped>
//@import './map.scss';
@mixin keyframes($animationName) {
    @keyframes #{$animationName} {
        @content;
    }
}

@mixin ripple() {
    animation: ripple 1.5s 0s linear infinite;
    @include keyframes(ripple) {
        0% {
            -webkit-transform: scale(0);
            transform: scale(0);
            opacity: 0;
        }
        5% {
            opacity: 1;
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            opacity: 0;
        }
    }
}
.ripple {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer;
}
.ripple span {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 0;
    bottom: 0;
    background: #FFFB00;
    opacity: 0;
    border-radius: 50%;
    z-index: 999;
    @include ripple();
}
.ripple span:nth-child(1) {
    background: #FFFB00;
}
.ripple span:nth-child(2) {
    background: #FFFB00;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
}
.ripple span:nth-child(3) {
    background: #FFFB00;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}

.mapbox-cont {
    .tabs-province {
        width: 150px;
        height: 30px;
        float: right;
        margin-top: -5px;
        ul { 
            li {
                width: 30px;
                height: 30px;
                list-style: none;
                float: left;
                cursor: pointer;
                font-size: 7px;
                background-image: url('../../assets/imgs/market/bg_tab.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
                text-align: center;
                line-height: 30px;
                color: rgba(12,86,159,1);
            }
            li.active {
                background-image: url('../../assets/imgs/market/bg_tab_active.png');
                color: #fff;
            }
        }
    }
    .mark-box {
        width: 56px;
        height: 18px;
        position: absolute;
        left: 650px;
        top: 30px; 
        padding-left: 20px;
        background-image: url('../../assets/imgs/market/icon_address.png');
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 0 0;
        line-height: 18px;
        font-size: 7px;
    }
    .map-box {
        width: 100%;
        height: 100%;
        .area-info {
            width: 121px;
            height: 128px;
            float: left;
            margin-left: 4px;
            background-image: url('../../assets/imgs/market/bg_areainfo.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .areainfo-box {
                width: 92px;
                height: 128px;
                float: left;
                margin-left: 16px;
                .areainfo-title {
                    width: 92px;
                    height: 27px;
                    line-height: 28px;
                    border-bottom: 1px solid rgba(17,113,157,0.21);
                    font-size: 10px;
                    color: #59E0FF;
                }
                .areainfo-personal {
                    width: 92px;
                    height: 23px;
                    line-height: 23px;
                    font-size: 7px;
                    span {
                        color: #59E0FF;
                    }
                }
                .areainfo-table table {
                    width: 100%;
                    thead {
                        tr th {
                            background: #01305C;
                            height: 14px;
                            line-height: 14px;
                            border: 0;
                            color: #59E0FF;
                            font-size: 7px;
                            font-weight: 400;
                        }
                    } 
                    tbody {
                        tr td {
                            border-bottom: 1px solid rgba(17,113,157,0.21);
                            height: 15px;
                            line-height: 15px;
                            text-align: center;
                            font-size: 7px;
                        }
                        tr td:nth-child(1) {
                            color: #59E0FF;
                        }
                    }
                }
            }
        }
        .area-map {
            width: 386px;
            height: 256px;
            margin: auto;
            .popup {
                position: fixed;
                width: 146px;
                height: 104px;
                margin-left: 10px;
                margin-top: -56px;
                z-index: 1000;
                background-image: url('../../assets/imgs/market/bg_popup.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
                transition: width 1s;
                cursor: pointer;
                .popup-box {
                    width: 100px;
                    height: 80px;
                    float: left;
                    margin-left: 30px;
                    margin-top: 6px;
                    .popupbox-title {
                        width: 100%;
                        height: 15px;
                        line-height: 15px;
                        border-bottom: 1px solid rgba(7,143,206,0.21);
                        font-size: 8px;
                        color:rgba(255,255,255,1);
                        background:linear-gradient(0deg,rgba(1,238,254,0.63) 0%, rgba(255,255,255,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                    .popupbox-cont {
                        width: 100%;
                        height: 60px;
                        margin-top: 4px;
                        .popupbox-li {
                            width: 100%;
                            height: 12px;
                            line-height: 12px;
                            font-size: 6px;
                            letter-spacing: 1px;
                            span {
                                color: #89A5C0;
                            }
                        }
                    }
                }
            }
            //展开动画
            .slide-fade-enter-active, .slide-fade-leave-active {
                transition: opacity 2s;
            }
            .slide-fade-enter, .slide-fade-leave-to {
                opacity: 0;
            }
        }
        .yunnan {
            background-image: url('../../assets/imgs/market/map_yunnan.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .point-qujing {
                width: 155px;
                height: 146px;
                position: relative;
                top: -46px;
                left: 238px;
            }
            .point-kunming {
                width: 155px;
                height: 146px;
                position: relative;
                top: 100px;
                left: 210px;
            }
        }
        .guizhou {
            background-image: url('../../assets/imgs/market/map_guizhou.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .sichuan {
            background-image: url('../../assets/imgs/market/map_sichuan.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .chongqing {
            background-image: url('../../assets/imgs/market/map_chongqing.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
        .xizang {
            background-image: url('../../assets/imgs/market/map_xizang.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
        }
    }
}
</style>