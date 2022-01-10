export default {
    register: 'users',
    getProfile: (username: string) => `users/${username}`,
    getUsers: 'users',
    getTop10: 'users/top-10',
    editProfile: 'users',
    changePassword: 'users/password'
};