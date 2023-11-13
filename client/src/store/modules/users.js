import axios from "axios";
import { fetchUsers } from "../../utils/api";

const state = {
    data: [],
    loading: false,
    error: false,
    page: 1,
    totalCount: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    usernameUsed: "",
};

const mutations = {
    setData(state, value) {
        state.data = value;
    },
    setUsernameUsed(state, value) {
        state.usernameUsed = value;
    },
    setLoading(state, value) {
        state.loading = value;
    },
    setError(state, value) {
        state.error = value;
    },
    setPage(state, value) {
        state.page = value;
    },
    setTotalCount(state, value) {
        state.totalCount = value;
    },
    setHasPreviousPage(state, value) {
        state.hasPreviousPage = value;
    },
    setHasNextPage(state, value) {
        state.hasNextPage = value;
    },
};

const actions = {
    async fetchUsers({ commit, state }, username) {
        const perPage = 20;
        if (username) {
            commit("setUsernameUsed", username);
            commit("setPage", 1);
        } else {
            username = state.usernameUsed;
        }
        commit("setLoading", true);
        commit("setError", false);
        try {
            const data = await fetchUsers({
                q: username,
                page: state.page,
                per_page: perPage,
            });
            commit("setData", data.items);
            commit("setTotalCount", data.total_count);
            commit("setHasPreviousPage", state.page > 1);
            commit("setHasNextPage", data.total_count > state.page * perPage);
        } catch (error) {
            console.log(error);
            commit("setError", true);
        } finally {
            commit("setLoading", false);
        }
    },

    nextPage({ commit, dispatch, state }) {
        if (state.hasNextPage) {
            commit("setPage", state.page + 1);
            dispatch("fetchUsers");
        }
    },
    previousPage({ commit, dispatch, state }) {
        if (state.hasPreviousPage) {
            commit("setPage", state.page - 1);
            dispatch("fetchUsers");
        }
    },
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
};
