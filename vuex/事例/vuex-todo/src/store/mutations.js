/**
 * Created by DT274 on 2017/4/24.
 */
import * as types from './mutations-types.js'

const mutations = {
    [types.ADD](state, txt) {
        state.id++;
        state.todos.push({
            text: txt,
            selected: !1,
            id: state.id
        })
    },
    [types.DEL]: (state, idx) => {
        return state.todos.splice(idx, 1)
    },
    [types.UPDATE]: (state, arr) => {
        return state.todos[arr[0]].text = arr[1]
    },
    [types.SELECT]: (state, arr) => {
        return state.todos[arr[0]].selected = arr[1]
    },
    [types.CHANGEFILTER](state, idx) {
        return state.filter = idx;
    },
    [types.DELSELECTED](state) {
        state.todos = state.todos.filter((todo) => {
            return !todo.selected
        })
    },
    [types.SELECTALL](state, bool) {
        state.todos = state.todos.map((todo)=>{
            todo.selected = bool
            return todo
        })
    }
};


export default mutations