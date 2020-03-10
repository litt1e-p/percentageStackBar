(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.percentageStackBar = {}));
}(this, function (exports) { 'use strict';

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  var script = {
    name: 'percentageStackBar',
    props: {
      value: {
        type: Array,
        default: function _default() {
          return Array.prototype.constructor();
        },
        validator: function validator(v) {
          if (!v.find(function (i) {
            return /^\d{1,2}(\.\d{1,})?$/g.test(i);
          })) {
            // console.error('The values for pencentage-stack-bar should be numberic')
            return false;
          } else if (v.reduce(function (r, i) {
            return r + Number(i);
          }, 0) > 100) {
            // console.error('The sum of values for pencentage-stack-bar should be less than 100')
            return false;
          }

          return true;
        }
      },
      title: {
        type: String,
        default: function _default() {
          return String.prototype.constructor();
        }
      },
      showRemark: {
        type: Boolean,
        default: function _default() {
          return true;
        }
      }
    },
    methods: {
      validator() {
        if (!this.value.find(function (i) {
          return /^\d{1,2}(\.\d{1,})?$/g.test(i);
        })) {
          return false;
        } else if (this.value.reduce(function (r, i) {
          return r + Number(i);
        }, 0) > 100) {
          return false;
        }

        return true;
      }

    }
  };

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
  /* server only */
  , shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
      createInjectorSSR = createInjector;
      createInjector = shadowMode;
      shadowMode = false;
    } // Vue.extend constructor export interop.


    var options = typeof script === 'function' ? script.options : script; // render functions

    if (template && template.render) {
      options.render = template.render;
      options.staticRenderFns = template.staticRenderFns;
      options._compiled = true; // functional template

      if (isFunctionalTemplate) {
        options.functional = true;
      }
    } // scopedId


    if (scopeId) {
      options._scopeId = scopeId;
    }

    var hook;

    if (moduleIdentifier) {
      // server build
      hook = function hook(context) {
        // 2.3 injection
        context = context || // cached call
        this.$vnode && this.$vnode.ssrContext || // stateful
        this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
        // 2.2 with runInNewContext: true

        if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
          context = __VUE_SSR_CONTEXT__;
        } // inject component styles


        if (style) {
          style.call(this, createInjectorSSR(context));
        } // register component module identifier for async chunk inference


        if (context && context._registeredComponents) {
          context._registeredComponents.add(moduleIdentifier);
        }
      }; // used by ssr in case component is cached and beforeCreate
      // never gets called


      options._ssrRegister = hook;
    } else if (style) {
      hook = shadowMode ? function () {
        style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
      } : function (context) {
        style.call(this, createInjector(context));
      };
    }

    if (hook) {
      if (options.functional) {
        // register for functional component in vue file
        var originalRender = options.render;

        options.render = function renderWithStyleInjection(h, context) {
          hook.call(context);
          return originalRender(h, context);
        };
      } else {
        // inject component registration as beforeCreate hook
        var existing = options.beforeCreate;
        options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
      }
    }

    return script;
  }

  var normalizeComponent_1 = normalizeComponent;

  /* script */
  const __vue_script__ = script;
  /* template */
  var __vue_render__ = function() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", { staticClass: "psb-wr" }, [
      _vm.validator()
        ? _c("div", { staticClass: "psb-main" }, [
            _c(
              "div",
              { staticClass: "psb-stk" },
              _vm._l(_vm.value, function(item, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "psb-stk-v",
                    style: { height: Number(item) + "%" }
                  },
                  [
                    _c("div", { staticClass: "vl" }, [
                      _vm._v(_vm._s(Number(item) + "%"))
                    ])
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _vm.title
              ? _c("div", { staticClass: "psb-su" }, [_vm._v(_vm._s(_vm.title))])
              : _vm._e()
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.showRemark
        ? _c(
            "div",
            { staticClass: "psb-mk" },
            [_vm._t("remark", null, { dto: _vm.value })],
            2
          )
        : _vm._e()
    ])
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

    /* style */
    const __vue_inject_styles__ = undefined;
    /* scoped */
    const __vue_scope_id__ = "data-v-69d9c986";
    /* module identifier */
    const __vue_module_identifier__ = undefined;
    /* functional template */
    const __vue_is_functional_template__ = false;
    /* style inject */
    
    /* style inject SSR */
    

    
    var Class = normalizeComponent_1(
      { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
      __vue_inject_styles__,
      __vue_script__,
      __vue_scope_id__,
      __vue_is_functional_template__,
      __vue_module_identifier__,
      undefined,
      undefined
    );

  var components = [Class];

  var install = function install(Vue) {
    components.forEach(function (component) {
      Vue.component(component.name, component);
    });
  };

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  exports.PercentageStackBar = Class;
  exports.default = install;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
