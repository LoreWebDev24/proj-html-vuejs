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
            <div class="buttons-wrapper ds-flex gap-20">
                <div class="pseudo-button">
                    <span><a href="#">Start a Project</a></span>
                </div>
                <div class="pseudo-button pseudo-transparent">
                    <span><a href="#">Portfolio</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/master.scss';

// LE MISURE SONO TROPPO PRECISE E PENSATE SOLO PER UN LAYOUT FULL HD QUESTO PERCHE I BACKGROUND COMBINATI NON LI ABBIAMO VISTI A LEZIONE ED IL TEMPO PER FARLI E' POCO IN RELAZIONE ALLE COSE DA FARE , SONO CONSAPEVOLE CHE SU MONITOR 2K O FACENDO RESIZE DELLA VIEW PORT IL LAYOUT DEL SITO SAREBBE COMPLETAMENTE DA RIVEDERE E MAGARI LAVORARE BENE CON IL GRAFICO OPPURE AVERE DELLE DIRETTIVE PRECISE SU COSA FARE NELLE MEDIA QUERIES PER OGNI PUNTO CHIAVE DI RESIZE DELLA VIEWPORT
.jumbotron {
    background-image: url('../../public/shape-bottom.png'), url('../../public/globe2.png'), url('../../public/globe3.png'), url('../../public/light.png'), url('../../public/right-man.png'), url('../../public/globe1.png'), url('../../public/left-man.png'), url('../../public/dots-left.png'), url('../../public/dots-right.png'), url('../../public/preloader.png');
    background-repeat: no-repeat;
    background-position:
        // waves inferiori
        bottom,
        // globe 2nd
        top 240px left 1350px,
        // globe 3rd
        top -260px left 760px,
        //    light
        top 110px right 350px,
        //   right man 
        bottom 260px right 40px,
        //  globe 1 
        top 110px left 300px,
        bottom 160px left 40px,
        bottom left,
        // stelle right
        top 50px right,
        center,
        top;
    min-height: 900px;
    padding-top: 160px;
}


h1 {
    color: white;
    font-size: 72px;
}

h2 {
    color: rgb(234, 117, 67);
}

.subtitle {
    margin-bottom: 30px;
}

.pseudo-button.pseudo-transparent {
    color: white;
    background-color: transparent;
    border: 1.5px solid white;
}

.pseudo-button {
    font-weight: bold;
    font-size: 1.1rem;
}
</style>