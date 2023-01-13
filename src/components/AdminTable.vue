<template>
    <div>
<table class="table">
    <thead>
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
        </tr>
    </thead>
</table>
    </div>
</template>

<script>
import Products from '@/main'
    export default {
        data: function () {
        return {
            herbalStore: JSON.parse(localStorage.getItem('mediStore'))
        }
    }
    }
</script>

<style scoped>

</style>