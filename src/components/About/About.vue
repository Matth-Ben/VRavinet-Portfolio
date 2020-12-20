<template>
  <div id="about">
    <div class="content">
      <div class="container pt-5 pb-5 row">
        <div class="col6">
          <div class="about--content">
            <div class="about--content--image">
              <img src="../../public/image/profile_vr.jpg" width="660">
            </div>
          </div>
        </div>
        <div class="col6">
          <div class="about--content">
            <div class="about--content--container">
              <h2 class="about--content--title">A propos de moi</h2>
              <div class="about--content--paragraph">
                <div class="about--content--paragraph--item" v-for="paragraph in infos" v-if="paragraph.visible && paragraph.template === 'About'">
                  <about-paragraph v-bind="paragraph"></about-paragraph>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoAbout from '../../services/index'
import AboutParagraph from './AboutParagraph'
export default {
  name: 'About',
  components: {
    AboutParagraph
  },
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getParagraph () {
      try {
        const response = await InfoAbout.getParagraph()
        console.log(response)
        self.airtableResponse = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    getParagraph()
  },
  computed: {
    infos () {
      let self = this
      let paragraphList = []
      for  ( let i = 0; i < self.airtableResponse.length; i++ ) {
        let info = {
          paragraph: self.airtableResponse[i].fields.Paragraph,
          visible: self.airtableResponse[i].fields.Visible,
          template: self.airtableResponse[i].fields.Template
        }
        paragraphList.push ( info )
      }
      return paragraphList
    }
  }
};
</script>
