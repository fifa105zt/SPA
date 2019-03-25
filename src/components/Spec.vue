<template>
    <!--<section class="car" v-if="car">-->

    <!--&lt;!&ndash;&lt;!&ndash;<h1>this is Car {{ $route.params.slug }}</h1>&ndash;&gt;  for data.js&ndash;&gt;-->
    <!--<h2>{{ car.title }}</h2>-->
    <!--<img :src="car.image" alt="">-->
    <!--<p>{{ car.body }}</p>-->

    <!--</section>-->
    <section v-if="spec">

        <h2>{{ spec.Car }}</h2>

        <table>
            <tr>
                <th colspan="2">Technical specifications</th>
            </tr>
            <tr>
                <td>Position of engine</td>
                <td>{{ spec.position_engine}}</td>
            </tr>
            <tr>
                <td>Engine displacement</td>
                <td>{{ spec.engine}}</td>
            </tr>
            <tr>
                <td>Fuel System</td>
                <td>{{ spec. system}}</td>
            </tr>
            <tr>
                <td>Position of cylinders</td>
                <td>{{ spec.position}}</td>
            </tr>
            <tr>
                <td>Number of cylinders</td>
                <td>{{ spec.cylinders}}</td>
            </tr>
            <tr>
                <td>Fuel Type</td>
                <td>{{ spec.fuel}}</td>
            </tr>
            <tr>
                <td>Drive wheel</td>
                <td>{{ spec. wheels}}</td>
            </tr>


        </table>

    </section>
</template>
<script>

    export default {
        name: 'Specs',
        data: function(){
            return{

                spec: null,
            }
        },
        components: {

        },
        created: function () {

            let obj = this;
            let slug = this.$route.params.slug;
            this.$db.collection("specs").where("slug", "==", slug)
                .get()
                .then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        obj.spec = doc.data();

                    });
                });
        }
    }
</script>
<style scoped type="text/css">
    section{
        text-align: center;
        /*vertical-align: center;*/

    }
    table, th, td{
        margin: 0 auto;
        border: 2px solid #5f3d1a;
        font-size: 15px;
    }
    th{
        font-weight: bold;
        padding: 5px;
    }
    td:first-child{
        color: rgba(12, 25, 13, 0.78);
    }

</style>