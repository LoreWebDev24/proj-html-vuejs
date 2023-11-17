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
    <div class="app-magic-team">
        <div class="container titles-container">
            <h3>Anidio Magic Team Member</h3>
            <h2>Let Us Animate Your <br>
                Project <br>
            </h2>
            <h4>We create new worlds? Let's collaborate and create engaging,effective, <br>
                award-winning animations</h4>
        </div>
        <div class="container">
            <div class="row">
                <div v-for="currentMember in storeManager.magicCards" class="col-4">
                    <img :src="currentMember.img" alt="">
                    <div class="card">
                        <h2 class="card-name">{{ currentMember.name }}</h2>
                        <h3 class="card-role">{{ currentMember.role }}</h3>
                        <div class="social-wrapper">
                            <span><a href="#"><i class="fa-brands fa-facebook-f"></i></a></span>
                            <span><a href="#"><i class="fa-brands fa-twitter"></i></a></span>
                            <span><a href="#"><i class="fa-brands fa-instagram"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="arrow-menu row gap-20 a-center j-center">
                <div class="arrow-left-wrap">
                    <i class="fa-solid fa-arrow-left"></i>
                </div>
                <div class="menu-dot"></div>
                <div class="menu-dot menu-dot-selected"></div>
                <div class="menu-dot"></div>
                <div class="menu-dot"></div>
                <div class="arrow-right-wrap">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.app-magic-team {
    background-image: url('../../public/shape.png'), url('../../public/shape2.png');
    background-repeat: no-repeat;
    background-position: bottom left, top right;
    background-size: 40%, contain;
    padding-bottom: 100px;
}

.titles-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
    padding-bottom: 140px;
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

img {
    width: 220px;
    height: 220px;
    position: absolute;
    top: -20%;

}

.col-4 {
    margin-right: 20px;
    display: flex;
    justify-content: center;
    background-color: rgb(254, 245, 240);
    position: relative;
    border-radius: 1rem;
    padding-bottom: 30px;
}

.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 200px;

}

.card-name {
    font-size: 28px;
}

.card-role {
    font-weight: 300;
}

.social-wrapper {
    display: flex;
    gap: 20px;
    padding-top: 40px;
}

.social-wrapper span {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: white;
    color: rgb(79, 55, 213);
    border: 1px solid lightgray;
}

.arrow-menu {
    padding-top: 30px;
}

.menu-dot {
    width: 10px;
    height: 10px;
    background-color: grey;
    border-radius: 50%;
    cursor: pointer;
}

.menu-dot-selected {
    background-color: rgb(255, 122, 31);
    cursor: pointer;
}

.arrow-left-wrap,
.arrow-right-wrap {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: gray;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;
}
</style>