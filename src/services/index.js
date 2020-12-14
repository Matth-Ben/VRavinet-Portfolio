import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appluPpN8L1W9V0tO/ContentHome"
});
const Paragraph = axios.create({
  baseURL: "https://api.airtable.com/v0/appluPpN8L1W9V0tO/HomeParagraph"
});
const Header = axios.create({
  baseURL: "https://api.airtable.com/v0/appluPpN8L1W9V0tO/ProjectVideo"
});
const ContenHome = axios.create({
  baseURL: "https://api.airtable.com/v0/appluPpN8L1W9V0tO/ContentHome"
});
Axios.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}
Paragraph.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}
Header.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}
ContenHome.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}

export default{
  getInfo () {
    return Axios.get()
  },

  getParagraph () {
    return Paragraph.get()
  },

  getHeader () {
    return Header.get()
  },

  getInfoHome () {
    return ContenHome.get()
  },

  getInfo (slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'")
  }
}
