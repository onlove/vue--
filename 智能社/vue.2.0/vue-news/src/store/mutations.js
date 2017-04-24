/**
 * Created by Administrator on 2017/4/23.
 */

import * as types from './types';
import getters from './getters';

const state = {
    showHeader: true,
    loading: false
};

const mutations = {
    [types.SHOWHEADER](state) {
        state.showHeader = true;
    },
    [types.HIDEHEADER](state) {
        state.showHeader = false;
    },
    [types.SHOWLOADING](state) {
        state.loading = true;
    },
    [types.HIDELOADING](state) {
        state.loading = false;
    }
};

export default {
    state,
    mutations,
    getters
}