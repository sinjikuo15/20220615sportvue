<template>
    <!-- <h1>會員資料</h1>
    <h4>會員ID：{{UserList.id}}</h4>
    <h3>姓名：{{UserList.displayName}}</h3>
    <h4>信箱：{{UserList.email}}</h4> -->

    <div class="container-fluid py-3">
        <div class="row ">
            <div class="col-3 list-unstyle">
                <ul>帳號
                    <li>
                        <a href="">購買紀錄</a>
                    </li>
                    <li>
                        <a href="">留言紀錄</a>
                    </li>
                    <li>
                        <a href="">設定</a>
                    </li>
                </ul>
            </div>
            <div class="row col-12 col-md-7 justify-content-center">
                <h2>帳號</h2>
                <div class="col-6 text-center">
                    <i class="bi bi-person-circle member-pic"></i>
                </div>
                <div class="row col-12  member-content">
                    <h4>會員編號</h4>
                    <p>{{UserList.id}}</p>
                    <hr class="col-md-12">
                    <h4>姓名</h4>
                    <p>{{UserList.displayName}}</p>
                    <hr class="col-md-12">
                    <h4>使用電子郵件信箱註冊</h4>
                    <p>{{UserList.email}}</p>
                    <hr class="col-md-12">
                    <h4>目前綁定的帳號</h4>
                    <p><i class="bi bi-facebook fb-icon"></i> Facebook</p>                    
                    <div class="text-center py-3">
                        <button class="col-8 col-md-6 logout-btn">登出</button>
                    </div>

                </div>
            </div>
        </div>
    </div>


</template>


<script>

export default {
    mounted() {
        this.axios.get('/userList').then((response) => {
            // console.log("response",response)
            this.UserList = response.data.data

        })
        // this.axios.get('/cart').then((res) => {
        //     console.log(res)
        // })
    },
    data(){
        return{
            UserList:[],

        }
    }
}


</script>

<style scoped>
.list-unstyle ul {
    list-style: none;
    font-weight: bold;
    font-size: 20px;
}
.list-unstyle li {
    font-weight: 500;
}
.list-unstyle a {
    text-decoration: none;
    color: gray;
}
.list-unstyle a:hover {
    color: rgb(150, 177, 219);
}
.member-pic {
    font-size: 70px;
}
.fb-icon {
    font-size: 30px;
    color: rgb(22, 127, 240);
}
.logout-btn{
    background-color: white;
    border: 2px solid rgba(0, 106, 255, 0.873);
    padding: 10px 0px;
    color: rgba(0, 106, 255, 0.873);
    border-radius: 5px;
}
.logout-btn:hover{
    background-color: rgba(0, 106, 255, 0.052);
    
}
@media screen and (max-width:768px) {
    .list-unstyle {
        display: none;
    }
}
</style>