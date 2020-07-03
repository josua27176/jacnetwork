const actions = {
    /**
     * Action to log a user in.
     */
    async login({ dispatch }, { username, password, captcha}) {
        try {
            this.$auth.loginWith('local', {
                data: {
                    username: username,
                    password: password
                },
                params: {
                    captcha: captcha
                }
            });
            this.$router.push(this.localePath({ path: 'admin' }))
        } catch (error) {
            console.log(error)
        }
    },
    async logout({ dispatch }) {
        try {
            await this.$auth.logout();
            dispatch(
                console.log("You're logged out"),
            )
        } catch (error) {
            console.log(error)
        }
    },
    async register({ dispatch }, { username, password, email }) {
        try {
            const data = {
                username,
                password,
                email
            }
            await this.$axios.post('/auth/register', data)
            dispatch('login', { username, password })
        } catch (error) {
            console.log(error)
        }
    }
}

export default {
    namespaced: true,
    actions
}