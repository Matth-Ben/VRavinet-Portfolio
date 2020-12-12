<template>
  <div>
    <div class="header--content--background">
      <video autoplay loop id="bgvid">
        <source src="../../public/video/MASTER_&_MIX-Etalo_classique.mp4" type="video/mp4">
      </video>
    </div>
    <div class="header--content--sidebar--left">
      <div class="header--content--sidebar--left--content">
        <div class="header--content--title">
          <h1 class="title mt-0 mb-2">{{ title }}</h1>
        </div>
        <div class="header--content--description">
          <p class="header--content--description--text text-justify">
            {{ paragraph }}
          </p>
          <div class="text-center mt-3">
            <button class="btn btn-primary">En savoir plus</button>
          </div>
        </div>
      </div>
    </div>
    <div class="header--content--sidebar-bottom">
      <div class="header--content--year"><span>{{ year }}</span></div>
      <div class="header--content--tag"><span>{{ taxonomy }}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderItem',
  props: {
    title: String,
    paragraph: String,
    year: String,
    taxonomy: String
  }
}
</script>
