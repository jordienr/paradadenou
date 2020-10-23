<template>
    <div class="menu">
        <div class="title">
            <g-image height="55" width="55" src="~/assets/logo.svg"></g-image>
            <h1>Parada d'9 Carta</h1>
        </div>
        <h2 v-if="loading">Cargando...</h2>
        <div class="menu-container" v-for="(item, index) in menus" :key="index">
            <h3>{{item.title}}</h3>
            <div class="row">
                <div class="col" v-for="(col, index) in item.cols" :key="index">
                    <div class="item" v-for="(cell, index) in col" :key="index">
                        <span>{{cell.content.$t}}</span>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <a target="_blank" class="instagram-images" href="https://www.instagram.com/parada.d9/">
                <g-image width="100%" src="~/assets/img/plat.jpg"></g-image>
                <g-image width="100%" src="~/assets/img/burger.jpg"></g-image>
                <g-image width="100%" src="~/assets/img/tostada.jpg"></g-image>
            </a>
            <a target="_blank" class="cta" href="https://www.instagram.com/parada.d9/">¡Síguenos en Instagram!</a>
            <a target="_blank" class="cta" href="https://www.instagram.com/parada.d9/">@parada.d9</a>
        </footer>
    </div>
</template>

<script>
import { fetchMenuData, Menus } from '../services/menu.services'

export default {
    data: () => ({
        menu: undefined,
        loading: false,
        menus: []
    }),
    methods: {
    },
    created() {
        Menus.forEach(url => {
            this.loading = true
            fetchMenuData(url).then(responseObject => {
                this.menus.push(responseObject)
                this.loading = false
            })
        })
    },
    watch: {
        loading: () => {
        }
    }

}
</script>


<style lang="scss" scoped>
.menu {
    max-width: 900px;
    margin: auto;
    padding: 1rem;
    margin-bottom: 4rem;
    h1, h2, h3 {
        margin: 0;
        padding: .5rem 0;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: #2e3041;
    }
    .title {
        text-align: center;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 1rem;
    }
    .row {
        display: flex;
        margin-bottom: 4rem;
        .col {
            text-align: right;
        }
        .col:first-of-type {
            text-align: left;
            flex-grow: 1;
        }
        .item {
            padding: 0 .25rem;
            min-height: 55px;
            border-bottom: 1px solid #eaebfa;
            &:first-of-type {
                min-height: 33px;
                color: #434343;
                font-weight: lighter;
                border-bottom: none;
            }
            &:nth-of-type(2n) {
                // background-color: rgb(244, 245, 250);
            }
        }
    }
}

footer {
    border: dashed 2px #FED7D7;
    background-color: #FFF5F5;
    color: #3f0d0d;
    font-family: Georgia, 'Times New Roman', Times, serif;
    border-radius: 1rem;
    margin: 1rem auto;
    padding: 1rem;

    .instagram-images {
        display: flex;
        justify-content: space-between;
        img {
            border-radius: .5rem;
            border: 1px solid #FED7D7;
        }
    }
    .cta {
        padding: 1rem;
        text-align: center;
        display: block;
        text-decoration: none;
        font-size: 1.4rem;
        color: #3f0d0d;
        font-weight: bold;
    }
}
</style>