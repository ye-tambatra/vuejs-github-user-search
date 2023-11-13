const BACKEND_URL = import.meta.env.BACKEND_URL || "http://localhost:8000";

export function fetchUser(username) {
    return axios
        .get(`${BACKEND_URL}/api/users/${username}`)
        .then((res) => res.data);
}

export function fetchFollowers(username) {
    return axios
        .get(`${BACKEND_URL}/api/users/${username}/followers?per_page=7`)
        .then((res) => res.data);
}

export function fetchFollowings(username) {
    return axios
        .get(`${BACKEND_URL}/api/users/${username}/following?per_page=7`)
        .then((res) => res.data);
}

export function fetchUsers(params) {
    const { q, page, per_page } = params;

    return axios
        .get(`${BACKEND_URL}/api/search/users`, {
            params: {
                q,
                page,
                per_page,
            },
        })
        .then((res) => res.data);
}
