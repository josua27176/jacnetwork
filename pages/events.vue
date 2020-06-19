<template>
    <div>
        <div class="header-alt">
            <JacNavbar></JacNavbar>
            <div class="container">
                <div class="header-event">
                    <JacEvents></JacEvents>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-xl-8">
                    <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Current Events</h4>
                    <div class="row">
                        <div class="col-md-12 mb-5">
                            <div class="event">
                                <div class="event-header">
                                    <span class="event-category mx-auto d-block mb-3">Event Type</span>
                                    <h3 class="font-white fs-30 text-center fw-700 text-uppercase mb-5">Event Title</h3>
                                    <h4 class="fs-24 font-light text-center text-uppercase f-clarika fw-600 mt-2 mb-0">3D 21H 15M</h4>
                                    <p class="fs-18 font-light lh-2 mb-4 text-center mt-0">Pre-registration Countdown</p>
                                </div>
                                <div class="event-content bg-dark px-5 pb-4 mb-0">
                                    <h4 class="fs-22 text-white fw-700 text-uppercase">Title One</h4>
                                    <p class="fs-18 font-light lh-2 mb-4">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
                                    <p class="fs-18 font-white lh-2 blockquote mb-4"><span class="d-block ml-4">Dictum ut maecenas orci, morbi. Molestie porttitor turpis sit tortor lacus, purus arcu sed commodo. Et scelerisque a vel, pellentesque et diam nullam. Eget ipsum erat varius amet pellentesque. Orci enim sed arcu vestibulum. </span></p>
                                    <p class="fs-18 font-light lh-2">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
                                </div>
                                <div class="event-footer px-5 py-3">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="fs-16 font-white mt-2 mb-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> Administrator</p>
                                        </div>
                                        <div class="col-3">
                                            <div class="button-sm-round w-100">
                                                <a href="#">Leaderboard</a>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="button-sm-round w-100">
                                                <a href="#">Register</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mb-5">
                            <div class="event">
                                <div class="event-header">
                                    <span class="event-category-o mx-auto d-block mb-3">Event Type</span>
                                    <h3 class="font-white fs-30 text-center fw-700 text-uppercase mb-5">Event Title</h3>
                                    <span class="event-status bg-green d-block mx-auto">Event Is Live</span>
                                </div>
                                <div class="event-content bg-dark px-5 pb-4 mb-0">
                                    <h4 class="fs-22 text-white fw-700 text-uppercase">Title One</h4>
                                    <p class="fs-18 font-light lh-2 mb-4">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
                                    <p class="fs-18 font-white lh-2 blockquote mb-4"><span class="d-block ml-4">Dictum ut maecenas orci, morbi. Molestie porttitor turpis sit tortor lacus, purus arcu sed commodo. Et scelerisque a vel, pellentesque et diam nullam. Eget ipsum erat varius amet pellentesque. Orci enim sed arcu vestibulum. </span></p>
                                    <p class="fs-18 font-light lh-2">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
                                </div>
                                <div class="event-footer px-5 py-3">
                                    <div class="row">
                                        <div class="col-7">
                                            <p class="fs-16 font-white mt-2 mb-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> Administrator</p>
                                        </div>
                                        <div class="col-3">
                                            <div class="button-sm-round w-100">
                                                <a href="#">Leaderboard</a>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="button-sm-round w-100">
                                                <a href="#">Register</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 mb-5">
                            <a class="d-block text-center text-uppercase fs-22 text-white fw-600 f-clarika">Load More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import JacNavbar from '../components/JacNavbar';
    import JacEvents from '../components/JacEvents';

    export default {
        layout: 'default',
        name: 'Home',
        head() {
            return {
                title: 'JAC Network - Events'
            }
        },
        components: {JacNavbar, JacEvents}
    }
</script>