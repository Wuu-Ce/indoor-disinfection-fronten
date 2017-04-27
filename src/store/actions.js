import types from './mutations';

const toggleSidebar = ({ commit }, opened) => commit(types.TOGGLE_SIDEBAR, opened);

export default {
  toggleSidebar,
};
