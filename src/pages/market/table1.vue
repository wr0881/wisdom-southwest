<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th width="30%">项目名称</th>
                    <th width="12%">所在地</th>
                    <th width="15%">业主</th>
                    <th width="8%">类型</th>
                    <th width="8%">类别</th>
                    <th width="9%">金额(亿)</th>
                    <th width="10%">工期(天)</th>
                    <th width="8%">招标时间</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(project,index) in projects" :key="index">
                    <td>{{project.name}}</td>
                    <td>{{project.address}}</td>
                    <td>{{project.owner}}</td>
                    <td>{{project.type}}</td>
                    <td>{{project.category}}</td>
                    <td>{{project.amount}}</td>
                    <td>{{project.period}}</td>
                    <td>{{project.time}}</td>
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
                'address': '',
                'owner': '',
                'type': '',
                'category': '',
                'amount': '',
                'period': '',
                'time': ''
            },
            projects: [
                {
                    'name': '锦江1标段综合治理招标公告',
                    'address': '成都市高新区',
                    'owner': '宇宙投标有限公司',
                    'type': '现汇',
                    'category': '水利',
                    'amount': '1.3',
                    'period': '365',
                    'time': '5.11'
                },
                {
                    'name': '环保路基础配套工程设施招标公告',
                    'address': '成都市高新区',
                    'owner': '丰汇投标有限公司',
                    'type': '投资',
                    'category': '市政',
                    'amount': '0.6',
                    'period': '240',
                    'time': '5.8'
                },
                {
                    'name': '农村环境整治项目施工招标公告',
                    'address': '贵阳市白云区',
                    'owner': '宇宙投标有限公司',
                    'type': '现汇',
                    'category': '环保',
                    'amount': '0.7',
                    'period': '160',
                    'time': '5.7'
                },
                {
                    'name': '锦江1标段综合治理招标公告',
                    'address': '成都市高新区',
                    'owner': '宇宙投标有限公司',
                    'type': '现汇',
                    'category': '水利',
                    'amount': '1.3',
                    'period': '365',
                    'time': '5.11'
                },
                {
                    'name': '环保路基础配套工程设施招标公告',
                    'address': '成都市高新区',
                    'owner': '丰汇投标有限公司',
                    'type': '投资',
                    'category': '市政',
                    'amount': '0.6',
                    'period': '240',
                    'time': '5.8'
                },
                {
                    'name': '农村环境整治项目施工招标公告',
                    'address': '贵阳市白云区',
                    'owner': '宇宙投标有限公司',
                    'type': '现汇',
                    'category': '环保',
                    'amount': '0.7',
                    'period': '160',
                    'time': '5.7'
                },
                {
                    'name': '锦江1标段综合治理招标公告',
                    'address': '成都市高新区',
                    'owner': '宇宙投标有限公司',
                    'type': '现汇',
                    'category': '水利',
                    'amount': '1.3',
                    'period': '365',
                    'time': '5.11'
                },
                {
                    'name': '环保路基础配套工程设施招标公告',
                    'address': '成都市高新区',
                    'owner': '丰汇投标有限公司',
                    'type': '投资',
                    'category': '市政',
                    'amount': '0.6',
                    'period': '240',
                    'time': '5.8'
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
        tr td {
            text-align: center;
            height: 16px;
            line-height: 16px;
            font-size: 7px;
            color: #59E0FF;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        tr:nth-child(2n) {
            background: #06274A;
        }
    }
}
</style>