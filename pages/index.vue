<template>
  <div>
    <div class="header">
      <JacNavbar></JacNavbar>
      <div class="header-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-6 mb-5">
              <h3 class="fs-48 font-white fw-700 mb-4">Urna morbi dictum <br> sodales enim!</h3>
              <p class="fs-20 font-light lh-2">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
              <div class="button-group d-flex">
                <div class="button-blue float-md-left mr-md-4">
                  <a href="#">Copy IP</a>
                </div>
                <div class="button-outline float-md-left">
                  <a href="/events">Events</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <JacSlider></JacSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- Announcement -->
        <div class="col-md-8">
          <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Announcements</h4>
          <div class="announcement">
            <div class="a-header">
              <img src="~assets/images/a-header-bg.png" class="w-100">
              <div class="a-info">
                <h3 class="font-white fs-30 text-center fw-700 text-uppercase mb-0">Announcement Title</h3>
                <p class="fs-18 font-light lh-2 mb-4 text-center">3 Minute Read</p>
              </div>
            </div>
            <div class="a-content bg-dark px-5 pb-4 mb-0">
              <h4 class="fs-22 text-white fw-700 text-uppercase">Title One</h4>
              <p class="fs-18 font-light lh-2 mb-4">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
              <p class="fs-18 font-white lh-2 blockquote mb-4"><span class="d-block ml-4">Dictum ut maecenas orci, morbi. Molestie porttitor turpis sit tortor lacus, purus arcu sed commodo. Et scelerisque a vel, pellentesque et diam nullam. Eget ipsum erat varius amet pellentesque. Orci enim sed arcu vestibulum. </span></p>
              <p class="fs-18 font-light lh-2">Malesuada tincidunt in nunc egestas sed velit. Id et vitae vitae pellentesque dignissim amet enim. Fringilla consequat scelerisque aliquet elit. Augue congue volutpat vitae. Fringilla consequat scelerisque aliquet elit.</p>
            </div>
            <div class="a-footer px-5 py-3">
              <div class="row">
                <div class="col-md-8">
                  <p class="fs-16 font-white m-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> Administrator</p>
                </div>
                <div class="col-md-4">
                  <p class="fs-16 font-white m-0 p-0 text-md-right"><i class="fa fa-calendar-o mr-2" aria-hidden="true"></i> May 09, 2020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JacNavbar from '../components/JacNavbar';
import JacSlider from '../components/JacSlider';

export default {
  layout: 'default',
  head() {
    return {
      title: 'JAC Network - Home'
    }
  },
  components: {JacNavbar, JacSlider}
}
</script>
