<template>
    <div class="loader" v-if="loaderDisplay">
      <div v-for="item in ContactArray" :key="item">
        <button class="btn btn-success" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{ item.name }}
        </button>
    </div>
    </div>
    <div class="container" v-else>
        <div class="row">
            <div class="col mt-2 myform">
                <form action="https://formspree.io/f/xdojdjnj" method="POST">
                    <input class="placeholder1" type="text" placeholder="First Name" />
                    <input class="placeholder1" type="text" placeholder="Last Name" />
                    <input class="placeholder1" type="email" placeholder="Email" />
                    <input class="placeholder1" type="text" placeholder="Phone Number" />
                    <textarea class="placeholder1" name="message" id="message" placeholder="Type Message"></textarea>
                    <button class="placeholder1 shadow" type="submit">Send</button>
                    <button class="placeholder1 shadow" type="reset">Reset</button>
                </form>
            </div>
       
            <div class="col mapouter">
                <div class="gmap_canvas">
                    <iframe width="500" height="500" id="gmap_canvas"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.267592850428!2d18.49050991560426!3d-33.98565983256563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc433bedd50e81%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1633611581000!5m2!1sen!2sza"
                        frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
    </div>
    </div>
</template>

<script>

export default {
    name: 'Contact',
   data(){
    return{
ContactArray: [
  {
    name: 'Contact',
  }
],
loaderDisplay: true,
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
form,
input,
textarea,
.shadow {
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border-radius: 10px;
  color: white;
  padding: 5% 10%;
}

form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 60%;
 
}

.myform {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
}

.mapouter {
  height: 50%;
}


.mapouter {
  position: relative;
  text-align: center;
  height: 500px;
  width: 600px;
  margin: 30px 0 ;
}

.gmap_canvas {
  overflow: hidden;
  background: none !important;
  height: 500px;
  width: 100%;
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