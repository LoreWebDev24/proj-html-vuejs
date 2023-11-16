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
    <div class="app-our-process">
        <div class="container-custom ds-flex fl-column gap-20">
            <h3>Our Process</h3>
            <h2>Our Process for <br>
                Your Animation <br>
                Production
            </h2>
            <h4>We have an effective process for working on animation</h4>
            <div class="row">
                <div class="col-4">
                    <div class="card">
                        <figure><img src="../../public/process2.png" alt=""></figure>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <figure><img src="../../public/process1.png" alt=""></figure>
                        <h4 class="card-title">Pre Production</h4>
                        <p>We'll take your idea and create a technical script which consist of action notes and animation descriptions</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';
.app-our-process {
    padding-bottom: 100px;
    display: flex;
    justify-content: flex-end;
    background-image: url('../../public/process-thumb.png');
    background-repeat: no-repeat;
    background-position: top left -20px;
    background-size: 40%;
}

.container-custom {
    width: 50%;
    margin: right 0 auto;
}

h3 {
    color: rgb(82, 56, 197);
    text-align: left;
}

h2 {
    color: rgb(50, 23, 82);
    font-size: 54px;
    text-align: left;
}

h4 {
    text-align: center;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 2rem;
    text-align: left;
}

.card-title {
    font-size: 24px;
}

p {
    text-align: center;
}

.col-4:not(:last-child) {
    margin-right: 20px;
}

.col-4 {
    flex-basis: calc(590px / 2)-20px;

}
.card {
    padding: 30px;
    border: 1px solid rgb(231, 231, 231);
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

img {
    width: 120px;
    height: 100px;
}

figure {
    background-color:rgb(254, 245, 240) ;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>