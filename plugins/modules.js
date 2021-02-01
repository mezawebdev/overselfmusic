import Spotlight from "spotlight.js";
import Vue from 'vue';
import VueMasonry from 'vue-masonry-css';
import VueCarousel from "vue-carousel";
import $ from "jquery";
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect);

window.$ = $;

Vue.use(VueMasonry);
Vue.use(VueCarousel);