<template>
    <section class="footer">
        <div class="contact-info">
            <div class="info-wrap">
                <li class="geo">
                    <a class="fas fa-map-marker-alt" href="#"></a>
                    <a class="" href="#">Zhytomyr, UA</a>
                </li>
                <li class="phone">
                    <a class="fas fa-phone" href="#"></a>
                    <a class="" href="#">+380937443200</a>
                </li>
                <li class="mail">
                    <a class="fas fa-envelope" href="#"></a>
                    <a class="" href="#">andriy.pustovoit@gmail.com</a>
                </li>
            </div>
        </div>
        <div class="site-info">
            <h4>About the Site</h4>
            <p>This Site about all my cars each I had.
                With their pictures and technical specifications,
                and same info from wiki.
            </p>

        </div>
    </section>
</template>
<script>

    // import Cars from './Cars.vue'
    export default {
        name: 'Footer',
        components: {

            // Cars,
        }
    }
</script>
<style scoped type="text/css">
    .footer{
        position: absolute;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        left: 0;
        bottom: 0;
        width: 100%;
        min-height: 150px;
        color: #5f3d1a;
        background: url("../../public/img/bg.jpg") repeat-y;
        background-size: 100% ;
        opacity: .6;
    }
    .info-wrap li a{
        margin: 15px 0;
        padding-left: 40px;
        font-size: 18px;
        text-decoration: none;
        color: inherit;

        vertical-align: center;
    }
    .info-wrap li:hover{
        color: #255f44;
    }
    .site-info{
        padding: 0;
        margin: 0;
        margin-right: 50px;
        width: 400px;
    }
    .site-info h4{
        margin-top: 10px;
        font-size: 25px;
    }
    .site-info p{
        font-size: 15px;
        line-height: 1.5;
    }



</style>