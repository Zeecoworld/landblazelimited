import{f as c,aN as e,af as u}from"./ChUMkS6P.js";const f=3e3,l=()=>{const n=c("useNotifications",()=>({notifications:[]})),a=t=>{const s=n.value.notifications.findIndex(r=>r.id===t),o=n.value.notifications[s];typeof o.onCancel=="function"&&o.onCancel(),n.value.notifications.splice(s,1)},i=t=>{const s=u();n.value.notifications.push({...t,id:s});const o=t.durationInMs||f;o&&setTimeout(()=>{a(s)},o)};return{notifications:e(n.value.notifications),removeNotification:a,addNotification:i}};var d=(n=>(n[n.Success=1]="Success",n[n.Warning=2]="Warning",n[n.Info=3]="Info",n[n.Error=4]="Error",n[n.Confirm=5]="Confirm",n))(d||{});export{d as N,l as u};
