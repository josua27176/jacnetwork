<template>
    <div class="container mb-5">
        <h2 class="fs-36 font-white fw-700 mb-4">Edit Announcement</h2>
        <form @submit.prevent="">
            <div class="row">
                <div class="col-md-12">
                    <label class="mb-3">Announcement Title:</label>
                    <input type="text" name="event_name" class="mb-4"  :value="`${this.postTitle}`">
                </div>
                <div class="col-md-12">
                    <label class="mb-3">Announcement Description:</label>
                    <textarea rows="5" class="mb-5" :value="`${this.postBody}`"></textarea>
                </div>
                <div class="col-md-5">
                    <button type="submit" class="form-button bg-blue mr-4">Save</button>
                    <button @click="deletePost" type="submit" class="form-button bg-dark">Delete</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        middleware: 'auth',
        layout: 'admin',
        data() {
            return {
                postTitle: '',
                postBody: '',
            }
        },
        methods: {
            updateEvent() {

            },
            async deletePost() {
                let token = this.$auth.getToken('local');
                this.$axios.$delete('/posts/' + this.$route.params.id,
                    {
                        headers: {
                            Authorization: token
                        },
                    },
                )
                    .then((res) => {
                        this.$toast.success('Announcement has been deleted.')
                        this.$router.push('/admin/');
                    })
            }
        },
        created() {
            this.$axios
                .$get('/posts/' + this.$route.params.id)
                .then((res) => {
                    this.postTitle = res.title;
                    this.postBody = res.body;
                })
        }
    }
</script>