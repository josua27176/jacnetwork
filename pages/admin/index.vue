<template>
    <div>
        <JacAdminNav></JacAdminNav>
        <div class="container mb-5">
            <h2 class="fs-36 font-white fw-700 mb-4">Announcements</h2>
            <div class="col-md-12 bg-dark rounded py-5 px-5 mb-5" v-for="post in posts">
                <h2 class="fs-22 text-white fw-600 mt-0 mb-2"> {{ post.title }}</h2>
                <h4 class="fs-18 text-white mb-4">{{ post.timestamp | moment().format("MMM DD, YYYY") }}</h4>
                <p class="fs-18 text-white lh-25 mb-4">{{ post.body }}</p>
                <div class="button-group d-flex">
                    <div class="button-outline float-md-left">
                        <a href="/events">Edit</a>
                    </div>
                    <div class="button-blue float-md-left ml-4">
                        <a href="#">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import JacAdminNav from "@/components/JacAdminNav";
    export default {
        name: 'Admin',
        middleware: 'auth',
        components: {JacAdminNav},
        data() {
            return {
                posts: []
            }
        },
        created() {
            this.$axios
                .$get(`/posts`)
                .then((res) => {
                    this.posts = res.posts;
                })
        },
    }
</script>