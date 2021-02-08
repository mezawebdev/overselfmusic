import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';
import VueCarousel from "vue-carousel";
import $ from "jquery";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import LightGallery from 'vue-light-gallery';
 
Vue.use(LightGallery);

Vue.component('v-select', vSelect);

window.$ = $;

Vue.use(VueMasonry);
Vue.use(VueCarousel);