import Vue from 'vue'
import Router from 'vue-router'

import TutorialsList from "./views/TutorialsList.vue"
import EditTutorial from "./views/EditTutorial.vue"
import AddTutorial from "./views/AddTutorial.vue"
import ViewTutorial from "./views/ViewTutorial.vue"
import AddLesson from "./views/AddLesson.vue"
import EditLesson from "./views/EditLesson.vue"

Vue.use(Router)

const router =  new Router({
  mode: 'hash',
  linkExactActiveClass: 'active',
  base:
//    process.env.NODE_ENV === 'development'? "/" : "/tutorScheduling/", - for AWS
    process.env.NODE_ENV === 'development'? "/" : "/",
  routes: [
    {
      path: "/",
      name: "tutorials",
      component: TutorialsList
    },
    {
      path: "/edit/:id",
      name: "edit",
      component: EditTutorial,
      props: true
    },
    {
      path: "/add",
      name: "add",
      component: AddTutorial
    },
    {
      path: "/view",
      name: "view",
      component: ViewTutorial,
      props: true
    },
    {
      path: "/addLesson",
      name: "addLesson",
      component: AddLesson,
      props: true
    },
    {
      path: "/editLesson",
      name: "editLesson",
      component: EditLesson,
      props: true
    }
  ]
})

export default router;