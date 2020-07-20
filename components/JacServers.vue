<template>
    <div class="row">
    <div class="col-md-12 mb-4" v-for="server in Servers">
        <div class="server bg-dark px-3 py-2 rounded" >
            <div class="row">
                <div class="col-md-3">
                    <img :src="'assets/images/' + server + '.png'" width="76px">
                </div>
                <div class="col-md-7">
<<<<<<< Updated upstream
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">HyWar Modded Warfare</h4>
                    <p class="fs-16 font-green">{{ HyWarCount }}/100 Playing!</p>
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
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">Modded Hub</h4>
                    <p class="fs-16 font-green">{{ ModHubCount }}/100 Playing!</p>
                </div>
                <div class="col-md-2">
                    <span class="bg-green status w-100 d-block mt-4">On</span>
=======
                    <h4 class="fs-22 fw-600 font-white mt-3 mb-0">{{ server }}</h4>
                    <p class="fs-16 font-green" v-if="ServersInfo[server].status === 'online'">{{ ServersInfo[server].count }}/200 Playing!</p>
                    <p class="fs-16 font-red" v-else>Server offline!</p>
                </div>
                <div class="col-md-2">
                    <span class="bg-green status w-100 d-block mt-4" v-if="ServersInfo[server].status === 'online'">On</span>
                    <span class="bg-red status w-100 d-block mt-4" v-else>Off</span>
>>>>>>> Stashed changes
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
                Servers: [],
                ServersInfo: []
            }
        },
        created() {
            this.$axios
                .$get(`/status`)
                .then((res) => {
                    this.Servers = Object.keys(res);
                    console.log(this.Servers);
                    this.ServersInfo = res;

                })
        }
    }
</script>