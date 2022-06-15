<template>
<!-- 圖片輪播 -->
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="3000">
                <a href="">
                    <img src="../assets/jolin.jpeg" class="d-block w-100" alt="...">
                </a>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <a href="">
                    <img src="../assets/converse.jpg" class="d-block w-100" alt="...">
                </a>

            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <a href="">
                    <img src="../assets/palladium.jpeg" class="d-block w-100" alt="...">
                </a>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <a href="">
                    <img src="../assets/summer.png" class="d-block w-100" alt="...">
                </a>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- 分隔線 -->
    <div class="container-fluid">
        <div class="container-fluid title-flex py-3">推薦商品</div>
    </div>

    <!-- 商品區 -->
    <div class="container-fluid">
        <!-- <div class="row "> -->
        <div class="row justify-content-center">
            <div class="row col-md-5 justify-content-center">
                <div class="col-4 saler ">
                    <figure>
                        <a href=""><img class="object-cover"
                                src="https://media.decathlon.tw/media/catalog/product/cache/10/small_image/150x/9df78eab33525d08d6e5fb8d27136e95/c/6/c665dcf7-dd81-4d54-b379-b1f0c222bddd_3185449.jpg"
                                alt=""></a>
                        <button class="price-btn">NT$ 129元</button>
                        <p>男款純棉短袖上衣</p>
                    </figure>
                    <figure>
                        <a href=""><img class="object-cover"
                                src="https://media.decathlon.tw/media/catalog/product/cache/10/small_image/150x/9df78eab33525d08d6e5fb8d27136e95/1/2/12-pixl-2157312_8488035.jpg"
                                alt=""></a>
                        <button class="price-btn ">NT$ 199元</button>
                        <p>男士透氣快乾跑步短袖上衣 </p>
                    </figure>
                </div>
                <div class="col-4 saler">
                    <figure>
                        <a href=""><img class="object-cover"
                                src="https://media.decathlon.tw/media/catalog/product/cache/10/small_image/150x/9df78eab33525d08d6e5fb8d27136e95/0/0/00-pixl-2156700_8506283.jpg"
                                alt=""></a>
                        <button class="price-btn">NT$ 199元</button>
                        <p>女款透氣排汗短袖上衣</p>
                    </figure>
                    <figure>
                        <a href=""><img class="object-cover"
                                src="https://media.decathlon.tw/media/catalog/product/cache/10/small_image/150x/9df78eab33525d08d6e5fb8d27136e95/b/a/ba96f015-5879-4573-a4c0-3eb33dbad9d8_8383580.jpg"
                                alt=""></a>
                        <button class="price-btn">NT$ 149元</button>
                        <p>【出清】女款初階健身短袖上衣</p>
                    </figure>
                </div>
            </div>
            <div class="col-md-7" style="padding:0px">
                <figure class="mori">
                    <a href="">
                        <img class="object-cover" src="https://media.decathlon.tw/media/astralweb/pagebulider/s1.jpg"
                            alt="">

                    </a>
                </figure>
            </div>
        </div>


        <!-- </div> -->
    </div>

    <!-- 下方資訊區 -->
    <div class="container-fluid main-saler py-4">
        <div class="row justify-content-center ">
            <div class="col-md-6 ">
                <!-- <div class="saler"> -->
                <figure>
                    <a href=""><img class="DEC-logo"
                            src="https://www.momentum.com.tw/frontapi/storage/cms/images/cmspages/0rornb9731FfCLCrJc9U55lMjGkR6AoQxCm2jHYs.jpeg"
                            alt=""></a>
                </figure>

                <!-- </div> -->
            </div>
            <div class=" col-md-6 ">
                <!-- <div class="saler"> -->
                <figure>
                    <a href=""><img class="DEC-logo"
                            src="https://www.momentum.com.tw/frontapi/storage/cms/images/cmspages/9vRvwnrpcOY3ahZQrGFJz1Hs2ppCQZj7A6haW1PE.jpeg"
                            alt=""></a>
                </figure>
                <!-- </div> -->
            </div>
            <div class="col-md-6 ">
                <!-- <div class="saler"> -->
                <figure>
                    <a href=""><img class="DEC-logo"
                            src="https://www.momentum.com.tw/frontapi/storage/cms/images/cmspages/KrqGc9aghBisSleKOGUuClKYTGtPcZECrfmnt1Re.jpeg"
                            alt=""></a>
                </figure>
                <!-- </div> -->
            </div>
            <div class="col-md-6 ">
                <!-- <div class="saler"> -->
                <figure>
                    <a href=""><img class="DEC-logo"
                            src="https://www.momentum.com.tw/frontapi/storage/cms/images/cmspages/u9Q7pz3MliovxNCuEsz7nxZtrT415YsfMhWGSm4v.jpeg"
                            alt=""></a>
                </figure>
                <!-- </div> -->
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
