import{d as l,c as e,a0 as n,dP as r,ec as o}from"./ChUMkS6P.js";import{D as d}from"./DQIOWBcP.js";import{B as g}from"./Cnp9mbgV.js";import{C as c}from"./B7cfXcYQ.js";import{I as b}from"./uNGU_bZw.js";import{W as u}from"./CsyJWe2y.js";import{W as w}from"./DeNJEHch.js";import"./CwgerLfp.js";import"./CLpWF7IP.js";import"./D9Hbs_0D.js";import"./A9nCysFq.js";import"./CeHZR0Ph.js";import"./D9yAkl0j.js";import"./B7AWbE-9.js";import"./CiHLLTvI.js";import"./BgHkq_PJ.js";import"./BVv2S30c.js";import"./cuZZCMxh.js";import"./DldpU35S.js";import"./DzFfo68f.js";import"./CfeTNxv7.js";import"./DwDAZxOX.js";const F=l({name:"GalleryT6V4",props:{...d,settings:{type:Object,required:!0}},setup(t){return{renderImageItem:(i=0)=>{var a,m;const s=t.settings.images[i];if(s)return e(b,{value:s,index:i,widget:t.widget,images:t.settings.images,isEnabledImagePreview:(m=(a=t.settings)==null?void 0:a.isEnabledImagePreview)==null?void 0:m.isEnabled,animateClassName:t.animateClassName,isEnabledAnimation:t.isEnabledAnimation,class:"kmb-single-gallery-item kmb-gallery-items-image-full kmb-widget-full-image"},null)}}},render(){return e(w,{class:"gallery gallery-t6 gallery-t6-v4",settings:this.settings},{default:()=>[e(u,{settings:this.settings,fullContainerClassName:"kmb-widget-container-fluid-frame"},{default:()=>{var t;return[e("div",{class:"kmb-widget-content kmb-gallery-content"},[e("div",{class:"kmb-md-widget-container"},[e(c,{settings:this.settings,widgetIndex:this.widgetIndex,animateClassName:this.animateClassName,isEnabledAnimation:this.isEnabledAnimation,isEnabledDescription:!1,class:"text-center"},null)]),!n(this.settings.images)&&e("div",{class:"kmb-widget-row"},[e("div",{class:"kmb-widget-gallery-custom-col kmb-widget-col md_w-1-3 w-full kmb-widget-col-group"},[this.renderImageItem(0)]),e("div",{class:"kmb-widget-gallery-custom-col kmb-widget-col md_w-2-3 w-full"},[e("div",{class:"kmb-widget-row"},[e("div",{class:"sm_w-1-2 w-full kmb-widget-col kmb-widget-col-group"},[this.renderImageItem(1)]),e("div",{class:"sm_w-1-2 w-full kmb-widget-col kmb-widget-col-group"},[this.renderImageItem(2)])]),e("div",{class:"w-full"},[this.renderImageItem(3)])])]),e(g,{isEnabled:(t=this.settings.button)==null?void 0:t.isEnabled,animateClassName:this.animateClassName,isEnabledAnimation:this.isEnabledAnimation,class:"kmb-widget-btn-group-center kmb-widget-btn-group-md-mt"},{default:()=>[e(r,{value:this.settings.button,elementType:o.Primary},null)]})])]}})]})}});export{F as default};
