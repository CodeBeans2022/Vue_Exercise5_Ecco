<template>
<nav class="navbar navMobile fixed-top">
  <div class="container-fluid">
    <router-link to="/"><img class="initialsimg" src="../assets/initails.png"></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <router-link class="nav" to="/">Home</router-link>
      <router-link class="nav" to="/about">About</router-link>
      <router-link class="nav" to="/resume">Resume</router-link>
      <router-link class="nav" to="/projects">Projects</router-link>
      <router-link class="nav" to="/testimonials">Testimonials</router-link>
      <router-link class="nav" to="/contact">Contact Me</router-link>
      </div>
    </div>
  </div>
</nav>

  <div class="nav-background">
    <nav class="nav nav-tabs flex-column">
      <router-link to="/"><img src="../assets/initails.png"></router-link>
      <router-link class="nav-link nav-text-color" to="/">Home</router-link>
      <router-link class="nav-link nav-text-color" to="/about">About</router-link>
      <router-link class="nav-link nav-text-color" to="/resume">Resume</router-link>
      <router-link class="nav-link nav-text-color" to="/projects">Projects</router-link>
      <router-link class="nav-link nav-text-color" to="/testimonials">Testimonials</router-link>
      <router-link class="nav-link nav-text-color" to="/contact">Contact Me</router-link>
      <Footer class="container-fluid text-light text-center position-fixed" style="height: 45px; margin-bottom: 35px; margin-top: 800px;  width: 75%; z-index:10; background-color:darkorchid; border-radius: 5px;">Jamie-Lee Kinnear 2023</Footer>
    </nav>
  </div>
  
</template>

<script>

export default {
  name: 'Navbar',

}
</script>

<style>
Footer{
  font-size: 14px;
}
.nav-background {
  background: rgba(185, 4, 235, 0.479);
  box-shadow: 0 8px 32px 0 rgba(42, 10, 80, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;

}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  min-height: 100vh;
}


.nav-tabs img {
  height: 30px;
  width: 60px;
  top: 25px;
  left: 40px;
}

.nav-tabs {
  width: fit-content;
  height: 65vh;
  border-radius: 20px;
  margin-top: 0px;
  justify-content: space-around;
  text-decoration: none;
  background-color: darkorchid;
  padding: 0 12px !important;
  margin-top: 10px;
}

.nav-text-color {
  width: 100%;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.nav-text-color:hover {
  background-color: orchid !important;
  color: white;
}

.nav-link:visited {
  color: white;
  
}

.nav-link:active {
  background-color: orchid;
  
}

.nav-text-color {
  color: white;
  
}

.navMobile{
  background-color: orchid;
  display: none !important;
}
#offcanvasNavbar{
  background-color: orchid;
}

.initialsimg{
  height: 50px;
  width: 70px;
  object-fit: cover;
}
</style>