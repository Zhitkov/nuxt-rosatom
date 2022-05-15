// import { createPersistedState, createSharedMutations } from "vuex-electron"
import createCache from 'vuex-cache';

export const plugins = [
    createCache()
]

export const state = () => ({
    infoStatus: '',
    pageType: '',
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
            info: { module: 'news', type: 'rosatomNews' }
        },
        {
            logo: require('~/assets/icons/control/missionIcon.svg'),
            title: 'Миссия Стратегия Ценности',
            info: { module: 'pages', type: 'mission' }
        },
        {
            logo: require('~/assets/icons/control/newsIcon.svg'),
            title: 'Новости',
            info: { module: 'news', type: 'news' }
        },
        {
            logo: require('~/assets/icons/control/carrierIcon.svg'),
            title: 'Карьера',
            info: { module: 'pages', type: 'career' }
        },
        {
            logo: require('~/assets/icons/control/weatherIcon.svg'),
            title: 'Погода',
            info: { module: 'Weather' }
        },
        {
            logo: require('~/assets/icons/control/vkIcon.svg'),
            title: 'Вконтакте',
            info: { module: 'news', type: 'vkNews' }
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
    }
}

export const mutations = {
    SWITCH_VOLUME(state) {
        state.playerOptions.muted = !state.playerOptions.muted 
    },
    SWITCH_MODAL(state) {
        state.modal = !state.modal 
    },
    SWITCH_INFO(state, module) {
        state.infoStatus = module;
    }

}

export const actions = {
    // switchInfo({ commit, dispatch }, { module, type }) {
    //     commit('SWITCH_INFO', module)    
    //     if (type) {
    //         dispatch('pages/add'+type[0].toUpperCase()+type.slice(1), type)
    //     }
    //     commit('SWITCH_MODAL')
    // }
    switchInfo({ commit, dispatch }, { module, type }) {
        commit('SWITCH_INFO', module)    
        if (type) {
            commit('pages/CHANGE_PAGE_TYPE', type);
            dispatch('pages/addPageContent')
        }
        commit('SWITCH_MODAL')
    }
}



