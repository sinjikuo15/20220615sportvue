<template>
    <!-- 整個大header -->
    <div class="container-fluid py-2 main-header">
        <!-- 最上面會員資訊 -->
        <div class="container-fluid member-information">
            <div class="row justify-content-end">
                <div class="col-6"></div>
                <div class="col" v-if="$store.state.loginStatus === 1">
                    <a href="/user">會員資料</a>
                </div>
                <div class="col" v-if="$store.state.loginStatus === 0">
                    <a href="/login">登入/註冊</a>
                </div>
                <div class="col" v-if="$store.state.loginStatus === 1">
                    <a href="/" @click="logOut()">登出</a>
                </div>
                <div class="col">
                    <a href="">線上客服</a>
                </div>
                <div class="col">
                    <a href="/cart"><i class="bi bi-cart-fill"></i> </a>
                </div>
            </div>
        </div>

        <!-- offcanvas bar(右邊彈出式視窗) -->
        <nav class=" navbar navbar-light bg-light offcanvas-bar">
            <div class="container-fluid justify-content-around">
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="/">
                    <figure>
                        <img class="object-cover"
                            src="https://static.decathlon.tw/skin/frontend/enterprise/decathlon_tw/img/LogoDecathlon.png"
                            alt="">
                    </figure>
                </a>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <!-- <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5> -->
                        <button class="offcanvas-title member-btn" id="offcanvasNavbarLabel">登入/註冊</button>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <br>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="products" role="button">
                                    全部
                                </a>
                            </li>
                            <li class="nav-item dropdown">

                                <a class="nav-link  dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    男士
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'male', category: 'top' } }"
                                            class="dropdown-item" href="#">上衣</router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'male', category: 'bottom' } }"
                                            class="dropdown-item" href="#">褲子</router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'male', category: 'shoes' } }"
                                            class="dropdown-item" href="#">鞋類</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link  dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    女士
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'female', category: 'top' } }"
                                            class="dropdown-item" href="#">上衣</router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'female', category: 'bottom' } }"
                                            class="dropdown-item" href="#">褲子</router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'female', category: 'shoes' } }"
                                            class="dropdown-item" href="#">鞋類</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    兒童/青少年
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'kid', category: 'top' } }"
                                            class="dropdown-item" href="#">上衣</router-link>
                                    </li>
                                    <li>
                                        <router-link
                                            :to="{ path: '/category', query: { gender: 'kid', category: 'shoes' } }"
                                            class="dropdown-item" href="#">鞋類</router-link>
                                    </li>
                                </ul>
                            </li>

                            <!-- <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> -->
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <!-- logo navbar -->
        <div class="container-fluid  main-nav">
            <div class="row justify-content-center">
                <!-- <figure class=" row main-logo col-12 col-lg-6"> -->
                <a class="navbar-brand row col-12 col-lg-6 main-logo" href="/">
                    <figure>
                        <img class="object-cover"
                            src="https://static.decathlon.tw/skin/frontend/enterprise/decathlon_tw/img/LogoDecathlon.png"
                            alt="">
                    </figure>
                </a>
                <!-- </figure> -->
                <form class="d-flex col-12 col-lg-4 search-bar py-1">
                    <input class="form-control me-1" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit"><i class="bi bi-search "></i></button>
                </form>
            </div>
            <!-- nav bar -->
            <div class="container-fluid">

            </div>

        </div>
    </div>

    <!-- 藍色navbar -->
    <div class="container-fluid blue-nav">
        <nav>
            <ul class="row justify-content-center">
                <li class="col-2"><a href="/products">全部</a>

                </li>
                <li class="col-2">
                    <router-link :to="{ path: '/category', query: { gender: 'male', category: 'all' } }">
                        男士
                    </router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'male', category: 'top' } }">
                                上衣
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'male', category: 'bottom' } }">
                                下著
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'male', category: 'shoes' } }">
                                鞋類
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="col-2">
                    <router-link :to="{ path: '/category', query: { gender: 'female', category: 'all' } }">
                        女士
                    </router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'female', category: 'top' } }">
                                上衣
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'female', category: 'bottom' } }">
                                下著
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'female', category: 'shoes' } }">
                                鞋類
                            </router-link>
                        </li>
                    </ul>
                </li>
                <li class="col-2">
                    <router-link :to="{ path: '/category', query: { gender: 'kid', category: 'all' } }">
                        兒童/青少年
                    </router-link>
                    <ul>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'kid', category: 'top' } }">
                                上衣
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ path: '/category', query: { gender: 'kid', category: 'shoes' } }">
                                鞋類
                            </router-link>
                        </li>
                    </ul>
                </li>

            </ul>
        </nav>
    </div>

    <router-view v-if="isRouterAlive" @addCart="doAddCart" />
    <!-- 接收兒子的呼叫 -->


    <!-- Footer區域 -->
    <div class="container-fluid main-footer py-3">
        <div class="container-fluid row justify-content-center">
            <div class="col-12 col-md-4 row justify-content-center py-3">
                <div class="row ">
                    <div class="col-12 text-center">
                        <a href=""><i class="bi bi-youtube media-logo"></i></a>
                        <a href=""><i class="bi bi-facebook media-logo"></i></a>
                        <a href=""><i class="bi bi-instagram media-logo"></i></a>
                        <a href=""><i class="bi bi-chat-dots media-logo"></i></a>
                        <div class="col-12 py-2 ">
                            <h4>客服中心</h4>
                            <a class="mail-set"
                                href="mailto:customer.service@decathlon.tw">customer.service@decathlon.tw</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row col-12  col-md-8  text-center py-3">
                <ul class="list-unstyled col-6 col-lg-3">關於迪卡儂
                    <li><a href="">公司簡介</a></li>
                    <li><a href="">人才招募</a></li>
                </ul>
                <ul class="list-unstyled col-6 col-lg-3">顧客服務
                    <li><a href="">退換貨流程</a></li>
                    <li><a href="">客服信箱</a></li>
                    <li><a href="">常見問題Ｑ＆Ａ</a></li>
                    <li><a href="">團購方法</a></li>
                </ul>
                <ul class="list-unstyled col-6 col-lg-3">實體店服務
                    <li><a href="">客製化印花</a></li>
                    <li><a href="">球拍穿線</a></li>
                    <li><a href="">維修服務</a></li>
                </ul>
                <ul class="list-unstyled col-6 col-lg-3">會員俱樂部
                    <li><a href="">會員獎勵計畫</a></li>
                    <li><a href="">點數使用說明</a></li>
                    <li><a href="">點數使用據點</a></li>
                </ul>
            </div>


        </div>
    </div>


