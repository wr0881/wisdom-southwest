<template>
    <div class="party">
        <Head :paramCurrent="current"></Head>
        <!--<Message></Message>-->
        <div class="contBox">
            <div class="contbox-left">
                <div class="contleft-box party-box1">
                    <div class="contbox-title">荣誉管理</div>
                    <div class="partybox1-cont">
                        <div class="partycont1-box">
                            <div class="icon-partycont1 icon-personal"></div>
                            <div class="data-partycont1">
                                <div class="partycont1-left">个人荣誉数</div>
                                <div class="partycont1-right"><span>67</span>项</div>
                            </div>
                            <div class="data-partycont1">
                                <div class="partycont1-left">占比</div>
                                <div class="partycont1-right"><span>18</span>%</div>
                            </div>
                        </div>
                        <div class="partycont1-box">
                            <div class="icon-partycont1 icon-collective"></div>
                            <div class="data-partycont1">
                                <div class="partycont1-left">团队荣誉数</div>
                                <div class="partycont1-right"><span>328</span>项</div>
                            </div>
                            <div class="data-partycont1">
                                <div class="partycont1-left">占比</div>
                                <div class="partycont1-right"><span>82</span>%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contleft-box party-box2">
                    <div class="contbox-title">党风廉政</div>
                    <div class="partybox1-table">
                        <CTable
                            :columns='this.gqtgz.col'
                            :data='this.gqtgz.list'
                        ></CTable>
                    </div>
                </div>
                <div class="contleft-box party-box3">
                    <div class="contbox-title">工会工作</div>
                    <div class="tabs-activity">
                        <ul>
                            <li @click="activity=0" :class="{active:activity==0}">劳动竞技</li>
                            <li @click="activity=1" :class="{active:activity==1}" style="float:right">文体活动</li>
                        </ul>
                    </div>
                    <div class="partybox2-table" v-show="activity==0">
                        <table>
                            <thead>
                                <tr>
                                    <th width="20%">主题</th>
                                    <th width="40%">内容</th>
                                    <th width="20%">举办时间</th>
                                    <th width="20%">承办部门</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>劳动竞技</td>
                                    <td>公司总部工会开展春季拔河比赛</td>
                                    <td>2020/06/21</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>羽毛球比赛</td>
                                    <td>总部代表队在公司第二届职工羽毛球比赛</td>
                                    <td>2020/05/23</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>篮球比赛</td>
                                    <td>公司总部“篮球友谊邀请赛”于4月2日展开</td>
                                    <td>2020/04/03</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>拔河比赛</td>
                                    <td>公司总部工会开展春季拔河比赛</td>
                                    <td>2020/06/21</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>羽毛球比赛</td>
                                    <td>总部代表队在公司第二届职工羽毛球比赛</td>
                                    <td>2020/05/23</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>篮球比赛</td>
                                    <td>公司总部“篮球友谊邀请赛”于4月2日展开</td>
                                    <td>2020/04/03</td>
                                    <td>总经办</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="partybox2-table" v-show="activity==1">
                        <table>
                            <thead>
                                <tr>
                                    <th width="20%">主题</th>
                                    <th width="40%">内容</th>
                                    <th width="20%">举办时间</th>
                                    <th width="20%">承办部门</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>文体活动</td>
                                    <td>公司总部工会开展春季拔河比赛</td>
                                    <td>2020/06/21</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>羽毛球比赛</td>
                                    <td>总部代表队在公司第二届职工羽毛球比赛</td>
                                    <td>2020/05/23</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>篮球比赛</td>
                                    <td>公司总部“篮球友谊邀请赛”于4月2日展开</td>
                                    <td>2020/04/03</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>拔河比赛</td>
                                    <td>公司总部工会开展春季拔河比赛</td>
                                    <td>2020/06/21</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>羽毛球比赛</td>
                                    <td>总部代表队在公司第二届职工羽毛球比赛</td>
                                    <td>2020/05/23</td>
                                    <td>总经办</td>
                                </tr>
                                <tr>
                                    <td>篮球比赛</td>
                                    <td>公司总部“篮球友谊邀请赛”于4月2日展开</td>
                                    <td>2020/04/03</td>
                                    <td>总经办</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="contbox-mid">
                <div class="contbox-title">党群活动</div>
                <div class="contbox-midtop">
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
                                    <tr>
                                        <td>5</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>李女士</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>张先生</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>党建活动</td>
                                        <td>2020.5.10举行党建活动,以响应党的号召</td>
                                        <td>2020-05-05</td>
                                        <td>李女士</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
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
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month2==true}">
                                    <span @click="openMonth2">2</span>
                                    <div v-show="month2">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth2">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month3==true}">
                                    <span @click="openMonth3">3</span>
                                    <div v-show="month3">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth3">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month4==true}">
                                    <span @click="openMonth4">4</span>
                                    <div v-show="month4">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth4">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month5==true}">
                                    <span @click="openMonth5">5</span>
                                    <div v-show="month5">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth5">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month6==true}">
                                    <span @click="openMonth6">6</span>
                                    <div v-show="month6">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth6">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month7==true}">
                                    <span @click="openMonth7">7</span>
                                    <div v-show="month7">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth7">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month8==true}">
                                    <span @click="openMonth8">8</span>
                                    <div v-show="month8">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth8">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month9==true}">
                                    <span @click="openMonth9">9</span>
                                    <div v-show="month9">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth9">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month10==true}">
                                    <span @click="openMonth10">10</span>
                                    <div v-show="month10">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth10">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month11==true}">
                                    <span @click="openMonth11">11</span>
                                    <div v-show="month11">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth11">X</div>
                                        </div>
                                    </div>
                                </li>
                                <li :class="{active:month12==true}">
                                    <span @click="openMonth12">12</span>
                                    <div v-show="month12">
                                        <div class="monthbox-popup">
                                            <div class="close-popup" @click="closeMonth12">X</div>
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
                    <div class="tabs-selecttype">
                        <ul>
                            <li @click="type=0" :class="{active:type==0}">年</li>
                            <li @click="type=1" :class="{active:type==1}" style="">月</li>
                            <li @click="type=2" :class="{active:type==2}" style="">累计</li>
                        </ul>
                    </div>
                    <div class="data-contright1" v-show="type==0">
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit1"></div>
                            <div class="contright1-box title">信访</div>
                            <div class="contright1-box num"><span>0</span>次</div>
                        </div>
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit2"></div>
                            <div class="contright1-box title">思想教育</div>
                            <div class="contright1-box num"><span>10</span>次</div>
                        </div>
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit3"></div>
                            <div class="contright1-box title">党员教育</div>
                            <div class="contright1-box num"><span>10</span>次</div>
                        </div>
                    </div>
                    <div class="data-contright1" v-show="type==1">
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit1"></div>
                            <div class="contright1-box title">信访</div>
                            <div class="contright1-box num"><span>0</span>次</div>
                        </div>
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit2"></div>
                            <div class="contright1-box title">思想教育</div>
                            <div class="contright1-box num"><span>3</span>次</div>
                        </div>
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit3"></div>
                            <div class="contright1-box title">党员教育</div>
                            <div class="contright1-box num"><span>2</span>次</div>
                        </div>
                    </div>
                    <div class="data-contright1" v-show="type==2">
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit1"></div>
                            <div class="contright1-box title">信访</div>
                            <div class="contright1-box num"><span>1</span>次</div>
                        </div>
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit2"></div>
                            <div class="contright1-box title">思想教育</div>
                            <div class="contright1-box num"><span>28</span>次</div>
                        </div>
                        <div class="contright1-box">
                            <div class="icon-contright1 iconvisit3"></div>
                            <div class="contright1-box title">党员教育</div>
                            <div class="contright1-box num"><span>50</span>次</div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">人员情况</div>
                    <div class="contright2-box">
                        <div class="contright2-left"></div>
                        <div class="contright2-right">
                            <div class="rightcont2-box">
                                <div class="circle-rightcont2 circle1"></div>
                                <div class="rightcont2-name">党员</div>
                                <div class="rightcont2-num">56人</div>
                                <div class="rightcont2-num">67%</div>
                            </div>
                            <div class="rightcont2-box">
                                <div class="circle-rightcont2 circle2"></div>
                                <div class="rightcont2-name">共青团员</div>
                                <div class="rightcont2-num">16人</div>
                                <div class="rightcont2-num">20%</div>
                            </div>
                            <div class="rightcont2-box">
                                <div class="circle-rightcont2 circle3"></div>
                                <div class="rightcont2-name">工会成员</div>
                                <div class="rightcont2-num">11人</div>
                                <div class="rightcont2-num">13%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">三会一课</div>
                    <div class="contright3-box">
                        <div class="contright3-cont">
                            <div class="rightcont3-box">
                                <div class="circle-rightcont3"></div>
                                <div class="title-rightcont3">支部党员大会</div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">举办次数:<span>3次</span></div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">参与人次:<span>26人</span></div>
                            </div> 
                        </div>
                        <div class="contright3-cont">
                            <div class="rightcont3-box">
                                <div class="circle-rightcont3"></div>
                                <div class="title-rightcont3">执委会</div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">举办次数:<span>5次</span></div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">参与人次:<span>22人</span></div>
                            </div>
                        </div>
                        <div class="contright3-cont">
                            <div class="rightcont3-box">
                                <div class="circle-rightcont3"></div>
                                <div class="title-rightcont3">党小组会</div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">举办次数:<span>10次</span></div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">参与人次:<span>50人</span></div>
                            </div>
                        </div>
                        <div class="contright3-cont">
                            <div class="rightcont3-box">
                                <div class="circle-rightcont3"></div>
                                <div class="title-rightcont3">党课</div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">举办次数:<span>3次</span></div>
                            </div>
                            <div class="rightcont3-box">
                                <div class="num-rightcont3">参与人次:<span>80人</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">培训</div>
                    <div class="partybox1-table">
                        <table>
                            <thead>
                                <tr>
                                    <th width="25%">类型</th>
                                    <th width="25%">次数</th>
                                    <th width="25%">人次</th>
                                    <th width="25%">取得</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>西南公司</td>
                                    <td>2</td>
                                    <td>20</td>
                                    <td>19</td>
                                </tr>
                                <tr>
                                    <td>局公司</td>
                                    <td>5</td>
                                    <td>50</td>
                                    <td>49</td>
                                </tr>
                                <tr>
                                    <td>集团</td>
                                    <td>6</td>
                                    <td>60</td>
                                    <td>58</td>
                                </tr>
                                <tr>
                                    <td>局外单位</td>
                                    <td>10</td>
                                    <td>100</td>
                                    <td>96</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head4.vue';
