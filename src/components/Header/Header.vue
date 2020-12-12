<template>
  <div id="header">
    <!--        <nav></nav>-->
    <div class="header--content">
      <div v-for="header in headers">
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
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getHeader () {
      try {
        const response = await ContentHeader.getHeader()
        console.log(response)
        self.airtableResponse = response.data.records
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
      for  ( let i = 0; i < self.airtableResponse.length; i++ ) {
        let headers = {
          title: self.airtableResponse[i].fields.Title,
          paragraph: self.airtableResponse[i].fields.Paragraph,
          year: self.airtableResponse[i].fields.Year,
          taxonomy: self.airtableResponse[i].fields.Taxonomy,
        }
        headerList.push ( headers )
      }
      return headerList
    }
  }
};
</script>
