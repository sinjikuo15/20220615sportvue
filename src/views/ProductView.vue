<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 col-md-8 product-wrapper">
                <figure>
                    <img :src="imageUrl" alt="" class="product">
                </figure>
            </div>
            <div class="col-12 col-md-4">
                <!-- <h3>{{ $route.params.productId }}</h3> -->
                <h4>{{title}}</h4>
                <p>售價：{{ price }}</p>
                <p>商品描述: {{ description }}</p>
                <!-- <a href="" type="button" @click="addCart(productId)">加入購物車</a> -->
                <button type="button" @click="addCart(productId)">加入購物車</button>
            </div>
        </div>
    </div>


</template>

<style>
.product-wrapper figure{
    max-width: 500px;
}
.product{
    width: 100%;
}
</style>
<script>
export default {

    mounted() {
        let vm = this;
        vm.axios.get('/shopList').then(async (response) => {
            console.log(response)
            vm.resultShopList = await response.data.data
            vm.resultShopList.forEach(function (item, index) {
                if (item.id == vm.$route.params.productId) {
                    vm.price = item.price
                }
                if (item.id == vm.$route.params.productId) {
                    vm.title = item.title
                }
                if (item.id == vm.$route.params.productId) {
                    vm.imageUrl = item.imageUrl
                }
                if (item.id == vm.$route.params.productId) {
                    vm.description = item.description
                }
            });

        })
        vm.axios.get('/cart').then((res) => {
            console.log(res)
        })
    },

    data() {
        return {
            resultShopList: [],
            title:'',
            price: '',
            imageUrl: '',
        }
    },

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

