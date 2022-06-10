<template>

    <div class="container" style="margin-top: 100px;">
        <div class="m-5">
            <h3 class="text-center text-decoration-underline">CART</h3>
        </div>
        <div class="container">
            <div class="text-center my-5" v-if="hasItem === false">
                <h3>購物車沒有商品</h3>
                <a class="submit-btn my-3" type="button">Back To Homepage</a>
            </div>

            <table class="table text-center">
                <thead>
                    <tr class="eng-font">
                        <th scope="col"></th>
                        <th scope="col">商品名稱</th>
                        <th scope="col">數量</th>
                        <th scope="col">價格</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cart in resultCartList">
                        <figure style="max-width:200px">
                            <img :src="cart.imageUrl" alt="" style="max-width: 100%;">

                        </figure>
                        <td>{{ cart.title }}</td>
                        <td>{{ cart.cartItem.quantity }}</td>
                        <td>{{ cart.price }}</td>
                        <td>
                            <button class="add-btn">+1</button>
                            <button class="delete-btn" @click="removeResult(cart.id)">-1</button></td>
                    </tr>
                    

                </tbody>
            </table>
                <h3 class="text-end">總額：{{amount}}元</h3>



        </div>

    </div>

</template>

<style scoped>
table {
    background-color: #fff;

}
td{
    vertical-align: middle
}

.add-btn{
    background: linear-gradient(180deg,#fef63a 0,#eec423);
    padding: 10px 20px;
    border: 0px;
    border-radius: 5px;
}
.add-btn:hover{    
    background:linear-gradient(180deg,#fef63a 0,#ab922bdc) ;
    transition: 0.5s;
}
.bi-cart-check{
    margin-left: 5px;
    font-size: 20px;
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
            amount:''
            // hasItem: true,
            // total: amount
        }
    },
    methods: {
        removeResult(id) {
            console.log("axios", this.axios)
            this.axios.post('/cart-delete-item', { productId: id }).then((response) => {
                //第一個參數:去哪裡，第二個參數是內容 productId是物件
                console.log("res", response)
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