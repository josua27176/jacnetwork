<template>
  <div>
    <div class="header">
      <JacNavbar></JacNavbar>
      <div class="header-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
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
            <div class="col-md-6">
              <JacSlider></JacSlider>
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
