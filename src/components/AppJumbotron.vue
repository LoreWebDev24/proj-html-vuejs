<script>

</script>

<template>
    <div class="jumbotron">
        <div class="container-mid ds-flex fl-column gap-20 j-center a-center">
            <h2>
                Imagine,Create,Experience
            </h2>
            <h1>
                We Animate <br>
                With Ninja-Like Precision
            </h1>
            <h2 class="subtitle">
                We are a character-driven animation studio striving to make high-quality animations.
            </h2>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

.jumbotron {
    background-image: url('../../public/globe2.png'), url('../../public/globe3.png'), url('../../public/light.png'), url('../../public/right-man.png'), url('../../public/globe1.png'), url('../../public/left-man.png'), url('../../public/dots-left.png'), url('../../public/dots-right.png'), url('../../public/preloader.png');
    background-repeat: no-repeat;
    background-position:
        top 280px  left 1140px,
        top -250px left 840px,
        top 150px right 350px,
        bottom 20px right 20px,
        top 150px left 300px,
        bottom 20px left 20px,
        bottom left,
        top right,
        center,
        top;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}


h1 {
    color: white;
    font-size: 72px;
}

h2 {
    color: rgb(234, 117, 67);
}
</style>