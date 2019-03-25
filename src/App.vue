<template>
  <div id="app" class="wrapper">

    <div class="container">
      <Background></Background>
      <Header></Header>
      <Menu></Menu>
      <router-view></router-view>

    </div>
    <Footer></Footer>
  </div>
</template>

<script>
    import Menu from './components/Menu.vue'
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Background from "./components/Background";
    // import Footer from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            Background,
            Menu,
            Header,
            Footer,
        }
    }
</script>

<style>

  .container{
    overflow: hidden;
    width: 100%;
    padding-bottom: 150px;
  }
  Header{
    z-index: 100;
  }



</style>
