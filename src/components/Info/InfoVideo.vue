<template>
  <div id="info--video">
    <div class="info--container">
      <div class="grid grid2">
        <div class="grid-item">
          <div class="info--container--image" v-for="image in infos.image">
            <div v-bind:style="{ backgroundImage: 'url(' + image.url + ')' }"></div>
<!--            <img class="info&#45;&#45;container&#45;&#45;image&#45;&#45;item" :src="image.url" style="width: 100%" />-->
          </div>
        </div>
        <div class="grid-item">
          <div class="info--container--content">
            <h2 class="info--container--content--title">{{infos.title}}</h2>
            <p class="info--container--content--paragraph">{{infos.paragraphs}}</p>
          </div>
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
