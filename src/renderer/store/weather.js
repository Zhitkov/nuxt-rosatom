
export const state = () => ({
    currentCity: '',
    weatherApi: 'b7da4c9ea8da0ca47129e5eb76cea27a',
    cities: {
        spb: {
            name: 'Санкт-Петербург',
            logo: require('~/assets/icons/rosatom.svg'),
            lat: '59.934280',
            lon: '30.335099'
        },
        msk: {
            name: 'Москва',
            logo: require('~/assets/icons/rosatom.svg'),
            lat: '55.755826',
            lon: '37.617300'
        },
        ekb: {
            name: 'Екатеринбург',
            logo: require('~/assets/icons/rosatom.svg'),
            lat: '56.8389261',
            lon: '60.6057025'
        },
        kaz: {
            name: 'Казань',
            logo: require('~/assets/icons/rosatom.svg'),
            lat: '55.830431',
            lon: '49.066081'
        },
        nvb: {
            name: 'Новосибирск',
            logo: require('~/assets/icons/rosatom.svg'),
            lat: '55.008353',
            lon: '82.935733'
        },
        sam: {
            name: 'Самара',
            logo: require('~/assets/icons/rosatom.svg'),
            lat: '53.202778',
            lon: '50.140833'
        }
    }
})

export const getters = {
    cities(s) {
        return s.cities
    },
    currentCity(s) {
        return s.currentCity
    },
    weatherApi(s){
        return s.weatherApi;
    }
}

export const mutations = {
    CHANGE_CURRENT_CITY(state, city) {
        state.currentCity = city
    },
    // ADD_CURRENT_WEATHER(state, weather) {
    //     state.cities[state.currentCity].w = weather;
    // }
}

export const actions = {
    // async changeCity({ state, commit }, city) {
    //     commit('CHANGE_CURRENT_CITY', city)
    //     let response = await this.$axios.$get(`http://api.openweathermap.org/data/2.5/forecast?lat=${state.cities[city].lat}&lon=${state.cities[city].lon}&appid=${api}`);
    //     console.log(response);
    //     commit('ADD_CURRENT_WEATHER', response)
    // }
}