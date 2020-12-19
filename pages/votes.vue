<template>
  <div class="votes">
    <!-- navbar -->
    <div class="header">
      <JacNavbar></JacNavbar>
      <!-- Hero Section -->
      <heroSection />
    </div>
    <!-- votes section -->
    <votesSection />

    <!-- top voters section -->
    <topVoters />

    <!-- loadmore -->
  </div>
</template>

<script>
import JacNavbar from "../components/JacNavbar";
import heroSection from "../components/votes/herosection";
import votesSection from "../components/votes/votesSection";
import topVoters from "../components/votes/topvotersSection";

export default {
  components: { JacNavbar, heroSection, votesSection, topVoters },
};
</script>

<style>
</style>