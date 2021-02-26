<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo">
        <video autoplay>
<!--          <source src="../public/video/intro-victorrvnt-4k-60fps.webm" type="video/webm">-->
        </video>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'preloader',
  data () {
    return {
      show: true
    }
  },
  mounted () {
    if (this.show) this.showToggle()
  },
  methods: {
    showToggle () {
      setTimeout(() => {
        this.show = false
      }, 6000)
    }
  }
}
</script>
