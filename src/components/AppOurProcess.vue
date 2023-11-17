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
                        <div class="badge">
                            <span>4</span>
                        </div>
                        <figure><img src="../../public/process2.png" alt=""></figure>
                        <h4 class="card-title">Pre Production</h4>
                        <p>We'll take your idea and create a technical script which consist of action notes and animation
                            descriptions</p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div class="badge">
                            <span>1</span>
                        </div>
                        <figure><img src="../../public/process1.png" alt=""></figure>
                        <h4 class="card-title">Scripting</h4>
                        <p>We'll take your idea and create a technical script which consist of action notes and animation
                            descriptions</p>
                    </div>
                </div>
            </div>
            <div class="row gap-20">
                <div class="arrow-left-wrap">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="arrow-right-wrap">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.app-our-process {
    padding-bottom: 120px;
    display: flex;
    justify-content: flex-end;
    background-image: url('../../public/process-thumb.png'), url('../../public/smart4.png');
    background-repeat: no-repeat;
    background-position: top left -200px, bottom 20px  right 280px;
    background-size: 800px , 5%;
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
    font-weight: 500;
}

p {
    text-align: center;
    line-height: 1.5rem;
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
    position: relative;
}

.badge {
    position: absolute;
    top: 0;
    right: 6%;
    width: 40px;
    height: 80px;
    background-color: rgb(247, 241, 255);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 14px;
    border-radius: 0 0 1rem 1rem;
}

img {
    width: 100px;
    height: 90px;
}

figure {
    background-color: rgb(254, 245, 240);
    border-radius: 50%;
    width: 180px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.arrow-left-wrap,
.arrow-right-wrap {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: rgb(231, 231, 231);
    border: 1px solid rgb(231, 231, 231);
    border-radius: 50%;
    cursor: pointer;
}

.arrow-left-wrap {
    margin-left: 10px;
}</style>