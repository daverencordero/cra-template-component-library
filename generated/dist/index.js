"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=n(e),l=n(t);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c={Checklist:"Checklist-module_Checklist___qj85",Header:"Checklist-module_Header__3AGmD",AddButton:"Checklist-module_AddButton__6_Pmr",List:"Checklist-module_List__3Vd3r",List_Item:"Checklist-module_List_Item__1pzct",Checkbox:"Checklist-module_Checkbox__2m4Xm",Checked:"Checklist-module_Checked__2MAtL",Label:"Checklist-module_Label__2mO3-",EditInput:"Checklist-module_EditInput__1knBo",InputField:"Checklist-module_InputField__1bx7c",CloseInput:"Checklist-module_CloseInput__1Wy3x"},s=function(t){var n=t.ownerName,l=t.maxCount,o=t.initialList,u=t.defaultLabel,s=a(e.useState(o),2),d=s[0],m=s[1],f=a(e.useState(-1),2),h=f[0],p=f[1],_=d.map((function(e,t){var n=e.label,l=void 0===n?u:n,a=e.checked,o=void 0!==a&&a,s=h===t,f=[c.Checkbox].concat(i(o?[c.Checked]:[])).join(" ");return r.default.createElement("div",{className:c.List_Item,key:t},r.default.createElement("div",{className:f,onClick:function(){return m([].concat(i(d.slice(0,t)),[Object.assign({},d[t],{label:l,checked:!o})],i(d.slice(t+1))))}},o?"✓":""),r.default.createElement("div",{onClick:function(){return p(t)},className:c.Label,style:{textDecoration:o?"line-through":"",opacity:o?.5:1}},s?r.default.createElement("div",{className:c.EditInput},r.default.createElement("input",{autoFocus:!0,type:"text",value:l,onChange:function(e){return m([].concat(i(d.slice(0,t)),[Object.assign({},d[t],{label:e.target.value,checked:o})],i(d.slice(t+1))))},className:c.InputField}),r.default.createElement("div",{onClick:function(e){e.stopPropagation(),p(-1)},className:c.CloseInput},"🞩")):l))}));return r.default.createElement("div",{className:c.Checklist},r.default.createElement("h2",{className:c.Header},"📝 ",n?"".concat(n,"'s"):""," Checklist",r.default.createElement("div",{onClick:function(){d.length>=l||m([].concat(i(d),[{label:u,checked:!1}]))},n:!0,className:c.AddButton},"+ Add")),r.default.createElement("div",{className:c.List},_))};s.propTypes={maxCount:l.default.number,ownerName:l.default.string,defaultLabel:l.default.string,initialList:l.default.arrayOf(l.default.shape({label:l.default.string.isRequired,checked:l.default.bool.isRequired}))},s.defaultProps={maxCount:3,defaultLabel:"Edit Text",initialList:[]},exports.Checklist=s;
