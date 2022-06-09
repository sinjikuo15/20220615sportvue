<template>

 <!-- 商品區 -->
    <div class="container-fluid">
        <div class="row justify-content-start">
            <!-- 左邊清單bar -->
            <div class=" col-2 justify-content-start type-bar ">
                <h3>分類</h3>
                <h5>↬男士</h5>
                <ul>
                    <li><a href="">上衣</a></li>
                    <li><a href="">褲子</a></li>
                    <li><a href="">鞋子</a></li>
                </ul>
                <hr>
                <h5>↬女士</h5>
                <ul>
                    <li><a href="">上衣</a></li>
                    <li><a href="">褲子</a></li>
                    <li><a href="">鞋子</a></li>
                </ul>
                <hr>
                <h5>↬兒童/青少年</h5>
                <ul>
                    <li><a href="">上衣</a></li>
                    <li><a href="">鞋子</a></li>
                </ul>
            </div>
            <!-- 商品區 -->
            <div class="col-12  col-md-9">
                <div class="row type-content">
                    <!-- 女上衣區 -->
                    <div v-for="shopItem in resultShopList" class="col-6 col-sm-4 col-md-3 saler">
                        <figure>
                            <a href=""><img
                                    :src="shopItem.imageUrl"
                                    alt="" style="width: 200px; height: 200px">
                            </a>
                            <!-- <button class="price-btn" @click="addCart(shopItem.id)">NT$ {{shopItem.price}}</button> -->
                            <router-link :to="`/products/${shopItem.id}`" class="price-btn">詳細資訊</router-link>
                            <p>{{shopItem.title}} </p>
                            <p>售價：{{shopItem.price}}元</p>
                        </figure>
                    </div>
                </div>
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

    data() {
        return {
            resultShopList: []
        }
    },
    // methods: {
    //     addCart(id) {
    //         console.log(this.axios)
    //         this.axios.post('/cart-add-item', { productId: id }).then((response) => {
    //             //第一個參數:去哪裡，第二個參數是內容 productId是物件
    //             console.log(response)
    //             this.$router.push('/cart')
    //         })
    //     }
    // }
}

</script>

<style scoped>
 /* 商品區 */
    .type-content {
        padding: 10px 5px;
    }

    .saler figure {
        display: inline-block;
        max-width: 500px;
        background-color: var(--main-color);
        /* margin-right: 60px; */
    }

    .saler {
        text-align: center;
    }

    .saler p {
        line-height: 2;
        font-size: 12px;
    }

    .price-btn {
        font-size: 12px;

        background-color: #FDD935;
        border-radius: 5px;
        border: 0px;
        padding: 5px 25px;
        margin-top: 10px;
    }

    .price-btn:hover {
        background-color: #d8bc42;
        transition: 0.5s;
    }

</style>