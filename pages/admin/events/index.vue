<template>
    <div>
        <JacAdminNav></JacAdminNav>
        <div class="container">
            <h2 class="fs-36 font-white fw-700 mb-4">Events</h2>
            <div class="row">
                <div class="col-md-3" v-for="event in events">
                    <h4 class="fs-22 text-white fw-600 mb-3">{{ event.title }}</h4>
                    <h4 class="fs-14 text-white fw-600 mb-3">{{ event.start }}</h4>
                    <p class="fs-16 text-white fw-400 lh-25">{{ event.body }}</p>
                    <div class="button-blue">
                        <a href="#">Edit</a>
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
        middleware: 'auth',
        components: {JacAdminNav},
        data() {
            return {
                events: []
            }
        },
        created() {
            this.$axios
                .$get(`/events`)
                .then((res) => {

                    this.events = res.events;
                    console.log(this.events);
                })
        },
    }
</script>