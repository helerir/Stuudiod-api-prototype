export const state = () => ({
    studios: [{
        id: 1,
        studioName: 'Tulbi Fotostuudio',
        address: 'Pärnu maantee 142, 11317',
        city: 'Tallinn',
        email: 'info@tulbifoto.ee',
        phone: '(+372) 584 54 941',
        webpage: 'www.tulbifoto.ee',
        thumbnail: 'http://tulbifoto.ee/wp-content/uploads/2017/09/IMG_4552-1024x683.jpg',
    }, {
        id: 2,
        studioName: 'River Stuudio',
        address: 'Laki põik 4, Decora maja, 3.korrus',
        city: 'Tallinn',
        email: 'info@riverstuudio.ee',
        phone: '+372 58 007 884',
        webpage: 'riverstuudio.ee',
        thumbnail: 'http://riverstuudio.ee/wp-content/uploads/2017/11/0J0A5954.jpg',
    }, {
        id: 3,
        studioName: 'Karramel Stuudio',
        address: 'Sõpruse pst 2',
        city: 'Tartu',
        email: 'helisfashion@gmail.com',
        phone: '58163744, 55609007 ',
        webpage: 'http://www.karramel.eu',
        thumbnail: 'https://i0.wp.com/www.karramel.eu/wp-content/uploads/2018/10/pilt-7p.jpg?w=2120',
    }]
});

export const getters = {
    getAll(state) {
        return state.studios;
    },
    getViaID: (state) => (id) => {
        return state.studios.find( (studio) => studio.id == id);
    }
}
