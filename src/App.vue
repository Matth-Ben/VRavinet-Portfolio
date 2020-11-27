<template>
  <div id="app">
    <vue-airtable :base="base" :columns="['Warehouse Code', 'Street Address', 'County', 'Sales Tax Rate']" filter="AND({State} = 'CA', {Status} = 'Open', {Type} = 'Fulfillment')"></vue-airtable>
    <header>
      <div id="header">
        <nav></nav>
        <div class="header--content">
          <div class="header--content--background" style="background-image: url('./assets/background-header.jpg')"></div>
          <div class="header--content--sidebar--left">
            <div class="header--content--title">
              <h1 class="title">Intitulé de la vidéo</h1>
            </div>
            <div class="header--content--description">
              <p class="header--content--description--text">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Maecenas tincidunt ultricies
                felis, ac rutrum libero accumsan vitae.
                Sed in sem sed justo laoreet porttitor sed
                at sem. Integer ut vestibulum ipsum, non
                consequat risus. Proin finibus dignissim
                urna. Integer in aliquam nisl, a gravida
                justo. Sed sed fringilla ligula. Sed mollis
                nibh eget nulla laoreet, non porttitor
                turpis fermentum. Donec ultrices justo...
              </p>
              <button class="btn btn-primary">En savoir plus</button>
            </div>
          </div>
          <div class="header--content--sidebar-bottom">
            <div class="header--content--year"><span>2017</span></div>
            <div class="header--content--tag"><span>Quelque chose à propos de la vidéo/photo</span></div>
          </div>
        </div>
      </div>
    </header>
    <section>
    </section>
  </div>
</template>

<script>
import VueAirtable from './components/VueAirtable'
import * as process from "../.eslintrc";

export default {
  name: 'app',
  components: {
    VueAirtable
  },
  data: function () {
    return {
      base: process.env.AIRTABLE_BASE
    };
  }
}
</script>

<style lang="css">
@import './public/css/style.css';
</style>
