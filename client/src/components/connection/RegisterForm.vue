<template>
<div class="container">
  <h1>Register</h1>
  <form @submit.prevent="registerUser">
    <div class="form-group">
      <label for="formGroupExampleInput">Name</label>
      <input v-model="register.name" type="text" class="form-control" id="formGroupExampleInput" placeholder="Your name">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Email</label>
      <input v-model="register.email" type="email" class="form-control" id="formGroupExampleInput4" placeholder="Your email">
    </div>
    <div class="form-group">
      <label for="formGroupExampleInput2">Password</label>
      <input v-model="register.password" type="password" class="form-control" id="formGroupExampleInput5" placeholder="Choose a password">
    </div>
    <button type="submit" class="btn btn-primary">Subscribe</button>
  </form>
</div>
</template>

<script>
import swal from 'sweetalert';
import axios from 'axios';
export default {
  data() {
    return {
      register : {
        name:'',
        email:'',
        password: '',
      }
    }
  },
    methods: {
    async registerUser() {
      try {
        let response = await axios.post("http://localhost:3000/users/register", this.register);
        let token = response.data.token;
        if (token) {
          localStorage.setItem("jwt", token);
          this.$router.push("/home");
          swal("Success", "Registration Was successful", "success");
          location.reload();
        } else {
          swal("Error", "Something Went Wrong", "Error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
}
</script>