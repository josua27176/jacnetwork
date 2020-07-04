<template>
    <div>
        <JacAdminNav></JacAdminNav>
        <div class="container">
            <div class="col-md-8">
                <h2 class="fs-36 font-white fw-700 mb-4">Create New Event</h2>
                <form @submit.prevent="newEvent">
                    <label class="mb-3">Event Title:</label>
                    <input type="text" name="event_name" v-model="eventName" class="mb-4">
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
    import JacAdminNav from "@/components/JacAdminNav";

    export default {
        middleware: 'auth',
        components: {JacAdminNav},
        data() {
            return {
                eventName: '',
                eventDescription: '',
            }
        },
        methods: {
            async newEvent() {
                let token = this.$auth.getToken('local');
                try {
                    this.$axios.post('/events', {
                            title: this.eventName,
                            body: this.eventDescription,
                            start: 1591969700601,
                        }, {
                            headers: {
                                Authorization: token
                            },
                        },
                    );
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>