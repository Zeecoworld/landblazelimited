import{d as i,c as e,dA as o,k as t,dF as l}from"./ChUMkS6P.js";import{F as m}from"./DbLROxjo.js";const a=i({name:"FooterLinks",props:{site:{type:Object,required:!0},columnSize:{type:String,default:"lg_w-1-3 md_w-1-3 sm_w-1-2"}},render(){return e("div",{class:t(this.columnSize,"w-full kmb-widget-col kmb-site-default-dir kmb-footer-column kmb-footer-links-column")},[e("div",{class:"kmb-footer-links"},[e(m,{site:this.site,type:o.Links},null),this.site.footerMenuItems&&e("ul",{class:t("kmb-footer-list kmb-footer-links-list")},[this.site.footerMenuItems.map(s=>e("li",{class:"kmb-footer-link-item"},[e(l,{item:s,site:this.site},null)]))])])])}});export{a as default};
