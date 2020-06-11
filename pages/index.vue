<template>
  <div>
    <div class="header">
      <JacNavbar></JacNavbar>
      <div class="header-inner">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h3 class="fs-36 font-white">Urna morbi dictum sodales enim!</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JacNavbar from '../components/JacNavbar';
export default {
  layout: 'default',
  head() {
    return {
      title: 'JAC Network - Home'
    }
  },
  components: {JacNavbar}
}
</script>
