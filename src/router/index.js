import { createRouter, createWebHistory } from 'vue-router'

import OrderView from "../views/Order";
import ResultView from "../views/Result";
import JPOrderView from "../views/JPOrder"
import JPCartView from "../views/JPCart"
import JPResultView from "../views/JPResult";
import JPSubmitFormView from "../views/JPSubmitForm";


 
const routes = [
  {
    path: '/Mask',
    name: 'Order',
    component: OrderView
  },
  {
    path:'/result',
    name:'Result',
    component:ResultView
  },
  {
    path:'/jpOrder',
    name:'JPOrder',
    component:JPOrderView
  },
  {
    path:'/cart',
    name:'JPCart',
    component:JPCartView
  },
  {
    path:'/jpResult',
    name:'JPResult',
    component:JPResultView
  },
  {
    path:'/submitForm',
    name:'JPSubmitForm',
    component:JPSubmitFormView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