import Message from '../message/index';
import CTable from '@/components/table/ctable.vue'
// import echarts from 'echarts';
// import "echarts-gl"
export default {
    name: 'party3',
    data() {
        return {
            activity: 0,
            num: 0,
            type: 0,
            popup1: 0,
            animate: false,
            pageInfo: 'party3',
            current: 4,
            //共青团工作
            gqtgz: {
                col: [
                    {
                        title: '主题',
                        key: 'theme',
                        align: 'center',
                    },
                    {
                        title: '内容',
                        key: 'content',
                        align: 'center',
                    },
                    {
                        title: '举办时间',
                        key: 'hosttime',
                        align: 'center',
                    },
                    {
                        title: '承办部门',
                        key: 'undertake',
                        align: 'center'
                    }
                ],
                list: [
                    {
                        theme: '2020青年岗',
                        content: '青年号品牌创建',
                        hosttime: '2020/06/21',
                        undertake: '总经办'
                    },
                    {
                        theme: '2019青年岗',
                        content: '青年号品牌创建',
                        hosttime: '2019/06/21',
                        undertake: '总经办'
                    },
                    {
                        theme: '2018青年岗',
                        content: '青年号品牌创建',
                        hosttime: '2018/06/21',
                        undertake: '总经办'
                    },
                    {
                        theme: '2017青年岗',
                        content: '青年号品牌创建',
                        hosttime: '2017/06/21',
                        undertake: '总经办'
                    },
                    {
                        theme: '2016青年岗',
                        content: '青年号品牌创建',
                        hosttime: '2016/06/21',
                        undertake: '总经办'
                    },
                    {
                        theme: '2015青年岗',
                        content: '青年号品牌创建',
                        hosttime: '2015/06/21',
                        undertake: '总经办'
                    },
                ]
            },
            
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
        }
    },    
    components: {
        Head,
        Message,
        CTable
    },
    mounted() {
        this.getPageInfo()
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
        }       
    },
}
</script>

