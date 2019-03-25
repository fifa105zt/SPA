<template>
    <section class="cars">
        <h2>Cars</h2>
        <div class=links v-for="auto in cars">
            <router-link :to="{ name: 'car', params: { slug: auto.slug}}">{{ auto.title }}</router-link>

        </div>
    </section>
</template>
<script>


    // let cars = require('../data');   for data.js
    export default {
        name: 'Cars',
        data: function () {
            return {
                cars: []
            }
        },
        components: {},
        created: function () {
            let obj = this;
            this.$db.collection("cars").get().then(function (query) {
                query.forEach(function (car) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(car.id, " => ", car.data());
                    obj.cars.push(car.data());
                    // console.log(this.cars);
                });
            });
        }
    }

</script>
<style scoped type="text/css">
    section{
        margin-left: 25%;
    }
    h2{
        font-size: 22px;
    }
    .links{
        font-size: 18px;
        line-height: 2;

    }
    .links a {
        color: #255f44;
    }
    .links a:hover{
        color: #210a09;
    }
</style>