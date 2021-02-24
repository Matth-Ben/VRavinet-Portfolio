<template>
  <div id="project">
    <div class="arrow--return">
      <router-link to="/">
        <i class="fas fa-long-arrow-alt-left"><span>Retour</span></i>
      </router-link>
    </div>
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
                  <img style="width: 100%; height: auto" :src="image.url" v-if="image.thumbnails.large.width" :width="image.thumbnails.large.width" :height="image.thumbnails.large.height"/>
                  <img style="width: 100%; height: auto" :src="image.url" v-else/>
                </div>
              </div>
            </div>
          </div>
          <div class="col6">
            <div class="single--project--content">
              <div>
                <h1 class="mt-0 mb-0">{{ project.title }}</h1>
                <div class="d-flex flex-wrap-wrap">
                  <h3 class="mr-1">Type : <span>{{ project.taxonomy }}</span></h3>
                  <h3>Année : <span>{{ project.year }}</span></h3>
                </div>
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
