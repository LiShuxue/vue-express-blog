import * as types from '../mutation-types';

const state = {
    token: null
};

const getters = {
    getToken: state => state.token
};

const mutations = {
    [types.CHANGE_TOKEN](state, token) {
        localStorage.token = token;
        state.token = token;
    }
};

const actions = {
    // mutations 用来同步改变state数据，而action则可以进行异步操作来改变state。比如下面
    // testAction({commit}, data){
    //     setTimeout( ()=>{                //mutations是同步的，如果在mutations中也这样写的话，并不会起作用
    //         commit(types.CHANGE_TOKEN, data);
    //     }, 1000);
    // },

    changeTokenAction({commit}, token) {
        commit(types.CHANGE_TOKEN, token);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}