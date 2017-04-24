/**
 * Created by DT274 on 2017/4/24.
 */
import * as types from './mutations-types.js'
const actions = {
    add: ({commit}, txt) => {
        commit(types.ADD, txt)
    },
    del: ({dispatch}, id) => {
        dispatch('getIdx', [types.DEL, id]);
    },
    update: ({dispatch}, arr) => {
        dispatch('getIdx', [types.UPDATE, arr])
    },
    select: ({dispatch}, arr) => {
        dispatch('getIdx', [types.SELECT, arr])
    },
    getIdx: ({commit, state}, cfg) => {
        let idx,
            bool = cfg instanceof Array,
            id = bool ? cfg[1][0] : cfg[1];

        state.todos.map((todo, index) => {
            todo.id == id && (idx = index)
        })

        if(bool) commit(cfg[0], [idx, cfg[1][1]])
        else commit(cfg[0], idx)
    },
    changeFilter: ({commit}, idx) => {
        commit(types.CHANGEFILTER, idx)
    },
    selectAll: ({commit}, bool) => {
        commit(types.SELECTALL, bool)
    },
    delSelected: ({commit}) => {
        commit(types.DELSELECTED)
    }
};


export default actions;