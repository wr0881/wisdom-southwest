<template>
    <div class="party">
        <Head :paramCurrent="current"></Head>
        <!--<div class="righttop">
            <div class="top-initiate" @click="showpopup" ref="initiate">发起</div>
            <div class="top-receive" @click="showreceive" ref="receive">接收</div>
        </div>-->
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
                <!--<div class="receive-cancel" @click="closereceive">X</div>-->
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
                <div class="reply-box" style="border-bottom:1px solid #0f81d0;padding-bottom:20px;">
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
        <div class="contBox">
            <div class="contbox-left">
                <div class="contleft-box party-box1">
                    <div class="contbox-title">党风廉政</div>
                    <div class="partybox1-table">
                        <table>
                            <thead>
                                <tr>
                                    <th width="19%">责任书数量</th>
                                    <th width="19%">活动次数</th>
                                    <th width="40%">党风廉政活动</th>
                                    <th width="22%">时间</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>3</td>
                                    <td>1</td>
                                    <td>廉政专题学习讨论活动</td>
                                    <td>2020/06/21</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>警示教育活动</td>
                                    <td>2020/05/23</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>3</td>
                                    <td>廉政专题宣传板报活动</td>
                                    <td>2020/04/20</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>4</td>
                                    <td>读书交流会</td>
                                    <td>2020/03/15</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="contleft-box party-box2">
                    <div class="contbox-title">工会工作</div>
                    <div class="partybox2-cont">
                        <div class="partybox2-title">
                            <div class="icon-party2title"></div>
                            <div class="name-party2title">劳动竞赛</div>
                        </div>
                        <div class="partybox2-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="50%">主题</th>
                                        <th width="25%">举办时间</th>
                                        <th width="25%">承办部门</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>水利杯环保知识竞赛</td>
                                        <td>2020/06/21</td>
                                        <td>工程部</td>
                                    </tr>
                                    <tr>
                                        <td>市政杯安全知识竞赛</td>
                                        <td>2020/05/23</td>
                                        <td>安全部</td>
                                    </tr>
                                    <tr>
                                        <td>勤俭节约财务知识竞赛</td>
                                        <td>2020/04/03</td>
                                        <td>财务部</td>
                                    </tr>
                                    <tr>
                                        <td>...</td>
                                        <td>...</td>
                                        <td>...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="partybox2-cont">
                        <div class="partybox2-title">
                            <div class="icon-party2title"></div>
                            <div class="name-party2title">文体活动</div>
                        </div>
                        <div class="partybox2-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="50%">主题</th>
                                        <th width="25%">举办时间</th>
                                        <th width="25%">承办部门</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>羽毛球比赛</td>
                                        <td>2020/06/21</td>
                                        <td>合约部</td>
                                    </tr>
                                    <tr>
                                        <td>篮球比赛</td>
                                        <td>2020/05/23</td>
                                        <td>工程部</td>
                                    </tr>
                                    <tr>
                                        <td>足球比赛</td>
                                        <td>2020/05/02</td>
                                        <td>党群部</td>
                                    </tr>
                                    <tr>
                                        <td>乒乓球比赛</td>
                                        <td>2020/04/15</td>
                                        <td>财务部</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-mid">
                <div class="contbox-midtop">
                    <div class="rotation-box">
                        <div class="main-slide">
                            <div class="mainsilde-bottom">不忘初心、牢记使命</div>
                        </div>
                        <div class="extra-slide">
                            <ul>
                                <li><img width="100%" height="100%" :src="require('../../assets/imgs/party/img_rotation2.png')" /></li>
                                <li><img width="100%" height="100%" :src="require('../../assets/imgs/party/img_rotation3.png')" /></li>
                            </ul>
                        </div>
                    </div>
                    <div class="activity-box">
                        <div class="activity-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th width="10%">序号</th>
                                        <th width="20%">活动名称</th>
                                        <th width="40%">活动内容</th>
                                        <th width="20%">活动时间</th>
                                        <th width="10%">策划人</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>李女士</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>张先生</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>李女士</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>张先生</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- <Table class="small-table" :columns="columns1" :data="data1"></Table>-->
                        </div>
                    </div>
                </div>
                <div class="contbox-midbottom">
                    <div class="contbox-title">大事记</div>
                    <div class="tabs-year">
                        <ul>
                            <li @click="num=0" :class="{active:num==0}">2019</li>
                            <li @click="num=1" :class="{active:num==1}" style="float:right">2020</li>
                        </ul>
                    </div>
                    <div class="month-box" v-show="num==0">
                        <div class="monthbox-box">
                            <ul>
                                <li :class="{active:month1==true}">
                                    <span @click="openMonth1">1</span>
                                    <div v-show="month1">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth1">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month2==true}">
                                    <span @click="openMonth2">2</span>
                                    <div v-show="month2">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth2">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month3==true}">
                                    <span @click="openMonth3">3</span>
                                    <div v-show="month3">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth3">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month4==true}">
                                    <span @click="openMonth4">4</span>
                                    <div v-show="month4">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth4">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month5==true}">
                                    <span @click="openMonth5">5</span>
                                    <div v-show="month5">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth5">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month6==true}">
                                    <span @click="openMonth6">6</span>
                                    <div v-show="month6">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth6">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month7==true}">
                                    <span @click="openMonth7">7</span>
                                    <div v-show="month7">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth7">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month8==true}">
                                    <span @click="openMonth8">8</span>
                                    <div v-show="month8">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth8">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month9==true}">
                                    <span @click="openMonth9">9</span>
                                    <div v-show="month9">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth9">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month10==true}">
                                    <span @click="openMonth10">10</span>
                                    <div v-show="month10">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth10">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month11==true}">
                                    <span @click="openMonth11">11</span>
                                    <div v-show="month11">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth11">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month12==true}">
                                    <span @click="openMonth12">12</span>
                                    <div v-show="month12">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth12">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="month-box" v-show="num==1">
                        <div class="monthbox-box">
                            <ul>
                                <li :class="{active:month1==true}">
                                    <span @click="openMonth1">1</span>
                                    <div v-show="month1">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth1">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month2==true}">
                                    <span @click="openMonth2">2</span>
                                    <div v-show="month2">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth2">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month3==true}">
                                    <span @click="openMonth3">3</span>
                                    <div v-show="month3">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth3">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month4==true}">
                                    <span @click="openMonth4">4</span>
                                    <div v-show="month4">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth4">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month5==true}">
                                    <span @click="openMonth5">5</span>
                                    <div v-show="month5">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth5">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month6==true}">
                                    <span @click="openMonth6">6</span>
                                    <div v-show="month6">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth6">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month7==true}">
                                    <span @click="openMonth7">7</span>
                                    <div v-show="month7">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth7">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month8==true}">
                                    <span @click="openMonth8">8</span>
                                    <div v-show="month8">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth8">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month9==true}">
                                    <span @click="openMonth9">9</span>
                                    <div v-show="month9">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth9">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month10==true}">
                                    <span @click="openMonth10">10</span>
                                    <div v-show="month10">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth10">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month11==true}">
                                    <span @click="openMonth11">11</span>
                                    <div v-show="month11">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth11">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month12==true}">
                                    <span @click="openMonth12">12</span>
                                    <div v-show="month12">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth12">X</div>
                                            <div class="title-popup">大事记</div>
                                            <div class="dashed-popup"></div>
                                            <div class="cont-popup">
                                                <ul>
                                                    <li>大事记<span>2019-01-30</span></li>
                                                    <li>大事记<span>2019-01-29</span></li>
                                                    <li>大事记<span>2019-01-28</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-right">
                <div class="contright-box">
                    <div class="contbox-title">荣誉管理</div>
                    <div class="honor-box">
                        <div class="honorbox-cont">
                            <div class="icon-honorbox personal"></div>
                            <div class="honorbox-box1">
                                <div class="honorbox-top">个人荣誉数</div>
                                <div class="honorbox-bottom">67<span>项</span></div>
                            </div>
                            <div class="honorbox-box2">
                                <div class="honorbox-top">占比</div>
                                <div class="honorbox-bottom">56<span>%</span></div>
                            </div>
                        </div>
                        <div class="honorbox-fill"></div>
                        <div class="honorbox-cont">
                            <div class="icon-honorbox"></div>
                            <div class="honorbox-box1">
                                <div class="honorbox-top">团队荣誉数</div>
                                <div class="honorbox-bottom">328<span>项</span></div>
                            </div>
                            <div class="honorbox-box2">
                                <div class="honorbox-top">占比</div>
                                <div class="honorbox-bottom">78<span>%</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">三会一课</div>
                    <div class="meeting-cont">
                        <div class="meetingcont-box">
                            <div class="meetingcont-title">支部党员大会</div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">举办次数</div>
                                <div class="meetingcont-right"><span>03</span>次</div>
                            </div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">参与人数</div>
                                <div class="meetingcont-right"><span>26</span>人</div>
                            </div>
                        </div>
                        <div class="meetingcont-box meetingright meetingbg">
                            <div class="meetingcont-title">支委会</div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">举办次数</div>
                                <div class="meetingcont-right"><span>05</span>次</div>
                            </div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">参与人数</div>
                                <div class="meetingcont-right"><span>22</span>人</div>
                            </div>
                        </div>
                        <div class="meetingcont-box meetingbg">
                            <div class="meetingcont-title">党小组会</div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">举办次数</div>
                                <div class="meetingcont-right"><span>10</span>次</div>
                            </div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">参与人数</div>
                                <div class="meetingcont-right"><span>50</span>人</div>
                            </div>
                        </div>
                        <div class="meetingcont-box meetingright">
                            <div class="meetingcont-title">党课</div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">举办次数</div>
                                <div class="meetingcont-right"><span>03</span>次</div>
                            </div>
                            <div class="meetingcont-num">
                                <div class="meetingcont-left">参与人数</div>
                                <div class="meetingcont-right"><span>80</span>人</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">人员情况</div>
                    <div class="personalinfo-box">
                        <div class="personalinfo-chart" ref="personalInfo"></div>
                        <div class="personalinfo-cont">
                            <div class="personalinfo-contbox">
                                <div class="icon-personalinfo"></div>
                                <div class="personalinfo-name">党员</div>
                                <div class="personalinfo-num"><span>35</span>人</div>
                                <div class="personalinfo-num"><span>70</span>%</div>
                            </div>
                            <div class="personalinfo-contbox">
                                <div class="icon-personalinfo iconbg2"></div>
                                <div class="personalinfo-name">共青团员</div>
                                <div class="personalinfo-num numcolor2"><span>10</span>人</div>
                                <div class="personalinfo-num numcolor2"><span>20</span>%</div>
                            </div>
                            <div class="personalinfo-contbox">
                                <div class="icon-personalinfo iconbg3"></div>
                                <div class="personalinfo-name">工会会员</div>
                                <div class="personalinfo-num numcolor3"><span>5</span>人</div>
                                <div class="personalinfo-num numcolor3"><span>10</span>%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head4.vue';
