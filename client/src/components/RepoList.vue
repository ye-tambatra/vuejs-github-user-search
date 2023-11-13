<template>
    <LoadingState v-if="loading" />
    <div v-else-if="repos.length == 0" class="row my-3">
        <div class="col">
            <span class="lead">No repository</span>
        </div>
    </div>
    <div v-else>
        <div
            class="row row-cols-1 row-cols-lg-2 g-3 py-3 d-flex align-items-stretch"
        >
            <div class="col" v-for="repo in repos" :key="repo.id">
                <RepoListItem :repo="repo" />
            </div>
        </div>
        <div class="row my-2" v-if="hasMore">
            <div class="col text-end">
                <hr class="my-1" />
                <button class="btn text-primary" @click="fetchRepos">
                    Load more
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import RepoListItem from "./RepoListItem.vue";
import LoadingState from "./LoadingState.vue";
import { computed, onMounted } from "@vue/runtime-core";
import { ref } from "vue";
import { fetchRepos as apiUtilFetchRepos } from "../utils/api";

export default {
    components: {
        RepoListItem,
        LoadingState,
    },

    props: {
        username: {
            type: String,
            required: true,
        },
        repoTotalCount: {
            type: Number,
            default: 0,
        },
    },

    setup(props, context) {
        const repos = ref([]);
        const loading = ref(false);
        const page = ref(1);
        const perPage = 7;
        const hasMore = computed(
            () => props.repoTotalCount > repos.value.length
        );

        onMounted(() => {
            fetchRepos();
        });

        function fetchRepos() {
            if (hasMore.value) {
                loading.value = true;
                apiUtilFetchRepos({
                    username: props.username,
                    page: page.value,
                    per_page: perPage,
                })
                    .then((data) => {
                        repos.value = [...repos.value, ...data];
                        page.value++;
                    })
                    .catch(() => {
                        context.emit("error");
                    })
                    .finally(() => (loading.value = false));
            }
        }

        return {
            repos,
            loading,
            page,
            perPage,
            hasMore,
            fetchRepos,
        };
    },
};
</script>

<style></style>
