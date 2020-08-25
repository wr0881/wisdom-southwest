<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th width="25%">单位</th>
                    <th width="25%">次数</th>
                    <th width="25%">人次</th>
                    <th width="25%">取得</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(train,index) in trains" :key="index">
                    <td>{{train.unit}}</td>
                    <td>{{train.times}}</td>
                    <td>{{train.persontime}}</td>
                    <td>{{train.obtain}}</td>
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
            train: {
                'unit': '',
                'times': '',
                'persontime': '',
                'obtain': ''
            },
            trains: [
                {
                    'unit': '局级',
                    'times': 2,
                    'persontime': 20,
                    'obtain': 19
                },
                {
                    'unit': '司级',
                    'times': 5,
                    'persontime': 53,
                    'obtain': 49
                },
                {
                    'unit': '外部',
                    'times': 6,
                    'persontime': 60,
                    'obtain': 58
                },
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
            height: 20px;
            line-height: 20px;
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