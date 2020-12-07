<template>
  <div id="app">
<!--    <vue-airtable :base="base" :columns="['Warehouse Code', 'Street Address', 'County', 'Sales Tax Rate']" filter="AND({State} = 'CA', {Status} = 'Open', {Type} = 'Fulfillment')"></vue-airtable>-->
    <header>
      <div id="header">
<!--        <nav></nav>-->
        <div class="header--content">
          <div class="header--content--background">
            <video autoplay loop id="bgvid">
              <source src="./public/video/MASTER_&_MIX-Etalo_classique.mp4" type="video/mp4">
            </video>
          </div>
<!--          <div class="header&#45;&#45;content&#45;&#45;background" style="background-image: url('./src/assets/background-header.jpg')"></div>-->
          <div class="header--content--sidebar--left">
            <div class="header--content--sidebar--left--content">
              <div class="header--content--title">
                <h1 class="title mt-0 mb-2">Intitulé de la vidéo</h1>
              </div>
              <div class="header--content--description">
                <p class="header--content--description--text text-justify">
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
                <div class="text-center mt-3">
                  <button class="btn btn-primary">En savoir plus</button>
                </div>
              </div>
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
      <div id="about">
        <div class="content">
          <div class="row">
            <div class="col6">
              <div class="about--content">
                <div class="about--content--image">
                  <img src="./public/image/profile_vr.jpg" width="660">
                </div>
              </div>
            </div>
            <div class="col6">
              <div class="about--content">
                <div class="about--content">
                  <h2 class="about--content--title">A propos de moi</h2>
                  <div class="about--content--paragraph">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                      sed scelerisque ante. Quisque tempor lacus at quam mattis,
                      in finibus eros egestas. Curabitur ut condimentum mauris,
                      nec malesuada ipsum. Sed id lorem dolor. Nulla pretium diam
                      ante, id molestie mi imperdiet a. Nunc hendrerit rutrum erat
                      et tristique. Nam malesuada imperdiet mi non congue.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                      sed scelerisque ante. Quisque tempor lacus at quam mattis,
                      in finibus eros egestas. Curabitur ut condimentum mauris,
                      nec malesuada ipsum. Sed id lorem dolor. Nulla pretium diam
                      ante, id molestie mi imperdiet a. Nunc hendrerit rutrum erat
                      et tristique. Nam malesuada imperdiet mi non congue.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                      sed scelerisque ante. Quisque tempor lacus at quam mattis,
                      in finibus eros egestas. Curabitur ut condimentum mauris,
                      nec malesuada ipsum. Sed id lorem dolor. Nulla pretium diam
                      ante, id molestie mi imperdiet a. Nunc hendrerit rutrum erat
                      et tristique. Nam malesuada imperdiet mi non congue.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                      sed scelerisque ante. Quisque tempor lacus at quam mattis,
                      in finibus eros egestas. Curabitur ut condimentum mauris,
                      nec malesuada ipsum. Sed id lorem dolor. Nulla pretium diam
                      ante, id molestie mi imperdiet a. Nunc hendrerit rutrum erat
                      et tristique. Nam malesuada imperdiet mi non congue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
