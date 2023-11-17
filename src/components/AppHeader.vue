<script>
import storeManager from '../../storeManager'
export default {
    data() {
        return {
            storeManager,
            scrollposition: null

        }
    },
    methods: {
        updatescroll() {
            this.scrollposition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updatescroll);
    },
    components: {
    }
}
</script>

<template>
    <div class="header wrapper ds-flex j-center a-center">
        <header>
            <div class="container" :class="{change_color: scrollposition > 50}">
                <div class="row a-center">
                    <div class="col-2">
                        <figure><a href="#"><img class="logo-main" :src="storeManager.headerLogo" alt="company-logo"></a>
                        </figure>
                    </div>
                    <div class="col-10 ds-flex j-end">
                        <ul class="ds-flex gap-20 a-center">
                            <li v-for="headerLink, i in storeManager.headerLinks" :key="i"><a href="#">{{ headerLink }}</a>
                            </li>
                            <li>
                                <div class="pseudo-button">
                                    <span>{{ storeManager.headerPseudoButton }}</span>
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
    border-radius: 10px;
    padding: 5px;
}
.change_color {
    background-color: rgba(0, 0, 0, 0.1);
   }

.pseudo-button {
    border: 1px solid transparent;
    cursor: pointer;
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

a:hover {
    color: rgb(234, 117, 67);
}

.pseudo-button:hover {
    background-color: transparent;
    color: white;
    border: 1px solid white;
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
}
</style>