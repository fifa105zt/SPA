<template>
    <section>
        <h2>Specs For</h2>
        <div class=links v-for="auto in specs">
            <router-link :to="{ name: 'spec', params: { slug: auto.slug}}">{{ auto.Car }}</router-link>

        </div>
    </section>
</template>
<script>


    export default {
        name: 'Specs',
        data: function(){
            return{
                specs: []
            }
        },
        components: {

        },
        created: function () {
            let obj = this;
            this.$db.collection("specs").get().then(function(query) {
                query.forEach(function(spec) {
                    // doc.data() is never undefined for query doc snapshots
                    // console.log(car.id, " => ", car.data());
                    obj.specs.push(spec.data());
                    // console.log(obj.specs);
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