import echarts from 'echarts';
import "echarts-gl"

export default {
    name: 'party',
    data() {
        return {
            num: 0,

            animate: false,
            pageInfo: 'party',
            current: 4,

            //月份相关
            month1: false,
            month2: false,
            month3: false,
            month4: false,
            month5: false,
            month6: false,
            month7: false,
            month8: false,
            month9: false,
            month10: false,
            month11: false,
            month12: false,
            
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
    components: {
        Head
    },
    mounted() {
        this.getPageInfo()
        this.getPersonalChart()
    },
    methods: {
        openMonth1() {
            this.month1 = true;
        },
        closeMonth1() {
            this.month1 = false;
        },
        openMonth2() {
            this.month2 = true;
        },
        closeMonth2() {
            this.month2 = false;
        },
        openMonth3() {
            this.month3 = true;
        },
        closeMonth3() {
            this.month3 = false;
        },
        openMonth4() {
            this.month4 = true;
        },
        closeMonth4() {
            this.month4 = false;
        },
        openMonth5() {
            this.month5 = true;
        },
        closeMonth5() {
            this.month5 = false;
        },
        openMonth6() {
            this.month6 = true;
        },
        closeMonth6() {
            this.month6 = false;
        },
        openMonth7() {
            this.month7 = true;
        },
        closeMonth7() {
            this.month7 = false;
        },
        openMonth8() {
            this.month8 = true;
        },
        closeMonth8() {
            this.month8 = false;
        },
        openMonth9() {
            this.month9 = true;
        },
        closeMonth9() {
            this.month9 = false;
        },
        openMonth10() {
            this.month10 = true;
        },
        closeMonth10() {
            this.month10 = false;
        },
        openMonth11() {
            this.month11 = true;
        },
        closeMonth11() {
            this.month11 = false;
        },
        openMonth12() {
            this.month12 = true;
        },
        closeMonth12() {
            this.month12 = false;
        },
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
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
            // this.$refs.footer.style.backgroundColor="#4DECFF";
            // this.$refs.footer.style.boxShadow="inset 0px 0px 5px 1px #4DECFF";
            // this.$refs.footer.style.color="#132F50";
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
        },
        getPersonalChart() {
            var personal = this.$refs.personalInfo;
            if(personal) {
                let myChart = this.$echarts.init(personal);
                myChart.setOption({
                    backgroundColor: '',
                    color: ["#FEB70C", "#FFF5AD", "#D40202"],
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
                            borderColor: 'rgba(95,17,1)'
                        },
                        data: [
                            {name:'党员',value:35},
                            {name:'共青团员',value:10},
                            {name:'工会会员',value:5},
                        ]
                    }]
                })
            }
        }
    },
}
</script>

