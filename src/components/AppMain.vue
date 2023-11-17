<script>
import AppJumbotron from './AppJumbotron.vue'
import AppVideoSection from './AppVideoSection.vue'
import AppSmartSection from './AppSmartSection.vue'
import AppQuickFactSection from './AppQuickFactSection.vue'
import AppFeaturedProductions from './AppFeaturedProductions.vue'
import AppOurProcess from './AppOurProcess.vue'
import AppMagicTeam from './AppMagicTeam.vue'
import AppSponsors from './AppSponsors.vue'
import AppNewsletterSubscription from './AppNewsletterSubscription.vue'
// STORE MANAGER 
import storeManager from '../../storeManager'
export default {
    data() {
        return {
            storeManager,
        }
    },
    components: {
        AppJumbotron,
        AppVideoSection,
        AppSmartSection,
        AppQuickFactSection,
        AppFeaturedProductions,
        AppOurProcess,
        AppMagicTeam,
        AppSponsors,
        AppNewsletterSubscription
    }
}
</script>

<template>
    <AppJumbotron class="jumbo" />
    <AppVideoSection/>
    <AppSmartSection/>
    <AppQuickFactSection/>
    <AppFeaturedProductions/>
    <AppOurProcess/>
    <AppMagicTeam/>
    <AppSponsors/>
    <AppNewsletterSubscription/>
</template>

<style lang="scss">
@use '../styles/master.scss';

// CHIARAMENTE NULLA DI QUESTO E' PENSATO PER ESSERE RESPONSIVE 
.jumbo{
    position: relative;
}
</style>