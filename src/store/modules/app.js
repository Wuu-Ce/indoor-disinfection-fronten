import types from '../mutations';

const state = {
  sidebar: {
    opened: false,
  },
};

const mutations = {
  [types.TOGGLE_SIDEBAR](state, opened) {
    state.sidebar.opened = opened;
  },
};

export default {
  state,
  mutations,
};
