import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueFire from 'vuefire'
import Home from './components/Home.vue'
import Car from './components/Car.vue'
import Cars from './components/Cars.vue'
import Gallery from './components/Gallery.vue'
import Specs from './components/Specs.vue'
import Spec from './components/Spec.vue'
import Firebase from 'firebase'
let config = require('./db-config');

/// init db
let app = Firebase.initializeApp(config);
let db = app.firestore();
db.settings({
    timestampsInSnapshots: true
});
/// end of init db

// global connection to db
Vue.prototype.$db = db;
Vue.config.productionTip = true;

Vue.use(VueFire);
Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    routes:[
        { path: '/', name: 'home', component: Home },
        { path: '/cars', name: 'cars', component: Cars },
        { path: '/gallery', name: 'gallery', component: Gallery },
        { path: '/specs/', name: 'specs', component: Specs },
        { path: '/spec/:slug', name: 'spec', component: Spec },
        { path: '/car/:slug', name: 'car', component: Car },

        // { path: '/contacts', name: 'contacts', component: Contacts },
        // { path: '/hello-world/:msg', name: 'hello', component: HelloWorld },
    ]
});
new Vue({
    render: h => h(App),
    router: router
}).$mount('#app');

