<template>
  <div >
    <div>
      <swiper :options="swiperOption">
        <swiper-slide class="swiper-slide" v-for="(item,index) in slide" :key="index">
          <div class="projectBox">
            <div class="projectbox-img"></div>
            <div class="projectCon">
              <div class="projectTitle">中新生态城污水治理</div>
              <div class="projectNum">合同额:：1.85亿</div>
              <div class="projectNum">累计产值：7000万</div>
              <div class="projectNum">本月产值：2000万</div>
            </div>
          </div>
          <div class="projectBox">
            <div class="projectbox-img"></div>
            <div class="projectCon">
              <div class="projectTitle">成都沱江流域治理</div>
              <div class="projectNum">合同额:：3.5亿</div>
              <div class="projectNum">累计产值：1.5亿</div>
              <div class="projectNum">本月产值：1.15亿</div>
            </div>
          </div>
          <div class="projectBox">
            <div class="projectbox-img"></div>
            <div class="projectCon">
              <div class="projectTitle">武清黄花店污水治理</div>
              <div class="projectNum">合同额:：2.85亿</div>
              <div class="projectNum">累计产值：1.2亿</div>
              <div class="projectNum">本月产值：9000万</div>
            </div>
          </div>
          <div class="projectBox">
            <div class="projectbox-img"></div>
            <div class="projectCon">
              <div class="projectTitle">晋江绿道工程</div>
              <div class="projectNum">合同额:：2.3亿</div>
              <div class="projectNum">累计产值：4000万</div>
              <div class="projectNum">本月产值：1500万</div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>   <!-- 分页 -->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>    箭头左 --> 
        <!-- <div class="swiper-button-next" slot="button-next"></div>   箭头右 -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      slide: [1, 2, 3, 4, 5],
      //设置属性
      swiperOption: {
        //显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true //允许分页点击跳转
        },
        //设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next', 
          prevEl: '.swiper-button-prev'
        },
        //自动轮播
        autoplay: {
          delay: 2000
        },
        //开启循环模式
        loop: true,
        //开启鼠标滚轮控制Swiper切换
        mousewheel: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-slide {
  width: 100%;
  height: 120px;
  font-size: 50px;
  text-align: center; 
}
.projectBox {
  width: 214px;
  height: 85px;
  float: left;
  text-align: center;
  background-image: url('../../assets/imgs/new/bg_project.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: 0 0;
  margin: 10.2px; 
  .projectbox-img {
    width: 98px;
    height: 65px;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
    background-image: url('../../assets/imgs/new/img_project.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
  }  
}
.projectCon {
  width: 100px;
  height: 85px;
  float: left;
  margin-left: 6px;
  .projectTitle {
    margin-top: 14px;
    font-size: 10px;
    text-align: left;
  }
  .projectNum {
    font-size: 10px;
    text-align: left;
  }
}
</style>