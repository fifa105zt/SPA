<template>
    <header>
        <h1>your car. your choice</h1>
        <h2>It does not matter how slowly you go so long as you do not stop</h2>
    </header>
</template>
<script>
    // import SocialLinks from './SocialLinks.vue'
    export default {
        name: 'Header',
        components: {
            // SocialLinks
        }
    }
</script>
<style scoped type="text/css">
    h1{
        letter-spacing: 0.4em;
        text-transform: uppercase;
        font: 35px 'Gotham Rounded Bold';
        text-align: center;
        color: #1c1c1c;
    }
    h2{
        font: 18px 'Gotham Rounded MediumItalic';
        text-align: center;
        color: #8f8f8f;
    }
    header .header-social{
        width: 300px;
        margin: 0 auto;
    }
    header .header-social .social a{
        font-size: 40px;
    }
</style>