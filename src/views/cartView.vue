<template>


    <div class="container py-1">
        <div class="row  justify-content-around py-3">
            <!-- 購物車清單 -->
            <div class="col-11  col-md-6 col-lg-7 py-2">
                <div class="row cart-content justify-content-center">
                    購物清單
                </div>
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
                        <tr class="sale-content" v-for="cart in resultCartList">
                            <figure style="max-width:200px">
                                <img :src="cart.imageUrl" alt="" style="max-width: 100%;">

                            </figure>
                            <td>{{ cart.title }}</td>
                            <td>{{ cart.cartItem.quantity }}</td>
                            <td>{{ cart.price }}</td>
                            <td class="list-unstyle">
                                <button class="add-btn">+1</button>

                                <button class="delete-btn " @click="removeResult(cart.id)">-1</button>


                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-11  col-md-4 col-lg-3 py-2">
                <div class="row detail-content justify-content-center ">
                    購物明細
                </div>
                <ul class="py-2 row justify-content-start py-3">

                    <div class="col-6 col-lg-7"> 小記</div>
                    <div class="col-6 col-lg-5"> {{ amount }}元</div>

                </ul>
                <ul class="row justify-content-start">

                    <div class="col-6 col-lg-7"> 折扣</div>
                    <div class="col-6 col-lg-5"> 0</div>
                </ul>
                <ul class="row justify-content-start total py-4">

                    <div class="col-6 col-lg-7"> 總額</div>
                    <div class="col-6 col-lg-5">{{ amount }} 元</div>
                </ul>
                <div class="row justify-content-center">
                    <button class="col-4 col-md-6 confirm"> 送出訂單</button>
                </div>



            </div>
        </div>
    </div>

</template>

<style scoped>
table {
    background-color: #fff;
}

td {
    vertical-align: middle
}

.add-btn {
    background: linear-gradient(180deg, #fef63a 0, #eec423);
    padding: 0px 8px;
    border: 0px;
    border-radius: 5px;
}

.add-btn:hover {
    background: linear-gradient(180deg, #fef63a 0, #ab922bdc);
    transition: 0.5s;
}

.delete-btn {
    background: linear-gradient(180deg, #fef63a 0, #eec423);
    padding: 0px 10px;
    border: 0px;
    border-radius: 5px;
    margin-top: 10px;
}

.delete-btn:hover {
    background: linear-gradient(180deg, #fef63a 0, #ab922bdc);
    transition: 0.5s;
}

.bi-cart-check {
    margin-left: 5px;
    font-size: 20px;
}

/* 購物標題 */
.cart-content {
    background-color: rgb(59, 118, 185);
    color: white;
    padding: 10px 5px;
    font-size: 20px;
    letter-spacing: 2px;
}

.sale-content {
    color: gray;
}

.list-unstyle ul {
    list-style: none;
}

/* 明細標題 */
.detail-content {
    background-color: rgb(111, 156, 208);
    color: white;
    padding: 5px 5px;
    font-size: 20px;
    letter-spacing: 2px;
}

.total {
    font-size: 20px;
    /* font-weight: bold; */
}

.confirm {
    background: linear-gradient(180deg, #fef63a 0, #eec423);
    padding: 10px 20px;
    border: 0px;
    border-radius: 5px;
}

.confirm:hover {
    background: linear-gradient(180deg, #fef63a 0, #ab922bdc);
    transition: 0.5s;
}
</style>

<script>
export default {
    inject: ['reload'],
    mounted() {
        this.getCartItem()
    },
    data() {
        return {
            resultCartList: [],
            description: '',
            quantity: '',
            price: '',
            amount: ''
            // hasItem: true,
            // total: amount
        }
    },
    methods: {
        removeResult(id) {
            // console.log("axios", this.axios)
            this.axios.post('/cart-delete-item', { productId: id }).then((response) => {
                //第一個參數:去哪裡，第二個參數是內容 productId是物件
                console.log("res", response)
                this.reload()
            })
        },
        getCartItem() {
            this.axios.get('/cart').then((res) => {
                console.log(res)
                const { products: resultCartList } = res.data
                console.log("data",res.data)
                this.resultCartList = resultCartList
                this.amount = res.data.amount
                console.log("amount",res.data.amount)
            })
        }
    },
    // watch:{
    //      resultCartList: function () {
    //         this.getCartItem()
    //     }
    // }
}
</script> 