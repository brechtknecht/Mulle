import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import QuestionTemplate from './views/Question-Template.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/start',
      name: 'start',
      component: Start
    },   
    {
      path: '/question',
      name: 'question-template',
      component: QuestionTemplate
    }
  ]
})
