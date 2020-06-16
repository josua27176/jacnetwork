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
        <!-- Announcements -->
        <div class="col-xl-8">
          <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Announcements</h4>
          <div class="row">
            <div class="col-md-12 mb-5">
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
                    <div class="col-6">
                      <p class="fs-16 font-white m-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> Administrator</p>
                    </div>
                    <div class="col-6">
                      <p class="fs-16 font-white m-0 p-0 text-md-right"><i class="fa fa-calendar-o mr-2" aria-hidden="true"></i> May 09, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-5">
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
                    <div class="col-6">
                      <p class="fs-16 font-white m-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> Administrator</p>
                    </div>
                    <div class="col-6">
                      <p class="fs-16 font-white m-0 p-0 text-md-right"><i class="fa fa-calendar-o mr-2" aria-hidden="true"></i> May 09, 2020</p>
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

        <div class="col-xl-4">
          <!-- Server List -->
          <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Server List</h4>
          <div class="row">
            <div class="col-md-12 mb-4">
              <div class="server bg-dark px-3 py-2 rounded">
                <div class="row">
                  <div class="col-md-3">
                    <img src="~assets/images/nether.png" width="76px">
                  </div>
                  <div class="col-md-7">
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Nether Minigames</h4>
                    <p class="fs-16 font-green">105/200 Playing!</p>
                  </div>
                  <div class="col-md-2">
                    <span class="bg-green status w-100 d-block mt-4">On</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-4">
              <div class="server bg-dark px-3 py-2 rounded">
                <div class="row">
                  <div class="col-md-3">
                    <img src="~assets/images/obsidian.png" width="76px">
                  </div>
                  <div class="col-md-7">
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Obsidian Server</h4>
                    <p class="fs-16 font-green">55/100 Playing!</p>
                  </div>
                  <div class="col-md-2">
                    <span class="bg-green status w-100 d-block mt-4">On</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12 mb-4">
              <div class="server bg-dark px-3 py-2 rounded">
                <div class="row">
                  <div class="col-md-3">
                    <img src="~assets/images/aqua.png" width="76px">
                  </div>
                  <div class="col-md-7">
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Aqua Games</h4>
                    <p class="fs-16 font-green">88/100 Playing!</p>
                  </div>
                  <div class="col-md-2">
                    <span class="bg-green status w-100 d-block mt-4">On</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="server bg-dark px-3 py-2 rounded">
                <div class="row">
                  <div class="col-md-3">
                    <img src="~assets/images/blaze.png" width="76px">
                  </div>
                  <div class="col-md-7">
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Blaze Games</h4>
                    <p class="fs-16 font-red">Server is restarting!</p>
                  </div>
                  <div class="col-md-2">
                    <span class="bg-red status w-100 d-block mt-4">OFF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Donations -->
          <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Server Donations</h4>
          <div class="row">
            <div class="col-md-12">
              <div class="bg-dark px-4 pt-4 rounded">
                <div class="d-header border-bottom pb-4 mb-4">
                  <p class="fs-16 font-white mb-3 p-0"><i class="fa fa-star mr-2" aria-hidden="true"></i> Donation Goal</p>
                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 41%" aria-valuenow="41" aria-valuemin="0" aria-valuemax="100">41%</div>
                  </div>
                </div>
                <div class="d-content">
                  <div class="row">
                    <div class="col-md-12 mb-3">
                      <p class="fs-16 font-white mb-3 p-0"><i class="fa fa-check-circle mr-2" aria-hidden="true"></i> Recent Donators</p>
                    </div>
                    <div class="col-md-3 mb-4">
                        <img src="https://crafatar.com/renders/head/e98a31e7-cad0-4b30-a7df-81f5dbaf2e5e.png" width="80px">
                    </div>
                    <div class="col-md-8 mb-4">
                      <h4 class="fs-20 fw-400 text-white mt-2 mb-0"><span class="fw-600 font-blue">Zyrl</span> has donated $10.00</h4>
                      <p class="fs-16 font-grey m-0 p-0">53 minutes ago</p>
                    </div>
                    <div class="col-md-3 mb-4">
                      <img src="https://crafatar.com/renders/head/d5ebbe7a-9ed1-41d8-812b-02f4a1a286f6.png" width="80px">
                    </div>
                    <div class="col-md-8 mb-4">
                      <h4 class="fs-20 fw-400 text-white mt-2 mb-0"><span class="fw-600 font-yellow">rexs123</span> has donated $10.00</h4>
                      <p class="fs-16 font-grey m-0 p-0">53 minutes ago</p>
                    </div>
                    <div class="col-md-3 mb-4">
                      <img src="https://crafatar.com/renders/head/a24092c9-af15-4798-aac8-df41ea1fec94.png" width="80px">
                    </div>
                    <div class="col-md-8 mb-4">
                      <h4 class="fs-20 fw-400 text-white mt-2 mb-0"><span class="fw-600 font-red">Rowzy</span> has donated $10.00</h4>
                      <p class="fs-16 font-grey m-0 p-0">53 minutes ago</p>
                    </div>
                  </div>
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
  name: 'Home',
  head() {
    return {
      title: 'JAC Network - Home'
    }
  },
  components: {JacNavbar, JacSlider}
}
</script>
