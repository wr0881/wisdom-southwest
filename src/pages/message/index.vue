<template>
    <div class="message-box">
        <div class="righttop">
            <div class="top-initiate" @click="showpopup" ref="initiate">发起</div>
            <div class="top-receive" @click="showreceive" ref="receive">接收</div>
        </div>
        <div v-show="popup">
            <div class="popup">
                <!--<div class="popup-cancel" @click="closepopup">X</div>-->
                <div class="popup-box">
                    <div class="popup-personicon"></div>
                    <div class="popup-personname">王总</div>
                </div>
                <div class="popup-box">
                    <div class="popup-title">选中</div>
                    <div class="popup-cont">党建活动</div>
                </div>
                <div class="popup-box">
                    <div class="popup-title">备注</div>
                    <div class="popup-cont" style="height:70px;">
                        <i-input type="textarea" placeholder="请输入..."></i-input>
                    </div>
                </div>
                <div class="popup-box" style="">
                    <div class="popup-title">推送</div>
                    <div class="popup-cont">
                        <div>李经理</div>
                        <div class="popupcont-line"></div>
                        <div>张经理</div>
                    </div>
                </div>
                <div class="popup-footer" style="margin-top:100px;">
                    <div class="footer-button" @click="confirm" ref="footer">确定</div>
                    <div class="footer-button" style="float:right" @click="cancel" ref="footer">取消</div>
                </div>
            </div>
        </div>
        <div v-show="receive">
            <div class="receive">
                <div class="receive-table">
                    <i-table 
                        :show-header="false" 
                        :border="false" 
                        :columns="columns1" 
                        :data="data1"
                        @on-row-click="showreply"
                    ></i-table>
                </div>
                <div class="receive-page">
                    <Page :total="6" show-total></Page>
                </div>
                
            </div>
        </div>
        <div v-show="reply">
            <div class="reply">
                <div class="reply-back" @click="closereply"><div class="icon-back"></div>返回</div>
                <div class="reply-box">
                    <div class="reply-title">发起人</div>
                    <div class="reply-cont">李经理</div>
                </div>
                <div class="reply-box">
                    <div class="reply-title">发起</div>
                    <div class="reply-cont">党建活动</div>
                </div>
                <div class="reply-box">
                    <div class="reply-title">备注</div>
                    <div class="reply-cont">此项是否更新?</div>
                </div>
                <div class="reply-box">
                    <div class="reply-title">发起时间</div>
                    <div class="reply-cont">2020-05-19</div>
                </div>
                <div class="reply-box">
                    <div class="reply-title">推送</div>
                    <div class="reply-cont">王总</div>
                </div>
                <div class="reply-box">
                    <div class="reply-title">回复</div>
                    <div class="reply-cont" style="height:50px;">
                        <i-input type="textarea" placeholder="请输入..."></i-input>
                    </div>
                </div>
                <div class="popup-footer">
                    <div class="footer-button" @click="confirm1" ref="footer">确定</div>
                    <div class="footer-button" style="float:right" @click="cancel1" ref="footer">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'message',
    data() {
        return {
            popup: 0,
            receive: 0,
            reply: 0,
            columns1: [
                {
                    title: '',
                    key: 'name',
                    width: 160
                },
                {
                    title: '',
                    key: 'age',
                    width: 80
                },
                {
                    title: '',
                    key: 'address',
                    width: 80
                },
                {
                    title: '',
                    key: 'event',
                    width: 120
                }
            ],
            data1: [
                {
                    name: '2020-05-19 14:00',
                    age: '发起',
                    address: '一般',
                    event: '党建活动'
                },
                {
                    name: '2020-05-19 14:00',
                    age: '发起',
                    address: '一般',
                    event: '部位隐蔽验收'
                },
                {
                    name: '2020-05-19 14:00',
                    age: '发起',
                    address: '一般',
                    event: '党建活动'
                },
                {
                    name: '2020-05-19 14:00',
                    age: '发起',
                    address: '一般',
                    event: '党建活动'
                },
                {
                    name: '2020-05-19 14:00',
                    age: '发起',
                    address: '一般',
                    event: '党建活动'
                },
                {
                    name: '2020-05-19 14:00',
                    age: '发起',
                    address: '一般',
                    event: '党建活动'
                },
            ]
        }
    },
    methods: {
        //打开活动规则页面
        showpopup() {
            this.popup = 1;
            this.reply = 0;
            this.$refs.initiate.style.backgroundColor="#4DECFF";
            this.$refs.initiate.style.boxShadow="inset 0px 0px 5px 1px #4DECFF";
            this.$refs.initiate.style.color="#132F50";
            this.closereceive();
        },
        textareaclick() {
            this.popup = 1;
        },
        confirm() {
            this.popup = 0;
            this.$refs.initiate.style.backgroundColor="";
            this.$refs.initiate.style.boxShadow="inset 0px 0px 5px 1px #0f81d0";
            this.$refs.initiate.style.color="#BEC8D2";
        },
        cancel() {
            this.popup = 0;
            this.$refs.initiate.style.backgroundColor="";
            this.$refs.initiate.style.boxShadow="inset 0px 0px 5px 1px #0f81d0";
            this.$refs.initiate.style.color="#BEC8D2";
        },
        //关闭活动规则页面
        closepopup() {           
            this.popup = 0;
            console.log(this.popup,'关闭发起弹窗');
            this.$refs.initiate.style.backgroundColor="";
            this.$refs.initiate.style.boxShadow="inset 0px 0px 5px 1px #0f81d0";
            this.$refs.initiate.style.color="#BEC8D2";
        },
        showreceive() {
            this.receive = 1;
            this.$refs.receive.style.backgroundColor="#4DECFF";
            this.$refs.receive.style.boxShadow="inset 0px 0px 5px 1px #4DECFF";
            this.$refs.receive.style.color="#132F50";
            this.closepopup();
        },
        closereceive() {           
            this.receive = 0;
            console.log(this.receive,'关闭接收弹窗');
            this.$refs.receive.style.backgroundColor="";
            this.$refs.receive.style.boxShadow="inset 0px 0px 5px 1px #0f81d0";
            this.$refs.receive.style.color="#BEC8D2";
        },
        showreply() {
            this.reply = 1;
            this.receive = 0;
        },
        closereply() {
            this.reply = 0;
            this.receive = 1;
        },
        confirm1() {
            this.reply = 0;
            this.$refs.receive.style.backgroundColor="";
            this.$refs.receive.style.boxShadow="inset 0px 0px 5px 1px #0f81d0";
            this.$refs.receive.style.color="#BEC8D2";
        },
        cancel1() {
            this.reply = 0;
            this.receive = 1;
        }
    }
}
</script>

<style lang="scss" scoped>
.message-box {
    .righttop {
        width: 100px;
        height: 20px;
        position: absolute;
        right: 10px;
        top: 45px;
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
        top: 162px;
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
        //height: 200px;
        width: 250px;
        padding: 10px;
        background-image: url('../../assets/imgs/new/bg_popup_top.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        left: 86.2%;
        top: 166.5px;
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
            //height: 0px;
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
            line-height: 15px;
            background-color: transparent;
            margin-right: 0;
        }
        >>> .ivu-page-item {
            width: 16px;
            height: 16px;
            min-width: 16px;
            line-height: 15px;
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
            font-size: 8px;
            line-height: 32px;
            margin-right: 0;
            padding-right: 4px ;
            color: #fff;
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
}
</style>