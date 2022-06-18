<template>
<div class="container py-1">
        <div class="row  justify-content-around py-3">
            <!-- 購物車清單 -->
            <div class="col-12  col-md-6 col-lg-8 py-2">
                <div class="row cart-title justify-content-center" v-if="hasItem === true">
                    購物清單
                </div>
                <div class="text-center my-5" v-if="hasItem === false">
                    <h3>購物車沒有商品</h3>
                    <a class="submit-btn my-3" type="button">Back To Homepage</a>
                </div>

                <table class="table text-center" v-if="hasItem === true">
                    <thead>
                        <tr class="eng-font">
                            <th scope="col"></th>
                            <th scope="col">商品名稱</th>
                            <th scope="col">價格</th>
                            <th scope="col">數量</th>
                            <th scope="col">小計</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr class="sale-content" v-for="cart in cartList">
                            <figure  style="max-width:200px">
                                <img :src="cart.imageUrl" alt="" style="max-width: 100%;" class="commodity-pic">

                            </figure>
                            <td>
                                <router-link :to="`/products/${cart.id}`" class="cart-content">{{ cart.title }}
                                </router-link>
                            </td>
                            <!-- <td>{{ cart.quantity }}</td> -->
                            <td style="letter-spacing: 2px;"> {{ cart.price }}</td>
                            <td class="list-unstyle">
                                <div class="row ">
                                    <div class="col-12 text-center ">
                                        <button class=" col-3 col-md-6 col-lg-2 add-delete "
                                            @click="deleteItem(cart.id)">-</button>

                                        <input class="number col-6 col-md-12 col-lg-6" type="number" min="0.00"
                                            :value="cart.quantity" />


                                        <button class=" col-3 col-md-6 col-lg-2 add-delete " @click="addItem(cart.id)">+
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td>{{ cart.price * cart.quantity }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-12  col-md-4 col-lg-3 py-2" v-if="hasItem === true">
                <div class="row detail-content justify-content-center "> 購物明細
                </div>
                <ul class="py-2 row justify-content-start py-3 ">

                    <div class="col-9 col-lg-8"> 小計</div>
                    <div class="col-3 col-lg-4"> {{ amount }}元</div>

                </ul>
                <ul class="row justify-content-start">

                    <div class="col-9 col-lg-8"> 折扣</div>
                    <div class="col-3 col-lg-4"> 0</div>
                </ul>
                <ul class="row justify-content-start total py-4">

                    <div class="col-9 col-lg-8"> 總額 </div>
                    <div class="col-3 col-lg-4">{{ amount }}元</div>
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

/* .delete-btn {
    background: linear-gradient(180deg, #fef63a 0, #eec423);
    padding: 0px 10px;
    border: 0px;
    border-radius: 5px;
    margin-top: 10px;
} */

.delete-btn:hover {
    background: linear-gradient(180deg, #fef63a 0, #ab922bdc);
    transition: 0.5s;
}

.add-delete {
    background-color: #2A69B0;
    color: white;
    border: 1px solid transparent;
    padding: 2px;
}


.bi-cart-check {
    margin-left: 5px;
    font-size: 20px;
}

/* 購物標題 */
.cart-title {
    background-color: #2A69B0;
    color: white;
    padding: 5px 5px;
    font-size: 20px;
    letter-spacing: 2px;
}

.cart-content {
    color: black;
    padding: 10px 5px;
    font-size: 18px;
    letter-spacing: 2px;
    text-decoration: none;
    font-weight: 600;
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

@media screen and (max-width:768px) {
    .commodity-pic{
        display: none;
    }
}
</style>

<script>
export default {
    inject: ['reload'],
    mounted() {
        this.cartList = JSON.parse(localStorage.getItem('cart')) || []

        this.totalAmount = Number(localStorage.getItem('totalAmount')) || 0
        // if(this.totalAmount===0){
        //     this.hasItem = false
        // }

    },
    data() {
        return {
            cartList: [],
            description: '',
            quantity: '',
            price: 0,
            totalAmount: 0,
            hasItem: true
        }
    },
    methods: {
        //只是一個動作function
        addItem(id) {
            console.log(this.cartList)
            this.cartList = this.cartList.map((item) => {
                if (item.id == id) {
                    item.quantity++
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(this.cartList))
            // this.amount()

        },
        deleteItem(id) {
            console.log(this.cartList)
            this.cartList = this.cartList.map((item) => {
                if (item.id == id) {
                    item.quantity--
                }
                if(item.quantity === 0){
                    console.log(item)
                    localStorage.removeItem(item)
                }
                // console.log(item)
                return item
            })
            localStorage.setItem('cart', JSON.stringify(this.cartList))
            // this.amount()
        },

    },
    computed: {
        //computed產出一個變數
        amount() {
            var totalAmount = 0
            for (let i = 0; i < this.cartList.length; i++) {
                totalAmount = this.cartList[i].quantity * this.cartList[i].price + totalAmount
            }
            console.log("totalAmount", totalAmount)

            localStorage.setItem('totalAmount', JSON.stringify(totalAmount))
            return totalAmount

        },

    }
    // watch: {
    //     'totalAmount': function () {
    //         console.log('watch')
    //     }
    // }

}
</script> 