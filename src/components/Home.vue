<template>
   <div class="loader" v-if="loaderDisplay">
        <div v-for="item in homeArray" :key="item">
        <button class="btn" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{ item.name }}
        </button>
    </div>
    </div>
    <div class="background" v-else>
        <div class="homeText">
            <h1 class="display-6">Bonjour, I'm Jamie-Lee Kinnear.</h1>
            <h2 class="lead">Aspiring Full-Stack Developer and I.T Engineer.</h2>
        </div>
    </div>
    
</template>

<script>
import FooterView from '@/components/Footer.vue'
export default {
    name: 'Home',
    components: {
        FooterView
    },
    data() {
        return {
            homeArray: [
                {
                    name: 'Home',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.homeText {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}



.background {
    width: 100%;
    height: 100vh;
    background-image: url(https://i.postimg.cc/5NvPPhgY/myimage.png);
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 120px 100px 250px #000000, inset -120px -100px 250px #000000;
}

h1,
h2 {
    color: white;
    text-align: center;
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
