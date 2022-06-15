<template>
    <div class=" col-2 justify-content-start type-bar ">
        <h3 style="font-weight: 900;">分類</h3>
        <h5>
            <router-link class="Classification" :to="{ path: '/category', query: { gender: 'male', category: 'all' } }">
                ↬男士
            </router-link>
        </h5>
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
        
        <h5>
            <router-link class="Classification"
                :to="{ path: '/category', query: { gender: 'female', category: 'all' } }">
                ↬女士
            </router-link>
        </h5>
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
        
        <h5>
            <router-link class="Classification" :to="{ path: '/category', query: { gender: 'kid', category: 'all' } }">
                ↬兒童/青少年
            </router-link>
        </h5>
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
    </div>


</template>

<style>
@media screen and (max-width:768px) {
    .type-bar {
        display: none;
    }
}
.type-bar {
    box-sizing: border-box;
    margin: 0px 20px;
    background-color: #e7eaed;
    padding: 20px 20px;
}
.type-bar ul {
    list-style: none;
    border-bottom: 1px solid rgb(182, 177, 177);
    padding-bottom: 15px;
}
.type-bar ul a {
    text-decoration: none;
    color: gray;
}
.type-bar ul a:hover {
    text-decoration: none;
    color: rgb(150, 177, 219);
}
.type-bar li  {
    position: relative; 
    left: -25px;
}
.Classification {
    text-decoration: none;
    color: black;
    font-weight: 500;
}
.Classification:hover {
    color: rgb(150, 177, 219);
}
</style>