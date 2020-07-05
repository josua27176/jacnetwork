<template>
    <div>
        <JacAdminNav></JacAdminNav>
        <nuxt />
        <JacFooter></JacFooter>
    </div>
</template>
<script>
    import JacAdminNav from "@/components/JacAdminNav";
    import JacFooter from '../components/JacFooter';
    export default  {
        components: {JacAdminNav, JacFooter}
    }
</script>

