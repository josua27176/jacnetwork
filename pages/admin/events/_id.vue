<template>
    <div class="container mb-5">

        <div class="row">
            <div class="col-md-8">
                <h2 class="fs-36 font-white fw-700 mb-4">Edit Event</h2>
                <form @submit.prevent="">
                    <div class="row">
                        <div class="col-md-12">
                            <label class="mb-3">Event Title:</label>
                            <input type="text" name="event_name" class="mb-4"  :value="`${this.eventTitle}`">
                        </div>
                        <div class="col-md-12">
                            <label class="mb-3">Event Description:</label>
                            <textarea rows="5" class="mb-5" :value="`${this.eventBody}`"></textarea>
                        </div>
                        <div class="col-md-5">
                            <button type="submit" class="form-button bg-blue mr-4">Save</button>
                            <button @click="deleteEvent" type="submit" class="form-button bg-dark">Delete</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <h2 class="fs-36 font-white fw-700 mb-4">Registered </h2>
                <ul class="list-unstyled">
                    {{ this.users }}
                </ul>

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
              eventTitle: '',
              eventBody: '',
              users: [],
          }
        },
        methods: {
            updateEvent() {

            },
            async deleteEvent() {
                let token = this.$auth.getToken('local');
                this.$axios.$delete('/events/' + this.$route.params.id,
                        {
                            headers: {
                                Authorization: token
                            },
                        },
                    )
                    .then((res) => {
                        this.$toast.success('Event has been deleted.')
                        this.$router.push('/admin/events');
                    })
            }
        },
        created() {
            this.$axios
                .$get('/events/' + this.$route.params.id)
                .then((res) => {
                    this.eventTitle = res.title;
                    this.eventBody = res.body;
                    this.users = res.users;
                    console.log(this.users);
                })
        }
    }
</script>