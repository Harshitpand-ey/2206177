const axios = require("axios");
const BASE_URL = "http://20.244.56.144/evaluation-service";

const fetchUsers = async (token) => {
    const response = await axios.get(`${BASE_URL}/users`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data.users;
};

const fetchUserPosts = async (userId, token) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}/posts`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data.posts || [];
};

const fetchPostComments = async (postId, token) => {
    const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`, { headers: { Authorization: `Bearer ${token}` } });
    return response.data.comments || [];
};

module.exports = { fetchUsers, fetchUserPosts, fetchPostComments };