import Vue from 'vue'
import Router from 'vue-router'
import SkillSet from '@/components/SkillSet/SkillSet'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SkillSet',
      component: SkillSet
    }
  ]
})
