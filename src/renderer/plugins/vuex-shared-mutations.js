import shareMutations from 'vuex-shared-mutations'

export default ({ store }) => {
    window.onNuxtReady(nuxt => {
        shareMutations({
            predicate: ['SWITCH_VOLUME', 'ADD_MISSION', 'ADD_ROSATOMNEWS', 'ADD_NEWS', 'ADD_CAREER', 'ADD_VKNEWS']
        })(store)
    })
}