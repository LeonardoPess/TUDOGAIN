import Accordion from './modules/Accordion.js';
import SmoothScroll from './modules/SmoothScroll.js';

const accordion = new Accordion('[data-anime="according"] dt');
accordion.init();

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();
