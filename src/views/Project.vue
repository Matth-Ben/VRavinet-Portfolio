<template>
  <div id="project">
    <section class="single--project">
      <div class="container">
        <div class="row">
          <div class="col6">
            <div class="single--project--galery">
              <div v-if="!!project.photoPreview">
                <div v-for="image in project.photoPreview">
                  <img style="width: 100%; height: auto" :src="image.url" :width="image.thumbnails.large.width" :height="image.thumbnails.large.height"/>
                </div>
              </div>

              <div v-if="!!project.video">
                <video width="100%" v-for="v in project.video" autoplay loop id="bgvid">
                  <source :src="v.url" type="video/mp4">
                </video>
              </div>

              <div class="grid grid2" v-if="!!project.galerie">
                <div class="grid-item" v-for="image in project.galerie">
                  <img style="width: 100%; height: auto" :src="image.url" :width="image.thumbnails.large.width" :height="image.thumbnails.large.height"/>
                </div>
              </div>
            </div>
          </div>
          <div class="col6">
            <div class="single--project--content">
              <div>
                <h1 class="">{{ project.title }}</h1>
                <h3>{{ project.taxonomy }}</h3>
                <h3>{{ project.year }}</h3>
                <p>{{ project.paragraph }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProjectsApi from '../services/index'

export default {
  name: 'project',
  data () {
    return {
      airtableResponse: []
    }
  },
  mounted: function () {
    let self = this;
    async function getProject () {
      try {
        const response = await ProjectsApi.getProject(self.$route.params.slug);
        self.airtableResponse = response.data.records
      } catch (err) {
        console.log(err)
      }
    }
    getProject()
  },
  computed: {
    project () {
      let self = this;
      console.log(self.airtableResponse[0]);
      if (self.airtableResponse[0]) {
        return {
          title: self.airtableResponse[0].fields.Title,
          paragraph: self.airtableResponse[0].fields.Paragraph,
          year: self.airtableResponse[0].fields.Year,
          taxonomy: self.airtableResponse[0].fields.Taxonomy,
          photoPreview: self.airtableResponse[0].fields.PhotoPreview,
          galerie: self.airtableResponse[0].fields.Galerie,
          video: self.airtableResponse[0].fields.Video,
        }
      }
    }
  }
}
</script>
