<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="logo"></div>
      <p>Victor Ravinet</p>
      <div class="circles">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'preloader',
  data(){
    return {
      show: true
    }
  },
  mounted(){
    if(Boolean(this.show)) this.showToggle()
  },
  methods: {
    showToggle(){
      setTimeout(() => {
        this.show = false
      }, 10000)
    }
  }
}
</script>
