// import { createPersistedState, createSharedMutations } from "vuex-electron"

export const state = () => ({
    infoStatus: '',
    modal: false,
    playerOptions: {
        // videojs options
        muted: true,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
            type: "video/mp4",
            src: require('~/assets/videos/headcamp.mp4')
        }],
    },
    controlItems: [
        {
            logo: require('~/assets/icons/rosatom.svg'),
            title: 'Обращение генерального директора Росатом',
            info: { module: 'video' }
        },
        {
            logo: require('~/assets/icons/control/rosatomNewsIcon.svg'),
            title: 'Новости Росатом',
            info: { module: 'news', type: 'RosatomNews' }
        },
        {
            logo: require('~/assets/icons/control/missionIcon.svg'),
            title: 'Миссия Стратегия Ценности',
            info: { module: 'pages', type: 'Mission' }
        },
        {
            logo: require('~/assets/icons/control/newsIcon.svg'),
            title: 'Новости',
            info: { module: 'news', type: 'News' }
        },
        {
            logo: require('~/assets/icons/control/carrierIcon.svg'),
            title: 'Карьера',
            info: { module: 'pages', type: 'Career' }
        },
        {
            logo: require('~/assets/icons/control/weatherIcon.svg'),
            title: 'Погода',
            info: { module: 'Weather' }
        },
        {
            logo: require('~/assets/icons/control/vkIcon.svg'),
            title: 'Вконтакте',
            info: { module: 'news', type: 'VkNews' }
        }
    ]
})

export const getters = {
    controlItems(state) {
        return state.controlItems
    },
    infoStatus(state) {
        return state.infoStatus
    },
    volume(state) {
        return state.playerOptions.muted
    },
    modal(state) {
        return state.modal
    },
    playerOptions(state) {
        return state.playerOptions
    },
    pages(state) {
        return state.pages
    }
}

export const mutations = {
    SWITCH_VOLUME(state) {
        state.playerOptions.muted = !state.playerOptions.muted 
    },
    SWITCH_MODAL(state) {
        console.log(state);
        state.modal = !state.modal 
    },

}

export const action = {
    SwitchInfo({ dispatch, state }, { module, type }) {
        console.log(state);
        state.infoStatus = module;
        if (type) {
            dispatch('add'+type, type)
        }
    }
}



