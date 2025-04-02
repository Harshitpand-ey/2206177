const { fetchUsers, fetchUserPosts } = require("../services/apiService");

const getTopUsers = async (req, res) => {
    try {
        const token = req.apiToken;
        const users = await fetchUsers(token);
        const postCounts = {};

        await Promise.all(Object.keys(users).map(async (userId) => {
            const posts = await fetchUserPosts(userId, token);
            postCounts[userId] = posts.length;
        }));

        const topUsers = Object.entries(postCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([userId, count]) => ({ id: userId, name: users[userId], posts: count }));

        res.json(topUsers);
    } catch (error) {
        res.status(500).json({ error: "Error fetching top users" });
    }
};

module.exports = { getTopUsers };