import Vue from 'vue'
import VueRrot from 'vue-router';
import ResePi from '../components/containers/ResepiPage';




Vue.use(VueRrot);

const router = new VueRrot({
    routes: [{
        path: '/',
        name: 'ResepiePage',
        component: ResePi
      },
    ]
  })
  export default router;