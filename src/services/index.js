import axios from 'axios'

const Axios = axios.create({
  baseURL: "https://api.airtable.com/v0/appi0QKsV0ERgFCd1/VRavinet-default"
});
const Paragraph = axios.create({
  baseURL: "https://api.airtable.com/v0/appi0QKsV0ERgFCd1/VRavinet-paragraph"
});
const Header = axios.create({
  baseURL: "https://api.airtable.com/v0/appi0QKsV0ERgFCd1/VRavinet-header"
});
Axios.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}
Paragraph.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}
Header.defaults.headers.common = {'Authorization': `Bearer keygFHin7wgEG0SBU`}

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

  getIngo (slug) {
    return Axios.get("?filterByFormula={Slug}='" + slug + "'")
  }
}
