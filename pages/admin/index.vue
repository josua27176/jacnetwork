<template>
    <div>
        <button @click="logout">test</button>
    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    export default {
        name: 'Admin',
        middleware: 'auth',
        methods: {
            async logout() {
                await this.$auth.logout();
            },
        },
    }
</script>