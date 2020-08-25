<template>
    <div class="hr">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>
        <div class="contBox">
            <div class="contbox-left">
                <div class="contleftbox-fill"></div>
                <div class="contleft-box contbox1">
                    <div class="contbox-title">人员学历</div>
                    <div class="contbox1-box">
                        <div class="contbox1-cont">
                            <div class="bg-contbox1">
                                <div class="circle-contbox1 circlecont1"></div>
                                <div class="contbox1-title">博士</div>
                                <div class="contbox1-num colorcont1"><span>8</span>人</div>
                            </div>
                        </div>
                        <div class="contbox1-cont">
                            <div class="bg-contbox1">
                                <div class="circle-contbox1 circlecont2"></div>
                                <div class="contbox1-title">硕士</div>
                                <div class="contbox1-num colorcont2"><span>12</span>人</div>
                            </div>
                        </div>
                        <div class="contbox1-cont">
                            <div class="bg-contbox1">
                                <div class="circle-contbox1 circlecont3"></div>
                                <div class="contbox1-title">本科</div>
                                <div class="contbox1-num colorcont3"><span>42</span>人</div>
                            </div>
                        </div>
                        <div class="contbox1-cont">
                            <div class="bg-contbox1">
                                <div class="circle-contbox1 circlecont4"></div>
                                <div class="contbox1-title">大专</div>
                                <div class="contbox1-num colorcont4"><span>21</span>人</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contleft-box contbox2">
                    <div class="contbox-title widthcontbox2">学分完成情况</div>
                    <div class="tabs-position">
                        <ul>
                            <li @click="position=0" :class="{active:position==0}">领导</li>
                            <li @click="position=1" :class="{active:position==1}">部门长</li>
                            <li @click="position=2" :class="{active:position==2}">员工</li>
                        </ul>
                    </div>
                    <div class="cont-position" v-show="position==0">
                        <div class="proportion-data">
                            <div class="data-box1" style="width:10%">1人</div>
                            <div class="data-box2" style="width:20%">2人</div>
                            <div class="data-box3" style="width:50%">5人</div>
                            <div class="data-box4" style="width:20%">2人</div>
                        </div>
                        <div class="proportion-box">
                            <div class="proportion-cont">
                                <div class="proportion-box1" style="width:10%"></div>
                                <div class="proportion-box2" style="width:20%"></div>
                                <div class="proportion-box3" style="width:50%"></div>
                                <div class="proportion-box4" style="width:20%"></div>
                            </div>
                        </div>
                        <div class="proportion-legend">
                            <div class="legend-box">
                                <div class="square-box bgsquare1"></div>
                                <div class="legend-name colorname1">0~30分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare2"></div>
                                <div class="legend-name colorname2">31~60分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare3"></div>
                                <div class="legend-name colorname3">61~90分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare4"></div>
                                <div class="legend-name colorname4">91~120分</div>
                            </div>
                        </div>
                    </div>
                    <div class="cont-position" v-show="position==1">
                        <div class="proportion-data">
                            <div class="data-box1" style="width:10%">2人</div>
                            <div class="data-box2" style="width:10%">2人</div>
                            <div class="data-box3" style="width:60%">12人</div>
                            <div class="data-box4" style="width:20%">4人</div>
                        </div>
                        <div class="proportion-box">
                            <div class="proportion-cont">
                                <div class="proportion-box1" style="width:10%"></div>
                                <div class="proportion-box2" style="width:10%"></div>
                                <div class="proportion-box3" style="width:60%"></div>
                                <div class="proportion-box4" style="width:20%"></div>
                            </div>
                        </div>
                        <div class="proportion-legend">
                            <div class="legend-box">
                                <div class="square-box bgsquare1"></div>
                                <div class="legend-name colorname1">0~30分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare2"></div>
                                <div class="legend-name colorname2">31~60分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare3"></div>
                                <div class="legend-name colorname3">61~90分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare4"></div>
                                <div class="legend-name colorname4">91~120分</div>
                            </div>
                        </div>
                    </div>
                    <div class="cont-position" v-show="position==2">
                        <div class="proportion-data">
                            <div class="data-box1" style="width:10%">5人</div>
                            <div class="data-box2" style="width:20%">10人</div>
                            <div class="data-box3" style="width:60%">30人</div>
                            <div class="data-box4" style="width:10%">5人</div>
                        </div>
                        <div class="proportion-box">
                            <div class="proportion-cont">
                                <div class="proportion-box1" style="width:10%"></div>
                                <div class="proportion-box2" style="width:20%"></div>
                                <div class="proportion-box3" style="width:60%"></div>
                                <div class="proportion-box4" style="width:10%"></div>
                            </div>
                        </div>
                        <div class="proportion-legend">
                            <div class="legend-box">
                                <div class="square-box bgsquare1"></div>
                                <div class="legend-name colorname1">0~30分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare2"></div>
                                <div class="legend-name colorname2">31~60分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare3"></div>
                                <div class="legend-name colorname3">61~90分</div>
                            </div>
                            <div class="legend-box">
                                <div class="square-box bgsquare4"></div>
                                <div class="legend-name colorname4">91~120分</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contleft-box contbox3">
                    <div class="contbox-title">人员专业</div>
                    <div class="contbox3-box">
                        <div class="contbox3-chart" ref="contbox3Chart"></div>
                        <div class="contbox3-right">
                            <div class="box3right-box">
                                <div class="circle-contbox3 bgbox1"></div>
                                <div class="title-contbox3">土木类</div>
                                <div class="num-contbox3 colorbox1">21</div>
                            </div>
                            <div class="box3right-box">
                                <div class="circle-contbox3 bgbox2"></div>
                                <div class="title-contbox3">水利类</div>
                                <div class="num-contbox3 colorbox2">31</div>
                            </div>
                            <div class="box3right-box">
                                <div class="circle-contbox3 bgbox3"></div>
                                <div class="title-contbox3">机械类</div>
                                <div class="num-contbox3 colorbox3">14</div>
                            </div>
                            <div class="box3right-box">
                                <div class="circle-contbox3 bgbox4"></div>
                                <div class="title-contbox3">财会类</div>
                                <div class="num-contbox3 colorbox4">6</div>
                            </div>
                            <div class="box3right-box">
                                <div class="circle-contbox3 bgbox5"></div>
                                <div class="title-contbox3">测绘类</div>
                                <div class="num-contbox3 colorbox5">11</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contleft-box contbox4">
                    <div class="contbox-title">考勤统计</div>
                    <div class="contbox4-box">
                        <div class="contbox4-cont">
                            <div class="contbox4-chart">
                                <v-circle-progress :percent="percent1" :progressConfig="progressConfig1" :circleRadius='44' :progressGradient='true' :percentConfig='percentConfig1' :percentGradient='true'></v-circle-progress>
                            </div>
                            <div class="contbox4-right">
                                <div class="title-contbox4">应到人数</div>
                                <div class="num-contbox4 colortime1">83</div>
                            </div>
                        </div>
                        <div class="contbox4-cont">
                            <div class="contbox4-chart">
                                <v-circle-progress1 :percent="percent2" :progressConfig="progressConfig2" :circleRadius='44' :progressGradient='true' :percentConfig='percentConfig2' :percentGradient='true'></v-circle-progress1>
                            </div>
                            <div class="contbox4-right">
                                <div class="title-contbox4">实到人数</div>
                                <div class="num-contbox4 colortime2">79</div>
                            </div>
                        </div>
                        <div class="contbox4-cont">
                            <div class="contbox4-chart">
                                <v-circle-progress2 :percent="percent3" :progressConfig="progressConfig3" :circleRadius='44' :progressGradient='true' :percentConfig='percentConfig3' :percentGradient='true'></v-circle-progress2>
                            </div>
                            <div class="contbox4-right">
                                <div class="title-contbox4">请假人数</div>
                                <div class="num-contbox4 colortime3">2</div>
                            </div>
                        </div>
                        <div class="contbox4-cont">
                            <div class="contbox4-chart">
                                <v-circle-progress3 :percent="percent4" :progressConfig="progressConfig4" :circleRadius='44' :progressGradient='true' :percentConfig='percentConfig4' :percentGradient='true'></v-circle-progress3>
                            </div>
                            <div class="contbox4-right">
                                <div class="title-contbox4">迟到人数</div>
                                <div class="num-contbox4 colortime4">4</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-mid">
                <div class="contbox-midtop">
                    <div class="contmidbox-fill"></div>
                    <div class="contbox-title">证书统计</div>
                    <div class="contbox-midtopbox1">
                        <div class="midtopbox-title">一级建造师</div>
                        <div class="midtopbox-box1">
                            <div class="midbox-cont">
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 icongonglu"></div>
                                        <div class="title-midbox1">公路工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>56</span>本</div>
                                </div>
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconshuidian"></div>
                                        <div class="title-midbox1">水利水电工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>58</span>本</div>
                                </div>
                            </div>
                            <div class="midbox-interval"></div>
                            <div class="midbox-cont">
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconjianzhu"></div>
                                        <div class="title-midbox1">建筑工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>66</span>本</div>
                                </div>
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconshizheng"></div>
                                        <div class="title-midbox1">市政公用工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>58</span>本</div>
                                </div>
                            </div>
                            <div class="midbox-interval"></div>
                            <div class="midbox-cont">
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 icontielu"></div>
                                        <div class="title-midbox1">铁路工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>48</span>本</div>
                                </div>
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 icontongxin"></div>
                                        <div class="title-midbox1">通信与广电工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>17</span>本</div>
                                </div>
                            </div>
                            <div class="midbox-interval"></div>
                            <div class="midbox-cont">
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconjichang"></div>
                                        <div class="title-midbox1">民航机场工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>32</span>本</div>
                                </div>
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconkuangye"></div>
                                        <div class="title-midbox1">矿业工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>58</span>本</div>
                                </div>
                            </div>
                            <div class="midbox-interval"></div>
                            <div class="midbox-cont">
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconhangdao"></div>
                                        <div class="title-midbox1">港口与航道工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>69</span>本</div>
                                </div>
                                <div class="midbox1-box">
                                    <div class="midbox1-top">
                                        <div class="icon-midbox1 iconjidian"></div>
                                        <div class="title-midbox1">机电工程</div>
                                    </div>
                                    <div class="midbox1-bottom"><span>65</span>本</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contbox-midtopbox2">
                        <div class="midtopbox-title">二级建造师</div>
                        <div class="midtopbox-box2">
                            <div class="midbox2-box">
                                <div class="midbox2-top">
                                    <div class="icon-midbox2 iconjidian"></div>
                                    <div class="title-midbox2">机电工程</div>
                                </div>
                                <div class="midbox2-bottom"><span>65</span>本</div>
                            </div>
                            <div class="midbox2-interval"></div>
                            <div class="midbox2-box">
                                <div class="midbox2-top">
                                    <div class="icon-midbox2 iconjianzhu"></div>
                                    <div class="title-midbox2">建筑工程</div>
                                </div>
                                <div class="midbox2-bottom"><span>58</span>本</div>
                            </div>
                            <div class="midbox2-interval"></div>
                            <div class="midbox2-box">
                                <div class="midbox2-top">
                                    <div class="icon-midbox2 iconshizheng"></div>
                                    <div class="title-midbox2">市政公用工程</div>
                                </div>
                                <div class="midbox2-bottom"><span>44</span>本</div>
                            </div>
                            <div class="midbox2-interval"></div>
                            <div class="midbox2-box">
                                <div class="midbox2-top">
                                    <div class="icon-midbox2 icongonglu"></div>
                                    <div class="title-midbox2">公路工程</div>
                                </div>
                                <div class="midbox2-bottom"><span>36</span>本</div>
                            </div>
                            <div class="midbox2-interval"></div>
                            <div class="midbox2-box">
                                <div class="midbox2-top">
                                    <div class="icon-midbox2 iconshuidian"></div>
                                    <div class="title-midbox2">水利水电工程</div>
                                </div>
                                <div class="midbox2-bottom"><span>45</span>本</div>
                            </div>
                            <div class="midbox2-interval"></div>
                            <div class="midbox2-box">
                                <div class="midbox2-top">
                                    <div class="icon-midbox2 iconkuangye"></div>
                                    <div class="title-midbox2">矿业工程</div>
                                </div>
                                <div class="midbox2-bottom"><span>76</span>本</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contbox-midbottom">
                    <div class="midbottom-left">
                        <div class="contbox-title">人员异动</div>
                        <div class="midbottomleft-box">
                            <div class="midbottomleft-cont">
                                <div class="bg-midbottomleft">
                                    <div class="circle-midbottomleft circlecont1"></div>
                                    <div class="midbottomleft-title">新入</div>
                                    <div class="midbottomleft-num colorcont1"><span>5</span>人</div>
                                </div>
                            </div>
                            <div class="midbottomleft-cont">
                                <div class="bg-midbottomleft">
                                    <div class="circle-midbottomleft circlecont2"></div>
                                    <div class="midbottomleft-title">合同签署</div>
                                    <div class="midbottomleft-num colorcont2"><span>54</span>人</div>
                                </div>
                            </div>
                            <div class="midbottomleft-cont">
                                <div class="bg-midbottomleft">
                                    <div class="circle-midbottomleft circlecont3"></div>
                                    <div class="midbottomleft-title">续签</div>
                                    <div class="midbottomleft-num colorcont3"><span>1</span>人</div>
                                </div>
                            </div>
                            <div class="midbottomleft-cont">
                                <div class="bg-midbottomleft">
                                    <div class="circle-midbottomleft circlecont4"></div>
                                    <div class="midbottomleft-title">拒签</div>
                                    <div class="midbottomleft-num colorcont4"><span>2</span>人</div>
                                </div>
                            </div>
                            <div class="midbottomleft-cont">
                                <div class="bg-midbottomleft">
                                    <div class="circle-midbottomleft circlecont5"></div>
                                    <div class="midbottomleft-title">离职</div>
                                    <div class="midbottomleft-num colorcont5"><span>2</span>人</div>
                                </div>
                            </div>
                            <div class="midbottomleft-cont">
                                <div class="bg-midbottomleft">
                                    <div class="circle-midbottomleft circlecont6"></div>
                                    <div class="midbottomleft-title">调岗</div>
                                    <div class="midbottomleft-num colorcont6"><span>2</span>人</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="midbottom-right">
                        <div class="contbox-title">用工模式</div>
                        <div class="midbottomright-box">
                            <div class="midbottomright-chart">
                                <div class="midbottomchart-left">
                                    <div class="midbottomright-fill1"></div>
                                    <div class="midbottomright-cont">外包</div>
                                    <div class="midbottomright-cont"><span>83</span>个</div>
                                </div>
                                <div class="midbottomchart-right">
                                <div class="midbottomright-fill2"></div>
                                    <div class="midbottomright-cont">自有</div>
                                    <div class="midbottomright-cont"><span>65</span>个</div>
                                </div>
                            </div>
                            <div class="midbottomright-data">
                                <div class="midright-box">
                                    <div class="midright-box1">外包</div>
                                    <div class="midright-box1 numright1">57%</div>
                                </div> 
                                <div class="midright-box">
                                    <div class="midright-box1">自有</div>
                                    <div class="midright-box1 numright2">43%</div>
                                </div>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contbox-right">
                <div class="contrightbox-fill"></div>
                <div class="contright-box">
                    <div class="contbox-title">职称统计</div>
                    <div class="techtitle-box">
                        <div class="techtitle-chart" ref="techtitleChart"></div>
                        <div class="techtitle-right">
                            <div class="techtitle-rightbox">
                                <div class="circle-rightbox bgtechtitle1"></div>
                                <div class="title-rightbox">助理工程师</div>
                                <div class="num-rightbox colortechtitle1">5</div>
                                <div class="num-rightbox colortechtitle1">6%</div>
                            </div>
                            <div class="techtitle-rightbox">
                                <div class="circle-rightbox bgtechtitle2"></div>
                                <div class="title-rightbox">中级工程师</div>
                                <div class="num-rightbox colortechtitle2">40</div>
                                <div class="num-rightbox colortechtitle2">48%</div>
                            </div>
                            <div class="techtitle-rightbox">
                                <div class="circle-rightbox bgtechtitle3"></div>
                                <div class="title-rightbox">高级工程师</div>
                                <div class="num-rightbox colortechtitle3">26</div>
                                <div class="num-rightbox colortechtitle3">31%</div>
                            </div>
                            <div class="techtitle-rightbox">
                                <div class="circle-rightbox bgtechtitle4"></div>
                                <div class="title-rightbox">教授工程师</div>
                                <div class="num-rightbox colortechtitle4">6</div>
                                <div class="num-rightbox colortechtitle4">7%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">八大员统计</div>
                    <div class="position-box">
                        <div class="positiondata-box">
                            <div class="position-title">安全员</div>
                            <div class="position-data">11</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">施工员</div>
                            <div class="position-data">18</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">质量员</div>
                            <div class="position-data">10</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">材料员</div>
                            <div class="position-data">12</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">机械员</div>
                            <div class="position-data">12</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">标准员</div>
                            <div class="position-data">5</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">资料员</div>
                            <div class="position-data">5</div>
                        </div>
                        <div class="positiondata-box">
                            <div class="position-title">造价员</div>
                            <div class="position-data">10</div>
                        </div>
                    </div>
                </div>
                <div class="contright-box">
                    <div class="contbox-title">招聘</div>
                    <div class="recruit-contbox">
                        <table>
                            <thead>
                                <tr>
                                    <th width="20%">专业</th>
                                    <th width="20%">计划</th>
                                    <th width="20%">简历</th>
                                    <th width="20%">面试</th>
                                    <th width="20%">招录</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>水利</td>
                                    <td>5</td>
                                    <td>32</td>
                                    <td>13</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>会计</td>
                                    <td>6</td>
                                    <td>53</td>
                                    <td>29</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>公路</td>
                                    <td>8</td>
                                    <td>23</td>
                                    <td>25</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>桥梁</td>
                                    <td>4</td>
                                    <td>21</td>
                                    <td>11</td>
                                    <td>5</td>
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
var that;
let timer;
import Head from '@/components/head/head9.vue';
import echarts from 'echarts';
import "echarts-gl";
import VCircleProgress from "@/components/circle-progress/CircleProgress.vue";
import VCircleProgress1 from "@/components/circle-progress/CircleProgress1.vue";
import VCircleProgress2 from "@/components/circle-progress/CircleProgress2.vue";
import VCircleProgress3 from "@/components/circle-progress/CircleProgress3.vue";

