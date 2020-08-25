import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'
import secretaryPage from '@/pages/secretary/secretaryPage'
import echartsPage from '@/pages/3Decharts/echartsPage' 
import safetyPage from '@/pages/safety/safetyPage'
import engineerPage from '@/pages/engineer/engineerPage'
import financePage from '@/pages/finance/financePage'
import financePage1 from '@/pages/finance/financePage1'
import partyPage from '@/pages/party/partyPage'
import partyPage3 from '@/pages/party/partyPage3'
import marketPage from '@/pages/market/marketPage'
import marketPage2 from '@/pages/market/marketPage2'
import contractPage from '@/pages/contract/contractPage'
import hrPage from '@/pages/hr/hrPage'
import hrPage2 from '@/pages/hr/hrPage2'
import hrPage3 from '@/pages/hr/hrPage3'
import generalPage from '@/pages/general/generalPage'
//后台管理系统
import backIndex from '@/pages/backsystem/index/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    //登录
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    //错误页面
    //后台管理系统
    {
      path: '/backsystem/index',
      name: 'backIndex',
      component: backIndex
    },
    //前台展示系统
    {
      path: '/secretaryPage',//首页
      name: 'secretaryPage',
      component: secretaryPage,
      meta: { requireAuth: true, roles: ['superadmin','admin','user'] }
    },
    {
      path: '/echartsPage',
      name: 'echartsPage',
      component: echartsPage,
    },
    {
      path: '/safetyPage',//安全监管
      name: 'safetyPage',
      component: safetyPage,
    },
    {
      path: '/engineerPage',//工程技术
      name: 'engineerPage',
      component: engineerPage,
    },
    {
      path: '/marketPage',//市场投资
      name: 'marketPage',
      component: marketPage2,
    },
    {
      path: '/financePage',//财务动态
      name: 'financePage',
      component: financePage,
    },
    {
      path: '/partyPage',//党群工作
      name: 'partyPage',
      component: partyPage,
      // children: [
      //   {
      //     path: '/partyPage/partyPage3',
      //     name: 'partyPage3',
      //     component: partyPage3
      //   }
      // ]
    },
    {
      path: '/partyPage3',
      name: 'partyPage3',
      component: partyPage3,
    },
    {
      path: '/contractPage',//造价合约
      name: 'contractPage',
      component: contractPage,
    },
    {
      path: '/hrPage',//人资管理
      name: 'hrPage',
      component: hrPage2,
    },
    {
      path: '/hrPage3',//人资管理
      name: 'hrPage3',
      component: hrPage3,
    },
    {
      path: '/generalPage',//综合事务
      name: 'generalPage',
      component: generalPage,
    },
  ]
})
