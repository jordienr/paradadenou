<template>
    <div class="menu">
        <h1>Parada d'9 Carta</h1>
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
    .row {
        display: flex;
        .col {
            text-align: right;
        }
        .col:first-of-type {
            text-align: left;
            flex-grow: 1;
        }
        .item {
            padding: .25rem 1rem;
            min-height: 55px;
            &:first-of-type {
                font-weight: bold;
            }
            &:nth-of-type(2n) {
                background-color: rgb(235, 235, 235);
            }
        }
    }
}
</style>