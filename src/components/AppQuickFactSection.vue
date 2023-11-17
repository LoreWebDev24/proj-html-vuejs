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
    <div class="app-quick-facts">
        <div class="container">
            <h2>
                Andio Quick Facts
            </h2>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="quick-card card-1">
                        <h2>700+</h2>
                        <h4>Project done</h4>
                    </div>
                </div>
                <div class="col-3">
                    <div class="quick-card card-2">
                        <h2>250+</h2>
                        <h4>Happy Clients</h4>
                    </div>
                </div>
                <div class="col-3 card-3">
                    <div class="quick-card">
                        <h2>25+</h2>
                        <h4>Team Members</h4>
                    </div>                        
                </div>
                <div class="col-3 card-4">
                    <div class="quick-card">
                        <h2>12+</h2>
                        <h4>Years on the market</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';
.app-quick-facts {
    background-image:url('../../public/globe.png'),url('../../public/shape-bottom.png'),url('../../public/shape-top.png'),url('../../public/counter-bg.png');
    background-size: 28%,auto,auto,cover;
    background-repeat: no-repeat;
    background-position: center, bottom,top left 0px,center;
    padding: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}

.col-3 {
    padding-right: 20px;
}

h2 {
    color: white;
    font-size: 60px;
    font-weight: 600;
}

h4 {
    text-align: center;
    color: rgb(215, 95, 116);
}

.quick-card {
    border: 1px solid gray;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 45px;
}

</style>