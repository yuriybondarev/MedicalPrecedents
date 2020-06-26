import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faExclamationCircle, faArrowRight, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheckCircle, faExclamationCircle, faArrowRight, faTerminal);

Vue.component('fa-icon', FontAwesomeIcon);