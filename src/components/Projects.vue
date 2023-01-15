<template>
       <div class="loader" v-if="loaderDisplay">
        <div v-for="item in projectsArray" :key="item">
        <button class="btn btn-success" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{ item.name }}
        </button>
    </div>
    </div>
    <div class="container" v-else>
        <div class="row">
            <div class="col cardDisplay scrollspy mt-4">
                <div class="card" v-for="item in projectCards" :key="item">
                    <img :src="item.image" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.projectName }}</h5>
                        <a :href="item.githubLink" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>
                        <a :href="item.netlifyLink" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"><path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/><path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/></svg></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Projects',
    data() {
        return {
            projectCards: [
                {
                    image: 'https://i.postimg.cc/YqKcG3rV/Beans2021.png',
                    projectName: 'Slide The Beans Project',
                    githubLink: 'https://github.com/Jamie-Lee-Kinnear/Slide-The-Beans',
                    netlifyLink: 'https://kinnear20slide-the-beans.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/pXzHqScR/Calculator.png',
                    projectName: 'Calculator Project 2021',
                    githubLink: 'https://github.com/Jamie-Lee-Kinnear/Calculator-Exercise',
                    netlifyLink: 'https://kinnear20first-calculator.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/gcwd6jvw/Cards2022.png',
                    projectName: 'Professional Cards Project',
                    githubLink: 'https://github.com/CodeBeans2022/Cards',
                    netlifyLink: 'https://cards-2022.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/nrm6Ssk0/Carousel-Project.png',
                    projectName: 'Carousel Project',
                    githubLink: 'https://github.com/CodeBeans2022/Carousel_Project',
                    netlifyLink: 'https://leescarouselproject2022.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/gcfpypDg/Ecommerce-Project.png',
                    projectName: 'Ecommerce Project',
                    githubLink: 'https://github.com/CodeBeans2022/Ecommerce_Project2022',
                    netlifyLink: 'https://leesecommerceproject.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/Sj0gnDcG/Final-Project2021.png',
                    projectName: 'Portfolio Project 1',
                    githubLink: 'https://github.com/Jamie-Lee-Kinnear/Final-Project',
                    netlifyLink: 'https://jamie-lee-kinnear20.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/TYrzrDhP/My-Bakery.png',
                    projectName: 'My Bakery Project',
                    githubLink: 'https://github.com/CodeBeans2022/My-Bakery',
                    netlifyLink: 'my-bakery2022 https://my-bakery2022.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/mgB0VgFy/Portfolio-proj.png',
                    projectName: 'Portfolio Project 2',
                    githubLink: 'https://github.com/CodeBeans2022/Portfolio_2022',
                    netlifyLink: 'https://portfolio2-2021.netlify.app '
                },
                {
                    image: 'https://i.postimg.cc/gc6F25W8/Portfolio2022.png',
                    projectName: 'Portfolio Project 3',
                    githubLink: 'https://github.com/Jamie-Lee-Kinnear/Portfolio',
                    netlifyLink: 'https://leesportfolio2022.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/t4k8cG3Q/Portfolioproj2.png',
                    projectName: 'Portfolio Project 4',
                    githubLink: 'https://github.com/Jamie-Lee-Kinnear/My-Porfolio',
                    netlifyLink: 'https://kinnear20first-portfolio.netlify.app'
                },
                {
                    image: 'https://i.postimg.cc/Rh0GFdXW/POS2022.png',
                    projectName: 'POS Project 2022',
                    githubLink: 'https://github.com/CodeBeans2022/POS-Project',
                    netlifyLink: 'https://lees-pos2022.netlify.app/'
                },
                {
                    image: 'https://i.postimg.cc/tJmkV6M2/vue-E5.png',
                    projectName: 'Medicine Store',
                    githubLink: 'https://github.com/CodeBeans2022/Vue_Exercise5_Ecco',
                    netlifyLink: 'https://vue-medicine-store2023.netlify.app/'
                },
                {
                    image: 'https://i.postimg.cc/KvWxDvkW/Grid-Calculator.png',
                    projectName: 'Grid Calculator',
                    githubLink: 'https://github.com/CodeBeans2022/Grid-Calculator',
                    netlifyLink: 'https://lees-calculator2022.netlify.app/'
                },
                {
                    image: 'https://i.postimg.cc/J0nwbvm1/bsporti-2.png',
                    projectName: 'BS-Porfolio2022',
                    githubLink: 'https://github.com/CodeBeans2022/BS_Portfolio2022',
                    netlifyLink: 'https://jamieleekinnear2022.netlify.app/'
                }
            ],
            projectsArray: [
                {
                    name: 'Projects'
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
img {
    height: 400px;
    width: 18rem;
    object-fit: cover;
}

.card {
    width: 18rem;
    height: 300px;
    margin: 10px;
}
.cardDisplay{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.scrollspy{
    overflow-y: scroll;
    height: 570px;
}

a{
    color: rgb(123, 31, 120);
    margin: 10px;
    margin-right: 25px;
}

a:hover{
    background-color: orchid;
    padding: 10px;
    border-radius: 50%;
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

@media screen and (max-width: 760px){
    .cardDisplay{
    display: grid;
    grid-template-columns: 1fr;
}
}
</style>