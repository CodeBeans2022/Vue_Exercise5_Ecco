import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

createApp(App).use(store).use(router).mount('#app')

let herbalStore = [
    {
      productName: 'Butterbur Root',
      productPrice: 126,
      productImage: 'https://i.postimg.cc/C5SrnPn8/Butterbur-Root.jpg' ,
      productDescription: 'Treats Hay Fever, anxiety and Deppression.'
    }, 
    {
      productName: 'Dandelion Root',
      productPrice: 103,
      productImage: 'https://i.postimg.cc/hjF5cPSp/Dandelion-Root.jpg' ,
      productDescription: 'Treats Liver problems, Kidney Disease, Swelling, Skin problems, Heartburn and Stomach Aches.'
    },
    {
      productName: 'Elecampane Root',
      productPrice: 86,
      productImage: 'https://i.postimg.cc/yxjQmm0b/Elecampane-Root.jpg' ,
      productDescription: 'Treats Lung Disease including, Asthma, Bronchitis and cough, especially coughing caused by tubercullosis.'
    },
    {
      productName: 'Frangula Bark',
      productPrice: 79,
      productImage: 'https://i.postimg.cc/tgnMKVHs/Frangula-Bark.jpg' ,
      productDescription: 'Treats Constipation.'
    },
    {
      productName: 'Ginkgo Leaves',
      productPrice: 57,
      productImage: 'https://i.postimg.cc/1Rrj1Qbr/Gingko-Leaves.jpg' ,
      productDescription: 'Treats Blood Disorders and Memory Issues.'
    },
    {
      productName: 'Lungwort',
      productPrice: 114,
      productImage: 'https://i.postimg.cc/nLN6rG1K/Lungwort.jpg' ,
      productDescription: 'Treats Breathing Conditions, Intestinal Ailments, Kidney and Urinary Tract Problems.'
    },
    {
      productName: 'Oak Bark',
      productPrice: 72,
      productImage: 'https://i.postimg.cc/3RgbR5N7/OakBark.jpg' ,
      productDescription: 'Treats Toothache, Gastropathies, Inflammation and Burns.'
    },
    {
      productName: 'Hawthorn Leaves',
      productPrice: 69,
      productImage: 'https://i.postimg.cc/bJdT4ZSZ/Hawthorn-Leaves.jpg' ,
      productDescription: 'Treats Heart Disease, High Blood Pressure, Cholesterol, Skin Boils and Skin Sores.'
    }
  ]
  
  localStorage.setItem('mediStore', JSON.stringify(herbalStore));

  console.log(herbalStore)
