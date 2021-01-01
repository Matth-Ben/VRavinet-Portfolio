<template>
  <div id="header">
    <!--        <nav></nav>-->
    <div class="header--content">
      <div v-for="header in headers" v-if="header.enabled">
        <header-item v-bind="header"></header-item>
      </div>
    </div>
  </div>
</template>

<script>
import ContentHeader from '../../services/index'
import HeaderItem from './HeaderItem'
export default {
  name: 'Header',
  components: {
    HeaderItem
  },
  data () {
    return {
      index: 0,
      slides: []
    }
  },
  mounted: function () {
    let self = this
    async function getHeader () {
      try {
        const response = await ContentHeader.getProjects()
        console.log(response)
        self.slides = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    getHeader()
  },
  computed: {
    headers () {
      let self = this
      let headerList = []
      for  ( let i = 0; i < self.slides.length; i++ ) {
        let headers = {
          title: self.slides[i].fields.Title,
          paragraph: self.slides[i].fields.Paragraph,
          video: self.slides[i].fields.Video,
          year: self.slides[i].fields.Year,
          taxonomy: self.slides[i].fields.Taxonomy,
          enabled: self.slides[i].fields.Preview,
        }
        headerList.push ( headers )
      }
      return headerList
    }
  }
};
</script>
