<template>
  <div id="app">
    <header>
      <Header></Header>
    </header>
    <section>
      <About></About>
    </section>
    <section>
      <div id="">

      </div>
    </section>
  </div>
</template>

<script>
import About from './components/About/About'
import Header from './components/Header/Header'

export default {
  name: 'app',
  components: {
    About,
    Header
  }
}
</script>

<style lang="css">
@import './public/css/style.css';
</style>