<style scoped lang="scss">
.party {
    background-image: url('../../assets/imgs/party/bg_party.png');
    width: 100vw;
    height:100vh;
    background-size: 100% 100%;
    position: relative;
}
.contBox {
    box-sizing: border-box;
    width: 960px;
    height: 457px;
    padding: 0 4px; 
    position: absolute;
    top: 72px;
    left: 0;
    display: flex;
    justify-content: space-around;
    .contbox-title {
        width: 94px;
        height: 20px;
        float:left;
        margin-left: 7px;
        margin-top: 7px;
        padding-left: 40px;
        line-height: 20px;
        font-size:8px;
        color: #fff;
        background-image: url('../../assets/imgs/party/contbox_title.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
    }
    .contbox-left {
        width: 230px;
        height: 457px;
        background-image: url('../../assets/imgs/party/bg_contbox_party.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .party-box1 {
            height: 150px!important;
        }
        .contleft-box {
            width: 100%;
            height: 160px;
            .partybox2-cont {
                width: 100%;
                height: 135px;
                float: left;
                .partybox2-title {
                    width: 207px;
                    height: 17px;
                    margin-left: 15px;
                    margin-top: 10px;
                    background-image: url('../../assets/imgs/party/partybox2_title.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .icon-party2title {
                        width: 13px;
                        height: 8px;
                        margin-top: 1px;
                        float: left;
                        background-image: url('../../assets/imgs/party/icon_party2title.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .name-party2title {
                        width: 120px;
                        height: 8px;
                        float: left;
                        margin-left:2px;
                        color: #FFB400;
                        line-height: 10px;
                        font-size: 8px;
                    }
                }
            }
            .partybox2-table {
                padding: 12px 17px!important;
            }
            .partybox1-table,.partybox2-table {
                width: 100%;
                height: 120px;
                padding: 15px 17px;
                float: left;
                table {
                    width: 100%;
                    thead {
                        tr th {
                            background: #A61817;
                            text-align: center;
                            height: 17px;
                            line-height: 17px;
                            font-size: 7px;
                            color: #FFB400;
                            font-weight: 100;
                        }
                    }
                    tbody {
                        tr td {
                            text-align: center;
                            height: 17px;
                            line-height: 17px;
                            font-size: 7px;
                            color: #FFFCEA;
                        }
                        tr:nth-child(2n) {
                            background: #7A0001;
                        }
                    }
                }
            }
        }
    } 
    .contbox-mid {
        width: 460px;
        height: 457px;
        //left: 5px;
        .contbox-midtop {
            width: 100%;
            height: 266px;
            background-image: url('../../assets/imgs/party/bg_midtop_party.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .rotation-box {
                width: 100%;
                height: 150px;
                float: left;
                padding: 21px;
                .main-slide {
                    width: 300px;
                    height: 108px;
                    float: left;
                    background-image: url('../../assets/imgs/party/img_rotation1.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .mainsilde-bottom {
                        width: 100%;
                        height: 20px;
                        margin-top: 88px;
                        line-height: 20px;
                        background: rgba(0,0,0,0.3);
                        text-align: center;
                        font-size: 7px;
                        color: #FEFEFE;
                    }
                }
                .extra-slide {
                    width: 105px;
                    height: 108px;
                    float: right;
                    ul li {
                        width: 100%;
                        height: 50px;
                        list-style: none;
                        float: left;
                        margin-bottom: 8px;
                    }
                }
            }
            .activity-box {
                width: 100%;
                height: 100px;
                float: left;
                .activity-table {
                    width: calc(100% - 42px);
                    height: 160px;
                    margin: auto;
                    overflow-y: auto;
                    table {
                        width: 100%;
                    }
                }
                .contbox-title {
                    width: 60px;
                    height: 20px;
                    margin-left: 10px;
                    margin-top: 10px;
                    text-align: center;
                    line-height: 20px;
                    font-size:8px;
                    color:rgba(65,223,246,1);
                    background-image: url('../../assets/imgs/party/contbox_title.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
            }
            
        }
        .contbox-midbottom {
            width: 100%;
            height: 181px; 
            float: left;
            margin-top: 10px;
            background-image: url('../../assets/imgs/party/bg_midbottom_party.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .tabs-year {
                width: 47px;
                height: 11px;
                float: right;
                margin-right: 15px;
                margin-top: 13px;
                ul {
                    li {
                        list-style: none;
                        width: 21px;
                        height: 11px;
                        line-height: 11px;
                        display: inline-block;
                        text-align: center;
                        background-image: url('../../assets/imgs/party/bg_tabs.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        color: #FFFCEA;
                        cursor: pointer;
                        font-size: 7px;
                    }
                    li.active{
                        background-image: url('../../assets/imgs/party/bg_activetabs.png');
                        color: #000000;
                    }
                }
            }
            .month-box {
                width: calc(100% - 40px);
                height: 120px;
                margin-left: 20px;
                margin-top: 20px;
                float: left;
                background-image: url('../../assets/imgs/party/bg_monthbox.png');
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: 0 70px;
                .monthbox-box {
                    width: 390px;
                    height: 90px;
                    position: relative;
                    ul{
                        li{
                            list-style: none;
                            width: 40px;
                            height: 40px;
                            float: left;
                            line-height: 40px;
                            margin-top: 50px;
                            margin-right: -8px;
                            text-align: center;                            
                            background-image: url('../../assets/imgs/party/bg_month.png');
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background-position: 0 0;
                            cursor: pointer;
                            span {
                                width: 40px;
                                line-height: 40px;
                                display: block;
                                text-align: center;
                                font-size: 20px;
                                font-family:Arial;
                                font-weight:400;
                                color:rgba(137,165,192,1);
                                background:linear-gradient(0deg,rgba(255,242,145,1) 0%, rgba(243,254,255,1) 100%);
                                -webkit-background-clip:text;
                                -webkit-text-fill-color:transparent;
                            }
                            .monthbox-popup {
                                width: 180px;
                                height: 94px;
                                position: fixed;
                                //top: 0px;
                                margin-top: -40px;
                                margin-left: 40px;
                                z-index: 1000;
                                background-image: url('../../assets/imgs/party/bg_monthbox_popup.png');
                                background-repeat: no-repeat;
                                background-size: 100%;
                                background-position: 0 0;
                                //cursor: pointer;
                                .close-popup {
                                    width: 6px;
                                    height: 6px;
                                    float: right;
                                    margin-right: 12px;
                                    margin-top: 6px;
                                    line-height: 6px;
                                    cursor: pointer;
                                }
                                .title-popup {
                                    text-align: left;
                                    font-size: 8px;
                                    height: 28px;
                                    color: #FFA02F;
                                    padding-left: 18px;
                                    margin-top: -8px;
                                }
                                .dashed-popup {
                                    width: 150px;
                                    height: 1px;
                                    border: 1px dashed #B75407; 
                                    margin-left: 16px;
                                    margin-top: 2px; 
                                }
                                .cont-popup {
                                    width: 150px;
                                    height: 36px;
                                    float: left;
                                    margin-left: 18px;
                                    margin-top: 3px;
                                    ul{
                                        li {
                                            list-style: none;
                                            background: none;
                                            height: 12px;
                                            width: 150px;
                                            line-height: 12px;
                                            margin-top: 0px;
                                            text-align: left;
                                            font-size: 7px;
                                            span {
                                                height: 12px;
                                                line-height: 12px;
                                                width: 50px;
                                                font-size: 7px;
                                                float: right;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        li:nth-child(2n){
                            margin-top: 0;
                        }
                        li.active {
                            background-image: url('../../assets/imgs/party/bg_month_active.png');
                            background-repeat: no-repeat;
                            background-size: 100%;
                            background-position: 0 0;
                        }
                    }
                }
                .monthbox2 {
                    margin-top: 15px!important;
                }
            }
        }
    }
    .contbox-right {
        width: 230px;
        height: 457px;
        left: 5px;
        background-image: url('../../assets/imgs/party/bg_contbox_party.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contright-box {
            width: 100%;
            height: 160px;
            float: left;
            .personalinfo-box {
                width: 100%;
                height: 110px;
                float: left;
                padding: 18px 22px;
                .personalinfo-chart {
                    width: 74px;
                    height: 74px;
                    float: left;
                    background-image: url('../../assets/imgs/party/bg_personal.png');
                    background-repeat: no-repeat;
                    background-size: 50% 50%;
                    background-position: center center;
                }
                .personalinfo-cont {
                    width: 100px;
                    height: 72px;
                    float: right;
                    .personalinfo-contbox {
                        width: 100%;
                        height: 23px;
                        border-bottom: 1px solid #841C08;
                        .iconbg2 {
                            background: #FFF5AD!important;
                        }
                        .iconbg3 {
                            background: #D40202!important;
                        }
                        .icon-personalinfo {
                            width: 4px;
                            height: 4px;
                            float: left;
                            margin-top: 12px;
                            background: #FEB70C;
                        }
                        .personalinfo-name {
                            width: 30px;
                            height: 23px;
                            float: left;
                            line-height: 28px;
                            color: #FFFCEA;
                            font-size: 7px;
                            margin-left: 4px;
                        }
                        .numcolor2 {
                            color: #FFF5AD!important;
                        }
                        .numcolor3 {
                            color: #D40202!important;
                        }
                        .personalinfo-num {
                            width: 31px;
                            height: 23px;
                            float: left;
                            line-height: 23px;
                            text-align: right;
                            color: #FEB70C;
                            font-size: 7px;
                            span {
                                font-size: 12px;
                                display: inline-block;
                                margin-right: 2px;
                            }
                        }
                    }
                }
            }
            .honor-box {
                width: 100%;
                height: 132px;
                float: left;
                padding: 16px 22px;
                .honorbox-cont {
                    width: 100%;
                    height: 49px;
                    padding: 6px 0;
                    .personal {
                        width: 34px!important;
                        margin: 0 5px;
                        background-image: url('../../assets/imgs/party/icon_personal.png')!important;
                    }
                    .icon-honorbox {
                        width: 44px;
                        height: 35px;
                        float: left;
                        background-image: url('../../assets/imgs/party/icon_collective.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: center center;
                    }
                    .honorbox-top {
                        width: 100%;
                        height: 11px;
                        line-height: 11px;                        
                    }
                    .honorbox-bottom {
                        width: 100%;
                        height: 24px;
                        line-height: 24px;
                        font-size: 18px;
                        font-weight: bold;
                        color:rgba(91,255,11,1);
                        background:linear-gradient(0deg,rgba(255,150,0,1) 0%, rgba(250,205,202,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                        span {
                            margin-left: 4px;
                            font-size: 8px;
                        }
                    }
                    .honorbox-box1 {
                        width: 64px;
                        height: 35px;
                        float: left;
                        margin-left: 36px;
                    }
                    .honorbox-box2 {
                        width: 40px;
                        height: 35px;
                        float: left;
                    }
                }
                .honorbox-fill {
                    width: 100%;
                    height: 2px;
                    background-image: url('../../assets/imgs/party/bg_honorfill.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
            }
            .meeting-cont {
                width: 100%;
                height: 120px;
                float: left;
                margin-top: 6px;
                padding: 0 15px;
                .meetingright {
                    float: right!important;
                }
                .meetingbg {
                    background-image: url('../../assets/imgs/party/bg_meetingbox2.png')!important;
                }
                .meetingcont-box {
                    width: 94px;
                    height: 47px;
                    float: left;
                    margin-top: 12px;
                    background-image: url('../../assets/imgs/party/bg_meetingbox1.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .meetingcont-title {
                        width: 100%;
                        height: 18px;
                        line-height: 18px;
                        padding-left: 14px;
                        font-size: 7px;
                    }
                    .meetingcont-num {
                        width: 100%;
                        height: 14px;
                        float: left;
                        line-height: 10px;
                        padding-left: 14px;
                        .meetingcont-left {
                            width: 32px;
                            height: 14px;
                            float: left;
                            font-size: 7px;
                        }
                        .meetingcont-right {
                            width: 36px;
                            height: 14px;
                            float: left;
                            text-align: right;
                            font-size: 7px;
                            color:rgba(255,252,234,1);
                            background:linear-gradient(0deg,rgba(253,168,4,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-family: LED;
                                font-size: 14px;
                                letter-spacing: 1.5px;
                            }
                        }
                    }
                }
            }
        }
    }
}

.activity-table table {
    thead {
        tr th {
            background: #A61817;
            text-align: center;
            height: 17px;
            line-height: 17px;
            font-size: 7px;
            color: #FFB400;
        }
    }
    tbody {
        tr td {
            text-align: center;
            height: 17px;
            line-height: 17px;
            font-size: 7px;
            color: #FFFCEA;
        }
        tr:nth-child(2n) {
            background: #7A0001;
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