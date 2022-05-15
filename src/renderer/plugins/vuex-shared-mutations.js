import shareMutations from 'vuex-shared-mutations'

export default ({ store }) => {
    window.onNuxtReady(nuxt => {
        shareMutations({
            predicate: ['SWITCH_VOLUME', 'SWITCH_MODAL', 'SWITCH_INFO', 'pages/SCROLL_DOWN', 'pages/SCROLL_UP', 'pages/ADD_PAGES_INFO', 'pages/CHANGE_PAGE_TYPE']
        })(store)
    })
}