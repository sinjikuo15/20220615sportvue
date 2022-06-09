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
                    <div v-for="shopItem in resultShopList" class="col-6 col-sm-4 col-md-3 saler row">
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
 body {
        background-color: white;
        width: 100%;
    }

    .main-header {
        background-color: #f8f9fa;
    }

    .member-information {
        color: rgb(108, 174, 232);
        font-size: 1rem;
    }

    .member-information a {
        color: rgb(108, 174, 232);
        text-decoration: none;
    }

    .offcanvas-bar {
        background-color: rgb(112, 45, 45);
    }

    .search-bar {
        margin-top: 10px;
        height: 100%;
    }

    .navbar-brand {
        margin-top: 10px;
        width: 200px;
    }

    .object-cover {
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width:768px) {
        .offcanvas-bar {
            display: none;
        }
    }

    @media screen and (max-width:768px) {
        .member-information {
            display: none;
        }

        .main-logo {
            display: none;
        }

        .blue-nav {
            display: none;
        }

        .type-bar {
            display: none;
        }
    }

    /* 藍色navbar */
    .blue-nav {
        background-color: rgb(42, 105, 176);
    }

    .blue-nav a {
        color: white;
        text-decoration: none;
    }

    nav {
        /* margin: 10px auto; */
        text-align: center;
    }

    nav ul {
        border-radius: 10px;
        display: inline-table;
        position: relative;
        list-style: none;
    }

    nav ul ul {
        display: none;
        list-style: none;
        z-index: 2;
    }

    nav ul li {
        float: left;
        list-style: none;
    }

    nav ul::after {
        content: "";
        display: block;
        clear: both;
        list-style: none;
    }

    nav ul li a {
        display: block;
        text-decoration: none;
        font-family: "微軟雅黑";

    }

    nav ul li:hover>ul {
        display: block;
        list-style: none;

    }

    nav ul li:hover {
        background: rgb(238, 238, 251);
        list-style: none;
    }

    nav ul li:hover a {
        color: gray;
    }

    nav ul ul {
        background: white;
        border-radius: 20;
        position: absolute;
        top: 100%;
        padding: 10px 10px;
        list-style: none;
        color: black;
        border: 2px solid rgb(159, 153, 153);
    }

    nav ul ul li {
        float: none;
        /* border-bottom: 1px solid #575f6a;  */
        list-style: none;

    }

    nav ul ul li a {
        color: aqua;
        background-color: white;
        padding: 5px 10px;
    }

    nav ul ul li a:hover {
        background: rgb(244, 241, 241);
        color: rgb(49, 227, 168);
    }

    .member-btn {
        background-color: #0669B2;
        border: 0px;
        padding: 5px 10px;
        color: white;
        font-weight: bold;
        letter-spacing: 2px;
    }

    /* 分類bar */
    .type-bar {
        box-sizing: border-box;
        margin: 0px 20px;
        background-color: #e7eaed;
        padding: 20px 20px;
    }

    .type-bar ul {
        list-style: none;
    }

    .type-bar ul a {
        text-decoration: none;
        color: gray;
    }

    .type-bar ul a:hover {
        text-decoration: none;
        color: rgb(150, 177, 219);
    }

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

    /* Footer */
    .main-footer {
        background-color: #0D3861;
        color: white;
    }

    .list-unstyled {
        /* float: left; */
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .list-unstyled {
        font-size: 18px;
        margin: 5px 0px 10px 0px;

    }

    .list-unstyled a {
        color: white;
        font-size: 12px;
        text-decoration: none;
    }

    .list-unstyled a:hover {
        color: rgb(169, 204, 221);
        transition: 0.5s;
    }

    .media-logo {
        color: white;
        font-size: 35px;
        letter-spacing: 20px;
    }

    .mail-set {
        font-size: 14px;
        text-decoration: none;
        color: white;
    }

    .mail-set:hover {
        color: rgb(169, 204, 221);
        transition: 0.5s;
    }
</style>