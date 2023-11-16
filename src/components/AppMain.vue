<script>
import AppJumbotron from './AppJumbotron.vue'
import AppVideoSection from './AppVideoSection.vue'
import AppSmartSection from './AppSmartSection.vue'
import AppQuickFactSection from './AppQuickFactSection.vue'
import AppFeaturedProductions from './AppFeaturedProductions.vue'
import StorageManager from '../../storeManager'
export default {
    data() {
        return {
            StorageManager,
        }
    },
    components: {
        AppJumbotron,
        AppVideoSection,
        AppSmartSection,
        AppQuickFactSection,
        AppFeaturedProductions,
    }
}
</script>

<template>
    <AppJumbotron class="jumbo" />
    <AppVideoSection/>
    <AppSmartSection/>
    <AppQuickFactSection/>
    <AppFeaturedProductions/>
</template>

<style lang="scss">
@use '../styles/master.scss';

// CHIARAMENTE NULLA DI QUESTO E' PENSATO PER ESSERE RESPONSIVE 
.jumbo{
    position: relative;
}
</style>