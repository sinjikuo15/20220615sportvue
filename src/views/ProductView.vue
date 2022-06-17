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
                <h4>{{ title }}</h4>
                <p>售價：{{ price }}</p>
                <p>商品描述: {{ description }}</p>

                <div class="quantity input-group">
                    <button class="btn btn-primary" @click="decrement()">-</button>

                    <input class="number" type="number" min="0.00" v-model="quantity" />

                    <button class="btn btn-primary" @click="increment()">+</button>
                    <button @click="addCart($route.params.productId,quantity)">加入購物車</button>
                    <!-- click後傳送productId和數量到下面的addCart() -->
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
.product-wrapper figure {
    max-width: 500px;
}

.product {
    width: 100%;
}

.add-btn {
    background: linear-gradient(180deg, #fef63a 0, #eec423);
    padding: 10px 20px;
    border: 0px;
    border-radius: 5px;
}

.add-btn:hover {
    background: linear-gradient(180deg, #fef63a 0, #ab922bdc);
    transition: 0.5s;
}

.bi-cart-check {
    margin-left: 5px;
    font-size: 20px;
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
                    vm.title = item.title
                    vm.imageUrl = item.imageUrl
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
            title: '',
            price: '',
            imageUrl: '',
            quantity: 1
        }
    },

    methods: {
        // addCart(id) {
        //     console.log(this.axios)
        //     this.axios.post('/cart-add-item', { productId: id }).then((response) => {
        //         //第一個參數:去哪裡，第二個參數是內容 productId是物件
        //         console.log(response)
        //         this.$router.push('/cart')
        //     })
        // },
        addCart(id,quantity){
            this.$emit('addCart',{id,quantity,title:this.title,price: this.price,imageUrl:this.imageUrl})
            //用$emit呼叫父層app.vue，名字叫做addCart，物件是剛剛的productId跟quantity，但是改名為id這樣
        },
        increment() {
            this.quantity++;
        },
        decrement() {
            if (this.quantity === 1) {
                this.quantity = 1;
            } else {
                this.quantity--;
            }
        },
    }
}

</script>

