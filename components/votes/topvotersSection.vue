<template>
  <div class="votes__topvoters mt-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12">
          <div class="votes__topvoters__image position-relative">
            <h1
              class="fs-22 fw-800 votes__topvoters__image__text position-absolute"
            >
              TOP VOTERS
            </h1>
          </div>

          <div
            class="d-flex align-content-center mb-3 mt-3 mt-md-0 votes__topvoters__box bg-dark"
            v-for="vote in votes"
            :key="vote.name"
          >
            <div
              class="d-flex flex-column align-items-center w-100 flex-md-row mt-3 mt-md-0"
            >
              <div class="ml-md-3"><img :src="vote.imageUrl" alt="" /></div>
              <div class="ml-md-5 text-center text-md-left mt-3 mt-md-0">
                <h5 class="votes__topvoters__title fs-18 fw-800 mt-0">
                  {{ vote.heading }}
                </h5>
                <p class="votes__topvoters__subtitle fw-500 fs-14">
                  {{ vote.subtext }} is the top voter!
                </p>
              </div>
            </div>
          </div>
          <div class="text-center mt-2 mb-4">
            <a
              href="#"
              class="text-white fs-12 fw-500 votes__topvoters__loadmore"
              >LOAD MORE</a
            >
          </div>
        </div>
        <div class="col-4 d-lg-none"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      votes: [
        {
          heading: "JUST ENOUGH STUFF",
          subtext: "Zyrl",
          imageUrl: require("../../assets/images/minecraft-voting-img1.png"),
        },
        {
          heading: "HYWAR CLASSIC",
          subtext: "Rexs123",
          imageUrl: require("../../assets/images/minecraft-voting-img2.png"),
        },
        {
          heading: "AGE OF SORCERY",
          subtext: "Rowzy",
          imageUrl: require("../../assets/images/minecraft-voting-img3.png"),
        },
        {
          heading: "JAC: MODERN RUST SERVER",
          subtext: "Zyrexzy12",
          imageUrl: require("../../assets/images/minecraft-voting-img4.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>