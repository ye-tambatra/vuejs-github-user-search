<template>
    <LoadingState v-if="loading" />
    <ErrorState v-else-if="error" />
    <div v-else class="container">
        <div class="row mt-4">
            <div class="col-12 col-lg-3 profile-container">
                <img
                    :src="user.avatar_url"
                    alt=""
                    class="avatarImage rounded-pill"
                />
                <h2 class="m-0 mt-3">{{ user.name }}</h2>
                <span class="lead ms-1 mb-1">{{ user.login }}</span>
                <p v-show="user.bio" class="my-2">
                    {{ user.bio }}
                </p>
                <h6 v-show="user.location">
                    <i class="fas fa-map-marker text-secondary"></i>
                    {{ user.location }}
                </h6>
                <h6 v-show="user.company">
                    <i class="fa fa-globe"></i> {{ user.company }}
                </h6>
                <h6 v-show="user.html_url">
                    <a :href="user.html_url">
                        <i class="fa fa-link"></i> {{ user.html_url }}
                    </a>
                </h6>
                <AvatarList
                    title="Followers"
                    :users="followers"
                    :totalCount="user.followers || 0"
                />
                <AvatarList
                    title="Following"
                    :users="following"
                    :totalCount="user.following || 0"
                />
            </div>

            <div class="col-12 col-lg-9 mt-4 mt-lg-0">
                <div class="row">
                    <div class="col">
                        <h3>
                            <i class="fa fa-folder me-2 text-secondary"></i>
                            Repositories ({{ user.public_repos }})
                        </h3>
                        <hr class="m-0" />
                    </div>
                </div>
                <RepoList
                    :username="username"
                    @error="error = true"
                    :repoTotalCount="user.public_repos"
                />
            </div>
        </div>
    </div>
</template>

<script>
import LoadingState from "../components/LoadingState.vue";
import ErrorState from "../components/ErrorState.vue";
import RepoListItem from "../components/RepoListItem.vue";
import AvatarList from "../components/AvatarList.vue";
import RepoList from "../components/RepoList.vue";
import { fetchFollowers, fetchFollowings, fetchUser } from "../utils/api";
import axios from "axios";

export default {
    components: {
        RepoListItem,
        LoadingState,
        ErrorState,
        RepoList,
        AvatarList,
    },

    data() {
        return {
            username: "",
            user: {},
            followers: [],
            following: [],
            loading: false,
            error: false,
        };
    },

    created() {
        this.username = this.$route.params["username"];
    },

    mounted() {
        this.fetchData();
    },

    methods: {
        // fetchFollowers() {
        //     return axios
        //         .get(
        //             "https://github-user-search-backend.onrender.com/api/users/" +
        //                 this.username +
        //                 "/followers?per_page=7"
        //         )
        //         .then((res) => res.data);
        // },

        // fetchUser() {
        //     return axios
        //         .get(
        //             "https://github-user-search-backend.onrender.com/api/users/" +
        //                 this.username
        //         )
        //         .then((res) => res.data);
        // },

        // fetchFollowing() {
        //     return axios
        //         .get(
        //             "https://github-user-search-backend.onrender.com/api/users/" +
        //                 this.username +
        //                 "/following?per_page=7"
        //         )
        //         .then((res) => res.data);
        // },

        fetchData() {
            this.loading = true;
            this.error = false;
            Promise.all([
                fetchUser(this.username),
                fetchFollowers(this.username),
                fetchFollowings(this.username),
            ])
                .then(([user, followers, following]) => {
                    this.user = user;
                    this.followers = followers;
                    this.following = following;
                })
                .catch(() => (this.error = true))
                .finally(() => (this.loading = false));
        },
    },
};
</script>

<style scoped>
.profile-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.avatarImage {
    background-color: rgb(209, 207, 207);
    width: 100%;
    max-width: 400px;
    height: auto;
    align-self: center;
}
</style>
