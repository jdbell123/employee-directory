import axios from "axios";

const BASEURL = "https://randomuser.me/api/?&nat=us&results=50&inc=picture,name,phone,email,dob";

const API =  {
  getRandomEmployee: function() {
    return axios.get(BASEURL)
  }
};

export default API;