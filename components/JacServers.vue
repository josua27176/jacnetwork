<template>
    <div class="row">
        <div class="col-md-12 mb-4" v-for="server in Servers">
            <div class="server bg-dark px-3 py-2 rounded" >
                <div class="row">
                    <div class="col-md-3">
                        <img :src="'assets/images/' + server + '.png'" width="76px">
                    </div>
                    <div class="col-md-7">
                        <h4 class="fs-22 fw-600 font-white mt-3 mb-0">{{ server }}</h4>
                        <p class="fs-16 font-green" v-if="ServersInfo[server].status === 'online'">{{ ServersInfo[server].count }}/200 Playing!</p>
                        <p class="fs-16 font-red" v-else>Server offline!</p>
                    </div>
                    <div class="col-md-2">
                        <span class="bg-green status w-100 d-block mt-4" v-if="ServersInfo[server].status === 'online'">On</span>
                        <span class="bg-red status w-100 d-block mt-4" v-else>Off</span>
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
                    this.ServersInfo = res;
                })
        }
    }
</script>