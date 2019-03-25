<template>
    <div class="menu-wrap">
        <a @click="show = !show" href="javascript:void(0)" class="menu-link">
            <svg aria-hidden="true" data-prefix="fas" data-icon="car" class="svg-inline--fa fa-car fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path>
            </svg>
        </a>
        <transition name="slide">
            <nav v-if="show" class="top-nav">
                <a href="javascript:void(0)" class="menu-close-link" @click="show = !show" ><i class="fas fa-times"></i></a>
                <div class="top-text">
                    <div class="hello-text">
                        <strong>Hello<br></strong>
                        This Site about all cars each I had.
                        On background the Site You see car of my dream<br>
                        Pontiac GTO'67
                    </div>
                    <social-links></social-links>
                </div>
                <ul>
                    <li><router-link :to="{ name: 'home' }">home</router-link></li>
                    <li><router-link :to="{ name: 'cars' }">cars</router-link></li>
                    <li><router-link :to="{ name: 'gallery' }">gallery</router-link></li>
                    <li><router-link :to="{ name: 'specs' }">specs</router-link></li>
                    <!--<li><router-link :to="{ name: 'hello', params: { msg: 'test' } }">Hello World</router-link></li>-->
                </ul>
            </nav>
        </transition>
    </div>

</template>
<script>
    import SocialLinks from './SocialLinks.vue'
    export default {
        data:function () {
            return {
                show: false
            }
        },
        name: 'Menu',
        components: {
            SocialLinks
        }
    }
</script>
<style scoped type="text/css">
    .hello-text{
        line-height: 1.5;
        margin-bottom: 10px;
    }

    .menu-link svg path{
        -webkit-transition: fill .4s ease-out;
        -moz-transition: fill .4s ease-out;
        -o-transition: fill .4s ease-out;
        transition: fill .4s ease-out;
        fill: #686868;
        /*transition: fill 0.6s ease;*/
    }
    .menu-link:hover svg path{
        -webkit-transition: fill .4s ease;
        -moz-transition: fill .4s ease;
        -o-transition: fill .4s ease;
        transition: fill .4s ease;
        fill: #168a65;
    }
    .menu-link{

        display: block;
        margin: 0 auto;
        width: 30px;
        height: 25px;
    }
    .top-nav{
        padding: 0 18px 0 70px;
        height: 100%;
        width: 380px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: #181818;
        overflow-x: hidden;
        /*transition: 0.5s;*/
        padding-top: 60px;
        color: #818181;
        font-size: 14px;
        box-sizing: border-box;
    }


    .menu-close-link{
        position: absolute;
        top: 20px;
        right: 18px;
        color: #fff;
        font-size: 18px;
    }
    .top-nav ul{
        list-style: none;
        padding: 0;
    }
    .top-nav ul li{
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
    }
    .top-nav a{
        color: #fff;
        font-size: 22px;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }
    .top-nav  a:hover{
        color: #168a65;
    }
    .slide-enter-active,
    .slide-leave-active{
        transition: all .5s cubic-bezier(.65, .05, .36, 1);
    }
    .slide-enter,
    .slide-leave-to{
        left: -100%;
    }

</style>