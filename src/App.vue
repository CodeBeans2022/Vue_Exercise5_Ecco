<template>
  <div class="gridContainer">
    
    <router-view/>
    <Navbar/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
import FooterView from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    FooterView
  }
}
</script>

<style>

.gridContainer{
  display: grid;
  grid-template-columns: 7fr 1fr;
  grid-template-rows: 1fr;
  min-height: 100vh;

}

@media screen and (max-width: 760px){
  .gridContainer{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .nav-background{
    display: none !important;
  }
  .navMobile{
    display: block !important;
  }
}

*{
  text-decoration: none;
}

@media screen and (max-width: 760px){
  Footer{
    width: 100% !important;
  }
}

</style>
