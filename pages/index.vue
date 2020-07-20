<template>
  <div>
    <div class="header">
      <JacNavbar></JacNavbar>
      <div class="header-inner">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 mb-5">
              <h3 class="fs-48 font-white fw-700 mb-4">Welcome to the new <br>JAC Network Site!</h3>
              <p class="fs-20 font-light lh-2 mb-4">We just upgraded!!!! again..... You heard right folks more upgrades have arrived! We have just updated to our new front-end as well as upgraded our proxy software as well for server join time!</p>
              <div class="button-group d-flex">
                <div class="button-blue float-md-left mr-4">
                  <a @click="copyIP">Copy IP</a>
                </div>
                <div class="button-outline float-md-left">
                  <a href="/events">Events</a>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5 d-none d-xl-flex">
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
            <div class="col-md-12 mb-5" v-for="post in posts">
              <div class="announcement">
                <div class="a-header">
                    <h3 class="font-white fs-30 text-center fw-700 text-uppercase mb-0">{{ post.title }}</h3>
                    <p class="fs-18 font-light lh-2 mb-4 text-center">3 Minute Read</p>
                </div>
                <div class="a-content bg-dark px-5 pb-4 mb-0 pt-5">
                  <h4 class="fs-22 text-white fw-700 text-uppercase">{{ post.title }}</h4>
                  <p class="fs-18 font-light lh-2 mb-4">{{ post.body }}</p>
                </div>
                <div class="a-footer px-5 py-3">
                  <div class="row">
                    <div class="col-6">
                      <p class="fs-16 font-white m-0 p-0"><i class="fa fa-user-circle mr-2" aria-hidden="true"></i> {{ post.author }}</p>
                    </div>
                    <div class="col-6">
                      <p class="fs-16 font-white m-0 p-0 text-md-right"><i class="fa fa-calendar-o mr-2" aria-hidden="true"></i> {{ postTime(post.timestamp) }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <!-- Server List -->
          <h4 class="text-white fw-700 fs-24 text-uppercase mt-5 mb-4">Server List</h4>
          <JacServers></JacServers>
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
import moment from "moment";
import JacServers from "../components/JacServers";

export default {
  layout: 'default',
  name: 'Home',
  head() {
    return {
      title: 'JAC Network - Home'
    }
  },
  components: {JacServers, JacNavbar, JacSlider},
  data() {
    return {
      posts: [],
      featured: [],
      serverIP: 'test',
    }
  },
  created() {
    this.$axios
            .$get(`/status`)
            .then((res) => {
              this.HyWarCount = res.HyWar.count;
              this.SimplyPixelCount = res.SimplyPixel.count;
              this.AoSCount = res.AoS.count;
              this.ModHub = res.ModHub.count;
            });
    this.$axios
            .$get(`/posts`)
            .then((res) => {
              this.posts = res.posts;
            })

  },
  methods: {
    postTime (value) {
      return moment.unix(value).format("MMM DD YYYY");
    },
    async copyIP() {
      let textToCopy = 'play.jac.network';
      try {
        await navigator.clipboard.writeText(textToCopy);
        this.$toast.success('Copied to clipboard.')

      } catch (err) {
        console.error('Failed to copy: ', err);
      }

    }
  }

}
</script>
