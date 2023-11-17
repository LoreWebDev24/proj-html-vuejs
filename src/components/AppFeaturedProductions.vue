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
    <div class="app-featured-prod">
        <div class="container ds-flex fl-column gap-20">
            <h3 class="blue-title">
                Our Works
            </h3>
            <h2>
                Featured Productions
            </h2>
            <p>
                Here's just a small sample of some of those projects that we're quite proud of. <br>
                If you're looking for something specific feel free to get in contact with us.
            </p>
        </div>
        <div class="container productions-card-container">
            <div class="row flex-wrap">
                <div class="col-6">
                    <a href="#">
                        <figure><img src="../../public/work1.png" alt="work-production"></figure>
                    </a>
                </div>
                <div class="col-6 no-padding-right">
                    <a href="#">
                        <figure><img src="../../public/work2.png" alt="work-production"></figure>
                    </a>
                </div>
                <div class="col-6">
                    <a href="#">
                        <figure><img src="../../public/work3.png" alt="work-production"></figure>
                    </a>
                </div>
                <div class="col-6 no-padding-right">
                    <a href="#">
                        <figure><img src="../../public/work4.png" alt="work-production"></figure>
                    </a>
                </div>
            </div>
        </div>
        <div class="container-small">
            <div class="row j-center">
                <div class="pseudo-button">
                    <span><a href="#">See Our Work</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

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

p {
    text-align: center;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 2rem;
}

.productions-card-container {
    padding-top: 50px;
}
.container-small {
    padding-top: 30px;
}

.col-6 {
    padding-right: 20px;
    padding-bottom: 20px;
    cursor: pointer;
}

// .no-padding-right {
//     padding-right: 0px;
// }
.app-featured-prod {
    padding: 100px 20px
}

.pseudo-button {
    width: 160px;
    background-color: white;
    border: 1px solid rgb(255, 223, 238); 
}
</style>