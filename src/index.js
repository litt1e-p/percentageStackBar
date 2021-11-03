import PercentageStackBar from 'components/core';

const components = [PercentageStackBar]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
export { PercentageStackBar }