<style scoped lang="scss">
.party {
    background-image: url('../../assets/imgs/party/bg_party1.png');
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
        background-image: url('../../assets/imgs/party/bg_contbox1_party.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .partybox1-cont {
            width: 100%;
            height: 90px;
            float: left;
            padding: 4px 20px;
            .partycont1-box {
                width: 50%;
                height: 100%;
                float: left;
                .icon-personal {
                    width: 37px;
                    background-image: url('../../assets/imgs/party/icon_personal1.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: center center; 
                }
                .icon-collective {
                    width: 53px;
                    background-image: url('../../assets/imgs/party/icon_collective1.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: center center; 
                }
                .icon-partycont1 {                   
                    height: 40px;
                    margin: auto;
                }
                .data-partycont1 {
                    width: 100%;
                    height: 16px;
                    margin-top: 4px;
                    .partycont1-left {
                        width: 50%;
                        height: 16px;
                        line-height: 16px;
                        float: left;
                        text-align: right;
                        font-size: 7px;
                        color: #DFB7B1;
                    }
                    .partycont1-right {
                        width: 44%;
                        height: 16px;
                        line-height: 16px;
                        float: right;
                        color: #FFBA0F;
                        font-size: 7px;
                        span {
                            font-size: 16px;
                            line-height: 12px;
                        }
                    }
                }
            }
        }
        .party-box1 {
            height: 115px;
        }
        .party-box2 {
            height: 170px;
        }
        .party-box3 {
            height: 160px;
        }
        .tabs-activity {
            width: 70px;
            height: 11px;
            float: right;
            margin-right: 15px;
            margin-top: 13px;
            ul {
                li {
                    list-style: none;
                    width: 32px;
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
        .contleft-box {
            width: 100%;
            //height: 160px;
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
        }
    } 
    .contbox-mid {
        width: 460px;
        height: 457px;
        //left: 5px;
        .contbox-midtop {
            width: 100%;
            height: 240px;
            background-image: url('../../assets/imgs/party/bg_midtop1_party.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .activity-box {
                width: 100%;
                height: 100px;
                float: left;
                margin-top: 18px;
                .activity-table {
                    width: calc(100% - 42px);
                    height: 164px;
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
            height: 208px; 
            float: left;
            margin-top: 10px;
            background-image: url('../../assets/imgs/party/bg_midbottom1_party.png');
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
                height: 160px;
                margin-left: 20px;
                margin-top: 20px;
                float: left;
                background-image: url('../../assets/imgs/party/bg_monthbox.png');
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: 0 90px;
                .monthbox-box {
                    width: 410px;
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
        background-image: url('../../assets/imgs/party/bg_contbox1_party.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contright-box {
            width: 100%;
            //height: 160px;
            float: left;
            .contright2-box {
                width: 100%;
                height: 80px;
                float: left;
                .contright2-left {
                    
                }
                .contright2-right {
                    width: 112px;
                    height: 80px;
                    float: right;
                    padding: 10px 0;
                    .rightcont2-box {
                        width: 100%;
                        height: 20px;
                        float: left;
                        font-size: 7px;
                        .circle-rightcont2 {
                            width: 4px;
                            height: 4px;
                            float: left;
                            margin-top: 8px;
                            border-radius: 50%;
                        }
                        .circle1 {
                            background: #FED74B;
                        }
                        .circle2 {
                            background: #FF7723;
                        }
                        .circle3 {
                            background: #A1DA3D;
                        }
                        .rightcont2-name {
                            width: 38px;
                            height: 20px;
                            line-height: 20px;
                            float: left;
                            margin-left: 5px;
                        }
                        .rightcont2-num {
                            width: 25px;
                            height: 20px;
                            line-height: 20px;
                            float: left;
                            font-size: 8px;
                            font-weight:bolder;
                            background:linear-gradient(0deg,rgba(245,227,63,1) 0%, rgba(255,255,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                        }
                    }
                }
            }
            .contright3-box {
                width: 100%;
                height: 110px;
                float: left;
                padding: 4px 25px;
                .contright3-cont {
                    width: 90px;
                    height: 45px;
                    float: left;
                    margin-top: 4px;
                    .rightcont3-box {
                        width: 90px;
                        height: 15px;
                        line-height: 15px;
                        float: left;
                        .circle-rightcont3 {
                            width: 4px;
                            height: 4px;
                            float: left;
                            margin-left: 10px;
                            margin-top: 4px;
                            background: linear-gradient(0deg,rgba(245,227,63,1),rgba(255,255,255,1));
                            border-radius:50%;;
                        }
                        .title-rightcont3 {
                            width: 70px;
                            height: 15px;
                            float: left;
                            font-size: 8px;
                            margin-left: 4px;
                            color: #FFA02F;
                            font-weight:bold;
                            font-style:italic;
                            background:linear-gradient(0deg,rgba(245,227,63,1) 0%, rgba(255,255,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                        }
                        .num-rightcont3 {
                            color: #FFA02F;
                            font-size: 7px;
                            padding-left: 18px;
                            span {
                                margin-left: 4px;
                            }
                        }
                    }
                }
            }
            .data-contright1 {
                width: 100%;
                height: 62px;
                padding: 15px 12px;
                float: left;
                .contright1-box {
                    width: 68px;
                    height: 32px;
                    float: left;
                    .icon-contright1 {
                        width: 36px;
                        height: 32px;
                        float: left;
                    }
                    .iconvisit1 {
                        background-image: url('../../assets/imgs/party/icon_visit1.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .iconvisit2 {
                        background-image: url('../../assets/imgs/party/icon_visit2.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .iconvisit3 {
                        background-image: url('../../assets/imgs/party/icon_visit3.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                    .contright1-box {
                        width: 32px;
                        height: 16px;
                        float: left;
                        font-size: 7px;
                        line-height: 18px;
                    }
                    .title {
                        color: #F3CC9D;
                        font-weight: bold;
                        background:linear-gradient(0deg,rgba(245,227,63,1) 0%, rgba(255,255,255,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                    .num {
                        color: #FFA02F;
                        span {
                            font-size: 14px;
                        }
                    }
                }
            }
            .tabs-selecttype {
                width: 100%;
                height: 11px;
                float: left;
                margin-top: 10px;
                margin-left: 10px;
                ul li {
                    list-style: none;
                    width: 20px;
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
                    margin-right: 3px;
                }
                ul li.active{
                    background-image: url('../../assets/imgs/party/bg_activetabs.png');
                    color: #000000;
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
.partybox1-table,.partybox2-table {
    width: 100%;
    height: 130px;
    padding: 10px 13px;
    float: left;
    table {
        width: 100%;
        thead {
            tr th {
                background: #A61817;
                text-align: center;
                height: 15px;
                line-height: 15px;
                font-size: 7px;
                color: #FFB400;
                font-weight: 100;
            }
        }
        tbody {
            tr td {
                text-align: center;
                height: 15px;
                line-height: 15px;
                max-width: 80px;
                font-size: 7px;
                color: #FFFCEA;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            tr:nth-child(2n) {
                background: #7A0001;
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
</style>