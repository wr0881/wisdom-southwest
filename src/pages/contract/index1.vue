<template>
    <div>
        <Head ></Head>
        <div class="drag">
            <div class="drag-title">
                <div class="box1" draggable="true" id="source">1</div>
                <div class="box3" draggable="true" id="source3">3</div>
            </div>
            <div class="box2" id="target">
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head5.vue';
export default {
    name: 'contract',
    data() {
        return {   
            
        }
    },
    
    components: {
        Head
    },
    mounted() {
        
        var source = document.getElementById('source');
        var target = document.getElementById('target');
        var source3 = document.getElementById('source3');
        console.log('2222');
        source.ondragstart = function(event){
            var e = event || window.event
            console.log('开始拖拽1');
            e.dataTransfer.setData('text',e.target.id);
        }
        source3.ondragstart = function(event){
            var e = event || window.event
            console.log('开始拖拽3');
            e.dataTransfer.setData('text',e.target.id);
        }
        target.ondragenter = function(){
            console.log('进入目标元素')
        }
        target.ondragover = function(event){
            var event = event || window.event;
            console.log('在目标元素中拖拽');
            event.preventDefault()
        }
        target.ondragleave = function(){
            console.log('拖放离开目标元素')
        }
        target.ondrop = function(event){
            console.log('拖放');
            var e = event || window.event
            var data = e.dataTransfer.getData('text');
            e.target.appendChild(document.getElementById(data));

        }
    }
}
</script>

<style scoped lang="scss">
.drag {
    width: 960px;
    height: 200px;
    position: absolute;
    text-align: center;
    line-height: 200px;
    margin-top: 50px;
    .drag-title {
        width: 100%;
        height: 100px;
        line-height: 100px;
        color: #000;
    }
    .box1{
        width: 100px;
        height: 100px;
        float: left;
        background: salmon
    }
    .box3{
        width: 100px;
        height: 100px;
        float: left;
        background: white
    }
    .box2{
        width: 300px;
        height: 300px;
        border: 1px solid white;
    }
}
</style>