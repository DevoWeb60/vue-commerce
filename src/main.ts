import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
    faUserSecret,
    faTrash,
    faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";

const icons = [faUserSecret, faTrash, faMinusCircle];
/* add icons to the library */
icons.forEach((icon) => library.add(icon));

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
