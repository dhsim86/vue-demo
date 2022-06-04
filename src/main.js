import Vue from "vue";
import App from "App";

import {
	BCol,
	BRow,
	BTabs,
	BTab,
	BCard,
	BButton,
	BFormCheckbox,
	BFormSelect,
	BModal
} from "bootstrap-vue";

import vuedraggable from "vuedraggable";

import router from "@/router/index";

Vue.component("b-col", BCol);
Vue.component("b-row", BRow);
Vue.component("b-tabs", BTabs);
Vue.component("b-tab", BTab);
Vue.component("b-card", BCard);
Vue.component("b-button", BButton);
Vue.component("b-form-checkbox", BFormCheckbox);
Vue.component("b-form-select", BFormSelect);
Vue.component("b-modal", BModal);

Vue.use(vuedraggable);

const main = new Vue({
	router,
	...App
});

main.$mount("#app");
