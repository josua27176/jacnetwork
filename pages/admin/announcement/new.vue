<template>
    <div>
        <div class="container mb-5">
            <div class="col-md-8">
                <h2 class="fs-36 font-white fw-700 mb-4">Create New Announcement</h2>
                <form @submit.prevent="newEvent">
                    <label class="mb-3">Announcement Title:</label>
                    <input type="text" name="event_name" v-model="postTitle" class="mb-4">
                    <label class="mb-3">Announcement Description:</label>
                    <textarea v-model="postBody" rows="5" class="mb-5"></textarea>
                    <button type="submit" class="form-button bg-blue">Save</button>
                </form>
            </div>
        </div>
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
                postDate: ''
            }
        },
        methods: {
            async newEvent() {
                let token = this.$auth.getToken('local');
                this.$axios.post('/posts', {
                        title: this.postTitle,
                        body: this.postBody,
                    }, {
                        headers: {
                            Authorization: token
                        },
                    },
                )
                    .then(() => {
                        this.$toast.success('Announcement has been created.');
                        this.$router.push('/admin/');
                    })
            }
        },
    }
</script>