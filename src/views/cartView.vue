<template>

    <div class="container" style="margin-top: 100px;">
        <div class="m-5">
            <h3 class="text-center text-decoration-underline">CART</h3>
        </div>
        <div class="container">
            <div class="text-center my-5" v-if="hasItem === false">
                <h3 class="kanji-font">購物車沒有商品</h3>
                <a class="submit-btn my-3" type="button">Back To Homepage</a>
            </div>

            <table class="table text-center">
                <thead>
                    <tr class="eng-font">
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th></th>

                    </tr>
                </thead>
                <tbody class="kanji-font">
                    <tr v-for="cart in resultCartList">
                        <td>{{ cart.title }}</td>
                        <td>{{ cart.cartItem.quantity }}</td>
                        <td>{{ cart.price }}</td>
                        <td><button class="submit-btn" @click="removeResult(cart.id)">Remove</button></td>
                    </tr>
                    
                </tbody>
            </table>
            

        </div>

    </div>

</template>

<style scoped>
table {
    background-color: #fff;

}
</style>

<script>
export default {
    inject: ['reload'],

    mounted() {
        this.axios.get('/cart').then((res) => {
            console.log(res)
            const { products: resultCartList } = res.data
            console.log(res.data)
            this.resultCartList = resultCartList
            this.amount = res.data.amount
            console.log(res.data.amount)
        })
    },
    data() {
        return {
            resultCartList: [],
            description: '',
            quantity: '',
            price: '',
            hasItem: true,
            // total: amount
        }
    },
    methods: {
        removeResult(id) {
            this.axios.post('/cart-delete-item', { productId: id }).then((response) => {
                //第一個參數:去哪裡，第二個參數是內容 productId是物件
                console.log(response)
                this.reload()
            })
        },
        // hasItem(){
        //     if(resultCartList.length > 0){
        //         return hasItem===true
        //     }else{
        //         return hasItem===false

        //     }
            
        // }
    

    }
}



</script>