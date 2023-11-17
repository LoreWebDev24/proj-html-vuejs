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
    <div class="header wrapper ds-flex j-center a-center">
        <header>
            <div class="container">
                <div class="row a-center">
                    <div class="col-2">
                        <figure><a href="#"><img class="logo-main" src="../../public/logo.png" alt="company-logo"></a>
                        </figure>
                    </div>
                    <div class="col-10 ds-flex j-end">
                        <ul class="ds-flex gap-20 a-center">
                            <li v-for="headerLink, i in storeManager.headerLinks" :key="i"><a href="#">{{ headerLink }}</a>
                            </li>
                            <li>
                                <div class="pseudo-button">
                                    <span><a href="#">{{storeManager.headerPseudoButton}}</a></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="hamb-menu col-10 ds-flex j-end d-none">
                        <span><i class="fa-solid fa-bars"></i></span>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.container {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
}

header {
    height: 80px;
    position: fixed;
    z-index: 999;
    width: 1200px;
    top: 0;
    // background-color: purple;
    padding: 20px;
    color: white;
}

a {
    font-weight: bold;
    font-size: 1.1rem;
}

@media (max-width: 1405px) {
    .container {
        width: 100%;
        background-color: transparent;
    }

    a {
        font-weight: bold;
        font-size: 14px;
    }

    header {
        left: 0;
        background-color: rgba(0, 0, 0, 0.1);
        width: 100%;
    }

    .col-10 {
        justify-content: flex-end;
    }

    .logo-main {
        padding-right: 20px;
    }

}

@media (max-width: 870px) {
    .col-10 {
        display: none;
    }

    .hamb-menu {
        display: flex;
        justify-content: flex-end;
    }

    i {
        cursor: pointer;
    }

}

@media (max-width: 218px) {

    header {
        overflow: hidden;
    }
    .logo-main {
        width: 80px;
    }
}</style>