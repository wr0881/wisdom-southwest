<template>
    <div class="contract">
        <Head :paramCurrent="current"></Head>
        <div class="drag">
            <CTable 
                :columns='this.dyydyl.col' 
                :list='this.dyydyl.list' 
                :height='this.dyydyl.height' 
                :stripe='this.dyydyl.stripe'
            ></CTable>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
import CTable from '@/components/table/ctable.vue'

export default {
    name: 'contract',
    data() {
        return {   
            pageInfo: 'contract',
            current: 3,

            dyydyl:{//党员一带一路
                stripe:true,//斑马纹
                col:[
                    {//是否显示序号-分页
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
                        align: 'center',
                    },
                ],
                list:[
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
        }
    },
    
    components: {
        Head,
        CTable
    },
    computed: {
    },
    mounted() {     
    },
    methods: {
    }
}
</script>

<style scoped lang="scss">
.contract {
    background-image: url('../../assets/app_bg.jpg');
    width: 100vw;
    height:100vh;
    background-size: 100% 100%;
    position: relative;
}
.drag {
    // width: 960px;
    height: 200px;
    position: absolute;
    text-align: center;
    line-height: 200px;
    margin-top: 50px;
        
}
</style>