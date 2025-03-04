"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[4674],{2671:function(e,i,t){t.r(i),t.d(i,{default:function(){return $}});var s=t(641),l=t(33),a=t(3751);const d={class:"custom-tree-node"},c={class:"label"},o={class:"code"},n={class:"do"},r={class:"left-panel"};function h(e,i,t,h,u,p){const g=(0,s.g2)("el-input"),f=(0,s.g2)("el-header"),b=(0,s.g2)("el-button"),m=(0,s.g2)("el-button-group"),$=(0,s.g2)("el-tree"),k=(0,s.g2)("el-main"),y=(0,s.g2)("el-footer"),w=(0,s.g2)("el-container"),D=(0,s.g2)("el-aside"),v=(0,s.g2)("el-table-column"),F=(0,s.g2)("el-icon-d-caret"),_=(0,s.g2)("el-tag"),C=(0,s.g2)("el-switch"),x=(0,s.g2)("el-popconfirm"),L=(0,s.g2)("scTable"),A=(0,s.g2)("dic-dialog"),S=(0,s.g2)("list-dialog"),I=(0,s.gN)("loading");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(w,null,{default:(0,s.k6)((()=>[(0,s.bo)(((0,s.uX)(),(0,s.Wv)(D,{width:"300px"},{default:(0,s.k6)((()=>[(0,s.bF)(w,null,{default:(0,s.k6)((()=>[(0,s.bF)(f,null,{default:(0,s.k6)((()=>[(0,s.bF)(g,{placeholder:"输入关键字进行过滤",modelValue:u.dicFilterText,"onUpdate:modelValue":i[0]||(i[0]=e=>u.dicFilterText=e),clearable:""},null,8,["modelValue"])])),_:1}),(0,s.bF)(k,{class:"nopadding"},{default:(0,s.k6)((()=>[(0,s.bF)($,{ref:"dic",class:"menu","node-key":"id",data:u.dicList,props:u.dicProps,"highlight-current":!0,"expand-on-click-node":!1,"filter-node-method":p.dicFilterNode,onNodeClick:p.dicClick},{default:(0,s.k6)((({node:e,data:i})=>[(0,s.Lk)("span",d,[(0,s.Lk)("span",c,(0,l.v_)(e.label),1),(0,s.Lk)("span",o,(0,l.v_)(i.code),1),(0,s.Lk)("span",n,[(0,s.bF)(m,null,{default:(0,s.k6)((()=>[(0,s.bF)(b,{icon:"el-icon-edit",size:"small",onClick:(0,a.D$)((e=>p.dicEdit(i)),["stop"])},null,8,["onClick"]),(0,s.bF)(b,{icon:"el-icon-delete",size:"small",onClick:(0,a.D$)((t=>p.dicDel(e,i)),["stop"])},null,8,["onClick"])])),_:2},1024)])])])),_:1},8,["data","props","filter-node-method","onNodeClick"])])),_:1}),(0,s.bF)(y,{style:{height:"51px"}},{default:(0,s.k6)((()=>[(0,s.bF)(b,{type:"primary",size:"small",icon:"el-icon-plus",style:{width:"100%"},onClick:p.addDic},{default:(0,s.k6)((()=>i[3]||(i[3]=[(0,s.eW)("字典分类")]))),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})),[[I,u.showDicloading]]),(0,s.bF)(w,{class:"is-vertical"},{default:(0,s.k6)((()=>[(0,s.bF)(f,null,{default:(0,s.k6)((()=>[(0,s.Lk)("div",r,[(0,s.bF)(b,{type:"primary",icon:"el-icon-plus",onClick:p.addInfo},null,8,["onClick"]),(0,s.bF)(b,{type:"danger",plain:"",icon:"el-icon-delete",disabled:0==u.selection.length,onClick:p.batch_del},null,8,["disabled","onClick"])])])),_:1}),(0,s.bF)(k,{class:"nopadding"},{default:(0,s.k6)((()=>[(0,s.bF)(L,{ref:"table",apiObj:u.listApi,"row-key":"id",params:u.listApiParams,onSelectionChange:p.selectionChange,stripe:"",paginationLayout:"prev, pager, next"},{default:(0,s.k6)((()=>[(0,s.bF)(v,{type:"selection",width:"50"}),(0,s.bF)(v,{label:"",width:"60"},{default:(0,s.k6)((()=>[(0,s.bF)(_,{class:"move",style:{cursor:"move"}},{default:(0,s.k6)((()=>[(0,s.bF)(F,{style:{width:"1em",height:"1em"}})])),_:1})])),_:1}),(0,s.bF)(v,{label:"名称",prop:"name",width:"150"}),(0,s.bF)(v,{label:"键值",prop:"key",width:"150"}),(0,s.bF)(v,{label:"是否有效",prop:"yx",width:"100"},{default:(0,s.k6)((e=>[(0,s.bF)(C,{modelValue:e.row.yx,"onUpdate:modelValue":i=>e.row.yx=i,onChange:i=>p.changeSwitch(i,e.row),loading:e.row.$switch_yx,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue","onChange","loading"])])),_:1}),(0,s.bF)(v,{label:"操作",fixed:"right",align:"right",width:"120"},{default:(0,s.k6)((e=>[(0,s.bF)(m,null,{default:(0,s.k6)((()=>[(0,s.bF)(b,{text:"",type:"primary",size:"small",onClick:i=>p.table_edit(e.row,e.$index)},{default:(0,s.k6)((()=>i[4]||(i[4]=[(0,s.eW)("编辑")]))),_:2},1032,["onClick"]),(0,s.bF)(x,{title:"确定删除吗？",onConfirm:i=>p.table_del(e.row,e.$index)},{reference:(0,s.k6)((()=>[(0,s.bF)(b,{text:"",type:"primary",size:"small"},{default:(0,s.k6)((()=>i[5]||(i[5]=[(0,s.eW)("删除")]))),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","params","onSelectionChange"])])),_:1})])),_:1})])),_:1}),u.dialog.dic?((0,s.uX)(),(0,s.Wv)(A,{key:0,ref:"dicDialog",onSuccess:p.handleDicSuccess,onClosed:i[1]||(i[1]=e=>u.dialog.dic=!1)},null,8,["onSuccess"])):(0,s.Q3)("",!0),u.dialog.list?((0,s.uX)(),(0,s.Wv)(S,{key:1,ref:"listDialog",onSuccess:p.handleListSuccess,onClosed:i[2]||(i[2]=e=>u.dialog.list=!1)},null,8,["onSuccess"])):(0,s.Q3)("",!0)],64)}t(8743);var u=t(2145),p=t(7613),g=t(246),f={name:"dic",components:{dicDialog:u["default"],listDialog:p["default"]},data(){return{dialog:{dic:!1,info:!1},showDicloading:!0,dicList:[],dicFilterText:"",dicProps:{label:"name"},listApi:null,listApiParams:{},selection:[]}},watch:{dicFilterText(e){this.$refs.dic.filter(e)}},mounted(){this.getDic(),this.rowDrop()},methods:{async getDic(){var e=await this.$API.system.dic.tree.get();this.showDicloading=!1,this.dicList=e.data;var i=this.dicList[0];i&&(this.$nextTick((()=>{this.$refs.dic.setCurrentKey(i.id)})),this.listApiParams={code:i.code},this.listApi=this.$API.system.dic.list)},dicFilterNode(e,i){if(!e)return!0;var t=i.name+i.code;return-1!==t.indexOf(e)},addDic(){this.dialog.dic=!0,this.$nextTick((()=>{this.$refs.dicDialog.open()}))},dicEdit(e){this.dialog.dic=!0,this.$nextTick((()=>{var i=this.$refs.dic.getNode(e.id),t=1==i.level?void 0:i.parent.data.id;e.parentId=t,this.$refs.dicDialog.open("edit").setData(e)}))},dicClick(e){this.$refs.table.reload({code:e.code})},dicDel(e,i){this.$confirm(`确定删除 ${i.name} 项吗？`,"提示",{type:"warning"}).then((()=>{this.showDicloading=!0;var e=this.$refs.dic.getCurrentKey();if(this.$refs.dic.remove(i.id),e==i.id){var t=this.dicList[0];t?(this.$refs.dic.setCurrentKey(t.id),this.$refs.table.upData({code:t.code})):(this.listApi=null,this.$refs.table.tableData=[])}this.showDicloading=!1,this.$message.success("操作成功")})).catch((()=>{}))},rowDrop(){const e=this,i=this.$refs.table.$el.querySelector(".el-table__body-wrapper tbody");g.Ay.create(i,{handle:".move",animation:300,ghostClass:"ghost",onEnd({newIndex:i,oldIndex:t}){const s=e.$refs.table.tableData,l=s.splice(t,1)[0];s.splice(i,0,l),e.$message.success("排序成功")}})},addInfo(){this.dialog.list=!0,this.$nextTick((()=>{var e=this.$refs.dic.getCurrentKey();const i={dic:e};this.$refs.listDialog.open().setData(i)}))},table_edit(e){this.dialog.list=!0,this.$nextTick((()=>{this.$refs.listDialog.open("edit").setData(e)}))},async table_del(e,i){var t={id:e.id},s=await this.$API.demo.post.post(t);200==s.code?(this.$refs.table.tableData.splice(i,1),this.$message.success("删除成功")):this.$alert(s.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((i,t)=>{e.id===i.id&&this.$refs.table.tableData.splice(t,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},saveList(){this.$refs.listDialog.submit((async e=>{this.isListSaveing=!0;var i=await this.$API.demo.post.post(e);this.isListSaveing=!1,200==i.code?(this.listDialogVisible=!1,this.$message.success("操作成功")):this.$alert(i.message,"提示",{type:"error"})}))},selectionChange(e){this.selection=e},changeSwitch(e,i){i.yx="1"==i.yx?"0":"1",i.$switch_yx=!0,setTimeout((()=>{delete i.$switch_yx,i.yx=e,this.$message.success(`操作成功id:${i.id} val:${e}`)}),500)},handleDicSuccess(e,i){if("add"==i)e.id=(new Date).getTime(),this.dicList.length>0?this.$refs.table.upData({code:e.code}):(this.listApiParams={code:e.code},this.listApi=this.$API.dic.info),this.$refs.dic.append(e,e.parentId[0]),this.$refs.dic.setCurrentKey(e.id);else if("edit"==i){var t=this.$refs.dic.getNode(e.id),s=1==t.level?void 0:t.parent.data.id;if(s!=e.parentId){var l=t.data;this.$refs.dic.remove(e.id),this.$refs.dic.append(l,e.parentId[0])}Object.assign(t.data,e)}},handleListSuccess(e,i){"add"==i?(e.id=(new Date).getTime(),this.$refs.table.tableData.push(e)):"edit"==i&&this.$refs.table.tableData.filter((i=>i.id===e.id)).forEach((i=>{Object.assign(i,e)}))}}},b=t(6262);const m=(0,b.A)(f,[["render",h],["__scopeId","data-v-0b8c14e4"]]);var $=m}}]);