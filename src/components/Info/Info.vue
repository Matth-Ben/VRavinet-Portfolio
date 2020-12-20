<template>
  <div id="info--video">
    <div class="info--container">
      <div class="grid grid2">
        <div class="grid-item">
          <div class="info--container--image" v-for="image in images" v-if="image.template === 'Info'">
            <div v-for="im in image.image">
              <div v-bind:style="{ backgroundImage: 'url(' + im.url + ')' }"></div>
            </div>
          </div>
        </div>
        <div class="grid-item">
          <div class="info--container--content">
            <h2 class="info--container--content--title">Ma méthode de travail</h2>
            <div class="info--container--content--paragraph" v-for="paragraph in paragraphs" v-if="paragraph.visible && paragraph.template === 'Info'">
              <info-paragraph v-bind="paragraph"></info-paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from '../../services/index'
import InfoParagraph from './InfoParagraph'
export default {
  name: 'Info',
  components: {
    InfoParagraph
  },
  data () {
    return {
      imageResponse: [],
      paragraphResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getImage () {
      try {
        const response = await database.getImage()
        self.imageResponse = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    async function getParagraph () {
      try {
        const response = await database.getParagraph()
        self.paragraphResponse = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    getImage()
    getParagraph()
  },
  computed: {
    images () {
      let self = this
      let photoList = []
      for  ( let i = 0; i < self.imageResponse.length; i++ ) {
        let photo = {
          image: self.imageResponse[i].fields.Image,
          slug: self.imageResponse[i].fields.Slug,
          template: self.imageResponse[i].fields.Template
        }
        photoList.push ( photo )
      }
      return photoList
    },
    paragraphs () {
      let self = this
      let paragraphList = []
      for  ( let i = 0; i < self.paragraphResponse.length; i++ ) {
        let info = {
          paragraph: self.paragraphResponse[i].fields.Paragraph,
          visible: self.paragraphResponse[i].fields.Visible,
          template: self.paragraphResponse[i].fields.Template
        }
        paragraphList.push ( info )
      }
      return paragraphList
    }
  }
};
</script>
