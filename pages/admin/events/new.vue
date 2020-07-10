<template>
    <div>
        <div class="container mb-5">
            <div class="col-md-8">
                <h2 class="fs-36 font-white fw-700 mb-4">Create New Event</h2>
                <form @submit.prevent="newEvent">
                    <label class="mb-3">Event Title:</label>
                    <input type="text" name="event_name" v-model="eventName" class="mb-4">

                    <label class="mb-3">Event Start:</label>
                    <input type="datetime-local" class="mb-4" name="event_start" v-model="eventStart">

                    <label class="mb-3">Event Description:</label>
                    <textarea v-model="eventDescription" rows="5" class="mb-5"></textarea>
                    <button type="submit" class="form-button bg-blue">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import moment from "moment";
    export default {
        layout: 'admin',
        middleware: 'auth',
        data() {
            return {
                eventName: '',
                eventDescription: '',
                eventStart: '',
            }
        },
        methods: {
            async newEvent() {
                let token = this.$auth.getToken('local');
                this.$axios.post('/events', {
                    title: this.eventName,
                    body: this.eventDescription,
                    start: moment(this.eventStart).unix(),
                    }, {
                        headers: {
                            Authorization: token
                        },
                    },
                )
                    .then(() => {
                        this.$toast.success('Event has been created.')
                        this.$router.push('/admin/events');
                    })
            }
        },
    }
</script>