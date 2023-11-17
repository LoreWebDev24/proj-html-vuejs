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
    <div class="app-newsletter">
        <div class="container">
            <h3>
                We Create New Worlds!
            </h3>
            <h2>
                Want Tips on Your <br>
                Storytelling
            </h2>
            <h4 class="subtitle">
                Join our newsletetr for tips on how to elevate your brand through storytelling
            </h4>
        </div>
        <div class="container-custom">
            <form>
                <input class="newsletter-input" type="text" placeholder="Enter your Email">
                <button class="submite-btn" type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.app-newsletter {
    background-image: url('../../public/shape-bottom.png'), url('../../public/shape-top.png'), url('../../public/counter-bg.png');
    background-size: auto, auto, cover;
    background-repeat: no-repeat;
    background-position: bottom, top left 0px, center;
    padding: 120px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

.container-custom {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    width: 900px;
    margin: 0 auto;
}

h2 {
    color: white;
    font-size: 72px;
}

h3 {
    color: rgb(234, 117, 67);
    font-size: 24px;
}

.subtitle {
    font-size: 20px;
    font-weight: 400;
}

.newsletter-input {
    height: 70px;
    border-radius: 2rem;
    border: none;
    padding: 20px;
    width: 900px;
    font-size: 16px;

}

form {
    position: relative;
}

button {
    position: absolute;
    font-weight: 500;
    font-size: 20px;
    width: 150px;
    right: 10px;
    bottom: 10px;
    top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: rgb(255, 223, 238);
    border-radius: 2rem;
    border: none;
    cursor: pointer;
}
</style>