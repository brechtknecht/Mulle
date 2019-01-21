import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import QuestionTemplate from './views/Question-Template.vue'
import Evaluation from './views/Evaluation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },   
    {
      path: '/question',
      name: 'question-template',
      component: QuestionTemplate
    }, {
      path: '/question/:question_id',
      component: QuestionTemplate
    }, {
      path: '/evaluation',
      component: Evaluation
    }
  ]
})
