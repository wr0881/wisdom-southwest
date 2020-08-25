<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th width="20%">项目名称</th>
                    <th width="8%">资质</th>
                    <th width="8%">招标时间</th>
                    <th width="12%">保证金(万)</th>
                    <th width="8%">商务标</th>
                    <th width="8%">技术标</th>
                    <th width="8%">综合标</th>
                    <th width="10%">开标时间</th>
                    <th width="10%">状态</th>
                    <th width="8%">合同签订</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project,index) in projects" :key="index">
                    <td>{{project.name}}</td>
                    <td>
                        <span v-if="project.qualifications===0" style="color:#CAC301">未申请</span>
                        <span v-if="project.qualifications===1" style="color:#01EF53">已申请</span>
                        <span v-if="project.qualifications===2" style="color:#A41316">未通过</span>
                        <span v-if="project.qualifications===3" style="color:#024CFF">已通过</span>
                    </td>
                    <td>{{project.bidTime}}</td>
                    <td>{{project.bond}}</td>
                    <td>
                        <span v-if="project.business===0"></span>
                        <span v-if="project.business===1" class="hook"></span>
                    </td>
                    <td>
                        <span v-if="project.technology===0"></span>
                        <span v-if="project.technology===1" class="hook"></span>
                    </td>
                    <td>
                        <span v-if="project.comprehensive===0"></span>
                        <span v-if="project.comprehensive===1" class="hook"></span>
                    </td>
                    <td>{{project.openBidTime}}</td>
                    <td class="statetd">
                        <span v-if="project.state===0" class="projectstate state0">中标</span>
                        <span v-if="project.state===1" class="projectstate state1">未中标</span>
                        <span v-if="project.state===2" class="projectstate state2">已投</span>
                    </td>
                    <td>{{project.contractTime}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'table1',
    data() {
        return {
            project: {
                'name': '',
                'qualifications': '',
                'bidTime': '',
                'bond': '',
                'business': '',
                'technology': '',
                'comprehensive': '',
                'openBidTime': '',
                'state': '',
                'contractTime': ''
            },
            projects: [
                {
                    'name': '成都市西南华府启动项目',
                    'qualifications': 0,
                    'bidTime': '5.8',
                    'bond': '13',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 1,
                    'openBidTime': '5.24',
                    'state': 0,
                    'contractTime': '5.30'
                },
                {
                    'name': '成都市晋江二号启动项目',
                    'qualifications': 1,
                    'bidTime': '5.17',
                    'bond': '35',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 1,
                    'openBidTime': '6.1',
                    'state': 1,
                    'contractTime': '-'
                },
                {
                    'name': '成都市榕树湾启动项目',
                    'qualifications': 2,
                    'bidTime': '5.24',
                    'bond': '72',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 0,
                    'openBidTime': '5.24',
                    'state': 2,
                    'contractTime': '-'
                },
                {
                    'name': '成都市西南华府启动项目',
                    'qualifications': 0,
                    'bidTime': '5.8',
                    'bond': '13',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 1,
                    'openBidTime': '5.24',
                    'state': 0,
                    'contractTime': '5.30'
                },
                {
                    'name': '成都市晋江二号启动项目',
                    'qualifications': 1,
                    'bidTime': '5.17',
                    'bond': '35',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 1,
                    'openBidTime': '6.1',
                    'state': 1,
                    'contractTime': '-'
                },
                {
                    'name': '成都市榕树湾启动项目',
                    'qualifications': 2,
                    'bidTime': '5.24',
                    'bond': '72',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 0,
                    'openBidTime': '5.24',
                    'state': 2,
                    'contractTime': '-'
                },
                {
                    'name': '成都市西南华府启动项目',
                    'qualifications': 0,
                    'bidTime': '5.8',
                    'bond': '13',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 1,
                    'openBidTime': '5.24',
                    'state': 0,
                    'contractTime': '5.30'
                },
                {
                    'name': '成都市晋江二号启动项目',
                    'qualifications': 1,
                    'bidTime': '5.17',
                    'bond': '35',
                    'business': 1,
                    'technology': 1,
                    'comprehensive': 1,
                    'openBidTime': '6.1',
                    'state': 1,
                    'contractTime': '-'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
table {
    width: 100%;
    thead {
        tr th {
            background: #01305C;
            text-align: center;
            height: 20px;
            line-height: 20px;
            font-size: 7px;
            color: #83CFFE;
            font-weight: 400;
        }
    }
    tbody {
        .statetd {
            text-align: left;
            padding-left: 8px;
        }
        tr td {
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 7px;
            color: #59E0FF;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            .hook {
                width: 8px;
                height: 6px;
                display: inline-block;
                background-image: url('../../assets/imgs/market/icon_hook.png');
                background-repeat: no-repeat;
                background-size: 8px 6px;
                background-position: 0 0;
            }
            .projectstate {
                height: 6px;
                padding-left: 8px;
                display: inline-block;
                line-height: 6px;
            }
            .state0{
                background-image: url('../../assets/imgs/market/icon_state0.png');
                background-repeat: no-repeat;
                background-size: 6px 6px;
                background-position: 0 0;
                color: #01F954;
            }
            .state1{
                background-image: url('../../assets/imgs/market/icon_state1.png');
                background-repeat: no-repeat;
                background-size: 6px 6px;
                background-position: 0 0;
                color: #A41316;
            }
            .state2{
                background-image: url('../../assets/imgs/market/icon_state2.png');
                background-repeat: no-repeat;
                background-size: 6px 6px;
                background-position: 0 0;
                color: #024CFF;
            }
        }
        tr:nth-child(2n) {
            background: #06274A;
        }
    }
}
</style>