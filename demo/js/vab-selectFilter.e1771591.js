"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[6345],{4522:function(e,l,a){a.r(l),a.d(l,{default:function(){return r}});var t=a(641),n=a(33);function c(e,l,a,c,u,s){const i=(0,t.g2)("sc-select-filter"),o=(0,t.g2)("el-card"),r=(0,t.g2)("el-main");return(0,t.uX)(),(0,t.Wv)(r,null,{default:(0,t.k6)((()=>[(0,t.bF)(o,{shadow:"never",header:"分类筛选器"},{default:(0,t.k6)((()=>[(0,t.bF)(i,{data:u.data,"selected-values":u.selectedValues,"label-width":80,onOnChange:s.change},null,8,["data","selected-values","onOnChange"])])),_:1}),(0,t.bF)(o,{shadow:"never",header:"返回值",style:{"margin-top":"15px"}},{default:(0,t.k6)((()=>[(0,t.Lk)("pre",null,(0,n.v_)(u.filterData),1)])),_:1})])),_:1})}var u=a(1561),s={name:"selectFilter",components:{scSelectFilter:u.A},data(){return{data:[{title:"状态(单)",key:"state",options:[{label:"全部",value:""},{label:"待审核",value:"1",icon:"el-icon-flag"},{label:"已退回",value:"2",icon:"el-icon-bottom-left"},{label:"已关闭",value:"3",icon:"el-icon-circle-close"},{label:"已完成",value:"4",icon:"el-icon-checked"}]},{title:"类型(多)",key:"type",multiple:!0,options:[{label:"全部",value:""},{label:"请假申请",value:"1"},{label:"加班申请",value:"2"}]}],selectedValues:{state:[""],type:[""]},filterData:{}}},mounted(){},methods:{change(e){this.filterData=e}}},i=a(6262);const o=(0,i.A)(s,[["render",c]]);var r=o}}]);