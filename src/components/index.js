import Vue from "vue";
import Mycalculator from "./Calculator.vue"

const Components = {
  Mycalculator
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;