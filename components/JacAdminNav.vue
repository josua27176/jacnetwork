<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="~assets/images/logo.svg" alt="JAC Network" style="width: 250px;">
            </a>
            <ul class="navbar-nav ml-auto d-none d-lg-flex">
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/admin" class="nav-link">Home</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/admin/announcements" class="nav-link">Announcements</NuxtLink></li>
                <li class="nav-item mr-xl-5 mr-sm-3"><NuxtLink to="/admin/events" class="nav-link">Events</NuxtLink></li>
                <li class="nav-item button"><a href="#" class="nav-link" @click="logout">Logout</a></li>
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
                                <NuxtLink class="text-white" to="/">Events</NuxtLink>
                            </li>
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/">Store</NuxtLink>
                            </li>
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/">Videos</NuxtLink>
                            </li>
                            <li class="mb-5 fs-18">
                                <NuxtLink class="text-white" to="/">Votes</NuxtLink>
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
        name: 'JacAdminNav',
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
            },
            async logout() {
                await this.$auth.logout();
            },
        }
    }
</script>