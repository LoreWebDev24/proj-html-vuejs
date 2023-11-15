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
    background-image: url('../../public/dots-left.png'), url('../../public/dots-right.png'), linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%);
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position:
        bottom left,
        right,
        right;
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