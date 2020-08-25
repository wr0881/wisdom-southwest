<template>
    <div class="market">
        <Head></Head>
        <div class="contBox">
            <div class="mapBox">
                <!--<div id="allmap" ref="allmap"></div>-->
                <div id="container" tabindex="0"></div>
                <div class="layer">
                    <div class="layerBox">医院</div>
                    <div class="layerBox">消防</div>
                    <div class="layerBox">应急仓库</div>
                </div>
                <div v-show="popup" @click="closePopup" class="popup"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Head from '@/components/head/head2.vue';
 
export default {
    name: 'market',
    data() {
        return { 
            popup: 0,
            pageInfo: 'market', 
        }
    },   
    components: {
        Head
    },
    mounted () {
        // this.map();
        this.amap();
        this.getPageInfo();
    },
    methods: {
        getPageInfo() {
            this.$emit('postChildInfo',this.pageInfo);
        },
        amap() {
            var _this = this;
            let map = new AMap.Map('container', {
                center: [104.083729,30.610172],
                // resizeEnable: true,
                zoom: 14,
                lang: 'cn',
                layers: [
                    new AMap.TileLayer.Satellite()
                ]
            });
            let marker1 = new AMap.Marker({
                icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                position: [104.0881593,30.62018661],
                offset: new AMap.Pixel(-13, -30)
            });
            marker1.setMap(map);
            AMap.event.addListener(marker1, 'click', function () {
                //想在此处调用后台接口，获取新的数据 并且拼接在content原有数据后面，并在弹窗中展现出来，无奈 没办法实现，求大佬支招。无论怎么操作弹窗都只有原有数据。
                console.log('点击第一个标注');
                _this.popup = 1;
            });
            let marker2 = new AMap.Marker({
                icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                position: [104.09593993,30.62676016],
                offset: new AMap.Pixel(-13, -30)
            });
            marker2.setMap(map);
            let marker3 = new AMap.Marker({
                icon: "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
                position: [104.07357143,30.59237331],
                offset: new AMap.Pixel(-13, -30)
            });
            marker3.setMap(map);
            let path = [
                [104.08816338,30.64090287],
                [104.09168243,30.63658273],
                [104.09309864,30.63274245],
                [104.09421444,30.63034219],
                [104.09348488,30.62738795],
                [104.09193993,30.62676016],
                [104.08726215,30.62657552],
                [104.08455849,30.62406432],
                [104.08447266,30.62221781],
                [104.0851593,30.62018661],
                [104.08588886,30.61896787],
                [104.0846014,30.61686273],
                [104.08468723,30.61527461],
                [104.08674717,30.61076866],
                [104.08816338,30.60855254],
                [104.08777714,30.60415708],
                [104.08610344,30.6021255],
                [104.08297062,30.60131285],
                [104.0815115,30.59946591],
                [104.0820694,30.59507004],
                [104.08357143,30.59237331],
                [104.08215523,30.59041537],
                [104.07940865,30.58982429],
                [104.07820702,30.58590826],
                [104.07979488,30.58165956],
                [104.07829285,30.57763236],
                [104.07348633,30.57223786]
            ];
            var polyline = new AMap.Polyline({
                path: path,
                isOutline: true,
                outlineColor: '#7FFFFF',
                borderWeight: 2,
                strokeColor: "#00C0FF", 
                strokeOpacity: 0.89,
                strokeWeight: 12,
                // 折线样式还支持 'dashed'
                strokeStyle: "solid",
                // strokeStyle是dashed时有效
                // strokeDasharray: [10, 5],
                lineJoin: 'round',
                lineCap: 'round',
                zIndex: 50,
            })

            polyline.setMap(map)
            // 缩放地图到合适的视野级别
            // map.setFitView([ polyline ])
        },
        map(){ 
            let map =new BMap.Map(this.$refs.allmap); // 创建Map实例 
            map.centerAndZoom(new BMap.Point(104.093729,30.616172), 14);// 初始化地图,设置中心点坐标（经纬度/城市的名称）和地图级别 
            //删除默认的第二个图层
            
            map.addControl(new BMap.MapTypeControl({//添加地图类型控件 
                mapTypes:[ 
                    //BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP 
                ]
            })); 
            map.setCurrentCity("成都");// 设置地图显示的城市 此项是必须设置的 
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
            map.setMapType(BMAP_HYBRID_MAP);//默认显示卫星地图
            // 增加锦江路径定位折线
            let polyline = new BMap.Polyline([
                new BMap.Point(104.054204,30.657518),
                new BMap.Point(104.060203,30.658264),
                new BMap.Point(104.063834,30.654081),
                new BMap.Point(104.084675,30.650726),
                new BMap.Point(104.096604,30.644139),
                new BMap.Point(104.101491,30.635936),
                new BMap.Point(104.100054,30.631462),
                new BMap.Point(104.094017,30.631337),
                new BMap.Point(104.091574,30.628727),
                new BMap.Point(104.092723,30.624004),
                new BMap.Point(104.091286,30.62102),
                new BMap.Point(104.093586,30.617912),
                new BMap.Point(104.093729,30.615426),
                new BMap.Point(104.09531,30.613064),
                new BMap.Point(104.094448,30.607842),
                new BMap.Point(104.088843,30.605604),
                new BMap.Point(104.088986,30.599761),
                new BMap.Point(104.090855,30.597398),
                new BMap.Point(104.089418,30.595784),
                new BMap.Point(104.086399,30.595782),
                new BMap.Point(104.085249,30.590435),
                new BMap.Point(104.086974,30.585709),
                new BMap.Point(104.08065,30.576631),
                new BMap.Point(104.088124,30.575263),
                new BMap.Point(104.089849,30.573149),
                new BMap.Point(104.086543,30.566432),
            ], {
                strokeColor: '#00C0FF',
                strokeWeight: 12,
                strokeBorder: '1px solid #7FFFFF',
                strokeOpacity: 0.89
            });
            map.addOverlay(polyline);
            // 自定义标注控件
            function ZoomControl() {
                //默认定位在右上角
                this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
                this.defaultOffset = new BMap.Size(10, 10);
            }
            // 通过JaveScript的prototype属性继承于BMap.Control
            ZoomControl.prototype = new BMap.Control();
            console.log("1111");
            // 创建一个div元素作为控件容器，并添加到地图容器中
            ZoomControl.prototype.initialize = function(map) {
                // 创建一个DOM元素
                var div = document.createElement("div");
                // 添加文字说明

                // 设置样式
                div.style.width = '113px';
                div.style.height = '160px';
                div.style.backgroundColor = "rgba(0,0,0,0.37)";
                // 绑定事件,点击一次放大两级
                div.onclick = function(e){
                    map.setZoom(map.getZoom() + 2);
                }
                // 添加DOM元素到地图中
                map.getContainer().appendChild(div);
                // 将DOM元素返回
                return div;
            }
            //创建控件
            const myZoomCtrl = new ZoomControl();

            //添加到地图中
            map.addControl(myZoomCtrl);
        },
        closePopup() {
            this.popup = 0;
        }
    }
}
</script>

<style scoped lang="scss">
.contBox {
    width: 960px;
    height: 500px;
    text-align: center;
    line-height: 200px;
}
.mapBox {
    width: 600px;
    margin: 60px auto;
    height: 400px; 
    overflow: hidden;
}
#allmap{ 
    width: 500px;
    height: 300px; 
    overflow: hidden; 
}
#container {
    width: 600px;
    height: 400px; 
}
.layer {
    width: 60px;
    height: 80px;
    background: rgba(0,0,0,0.37);
    position: absolute;
    margin-left: 530px;
    margin-top: -390px;
    padding: 6px;
    .layerBox {
        height: 16px;
        line-height: 16px;
        font-size: 6px;
    }
}
.popup {
    width: 420px;
    height: 320px;
    background: rgba(0,0,0,0.8);
    position: fixed;
    left: 270px;
    top: 100px;
    transform: translate(0%, 0%);
    z-index: 1000;
}
.BMap_cpyCtrl {
    display: none!important;
}
.anchorBL {
    display: none!important;
}
</style>