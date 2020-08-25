<template>
    <div class="mapbox-cont">
        <div class="bg-mapbox">
            <div class="map-xizang" @click="xizang=1" :class="{activexizang:xizang==1}">西藏自治区</div>
            <div class="map-sichuan" @click="sichuan=1" :class="{activesichuan:sichuan==1}">四川省</div>
            <div class="map-chongqing" @click="chongqing=1" :class="{activechongqing:chongqing==1}">重庆市</div>
            <div class="map-yunnan" @click="yunnan=1" :class="{activeyunnan:yunnan==1}">云南省</div>
            <div class="map-guizhou" @click="guizhou=1" :class="{activeguizhou:guizhou==1}">贵州省</div>
        </div>
        <div class="title-mapbox">
            <div class="name-mapbox">云贵<br>川渝藏</div>
            <div class="bg-rotate"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'map2',
    data() {
        return {
            xizang: 0,
            sichuan: 0,
            chongqing: 0,
            yunnan: 0,
            guizhou: 0
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@mixin keyframes($animationName) {
    @keyframes #{$animationName} {
        @content;
    }
}
@mixin rotate() {
    animation: rotate 2s linear 0.2s infinite;
    @include keyframes(rotate) {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
.mapbox-cont {
    .bg-mapbox {
        width: 362px;
        height: 249px;
        float: left;
        margin-left: 40px;
        background-image: url('../../assets/imgs/market/map/bg_map.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .map-xizang {
            width: 222px;
            height: 138px;
            background-image: url('../../assets/imgs/market/map/map_xizang.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            position: absolute;
            margin-top: 8px;
            margin-left: 11px;
            text-align: center;
            line-height: 138px;
            font-size: 7px;
        }
        .activexizang {
            background-image: url('../../assets/imgs/market/map/active_xizang.png');
        }
        .map-sichuan {
            width: 119.5px;
            height: 116.5px;
            background-image: url('../../assets/imgs/market/map/map_sichuan.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            position: absolute;
            margin-top: 38px;
            margin-left: 213px;
            text-align: center;
            line-height: 116px;
            font-size: 7px;
        }
        .activesichuan {
            background-image: url('../../assets/imgs/market/map/active_sichuan.png');
        }
        .map-chongqing {
            width: 54px;
            height: 56.5px;
            background-image: url('../../assets/imgs/market/map/map_chongqing.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            position: absolute;
            margin-top: 68px;
            margin-left: 296px;
            text-align: center;
            line-height: 70px;
            font-size: 7px;
        }
        .activechongqing {
            background-image: url('../../assets/imgs/market/map/active_chongqing.png');
        }
        .map-yunnan {
            width: 94.5px;
            height: 115.5px;
            background-image: url('../../assets/imgs/market/map/map_yunnan.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            position: absolute;
            margin-top: 111px;
            margin-left: 214px;
            text-align: center;
            line-height: 115px;
            font-size: 7px;
        }
        .activeyunnan {
            background-image: url('../../assets/imgs/market/map/active_yunnan.png');
        }
        .map-guizhou {
            width: 65px;
            height: 66.5px;
            background-image: url('../../assets/imgs/market/map/map_guizhou.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            position: absolute;
            margin-top: 111px;
            margin-left: 280px;
            text-align: center;
            line-height: 66px;
            font-size: 7px;
        }
        .activeguizhou {
            background-image: url('../../assets/imgs/market/map/active_guizhou.png');
        }
    }
    .title-mapbox {
        width: 60px;
        height: 60px;
        float: right;
        margin-right: 5px;
        background-image: url('../../assets/imgs/market/map/bg_maptitle.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-position: 0 0;
        .name-mapbox {
            width: 60px;
            height: 60px;
            position: absolute;
            font-size: 8px;
            text-align: center;
            color: #fff;
            margin-top: 18px;
        }
        .bg-rotate {
            width: 48px;
            height: 48px;
            float: left;
            margin: 6px 6.5px 6px 5.5px;
            background-image: url('../../assets/imgs/market/map/bg_rotate.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            background-position: 0 0;
            @include rotate();
        }
    }
}
</style>