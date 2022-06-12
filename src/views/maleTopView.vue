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

                    <div v-for="categoryItem in categoryList" class="col-6 col-sm-4 col-md-3 saler row">
                        <figure style="max-width:200px">
                            <a href=""><img :src="categoryItem.imageUrl" alt="" style="max-width: 100%;">
                            </a>

                            <router-link :to="`/products/${categoryItem.id}`" class="price-btn">詳細資訊</router-link>
                            <p>{{ categoryItem.title }} </p>
                            <p>售價：{{ categoryItem.price }}元</p>
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
            var categoryList = response.data.data.filter(item => {
                return item.gender === 'male' && item.category === 'top'
            })
            this.categoryList = categoryList
            console.log('categoryList', categoryList)

        })
        this.axios.get('/cart').then((res) => {
            console.log(res)
        })

    },

    data() {
        return {
            categoryList: []
        }
    },

}
</script>