<template>
    <!-- 商品區 -->
    <div class="container-fluid">
        <div class="row justify-content-center">
            <sideBar></sideBar>
            <!-- 商品區 -->
            <div class="col-12  col-md-9 py-5">
                <div class="row type-content justify-content-center">

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
import sideBar from '../components/sideBar.vue'
export default {
    components: {
        sideBar
    },
    mounted() {
        this.fetchProductsInfo()

    },

    data() {
        return {
            categoryList: []
        }
    },
    // computed: {
    //     //剛點進來的時候，先給這個路由網址$route.params.userId
    //     genderId() {
    //         return this.$route.query.gender = 'male'
    //         // console.log($route.query)
    //         //路由會自動存變數在params中，我們取出route的param，並且指定userId，userId在index.js中的path有設定
    //     }
    // },
    watch: {
        '$route.query': function () {
            this.fetchProductsInfo()
        }
    },
    methods: {
        fetchProductsInfo() {
            this.axios.get('/shopList').then((response) => {
                console.log(response)
                this.resultShopList = response.data.data
                console.log(this.$route.query.gender)
                console.log(this.$route.query.category)
                var categoryList = response.data.data.filter(item => {
                    if (this.$route.query.category === 'all') {
                        return item.gender === this.$route.query.gender
                    }
                    else {
                        return item.gender === this.$route.query.gender && item.category === this.$route.query.category
                    }

                })
                this.categoryList = categoryList
                console.log('categoryList', categoryList)

            })
            this.axios.get('/cart').then((res) => {
                console.log(res)
            })
        }
    }

}
</script>