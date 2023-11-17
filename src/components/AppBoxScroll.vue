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
    <div class="scroll-box">
        <span><i class="fa-solid fa-arrow-up"></i></span>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';
    .scroll-box {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(34, 29, 111);
        border-radius: 5px;
        color: white;
        cursor: pointer;
    }
</style>