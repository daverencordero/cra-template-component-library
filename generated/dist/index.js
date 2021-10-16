"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=n(e),r=n(t);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var l,r,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(l=n.next()).done)&&(a.push(l.value),!t||a.length!==t);i=!0);}catch(e){o=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw r}}return a}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var c={Checklist:"Checklist-module_Checklist__1L66e",Header:"Checklist-module_Header__3YkZw",AddButton:"Checklist-module_AddButton__Nxl4G",List:"Checklist-module_List__2my9v",List_Item:"Checklist-module_List_Item__3sNL0",Checkbox:"Checklist-module_Checkbox__3spd2",Checked:"Checklist-module_Checked__1_sOZ",Label:"Checklist-module_Label__3kldL",EditInput:"Checklist-module_EditInput__1AY11",InputField:"Checklist-module_InputField__UVIYz",CloseInput:"Checklist-module_CloseInput__3mi_d"},s=function(t){var n=t.ownerName,r=t.maxCount,o=t.initialList,u=t.defaultLabel,s=a(e.useState(o),2),d=s[0],f=s[1],m=a(e.useState(-1),2),h=m[0],p=m[1],_=d.map((function(e,t){var n=e.label,r=void 0===n?u:n,a=e.checked,o=void 0!==a&&a,s=h===t,m=[c.Checkbox].concat(i(o?[c.Checked]:[])).join(" ");return l.default.createElement("div",{className:c.List_Item,key:t},l.default.createElement("div",{className:m,onClick:function(){return f([].concat(i(d.slice(0,t)),[Object.assign({},d[t],{label:r,checked:!o})],i(d.slice(t+1))))}},o?"✓":""),l.default.createElement("div",{onClick:function(){return p(t)},className:c.Label,style:{textDecoration:o?"line-through":"",opacity:o?.5:1}},s?l.default.createElement("div",{className:c.EditInput},l.default.createElement("input",{autoFocus:!0,type:"text",value:r,onChange:function(e){return f([].concat(i(d.slice(0,t)),[Object.assign({},d[t],{label:e.target.value,checked:o})],i(d.slice(t+1))))},className:c.InputField}),l.default.createElement("div",{onClick:function(e){e.stopPropagation(),p(-1)},className:c.CloseInput},"🞩")):r))}));return l.default.createElement("div",{className:c.Checklist},l.default.createElement("h2",{className:c.Header},"📝 ",n?"".concat(n,"'s"):""," Checklist",l.default.createElement("div",{onClick:function(){d.length>=r||f([].concat(i(d),[{label:u,checked:!1}]))},n:!0,className:c.AddButton},"+ Add")),l.default.createElement("div",{className:c.List},_))};s.propTypes={maxCount:r.default.number,ownerName:r.default.string,defaultLabel:r.default.string,initialList:r.default.arrayOf(r.default.shape({label:r.default.string.isRequired,checked:r.default.bool.isRequired}))},s.defaultProps={maxCount:3,defaultLabel:"Edit Text",initialList:[]},exports.Checklist=s;