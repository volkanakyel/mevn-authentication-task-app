import axios from 'axios';
const API_URL = 'http://localhost:3000/tasks'

export default {
  getTasks() {
    axios.get(API_URL)
      .then(response => {
        console.log(response);
      })

  }
}