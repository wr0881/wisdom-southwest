<template>
    <div class="general">
        <Head :paramCurrent="current"></Head>
        <div class="bg-typeface"></div>
        <div class="drag">
            <div class="drag-title" id="title">
                <div v-show="!boxCont1" class="box1" draggable="true" id="source1">图标1</div>
                <div v-show="!boxCont2" class="box2" draggable="true" id="source2">图标2</div>
                <div v-show="!boxCont3" class="box3" draggable="true" id="source3">图标3</div>
                <div v-show="!boxCont4" class="box4" draggable="true" id="source4">图标4</div>
                <div v-show="!boxCont5" class="box5" draggable="true" id="source5">图标5</div>
                <div v-show="!boxCont6" class="box6" draggable="true" id="source6">图标6</div>
            </div>
            <div class="box" id="target">
                <div v-show="boxCont1" class="boxCont1" draggable="true" id="boxCont1">内容1</div>
                <div v-show="boxCont2" class="boxCont2" draggable="true" id="boxCont2">内容2</div>
                <div v-show="boxCont3" class="boxCont3" draggable="true" id="boxCont3">内容3</div>
                <div v-show="boxCont4" class="boxCont4" draggable="true" id="boxCont4">内容4</div>
                <div v-show="boxCont5" class="boxCont5" draggable="true" id="boxCont5">内容5</div>
                <div v-show="boxCont6" class="boxCont6" draggable="true" id="boxCont6">内容6</div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head9.vue';
export default {
    name: 'general',
    data() {
        return {   
            bg1: require('../../assets/imgs/a.png'),
            pageInfo: 'general',
            current: 7,

            boxCont1: false,
            boxCont2: false,
            boxCont3: false,
            boxCont4: false,
            boxCont5: false,
            boxCont6: false
        }
    },
    
    components: {
        Head
    },
    mounted() {
        let _this = this;
        _this.getPageInfo();
        const source1 = document.getElementById('source1');
        const source2 = document.getElementById('source2');
        const source3 = document.getElementById('source3');
        const source4 = document.getElementById('source4');
        const source5 = document.getElementById('source5');
        const source6 = document.getElementById('source6');
        const target = document.getElementById('target');
        source1.ondragstart = function(event){
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        source2.ondragstart = function(event){
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        source3.ondragstart = function(event){
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        source4.ondragstart = function(event){
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        source5.ondragstart = function(event){
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        source6.ondragstart = function(event){
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        target.ondragenter = function(){
        }
        target.ondragover = function(event){
            var event = event || window.event;
            event.preventDefault()
        }
        target.ondragleave = function(){
        }
        target.ondrop = function(event){
            const e = event || window.event
            const data = e.dataTransfer.getData('text');
            //e.target.appendChild(document.getElementById(data));
            if(data === "source1") {
                _this.boxCont1 = true;
            }
            if(data === "source2") {
                _this.boxCont2 = true;
            }
            if(data === "source3") {
                _this.boxCont3 = true;
            }
            if(data === "source4") {
                _this.boxCont4 = true;
            }
            if(data === "source5") {
                _this.boxCont5 = true;
            }
            if(data === "source6") {
                _this.boxCont6 = true;
            }
        }
        const boxCont1 = document.getElementById('boxCont1');
        const boxCont2 = document.getElementById('boxCont2');
        const boxCont3 = document.getElementById('boxCont3');
        const boxCont4 = document.getElementById('boxCont4');
        const boxCont5 = document.getElementById('boxCont5');
        const boxCont6 = document.getElementById('boxCont6');
        const title = document.getElementById('title');
        boxCont1.ondragstart = function(event) {
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        boxCont2.ondragstart = function(event) {
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        boxCont3.ondragstart = function(event) {
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        boxCont4.ondragstart = function(event) {
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        boxCont5.ondragstart = function(event) {
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        boxCont6.ondragstart = function(event) {
            const e = event || window.event
            e.dataTransfer.setData('text',e.target.id);
        }
        title.ondragenter = function() {

        }
        title.ondragover = function(event) {
            var event = event || window.event;
            event.preventDefault()
        }
        title.ondragleave = function() {

        }
        title.ondrop = function(event) {
            const e = event || window.event
            const data = e.dataTransfer.getData('text');
            if(data === "boxCont1") {
                _this.boxCont1 = false;
            }
            if(data === "boxCont2") {
                _this.boxCont2 = false;
            }
            if(data === "boxCont3") {
                _this.boxCont3 = false;
            }
            if(data === "boxCont4") {
                _this.boxCont4 = false;
            }
            if(data === "boxCont5") {
                _this.boxCont5 = false;
            }
            if(data === "boxCont6") {
                _this.boxCont6 = false;
            }
        }
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
    }
}
</script>

<style scoped lang="scss">
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
.drag {
    width: 960px;
    height: 200px;
    position: absolute;
    text-align: center;
    line-height: 200px;
    margin-top: 72px;
    .drag-title {
        width: 100%;
        height: 100px;
        line-height: 30px;
        color: #000;
        font-size: 8px;
    }
    .box1,.box2,.box3,.box4,.box5,.box6{
        width: 30px;
        height: 30px;
        float: left;
        background: salmon;
        margin-right: 10px;
    }
    .box{
        width: 302px;
        height: 300px;
        border: 1px solid white;
        color: #000;
        line-height: 90px;
    }
    .boxCont1,.boxCont2,.boxCont3,.boxCont4,.boxCont5,.boxCont6 {
        width: 90px;
        height: 90px;
        background:yellow;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
</style>