<template>
  <div class="votes__voteSection">
    <div class="container">
      <div class="text-center pb-4">
        <h1 class="votes__voteSection__heading">Votes</h1>
        <p class="fs-14 votes__voteSection__text">
          Here you may vote on your favorite Minecraft server between Just
          Enough Stuff, Hywar Classic, Age of Sorcery, and JAC: Modern Rust
          Server. Become a Top Voter, and even make the Overall Leaderboard!
        </p>
      </div>

      <div class="row votes__voteSection__row">
        <div class="col-lg-8 col-12 order-1 order-lg-0">
          <div class="votes__voteSection__minecraftVoting bg-dark">
            <div
              class="votes__voteSection__minecraftVoting__headerImage position-relative"
            >
              <h1
                class="fs-22 fw-800 votes__voteSection__minecraftVoting__headerImage__text position-absolute"
              >
                MINECRAFT VOTING
              </h1>
            </div>
            <div
              class="d-flex flex-column flex-md-row justify-content-between mb-lg-3 mb-5"
              v-for="vote in votes"
              :key="vote.name"
            >
              <div
                class="d-flex flex-column flex-md-row justify-content-between"
              >
                <div class="ml-md-3 text-center text-lg-left mb-2 mb-lg-0">
                  <img
                    class="votes__voteSection__minecraftVoting__image"
                    :src="vote.imageUrl"
                    alt=""
                  />
                </div>
                <div class="ml-md-5 text-center text-md-left">
                  <h5
                    class="votes__voteSection__minecraftVoting__heading fs-18 fw-800 mt-0"
                  >
                    {{ vote.heading }}
                  </h5>
                  <p
                    class="votes__voteSection__minecraftVoting__subtext fw-500 fs-14"
                  >
                    {{ vote.subtext }}
                  </p>
                </div>
              </div>
              <div
                class="votes__voteSection__minecraftVoting__voteBtnsDiv d-flex flex-column mr-md-3"
              >
                <button
                  class="mb-2 btn btn-outline-light fs-12 votes__voteSection__minecraftVoting__button"
                >
                  {{ vote.vote1Text }}
                </button>
                <button
                  class="mb-2 fs-12 btn btn-outline-light votes__voteSection__minecraftVoting__button"
                >
                  {{ vote.vote2Text }}
                </button>
                <button
                  class="mb-2 fs-12 btn btn-outline-light votes__voteSection__minecraftVoting__button"
                >
                  {{ vote.vote3Text }}
                </button>
              </div>
            </div>
          </div>
          <div class="votes__voteSection__minecraftVoting__bottom"></div>
        </div>
        <div class="col-lg-4 col-12 order-0 order-lg-1 mb-4 mb-lg-0">
          <div class="votes__voteSection__leaderboard">
            <h5
              class="votes__voteSection__leaderboard__heading fw-800 fs-18 mb-3 text-sm-left text-center"
            >
              OVERALL LEADERBOARD
            </h5>
            <div class="votes__voteSection__leaderboard__box">
              <div class="ml-3 pt-3">
                <div
                  class="d-flex align-items-center mb-3"
                  v-for="data in leaderboard"
                  :key="data.name"
                >
                  <div><img class="img-fluid" :src="data.imageUrl" /></div>
                  <h5 class="fs-16 ml-2">
                    <span
                      class="votes__voteSection__leaderboard__box__name fw-800"
                      >{{ data.name }}</span
                    >
                    <span
                      class="ml-1 votes__voteSection__leaderboard__box__topleader fw-800"
                      >is a top leader!</span
                    >
                  </h5>
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
export default {
  data() {
    return {
      votes: [
        {
          heading: "JUST ENOUGH STUFF",
          subtext: "Vote for Just Enough Stuff!",
          imageUrl: require("../../assets/images/minecraft-voting-img1.png"),
          vote1Text: "VOTE #1",
          vote2Text: "VOTE #2",
          vote3Text: "VOTE #3",
        },
        {
          heading: "HYWAR CLASSIC",
          subtext: "Vote for Hywar Classic!",
          imageUrl: require("../../assets/images/minecraft-voting-img2.png"),
          vote1Text: "VOTE #1",
          vote2Text: "VOTE #2",
          vote3Text: "VOTE #3",
        },
        {
          heading: "AGE OF SORCERY",
          subtext: "Vote for Age of Sorcery!",
          imageUrl: require("../../assets/images/minecraft-voting-img3.png"),
          vote1Text: "VOTE #1",
          vote2Text: "VOTE #2",
          vote3Text: "VOTE #3",
        },
        {
          heading: "JAC: MODERN RUST SERVER",
          subtext: "Vote for JAC: Modern Rust Server!",
          imageUrl: require("../../assets/images/minecraft-voting-img4.png"),
          vote1Text: "VOTE #1",
          vote2Text: "VOTE #2",
          vote3Text: "VOTE #3",
        },
      ],
      leaderboard: [
        {
          name: "Zyrl",
          imageUrl: require("../../assets/images/leaderboard-img1.png"),
        },
        {
          name: "rexs123",
          imageUrl: require("../../assets/images/leaderboard-img2.png"),
        },
        {
          name: "Rowzy",
          imageUrl: require("../../assets/images/leaderboard-img3.png"),
        },
      ],
    };
  },
};
</script>

<style>
</style>