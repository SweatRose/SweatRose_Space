import { createStore } from 'vuex';

const store = createStore({
  state: {
    keyword: '我爱你',
  },
  mutations: {
    setKeyword(state, newKeyword) {
      state.keyword = newKeyword;
    },
  },
});

export default store;
