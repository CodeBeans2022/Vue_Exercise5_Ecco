<template>
   <div class="loader" v-if="loaderDisplay">
        <div v-for="item in aboutArray" :key="item">
        <button class="btn btn-success" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{ item.name }}
        </button>
    </div>
    </div>
    <div class="container mt-5" v-else>

        <div class="row">

            <div class="col-4 mt-5">
                <img src="https://i.postimg.cc/cLSFPFkD/self-portrait.jpg" alt="">
            </div>

            <div class="col-7 mt-5 para">
                <p>
                    I am driven and self-motivated. I work hard to achieve my dreams and
                    goals. Furthermore, I am someone who would go above and beyond for
                    any company I work for and others in general. I believe in integrity
                    and loyalty. My greatest strengths are sympathy and empathy. I am a
                    caring and loving person that will always put my family and others
                    before myself.
                </p>
                <p>
                    My love and passion for technology started at a young age. Growing
                    up around my brother and cousins playing video games fascinated me.
                    My first time using technology was to play video games, and I loved
                    it! Still do. As the years went by, I became more interested in what
                    makes technology work. My passion grew even more when I studied I. T
                    and Computer Sciences. Ever since, it has been my dream to pursue
                    various fields in the tech industry.
                </p>
                <table class="table mt-5">
                <tr>
                  <th>Name</th>
                  <td>Jamie-Lee Kinnear</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>21</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>Female</td>
                </tr>
                <tr>
                  <th>Nationality</th>
                  <td>South African</td>
                </tr>
              </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'About',
  data(){
    return {
      aboutArray: [
        {
          name: 'About'
        }
      ],
      loaderDisplay: true
    }
  },
  mounted() {
    setTimeout(() => {
        this.loaderDisplay = false
        console.log(this.loaderDisplay);
    }, 2000)
}
}
</script>

<style scoped>
.container img{
    height: 450px;
    width: 250px;
    object-fit: cover;
    border-radius: 30px;
}
.loader button{
    margin-top: 250px;
    background-color: transparent;
    border:none ;
    color: darkorchid;
    height: 100px;
    width: 400px;
    font-size: 90px;
    
}


</style>