<template>
    <div>
        <JacAdminNav></JacAdminNav>
        <div class="container mb-5">

            <div class="row">
                <div class="col-md-10">
                    <h2 class="fs-36 font-white fw-700 mb-4">Events</h2>
                </div>
                <div class="col-md-2">
                    <div class="button-blue mt-2 ml-auto">
                        <NuxtLink to="/admin/events/new">New</NuxtLink>
                    </div>
                </div>
                <div class="col-md-3 bg-dark rounded py-4" v-for="event in events">
                    <h4 class="fs-16 text-white fw-400 mt-0 mb-4 text-center"> {{ event.start | moment().format("MM-DD-YYYY") }}</h4>
                    <h4 class="fs-22 text-white fw-600 mb-4 text-center">{{ event.title }}</h4>
                    <div class="button-blue mx-auto">
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