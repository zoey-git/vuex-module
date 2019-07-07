import {ADD_COUNT, SUB_COUNT, DEL_COUNT} from './types'

export default {
    [ADD_COUNT](state) {
        state.count++
    },
    [SUB_COUNT](state) {
        state.count--
    },
    [DEL_COUNT](state) {
        state.count = 0
    }
}