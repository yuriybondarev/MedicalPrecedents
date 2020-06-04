import Vue from 'vue';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUserSecret, faArrowRight, faTerminal} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faUserSecret, faArrowRight, faTerminal);

Vue.component('fa-icon', FontAwesomeIcon);