export default {
    name: 'humanr3',
    data() {
        return {   
            bg1: require('../../assets/imgs/a.png'),
            pageInfo: 'humanr3',
            current: 6,
            position: 0,

            imgUrl1: require('../../assets/imgs/humanr/icon_gonglu.png'),
            imgUrl2: require('../../assets/imgs/humanr/icon_jianzhu.png'),
            imgUrl3: require('../../assets/imgs/humanr/icon_tielu.png'),
            imgUrl4: require('../../assets/imgs/humanr/icon_jichang.png'),
            imgUrl5: require('../../assets/imgs/humanr/icon_hangdao.png'),
            imgUrl6: require('../../assets/imgs/humanr/icon_shuidian.png'),
            imgUrl7: require('../../assets/imgs/humanr/icon_shizheng.png'),
            imgUrl8: require('../../assets/imgs/humanr/icon_tongxin.png'),
            imgUrl9: require('../../assets/imgs/humanr/icon_kuangye.png'),
            imgUrl10: require('../../assets/imgs/humanr/icon_jidian.png'),

            percent1: 100,
            progressConfig1: {
                ringWidth: 6,
                ringBackground: "#041F40",
                ringColor: "#20A0FF",
                startGradient: "#558DFF",
                endGradient: "#558DFF"
            },
            percentConfig1: {
                size: 20,
                txtColor: "#f00",
                startGradient: "#558DFF",
                endGradient: "#558DFF"
            },
            percent2: 95,
            progressConfig2: {
                ringWidth: 6,
                ringBackground: "#041F40",
                ringColor: "#20A0FF",
                startGradient: "#3AB9FF",
                endGradient: "#3AB9FF"
            },
            percentConfig2: {
                size: 20,
                txtColor: "#f00",
                startGradient: "#3AB9FF",
                endGradient: "#3AB9FF"
            },
            percent3: 2,
            progressConfig3: {
                ringWidth: 6,
                ringBackground: "#041F40",
                ringColor: "#20A0FF",
                startGradient: "#D7F94D",
                endGradient: "#D7F94D"
            },
            percentConfig3: {
                size: 20,
                txtColor: "#f00",
                startGradient: "#D7F94D",
                endGradient: "#D7F94D"
            },
            percent4: 3,
            progressConfig4: {
                ringWidth: 6,
                ringBackground: "#041F40",
                ringColor: "#20A0FF",
                startGradient: "#FFA02F",
                endGradient: "#FFA02F"
            },
            percentConfig4: {
                size: 20,
                txtColor: "#f00",
                startGradient: "#FFA02F",
                endGradient: "#FFA02F"
            }
        }
    },
    
    components: {
        Head,
        VCircleProgress,
        VCircleProgress1,
        VCircleProgress2,
        VCircleProgress3,
    },
    mounted() {
        this.getPageInfo();
        this.contbox3Chart();
        this.techtitleChart();  
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        contbox3Chart() {
            let boxchart = this.$refs.contbox3Chart;
            if(boxchart) {
                let myChart = this.$echarts.init(boxchart);
                myChart.setOption({
                    color: ["#558DFF","#66FFCC","#3AB9FF","#E3F94D","#01FE55"],
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        radius: ['65%','80%'],
                        center: ['50%','50%'],
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 0,
                            borderColor: '#051E39'
                        },
                        data: [
                            {name:'土木类',value:21},
                            {name:'水利类',value:31},
                            {name:'机械类',value:14},
                            {name:'财会类',value:6},
                            {name:'测绘类',value:11}
                        ]
                    }]
                })
            }
        },
        techtitleChart() {
            var techchart = this.$refs.techtitleChart;
            if(techchart) {
                let myChart = this.$echarts.init(techchart);
                myChart.setOption({
                    color: ["#558DFF","#66FFCC","#3AB9FF","#E3F94D"],
                    legend: {
                        show: false
                    },
                    series: [{
                        type: 'pie',
                        radius: ['55%','70%'],
                        center: ['50%','50%'],
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            borderWidth: 0,
                            borderColor: '#051E39'
                        },
                        data: [
                            {name:'助理工程师',value:5},
                            {name:'中级工程师',value:40},
                            {name:'高级工程师',value:26},
                            {name:'教授工程师',value:6}
                        ]
                    }]
                })
            }
        }
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
.circle-progress-example{
  padding: 20px;
}
.contBox {
    box-sizing: border-box;
    width: 960px;
    height: 457px;
    padding: 0 4px; 
    position: absolute;
    top: 73px;
    left: 0;
    display: flex;
    justify-content: space-around;
    .contbox-left {
        width: 260px;
        height: 457px;
        background-image: url('../../assets/imgs/humanr/bg_contleft1.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contleftbox-fill {
            height: 6px;
        }
        .contbox1 {
            
        }
        .contbox2 {
            
        }
        .contbox3 {
            
        }
        .contbox4 {
            
        }
        .contleft-box {
            width: 100%;
            //height: 108px;
            .contbox1-box {
                width: 100%;
                height: 74px;
                float: left;
                padding: 3px 21px;
                margin-top: 4px;
                .contbox1-cont {
                    width: 50%;
                    height: 32px;
                    float: left;
                    .bg-contbox1 {
                        width: 95px;
                        height: 26px;
                        margin: 3px auto;
                        position: absolute;
                        background:linear-gradient(180deg,rgba(9,49,87,1) 0%,rgba(6,36,69,1) 100%);
                        border-radius:3px;
                        .circle-contbox1 {
                            width: 3px;
                            height: 3px;
                            border-radius: 50%;
                            float: left;
                            margin-left: 4px;
                            margin-top: 4px;
                        }
                        .circlecont1 {
                            background: #66FFCC;
                        }
                        .circlecont2 {
                            background: #39B9FF;
                        }
                        .circlecont3 {
                            background: #E3F94D;
                        }
                        .circlecont4 {
                            background: #FFA02F;
                        }
                        .contbox1-title {
                            width: 32px;
                            height: 26px;
                            line-height: 30px;
                            float: left;
                            text-align: center;
                            font-size: 8px;                           
                        }
                        .contbox1-num {
                            width: 42px;
                            height: 26px;
                            line-height: 26px;
                            float: left;
                            text-align: right;
                            font-size: 8px;
                            span {
                                margin-right: 4px;
                                font-family: LED;
                                font-size: 16px;
                                letter-spacing: 1.5px;
                            }
                        }
                        .colorcont1 {
                            color: #66FFCC;
                        }
                        .colorcont2 {
                            color: #39B9FF;
                        }
                        .colorcont3 {
                            color: #E3F94D;
                        }
                        .colorcont4 {
                            color: #FFA02F;
                        }

                    }
                }
            }
            .widthcontbox2 {
                width: 60px!important;
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                float: left;
                margin-left: 6px;
                // margin-top: 6px;
                text-align: center;
                line-height: 16px;
                font-size:8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .tabs-position {
                width: 110px;
                height: 12px;
                float: right;
                margin-right: 10px;
                margin-top: 2px;
                ul {
                    li {
                        list-style: none;
                        width: 30px;
                        height: 12px;
                        line-height: 12px;
                        display: inline-block;
                        text-align: center;
                        margin-left: 5px;
                        border-radius: 2px;
                        box-shadow: inset 0px 0px 5px 1px #0f81d0;
                        cursor: pointer;
                        font-size: 8px;
                    }
                    li.active {
                        background: #4DECFF;
                        color: #143254;
                        box-shadow: inset 0px 0px 0px 0px #0f81d0;
                    }
                }
            }
            .cont-position {
                width: 100%;
                height: 82px;
                float: left;
                .proportion-data {
                    width: 170px;
                    height: 30px;
                    float: left;
                    margin-left: 45px;
                    margin-top: 8px;
                    font-size: 8px;
                    padding: 0 2.5px;
                    text-align: center;
                    .data-box1 {
                        height: 30px;
                        float: left;
                        background:linear-gradient(0deg,rgba(85,141,255,0.2) 0%,rgba(107,24,4,0) 100%);
                        line-height: 40px;
                        color: #558DFF;
                    }
                    .data-box2 {
                        height: 30px;
                        float: left;
                        background:linear-gradient(0deg,rgba(102,255,204,0.2) 0%,rgba(107,24,4,0) 100%);
                        line-height: 40px;
                        color: #66FFCC;
                    }
                    .data-box3 {
                        height: 30px;
                        float: left;
                        background:linear-gradient(0deg,rgba(58,185,255,0.2) 0%,rgba(93,17,2,0) 100%);
                        line-height: 40px;
                        color: #3AB9FF;
                    }
                    .data-box4 {
                        height: 30px;
                        float: left;
                        background:linear-gradient(0deg,rgba(219,249,77,0.2) 0%,rgba(107,24,4,0) 100%);
                        line-height: 40px;
                        color: #E3F94D;
                    }
                }
                .proportion-box {
                    width: 170px;
                    height: 11px;
                    float: left;
                    margin-left: 45px;
                    border-radius: 11px;
                    border: 1px solid rgba(76,234,253,1);
                    .proportion-cont {
                        width: 100%;
                        padding: 1.5px;
                    }
                    .proportion-box1 {
                        height: 7px;
                        float: left;
                        border-radius: 7px 0 0 7px;
                        background: #558DFF;
                    }
                    .proportion-box2 {
                        height: 7px;
                        float: left;
                        background: #66FFCC;
                    }
                    .proportion-box3 {
                        height: 7px;
                        float: left;
                        background: #3AB9FF;
                    }
                    .proportion-box4 {
                        height: 7px;
                        float: left;
                        border-radius: 0 7px 7px 0;
                        background: #E3F94D;
                    }
                }
                .proportion-legend {
                    width: 100%;
                    height: 7px;
                    float: left;
                    margin-top: 10px;
                    padding: 0 42px;
                    .legend-box {
                        width: 44px;
                        height: 7px;
                        float: left;
                        .square-box {
                            width: 5px;
                            height: 5px;
                            float: left;
                            //margin-top: 1px;
                        }
                        .bgsquare1 {
                            background: #558DFF;
                        }
                        .bgsquare2 {
                            background: #66FFCC;
                        }
                        .bgsquare3 {
                            background: #3AB9FF;
                        }
                        .bgsquare4 {
                            background: #E3F94D;
                        }

                        .legend-name {
                            width: 32px;
                            height: 7px;
                            line-height: 7px;
                            float: left;
                            margin-left: 3px;
                            font-size: 7px;
                        }
                        .colorname1 {
                            color: #558DFF;
                        }
                        .colorname2 {
                            color: #66FFCC;
                        }
                        .colorname3 {
                            color: #3AB9FF;
                        }
                        .colorname4 {
                            color: #E3F94D;
                        }
                    }
                }
            }
            .contbox3-box {
                width: 100%;
                height: 82px;
                float: left;
                .contbox3-chart {
                    width: 160px;
                    height: 82px;
                    float: left;
                }
                .contbox3-right {
                    width: 98px;
                    height: 82px;
                    float: left;
                    .box3right-box {
                        width: 98px;
                        height: 16px;
                        line-height: 16px;
                        float: left;
                        font-size: 7px;
                        .circle-contbox3 {
                            width: 3px;
                            height: 3px;
                            border-radius: 50%;
                            float: left;
                            margin-top: 6px;
                        }
                        .bgbox1 {
                            background: #558DFF;
                        }
                        .bgbox2 {
                            background: #66FFCC;
                        }
                        .bgbox3 {
                            background: #3AB9FF;
                        }
                        .bgbox4 {
                            background: #E3F94D;
                        }
                        .bgbox5 {
                            background: #01FE55;
                        }
                        .title-contbox3 {
                            width: 35px;
                            height: 16px;
                            float: left;
                            margin-left: 12px;
                        }
                        .num-contbox3 {
                            width: 24px;
                            height: 16px;
                            float: left;
                        }
                        .colorbox1 {
                            color: #558DFF;
                        }
                        .colorbox2 {
                            color: #66FFCC;
                        }
                        .colorbox3 {
                            color: #3AB9FF;
                        }
                        .colorbox4 {
                            color: #E3F94D;
                        }
                        .colorbox5 {
                            color: #01FE55;
                        }
                    }
                }
            }
            .contbox4-box {
                width: 100%;
                height: 130px;
                float: left;
                .contbox4-cont {
                    width: 80px;
                    height: 44px;
                    float: left;
                    margin-left: 36px;
                    margin-top: 14px;
                    .contbox4-chart {
                        width: 44px;
                        height: 44px;
                        float: left;
                    }
                    .contbox4-right {
                        width: 28px;
                        height: 44px;
                        float: left;
                        margin-left: 7px;
                        margin-top: 6px;
                        .title-contbox4 {
                            width: 28px;
                            height: 16px;
                            line-height: 16px;
                            float: left; 
                            font-size: 7px;                           
                        }
                        .num-contbox4 {
                            width: 28px;
                            height: 16px;
                            line-height: 16px;
                            float: left;
                            font-weight: bold;
                            font-size: 8px;
                        }
                        .colortime1 {
                            color: #558DFF;
                        }
                        .colortime2 {
                            color: #3AB9FF;
                        }
                        .colortime3 {
                            color: #E3F94D;
                        }
                        .colortime4 {
                            color: #FFA02F;
                        }
                    }
                }
            }
        }
    } 
    .contbox-mid {
        width: 400px;
        height: 480px;
        left: 5px;
        .contbox-midtop {
            width: 100%;
            height: 260px;
            background-image: url('../../assets/imgs/humanr/bg_midtop1.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            .contmidbox-fill {
                width: 100%;
                height: 6px;
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                margin-left: 6px;
                text-align: center;
                line-height: 16px;
                font-size: 8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .contbox-midtopbox1 {
                margin-top: 6px;
                .midtopbox-box1 {
                    width: 384px;
                    height: 104px;
                    margin: 5px auto;
                    background-image: url('../../assets/imgs/humanr/bg_midtopbox1.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .midbox-cont{
                        width: 76px;
                        height: 104px;
                        float: left;
                        .midbox1-box {
                            width: 76px;
                            height: 52px;
                            float: left;
                            text-align: center;
                            .midbox1-top {
                                //width: 100%;
                                height: 15px;
                                line-height: 15px;
                                display: inline-block;
                                //text-align: center;
                                //margin: auto;
                                margin-top: 8px;
                                font-size: 7px;
                                font-weight: bold;
                                .icon-midbox1 {
                                    width: 15px;
                                    height: 15px;
                                    float: left;
                                    margin-right: 2px;
                                }
                                .icongonglu {
                                    background-image: url('../../assets/imgs/humanr/icon_gonglu3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconshuidian {
                                    background-image: url('../../assets/imgs/humanr/icon_shuidian3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconjianzhu {
                                    background-image: url('../../assets/imgs/humanr/icon_jianzhu3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconshizheng {
                                    background-image: url('../../assets/imgs/humanr/icon_shizheng3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .icontielu {
                                    background-image: url('../../assets/imgs/humanr/icon_tielu3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .icontongxin {
                                    background-image: url('../../assets/imgs/humanr/icon_tongxin3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconjichang {
                                    background-image: url('../../assets/imgs/humanr/icon_jichang3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconkuangye {
                                    background-image: url('../../assets/imgs/humanr/icon_kuangye3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconhangdao {
                                    background-image: url('../../assets/imgs/humanr/icon_hangdao3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .iconjidian {
                                    background-image: url('../../assets/imgs/humanr/icon_jidian3.png');
                                    background-repeat: no-repeat;
                                    background-size: 100% 100%;
                                    background-position: 0 0;
                                }
                                .title-midbox1 {
                                    display: inline;
                                    
                                }
                            }
                            .midbox1-bottom {
                                width: 100%;
                                height: 26px;
                                float: left;
                                text-align: center;
                                font-size: 7px;
                                color: #62C7FF;
                                line-height: 26px;
                                span {
                                    font-size: 16px;
                                    font-family: LED;
                                    margin-right: 4px;
                                    letter-spacing: 1.5px;
                                }
                            }
                        }
                    }
                    .midbox-interval {
                        width: 1px;
                        height: 76px;
                        float: left;
                        margin-top: 16px;
                        background:linear-gradient(0deg,rgba(77,236,255,0) 0%,rgba(77,236,255,0.99) 49%,rgba(28,181,224,-0.03) 100%);
                        opacity:0.5;
                    }
                }
            }
            .contbox-midtopbox2 {
                margin-top: 15px;
                .midtopbox-box2 {
                    width: 384px;
                    height: 60px;
                    margin: 5px auto;
                    background-image: url('../../assets/imgs/humanr/bg_midtopbox2.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                    .midbox2-box {
                        width: 63px;
                        height: 60px;
                        float: left;
                        text-align: center;
                        .midbox2-top {
                            height: 15px;
                            line-height: 15px;
                            display: inline-block;
                            margin-top: 10px;
                            font-size: 7px;
                            font-weight: bold;
                            .icon-midbox2 {
                                width: 15px;
                                height: 15px;
                                float: left;
                                margin-right: 2px;
                            }
                            .icongonglu {
                                background-image: url('../../assets/imgs/humanr/icon_gonglu3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconshuidian {
                                background-image: url('../../assets/imgs/humanr/icon_shuidian3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconjianzhu {
                                background-image: url('../../assets/imgs/humanr/icon_jianzhu3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconshizheng {
                                background-image: url('../../assets/imgs/humanr/icon_shizheng3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .icontielu {
                                background-image: url('../../assets/imgs/humanr/icon_tielu3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .icontongxin {
                                background-image: url('../../assets/imgs/humanr/icon_tongxin3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconjichang {
                                background-image: url('../../assets/imgs/humanr/icon_jichang3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconkuangye {
                                background-image: url('../../assets/imgs/humanr/icon_kuangye3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconhangdao {
                                background-image: url('../../assets/imgs/humanr/icon_hangdao3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .iconjidian {
                                background-image: url('../../assets/imgs/humanr/icon_jidian3.png');
                                background-repeat: no-repeat;
                                background-size: 100% 100%;
                                background-position: 0 0;
                            }
                            .title-midbox2 {
                                display: inline;                               
                            }
                        }
                        .midbox2-bottom {
                            width: 100%;
                            height: 26px;
                            float: left;
                            text-align: center;
                            font-size: 7px;
                            color: #62C7FF;
                            line-height: 26px;
                            span {
                                font-size: 16px;
                                font-family: LED;
                                margin-right: 4px;
                                letter-spacing: 1.5px;
                                text-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
                                background:linear-gradient(0deg,rgba(90,222,242,1) 0%, rgba(255,255,255,1) 100%);
                                -webkit-background-clip:text;
                                -webkit-text-fill-color:transparent;
                            }
                        }
                    }
                }
                .midbox2-interval {
                    width: 1px;
                    height: 44px;
                    float: left;
                    margin-top: 8px;
                    background:linear-gradient(0deg,rgba(77,236,255,0) 0%,rgba(77,236,255,0.99) 49%,rgba(28,181,224,-0.03) 100%);
                    opacity:0.5;
                }
            }
            .midtopbox-title {
                width: 150px;
                height: 12px;
                margin: auto;
                text-align: center;
                color: #4DECFF;
                font-size: 9px;
                font-weight: bold;
                background-image: url('../../assets/imgs/humanr/midbox_title.png');
                background-repeat: no-repeat;
                background-size: 100%;
                background-position: 0 7px;
            }
        }
        .contbox-midbottom {
            width: 100%;
            height: 187px; 
            float: left;
            margin-top: 10px;
            .midbottom-left {
                width: 251px;
                height: 187px;
                float: left;
                background-image: url('../../assets/imgs/humanr/bg_midtop1.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
                .midbottomleft-box {
                    width: 100%;
                    height: 74px;
                    float: left;
                    padding: 3px 22px;
                    margin-top: 4px;
                    .midbottomleft-cont {
                        width: 50%;
                        height: 32px;
                        float: left;
                        margin-top: 12px;
                        .bg-midbottomleft {
                            width: 95px;
                            height: 34px;
                            margin: 3px auto;
                            position: absolute;
                            background:linear-gradient(180deg,rgba(9,49,87,1) 0%,rgba(6,36,69,1) 100%);
                            border-radius:3px;
                            .circle-midbottomleft {
                                width: 3px;
                                height: 3px;
                                border-radius: 50%;
                                float: left;
                                margin-left: 4px;
                                margin-top: 4px;
                            }
                            .circlecont1 {
                                background: #66FFCC;
                            }
                            .circlecont2 {
                                background: #39B9FF;
                            }
                            .circlecont3 {
                                background: #E3F94D;
                            }
                            .circlecont4 {
                                background: #FFA02F;
                            }
                            .circlecont5 {
                                background: #01FE55;
                            }
                            .circlecont6 {
                                background: #558DFF;
                            }
                            .midbottomleft-title {
                                width: 32px;
                                height: 34px;
                                line-height: 38px;
                                float: left;
                                text-align: center;
                                font-size: 8px;                           
                            }
                            .midbottomleft-num {
                                width: 42px;
                                height: 34px;
                                line-height: 34px;
                                float: left;
                                text-align: right;
                                font-size: 8px;
                                span {
                                    margin-right: 4px;
                                    font-family: LED;
                                    font-size: 16px;
                                    letter-spacing: 1.5px;
                                }
                            }
                            .colorcont1 {
                                color: #66FFCC;
                            }
                            .colorcont2 {
                                color: #39B9FF;
                            }
                            .colorcont3 {
                                color: #E3F94D;
                            }
                            .colorcont4 {
                                color: #FFA02F;
                            }
                            .colorcont5 {
                                color: #01FE55;
                            }
                            .colorcont6 {
                                color: #558DFF;
                            }
                        }
                    }
                }
            }
            .midbottom-right {
                width: 139px;
                height: 187px;
                float: right;
                background-image: url('../../assets/imgs/humanr/bg_midtop1.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
                .midbottomright-box {
                    width: 100%;
                    height: 160px;
                    float: left;
                    padding: 17px 21px;
                    .midbottomright-data {
                        width: 100%;
                        height: 76px;
                        float: left;
                        .midright-box {
                            width: 50%;
                            height: 72px;
                            float: left;
                            font-size: 7px;
                            padding-left:10px;
                            margin-top:4px;
                            .midright-box1 {
                                width: 100%;
                                height: 24px;
                                line-height: 24px;
                                float: left;
                            }
                            .numright1 {
                                color: #5CE8FB;
                                font-size: 12px;
                            }
                            .numright2 {
                                color: #FFF600;
                                font-size: 12px;
                            }
                        }
                    }
                    .midbottomright-chart {
                        width: 96px;
                        height: 83px;
                        background-image: url('../../assets/imgs/humanr/bg_workers1.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        .midbottomchart-left {
                            width: 30px;
                            height: 83px;
                            float: left;
                        }
                        .midbottomchart-right {
                            width: 66px;
                            height: 68px;
                            float: right;
                            margin-top: 15px;
                            background-image: url('../../assets/imgs/humanr/bg_workers2.png');
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-position: 0 0;
                        }
                        .midbottomright-cont {
                            width: 100%;
                            height: 12px;
                            line-height: 12px;
                            float: left;
                            font-size: 7px;
                            text-align: center;
                            span {
                                font-size: 12px;
                            }
                        }
                        .midbottomright-fill1 {
                            width: 100%;
                            height: 30px;
                            float: left;
                        }
                        .midbottomright-fill2 {
                            width: 100%;
                            height: 16px;
                            float: left;
                        }
                    }
                }
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                margin-left: 6px;
                margin-top: 6px;
                text-align: center;
                line-height: 16px;
                font-size: 8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .midbottom-box {
                width: 100%;
                height: 86px;
                margin: auto;
                margin-top: 12px;
                .midbottom-left {
                    width: 176px;
                    height: 86px;
                    float: left;
                    margin-left: 24px;
                    background-image: url('../../assets/imgs/humanr/bg_midbottomleft.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .midbottom-right {
                    width: 176px;
                    height: 86px;
                    float: right;
                    margin-right: 24px;
                    background-image: url('../../assets/imgs/humanr/bg_midbottomright.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .midbottomdata-box {
                    width: 74px;
                    height: 64px;
                    float: left;
                    margin-top: 18px;
                    .midbottom-data {
                        width: 74px;
                        height: 16px;
                        float: left;
                        font-size: 7px;
                        .midbottomdata-left {
                            width: 50px;
                            height: 16px;
                            float: left;
                            letter-spacing: 1px;
                            text-align: right;
                        }
                        .midbottomdata-right {
                            width: 20px;
                            height: 16px;
                            line-height: 10px;
                            float: right;
                            text-align: center;
                            color:rgba(158,178,201,1);
                            background:linear-gradient(0deg,rgba(25,159,255,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-size: 10px;
                                font-weight: bold;
                            }
                        }
                        .midbottomdata-right1 {
                            width: 20px;
                            height: 16px;
                            line-height: 10px;
                            float: right;
                            text-align: center;
                            color:rgba(158,178,201,1);
                            background:linear-gradient(0deg,rgba(192,240,79,1) 0%, rgba(243,254,255,1) 100%);
                            -webkit-background-clip:text;
                            -webkit-text-fill-color:transparent;
                            span {
                                font-size: 10px;
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }
    .contbox-right {
        width: 260px;
        height: 457px;
        left: 5px;
        background-image: url('../../assets/imgs/humanr/bg_contleft1.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .contrightbox-fill {
            height: 6px;
        }
        .contright-box {
            width: 100%;
            //height: 160px;
            .techtitle-box {
                width: 100%;
                height: 100px;
                float: left;
                .techtitle-chart {
                    width: 144px;
                    height: 100px;
                    float: left;                   
                }
                .techtitle-right {
                    width: 116px;
                    height: 100px;
                    float: right;
                    padding: 20px 0;
                    .techtitle-rightbox {
                        width: 116px;
                        height: 15px;
                        line-height: 15px;
                        float: left;
                        font-size: 7px;
                        .circle-rightbox {
                            width: 3px;
                            height: 3px;
                            border-radius: 50%;
                            float: left;
                            margin-top: 6px;
                        }
                        .bgtechtitle1 {
                            background: #558DFF;
                        }
                        .bgtechtitle2 {
                            background: #66FFCC;
                        }
                        .bgtechtitle3 {
                            background: #3AB9FF;
                        }
                        .bgtechtitle4 {
                            background: #E3F94D;
                        }
                        .title-rightbox {
                            width: 42px;
                            height: 15px;
                            float: left;
                            margin-left: 10px;
                            color: #B6BCBD;
                        }
                        .num-rightbox {
                            width: 16px;
                            height: 15px;
                            float: left;
                            font-weight: 400;
                        }
                        .colortechtitle1 {
                            color: #558DFF;
                        }
                        .colortechtitle2 {
                            color: #66FFCC;
                        }
                        .colortechtitle3 {
                            color: #3AB9FF;
                        }
                        .colortechtitle4 {
                            color: #E3F94D;
                        }
                    }
                }
            }
            .position-box {
                width: 100%;
                height: 138px;
                float: left;
                padding: 11px 20px;
                .positiondata-box {
                    width: 55px;
                    height: 49px;
                    float: left;
                    .position-title {
                        width: 100%;
                        height: 16px;
                        line-height: 16px;
                        text-align: center;
                        font-size: 7px;
                        text-shadow:0px 2px 5px rgba(0, 0, 0, 0.3);
                        background:linear-gradient(0deg,rgba(90,222,242,1) 0%, rgba(255,255,255,1) 100%);
                        -webkit-background-clip:text;
                        -webkit-text-fill-color:transparent;
                    }
                    .position-data {
                        width: 35px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                        font-family: LED;
                        font-size: 12px;
                        color: #3AFFE4;
                        letter-spacing: 1.5px;
                        float: left;
                        margin-left: 10px;
                        background-image: url('../../assets/imgs/humanr/bg_position.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                    }
                }
            }
            .recruit-contbox {
                width: 100%;
                height: 146px;
                float: left;
                padding: 15px 18px;
                table {
                    width: 100%;
                    thead {
                        tr th {
                            background: #01305C;
                            text-align: center;
                            height: 23px;
                            line-height: 23px;
                            font-size: 8px;
                            color: #59E0FF;
                        }
                    }
                    tbody {
                        tr td {
                            text-align: center;
                            height: 22px;
                            line-height: 22px;
                            font-size: 7px;
                            color: #59E0FF;
                        }
                        tr:nth-child(2n) {
                            background: rgba(6,39,74,1);
                        }
                    }
                }
            }
            .contbox-title {
                width: 50px;
                height: 16px;
                float:left;
                margin-left: 6px;
                text-align: center;
                line-height: 16px;
                font-size:8px;
                color:rgba(65,223,246,1);
                background-image: url('../../assets/imgs/humanr/contbox_title.png');
                background-repeat: no-repeat;
                background-size: 100% 100%;
                background-position: 0 0;
            }
            .contbox-post {
                width: 100%;
                height: 132px;
                float: left;
                .contboxpost-title {
                    width: 100%;
                    height: 16px;
                    margin-top: 10px;
                    line-height: 16px;
                    text-align: center;
                    font-size: 7px;
                    color: #94C5FF;
                    background-image: url('../../assets/imgs/humanr/bg_posttitle.png');
                    background-repeat: no-repeat;
                    background-size: 100% 100%;
                    background-position: 0 0;
                }
                .contboxpost-left {
                    width: 100px;
                    height: 132px;
                    float: left;
                    margin-left: 20px;
                }
                .contboxpost-right {
                    width: 100px;
                    height: 132px;
                    float: right;
                    margin-right: 20px;
                }
            }
        }
    }
}
.personal {
    width: 56px;
    height: 60px;
    background-image: url('../../assets/imgs/new/icon_personal.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}
.collective {
    width: 76px;
    height: 60px;
    background-image: url('../../assets/imgs/new/icon_collective.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
}

.activity-table table {
    thead {
        tr th {
            background: #01305C;
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 8px;
            color: #83CFFE;
        }
    }
    tbody {
        tr td {
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 8px;
            color: #83CFFE;
        }
        tr:nth-child(2n) {
            background: #06274A;
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