import{r as s,h as i,H as t,g as e}from"./p-fac15695.js";const n=class{constructor(i){s(this,i)}dismiss(){this.el.classList.add("hidden")}render(){return i(t,null,i("div",{class:`notice is-dismissible notice-${this.status}`},i("p",{innerHTML:this.message}),this.dismissible?i("button",{type:"button",class:"notice-dismiss",onClick:this.dismiss.bind(this)},i("span",{class:"screen-reader-text"},"Dismiss this notice.")):""))}get el(){return e(this)}};export{n as wp_notice}