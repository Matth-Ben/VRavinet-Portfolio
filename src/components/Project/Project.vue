<template>
  <div id="project">
    <div class="project--container">
      <div class="project--container--content">
        <h2 class="project--container--content--title text-center">Mes projets</h2>
        <div class="project--container--content--list project--container--content--list--favoris">
          <div class="project--container--content--item" v-for="project in projects" v-if="project.preview !== true && project.favoris === true">
            <a :href="project.url">
              <div v-for="image in project.photo">
                <img v-bind:src="image.url" >
              </div>
            </a>
          </div>
        </div>
        <div class="project--container--content--list">
          <div class="project--container--content--item" v-for="project in projects" v-if="project.preview !== true && project.favoris !== true">
            <a :href="project.url">
              <div v-for="image in project.photo">
                <img v-bind:src="image.url" >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from '../../services/index'
export default {
  name: 'Project',
  data () {
    return {
      projectResponse: []
    }
  },
  mounted: function () {
    let self = this
    async function getProject () {
      try {
        const response = await database.getProjects()
        self.projectResponse = response.data.records
      } catch ( err ) {
        console.log( err )
      }
    }
    getProject()
  },
  computed: {
    projects () {
      let self = this
      let projectList = []
      for  ( let i = 0; i < self.projectResponse.length; i++ ) {
        let project = {
          photo: self.projectResponse[i].fields.PhotoPreview,
          preview: self.projectResponse[i].fields.Preview,
          url: self.projectResponse[i].fields.Url,
          favoris: self.projectResponse[i].fields.Favoris
        }
        projectList.push ( project )
      }
      return projectList
    }
  }
};
</script>
