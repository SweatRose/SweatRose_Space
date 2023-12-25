"use strict";(self["webpackChunkyy2"]=self["webpackChunkyy2"]||[]).push([[398],{6245:function(e,a,l){function t(e){this.message=e}t.prototype=new Error,t.prototype.name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(e){var a=String(e).replace(/=+$/,"");if(a.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var l,o,n=0,r=0,s="";o=a.charAt(r++);~o&&(l=n%4?64*l+o:o,n++%4)?s+=String.fromCharCode(255&l>>(-2*n&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return s};function n(e){var a=e.replace(/-/g,"+").replace(/_/g,"/");switch(a.length%4){case 0:break;case 2:a+="==";break;case 3:a+="=";break;default:throw"Illegal base64url string!"}try{return function(e){return decodeURIComponent(o(e).replace(/(.)/g,(function(e,a){var l=a.charCodeAt(0).toString(16).toUpperCase();return l.length<2&&(l="0"+l),"%"+l})))}(a)}catch(e){return o(a)}}function r(e){this.message=e}function s(e,a){if("string"!=typeof e)throw new r("Invalid token specified");var l=!0===(a=a||{}).header?0:1;try{return JSON.parse(n(e.split(".")[l]))}catch(e){throw new r("Invalid token specified: "+e.message)}}r.prototype=new Error,r.prototype.name="InvalidTokenError",a.Z=s},5178:function(e,a,l){l.r(a),l.d(a,{default:function(){return U}});var t=l(2876),o=(l(2278),l(6907)),n=(l(4746),l(5185)),r=(l(3349),l(8136)),s=(l(2219),l(4385)),u=(l(5077),l(3164)),i=(l(6335),l(1116)),c=(l(8825),l(294)),d=(l(6870),l(1206)),v=(l(103),l(6233)),m=(l(9840),l(2406)),w=(l(6615),l(6252));const h={style:{"--van-nav-bar-icon-color":"#F19290"}},p={class:"page-contain"},f={class:"content_addIndex"},k=["src"],g=(0,w._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"},null,-1),b={class:"footer_task"};function C(e,a,l,C,y,_){const x=m.l2,I=v.j,V=d.oF,W=c.JO,P=i.gb,H=u.gN,U=s.cW,T=r.GI,Z=n.l0,N=o.zx,S=t.Vq;return(0,w.wg)(),(0,w.iD)(w.HY,null,[(0,w._)("div",h,[(0,w.Wm)(x,{title:"添加任务","left-text":"","left-arrow":"",onClickLeft:C.onClickLeft},null,8,["onClickLeft"])]),(0,w._)("div",p,[(0,w._)("div",f,[(0,w.Wm)(V,{autoplay:3e3},{default:(0,w.w5)((()=>[((0,w.wg)(!0),(0,w.iD)(w.HY,null,(0,w.Ko)(C.images,(e=>((0,w.wg)(),(0,w.j4)(I,{key:e},{default:(0,w.w5)((()=>[(0,w._)("img",{src:e,class:"image-slider_task",alt:"商品图片"},null,8,k)])),_:2},1024)))),128))])),_:1}),C.isLoading?((0,w.wg)(),(0,w.j4)(P,{key:0,vertical:"",class:"loading-overlay"},{icon:(0,w.w5)((()=>[(0,w.Wm)(W,{name:"star-o",size:"30"})])),default:(0,w.w5)((()=>[(0,w.Uk)(" 加载中... ")])),_:1})):(0,w.kq)("",!0),(0,w.Wm)(Z,{class:"form-container_task"},{default:(0,w.w5)((()=>[(0,w._)("div",null,[g,(0,w.Wm)(H,{modelValue:C.presetIndex,"onUpdate:modelValue":a[0]||(a[0]=e=>C.presetIndex=e),"is-link":"",readonly:"",label:"🔖选择预设",placeholder:"选择预设",onClick:a[1]||(a[1]=e=>C.showPicker=!0)},null,8,["modelValue"]),(0,w.Wm)(T,{show:C.showPicker,"onUpdate:show":a[3]||(a[3]=e=>C.showPicker=e),round:"",position:"bottom "},{default:(0,w.w5)((()=>[(0,w.Wm)(U,{columns:C.columns,onCancel:a[2]||(a[2]=e=>C.showPicker=!1),onConfirm:C.onConfirm,clearable:""},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,w.Wm)(H,{label:"📌任务名称",modelValue:C.title,"onUpdate:modelValue":a[4]||(a[4]=e=>C.title=e),placeholder:"请输入任务名称",autofocus:!1,clearable:""},null,8,["modelValue"]),(0,w.Wm)(H,{label:"📝任务详情",modelValue:C.desc,"onUpdate:modelValue":a[5]||(a[5]=e=>C.desc=e),placeholder:"请输入任务详情",type:"textarea",rows:"3",autofocus:!1,clearable:""},null,8,["modelValue"]),(0,w.Wm)(H,{modelValue:C.useName,"onUpdate:modelValue":a[6]||(a[6]=e=>C.useName=e),"is-link":"",readonly:"",name:"picker",label:"🤖商品对象",placeholder:"点击选择商品对象",onClick:a[7]||(a[7]=e=>C.showPicker_1=!0),rules:[{required:!0,message:"请选择商品对象"}]},null,8,["modelValue"]),(0,w.Wm)(T,{show:C.showPicker_1,"onUpdate:show":a[9]||(a[9]=e=>C.showPicker_1=e),position:"bottom"},{default:(0,w.w5)((()=>[(0,w.Wm)(U,{columns:C.userColumns,onConfirm:C.onConfirm_1,onCancel:a[8]||(a[8]=e=>C.showPicker_1=!1)},null,8,["columns","onConfirm"])])),_:1},8,["show"]),(0,w.Wm)(H,{label:"💰积分价格",modelValue:C.credit,"onUpdate:modelValue":a[10]||(a[10]=e=>C.credit=e),placeholder:"请输入任务积分(整数)",autofocus:!1,clearable:""},null,8,["modelValue"])])])),_:1}),(0,w._)("div",b,[(0,w.Wm)(N,{class:"btn-reset",type:"default",onClick:C.resetItem},{default:(0,w.w5)((()=>[(0,w.Uk)("重置")])),_:1},8,["onClick"]),(0,w.Wm)(N,{class:"btn-save",color:"#F19290",type:"primary",onClick:C.saveItem},{default:(0,w.w5)((()=>[(0,w.Uk)("保存")])),_:1},8,["onClick"])])]),(0,w.Wm)(S,{show:C.show,"onUpdate:show":a[11]||(a[11]=e=>C.show=e),title:"🥰 温馨提示",message:C.message,"show-cancel-button":!1},null,8,["show","message"]),(0,w.Wm)(S,{show:C.show_1,"onUpdate:show":a[12]||(a[12]=e=>C.show_1=e),title:"🥰恭喜",message:C.message,width:"70vw",height:"30vw","show-cancel-button":!1,"show-confirm-button":!1},null,8,["show","message"])])],64)}var y=l(2262),_=l(6154),x=l.p+"img/Mission.9b5a7f2c.gif",I=l(2119),V=l(6245),W={components:{VanField:u.ZP,VanForm:n.ZP,VanButton:o.ZP,VanSwipe:d.ZP,VanSwipeItem:v.Z},setup(){const e=(0,y.iH)(!1),a=(0,y.iH)(!1),l=(0,y.iH)(""),t=(0,y.iH)(!1),o=()=>m.replace("/Task"),n=(0,y.iH)("无预设"),r=(0,y.iH)(!1),s=(0,y.iH)(""),u=(0,y.iH)(""),i=(0,y.iH)(""),c=(0,y.iH)([]),d=(0,y.iH)(!1),v=(0,y.iH)(0),m=(0,I.tv)(),h=[x];(0,w.bv)((()=>{g(),b()}));const p=localStorage.getItem("jwtToken");p||m.replace("/login");const f={Authorization:`Bearer ${p}`};let k="";const g=()=>{_.Z.post("/api/loginToken?token="+p).then((e=>{if(0==e.data.code)return console.error(e.data.data),void m.replace("/login");const a=(0,V.Z)(p);k=a.id})).catch((e=>{console.error("请求loginToken接口失败",e),m.replace("/login")}))},b=async()=>{try{const e=await _.Z.get("/api/user",{headers:f}),a=e.data.data;c.value=a.filter((e=>e.nameId!==k)).map((e=>({text:e.name,value:e.nameId})))}catch(e){console.error("获取用户数据时出错",e)}},C=({selectedOptions:e})=>{i.value=e[0]?.text,d.value=!1},W=[{text:"无预设",value:"0"},{text:"早睡早起",value:"1"},{text:"打扫房间",value:"2"},{text:"健康运动",value:"3"},{text:"上课不迟到",value:"4"},{text:"做乖宝宝",value:"5"},{text:"买小礼物",value:"6"},{text:"好感分",value:"7"},{text:"帮拿东西",value:"8"},{text:"不喝饮料",value:"9"},{text:"认真看课",value:"10"},{text:"背单词",value:"11"},{text:"吃蔬菜",value:"12"},{text:"白天不睡觉",value:"13"}],P=({selectedOptions:e})=>{r.value=!1,n.value=e[0].text,H(e[0].text)},H=e=>{"早睡早起"===e?(s.value=e,u.value="熬夜对身体很不好，还是要早点睡觉第二天才能有精神！"):"打扫房间"===e?(s.value=e,u.value="有一段时间没有打扫房间了，一屋不扫，何以扫天下？"):"健康运动"===e?(s.value=e,u.value="做一些健身运动吧，跳绳，跑步，训练动作什么的。"):"上课不迟到"===e?(s.value=e,u.value="上课不迟到，才能更好的学习，加油！"):"做乖宝宝"===e?(s.value=e,u.value="乖乖才能更好的维持双方感情，最喜欢乖乖的捏捏了！"):"买小礼物"===e?(s.value=e,u.value="买点小礼物，像泡泡马特什么的。"):"好感分"===e?(s.value=e,u.value="今天表现很棒，好感加分！"):"帮拿东西"===e?(s.value=e,u.value="有了我，你再也不需要移动了。拿外卖，拿零食，开空调，开电视，在所不辞。"):"不喝饮料"===e?(s.value=e,u.value="不喝饮料，减肥，拒绝糖分，喝多饮料对身体不好的！"):"认真看课"===e?(s.value=e,u.value="认真看课，为未来的美好加油，奋斗，奥利给！"):"背单词"===e?(s.value=e,u.value="背四六级考研单词，为了梦想，为了理想，为了生活，加油背！"):"吃蔬菜"===e?(s.value=e,u.value="吃蔬菜有利于身体健康，为身体补充维生素，这样身体才能更棒，身材才能更好！"):"白天不睡觉"===e&&(s.value=e,u.value="白天不睡觉，晚上早睡，早上早起，养成良好生活作息从我做起！")},U=()=>{n.value="无预设",s.value="",u.value="",v.value=0,i.value=""},T=()=>{if(t.value=!0,""==u.value&&(u.value="😂这个人很懒，没有填写相关的任务详情！"),""==i.value||""==s.value)return l.value="请完整填好上述信息！",e.value=!0,void(t.value=!1);const o=parseFloat(v.value);if(!Number.isInteger(o))return l.value="积分只能是整数哦，请重新输入！",e.value=!0,void(t.value=!1);const n={taskName:s.value,founderId:k,taskText:u.value,taskCredit:v.value,useName:i.value};fetch("/api/tasks",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${p}`},body:JSON.stringify(n)}).then((e=>{e.ok?l.value="添加成功！":l.value="保存任务失败"})).catch((e=>{console.error("保存任务时出现错误:",e)})),a.value=!0,setTimeout((()=>{m.replace("/Task")}),1e3),t.value=!1};return{message:l,show:e,show_1:a,isLoading:t,columns:W,onConfirm:P,showPicker:r,presetIndex:n,title:s,desc:u,useName:i,credit:v,resetItem:U,saveItem:T,onClickLeft:o,images:h,userColumns:c,onConfirm_1:C,showPicker_1:d}}},P=l(3744);const H=(0,P.Z)(W,[["render",C]]);var U=H},6870:function(e,a,l){l(1958),l(368),l(6742)},5077:function(e,a,l){l(1958),l(368),l(2939),l(1771),l(9137),l(1088),l(5338),l(1564),l(6565),l(1744)},2219:function(e,a,l){l(1958),l(368),l(6742),l(6196),l(2666)}}]);
//# sourceMappingURL=398.4b1d2cce.js.map