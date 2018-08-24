import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//filters
Vue.filter('to-upper',function(value){
  return value.toUpperCase()
});

Vue.filter('excerpt',function(value){
  return value.slice(0,100) + '....';
});

new Vue({
  el: '#app',
  render: h => h(App)
})
