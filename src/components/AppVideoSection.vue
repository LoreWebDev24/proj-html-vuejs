<script>
import StorageManager from '../../storeManager'
export default {
    data() {
        return {
            StorageManager,
        }
    },
    components: {
    }
}
</script>

<template>
    <div class="video-wrapper">
        <div class="figure">
            <div class="container">
                <figure>
                <div class="play-btn-wrapper">
                <span><i class="fa-solid fa-play"></i></span>
                </div>
                <img class="video-prew" src="../../public/middle.png" alt="">
                </figure>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

// CHIARAMENTE NULLA DI QUESTO E' PENSATO PER ESSERE RESPONSIVE 

.video-prew {
    width: 1200px;
    position: absolute;
    top: -290px ;
}

figure {
    position: relative;
}

.play-btn-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 999px;
    color: white;
    background-color: rgb(166, 22, 234);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
}
</style>