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
    <section class="app-smart-section">
        <div class="container-small ds-flex fl-column gap-20">
            <h3 class="blue-title">
                Our Love For Animation
            </h3>
            <h2>
                We're Storytelling <br>
                Experts with Creative <br>
                Smarts
            </h2>
            <h4>
                Our culture inspires the creative and innovative spirit found throughout our <br>
                Studio. We breathe life into new ideas!
            </h4>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card card-1">
                        <img src="../../public/smart1.png" alt="smart-glass">
                        <h2 class="card-title">3D modeling</h2>
                        <p class="card-text">
                            We constantly ask questions. It help us shape your story and deliver the result you crave. Yep,
                            we will drill deep to deliver above and beyond your expectations
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card card-2">
                        <img src="../../public/smart2.png" alt="smart-circle">
                        <h2 class="card-title">Collaboration</h2>
                        <p class="card-text">
                            We constantly ask questions. It help us shape your story and deliver the result you crave. Yep,
                            we will drill deep to deliver above and beyond your expectations
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card card-3">
                        <img src="../../public/smart3.png" alt="smart-idea">
                        <h2 class="card-title">Creativity</h2>
                        <p class="card-text">
                            We constantly ask questions. It help us shape your story and deliver the result you crave. Yep,
                            we will drill deep to deliver above and beyond your expectations
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.app-smart-section {
    padding-top: 500px;
    padding-bottom: 220px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-image:url('../../public/smart.png'), url('../../public/smart4.png');
    background-repeat: no-repeat;
    background-size: auto, 8%;
    background-position:bottom 200px left, bottom 20px right 14%;
}

.container {
    padding-top: 40px;
}

.blue-title {
    font-size: 26px;
}

h3 {
    color: rgb(82, 56, 197);
}

h2 {
    color: rgb(50, 23, 82);
    font-size: 54px;
}

h4 {
    text-align: center;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 2rem;
}

.row {
    justify-content: flex-end;
}

.col-3 {
    padding-right: 20px;
}

.card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 251, 248);
    border-radius: 3rem;
    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 20px;
    padding-right: 20px;
    border: 1px solid lightgray
}

img {
    width: 30%
}

.card-title {
    font-size: 30px;
}

.card-text {
    font-size: 17px;
    line-height: 2rem;
    text-align: center;
    font-weight: 400;
}

.card-1 {
    background-color: rgb(255, 244, 238);
}

.card-2 {
    background-color: rgb(246, 245, 253);
}

.card-3 {
    background-color: rgb(255, 233, 235);
}</style>