<template>
  <div id="info--photo">
    <div class="info--container">
      <div class="grid grid2">
        <div class="grid-item">
          <div class="info--container--image" v-for="image in infos.image">
            <div v-bind:style="{ backgroundImage: 'url(' + image.url + ')' }"></div>
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
import InfoPhoto from '../../services/index'
export default {
  name: 'InfoPhoto',
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getInfoPhoto () {
      try {
        const response = await InfoPhoto.getInfoHome()
        self.airtableResponse = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    getInfoPhoto()
  },
  computed: {
    infos () {
      let self = this
      if (self.airtableResponse[0]) {
        return {
          title: self.airtableResponse[0].fields.TitreInfoPhoto,
          paragraphs: self.airtableResponse[0].fields.ParagraphInfoPhoto,
          image: self.airtableResponse[0].fields.ImageInfoPhoto
        }
      }
    }
  }
};
</script>
