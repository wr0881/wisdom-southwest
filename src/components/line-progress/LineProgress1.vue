<template>
    <div class="progress-bar">
        <div class="progress-top">
            <div class="icon-progress" :style="{background:doneColor}"></div>
            <div class="title-progress">{{drugTitle}}</div>
            <div class="num-progress">{{drugCost}}人</div>
        </div>
        <div class="p-line"></div>
        <div class="p-done" :style="{width:doneWidth,backgroundColor:doneColor}"></div>
    </div>
</template>

<script>
export default {
    name: 'lineprogress1',
    data() {
        return {
            totalCost: 10,
            drugCost: 5,
            drugTitle: ''
        }
    },
    props: {
        drugCost: {
            type: Number
        },
        drugColor: {
            type: String
        },
        drugTitle: {
            type: String
        }
    },
    computed: {
        doneWidth() {
            return this.drugCost/this.totalCost*100 + '%'
        },
        doneColor() {
            return this.drugColor
        }
    },
    created() {},
    mounted() {},
    methods: {}
}
</script>

<style scoped lang="scss">
.progress-bar {
    width: 100%;
    position: relative;
    .progress-top {
        width: 100%;
        height: 12px;        
        .icon-progress {
            width: 1.2px;
            height: 1.5px;
            float: left;
            margin-top: 4.8px;
            background: chocolate;
        }
        .title-progress {
            width: 40px;
            height: 12px;
            float: left;
            line-height: 12px;
            margin-left: 4px;
            color: #9DB1C9;
            font-size: 7px;
        }
        .num-progress {
            width: 20px;
            height: 12px;
            float: right;
            margin-right: 4px;
            line-height: 12px;
            text-align: right;
            color: #fff;
            font-size: 7px;
        }
    }
    .p-line {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 1.2px;
        background-color: #103E76;
    }
    .p-done {
        position: absolute;
        z-index: 2;
        height: 1.2px;
        background: chocolate;
    }
}
</style>