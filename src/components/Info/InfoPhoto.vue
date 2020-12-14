<template>
  <div id="info--photo">
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
        console.log(response)
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
