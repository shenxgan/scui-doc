"use strict";(self["webpackChunkscui"]=self["webpackChunkscui"]||[]).push([[8802],{6503:function(e,t,a){a.r(t),a.d(t,{default:function(){return r}});var i=a(641);const l={class:"left-panel"};function s(e,t,a,s,n,o){const c=(0,i.g2)("el-button"),d=(0,i.g2)("el-header"),r=(0,i.g2)("el-table-column"),h=(0,i.g2)("el-popconfirm"),b=(0,i.g2)("el-button-group"),u=(0,i.g2)("scTable"),g=(0,i.g2)("el-main"),f=(0,i.g2)("el-container"),p=(0,i.g2)("save-dialog");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(f,null,{default:(0,i.k6)((()=>[(0,i.bF)(d,null,{default:(0,i.k6)((()=>[(0,i.Lk)("div",l,[(0,i.bF)(c,{type:"primary",icon:"el-icon-plus",onClick:o.add},null,8,["onClick"])])])),_:1}),(0,i.bF)(g,{class:"nopadding"},{default:(0,i.k6)((()=>[(0,i.bF)(u,{ref:"table",apiObj:n.apiObj,"row-key":"id",onSelectionChange:o.selectionChange,stripe:""},{default:(0,i.k6)((()=>[(0,i.bF)(r,{type:"selection",width:"50"}),(0,i.bF)(r,{label:"标识",prop:"code",width:"150"}),(0,i.bF)(r,{label:"表格名称",prop:"name",width:"250"}),(0,i.bF)(r,{label:"操作",fixed:"right",align:"right",width:"120"},{default:(0,i.k6)((e=>[(0,i.bF)(b,null,{default:(0,i.k6)((()=>[(0,i.bF)(c,{text:"",type:"primary",size:"small",onClick:t=>o.table_edit(e.row,e.$index)},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.eW)("编辑")]))),_:2},1032,["onClick"]),(0,i.bF)(h,{title:"确定删除吗？",onConfirm:t=>o.table_del(e.row,e.$index)},{reference:(0,i.k6)((()=>[(0,i.bF)(c,{text:"",type:"primary",size:"small"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)("删除")]))),_:1})])),_:2},1032,["onConfirm"])])),_:2},1024)])),_:1})])),_:1},8,["apiObj","onSelectionChange"])])),_:1})])),_:1}),n.dialog.save?((0,i.uX)(),(0,i.Wv)(p,{key:0,ref:"saveDialog",onSuccess:o.handleSuccess,onClosed:t[0]||(t[0]=e=>n.dialog.save=!1)},null,8,["onSuccess"])):(0,i.Q3)("",!0)],64)}var n=a(2593),o={name:"tableSetting",components:{saveDialog:n["default"]},data(){return{dialog:{save:!1},apiObj:this.$API.system.table.list,selection:[]}},mounted(){},methods:{add(){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open()}))},table_edit(e){this.dialog.save=!0,this.$nextTick((()=>{this.$refs.saveDialog.open("edit").setData(e)}))},async table_del(e,t){var a={id:e.id},i=await this.$API.demo.post.post(a);200==i.code?(this.$refs.table.tableData.splice(t,1),this.$message.success("删除成功")):this.$alert(i.message,"提示",{type:"error"})},async batch_del(){this.$confirm(`确定删除选中的 ${this.selection.length} 项吗？`,"提示",{type:"warning"}).then((()=>{const e=this.$loading();this.selection.forEach((e=>{this.$refs.table.tableData.forEach(((t,a)=>{e.id===t.id&&this.$refs.table.tableData.splice(a,1)}))})),e.close(),this.$message.success("操作成功")})).catch((()=>{}))},selectionChange(e){this.selection=e},handleSuccess(e,t){"add"==t?(e.id=(new Date).getTime(),this.$refs.table.tableData.unshift(e)):"edit"==t&&this.$refs.table.tableData.filter((t=>t.id===e.id)).forEach((t=>{Object.assign(t,e)}))}}},c=a(6262);const d=(0,c.A)(o,[["render",s]]);var r=d}}]);