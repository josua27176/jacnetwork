<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="~assets/images/logo.svg" alt="JAC Network" style="width: 250px;">
            </a>
            <ul class="navbar-nav ml-auto d-none d-lg-flex">
                <li class="nav-item mr-xl-5 mr-sm-3"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><router-link to="/" class="nav-link">Forums</router-link></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><router-link to="/" class="nav-link">Events</router-link></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><router-link to="/" class="nav-link">Store</router-link></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><router-link to="/" class="nav-link">Votes</router-link></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><router-link to="/" class="nav-link">Support</router-link></li>
                <li class="nav-item button"><router-link to="/" class="nav-link"><i class="fa fa-discord-alt mr-2" aria-hidden="true"></i>
                 Discord </router-link></li>
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
                                <nuxt-link class="text-white" to="/">Home</nuxt-link>
                            </li>
                            <li class="mb-5 fs-18">
                                <nuxt-link class="text-white" to="/">Forums</nuxt-link>
                            </li>
                            <li class="mb-5 fs-18">
                                <nuxt-link class="text-white" to="/">Events</nuxt-link>
                            </li>
                            <li class="mb-5 fs-18">
                                <nuxt-link class="text-white" to="/">Store</nuxt-link>
                            </li>
                            <li class="mb-5 fs-18">
                                <nuxt-link class="text-white" to="/">Videos</nuxt-link>
                            </li>
                            <li class="mb-5 fs-18">
                                <nuxt-link class="text-white" to="/">Votes</nuxt-link>
                            </li>
                            <li class="mb-5 fs-18">
                                <nuxt-link class="text-white" to="/">Support</nuxt-link>
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