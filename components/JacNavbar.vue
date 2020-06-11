<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="~assets/images/logo.svg" alt="JAC Network" style="width: 250px;">
            </a>
            <ul class="navbar-nav ml-auto d-none d-lg-flex">
                <li class="nav-item mr-5"><router-link to="/" class="nav-link">Home</router-link></li>
                <li class="nav-item mr-5"><router-link to="/" class="nav-link">Forums</router-link></li>
                <li class="nav-item mr-5"><router-link to="/" class="nav-link">Events</router-link></li>
                <li class="nav-item mr-5"><router-link to="/" class="nav-link">Store</router-link></li>
                <li class="nav-item mr-5"><router-link to="/" class="nav-link">Votes</router-link></li>
                <li class="nav-item mr-5"><router-link to="/" class="nav-link">Support</router-link></li>
                <li class="nav-item mr-5 button"><router-link to="/" class="nav-link"><i class="fa fa-discord-alt mr-2" aria-hidden="true"></i>
                 Discord </router-link></li>
            </ul>
            <div class="d-lg-none">
                <button class="hamburger hamburger--slider" type="button" aria-label="Menu" aria-controls="navigation" :class=""  @click="">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                </button>
            </div>
        </div>
        <transition name="fade">
            <div v-show="" class="row d-lg-none mobile-nav mx-auto py-4">
                <ul class="m-0 p-0 list-unstyled text-center mx-auto">

                </ul>
            </div>
        </transition>
    </nav>
</template>
<script>
    export default {
        name: 'JacFooter'
    }
</script>