"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App"));

var _router = _interopRequireDefault(require("./router"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _vueParticles = _interopRequireDefault(require("vue-particles"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _axios = _interopRequireDefault(require("axios"));

var _vueAwesomeSwiper = _interopRequireDefault(require("vue-awesome-swiper"));

require("swiper/dist/css/swiper.css");

var _iview = _interopRequireDefault(require("iview"));

require("iview/dist/styles/iview.css");

var _vueBaiduMap = _interopRequireDefault(require("vue-baidu-map"));

var _vueAmap = _interopRequireDefault(require("vue-amap"));

var _echarts = _interopRequireDefault(require("echarts"));

require("echarts/map/js/china");

require("../node_modules/swiper/dist/css/swiper.css");

var _vueJsonp = _interopRequireDefault(require("vue-jsonp"));

var _http = _interopRequireDefault(require("./libs/http"));

require("lib-flexible");

var _highcharts = _interopRequireDefault(require("highcharts"));

var _vueHighcharts = _interopRequireDefault(require("vue-highcharts"));

var _highcharts3d = _interopRequireDefault(require("highcharts/highcharts-3d"));

var _http2 = require("./request/http");

require("./directives");

var _store = _interopRequireDefault(require("./store/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入ivew库
// 使用 CSS
// 引入百度地图
// 引入高德地图
_vue["default"].config.productionTip = false;
_vue["default"].config.silent = true;

_vue["default"].use(_vueParticles["default"]);

_vue["default"].use(_elementUi["default"]);

_vue["default"].use(_vueAwesomeSwiper["default"]);

_vue["default"].use(_iview["default"]);

var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

_vue["default"].use(_vueBaiduMap["default"], {
  ak: 'dRYTpVW0oNYgZlRt71CiFk6DYiA0amt5' //ak密钥

});

_vue["default"].use(_vueAmap["default"]); //引入echarts


_vue["default"].prototype.$echarts = _echarts["default"]; //引入swiper
// import swiper from 'swiper'
// Vue.prototype.$swiper = swiper;

_vue["default"].use(_vueAwesomeSwiper["default"]);

_vue["default"].use(_vueJsonp["default"]);

_vue["default"].config.productionTip = false;
_vue["default"].prototype.$http = _axios["default"];

_vue["default"].use(_http["default"]); //引入lib-flexible


_vue["default"].use(_vueHighcharts["default"]);

(0, _highcharts3d["default"])(_highcharts["default"]); //引入axios

_vue["default"].prototype.$post = _http2.post;
_vue["default"].prototype.$get = _http2.get;
_vue["default"].prototype.$put = _http2.put;
_vue["default"].prototype.$patch = _http2.patch; // 节流和防抖

/* eslint-disable no-new */
new _vue["default"]({
  el: '#app',
  router: _router["default"],
  //store,
  components: {
    App: _App["default"]
  },
  template: '<App/>'
});