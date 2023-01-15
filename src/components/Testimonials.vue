<template>
       <div class="loader" v-if="loaderDisplay">
        <div v-for="item in testimonialArray" :key="item">
        <button class="btn btn-success" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{ item.name }}
        </button>
    </div>
    </div>
    <div class="container" v-else>
    <div class="container" >
        <div class="row">
            <div class="col">
                <div id="carouselFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item" data-bs-interval="2000" v-for="item in testimonials" :key="item" :class="item.class">
                            <div class="container-testi">
                                    <div class="row mx-auto">
                                        <div class="col testi-img">
                                            <img :src="item.image">
                                        </div>
                                        <div class="col testi-text">
                                            <h4>{{ item.name }}</h4>
                                    <h5>{{ item.text }}</h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-grid">
            <button class="carousel-control" type="button" data-bs-target="#carouselFade" data-bs-slide="prev">
                <span class="carousel-control" aria-hidden="true"><i class="fa-sharp fa-solid fa-arrow-left"></i></span> 
            </button>  
            <button class="carousel-control" type="button" data-bs-target="#carouselFade" data-bs-slide="next">
                <span class="carousel-control" aria-hidden="true"><i class="fa-sharp fa-solid fa-arrow-right"></i></span>
            </button>
    </div>
</div>
</template>


<script>
export default {
    name: 'Testimonials',
    data() {
        return {
            testimonials: [
                {
                    image: 'https://i.postimg.cc/pXT1fM6h/Abdul.png',
                    class: 'active',
                    name: 'Abdul Wahhaab Abrahams',
                    text: 'Jamie is a remarkable programmer and is always willing to lend a helping hand wherever she is needed. Jamie is naturally talented at programming and would be a great addition for any company.',
                    githubLink: '',
                    netlifyLink: ''
                },
                {   class: '',
                    image: 'https://i.postimg.cc/vZxqKLMG/Deno.png',
                    name: 'Deno Rautenbach',
                    text: 'Jamie-Lee is a walking representation of alluring. Her presence may be inconspicuous, but will always be felt. Intellectually capable of grasping concepts that baffle me to no end. I believe her logical approach using different implementation for testing an idea is a awesome way of grasping ideas.',
                    githubLink: '',
                    netlifyLink: ''
                },
                {   class: '',
                    image: 'https://i.postimg.cc/0Nptkkb3/Nabila.png',
                    name: 'Nabila Samsodien',
                    text: 'Jamie-Lee is a great peer to have. She is a hard-working, dedicated and never stagnant while being generous with the knowledge she acquired. She is eager to sit with her peers and take on the challenge together, not leaving anyone behind. I would recommend her for both remote and team work. Jamie is the type of person that would be a valuable asset to any company or organization that would be lucky enough to have her.',
                    githubLink: '',
                    netlifyLink: ''
                },
                {   class: '',
                    image: 'https://i.postimg.cc/9f38HRFZ/Savannah.png',
                    name: 'Savannah Samuels',
                    text: `Jamie is a smart individual who is never afraid to learn new things. She's always willing to help the next person , no matter who you are`,
                    githubLink: '',
                    netlifyLink: ''
                },
                {   class: '',
                    image: 'https://i.postimg.cc/4NS2w2D8/Ryan.png',
                    name: 'Ryan Thomas',
                    text: 'Jamie-Lee Kinnear is a hard-working individual and great learner, always going the extra mile to make sure that she understands the task at hand in order to get the job done to perfection. She has a great eye for detail and has the ability to read, understand and implement code as if she was a natural.',
                    githubLink: '',
                    netlifyLink: ''
                }
            ],
            testimonialArray: [
                {
                    name: 'Testimonials'
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

img {
    height: 500px;
    width: 30rem;
    margin-bottom: 30px;
    object-fit: cover;
    box-shadow: 0 8px 32px 0 rgba(80, 2, 89, 0.831);
    border-radius: 50% !important;
}
.card{
    width: 50rem;
    background-color: transparent;
}

.carousel-item{
    display: flex;
    justify-content: center;
}


.container{
    display: flex;
    align-items: center;
}


.card-body{
    background-color: black;
}


i{
    color: black;
    font-size: 50px;
 
}

.card-body{
    height: 200px;
}
h5{
    margin: 10px;
}

.testi-img{
width: 600px;
}
.testi-text{
width: 500px;
}
h5{
margin-top: 150px;
}

.container-grid button{
    border-radius: 50%;
    padding: 5px;
    height: 75px;
    width: 75px;
    margin-bottom: 5px;
    margin-right: 25px;
}

button:hover{
    background-color: orchid;
}

.container-grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: absolute;
    bottom: 0;
    margin-left: 550px;
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