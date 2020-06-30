const actions = {
    /**
     * Action to log a user in.
     */
    async login({ dispatch }, { username, password, captcha}) {
        try {
            await this.$axios.post('/account/login', {
                username: username,
                password: password,
            }, {
                params: {
                    captcha: captcha
                }
            })
            dispatch(
                console.log("You're logged in")
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