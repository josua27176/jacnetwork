<template>
    <div class="row">
    <div class="col-md-12 mb-4">
        <div class="server bg-dark px-3 py-2 rounded">
            <div class="row">
                <div class="col-md-3">
                    <img src="~assets/images/nether.png" width="76px">
                </div>
                <div class="col-md-7">
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">HyWar Warfare</h4>
                    <p class="fs-16 font-green">{{ HyWarCount }}/200 Playing!</p>
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
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Age of Sorcery</h4>
                    <p class="fs-16 font-green">{{AoSCount}}/100 Playing!</p>
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
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Simply Pixel</h4>
                    <p class="fs-16 font-green">{{ SimplyPixelCount }}/100 Playing!</p>
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
</template>
<script>
    export default {
        name: 'JacServers',
        data() {
            return {
                SimplyPixelCount: null,
                AoSCount: null,
                HyWarCount: null,
                ModHubCount: null,
                SimplyPixelStatus: null,
                AoSStatus: null,
                HyWarStatus: null,
                ModHubStatus: null,
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
                })
        }
    }
</script>