<template>
    <section class="main">
        <div class="wrap">
            <div class="inner-wrap">
                <SocialLinks class="home-social"></SocialLinks>
            </div>

            <CarInfo></CarInfo>

            <!--<Cars></Cars>-->
        </div>


    </section>
</template>
<script>
    import SocialLinks from './SocialLinks.vue'
    import CarInfo from './CarInfo.vue'
    // import Cars from './Cars.vue'
    export default {
        name: 'Home',
        components: {
            SocialLinks,
            CarInfo,

            // Cars,
        }
    }
</script>
<style scoped type="text/css">
    .wrap{

    }

    .inner-wrap {
        position: relative;
        overflow: hidden;
    }
    .inner-wrap .home-social{
        /*position: absolute;*/
        display: flex;
        justify-content: space-around;
        margin: 10px auto;

    }
    /*.inner-wrap .social .home-social a{*/
        /*font-size: 80px;*/
        /*color: #fff;*/
    /*}*/
</style>