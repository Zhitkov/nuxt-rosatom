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
        width: '100vw', 
        height: '100vh', 
        color: "#409eff",
        currentTime: 0,
        title: '', 
        src: '', 
        videoPlay: false,
        mute: false, 
        webFullScreen: false,
        speedRate: ["0.75", "1.0", "1.25", "1.5", "2.0"], 
        autoPlay: true, 
        loop: true, 
        mirror: false, 
        ligthOff: false,  
        volume: 0.3, 
        control: true, 
    },
    controlItems: [
        {
            logo: require('~/assets/icons/rosatom.svg'),
            title: 'Обращение генерального директора Росатом',
            info: { module: 'video', src: require('~/assets/videos/greetings.mp4') }
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
            info: { module: 'weather' }
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
        return state.playerOptions.mute
    },
    videoPlay(state) {
        return state.playerOptions.videoPlay
    },
    // currentTime(state) {
    //     return state.playerOptions.currentTime
    // },
    modal(state) {
        return state.modal
    },
    playerOptions(state) {
        return state.playerOptions
    }
}

export const mutations = {
    SWITCH_VOLUME(state) {
        state.playerOptions.mute = !state.playerOptions.mute 
    },
    CURRENT_TIME_UP(state) {
        if ((state.playerOptions.currentTime === 0) || (state.playerOptions.currentTime < 0)) {
            state.playerOptions.currentTime = 1
        }
        if (state.playerOptions.currentTime > 0) {
            state.playerOptions.currentTime += 1
        }
    },
    CURRENT_TIME_DOWN(state) {
        if ((state.playerOptions.currentTime === 0) || (state.playerOptions.currentTime > 0)) {
            state.playerOptions.currentTime = -1
        }
        if (state.playerOptions.currentTime < 0) {
            state.playerOptions.currentTime -= 1
        }
    },
    SWITCH_VIDEO_PLAY(state) {
        state.playerOptions.videoPlay = !state.playerOptions.videoPlay 
    },
    SWITCH_MODAL(state) {
        state.modal = !state.modal 
    },
    SWITCH_INFO(state, module) {
        state.infoStatus = module;
    },
    CHANGE_SRC_VIDEO(state, src) {
        state.playerOptions.src = src
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
    switchInfo({ commit, dispatch }, { module, type, src }) {
        commit('SWITCH_INFO', module)    
        if (type) {
            commit('pages/CHANGE_PAGE_TYPE', type);
            dispatch('pages/addPageContent')
        }
        if (src) {
            commit('CHANGE_SRC_VIDEO', src)
        }
        commit('SWITCH_MODAL')    
    }
}



