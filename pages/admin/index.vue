<template>
    <div>
        <div class="container mb-5">
            <div class="row">
                <div class="col-md-9">
                    <h2 class="fs-36 font-white fw-700 mb-4">Announcements</h2>
                </div>
                <div class="col-md-3">
                    <div class="button-blue mt-2 ml-auto">
                        <NuxtLink to="/admin/announcement/new">New</NuxtLink>
                    </div>
                </div>
                <div class="col-md-12 bg-dark rounded py-5 px-5 mb-5" v-for="post in posts">
                    <h2 class="fs-22 text-white fw-600 mt-0 mb-2"> {{ post.title }}</h2>
                    <h4 class="fs-18 text-white mb-4">{{ new Date(post.timestamp * 1000)  }}</h4>
                    <p class="fs-18 text-white lh-25 mb-4">{{ post.body }}</p>
                    <div class="button-group d-flex">
                        <div class="button-outline float-md-left">
                            <nuxt-link :to="`/admin/announcement/${post.id}`">Edit</nuxt-link>
                        </div>
                        <div class="button-blue float-md-left ml-4">
                            <a href="#">Delete</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import moment from "moment";


    export default {
        name: 'Admin',
        layout: 'admin',
        middleware: 'auth',
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