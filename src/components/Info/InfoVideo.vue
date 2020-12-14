<template>
  <div id="info--video">
    <div class="info--content">
      <div class="row">
        <div class="col6">
          <div v-for="image in infos.image">
            <img :src="image.url" style="width: 100%" />
          </div>
        </div>
        <div class="col6">
          <h2>{{infos.title}}</h2>
          <p>{{infos.paragraphs}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoVideo from '../../services/index'
export default {
  name: 'InfoVideo',
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getInfoVideo () {
      try {
        const response = await InfoVideo.getInfoHome()
        console.log(response)
        self.airtableResponse = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    getInfoVideo()
  },
  computed: {
    infos () {
      let self = this
      if (self.airtableResponse[0]) {
        return {
          title: self.airtableResponse[0].fields.TitreInfoVideo,
          paragraphs: self.airtableResponse[0].fields.ParagraphInfoVideo,
          image: self.airtableResponse[0].fields.ImageInfoVideo
        }
      }
    }
  }
};
</script>
