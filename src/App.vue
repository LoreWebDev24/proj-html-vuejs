<script>

import storeManager from '../storeManager'
// COMPONENTS IMPORT ROUTE
import AppHeader from "./components/AppHeader.vue"
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import AppBoxScroll from './components/AppBoxScroll.vue'
// VUE
export default {
    data() {
        return {
            storeManager,
        };
    },
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppBoxScroll
    },
    methods: {
        goOnPageTop(){
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
            })
        }
    }
}
</script>

<template>
    <AppHeader class="app-header" />
    <AppMain />
    <AppFooter />
    <AppBoxScroll class="app-box-scroll" @click="goOnPageTop()"/>
</template>

<style lang="scss">
@use '../styles/master.scss';
</style>
