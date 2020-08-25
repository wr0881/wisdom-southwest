<template>
    <div>
        <div id="myEchart" style="width:100%;height:100%;">
            
        </div>
    </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/map/js/province/sichuan.js'
import "echarts-gl"

export default {
    name: "3Decharts",
    data() {
        return {

        }
    },
    created: function() {
        that = this
    },
    mounted() {
        that.getEcharts();
    },
    methods: {
        getEcharts() {
            let myEchart = that.$echarts.init(document.getElementById('myEchart'));
            myEchart.setOption({
                series: [{
                    type: 'map3D',
                    name: '四川',
                    selectedMode: 'single',
                    boxDepth: 90,
                    regionHeight: 8,
                    map: '四川',
                    viewControl: {
                        distance: 150,
                        rotateSensitivity: 0,
                        zoomSensitivity: 0,
                    },
                    label: {
                        show: true,
                        textStyle: {
                            color: "#0a1640",
                            fontSize: 12,
                            backgroundColor: "rgba(0,0,0,0)",
                        }
                    },
                    itemStyle: {
                        color: "#81d0f1",
                        borderWidth: 0.5,
                        borderColor: "#459bca",
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                            }
                        },
                        itemStyle: {
                            color: '#0489d6',
                        }
                    },
                    regions:[
                        {
                            name: "宜昌市",
                            itemStyle: {
                                areaColor: "#f00",
                            }
                        }
                    ]
                }]
            })
        }
    },
}
</script>