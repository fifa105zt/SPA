<template>
    <section class="gallery" v-if="car" >


        <div  class="image-wrap">
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
            >
            </div>
        </div>

    </section>
</template>
<script>
    import VueGallery from 'vue-gallery'

    export default {
        name: 'Gallery',
        data: function () {
            return {
                images: [
                    // 'https://dummyimage.com/800/ffffff/000000',
                    // 'https://dummyimage.com/1600/ffffff/000000',
                    // 'https://dummyimage.com/1280/000000/ffffff',
                    // 'https://dummyimage.com/400/000000/ffffff',
                ],
                index: null,
                car: null,
                cars: []

            };
        },
        components: {

            'gallery': VueGallery
        },
        created: function () {
            let obj = this;

            this.$db.collection("cars").get().then(function (query) {
                query.forEach(function (car) {

                    obj.cars.push(car.data());
                });
            });
            this.$db.collection("cars")
                .get()
                .then(function (querySnapshot) {

                    querySnapshot.forEach(function (doc) {

                        obj.car = doc.data();

                    });
                    for(let i=0; i < obj.cars.length; i++){
                        obj.images[i] = obj.cars[i].image;
                        // console.log(obj.images[i])
                    }

                    // console.log(obj.cars[1].image);
                    // console.log(obj.images[0]);
                });



        }
    }

</script>
<style scoped type="text/css">
    .image-wrap {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        max-width: 1000px;
        margin: 0 auto;
    }
    .image {
        position: relative;

        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        border: 1px solid #ebebeb;
        margin: 5px auto;

    }

</style>