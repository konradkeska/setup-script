(this["webpackJsonpsetup-script"]=this["webpackJsonpsetup-script"]||[]).push([[0],{76:function(n,e,t){"use strict";t.r(e);var r,o,c,a,i,s,u,l=t(1),d=t(0),b=t.n(d),p=t(14),f=t.n(p),h=t(4),x=t(9),m=t(10),g=t(6),j=t(3),v=t(41);!function(n){n.CASK="cask",n.FORMULA="formula"}(r||(r={})),function(n){n.PURPLE="purple",n.BLUE="blue",n.GREEN="green",n.RED="red"}(o||(o={})),function(n){n.BASE="base",n.SUB="sub"}(c||(c={})),function(n){n.INPUT="input",n.OVERLAY="overlay",n.BACKGROUND="background"}(a||(a={})),function(n){n.XS="xs",n.SM="sm",n.MD="md",n.LG="lg",n.XL="xl"}(i||(i={})),function(n){n.BASE="base"}(s||(s={})),function(n){n.PANEL="panel",n.BUTTON="button",n.INPUT="input"}(u||(u={}));var O=t(11),w=t.n(O),k=t(13),y=t(21),C=t.n(y),E="https://formulae.brew.sh/";function S(){return L.apply(this,arguments)}function L(){return(L=Object(k.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",C.a.get("".concat(E,"api/cask.json")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function U(){return z.apply(this,arguments)}function z(){return(z=Object(k.a)(w.a.mark((function n(){return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",C.a.get("".concat(E,"api/formula.json")));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var I="Cask (software)",R="Formulae (command line software)",P=t(5),T=t(8),M=t.n(T),A=576,B=768,G=function(n){return Object(l.jsx)(M.a,Object(P.a)(Object(P.a)({},n),{},{minWidth:A}))},N=function(n){return Object(l.jsx)(M.a,Object(P.a)(Object(P.a)({},n),{},{minWidth:B}))};var F=t(18),D=function(n,e){return n.map((function(n){var t=n.name,r=Object(F.a)(n,["name"]);return Object(P.a)(Object(P.a)({},r),{},{name:"string"===typeof t?t:t[0],type:e})}))},K=function(n,e){return e.filter((function(e){var t,r;return(null===n||void 0===n?void 0:n.length)>1&&((null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(n.toLowerCase()))||(null===(r=e.token)||void 0===r?void 0:r.toLowerCase().includes(n.toLowerCase())))||!1}))},W=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return n.length>e?"".concat(n.slice(0,e-2),".."):n},Y=function(n,e){return function(n){return Object.values(o).includes(n)}(n)?e.colors.primary[n]:function(n){return Object.values(a).includes(n)}(n)?e.colors.material[n]:function(n){return Object.values(c).includes(n)}(n)?e.colors.font[n]:"unset"};function q(n,e){var t=Object(d.useState)([]),r=Object(g.a)(t,2),o=r[0],c=r[1],a=Object(d.useState)([]),i=Object(g.a)(a,2),s=i[0],u=i[1],l=Object(d.useCallback)(Object(k.a)(w.a.mark((function t(){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:r=t.sent,c(D(r.data,e));case 4:case"end":return t.stop()}}),t)}))),[n,e]);Object(d.useEffect)((function(){l()}),[l]);var b=Object(d.useCallback)((function(n){return function(){s.find((function(e){return e.name===n.name}))||(u([n].concat(Object(x.a)(s))),c(o.filter((function(e){return e.name!==n.name}))))}}),[s,o]),p=Object(d.useCallback)((function(n){return function(){u(s.filter((function(e){return e.name!==n.name}))),c([n].concat(Object(x.a)(o)))}}),[s,o]);return[o,s,b,p]}var H={dark:{colors:{primary:{purple:"rgb(104, 117, 245)",blue:"rgb(6, 181, 212)",green:"rgb(35, 206, 107)",red:"rgb(247, 86, 124)"},font:{base:"rgb(245, 245, 245)",sub:"rgb(102, 105,\t111)"},material:{input:"rgb(51, 55, 62)",overlay:"rgb(61, 66, 74)",background:"rgb(40, 44, 52)"}},paddings:{xs:8,sm:16,md:24,lg:32,xl:66},shadows:{base:"0 2.8px 2.2px rgba(37, 47, 63, 0.034), 0 6.7px 5.3px rgba(37, 47, 63, 0.048), 0 12.5px 10px rgba(37, 47, 63, 0.06), 0 22.3px 17.9px rgba(37, 47, 63, 0.072), 0 41.8px 33.4px rgba(37, 47, 63, 0.086), 0 100px 80px rgba(37, 47, 63, 0.12)"},radiuses:{xs:4,sm:6,md:10}},light:{colors:{primary:{purple:"rgb(133, 145, 255)",blue:"rgb(124, 233, 233)",green:"rgb(135, 242, 158)",red:"rgb(255, 165, 195)"},font:{base:"rgb(34, 34, 34)",sub:"rgb(229, 229, 229)"},material:{input:"rgb(229,\t229,\t229)",overlay:"rgb(242, 242, 242)",background:"rgb(255,\t255, 255)"}},paddings:{xs:8,sm:16,md:24,lg:32,xl:66},shadows:{base:"0 2.8px 2.2px rgba(0, 0, 0, 0.017), 0 6.7px 5.3px rgba(0, 0, 0, 0.024), 0 12.5px 10px rgba(0, 0, 0, 0.03), 0 22.3px 17.9px rgba(0, 0, 0, 0.036), 0 41.8px 33.4px rgba(0, 0, 0, 0.043), 0 100px 80px rgba(0, 0, 0, 0.06)"},radiuses:{xs:4,sm:6,md:10}}};var J=function(n){return{backgroundColor:n.colors.material.overlay,color:n.colors.font.base}},V=function(n){return[{selector:"#brand",content:"The main purpose of this app is creating setup scripts for your macOS system. \u2699\ufe0f",style:J(n),stepInteraction:!1},{selector:"#search-input",content:"Use search to find useful casks (programs), formulas (CLI programs) or macOS settings. \ud83e\udd14",style:J(n),stepInteraction:!1},{selector:"#search-input",content:"Hmm.. let's try typing something in the search input.. \ud83d\udd0d",style:J(n),stepInteraction:!1,action:function(n){!function(n,e){var t=(Object.getOwnPropertyDescriptor(n,"value")||{}).set,r=Object.getPrototypeOf(n),o=(Object.getOwnPropertyDescriptor(r,"value")||{}).set;if(o&&t!==o)o.call(n,e);else{if(!t)throw new Error("The given element does not have a value setter");t.call(n,e)}}(n,"google"),n.dispatchEvent(new Event("input",{bubbles:!0}))}},{selector:"#found-casks",content:"Here are some of the results search has founded. \ud83d\udcdc",style:J(n),stepInteraction:!1},{selector:"#google-chrome",content:"Let's try adding something to our script. \ud83e\udd14 Click on Google Chrome and go to the next step.",style:J(n),stepInteraction:!0},{selector:"#added-casks",content:"As you can see Google Chrome has been succesfully added to your script 'recipe'. \ud83c\udf89",style:J(n),stepInteraction:!1},{selector:"main div",content:"You can create quite complex lists of programs, CLI utils and MacOS native system settings. \ud83d\ude80",style:J(n),stepInteraction:!1},{selector:"#download-button",content:Object(l.jsxs)("p",{children:["When you are done, you can click this button to download the shell script.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Thanks you for your patience and hope you find this useful. \ud83d\udc9c",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"You can close this diagram now."]}),style:J(n),stepInteraction:!0}]};function X(){var n=window;return{width:n.innerWidth,height:n.innerHeight}}function $(){var n=Object(h.a)(["\n  color: ",";\n  margin-left: ",";\n  background-color: ",";\n  padding: ",";\n  border-radius: ",";\n  font-size: ",";\n  font-weight: 700;\n  border: 1px dashed transparent;\n\n  &:focus {\n    border: 1px dashed ",";\n  }\n\n  &:hover {\n    cursor: pointer;\n    opacity: 0.9;\n  }\n"]);return $=function(){return n},n}var Q=j.c.button($(),(function(n){return n.theme.colors.font.base}),(function(n){return n.ml?"12px":"unset"}),(function(n){var e=n.theme,t=n.bgColor;return t?e.colors.primary[t]:e.colors.primary.blue}),(function(n){var e=n.theme;return n.small?"".concat(e.paddings.xs/2,"px ").concat(e.paddings.xs/2*3.25,"px"):"".concat(e.paddings.xs,"px ").concat(3.25*e.paddings.xs,"px")}),(function(n){var e=n.theme;return"".concat(e.radiuses.md,"px")}),(function(n){return n.small?"14px":"16px"}),(function(n){return n.theme.colors.font.base}));function Z(){var n=Object(h.a)(["\n  color: ",";\n  background-color: ",";\n  border-radius: ",";\n  margin-left: ",";\n  padding: ",";\n  font-size: ",";\n  height: ",";\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n\n  &:hover {\n    cursor: ",";\n    user-select: ",";\n  }\n"]);return Z=function(){return n},n}var _=j.c.span(Z(),(function(n){var e=n.color,t=n.theme;return e?Y(e,t):"inherit"}),(function(n){var e=n.bgColor,t=n.theme;return e?Y(e,t):"unset"}),(function(n){return n.radius||"unset"}),(function(n){return n.ml?"12px":"unset"}),(function(n){return n.p?"6px":"unset"}),(function(n){return n.size||"inherit"}),(function(n){return n.h||"auto"}),(function(n){return n.clickable?"pointer":"unset"}),(function(n){return n.selectable?"unset":"none"}));function nn(){var n=Object(h.a)(["\n  font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 1.5;\n"]);return nn=function(){return n},n}var en=Object(j.c)(_)(nn());function tn(){var n=Object(h.a)(["\n  color: ",";\n  font-weight: 900;\n  font-size: 40px;\n  line-height: 0;\n  margin-left: -8.5px;\n"]);return tn=function(){return n},n}var rn=j.c.span(tn(),(function(n){var e=n.theme,t=n.color;return t?e.colors.primary[t]:e.colors.primary.purple}));function on(){var n=Object(h.a)(["\n  margin-top: 8px;\n"]);return on=function(){return n},n}var cn=j.c.div(on());function an(){var n=Object(h.a)(["\n  color: ",";\n  background-color: ",";\n  padding-bottom: ",";\n  text-align: right;\n  display: flex;\n  justify-content: space-between;\n"]);return an=function(){return n},n}var sn=j.c.footer(an(),(function(n){return n.theme.colors.font.sub}),(function(n){return n.theme.colors.material.background}),(function(n){var e=n.theme;return"".concat(e.paddings.xs,"px")}));function un(){var n=Object(h.a)(['\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\n      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\n      "Helvetica Neue", sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ',';\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",\n      monospace;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: none;\n    border: ',";\n  }\n\n  input:focus {\n    outline: none;\n    border: ",";\n  }\n\n  input[type=submit]:focus{\n    outline: none;\n    border: ",";\n  }\n\n  a:focus {\n    outline: none;\n    border: ",";\n  }\n\n  button:focus {\n    outline: none;\n    border: ",';\n  }\n\n  a {\n    color: unset;\n  }\n\n  ul,\n  li {\n    text-decoration: none;\n    display: block;\n  }\n\n  button,\n  input,\n  optgroup,\n  select,\n  textarea {\n    font-family: inherit;\n    font-size: 100%;\n    line-height: 1.15;\n    margin: 0;\n    border-width: unset;\n    border-style: unset;\n    border-color: unset;\n  }\n\n  button,\n  input {\n    overflow: visible;\n  }\n\n  button,\n  select {\n    text-transform: none;\n  }\n\n  button,\n  [type="button"],\n  [type="reset"],\n  [type="submit"] {\n    -webkit-appearance: button;\n  }\n\n  input[type="search"]::-webkit-search-cancel-button {\n    -webkit-appearance: none;\n    height: 1em;\n    width: 1em;\n    border-radius: 50em;\n    background: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg) no-repeat 50% 50%;\n    background-size: contain;\n    opacity: 0;\n    pointer-events: none;\n  }\n\n  input[type="search"]:focus::-webkit-search-cancel-button {\n    opacity: .3;\n    pointer-events: all;\n  }\n\n  input[type="search"].dark::-webkit-search-cancel-button {\n    filter: invert(1);\n  }\n']);return un=function(){return n},n}var ln=Object(j.b)(un(),(function(n){return n.theme.colors.material.background}),(function(n){var e=n.theme;return"1px dashed ".concat(e.colors.font.base)}),(function(n){var e=n.theme;return"1px dashed ".concat(e.colors.font.base)}),(function(n){var e=n.theme;return"1px dashed ".concat(e.colors.font.base)}),(function(n){var e=n.theme;return"1px dashed ".concat(e.colors.font.base)}),(function(n){var e=n.theme;return"1px dashed ".concat(e.colors.font.base)}));function dn(){var n=Object(h.a)(["\n  margin-top: ",";\n  width: 100%;\n  padding: ",";\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 5;\n  background-color: ",";\n  color: ",";\n  transition: margin 700ms;\n  backdrop-filter: blur(5px);\n  box-shadow: ",";\n  border-bottom: ",";\n  border-top: ",";\n"]);return dn=function(){return n},n}var bn=j.c.header(dn(),(function(n){return n.wasUserGuided?"0px":"42px"}),(function(n){var e=n.theme;return"".concat(e.paddings.md/2,"px 0px")}),(function(n){return n.theme.colors.material.overlay}),(function(n){return n.theme.colors.font.base}),(function(n){var e=n.theme;return n.hasShadow?"unset":e.shadows.base}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.material.input)}),(function(n){var e=n.wasUserGuided,t=n.theme;return"1px solid ".concat(e?t.colors.material.overlay:t.colors.material.input)}));function pn(){var n=Object(h.a)(["\n  max-width: 180px;\n  padding: ",";\n  border-radius: ",";\n  background-color: ",";\n  color: ",";\n  outline: none;\n  border: 1px solid transparent;\n\n  &:focus {\n    border: 1px solid ",";\n  }\n"]);return pn=function(){return n},n}var fn=j.c.input(pn(),(function(n){var e=n.theme;return"".concat(e.paddings.xs,"px ").concat(e.paddings.sm,"px")}),(function(n){var e=n.theme;return"".concat(e.radiuses.md,"px")}),(function(n){return n.theme.colors.material.input}),(function(n){return n.theme.colors.font.base}),(function(n){return n.theme.colors.primary.purple}));function hn(){var n=Object(h.a)(["\n  font-weight: 600;\n  &:hover {\n    color: ",";\n  }\n"]);return hn=function(){return n},n}var xn=j.c.a(hn(),(function(n){return n.theme.colors.primary.green}));function mn(){var n=Object(h.a)(["\n  padding-top: ",";\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: column;\n  background-color: ",";\n  transition: padding 700ms;\n"]);return mn=function(){return n},n}var gn=j.c.main(mn(),(function(n){var e=n.wasUserGuided;return"".concat(e?62:104,"px")}),(function(n){return n.theme.colors.material.background}));function jn(){var n=Object(h.a)(["\n  display: ",";\n  align-items: ",";\n  justify-content: ",";\n"]);return jn=function(){return n},n}var vn=j.c.div(jn(),(function(n){return n.display||"flex"}),(function(n){return n.alignItems||"center"}),(function(n){return n.justifyContent||"center"}));function On(){var n=Object(h.a)(["\n  margin: 0;\n  font-weight: 700;\n  font-size: 14px;\n  margin: ",";\n"]);return On=function(){return n},n}var wn=j.c.h5(On(),(function(n){var e=n.theme.paddings;return n.mt?"".concat(e.md,"px 0px"):"0px 0px ".concat(e.xs,"px 0px")})),kn=t(40),yn=t.n(kn);function Cn(){var n=Object(h.a)(["\n  .react-toggle {\n    touch-action: pan-x;\n\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    background-color: transparent;\n    border: 0;\n    padding: 0;\n\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n\n  .react-toggle-screenreader-only {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px;\n  }\n\n  .react-toggle--disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n    -webkit-transition: opacity 0.25s;\n    transition: opacity 0.25s;\n  }\n\n  .react-toggle-track {\n    width: 50px;\n    height: 24px;\n    padding: 0;\n    border-radius: 30px;\n    background-color: #0f1114;\n    -webkit-transition: all 0.2s ease;\n    -moz-transition: all 0.2s ease;\n    transition: all 0.2s ease;\n  }\n\n  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {\n    background-color: #0f1114;\n  }\n\n  .react-toggle--checked .react-toggle-track {\n    background-color: #0f1114;\n  }\n\n  .react-toggle--checked:hover:not(.react-toggle--disabled)\n    .react-toggle-track {\n    background-color: #0f1114;\n  }\n\n  .react-toggle-track-check {\n    position: absolute;\n    width: 17px;\n    height: 17px;\n    top: 0px;\n    bottom: 0px;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 0;\n    left: 5px;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s ease;\n    -moz-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease;\n  }\n\n  .react-toggle--checked .react-toggle-track-check {\n    opacity: 1;\n    -webkit-transition: opacity 0.25s ease;\n    -moz-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease;\n  }\n\n  .react-toggle-track-x {\n    position: absolute;\n    width: 17px;\n    height: 17px;\n    top: 0px;\n    bottom: 0px;\n    margin-top: auto;\n    margin-bottom: auto;\n    line-height: 0;\n    right: 5px;\n    opacity: 1;\n    -webkit-transition: opacity 0.25s ease;\n    -moz-transition: opacity 0.25s ease;\n    transition: opacity 0.25s ease;\n  }\n\n  .react-toggle--checked .react-toggle-track-x {\n    opacity: 0;\n  }\n\n  .react-toggle-thumb {\n    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;\n    position: absolute;\n    top: 1px;\n    left: 1px;\n    width: 22px;\n    height: 22px;\n    border: 1px solid #4d4d4d;\n    border-radius: 50%;\n    background-color: #fafafa;\n\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n\n    -webkit-transition: all 0.25s ease;\n    -moz-transition: all 0.25s ease;\n    transition: all 0.25s ease;\n  }\n\n  .react-toggle--checked .react-toggle-thumb {\n    left: 27px;\n    border-color: #0f1114;\n  }\n\n  .react-toggle--focus .react-toggle-thumb {\n    -webkit-box-shadow: 0px 0px 3px 2px rgb(104, 117, 245);\n    -moz-box-shadow: 0px 0px 3px 2px rgb(104, 117, 245);\n    box-shadow: 0px 0px 2px 3px rgb(104, 117, 245);\n  }\n\n  .react-toggle:active:not(.react-toggle--disabled) .react-toggle-thumb {\n    -webkit-box-shadow: 0px 0px 5px 5px rgb(104, 117, 245);\n    -moz-box-shadow: 0px 0px 5px 5px rgb(104, 117, 245);\n    box-shadow: 0px 0px 5px 5px rgb(104, 117, 245);\n  }\n"]);return Cn=function(){return n},n}var En=b.a.memo((function(n){var e=n.icons,t=void 0===e?{checked:Object(l.jsx)(cn,{children:"\u2714\ufe0f"}),unchecked:Object(l.jsx)(cn,{children:"\u2716\ufe0f"})}:e,r=Object(F.a)(n,["icons"]);return Object(l.jsx)(Sn,{children:Object(l.jsx)(yn.a,Object(P.a)({icons:t},r))})})),Sn=j.c.div(Cn());function Ln(){var n=Object(h.a)(["\n  display: flex;\n  align-items: ",";\n  justify-content: ",";\n  flex-wrap: wrap;\n  flex-direction: ",";\n  width: ",";\n  padding: ",";\n  margin: 0 auto;\n  max-width: ",";\n  margin-top: ",";\n  height: 100%;\n  transition: margin 700ms;\n  color: ",";\n"]);return Ln=function(){return n},n}var Un=j.c.div(Ln(),(function(n){return n.align||"center"}),(function(n){return n.justify||"space-between"}),(function(n){return n.direction||"unset"}),(function(n){return n.w||"100%"}),(function(n){var e=n.theme;return n.p||"0px ".concat(e.paddings.sm,"px")}),(function(n){return n.maxW||"".concat(680,"px")}),(function(n){return n.mt||"unset"}),(function(n){var e=n.theme;return n.color||e.colors.font.base})),zn=b.a.memo((function(n){var e=n.children,t=n.color,r=void 0===t?c.BASE:t,o=n.bgColor,i=void 0===o?a.INPUT:o;return Object(l.jsx)(en,{color:r,bgColor:i,radius:"4px",h:"18px",size:"12px",ml:!0,p:!0,children:e})}));function In(){var n=Object(h.a)(["\n  background-color: ",";\n  width: 100%;\n  padding: ",";\n  position: fixed;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  z-index: 5;\n  color: ",";\n"]);return In=function(){return n},n}var Rn=b.a.memo((function(n){var e=n.label,t=n.btnLabel,r=n.onClose,c=n.onConfirm;return Object(l.jsx)(Pn,{children:Object(l.jsxs)(Un,{maxW:"100%",children:[Object(l.jsxs)("div",{children:[e," ",Object(l.jsx)(Q,{bgColor:o.GREEN,onClick:c,small:!0,ml:!0,children:t})]}),Object(l.jsx)(_,{onClick:r,clickable:!0,children:"\u2716"})]})})})),Pn=j.c.aside(In(),(function(n){return n.theme.colors.material.input}),(function(n){var e=n.theme;return"".concat(e.paddings.xs,"px 0px")}),(function(n){return n.theme.colors.font.base}));function Tn(){var n=Object(h.a)(["\n  user-select: none;\n  margin: 0;\n  font-weight: 900;\n  font-size: 24px;\n"]);return Tn=function(){return n},n}function Mn(){var n=Object(h.a)(["\n  text-decoration: none;\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n"]);return Mn=function(){return n},n}var An=b.a.memo((function(n){var e=n.onClick;return Object(l.jsxs)(vn,{children:[Object(l.jsx)(Gn,{id:"brand",onClick:e,children:Object(l.jsxs)(_,{children:[Object(l.jsx)(_,{children:"\ud83c\udfd7\ufe0f"})," ",Object(l.jsx)(_,{color:c.BASE,children:"setup"}),Object(l.jsx)(_,{color:o.PURPLE,children:"-"}),Object(l.jsx)(_,{color:c.BASE,children:"script"})]})}),Object(l.jsx)(zn,{children:Object(l.jsx)(Bn,{href:"https://github.com/konradkeska/setup-script/issues",children:"MacOS BETA"})})]})})),Bn=Object(j.c)(xn)(Mn(),(function(n){return n.theme.colors.font.base}),(function(n){return n.theme.colors.primary.purple})),Gn=j.c.h4(Tn());function Nn(){var n=Object(h.a)(["\n  padding: 6px 10px;\n  border: 1px dashed transparent;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  text-align: ellipsis;\n  background-color: ",";\n  color: ",";\n\n  &:hover {\n    cursor: pointer;\n    border: ",";\n  }\n\n  &:active {\n    border: ",";\n    background-color: ",";\n  }\n"]);return Nn=function(){return n},n}var Fn=b.a.memo((function(n){var e=n.id,t=n.index,r=n.record,o=n.operation,c=n.onClick,a=n.accentColor,i=n.withDots;return Object(l.jsx)("li",{children:Object(l.jsxs)(Dn,{id:e,index:t,operation:o,onClick:c,children:[Object(l.jsxs)(en,{children:[i?Object(l.jsx)(rn,{color:a,children:"\xb7 "}):null,W(r.name,33)]}),r.version&&Object(l.jsx)(G,{children:Object(l.jsx)(en,{children:W(r.version)})})]})})})),Dn=j.c.button(Nn(),(function(n){return n.theme.colors.material.input}),(function(n){return n.theme.colors.font.base}),(function(n){var e=n.theme,t=n.operation;return"1px dashed ".concat("add"===t?e.colors.primary.green:e.colors.primary.red)}),(function(n){var e=n.theme,t=n.operation;return"1px solid\n      ".concat("add"===t?e.colors.primary.green:e.colors.primary.red)}),(function(n){var e=n.theme;return"add"===n.operation?e.colors.primary.green:e.colors.primary.red}));function Kn(){var n=Object(h.a)(["\n  margin: 0px;\n  padding: 0px;\n  min-height: ",";\n  max-height: ",";\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n  overflow-y: auto;\n"]);return Kn=function(){return n},n}var Wn,Yn=j.c.ul(Kn(),(function(n){var e=n.count;return"calc(".concat(e," * 32px + 2px)")}),(function(n){var e=n.count;return"calc(".concat(e," * 32px + 2px)")}),(function(n){var e=n.theme,t=n.bgColor;return e.colors.material[t]}),(function(n){var e=n.theme;return"".concat(e.radiuses.xs,"px")}),(function(n){return n.border?"1px solid transparent":"none"}));function qn(){var n=Object(h.a)(["\n  width: ",";\n\n  padding: ",";\n\n  min-height: ",";\n\n  max-height: ",";\n"]);return qn=function(){return n},n}var Hn=(Wn={},Object(m.a)(Wn,r.CASK,o.PURPLE),Object(m.a)(Wn,r.FORMULA,o.BLUE),Wn),Jn=b.a.memo((function(n){var e=n.title,t=n.items,r=n.onClick,c=n.id,i=n.count,s=void 0===i?8:i,u=n.withDots,d=void 0!==u&&u,b=n.accentColor,p=void 0===b?o.PURPLE:b,f=n.bgColor,h=void 0===f?a.OVERLAY:f,x=n.border,m=void 0!==x&&x,g=n.mt,j=void 0!==g&&g,v=n.operation,O=void 0===v?"add":v,w=n.width,k=void 0===w?"100%":w;return Object(l.jsxs)(Vn,{count:s,title:e,mt:j,width:k,children:[e&&Object(l.jsxs)(wn,{mt:j,title:e,children:[Object(l.jsx)(_,{color:p,children:"#"})," ",e]}),Object(l.jsx)(Yn,{id:c,border:m,count:s,bgColor:h,children:t.map((function(n,e){return Object(l.jsx)(Fn,{id:n.token,index:e,record:n,operation:O,onClick:null===r||void 0===r?void 0:r(n),accentColor:Hn[n.type],withDots:d},e)}))})]})})),Vn=j.c.div(qn(),(function(n){return n.width}),(function(n){var e=n.theme.paddings;return n.title?"0px ".concat(e.sm,"px ").concat(e.sm,"px ").concat(e.sm,"px"):"0px"}),(function(n){var e=n.mt,t=n.count,r=n.title;return"calc(".concat(t," * 32px + ").concat(e?24+(r?49:0):r?49:0,"px)")}),(function(n){var e=n.mt,t=n.count,r=n.title;return"calc(".concat(t," * 32px + ").concat(e?24+(r?49:0):r?49:0,"px)")}));function Xn(){var n=Object(h.a)(["\n  width: 100%;\n  padding: ",";\n  overflow-x: auto;\n"]);return Xn=function(){return n},n}function $n(){var n=Object(h.a)(["\n  width: 100%;\n  padding: 16px;\n  border-radius: 4px;\n  background-color: ",";\n  border: ",";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);return $n=function(){return n},n}var Qn,Zn=b.a.memo((function(n){var e=n.casks,t=n.formulas;return Object(l.jsxs)(ne,{children:[Object(l.jsx)(wn,{children:"# Script preview"}),Object(l.jsxs)(_n,{children:["#!/usr/bin/env bash",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"# Ask for the administrator password upfront",Object(l.jsx)("br",{}),"sudo -v",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"# Keep-alive: update existing `sudo` time stamp until `.macos` has finished",Object(l.jsx)("br",{}),'while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2`',">","`/dev/null &",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"# ",R,Object(l.jsx)("br",{}),"brew install (",Object(l.jsx)("br",{}),t.map((function(n){return Object(l.jsxs)("span",{children:["\xa0\xa0",n.name,Object(l.jsx)("br",{})]},n.name)})),")",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"# ",I,Object(l.jsx)("br",{}),"brew cask install (",Object(l.jsx)("br",{}),e.map((function(n){return Object(l.jsxs)("span",{children:["\xa0\xa0",n.token,Object(l.jsx)("br",{})]},n.token)})),")"]})]})})),_n=Object(j.c)(en)($n(),(function(n){return n.theme.colors.material.input}),(function(n){var e=n.theme;return"1px solid ".concat(e.colors.material.overlay)})),ne=j.c.div(Xn(),(function(n){var e=n.theme;return"0px ".concat(e.paddings.sm,"px ").concat(e.paddings.md,"px ").concat(e.paddings.sm,"px")}));function ee(){var n=Object(h.a)(["\n  z-index: 4;\n  padding-top: ",";\n  max-width: 360px;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  background-color: ",";\n  box-shadow: ",";\n  transition: padding 700ms;\n"]);return ee=function(){return n},n}!function(n){n.PICKER="picker",n.SCRIPT="script"}(Qn||(Qn={}));var te=function(){var n=Object(d.useState)(""),e=Object(g.a)(n,2),t=e[0],c=e[1],i=Object(d.useState)(Qn.PICKER),s=Object(g.a)(i,2),u=s[0],b=s[1],p=Object(d.useRef)(null),f=function(){var n=Object(d.useState)(X()),e=Object(g.a)(n,2),t=e[0],r=e[1];return Object(d.useEffect)((function(){var n=function(){return r(X())};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t}().height,h=function(){var n=window.localStorage.getItem("theme")||"dark",e=Object(d.useState)(n),t=Object(g.a)(e,2),r=t[0],o=t[1],c=function(n){window.localStorage.setItem("theme",n),o(n)};return{mode:n,theme:Object(d.useMemo)((function(){return H[r]}),[r]),switchTheme:function(){c("light"===r?"dark":"light")}}}(),O=h.mode,w=h.theme,k=h.switchTheme,y=function(n){var e=n.theme,t=Object(d.useState)(!1),r=Object(g.a)(t,2),o=r[0],c=r[1],a=Object(d.useState)(!1),i=Object(g.a)(a,2),s=i[0],u=i[1],l=Object(d.useCallback)((function(){c(!0)}),[]),b=Object(d.useCallback)((function(){setTimeout((function(){return u(!0)}),1e3),c(!0)}),[]),p=Object(d.useCallback)((function(){u(!1),c(!0)}),[]);return{cancelTour:l,startTour:b,isTourOpen:s,steps:Object(d.useMemo)((function(){return V(e)}),[e]),onRequestClose:p,wasUserGuided:o}}({theme:w}),C=y.cancelTour,E=y.startTour,L=y.isTourOpen,z=y.steps,P=y.onRequestClose,T=y.wasUserGuided,M=q(S,r.CASK),A=Object(g.a)(M,4),B=A[0],G=A[1],F=A[2],D=A[3],W=q(U,r.FORMULA),Y=Object(g.a)(W,4),J=Y[0],$=Y[1],Z=Y[2],_=Y[3],nn=Object(d.useMemo)((function(){return(null===t||void 0===t?void 0:t.length)>1}),[t]);Object(d.useEffect)((function(){var n;nn||null===(n=p.current)||void 0===n||n.focus()}),[nn]),function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"keydown",r=Object(d.useMemo)(n,[n].concat(Object(x.a)(e))),o=Object(d.useCallback)((function(n){var e,t=n.code;return null===(e=r[t])||void 0===e?void 0:e.call(r)}),[r]);Object(d.useEffect)((function(){return document.addEventListener(t,o),function(){return document.removeEventListener(t,o)}}),[t,o])}((function(){return{Backspace:function(){var n;return null===(n=p.current)||void 0===n?void 0:n.focus()}}}),[]);var en=Object(d.useCallback)((function(){return b(u===Qn.PICKER?Qn.SCRIPT:Qn.PICKER)}),[u]),tn=Object(d.useCallback)((function(n){return c(n.currentTarget.value)}),[]),rn=Object(d.useCallback)((function(n){var e;return(e={},Object(m.a)(e,r.CASK,F),Object(m.a)(e,r.FORMULA,Z),e)[n.type](n)}),[F,Z]),on=Object(d.useCallback)((function(n){return Math.floor((f-(n?62:104))/32)}),[f]),an=Object(d.useMemo)((function(){return on(T)}),[on,T]),un=Object(d.useMemo)((function(){return K(t,B)}),[t,B]),dn=Object(d.useMemo)((function(){return K(t,J)}),[t,J]),pn=Object(d.useMemo)((function(){return n=[].concat(Object(x.a)(un),Object(x.a)(dn)),e=function(n,e){return n.name.localeCompare(e.name,"en",{sensitivity:"base"})},Object(x.a)(n).sort(e);var n,e}),[un,dn]);return Object(l.jsxs)(j.a,{theme:w,children:[Object(l.jsx)(ln,{wasUserGuided:T}),Object(l.jsxs)(l.Fragment,{children:[!T&&Object(l.jsx)(Rn,{label:"Are you up for a quick tour?",btnLabel:"Ok",onClose:C,onConfirm:E}),Object(l.jsx)(v.a,{steps:z,onRequestClose:P,isOpen:L,onAfterOpen:function(){return document.body.style.overflowY="hidden"},onBeforeClose:function(){return document.body.style.overflowY="auto"},accentColor:w.colors.primary.purple,rounded:w.radiuses.md,showNavigation:!1,showNavigationNumber:!1,disableFocusLock:!0}),Object(l.jsx)(bn,{hasShadow:nn,wasUserGuided:T,children:Object(l.jsxs)(Un,{maxW:"100%",children:[Object(l.jsx)(fn,{id:"search-input",ref:p,placeholder:"Search..",type:"search",value:t,onChange:tn,autoComplete:"off"}),Object(l.jsx)(N,{children:Object(l.jsx)(vn,{children:Object(l.jsx)(An,{})})}),Object(l.jsx)(Q,{id:"download-button",bgColor:o.GREEN,children:"Download"})]})}),nn&&pn.length>0&&Object(l.jsx)(re,{wasUserGuided:T,children:Object(l.jsx)(Un,{justify:"flex-start",align:"flex-start",direction:"column",p:"0px",children:Object(l.jsx)(Jn,{id:"results",count:an,items:pn,onClick:rn,bgColor:a.INPUT,mt:!T,withDots:!0})})}),Object(l.jsx)(gn,{wasUserGuided:T,children:Object(l.jsx)(Un,{align:"flex-start",p:"18px 0px 0px 0px",children:u===Qn.PICKER?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(Jn,{id:"added-casks",title:I,items:G,onClick:D,operation:"remove",border:!0}),Object(l.jsx)(Jn,{id:"added-formulas",title:R,items:$,onClick:_,operation:"remove",accentColor:o.BLUE,border:!0})]}):Object(l.jsx)(Zn,{casks:G,formulas:$})})}),Object(l.jsx)(sn,{children:Object(l.jsxs)(Un,{color:w.colors.font.sub,p:"0px 16px",children:[Object(l.jsx)(En,{defaultChecked:u===Qn.PICKER,onChange:en,icons:{checked:Object(l.jsx)(cn,{children:"\ud83d\udce6"}),unchecked:Object(l.jsx)(cn,{children:"\ud83d\udcdc"})}}),Object(l.jsx)(En,{defaultChecked:"light"===O,onChange:k,icons:{checked:Object(l.jsx)(cn,{children:"\u2600\ufe0f"}),unchecked:Object(l.jsx)(cn,{children:"\ud83c\udf19"})}})]})})]})]})},re=j.c.aside(ee(),(function(n){var e=n.wasUserGuided;return"".concat(e?62:104,"px")}),(function(n){return n.theme.colors.material.input}),(function(n){return n.theme.shadows.base})),oe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,79)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),c(n),a(n)}))};f.a.render(Object(l.jsx)(b.a.StrictMode,{children:Object(l.jsx)(te,{})}),document.getElementById("root")),oe()}},[[76,1,2]]]);
//# sourceMappingURL=main.748f97b8.chunk.js.map