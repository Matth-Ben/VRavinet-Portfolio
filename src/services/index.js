import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.airtable.com/v0/appluPpN8L1W9V0tO/ContentHome'
});
const Paragraph = axios.create({
  baseURL: 'https://api.airtable.com/v0/appluPpN8L1W9V0tO/HomeParagraph'
});
const Project = axios.create({
  baseURL: 'https://api.airtable.com/v0/appluPpN8L1W9V0tO/Project'
});
const Image = axios.create({
  baseURL: 'https://api.airtable.com/v0/appluPpN8L1W9V0tO/ImageHome'
});
Axios.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`};
Paragraph.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`};
Project.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`};
Image.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`};

export default{
  getInfo () {
    return Axios.get()
  },

  getParagraph () {
    return Paragraph.get()
  },

  getImage () {
    return Image.get()
  },

  getProjects () {
    return Project.get()
  },

  getProject (slug) {
    return Project.get("?filterByFormula={url}='" + slug + "'")
  }
}
