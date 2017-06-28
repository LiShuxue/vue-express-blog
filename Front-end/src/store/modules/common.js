import * as types from '../mutation-types';

const state = {
    comm: {
        isCommon: true,
        message: 'test'
    }
};

const getters = {
    commConfig: state => state.comm.isCommon,
    getMessage: state => state.comm.message
};

const mutations = {
    [types.CHANGE_COMMFLAG](state, statu) {
        state.comm.isCommon = statu;
    },
    
    [types.CHANGE_MESSAGE](state, data) {
        state.comm.mesage = data;
    }
};

const actions = {
    changeCommFlagAction({commit}, statu) {
        commit(types.CHANGE_COMMFLAG, statu);
    },
    changeMessageAction({commit}, data) {
        commit(types.CHANGE_MESSAGE, data);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}