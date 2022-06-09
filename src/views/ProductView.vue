<template>
<div class="container">
    <div class="row">
        <div class="col-8">
            <img src="" alt="">
        </div>
        <div class="col-4">
            <h3>{{ $route.params.productId }}</h3>
            <p>售價：</p>
            <a href="" type="button" @click="addCart(productId)">加入購物車</a>
        </div>
    </div>
</div>


</template>

<script>
export default {

    mounted() {
        this.axios.get('/shopList').then((response) => {
            console.log(response)
            this.resultShopList = response.data.data
        })
        this.axios.get('/cart').then((res) => {
            console.log(res)
        })
    },

//     data() {
//         return {
//             resultShopList: []
//         }
//     },

 methods: {
        addCart(id) {
            console.log(this.axios)
            this.axios.post('/cart-add-item', { productId: id }).then((response) => {
                //第一個參數:去哪裡，第二個參數是內容 productId是物件
                console.log(response)
                this.$router.push('/cart')
            })
        }
    }
}




</script>