<template>
    <div class="general">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>
        <div class="container">
            <div class="cont-box">
                <general-map />
                <div class="cont-box1"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
import GeneralMap from './generalMap'
 
export default {
    name: 'general',
    data() {
        return { 
            pageInfo: 'general',
            current: 7,

        }
    },   
    components: {
        Head,
        GeneralMap
    },
    mounted () {
        this.getPageInfo();
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        
    }
}
</script>

<style scoped lang="scss">
.general {
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
.container {
    width: 960px;
    height: 100%;
    padding: 0 10px 10px 10px;
    position: absolute;
    top: 72px;
    .cont-box {
        width: 100%;
        height: calc(100%-72px);
        background: aquamarine;
        .cont-box1 {
            width: 25%;
            height: calc(100%-102px);
            box-shadow: inset 0 0 15px #073b73;
            background: rgba(6,37,71,0.6);
            position: absolute;
            top: 10px;
            margin-left: 10px;
        }
    }
}

</style>