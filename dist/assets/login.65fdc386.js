import{d as w,r as v,u as B,a as I,b as l,c as S,o as d,e as h,f as i,g as o,w as s,h as x,i as V,j as b,E as F,p as A,k,_ as y}from"./index.1b586fd5.js";const C=t=>(A("data-v-9822ae17"),t=t(),k(),t),E={class:"login_container"},D={class:"login_box"},N=C(()=>i("h2",null,"\u7BA1\u7406\u540E\u53F0\u767B\u5F55",-1)),T=w({__name:"login",setup(t){const e=v({account:"",password:""}),_=B(),u=I(!1);function m(){if(e.account==""||e.password=="")return F.warning("\u8BF7\u8F93\u5165\u8D26\u53F7\u5BC6\u7801");u.value=!0,window.localStorage.setItem("Account",e.account),window.localStorage.setItem("Password",e.password),e.account=="admin"?(localStorage.setItem("role","1"),localStorage.setItem("username","\u8D85\u7EA7\u7BA1\u7406\u5458")):e.account=="admin1"?(localStorage.setItem("role","2"),localStorage.setItem("username","\u666E\u901A\u7BA1\u7406\u5458")):(localStorage.setItem("role","3"),localStorage.setItem("username","\u8BBF\u5BA2")),setTimeout(()=>{u.value=!0,_.push({path:"/home"})},1e3)}return(U,a)=>{const c=l("el-input"),r=l("el-form-item"),p=l("el-button"),f=l("el-form"),g=S("loading");return d(),h("div",E,[i("div",D,[N,o(f,{model:e,class:"baseinfo-prescription","label-width":"90px"},{default:s(()=>[o(r,{label:"\u8D26\u53F7"},{default:s(()=>[o(c,{type:"text",modelValue:e.account,"onUpdate:modelValue":a[0]||(a[0]=n=>e.account=n),autocomplete:"off"},null,8,["modelValue"])]),_:1}),o(r,{label:"\u5BC6\u7801"},{default:s(()=>[o(c,{type:"password",modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=n=>e.password=n),autocomplete:"off",clear:""},null,8,["modelValue"])]),_:1}),x((d(),V(p,{type:"primary",onClick:m},{default:s(()=>[b("\u767B\u5F55")]),_:1})),[[g,u.value,void 0,{fullscreen:!0,lock:!0}]])]),_:1},8,["model"])])])}}});const H=y(T,[["__scopeId","data-v-9822ae17"]]);export{H as default};