</template>

<script>
import store from './store'

export default {

    name: 'app',
    async mounted() {
        await this.$store.dispatch('getLoginStatus')
        console.log('loginStatus', this.$store.state.loginStatus)
        this.cart = JSON.parse(localStorage.getItem('cart') || [])
    },
    provide() {
        return {
            reload: this.reload,
        }
    },
    data() {
        return {
            isRouterAlive: true,
            cart: []
        }
    },
    methods: {
        reload() {
            this.isRouterAlive = false
            this.$nextTick(function () {
                this.isRouterAlive = true
            })
        },
        async logOut() {
            await this.axios.post('/logout').then((response) => {
                console.log("logout", response)
                this.$store.dispatch('getLoginStatus')
            })
        },
        doAddCart(product) {
            let flag = false
            this.cart.map(function (item) {
                if (item.id == product.id) {
                    item.quantity += product.quantity
                    flag = true
                }
                return item
            })
            if (flag == false) {
                this.cart.push(product)
            }
            localStorage.setItem('cart',JSON.stringify(this.cart))

        }
    },
    computed: {
        mutationsLoginStatus() {
            return this.$store.state.loginStatus
        }
    },

}
</script>

<style>
body {
    background-color: white;
    width: 100%;
}

/* 以下為header樣式 */
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

    .mori {
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
    color: rgb(150, 177, 219);
}

.member-btn {
    background-color: #0669B2;
    border: 0px;
    padding: 5px 10px;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
}

/* 輪播器 */
.carousel-inner {
    z-index: 1;
}

/* 分隔線 */
.title-flex {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: black;
    font-weight: bold;
}

.title-flex::before,
.title-flex::after {
    content: '';
    flex: 1;
    height: 0.6px;
    background: rgb(89, 85, 86);
}

.title-flex::before {
    margin-right: 0.6rem;
}

.title-flex::after {
    margin-left: 0.6rem;
}

/* 商品區 */
.saler figure {
    max-width: 600px;
}

.DEC-logo {
    height: 100%;
    width: 100%;
    text-align: center;
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