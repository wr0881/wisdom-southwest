<template>
    <div class="contBox">
        <div class="map-box">
            <div id="tabs" tabindex="0"></div>
            <div v-show="popup" @click="closePopup" class="popup"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            popup: 0,
        }
    },
    mounted() {
        this.amap();
    },
    methods: {
        closePopup() {
            this.popup = 0;
        },
        amap() {
            var _this = this;
            let map = new AMap.Map('tabs', {
                center: [104.083729,30.610172],
                // resizeEnable: true,
                zoom: 13,
                lang: 'cn',
                layers: [
                    new AMap.TileLayer.Satellite()
                ]
            });
            let marker1 = new AMap.Marker({
                icon: require('../../assets/imgs/safety/icon_marker.png'),
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
                icon: require('../../assets/imgs/safety/icon_marker.png'),
                position: [104.09593993,30.62676016],
                offset: new AMap.Pixel(-13, -30)
            });
            marker2.setMap(map);
            AMap.event.addListener(marker2, 'click', function () {
                //想在此处调用后台接口，获取新的数据 并且拼接在content原有数据后面，并在弹窗中展现出来，无奈 没办法实现，求大佬支招。无论怎么操作弹窗都只有原有数据。
                console.log('点击第一个标注');
                _this.popup = 1;
            });
            let marker3 = new AMap.Marker({
                icon: require('../../assets/imgs/safety/icon_hospital.png'),
                position: [104.07357143,30.59237331],
                offset: new AMap.Pixel(-13, -30)
            });
            marker3.setMap(map);
            AMap.event.addListener(marker3, 'click', function () {
                //想在此处调用后台接口，获取新的数据 并且拼接在content原有数据后面，并在弹窗中展现出来，无奈 没办法实现，求大佬支招。无论怎么操作弹窗都只有原有数据。
                console.log('点击第一个标注');
                _this.popup = 1;
            });
            let marker4 = new AMap.Marker({
                icon: require('../../assets/imgs/safety/icon_firecontrol.png'),
                position: [104.08457143,30.59237331],
                offset: new AMap.Pixel(-13, -30)
            });
            marker4.setMap(map);
            AMap.event.addListener(marker4, 'click', function () {
                //想在此处调用后台接口，获取新的数据 并且拼接在content原有数据后面，并在弹窗中展现出来，无奈 没办法实现，求大佬支招。无论怎么操作弹窗都只有原有数据。
                console.log('点击第一个标注');
                _this.popup = 1;
            });
            let marker5 = new AMap.Marker({
                icon: require('../../assets/imgs/safety/icon_warehouse.png'),
                position: [104.09457143,30.61237331],
                offset: new AMap.Pixel(-13, -30)
            });
            marker5.setMap(map);
            AMap.event.addListener(marker5, 'click', function () {
                //想在此处调用后台接口，获取新的数据 并且拼接在content原有数据后面，并在弹窗中展现出来，无奈 没办法实现，求大佬支招。无论怎么操作弹窗都只有原有数据。
                console.log('点击第一个标注');
                _this.popup = 1;
            });
            let marker6 = new AMap.Marker({
                icon: require('../../assets/imgs/safety/icon_warehouse.png'),
                position: [104.08457143,30.59937331],
                offset: new AMap.Pixel(-13, -30)
            });
            marker6.setMap(map);
            AMap.event.addListener(marker6, 'click', function () {
                //想在此处调用后台接口，获取新的数据 并且拼接在content原有数据后面，并在弹窗中展现出来，无奈 没办法实现，求大佬支招。无论怎么操作弹窗都只有原有数据。
                console.log('点击第一个标注');
                _this.popup = 1;
            });
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
                borderWeight: 1,
                strokeColor: "#00C0FF", 
                strokeOpacity: 0.89,
                strokeWeight: 8,
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
    }
}
</script>

<style scoped lang="scss">
.contBox {
    width: 100%;
    height: 100%;
    text-align: center;
}
.map-box {
    width: 100%;
    margin: auto;
    height: 100%; 
    overflow: hidden;
}
#allmap{ 
    width: 500px;
    height: 300px; 
    overflow: hidden; 
}
#tabs {
    width: 100%;
    height: 100%; 
}
.popup {
    width: 420px;
    height: 260px;
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