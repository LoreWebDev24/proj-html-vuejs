import { reactive } from 'vue'

const store = reactive({

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
    ]
})

export default store;