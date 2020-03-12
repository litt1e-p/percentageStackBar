function normalizeComponent(e,t,n,r,o,i,s,a,_,u){"boolean"!=typeof s&&(_=a,a=s,s=!1);var c="function"==typeof n?n.options:n;e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,o&&(c.functional=!0)),r&&(c._scopeId=r);var d;if(i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,_(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=d):t&&(d=s?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,a(e))}),d)if(c.functional){var l=c.render;c.render=function(e,t){return d.call(t),l(e,t)}}else{var v=c.beforeCreate;c.beforeCreate=v?[].concat(v,d):[d]}return n}import cloneDeep from"lodash/cloneDeep";var script={name:"percentageStackBar",props:{value:{type:Array,default:function(){return Array.prototype.constructor()},validator:function(e){return!e.find(function(e){return"string"==typeof e})&&(void 0!==e.find(function(e){return/^\d{1,2}(\.\d{1,})?$/g.test(e)})&&!(e.reduce(function(e,t){return e+Number(t)},0)>100))}},title:{type:String,default:function(){return String.prototype.constructor()}},showRemark:{type:Boolean,default:function(){return!0}},spaceForZero:{tyep:Number,default:function(){return 5}}},data(){return{dto:Array.prototype.constructor()}},mounted(){this.value&&this.build(this.value)},methods:{build(e){var t=this;if(Array.isArray(e)){if(void 0===e.find(function(e){return 0===e}))return void(this.dto=cloneDeep(e).map(function(e){return{desc:e,val:e}}));var n=e.filter(function(e){return 0===e}).length;n===e.length?this.dto=Array(e.length).fill({desc:0,val:(100/e.length).toFixed(3)}):this.dto=e.map(function(e){return{desc:e,val:0===e?t.spaceForZero:((100-n*t.spaceForZero)*e/100).toFixed(3)}})}},validator(){return void 0!==this.value.find(function(e){return/^\d{1,2}(\.\d{1,})?$/g.test(e)})&&!(this.value.reduce(function(e,t){return e+Number(t)},0)>100)}},watch:{value(e){this.build(e)}}},normalizeComponent_1=normalizeComponent;const __vue_script__=script;var __vue_render__=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"psb-wr"},[e.validator()?n("div",{staticClass:"psb-main"},[n("div",{staticClass:"psb-stk"},e._l(e.dto,function(t,r){return n("div",{key:r,staticClass:"psb-stk-v",style:{height:Number(t.val)+"%"}},[n("span",{staticClass:"vl"},[e._v(e._s(Number(t.desc)+"%"))])])}),0),e._v(" "),e.title?n("div",{staticClass:"psb-su"},[e._v(e._s(e.title))]):e._e()]):e._e(),e._v(" "),e.showRemark?n("div",{staticClass:"psb-mk"},[e._t("remark",null,{dto:e.value})],2):e._e()])},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=void 0,__vue_scope_id__="data-v-2de7e66e",__vue_module_identifier__=void 0,__vue_is_functional_template__=!1;var Class=normalizeComponent_1({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},void 0,__vue_script__,__vue_scope_id__,!1,void 0,void 0,void 0),components=[Class],install=function(e){components.forEach(function(t){e.component(t.name,t)})};"undefined"!=typeof window&&window.Vue&&install(window.Vue);export default install;export{Class as PercentageStackBar};
