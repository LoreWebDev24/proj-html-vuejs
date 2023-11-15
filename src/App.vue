<script>

import storeManager from '../storeManager'
// COMPONENTS IMPORT ROUTE
import AppHeader from "./components/AppHeader.vue"
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
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
        AppFooter
    },
    methods: {
    }
}
</script>

<template>
    <AppHeader class="app-header" />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use '../styles/master.scss';
</style>
