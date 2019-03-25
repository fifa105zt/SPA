<template>
    <section>
        <div class="background">
            <img src="../../public/img/home-car.jpg">
        </div>
    </section>
</template>
<script>
    // import SocialLinks from './SocialLinks.vue'
    export default {
        name: 'Background',
        components: {
            // SocialLinks
        }
    }
</script>
<style scoped type="text/css">
    section {
        overflow: hidden;
        width: 100%;
    }
    .background {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    .background img {
        opacity: .8;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
</style>