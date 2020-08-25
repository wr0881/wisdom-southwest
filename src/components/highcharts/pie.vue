<template>
    <div class="container">
        <div :id="id" :option="option" class="pie-box"></div>
    </div>
</template>
<script>
import HighCharts from 'highcharts'
export default {
    props: {
        id: {
            type: String
        },
        option: {
            type: Object
        }
    },
    mounted() {
        HighCharts.chart(this.id, this.option)
    }
}
</script>
<style lang="scss" scoped>
.container {
    width: 200px;
    height: 100px;
    .pie-box {
        width: 100%;
        height: 100%;
    }
}
</style>