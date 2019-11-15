import Vue from 'vue'
var Profile = Vue.extend({
    template: '<div>{{firstName}} {{lastName}} aka {{alias}}</div>',
    data: function () {
      return {
        firstName: 'Walter',
        lastName: 'White',
        alias: 'Heisenberg'
      }
    }
  })
  // 创建 Profile 实例，并挂载到一个元素上。
//   new Profile().$mount('#mount-point')
  export default new Profile()