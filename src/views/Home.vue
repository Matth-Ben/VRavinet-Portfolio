<template>
  <div id="home">
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
      <Project></Project>
    </section>
    <section>
      <Contact></Contact>
    </section>
  </div>
</template>

<script>
import About from '../components/About/About'
import Header from '../components/Header/Header'
import Info from '../components/Info/Info'
import Project from '../components/Project/Project'
import Contact from '../components/Contact/Contact'

export default {
  name: 'home',
  components: {
    About,
    Header,
    Info,
    Project,
    Contact
  }
}
</script>
