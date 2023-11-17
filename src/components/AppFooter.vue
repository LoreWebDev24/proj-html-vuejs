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
    <footer>
        <div class="top-footer border">
            <div class="container">
                <div class="row a-center">
                    <div class="col-2">
                        <figure><a href="#"><img class="logo-footer" :src="storeManager.footerLogo" alt="company-logo"></a>
                        </figure>
                    </div>
                    <div class="col-10 ds-flex j-end">
                        <ul class="ds-flex gap-20 a-center">
                            <li v-for="footerLink, i in storeManager.footerLinks" :key="i"><a href="#">{{ footerLink }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-footer">
            <div class="container">
                <div class="row row a-center">
                    <div class="col-10 ds-flex j-start">
                        <h4>Copyright &copy; 2022 <span class="copy">Softivus. </span>All rights reserved.</h4>
                    </div>
                    <div class="col-2">
                        <div class="social-wrapper">
                            <span><a href="#"><i class="fa-brands fa-facebook-f"></i></a></span>
                            <span><a href="#"><i class="fa-brands fa-twitter"></i></a></span>
                            <span><a href="#"><i class="fa-brands fa-instagram"></i></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

footer {
    padding-top: 100px;
    padding-bottom: 50px;
}

.border {
    border-bottom: 1px solid gray;
}

.top-footer {
    padding-bottom: 25px;
    width: 1200px;
    margin: 0 auto;
}

.bottom-footer {
    padding-top: 25px;
    width: 1200px;
    margin: 0 auto;
}

.logo-footer {
    width: 70%;
}

a {
    font-size: 18px;
    font-weight: 600;
}

h4 {
    font-weight: 300;
    font-size: 18px;
}

.copy {
    color: rgb(79, 66, 197);
    font-weight: 500;
}

.social-wrapper {
    display: flex;
    justify-content: flex-end;
    gap: 20px;
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

.social-wrapper span:hover {
  background-color: rgb(255, 121, 23);
  color: white;
}
</style>