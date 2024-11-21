import{d as V,s as C,b as R,C as U,L as _,a as I,I as L,E as T,R as h,v as g,i as f,c as s,k as o,K as b,z as j,w as F,j as Y}from"./ChUMkS6P.js";import{u as D,N as n}from"./qvBQAMV1.js";import{p as M}from"./BsqA6tUc.js";import{F as y}from"./B-lU7qM5.js";import{F as k}from"./xwgnLmIi.js";import"./CyET3sau.js";import"./D9Hbs_0D.js";import"./A9nCysFq.js";import"./CeHZR0Ph.js";function P(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!j(t)}const W=V({name:"ResetPassword",async setup(){const{t}=C(),{$api:c}=R(),{addNotification:i}=D(),l=U(),d=_(),a=I(),v=L(),e=T(new h),p=g(null),x=g(null),S=f(()=>a.clientSession),w=f(()=>{const{isValid:m,containsUppercase:u,containsNumber:r,containsSpecial:N,minLength:E}=M(e==null?void 0:e.newPassword);return{isValid:m,containsUppercase:u,containsNumber:r,containsSpecial:N,minLength:E}}),$=async m=>{if(m.preventDefault(),!w.value.isValid){i({title:t("notifications.ohShap"),desc:t("notifications.passwordIsInvalid"),type:n.Error});return}if((e==null?void 0:e.newPassword)!=p.value){i({title:t("notifications.ohShap"),desc:t("notifications.passwordsDontMatch"),type:n.Error});return}const{secretCode:u}=l.query;if(F(u)){i({title:t("notifications.ohShap"),desc:t("notifications.secretCodeIsRequired"),type:n.Error});return}try{const r=await c.post(new h({newPassword:e==null?void 0:e.newPassword,secretCode:u}));r.success?(i({title:t("notifications.wellDone"),desc:t("notifications.passwordBeenUpdated"),type:n.Success}),d.push("/login")):i({title:t("notifications.ohShap"),desc:r.message,type:n.Error})}catch(r){console.log(r),i({title:t("notifications.ohShap"),desc:t("notifications.unableSendPasswordRestore"),type:n.Error})}};return await(async()=>{Y(S.value)||await a.signout()})(),{onSubmit:$,validation:w,localePath:v,responseStatus:x,resetPassword:e,confirmPassword:p}},render(){var i,l,d;let t,c;return s("div",{class:"kmb-site-page flex items-center"},[s("div",{class:"kmb-reset-password-page kmb-sm-widget-container"},[s("h2",{class:"kmb-widget-title-h2 kmb-widget-title-no-divider kmb-widget-col-group-no-margin text-center"},[this.$t("authentification.setYourNewPassword")]),s("p",{class:"mb-kmb-xl-group text-center kmb-widget-text-body1 mt-6"},[this.$t("authentification.enterYourEmailAddress")]),s("form",{ref:"form",onSubmit:a=>this.onSubmit(a),class:"kmb-form-login"},[s("div",{class:o("mb-kmb-xl-group kmb-user-password-field-group",{"kmb-user-password-field-group-error":!((i=this.validation)!=null&&i.isValid)&&((l=this.resetPassword.newPassword)==null?void 0:l.length)})},[s(k,{label:this.$t("labels.newPassword"),class:"kmb-password-block"},{default:()=>[s(y,{type:"password",id:"password",modelValue:this.resetPassword.newPassword,"onUpdate:modelValue":a=>this.resetPassword.newPassword=a,placeholder:this.$t("labels.enterYourPassword"),isEbaledTogglePasswordType:!0},null)]}),((d=this.resetPassword)==null?void 0:d.newPassword)&&s("ul",{class:"password-security-roles flex items-center"},[s("li",{class:o("password-security-role",{"password-security-role-ok":this.validation.containsUppercase})},[s("img",{width:9,height:9,class:o("password-security-role-img"),src:this.validation.containsUppercase?"/images/ok-icon.svg":"/images/cancel-icon.svg"},null),s("span",{class:"kmb-widget-text-body1"},[this.$t("authentification.uppercaseLetter")])]),s("li",{class:o("password-security-role mx-4",{"password-security-role-ok":this.validation.minLength})},[s("img",{width:9,height:9,class:o("password-security-role-img"),src:this.validation.minLength?"/images/ok-icon.svg":"/images/cancel-icon.svg"},null),s("span",{class:"kmb-widget-text-body1"},[this.$t("authentification.eightToSixtyfourCharacters")])]),s("li",{class:o("password-security-role",{"password-security-role-ok":this.validation.containsNumber})},[s("img",{width:9,height:9,class:o("password-security-role-img"),src:this.validation.containsNumber?"/images/ok-icon.svg":"/images/cancel-icon.svg"},null),s("span",{class:"kmb-widget-text-body1"},[this.$t("authentification.number")])])])]),s("div",{class:o("kmb-user-password-field-group mb-kmb-xl-group",{"kmb-user-password-field-group-error":this.resetPassword.newPassword!=this.confirmPassword&&this.confirmPassword.length})},[s(k,{label:this.$t("labels.confirmNewPassword"),class:"kmb-password-block"},{default:()=>[s(y,{type:"password",id:"confirmPassword",modelValue:this.confirmPassword,"onUpdate:modelValue":a=>this.confirmPassword=a,placeholder:this.$t("labels.enterYourPassword"),isEbaledTogglePasswordType:!0},null)]}),this.resetPassword.newPassword!=this.confirmPassword&&this.confirmPassword.length>0&&s("ul",{class:"password-security-roles  flex items-center"},[s("li",{class:o("password-security-role",{"password-security-role-ok":this.resetPassword.newPassword==this.confirmPassword})},[s("img",{width:9,height:9,class:o("password-security-role-img"),src:this.resetPassword.newPassword==this.confirmPassword?"/images/ok-icon.svg":"/images/cancel-icon.svg"},null),s("span",{class:"kmb-widget-text-body1"},[this.$t("authentification.passwordMismatch")])])])]),s("div",{class:"text-center"},[s("button",{class:"w-full kmb-widget-btn"},[this.$t("authentification.setPassword")])])]),s("div",{class:"text-center kmb-widget-text-body1 mt-4"},[s(b,{to:"/login",class:"kmb-form-link underline"},P(t=this.$t("authentification.logIn"))?t:{default:()=>[t]}),s("span",{class:"lowercase mx-2"},[this.$t("labels.or")]),s(b,{to:"/login",class:"kmb-form-link underline"},P(c=this.$t("buttons.signUp"))?c:{default:()=>[c]})])])])}});export{W as default};
