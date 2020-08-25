<template>
    <div class="ctable">
        <Table 
            :stripe='stripe' 
            :border='border' 
            :columns="columns" 
            :data="data"
            >
            <!-- 定义slot部分 -->
            
        </Table>
    </div>
</template>
 
<script>
    export default {
        name:'iview-table',
        props:{
            columns: Array, // 表头数据
            data: Array, // 表格数据
            width: [Number, String],//表格宽度
            height: [Number, String],//表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头-***注意传进来是number的有滚动条，px的没有
            stripe: { // 是否显示间隔斑马纹
                type: Boolean,
                default: false
            },
            border: { // 是否显示纵向边框
                type: Boolean,
                default: false
            },
        },
        data () {
            return {
        
            };
        },
        methods:{
        
        }
    }
</script>

<style lang="scss">
.ctable{
    >>>.ivu-table th {
        height: 24px!important;
    }
}
</style>