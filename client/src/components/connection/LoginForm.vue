<template>
<div class="container">
  <h1>Login to your account</h1>
  <form @submit.prevent="loginUser">
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input v-model="login.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input v-model="login.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
export default {
  data(){
    return {
      login: {
        email:'',
        password:''
      }
    }
  },
  methods: {
    async loginUser() {
      try {
        let response = await axios.post("http://localhost:3000/users/login", this.login);
        let token = response.data.token;
        localStorage.setItem("jwt", token);
        if (token) {
          swal("Success", "Login Successful", "Error");
          this.$router.push("/home");
          location.reload();
        }
      } catch (err) {
        swal("Error", "Something Went Wrong", "error");
        console.log(err.response);
      }
    }
  }
}
</script>