<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="~assets/images/logo.svg" alt="JAC Network" style="width: 250px;">
            </a>
            <ul class="navbar-nav ml-auto d-none d-lg-flex">
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/" class="nav-link">Home</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/" class="nav-link">Forums</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/servers" class="nav-link">Servers</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/events" class="nav-link">Events</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/" class="nav-link">Store</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/votes" class="nav-link">Votes</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/" class="nav-link">Support</NuxtLink></li>
                <li class="nav-item button"><NuxtLink to="/" class="nav-link"><i class="fa fa-discord-alt mr-2" aria-hidden="true"></i>
                 Discord </NuxtLink></li>
            </ul>
            <div class="d-lg-none">
                <button class="hamburger hamburger--slider" type="button" aria-label="Menu" aria-controls="navigation" :class="{ 'is-active': displayMobileMenu }"  @click="toggleHamburger">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                </button>
                <transition name="fade">
                    <div v-if="displayMobileMenu" class="row d-lg-none mobile-nav mx-auto py-4">
                        <ul class="m-0 p-0 list-unstyled text-center mx-auto">
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/">Home</NuxtLink>
                            </li>
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/">Forums</NuxtLink>
                            </li>
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/events">Events</NuxtLink>
                            </li>
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/">Store</NuxtLink>
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
        name: 'JacFooter',
        props: ['active'],
        data() {
            return {
                displayMobileMenu: false
            }
        },
        methods: {
          isActive(type) {
              if (this.active === type) {
                  return 'active'
              }
          },
            toggleHamburger() {
                this.displayMobileMenu = !this.displayMobileMenu;
            }
        }
    }
</script>