import shareMutations from 'vuex-shared-mutations'

export default ({ store }) => {
    window.onNuxtReady(nuxt => {
        shareMutations({
            predicate: [
                'SWITCH_VOLUME',
                'SWITCH_MODAL',
                'SWITCH_INFO',
                'SWITCH_VIDEO_PLAY',
                'CURRENT_TIME_DOWN',
                'CURRENT_TIME_UP',
                'CHANGE_SRC_VIDEO',
                'pages/SCROLL_DOWN',
                'pages/SCROLL_UP',
                'pages/SCROLL_TO_ZERO',
                'pages/ADD_PAGES_INFO',
                'pages/CHANGE_PAGE_TYPE',
                'pages/ADD_NEWS_INFO',
                'weather/CHANGE_CURRENT_CITY'
            ]
        })(store)
    })
}