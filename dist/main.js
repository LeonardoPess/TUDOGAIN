(()=>{"use strict";new class{constructor(t){this.accordionList=document.querySelectorAll(t),this.activeClass="ativo"}toggleAccordion(t){t.classList.toggle(this.activeClass),t.nextElementSibling.classList.toggle(this.activeClass)}addAccordionEvent(){this.accordionList.forEach((t=>{t.addEventListener("click",(()=>this.toggleAccordion(t)))}))}init(){return this.accordionList.length&&this.addAccordionEvent(),this}}('[data-anime="according"] dt').init(),new class{constructor(t,o){this.linksInternos=document.querySelectorAll(t),this.options=void 0===o?{behavior:"smooth",block:"start"}:o,this.scrollToSection=this.scrollToSection.bind(this)}getScrollTopByHref(t){const o=t.getAttribute("href");return document.querySelector(o).offsetTop}scrollToSection(t){t.preventDefault();const o=this.getScrollTopByHref(t.currentTarget)-80;this.scrollToPosition(o)}scrollToPosition(t){!function(t,o,i){const e=window.scrollX||window.pageXOffset,s=window.scrollY||window.pageYOffset,n=0-e,c=o-s,r=(new Date).getTime();i=void 0!==i?i:400;const l=(t,o,i,e)=>(t/=e/2)<1?i/2*t*t*t*t+o:-i/2*((t-=2)*t*t*t-2)+o,a=setInterval((()=>{const t=(new Date).getTime()-r,o=l(t,e,n,i),d=l(t,s,c,i);t>=i&&clearInterval(a),window.scroll(o,d)}),1e3/60)}(0,t)}addLinkEvent(){this.linksInternos.forEach((t=>{t.addEventListener("click",this.scrollToSection)}))}init(){return this.linksInternos.length&&this.addLinkEvent(),this}}('a[href^="#"]').init()})();