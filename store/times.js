export const state = () => ({
    times: [{
        id: 123,
        studioId: 1,
        roomName: 'Art-Deco saal',
        availability: [
            '31.05.2019 15:00',
            '31.05.2019 16:00',
            '01.06.2019 10:00',
            '01.06.2019 12:00',
            '01.06.2019 14:00',
            '02.06.2019 09:00',
            '02.06.2019 18:00',
            '03.06.2019 13:00',
            '03.06.2019 14:00',
            '03.06.2019 15:00',
        ]
    }, {
        id: 124,
        studioId: 1,
        roomName: 'Loft saal',
        availability: [
            '31.05.2019 13:00',
            '05.06.2019 09:00',
            '05.06.2019 11:00',
        ]
    }, {
        id: 125,
        studioId: 2,
        roomName: 'Stuudio A',
        availability: [
            '31.05.2019 14:00',
            '31.05.2019 16:00',
            '04.06.2019 10:00',
        ]
    }, {
        id: 126,
        studioId: 2,
        roomName: 'Stuudio B',
        availability: [
            '31.05.2019 14:00',
            '31.05.2019 15:00',
            '31.05.2019 16:00',
            '02.06.2019 09:00',
            '02.06.2019 11:00',
            '02.06.2019 12:00',
            '02.06.2019 13:00',
            '02.06.2019 15:00',
            '04.06.2019 13:00',
            '04.06.2019 15:00',
            '04.06.2019 16:00',
        ]
    }, {
        id: 127,
        studioId: 3,
        roomName: 'Stuudio Raimond',
        availability: [
            '31.05.2019 14:00',
            '31.05.2019 15:00',
            '31.05.2019 16:00',
            '03.06.2019 09:00',
            '05.06.2019 15:00',
            '06.06.2019 13:00',
        ]
    }, {
        id: 128,
        studioId: 3,
        roomName: 'Stuudio Hugo',
        availability: [
            '03.06.2019 14:00',
            '03.06.2019 15:00',
            '04.06.2019 16:00',
            '05.06.2019 09:00',
            '06.06.2019 15:00',
            '07.06.2019 13:00',
        ]
    }],
});

export const getters = {
    getAll(state) {
        return state.times;
    },
    getStudioTimesViaID: (state) => (id) => {
        var times = state.times.find( (time) => time.id == id);
        return times.availability;
    }
}
