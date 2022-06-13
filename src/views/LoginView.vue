<template>
    <!-- 登入區 -->
    <div class="container-fluid">
        <div class="row justify-content-center py-3 px-2">

            <div class="row col-10 justify-content-center py-3 px-2 login">
                <div class="col-12 welcome-message justify-content-center">
                    <h2>歡迎登入迪卡儂會員服務平台</h2>
                </div>
                <h4 style="color:#204BA0">已註冊會員</h4>
                <p style="color:#808080">如果您已註冊，請輸入手機號碼地址登入。</p>
                <span style="color: #e53F43;">已透過迪卡儂APP或是門市註冊之會員，
                若未曾登入過網站請使用新會員註冊功能，
                輸入會員電話重新註冊設定網站密碼</span>
                <br>
                <form action="" class="row py-3 row justify-content-center">
                    <ul>
                        <li>
                            <div>
                                <label for="email">帳號</label>
                                <input type="email" id="email" placeholder="請輸入帳號" size="30"  v-model="email">
                            </div>
                        </li>
                        <li>
                            <div class="">
                                <label for="password">密碼</label>
                                <input type="password" id="password" placeholder="請輸入密碼" size="30"  v-model="password">
                            </div>
                        </li>
                        <ul>
                            <li>
                                <div>
                                    <a href="/signup">帳號註冊</a>
                                    <a href="" class="px-2">忘記密碼</a>
                                    <input type="checkbox" id="forget">
                                    <label for="forget">記住帳號</label>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <button type="submit" @click.prevent="doLogin">登入</button>
                                </div>
                            </li>
                        </ul>
                    </ul>
                </form>
            </div>
            </div>

            </div>


</template>

<script>

export default {
    inject: ['reload'],
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        doLogin() {
            console.log(this.axios)
            const submitForm = {
                email: this.email,
                password: this.password
            }
            this.axios.post('/login', submitForm).then((response) => {
                console.log(response)
                const {msgCode,message} = response.data
                if(msgCode === 200) {
                    this.$router.push('/')
                }
                
            })
        }
    }
}

</script>

<style scoped>

    /* 登入內容區 */
    .welcome-message {
        color: #204BA0;
    }

    .login li {
        list-style: none;
        color: #204BA0;
        margin: 10px 0px 15px 0px
    }

    .login a {
        color: #808080;
        font-size: 14px;
    }

    .login a:hover {
        color: #007DBC;
        font-size: 14px;
        transition: 0.5s;
    }

    .login button {
        border: 1px solid;
        padding: 5px 20px;
        color: white;
        background-color: #007DBC;
        border-radius: 5px;

    }

    .login button:hover {
        border: 1px solid #007DBC;
        color: #007DBC;
        background-color: white;
    }

    .sign-up {
        background-color: #F6F6F6;
    }

</style>