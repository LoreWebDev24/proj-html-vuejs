<script>
import AppJumbotron from './AppJumbotron.vue'
import StorageManager from '../../storeManager'
export default {
    data() {
        return {
            StorageManager,
        }
    },
    components: {
        AppJumbotron
    }
}
</script>

<template>
    <AppJumbotron />
</template>

<style lang="scss" scoped>
@use '../styles/master.scss'
</style>