<template>
    <!-- 註冊登入區 -->
    <div class="container-fluid">
        <div class="row justify-content-center py-3 px-2">
            <div class="col-12 welcome-message">
                <!-- <h2>歡迎登入迪卡儂會員服務平台</h2> -->
            </div>           
            <div class="col-12 col-sm-8 col-md-5 row justify-content-center py-3 px-2 sign-up">
                <h2 style="color: #204BA0;">歡迎登入迪卡儂會員服務平台</h2>
                <h4 style="color:#e53F43">新會員註冊</h4>
                <form action="" class="row  row justify-content-center">
                    <ul>
                        <li>
                            <div>
                                <label for="displayName">姓名</label>
                                <input class="col-6" type="displayName" id="displayName" placeholder="請輸入姓名" v-model="displayName">
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="email">Email</label>
                                <input class="col-6" type="email" id="email" placeholder="請輸入帳號" v-model="email">
                            </div>
                        </li>
                        <li>
                            <div class="">
                                <label for="password">密碼</label>
                                <input class="col-6" type="password" id="password" placeholder="請輸入密碼" v-model="password">
                            </div>
                        </li>
                        <a href="/login">已有帳號</a>                                                
                        <div class="row justify-content-center">
                            <button class="col-2" type="submit" @click.prevent="doSignUp">註冊</button>
                        </div> 
                    </ul>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            displayName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        doSignUp() {
            console.log(this.axios)
            const submitForm = {
                displayName: this.displayName,
                email: this.email,
                password: this.password
            }
            this.axios.post('/signup', submitForm).then((response) => {
                console.log(response)
                this.$router.push('/login')
                //TODO:導頁
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

    .sign-up li {
        list-style: none;
        color: #204BA0;
        margin: 10px 0px 15px 0px
    }

    .sign-up a {
        color: #808080;
        font-size: 12px;
    }

    .sign-up button {
        border: 1px solid;
        padding: 5px;
        color: white;
        background-color: #007DBC;
        border-radius: 5px;
    }

    .sign-up button:hover {
        border: 1px solid #007DBC;
        color: #007DBC;
        background-color: white;
    }
    .sign-up{
        background-color: #F6F6F6;
    }

</style>