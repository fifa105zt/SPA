<template>
    <section v-if="car">
        <div    v-scroll="handleScroll"
                class="car-info"
                v-for="auto in cars"
                v-bind:class="{ withImg: afterClick }">
            <div class="text-info">
                <h2>{{ auto.title }}</h2>
                <div>
                    <p>{{ auto.body }}</p>
                </div>
                <router-link :to="{ name: 'car', params: { slug: auto.slug}}">
                    <button class="read-more butt">Read More...</button>
                </router-link>
                <button @click="show = !show"
                        class="show-photo butt"

                        v-on:click="afterClick = !afterClick"
                >Show Photo</button>
            </div>
            <transition name="image" class="image">
                <div
                        v-if="show"
                        class="image-wrap">
                    <img :src="auto.image" alt="car">
                </div>
            </transition>
        </div>
    </section>
</template>
<script>


    export default {
        name: 'CarInfo',
        data: function(){
            return{
                show: false,
                car: null,
                cars: [],
                afterClick: false
            }
        },
        components: {

        },
        directives: {
            scroll: {
                // определение директивы
                inserted: function (el, binding) {
                    let f = function (evt) {
                        if (binding.value(evt, el)) {
                            window.removeEventListener('scroll', f)
                        }
                    };

                    window.addEventListener('scroll', f)
                }
            }
        },
        methods: {
            handleScroll: function (evt, el) {
                if (window.scrollY > 50) {
                    el.setAttribute(
                        'style',
                        'opacity: 1; transform: translate3d(0, -10px, 0)'
                    )
                }
                return window.scrollY > 100
            }
        },
        created: function () {
            let obj = this;
            // let slug = this.$route.params.slug;
            this.$db.collection("cars").get().then(function(query) {
                query.forEach(function(car) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(car.id, " => ", car.data());
                    obj.cars.push(car.data());
                    // console.log(this.cars);
                });
            });
            this.$db.collection("cars")
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {

                        obj.car = doc.data();
                    });
                })
                // .catch(function(error) {
                //     console.log("Error getting documents: ", error);
                // });

        }
    }
</script>
<style scoped type="text/css">

    .car-info {
        overflow: hidden;
        opacity: 0;
        transition: 2s all cubic-bezier(0.39, 0.575, 0.565, 1);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between
    }
    .car-info .image-wrap img{
        width: 650px;
        /*position: fixed;*/
        top: 0;
        /*height: 250px;*/
        object-fit: cover;
        /*transition: all 0.9s ease-in-out;*/
    }

    .image-enter-active,
    .image-leave-active{
        transition: all 2s cubic-bezier(.65, .05, .36, 1);

    }
    .image-enter,
    .image-leave-to{
        transform: translateX(100%);
    }
    .text-info{
        margin: 0 auto;
        height: auto;
        width: 900px;
        transition: all 2s cubic-bezier(.65, .05, .36, 1);

    }
    .withImg .text-info{
        transition: all 2s cubic-bezier(.65, .05, .36, 1);

        width: 500px;
    }


    h2{
        font-size: 20px;
        text-transform: uppercase;
        padding: 15px;
        color: #124138;
    }
    p{
        display: block;
        height: 225px;
        font-size: 15px;
        line-height: 2;
        color: #124138;
        overflow: hidden;
    }
    button.butt{
        margin: 2px 10px 10px;
        font: 20px "Gotham Rounded Bold";
        height: 50px;
        width: 190px;
        background-color: #106857;
        color: #fff;
        border-radius: 8px;

    }

</style>