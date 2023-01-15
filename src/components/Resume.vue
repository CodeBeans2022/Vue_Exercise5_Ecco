<template>
     <div class="loader" v-if="loaderDisplay">
        <div v-for="item in resumeArray" :key="item">
        <button class="btn btn-success" type="button" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            {{ item.name }}
        </button>
    </div>
    </div>
<div class="container mt-5 " v-else>
    <div class="row wandeDisplay">
        <div class="col">
            <h1 class="mb-5">Work Experience</h1>
            <div class="row">
                <div class="col">
                    <div id="worklist" class="d-flex flex-column gap-2 worklist-scrollspy text-center" v-for="item in resumeWork" :key="item" >
                        <a class="p-1 rounded my-3 anchorClass" :href="'#' + item.stringId" @click="clicking(item)" :class="item.class">{{ item.company }}</a>
                    </div>
                </div>
                <div class="col resume">
                    <div  data-bs-spy="scroll" data-bs-target="#worklist" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy" tabindex="0" v-for="item in resumeWork" :key="item" :id="item.stringId">
                        <table class="table">
                            <tr>
                                <th scope="row">Company</th>
                                <td>{{ item.company }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Occupation</th>
                                <td>{{ item.occupation }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>{{ item.duration }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>{{ item.location }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <h1 class="mb-5">Education Experience</h1>
            <div class="row">
                <div class="col">
                    <div id="educationlist" class="d-flex flex-column gap-2 worklist-scrollspy text-center" v-for="item in resumeEducation" :key="item" >
                        <a class="p-1 rounded my-3 anchorClass" :href="'#' + item.stringId" @click="clicking(item)" :class="item.class">{{ item.institution }}</a>
                    </div>
                </div>
                <div class="col resume">
                    <div data-bs-spy="scroll" data-bs-target="#educationlist" data-bs-offset="0" data-bs-smooth-scroll="true" class="scrollspy" :tabindex="item.id" v-for="item in resumeEducation" :key="item" :id="item.stringId">
                        <table class="table">
                            <tr>
                                <th scope="row">Institution</th>
                                <td>{{ item.institution }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Occupation</th>
                                <td>{{ item.course }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Duration</th>
                                <td>{{ item.duration }}</td>
                            </tr>
                            <tr>
                                <th scope="row">Location</th>
                                <td>{{ item.location }}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'Resume',
   methods: {
   clicking: function(item){
    let linksArray1 = [...this.resumeWork]
    linksArray1.forEach((item) => {
        item.class = ''
    })
let linksArray2 = [...this.resumeEducation]
linksArray2.forEach((item) =>{
        item.class = ''
})
   item.class = 'active'
   }
},
    data() {
    return{
        resumeWork: [
            {
                class: '',
                id: 1,
                stringId: 'one',
                company: 'EXL',
                occupation: 'Back Office Verifications Agent',
                duration: 'December 2021-May 2022',
                location: 'Media 24, Foreshore, Cape Town'
            },
            {
                class: '',
                id: 2,
                stringId: 'two',

                company: 'Rocomamas',
                occupation: 'Waitress',
                duration: 'February 2021-April 2021',
                location: `Jakes Gerwel Dr, Mitchell's Plain`
            },
            {
                class: '',
                id: 3,
                stringId: 'three',

                company: 'Mugg & Bean',
                occupation: 'Cashier and Barista',
                duration: 'December 2020-January 2021',
                location: 'Century City, Cape Town'
            },
            {
                class: '',
                id: 4,
                stringId: 'four',

                company: 'Shift Espresso Bar',
                occupation: 'Waitress',
                duration: 'December 2019-January 2020',
                location: 'Buitenkant Street CBD, Cape Town'
            },
            {
                class: '',
                id: 5,
                stringId: 'five',

                company: 'Mugg & Bean',
                occupation: 'Cashier and Barista',
                duration: 'December 2018-February 2019',
                location: 'Century City'
            }
            
        ], 
      resumeEducation:  [
            {
                class: '',
                id: 6,
                stringId: 'six',

                institution: 'Udemy',
                course: 'Network +, A+, Security +',
                duration: 'Currently Completing',
                location: 'Online Platform'
            },
            {
                class: '',
                id: 7,
                stringId: 'seven',

                institution: 'LifeChoices Academy',
                course: 'Coding and Web-Development',
                duration: 'September-December 2021',
                location: '314 Imam Haron Road, Lansdowne'
            },
            {
                class: '',
                id: 8,
                stringId: 'eight',

                institution: 'Balco College',
                course: 'Grade 11-12',
                duration: 'January 2019-June 2021',
                location: `Portlands, Mitchell's Plain`
            },
            {
                class: '',
                id: 9,
                stringId: 'nine',

                institution: 'Westridge High School',
                course: 'Grade 10',
                duration: 'January-December 2018',
                location: `Westridge, Mitchell's Plain`
            },
            {
                class: '',
                id: 10,
                stringId: 'ten',

                institution: 'Crawford CoCT',
                course: 'Information Technology & Computer Sciences',
                duration: 'January-December 2017',
                location: 'Crawford, Cape Town'
            },
            {
                class: '',
                id: 11,
                stringId: 'eleven',

                institution: 'Portland High School',
                course: 'Grade 8-9',
                duration: 'January 2015-December 2016',
                location: `Portland, Mitchell's Plain`
            }
        ],
        resumeArray: [
            {
                name: 'Resume',
            }
        ],
        loaderDisplay: true
    }
} ,
mounted() {
    setTimeout(() => {
        this.loaderDisplay = false
        console.log(this.loaderDisplay);
    }, 2000)
}

}
</script>

<style scoped>
.resume {
    overflow-y: scroll;
    height: 400px;
}

a {
    text-decoration:overline;
    color: black;
}

.active{
  background-color: orchid;
}

.scrollspy{
    height: 400px ;
    border: 2px solid black;
    margin-bottom: 20px;
    border-radius: 15px;
    padding: 10px;
}

td, th{
    border: 1px solid black;
    padding: 2px;
}

table{
    width: auto;
    height: 100%;
}

@media screen and (max-width: 760px){
    .wandeDisplay{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
}
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