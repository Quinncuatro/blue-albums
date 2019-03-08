import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Home.vue")
    },
    {
      path: "/contenders",
      name: "contenders",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Contenders.vue")
    },
    {
      path: "/process",
      name: "process",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Process.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/album-details",
      name: "AlbumDetails",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/AlbumDetails.vue")
    }
  ]
});
