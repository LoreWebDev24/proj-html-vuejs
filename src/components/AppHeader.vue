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
                        <figure><a href="#"><img class="logo-main" src="../../public/logo.png" alt="company-logo"></a></figure>
                    </div>
                    <div class="col-10 ds-flex j-end">
                        <ul class="ds-flex gap-20 a-center">
                            <li v-for="headerLink, i in storeManager.headerLinks" :key="i"><a href="#">{{ headerLink }}</a>
                            </li>
                            <li>
                                <div class="pseudo-button">
                                    <span><a href="#">Get a Quote</a></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

header {
    height: 80px;
    position: fixed;
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
</style>