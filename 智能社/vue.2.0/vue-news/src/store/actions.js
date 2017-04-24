/**
 * Created by Administrator on 2017/4/23.
 */
import * as types from './types';

export default {
    showHeader: ({commit}) => {
        commit(types.SHOWHEADER);
    },
    hideHeader: ({commit}) => {
        commit(types.HIDEHEADER);
    },
    showLoading: ({commit}) => {
        commit(types.SHOWLOADING);
    },
    hideLoading: ({commit}) => {
        commit(types.HIDELOADING)
    }
}