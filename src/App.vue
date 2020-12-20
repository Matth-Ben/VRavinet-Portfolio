<template>
  <div id="app">
    <header>
      <Header></Header>
    </header>
    <section>
      <About></About>
    </section>
    <section>
      <Info></Info>
    </section>
    <section>
      <Contact></Contact>
    </section>
  </div>
</template>

<script>
import About from './components/About/About'
import Header from './components/Header/Header'
import Info from './components/Info/Info'
import Contact from './components/Contact/Contact'

export default {
  name: 'app',
  components: {
    About,
    Header,
    Info,
    Contact
  }
}
</script>

<style lang="css">
@import './public/css/style.css';
</style>
