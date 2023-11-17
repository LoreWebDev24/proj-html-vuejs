<script>
import storeManager from '../../storeManager'
export default {
    data() {
        return {
            storeManager,
        }
    },
    components: {
    }
}
</script>

<template>
    <div class="app-sponsors">
        <div class="container titles-container">
            <h3>Why Anidio Studio?</h3>
            <h2>
                We Love Our Clients
            </h2>
            <h4>We are trusted throughout adland and have a wealth of recommendations <br>
                from start-ups renowned global brands.</h4>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="sponsorImage in storeManager.sponsorsImages" class="col-2">
                    <a href="#"><img :src="sponsorImage" alt="sponsor-image-link"></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.app-sponsors {
    padding-top: 100px;
    padding-bottom: 100px;
}

.titles-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding-bottom: 60px;
}

h3 {
    color: rgb(82, 56, 197);
    font-size: 26px;
}

h2 {
    color: rgb(50, 23, 82);
    font-size: 54px;
}

h4 {
    text-align: center;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.8rem;
}

.col-2 {
    padding-right: 20px;
}
</style>