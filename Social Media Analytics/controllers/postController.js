const { fetchUsers, fetchUserPosts, fetchPostComments } = require("../services/apiService");

const getPosts = async (req, res) => {
    try {
        const token = req.apiToken;
        const type = req.query.type;
        if (!type || !["latest", "popular"].includes(type)) {
            return res.status(400).json({ error: "Invalid type parameter" });
        }

        const users = await fetchUsers(token);
        let allPosts = [];

        await Promise.all(Object.keys(users).map(async (userId) => {
            const posts = await fetchUserPosts(userId, token);
            allPosts = allPosts.concat(posts);
        }));

        if (type === "latest") {
            allPosts.sort((a, b) => b.id - a.id);
            return res.json(allPosts.slice(0, 5));
        }

        const postCommentCounts = {};
        await Promise.all(allPosts.map(async (post) => {
            const comments = await fetchPostComments(post.id, token);
            postCommentCounts[post.id] = comments.length;
        }));

        const maxComments = Math.max(...Object.values(postCommentCounts));
        const popularPosts = allPosts.filter(post => postCommentCounts[post.id] === maxComments);

        res.json(popularPosts);
    } catch (error) {
        res.status(500).json({ error: "Error fetching posts" });
    }
};

module.exports = { getPosts };