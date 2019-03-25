<template>
    <ul class="social">
        <li class=""><a class="fab fa-linkedin" href="#"></a></li>
        <li class=""><a class="fab fa-facebook-f" href="#"></a></li>
        <li class=""><a class="fab fa-twitter" href="#"></a></li>
        <li class=""><a class="fab fa-instagram" href="#"></a></li>
    </ul>
</template>
<style scoped type="text/css">
    .social{
        display: flex;
        margin: 0 5px;
        width: 165px;
        justify-content: space-between;
        list-style: none;
    }
    .social a{
        font-size: 18px;
        /*color: #6e6e6e;*/
        color: #8f8f8f;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }
    .social a:hover{
        color: #168a65;
    }

</style>