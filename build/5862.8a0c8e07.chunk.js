"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5862],{27887:(F,T,n)=>{n.d(T,{r:()=>A});var d=n(67294),f=n(45697),D=n.n(f),k=n(99168),R=n(41580);function I(O,P,g){if(!O||!P)return{display:"none"};const{x:L,y:b}=g;return{transform:`translate(${L}px, ${b}px)`}}function A({renderItem:O}){const{itemType:P,isDragging:g,item:L,initialOffset:b,currentOffset:S,mouseOffset:U}=(0,k.useDragLayer)(C=>({item:C.getItem(),itemType:C.getItemType(),initialOffset:C.getInitialSourceClientOffset(),currentOffset:C.getSourceClientOffset(),isDragging:C.isDragging(),mouseOffset:C.getClientOffset()}));return g?d.createElement(R.x,{height:"100%",left:0,position:"fixed",pointerEvents:"none",top:0,zIndex:100,width:"100%"},d.createElement(R.x,{style:I(b,S,U)},O({type:P,item:L}))):null}A.propTypes={renderItem:D().func.isRequired}},99781:(F,T,n)=>{var d=n(67294);const f=(0,d.createContext)();var D=null},75642:(F,T,n)=>{n.d(T,{PL:()=>R,Y9:()=>o.Y,zE:()=>z,Ky:()=>le,fi:()=>Z,zH:()=>u,r5:()=>me});var d=n(67294),f=n(86706),D=n(21323);const R=()=>{const s=(0,f.v9)(D.Z),e=(0,d.useCallback)(t=>s?.components?.[t]??{},[s]);return{...s,getComponentLayout:e}};var I=n(52861),A=n(87631),O=n(50361),P=n.n(O),g=n(27361),L=n.n(g),b=n(36968),S=n.n(b),U=n(13920);const C=(s,e)=>e.find(t=>t.uid===s),w=(s,e)=>{const t=K(s,e),a=$(t.contentType,e),l=H(t.contentType,t.components);return S()(t,["contentType","layouts","edit"],a),S()(t,["contentType","layouts","list"],l),Object.keys(t.components).forEach(i=>{const y=$(t.components[i],e);S()(t,["components",i,"layouts","edit"],y)}),t},K=(s,e)=>{const t=(0,U.w8)(P()(s),e,"contentType"),{components:a,contentType:l}=t,i=y=>Object.keys(y.metadatas).reduce((E,M)=>{const v=L()(y,["attributes",M],{});let x=y.metadatas[M];if(v.type==="relation"){const fe=C(v.targetModel,e),N=x.edit.mainField,Y={name:N,schema:L()(fe,["attributes",N])};x={list:{...x.list,mainField:Y},edit:{...x.edit,mainField:Y}}}return E[M]=x,E},{});return S()(t,["contentType","metadatas"],i(l)),Object.keys(a).forEach(y=>{const E=a[y],M=i(E);S()(t,["components",y,"metadatas"],M)}),t},$=(s,e)=>s.layouts.edit.reduce((t,a)=>{const l=a.map(i=>{const y=L()(s,["attributes",i.name],{}),E={...i,fieldSchema:y,metadatas:L()(s,["metadatas",i.name,"edit"],{})};if(y.type==="relation"){const v=C(y.targetModel,e).pluginOptions||{};S()(E,"targetModelPluginOptions",v),S()(E,"queryInfos",{shouldDisplayRelationLink:ne(s,i.name,e)})}return E});return t.push(l),t},[]),H=(s,e)=>s.layouts.list.reduce((a,l)=>{const i=L()(s,["attributes",l],{}),y=L()(s,["metadatas",l,"list"],{}),E=i.type;if(E==="relation")return a.push({key:`__${l}_key__`,name:l,fieldSchema:i,metadatas:y}),a;if(E==="component"){const M=e[i.component],v=M.settings.mainField,x=M.attributes[v];return a.push({key:`__${l}_key__`,name:l,fieldSchema:i,metadatas:{...y,mainField:{...x,name:v}}}),a}return a.push({key:`__${l}_key__`,name:l,fieldSchema:i,metadatas:y}),a},[]),ne=(s,e,t)=>{const a=L()(s,["attributes",e,"targetModel"],"");return J(t).includes(a)},J=s=>s.filter(e=>e.isDisplayed).map(({uid:e})=>e),Q=w;var V=n(18172);const W={error:null,isLoading:!0,layout:{},layouts:{}},_=(s,e)=>(0,V.ZP)(s,t=>{switch(e.type){case"GET_DATA":{t.isLoading=!0,t.error=null,t.layout={};break}case"GET_DATA_SUCCEEDED":{const a=e.data.contentType.uid;t.layout=e.data,t.layouts[a]=e.data,t.isLoading=!1;break}case"GET_DATA_ERROR":{t.isLoading=!1,t.error=e.error;break}case"SET_LAYOUT_FROM_STATE":{t.error=null,t.layout=s.layouts[e.uid];break}case"UPDATE_LAYOUT":{const a=s.layout;t.layout={...a,contentType:{uid:a.contentType.uid,...e.newLayout.contentType}},t.layouts[a.contentType.uid]={...a,contentType:{uid:a.contentType.uid,...e.newLayout.contentType}};break}default:return t}});var j=n(84668);const z=s=>{const[{error:e,isLoading:t,layout:a,layouts:l},i]=(0,d.useReducer)(_,W),y=(0,d.useMemo)(j.Vo,[]),{schemas:E}=(0,f.v9)(N=>y(N),f.wU),M=(0,d.useRef)(!0),{get:v}=(0,A.kY)(),x=(0,d.useCallback)(async(N,Y)=>{if(l[N]){i({type:"SET_LAYOUT_FROM_STATE",uid:N});return}i({type:"GET_DATA"});try{const{data:{data:te}}=await v(`/content-manager/content-types/${N}/configuration`,{cancelToken:Y.token});i({type:"GET_DATA_SUCCEEDED",data:Q(te,E)})}catch(te){if(I.default.isCancel(te))return;M.current&&console.error(te),M.current&&i({type:"GET_DATA_ERROR",error:te})}},[l,E,v]);(0,d.useEffect)(()=>()=>{M.current=!1},[]),(0,d.useEffect)(()=>{const Y=I.default.CancelToken.source();return x(s,Y),()=>{Y.cancel("Operation canceled by the user.")}},[s,x]);const fe=(0,d.useCallback)(N=>{i({type:"UPDATE_LAYOUT",newLayout:Q(N,E)})},[E]);return{error:e,isLoading:t,layout:a,updateLayout:fe}},X=s=>s["content-manager_app"].collectionTypeLinks;var G=n(80129),re=n(13218),ye=n.n(re);const oe=(s,e)=>Object.keys(s).reduce((t,a)=>{const l=s[a],i=L()(e,[a],l);return ye()(l)?{...t,[a]:oe(l,i)}:(t[a]=i,t)},{}),ge=(s,e,t)=>{const a=s.find(({to:x})=>x.includes(e));if(!a)return"/";const{to:l,search:i}=a,y=(0,G.parse)(i),E=(0,G.parse)(t.substring(1)),M=oe(y,E);return`${l}?${(0,G.stringify)(M,{encode:!1})}`},le=s=>{const[{rawQuery:e}]=(0,A.Kx)(),t=(0,f.v9)(X);return ge(t,s,e)};var ce=n(16550);const Z=()=>{const{search:s}=(0,ce.TH)(),e=s?(0,G.parse)(s.substring(1)):{};return e.plugins?(0,G.stringify)({plugins:e.plugins},{encode:!1}):""};var ae=n(80015);const B=(s,e,t)=>({type:ae.m,permissions:s,__meta__:{plugins:e,containerName:t}}),h=()=>({type:ae.Q}),ee=s=>s["content-manager_rbacManager"].permissions,de=s=>s.rbacProvider.collectionTypesRelatedPermissions,me=(s,e,t="listView")=>{const a=(0,f.v9)(de),l=(0,f.v9)(ee),i=(0,f.I0)(),y=a[e];return(0,d.useEffect)(()=>y?(i(B(y,s?s.plugins:null,t)),()=>{i(h())}):()=>{},[y,i,s,t]),l};var Te=n(99781);const r=()=>useContext(WysiwygContext),c=null,u=s=>{const e=(0,d.useRef)();return(0,d.useEffect)(()=>{e.current=s},[s]),e.current};var o=n(15699),m=n(40703)},15699:(F,T,n)=>{n.d(T,{Y:()=>R});var d=n(67294),f=n(99168),D=n.n(f),k=n(40703);const R=(I,{type:A="STRAPI_DND",index:O,item:P={},onStart:g,onEnd:L,onGrabItem:b,onDropItem:S,onCancel:U,onMoveItem:C,dropSensitivity:w="regular"})=>{const K=(0,d.useRef)(null),[{handlerId:$},H]=(0,f.useDrop)({accept:A,collect(W){return{handlerId:W.getHandlerId()}},hover(W,se){if(!K.current)return;const _=W.index,j=O;if(_!==j){if(w==="regular"){const q=K.current.getBoundingClientRect(),z=(q.bottom-q.top)/2,X=se.getClientOffset().y-q.top;if(_<j&&X<z||_>j&&X>z)return}C(j,_),W.index=j}}}),[{isDragging:ne},J,Q]=(0,f.useDrag)({type:A,item(){g&&g();const{width:W}=K.current?.getBoundingClientRect()??{};return{index:O,width:W,...P}},end(){L&&L()},canDrag:I,isDragging:P.id?W=>P.id===W.getItem().id:void 0,collect:W=>({isDragging:W.isDragging()})}),V=(0,k.A)(I,O,{onGrabItem:b,onDropItem:S,onCancel:U,onMoveItem:C});return[{handlerId:$,isDragging:ne,handleKeyDown:V},K,H,J,Q]}},40703:(F,T,n)=>{n.d(T,{A:()=>f});var d=n(67294);const f=(D,k,{onCancel:R,onDropItem:I,onGrabItem:A,onMoveItem:O})=>{const[P,g]=(0,d.useState)(!1),L=C=>{P&&(C==="UP"?O(k-1,k):C==="DOWN"&&O(k+1,k))},b=()=>{P?(I&&I(k),g(!1)):(A&&A(k),g(!0))},S=()=>{P&&(g(!1),R&&R(k))};return C=>{if(D&&!(C.key==="Tab"&&!P))switch(C.preventDefault(),C.key){case" ":case"Enter":b();break;case"Escape":S();break;case"ArrowDown":case"ArrowRight":L("DOWN");break;case"ArrowUp":case"ArrowLeft":L("UP");break;default:}}}},84668:(F,T,n)=>{n.d(T,{Jg:()=>O,KQ:()=>I,Vo:()=>A,Yg:()=>D});var d=n(20573),f=n(14506);const D=()=>g=>g["content-manager_app"]||f.E,k=()=>createSelector(D(),g=>g),R=()=>createSelector(D(),g=>g.models),I=()=>(0,d.P1)(D(),g=>({collectionTypeLinks:g.collectionTypeLinks,singleTypeLinks:g.singleTypeLinks})),A=()=>(0,d.P1)(D(),({components:g,models:L})=>({schemas:[...g,...L]})),O=(0,d.P1)(D(),g=>g.fieldSizes);var P=null},21323:(F,T,n)=>{n.d(T,{Z:()=>f});const f=D=>D["content-manager_editViewLayoutManager"].currentLayout},56723:(F,T,n)=>{n.d(T,{Z:()=>d});const d={COMPONENT:"component",EDIT_FIELD:"editField",FIELD:"field",DYNAMIC_ZONE:"dynamicZone",RELATION:"relation"}},69881:(F,T,n)=>{n.d(T,{Z:()=>f});const f=D=>`content-manager.${D}`},13920:(F,T,n)=>{n.d(T,{_Q:()=>X.Z,W3:()=>k,ko:()=>O,FE:()=>g,Di:()=>U,Ex:()=>Te,du:()=>$,TA:()=>J,Ts:()=>se,Uo:()=>j,IF:()=>z,OB:()=>ue.Z,w8:()=>oe,kc:()=>pe});var d=n(50361),f=n.n(d);const k=(r,c,u)=>{if(Array.isArray(r)&&c>=0&&u>=0&&c<=r.length-1&&u<=r.length-1){const o=f()(r),m=o.splice(c,1);return o.splice(u,0,m[0]),o}return r};var R=n(7334),I=n.n(R);const O=r=>{const c=r.type;return c==="relation"?!I()(r.relationType).includes("morph"):!["json","dynamiczone","richtext","password"].includes(c)&&!!c},P=(r,c)=>{typeof r=="function"?r(c):r!=null&&(r.current=c)},g=(...r)=>c=>r.forEach(u=>P(u,c));var L=n(27361),b=n.n(L);const S=(r,c)=>Object.keys(r).reduce((u,o)=>{const m=b()(r,[o],{}),{default:s,component:e,type:t,required:a,min:l,repeatable:i}=m;if(s!==void 0&&(u[o]=s),t==="component"){const y=c?.[e]?.attributes??{},E=S(y,c);if(a===!0&&(u[o]=i===!0?[]:E),l&&i===!0&&a){u[o]=[];for(let M=0;M<l;M+=1)u[o].push(E)}}return t==="dynamiczone"&&a===!0&&(u[o]=[]),u},{}),U=S;var C=n(57557),w=n.n(C);const $=({layouts:r,metadatas:c,...u})=>{const o=r.list.map(e=>e.name?e.name:e),m=Object.keys(c).reduce((e,t)=>{const a=b()(c,[t],{});let l=a.edit;return l.mainField&&(l={...l,mainField:a.edit.mainField.name}),{...e,[t]:{edit:l,list:w()(a.list,["mainField"])}}},{}),s=r.edit.map(e=>e.map(({name:t,size:a})=>({name:t,size:a})));return{...u,layouts:{edit:s,list:o},metadatas:m}},H=(r,c)=>r.map(u=>({...u,subject:c})),J=r=>{const c={create:[{action:"plugin::content-manager.explorer.create",subject:null}],delete:[{action:"plugin::content-manager.explorer.delete",subject:null}],publish:[{action:"plugin::content-manager.explorer.publish",subject:null}],read:[{action:"plugin::content-manager.explorer.read",subject:null}],update:[{action:"plugin::content-manager.explorer.update",subject:null}]};return Object.keys(c).reduce((u,o)=>(u[o]=H(c[o],r),u),{})};var Q=n(7654),V=n.n(Q);const se=r=>r.split(".").filter(c=>V()(parseInt(c,10))),j=r=>{if(r.length===0)return-1;const c=Math.max.apply(Math,r.map(u=>u.__temp_key__??0));return Number.isNaN(c)?-1:c},z=r=>`/content-manager/${r}`;var ue=n(69881),X=n(56723),G=n(36968),re=n.n(G);const oe=(r,c,u)=>{const o=t=>c.find(a=>a.uid===t),m=Object.assign({},r),s=r[u].uid,e=o(s);return re()(m,[u],{...r[u],...e}),Object.keys(r.components).forEach(t=>{const a=o(t);re()(m,["components",t],{...r.components[t],...a})}),m};var p=n(87631);const pe=(r,c,u)=>{const o=(m,s)=>Object.keys(m).reduce((e,t)=>{const a=(0,p.UN)(s,t),l=b()(m,t),i=(0,p.k2)(s,[t,"component"]),y=(0,p.k2)(s,[t,"repeatable"]);return a==="dynamiczone"?(e[t]=l.map(E=>o(E,u[E.__component])),e):a==="component"?(y?e[t]=l&&l.map(E=>o(E,u[i])):e[t]=l&&o(l,u[i]),e):(a!=="password"&&(e[t]=l),e)},{});return o(r,c)};var le=n(51584),ce=n.n(le),Ee=n(41609),Z=n.n(Ee),ae=n(14841),B=n.n(ae),h=n(87561),ee=n(24056);h.kM(h.nK,"defined",function(){return this.test("defined",p.I0.required,r=>r!==void 0)}),h.kM(h.IX,"notEmptyMin",function(r){return this.test("notEmptyMin",p.I0.min,c=>Z()(c)?!0:c.length>=r)}),h.kM(h.Z_,"isInferior",function(r,c){return this.test("isInferior",r,function(u){return!u||Number.isNaN(B()(u))?!0:B()(c)>=B()(u)})}),h.kM(h.Z_,"isSuperior",function(r,c){return this.test("isSuperior",r,function(u){return!u||Number.isNaN(B()(u))?!0:B()(u)>=B()(c)})});const de=r=>b()(r,["attributes"],{}),ie=(r,{components:c},u={isCreatingEntry:!0,isDraft:!0,isFromComponent:!1})=>{const o=de(r);return h.Ry().shape(Object.keys(o).reduce((m,s)=>{const e=o[s];if(e.type!=="relation"&&e.type!=="component"&&e.type!=="dynamiczone"){const t=me(e.type,e,u);m[s]=t}if(e.type==="relation"&&(m[s]=["oneWay","oneToOne","manyToOne","oneToManyMorph","oneToOneMorph"].includes(e.relationType)?h.Ry().nullable():h.IX().nullable()),e.type==="component"){const t=ie(c[e.component],{components:c},{...u,isFromComponent:!0});if(e.repeatable===!0){const{min:l,max:i,required:y}=e;let E=h.Vo(M=>{let v=h.IX().of(t);return l?y?v=v.min(l,p.I0.min):y!==!0&&Z()(M)?v=v.nullable():v=v.min(l,p.I0.min):y&&!u.isDraft&&(v=v.min(1,p.I0.required)),i&&(v=v.max(i,p.I0.max)),v});return m[s]=E,m}const a=h.Vo(l=>l!==void 0?e.required===!0&&!u.isDraft?t.defined():t.nullable():e.required===!0?h.Ry().defined():h.Ry().nullable());return m[s]=a,m}if(e.type==="dynamiczone"){let t=h.IX().of(h.Vo(({__component:i})=>ie(c[i],{components:c},{...u,isFromComponent:!0})));const{max:a,min:l}=e;l?e.required?t=t.test("min",p.I0.min,i=>u.isCreatingEntry?i&&i.length>=l:i===void 0?!0:i!==null&&i.length>=l).test("required",p.I0.required,i=>u.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null):t=t.notEmptyMin(l):e.required&&!u.isDraft&&(t=t.test("required",p.I0.required,i=>u.isCreatingEntry?i!==null||i!==void 0:i===void 0?!0:i!==null)),a&&(t=t.max(a,p.I0.max)),m[s]=t}return m},{}))},me=(r,c,u)=>{let o=h.nK();return["string","uid","text","richtext","email","password","enumeration"].includes(r)&&(o=h.Z_()),r==="json"&&(o=h.nK(p.I0.json).test("isJSON",p.I0.json,m=>{if(!m||!m.length)return!0;try{return JSON.parse(m),!0}catch{return!1}}).nullable().test("required",p.I0.required,m=>!(c.required&&(!m||!m.length)))),r==="email"&&(o=o.email(p.I0.email)),["number","integer","float","decimal"].includes(r)&&(o=h.Rx().transform(m=>V()(m)?void 0:m).typeError()),r==="biginteger"&&(o=h.Z_().matches(/^-?\d*$/)),["date","datetime"].includes(r)&&(o=h.hT()),Object.keys(c).forEach(m=>{const s=c[m];if(s||!ce()(s)&&Number.isInteger(Math.floor(s))||s===0)switch(m){case"required":{u.isDraft||(r==="password"&&u.isCreatingEntry&&(o=o.required(p.I0.required)),r!=="password"&&(u.isCreatingEntry?o=o.required(p.I0.required):o=o.test("required",p.I0.required,e=>e===void 0&&!u.isFromComponent?!0:(0,ee.Z)(r)?e===0?!0:!!e:r==="boolean"?e!=null:r==="date"||r==="datetime"?typeof e=="string"?!Z()(e):!Z()(e?.toString()):!Z()(e))));break}case"max":{r==="biginteger"?o=o.isInferior(p.I0.max,s):o=o.max(s,p.I0.max);break}case"maxLength":o=o.max(s,p.I0.maxLength);break;case"min":{r==="biginteger"?o=o.isSuperior(p.I0.min,s):o=o.min(s,p.I0.min);break}case"minLength":{u.isDraft||(o=o.min(s,p.I0.minLength));break}case"regex":o=o.matches(new RegExp(s),{message:p.I0.regex,excludeEmptyString:!c.required});break;case"lowercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().lowercase());break;case"uppercase":["text","textarea","email","string"].includes(r)&&(o=o.strict().uppercase());break;case"positive":(0,ee.Z)(r)&&(o=o.positive());break;case"negative":(0,ee.Z)(r)&&(o=o.negative());break;default:o=o.nullable()}}),o},Te=ie},24056:(F,T,n)=>{n.d(T,{Z:()=>d});function d(f){return["integer","biginteger","decimal","float","number"].includes(f)}},53616:(F,T,n)=>{n.d(T,{$k:()=>A,FT:()=>P,Nj:()=>I,Ot:()=>R,QM:()=>D,lv:()=>O,sN:()=>f,uL:()=>g,x4:()=>k});var d=n(42675);const f="settings_review-workflows",D="Settings/Review_Workflows/SET_WORKFLOWS",k="Settings/Review_Workflows/WORKFLOW_DELETE_STAGE",R="Settings/Review_Workflows/WORKFLOW_ADD_STAGE",I="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE",A="Settings/Review_Workflows/WORKFLOW_UPDATE_STAGE_POSITION",O={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"},P=d.W.colors.primary600,g={STAGE:"stage"}},53752:(F,T,n)=>{n.d(T,{n:()=>R});var d=n(88767),f=n(87631),D=n(80129),k=n.n(D);function R(I={}){const{id:A="",...O}=I,P={populate:"stages"},{get:g}=(0,f.kY)(),L=(0,D.stringify)({...P,...O},{encode:!1}),{data:b,isLoading:S,status:U,refetch:C}=(0,d.useQuery)(["review-workflows","workflows",A],async()=>{try{const{data:{data:K}}=await g(`/admin/review-workflows/workflows/${A}${L?`?${L}`:""}`);return K}catch{return null}});let w=[];return A&&b?w=[b]:Array.isArray(b)&&(w=b),{workflows:w,isLoading:S,status:U,refetch:C}}},13037:(F,T,n)=>{n.d(T,{k:()=>D,s:()=>k});var d=n(42675),f=n(53616);function D(R){if(!R)return null;const A=Object.entries(d.W.colors).filter(([,O])=>O.toUpperCase()===R.toUpperCase()).reduce((O,[P])=>(f.lv?.[P]&&(O=P),O),null);return A?{themeColorName:A,name:f.lv[A]}:null}function k(){return Object.entries(f.lv).map(([R,I])=>({hex:d.W.colors[R].toUpperCase(),name:I}))}}}]);
