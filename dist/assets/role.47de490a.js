import{m as B}from"./menu.e9cdc90f.js";import{_ as I,a as _,b as o,o as i,e as g,g as e,w as t,f as u,j as d,F as N,x as T,p as V,k as j,i as D,y as F}from"./index.1b586fd5.js";const R=c=>(V("data-v-cf2fd40f"),c=c(),j(),c),E={class:"page_content"},L=R(()=>u("h2",{class:"page_title"},"\u6743\u9650\u8BBE\u7F6E",-1)),P={class:"table_content"},U={style:{"margin-top":"20px",display:"flex","justify-content":"space-between"}},q={__name:"role",setup(c){const m=_([{account:"admin",role:[1,2,3,4,5],idcard:"\u8D85\u7EA7\u7BA1\u7406\u5458"},{account:"admin1",role:[1,2,3,4],idcard:"\u666E\u901A\u7BA1\u7406\u5458"},{account:"admin2",role:[1,2,3],idcard:"\u8BBF\u5BA2"}]),p=_(1),f=_(10),b=a=>{f.value=a},h=a=>{p.value=a};function y(){}function v(a){let l="";return B.map(n=>{n.id==a&&(l=n.label)}),l}return(a,l)=>{const n=o("el-button"),x=o("el-row"),r=o("el-table-column"),w=o("el-tag"),C=o("el-table"),k=o("el-pagination");return i(),g("div",E,[L,e(x,{class:"search"},{default:t(()=>[e(n,{type:"primary",onClick:y},{default:t(()=>[d("\u65B0\u5EFA\u89D2\u8272")]),_:1})]),_:1}),u("div",P,[e(C,{ref:"multipleTableRef",data:m.value,border:""},{default:t(()=>[e(r,{type:"index",width:"100",align:"center",fixed:"left",label:"\u5E8F\u53F7"}),e(r,{label:"\u8D26\u53F7",align:"center",width:"240",prop:"account"}),e(r,{label:"\u89D2\u8272\u6743\u9650",align:"center",width:"140",prop:"idcard"}),e(r,{property:"address",label:"\u6743\u9650\u5217\u8868",align:"center"},{default:t(({row:s})=>[(i(!0),g(N,null,T(s.role,(S,z)=>(i(),D(w,{key:z,type:"primary"},{default:t(()=>[d(F(v(S)),1)]),_:2},1024))),128))]),_:1}),e(r,{label:"\u64CD\u4F5C",fixed:"right",width:"300",align:"center"},{default:t(({row:s})=>[e(n,{type:"primary"},{default:t(()=>[d("\u7F16\u8F91")]),_:1}),e(n,{type:"danger"},{default:t(()=>[d("\u5220\u9664")]),_:1})]),_:1})]),_:1},8,["data"]),u("div",U,[e(k,{"current-page":p.value,"onUpdate:current-page":l[0]||(l[0]=s=>p.value=s),"page-size":f.value,small:!1,background:!0,layout:"total, prev, pager, next",total:1e3,onSizeChange:b,onCurrentChange:h},null,8,["current-page","page-size"])])])])}}},H=I(q,[["__scopeId","data-v-cf2fd40f"]]);export{H as default};