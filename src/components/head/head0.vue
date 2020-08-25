<template>
    <div class="header1">
        <div class="top-nav-box">
            <ul class="firstLevelNav">
                <li v-for="(item,index) in customNav" v-on:click="addClass(index)" v-bind:class="{active:paramCurrent==index}" :key="index">
                    <router-link :to="item.pathUrl">
                        <span @click="showToggle(item)">{{item.title}}</span>
                    </router-link>
                    <ul class="secondLevelNav" v-if="item.isSubshow">
                        <li v-for="(subitem,subindex) in item.subTabs" :key="subindex" :class="{active:subActive==subindex}" @click="skipSecnav(subindex)" >
                            <router-link :to="subitem.pathUrl">
                                {{subitem.title}}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="top-title" @click="backIndex"></div>
        </div>            
    </div>
</template>
<script>
import $ from 'jquery';
    export default {
        inject: ['reload'],
        data() {
            return {
                customNav: [
                    { 
                        id: 0, 
                        title: "安全监管",
                        pathUrl: '/safetyPage',
                        subTabs: [
                            { title: "二级驾驶舱" },
                            { title: "三级驾驶舱" }
                        ] 
                    },
                    { 
                        id: 1, 
                        title: "工程技术",
                        pathUrl: '/engineerPage',
                        subTabs: [
                            { title: "二级驾驶舱" },
                            { title: "三级驾驶舱" }
                        ] 
                    },
                    { 
                        id: 2, 
                        title: "市场投资",
                        pathUrl: '/marketPage',
                        subTabs: [
                            { title: "二级驾驶舱" },
                            { title: "三级驾驶舱" }
                        ] 
                    },
                    { 
                        id: 3, 
                        title: "造价合约",
                        pathUrl: '/contractPage',
                        subTabs: [
                            { title: "二级驾驶舱" },
                            { title: "三级驾驶舱" }
                        ] 
                    },
                    { 
                        id: 4, 
                        title: "党群工作",
                        pathUrl: '/partyPage',
                        isSubshow: false,
                        subTabs: [
                            { title: "二级驾驶舱",pathUrl: '/partyPage' },
                            { title: "三级驾驶舱",pathUrl: '/partyPage3' }
                        ] 
                    },
                    { 
                        id: 5, 
                        title: "财务动态",
                        pathUrl: '/financePage',
                        //isSubshow: false,
                        subTabs: [
                            { title: "二级驾驶舱" },
                            { title: "三级驾驶舱" }
                        ] 
                    },
                    { 
                        id: 6, 
                        title: "人资管理",
                        pathUrl: '/hrPage',
                        isSubshow: false,
                        subTabs: [
                            { title: "二级驾驶舱",pathUrl: '/hrPage' },
                            { title: "三级驾驶舱",pathUrl: '/hrPage3' }
                        ] 
                    },
                    { 
                        id: 7, 
                        title: "综合事务",
                        pathUrl: '/generalPage',
                        //isSubshow: false,
                        subTabs: [
                            { title: "二级驾驶舱" },
                            { title: "三级驾驶舱" }
                        ] 
                    },
                ],
                //subtab: 0,
                subActive: ''
            };
        },
        props: {
            title: {
                type:String,
                default:'智慧西南',
                require: true
            },
            paramCurrent: {
                type:String
            }
        },
        methods: {
            addClass(index) {  
                this.current = index;
                // if(index === 0) {
                //     this.$router.push({path: '/safetyPage'});
                // }else if(index === 1) {
                //     this.$router.push({path: '/engineerPage'});
                // }else if(index === 2) {
                //     this.$router.push({path: '/marketPage'});
                // }else if(index === 3) {
                //     this.$router.push({path: '/contractPage'});
                // }else if(index === 4) {
                //     this.$router.push({path: '/partyPage'});
                // }else if(index === 5) {
                //     this.$router.push({path: '/financePage'});
                // }else if(index === 6) {
                //     this.$router.push({path: '/hrPage'});
                // }else if(index === 7) {
                //     this.$router.push({path: '/generalPage'});
                // }
            },
            backIndex() {
                this.$router.push({path: '/secretaryPage'});
            },
            showToggle(item){
                item.isSubshow = !item.isSubshow;
            },
            skipSecnav(subindex) {
                this.subActive = subindex;
                this.reload();
                console.log('导航:',subindex);
                console.log('模块:',$('.subtabs').attr('id'));
                // if(subindex === 0 && $('.subtabs').attr('id') === 'tabs6') {
                //     this.$router.push({path: '/hrPage'});
                //     console.log('path:',this.$route.path);
                // }else if(subindex === 1 && $('.subtabs').attr('id') === 'tabs6') {
                //     this.$router.push({path: '/hrPage3'});
                //     console.log('path:',this.$route.path);
                // }
            }
        },
        filters: {
            
        },
        mounted() {
            
        },
        beforeDestroy() {
        
        }
    }
</script>

<style lang="scss" scoped>
.header1 {
    width: 100%;
    height: 50px;
    background-image: url('../../assets/imgs/bg_top.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: 0 0;
    position: absolute;
    top: 0px;
    left: 0;
    .top-nav-box {
        height: 50px;
        padding: 0 50px;
        .selected {
            background-image: url('../../assets/imgs/new/tab_selected.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 3px;
        }
        .top-title {
            //display: flex;
            position: relative;
            margin: 0 auto;
            width: 260px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-image: url('../../assets/imgs/new/top_title.png');
            background-repeat: no-repeat;
            background-size: 100%;
            background-position: 0 0;
            font-family:Microsoft YaHei;
            font-size: 18px;
            font-weight:bold;
            color: rgba(235,244,255,1);
            cursor: pointer;
            span {
                background:linear-gradient(0deg,rgba(1,238,254,0.63) 0%, rgba(235,244,255,1) 100%);
                -webkit-background-clip:text;
                -webkit-text-fill-color:transparent;
            }
        }
        .firstLevelNav {
            width: 100%;
            height: 45px;
            position: absolute;
            li {
                float: left;
                cursor: pointer;
                width: 74px;
                height: 24px;
                margin-top: 16px;
                line-height: 16px;
                text-align: center;
                font-size: 10px;
                color: rgba(235,244,255,1);
                list-style-type:none;
                span {
                    background:linear-gradient(0deg,rgba(1,238,254,0.63) 0%, rgba(235,244,255,1) 100%);
                    -webkit-background-clip:text;
                    -webkit-text-fill-color:transparent;
                }
                .secondLevelNav {
                    margin-top: 8px;
                    margin-left: 17px;
                    li {
                        width: 40px;
                        height: 16px;
                        margin-top: 0px;
                        background-image: url('../../assets/imgs/new/bg_subtabs.png');
                        background-repeat: no-repeat;
                        background-size: 100% 100%;
                        background-position: 0 0;
                        color: #1E8DCC;
                        line-height: 16px;
                        font-size: 7px;
                    }
                    li.active {
                        background-image: url('../../assets/imgs/new/bg_subtabs_active.png');
                        color: #4ED9FF;
                        font-weight: bold;
                    }
                }
            }
            li:nth-child(5) {
                margin-left:268px;
            }
        }
    }
}
.firstLevelNav li:hover{
    background-image: url('../../assets/imgs/new/tab_selected.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 3px;  
}
.firstLevelNav li.active{
    background-image: url('../../assets/imgs/new/tab_selected.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 3px;
}

</style>