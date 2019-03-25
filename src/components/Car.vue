<template>
    <section class="car" v-if="car">

        <!--&lt;!&ndash;<h1>this is Car {{ $route.params.slug }}</h1>&ndash;&gt;  for data.js-->
        <h2>{{ car.title }}</h2>
        <img :src="car.image" alt="">
        <p>{{ car.body }}</p>

    </section>
</template>
<script>

    // import Footer from './Footer.vue'
    export default {
        name: 'Car',
        data: function(){
            return{

                // cars: cars,  for data.js
                car: null,
            }
        },
        components: {

            // Footer,
        },
        created: function () {
            let obj = this;
            let slug = this.$route.params.slug;
            this.$db.collection("cars").where("slug", "==", slug)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        obj.car = doc.data();
                    });
                })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
            // this.car = this.cars.find(o => o.slug === slug)
        }
    }
</script>
<style scoped type="text/css">
    .car{
        text-align: center;
        vertical-align: center;
    }
    h2{
        margin-top: 100px;
        font-size: 20px;
        text-transform: uppercase;
        padding: 15px;
        color: #124138;
    }
    p{
        display: block;
        font-size: 15px;
        line-height: 2;
        color: #2c1c32;
    }
    img{

        height: auto;
        max-width: 100%;
        width: auto;
        /*overflow: hidden;*/
    }

</style>