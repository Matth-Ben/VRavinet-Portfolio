<template>
  <div id="app">
    <header>
      <Header></Header>
    </header>
    <section>
      <About></About>
    </section>
    <section>
      <InfoVideo></InfoVideo>
    </section>
    <section>
      <InfoPhoto></InfoPhoto>
    </section>
  </div>
</template>

<script>
import About from './components/About/About'
import Header from './components/Header/Header'
import InfoPhoto from './components/Info/InfoPhoto'
import InfoVideo from './components/Info/InfoVideo'

export default {
  name: 'app',
  components: {
    About,
    Header,
    InfoPhoto,
    InfoVideo
  }
}
</script>

<style lang="css">
@import './public/css/style.css';
</style>
