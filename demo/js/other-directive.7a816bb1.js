"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[4671],{9520:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(641);const u={style:{"margin-top":"15px"}},r={style:{"margin-top":"15px"}},n={style:{"margin-top":"15px"}};function i(e,t,a,i,p,o){const d=(0,l.g2)("el-button"),s=(0,l.g2)("el-alert"),m=(0,l.g2)("el-card"),y=(0,l.g2)("el-tag"),v=(0,l.g2)("el-input"),b=(0,l.g2)("el-main"),g=(0,l.gN)("auth"),h=(0,l.gN)("auths"),c=(0,l.gN)("auths-all"),f=(0,l.gN)("role"),k=(0,l.gN)("time"),x=(0,l.gN)("copy");return(0,l.uX)(),(0,l.Wv)(b,null,{default:(0,l.k6)((()=>[(0,l.bF)(m,{shadow:"never",header:"v-auth 高精度权限控制"},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(d,{type:"primary"},{default:(0,l.k6)((()=>t[1]||(t[1]=[(0,l.eW)("v-auth=\"'user.add'\"")]))),_:1})),[[g,"user.add"]]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(d,{type:"primary"},{default:(0,l.k6)((()=>t[2]||(t[2]=[(0,l.eW)("v-auths=\"['user.no','user.add']\"")]))),_:1})),[[h,["user.no","user.add"]]]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(d,{type:"primary"},{default:(0,l.k6)((()=>t[3]||(t[3]=[(0,l.eW)("v-auths-all=\"['list.add','user.add']\"")]))),_:1})),[[c,["list.add","user.add"]]]),(0,l.bF)(s,{title:"v-auth指令 是$AUTH的语法糖, 原先需要使用v-if来判断是否有权限, 判断单项权限，如果满足就判断有权限",style:{"margin-top":"20px"}}),(0,l.bF)(s,{title:"v-auths指令 传入数组,有一项满足就判断有权限",style:{"margin-top":"20px"}}),(0,l.bF)(s,{title:"v-auths-all指令 传入数组,必须全满足才有权限，比如user.no没有这个权限，加到这里的话就表示不全部满足",style:{"margin-top":"20px"}})])),_:1}),(0,l.bF)(m,{shadow:"never",header:"v-role 角色权限控制",style:{"margin-top":"15px"}},{default:(0,l.k6)((()=>[(0,l.bo)(((0,l.uX)(),(0,l.Wv)(d,{type:"primary"},{default:(0,l.k6)((()=>t[4]||(t[4]=[(0,l.eW)("v-role=\"'admin'\"")]))),_:1})),[[f,"admin"]]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(d,{type:"primary"},{default:(0,l.k6)((()=>t[5]||(t[5]=[(0,l.eW)("v-role=\"['SA','admin']\"")]))),_:1})),[[f,["SA","admin"]]]),(0,l.bF)(s,{title:"v-role指令 是$ROLE的语法糖, 原理是判断是否含有用户所在的角色别名",style:{"margin-top":"20px"}})])),_:1}),(0,l.bF)(m,{shadow:"never",header:"v-time 时间转换",style:{"margin-top":"15px"}},{default:(0,l.k6)((()=>[(0,l.Lk)("p",null,[(0,l.bo)((0,l.bF)(y,{format:"yyyy-MM-dd hh:mm:ss"},null,512),[[k,1630117968295]])]),(0,l.Lk)("p",u,[(0,l.bo)((0,l.bF)(y,null,null,512),[[k,p.time1,void 0,{tip:!0}]])]),(0,l.Lk)("p",r,[(0,l.bo)((0,l.bF)(y,null,null,512),[[k,p.time2,void 0,{tip:!0}]])]),(0,l.Lk)("p",n,[(0,l.bo)((0,l.bF)(y,null,null,512),[[k,p.time3,void 0,{tip:!0}]])]),(0,l.bF)(s,{title:"指令方式日期时间转换,如设置'tip'修饰符将会转换成相对时间,并且每60秒自动更新",style:{"margin-top":"20px"}})])),_:1}),(0,l.bF)(m,{shadow:"never",header:"v-copy 一键复制",style:{"margin-top":"15px"}},{default:(0,l.k6)((()=>[(0,l.bF)(v,{type:"textarea",rows:2,placeholder:"请输入内容",modelValue:p.copyText,"onUpdate:modelValue":t[0]||(t[0]=e=>p.copyText=e)},null,8,["modelValue"]),(0,l.bo)(((0,l.uX)(),(0,l.Wv)(d,{type:"primary",style:{"margin-top":"15px"}},{default:(0,l.k6)((()=>t[6]||(t[6]=[(0,l.eW)("复制")]))),_:1})),[[x,p.copyText]]),(0,l.bF)(s,{title:"点击复制按钮会将文本框绑定的值复制到剪切板, 试着粘贴到其他地方看看效果",style:{"margin-top":"20px"}})])),_:1})])),_:1})}var p={name:"directive",data(){return{time1:new Date,time2:(new Date).setMinutes((new Date).getMinutes()-1),time3:(new Date).setMinutes((new Date).getMinutes()-120),copyText:"测试复制内容"}},created(){}},o=a(6262);const d=(0,o.A)(p,[["render",i]]);var s=d}}]);