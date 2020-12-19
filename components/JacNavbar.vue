<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <div class="container">
      <a class="navbar-brand mr-0 mr-lg-3 ml-1 ml-sm-0" href="/">
        <img src="~assets/images/logo.svg" alt="JAC Network" />
      </a>
      <ul class="navbar-nav ml-auto d-none d-lg-flex">
        <li class="nav-item mr-xl-5 mr-sm-3">
          <NuxtLink to="/" class="nav-link">Home</NuxtLink>
        </li>
        <li class="nav-item mr-xl-5 mr-sm-3">
          <a href="https://forums.jac.network/" class="nav-link">Forums</a>
        </li>
        <li class="nav-item mr-xl-5 mr-sm-3">
          <NuxtLink to="/servers" class="nav-link">Servers</NuxtLink>
        </li>
        <li class="nav-item mr-xl-5 mr-sm-3">
          <NuxtLink to="/events" class="nav-link">Events</NuxtLink>
        </li>
        <li class="nav-item mr-xl-5 mr-sm-3">
          <a href="https://store.jac.network/" class="nav-link">Store</a>
        </li>
        <li class="nav-item mr-xl-5 mr-sm-3">
          <NuxtLink to="/votes" class="nav-link">Votes</NuxtLink>
        </li>
        <li class="nav-item mr-xl-5 mr-sm-3">
          <NuxtLink to="/" class="nav-link">Support</NuxtLink>
        </li>
        <li class="nav-item button">
          <a href="https://discord.gg/wBWBn2J" class="nav-link"
            ><i class="fa fa-discord-alt mr-2" aria-hidden="true"></i> Discord
          </a>
        </li>
      </ul>
      <div class="d-lg-none mb-1">
        <button
          class="hamburger hamburger--slider"
          type="button"
          aria-label="Menu"
          aria-controls="navigation"
          :class="{ 'is-active': displayMobileMenu }"
          @click="toggleHamburger"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
        <transition name="fade">
          <div
            v-if="displayMobileMenu"
            class="row d-lg-none mobile-nav mx-auto py-4"
          >
            <ul class="m-0 p-0 list-unstyled text-center mx-auto">
              <li class="mb-5 fs-18">
                <NuxtLink class="text-white" to="/">Home</NuxtLink>
              </li>
              <li class="mb-5 fs-18">
                <a href="https://forums.jac.network/">Forums</a>
              </li>
              <li class="mb-5 fs-18">
                <NuxtLink class="text-white" to="/events">Events</NuxtLink>
              </li>
              <li class="mb-5 fs-18">
                <a href="https://store.jac.network/">Store</a>
              </li>
              <li class="mb-5 fs-18">
                <NuxtLink class="text-white" to="/servers">Servers</NuxtLink>
              </li>
              <li class="mb-5 fs-18">
                <NuxtLink class="text-white" to="/vote">Votes</NuxtLink>
              </li>
              <li class="mb-5 fs-18">
                <NuxtLink class="text-white" to="/">Support</NuxtLink>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "JacFooter",
  props: ["active"],
  data() {
    return {
      displayMobileMenu: false,
    };
  },
  methods: {
    isActive(type) {
      if (this.active === type) {
        return "active";
      }
    },
    toggleHamburger() {
      this.displayMobileMenu = !this.displayMobileMenu;
    },
  },
};
</script>