<template>
    <div class="progress-bar">
        <div class="top-bg">
            <div class="top-num" :style="{marginLeft:doneWidth}">当前：{{doneWidth}}</div>
        </div>
        <div class="p-line"></div>
        <div class="p-done" :style="{width:doneWidth}"></div>
    </div>
</template>

<script>
export default {
    name: 'lineprogress',
    data() {
        return {
            totalCost: 100,
            drugCost: 50,
        }
    },
    props: {
        drugCost: {
            type: Number
        }
    },
    computed: {
        ratio() {
            const r = this.drugCost/this.totalCost
            return r
        },
        doneWidth() {
            return this.drugCost/this.totalCost*100 + '%'
        }
    },
    created() {},
    mounted() {},
    methods: {

    }
}
</script>

<style scoped lang="scss">
.progress-bar {
    width: 100%;
    position: relative;
    margin-top: 6px;
    .p-line {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 4px;
        margin-top: 16px;
        border-radius: 2px;
        background-color: #163357;
    }
    .p-done {
        position: absolute;
        z-index: 2;
        height: 4px;
        margin-top: 16px;
        border-radius: 2px;
        background:linear-gradient(0deg,rgba(15,77,137,1) 0%,rgba(47,203,233,1) 100%);
        background-size: 30px 30px;
    }
    .top-bg {
        margin-left: -21px;
    }
    .top-num {
        margin-bottom: 2px;
        text-align: center;
        width: 42px;
        height: 15px;
        position: absolute;       
        line-height: 15px;
        background-image: url('../../assets/imgs/component/popup_line_progress.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
    }
}

</style>