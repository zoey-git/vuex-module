import {ADD_COUNT, SUB_COUNT, DEL_COUNT} from './types'

export default {
    [ADD_COUNT]({state, commit}) {
        if (state.count < 5) {
            commit(ADD_COUNT)
        }
    },
    [SUB_COUNT]({state, commit}) {
        if (state.count > 0) {
            commit(SUB_COUNT)
        }
    },
    [DEL_COUNT]({commit}) {
        commit(DEL_COUNT)
    }
}