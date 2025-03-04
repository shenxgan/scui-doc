import{_ as t,c as e,o as d,a3 as r}from"./chunks/framework.CjiOseYb.js";const m=JSON.parse('{"title":"scCropper 图像剪裁","description":"","frontmatter":{},"headers":[],"relativePath":"vab/cropper.md","filePath":"vab/cropper.md","lastUpdated":1718880150000}'),a={name:"vab/cropper.md"},o=r('<h1 id="sccropper-图像剪裁" tabindex="-1">scCropper 图像剪裁 <a class="header-anchor" href="#sccropper-图像剪裁" aria-label="Permalink to &quot;scCropper 图像剪裁&quot;">​</a></h1><p>重新封装了cropperjs，使得使用更加方便，并且加入图像压缩功能。大部分使用方式是在上传文件前打开裁剪弹窗，处理完毕后再上传文件。</p><p>scUpload组件已经内置了裁剪功能</p><ul><li>固定剪裁比例</li><li>实时预览</li><li>支持设置图像压缩率</li><li>支持导出Blob，File对象</li></ul><p><a href="https://python-abc.xyz/scui-doc/demo/#/vab/cropper" target="_blank" rel="noreferrer">演示地址</a></p><blockquote><p>演示地址需模拟登录高权限角色后查看</p></blockquote><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h2><table tabindex="0"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>src</td><td>图像地址</td><td>String</td><td>-</td><td>-</td></tr><tr><td>aspectRatio</td><td>固定剪裁比例 比如1/1, 4/3, 16/9</td><td>Number</td><td>-</td><td>NaN</td></tr><tr><td>compress</td><td>压缩率 范围0.1-1</td><td>Number</td><td>-</td><td>1</td></tr></tbody></table><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><table tabindex="0"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>setAspectRatio</td><td>重新设定剪裁比例</td><td>aspectRatio</td></tr><tr><td>getCropData</td><td>获取裁剪后的数据</td><td>cb,type (文件类型，默认image/jpeg)</td></tr><tr><td>getCropBlob</td><td>获取裁剪后的 Blob</td><td>cb,type</td></tr><tr><td>getCropFile</td><td>获取裁剪后的 File</td><td>cb,fileName,type</td></tr></tbody></table>',10),p=[o];function c(s,h,l,i,n,b){return d(),e("div",null,p)}const u=t(a,[["render",c]]);export{m as __pageData,u as default};
