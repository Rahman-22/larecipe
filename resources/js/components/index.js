import ClickOutside from './click-outside';

import AlgoliaSearchBox from "./AlgoliaSearchBox.vue";
import InternalSearchBox from "./InternalSearchBox.vue";
import LarecipeBackToTop from "./LarecipeBackToTop.vue";
import LarecipeBadge from "./LarecipeBadge.vue";
import LarecipeButton from "./LarecipeButton.vue";
import LarecipeCard from "./LarecipeCard.vue";
import LarecipeDropdown from "./LarecipeDropdown.vue";
import LarecipeProgress from "./LarecipeProgress.vue";

export default {
  install(Vue) {
    Vue.directive("click-outside", ClickOutside);

    Vue.component(AlgoliaSearchBox.name, AlgoliaSearchBox);
    Vue.component(InternalSearchBox.name, InternalSearchBox);
    Vue.component(LarecipeBackToTop.name, LarecipeBackToTop);
    Vue.component(LarecipeBadge.name, LarecipeBadge);
    Vue.component(LarecipeButton.name, LarecipeButton);
    Vue.component(LarecipeCard.name, LarecipeCard);
    Vue.component(LarecipeDropdown.name, LarecipeDropdown);
    Vue.component(LarecipeProgress.name, LarecipeProgress);
  }
};
