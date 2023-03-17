import { createStore, useStore as basicUseStore } from 'vuex';
import type { InjectionKey } from 'vue';
import type { Store } from 'vuex';

export interface State {
  count: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore() {
  return basicUseStore(key);
}

export default createStore<State>({
  state: {
    count: 1,
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
// 定义一个导出key
// 在main.js里引入这个key
// 重写useStore这个函数
// import { useStore } from '@/store';
