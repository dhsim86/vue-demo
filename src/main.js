import Vue from "vue";
import App from "App";

// import router from "@/router/index";

const main = new Vue({
	// router,
	...App
});

const p = new Promise(() => {});

console.log(p);

main.$mount("#app");
