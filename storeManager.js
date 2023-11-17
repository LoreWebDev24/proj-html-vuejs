import { reactive } from 'vue'

// NOTA : I PERCORSI DELLE IMMAGINI SONO ACCESSIBILI E SCRITTI IN QUESTO MODO PER ESSERE UN PERCORSO ACCESSIBILE DAI COMPONENTS 

const store = reactive({

    headerLogo: '../../public/logo.png',
    headerLinks: ['Home','About Us','Portfolio','Our Process','Pricing','Blog','Contact'],
    headerPseudoButton:'Get a Quote',
    magicCards:[
        {
            img: '../../public/team1.png',
            name: 'Robert Coleman',
            role : 'Owner & Creative Director'
        },
        {
            img: '../../public/team2.png',
            name: 'Don Woods',
            role : 'Administrator'
        },
        {
            img: 'public/team4.png',
            name: 'Tomas Nash',
            role : '2d animator e Compositor'
        }
    ],
    sponsorsImages: ['../../public/sponsor1.png','../../public/sponsor2.png','../../public/sponsor3.png','../../public/sponsor4.png','../../public/sponsor5.png','../../public/sponsor6.png'],
    footerLogo: '../../public/footer-logo.png',
    footerLinks: ['About Us','Portfolio','Pricing','Career','Contact']
})

export default store;