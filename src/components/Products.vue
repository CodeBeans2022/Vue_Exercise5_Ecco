<template>
    <div class="container">
        <div class="row" v-for="items in herbalStore" :key="items">
            <div class="col m-2">
                <div class="card">
                    <img v-bind:src="items.productImage" class="card-img-top" alt="...">
                    <div class="card-body">
                
                        <h5 class="card-title">{{ items.productName }}</h5>
                        <p class="card-text">Description: {{ items.productDescription }}</p>
                        <button href="#" class="btn btn-success" id="button">Add Item</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>




<script>
import Array from '@/main'
console.log(Array)
export default {
    data: function () {
        return {
            herbalStore: JSON.parse(localStorage.getItem('mediStore'))
        }
    }
}
</script>

<style scoped>
.card {
    width: 18rem;
    height: 400px;
    position:relative;
}

.card button {
    position: absolute;
    bottom: 0;
    left: 35%;
    margin-bottom: 10px;
}
.card img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
.container{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>

