import VueMarkdownEditor from "@kangc/v-md-editor";
import enUS from "@kangc/v-md-editor/lib/lang/en-US";
import "@kangc/v-md-editor/lib/style/base-editor.css";
import "@kangc/v-md-editor/lib/theme/style/vuepress.css";
import vuepressTheme from "@kangc/v-md-editor/lib/theme/github";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";

VueMarkdownEditor.lang.use("en-US", enUS);
VueMarkdownEditor.use(vuepressTheme, { Prism });
Vue.use(VueMarkdownEditor);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
