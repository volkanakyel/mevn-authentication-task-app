<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    
    <a class="navbar-brand" href="#"><i class="fas fa-tasks"></i> Vue Task App</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor03">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link" to="/home">Home<span class="sr-only"></span></router-link>
        </li>
      </ul>
      <div v-if="!isLoggedIn" class="form-inline my-2 my-lg-0">
        <router-link class="btn btn-info" to="/login">Login</router-link>
        <router-link class="btn btn-success" to="/register">Sign In</router-link>
      </div>
      <div v-if="isLoggedIn">
        <a class="btn btn-info" @click="logout()">Logout</a>
      </div>
    </div>
  </nav>
  <div>
    <!-- <Landing /> -->
  </div>
</div>
</template>

<script>
// import Landing from '../components/Landing'
export default {
  components: {
    // Landing
  },
  data() {
    return {
      auth: '',
      user: ''
    }
  },
  computed: {
    isLoggedIn(){
      return (localStorage.getItem('jwt') ? true : false)
    }
  },
  methods: {
    logout() {
      console.log("Logout now")
      localStorage.removeItem('jwt');
      location.reload();
    },
    
  }
}
</script>