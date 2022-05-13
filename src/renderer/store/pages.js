import { Cheerio } from "cheerio"



export const state = () => ({
    rosatomNews: {},
    mission: [],
    news: {},
    career: [],
    vkNews: {}
})

export const getters = {
    rosatomNews(s) { s.rosatomNews },
    mission(s) { s.mission },
    news(s) { s.news },
    career(s) { s.career },
    vkNews(s) { s.vkNews }
}

export const mutations = {
    ADD_MISSION(state, text) {
        state.mission = text;
    },
    ADD_CAREER(state, text) {
        state.career = text;
    },
}

export const actions = {
    // async getRosatomNews({ commit }, type) {
        
    // },
    async addMission({ commit }, type) {
        console.log('getMission', type);
        let text = '';
        await axios.get('https://rosatom.ru/about/mission/').then((html) => {
            let $ = Cheerio.load(html.data)
            $('.article__body').each((i, elem) => {
                text += `${$(elem).text()}\n`
            })
        })
        commit('ADD_' + type.toUpperCase(), text);
    },
    // async getNews({ commit }, type) {
        
    // },
    async addCareer({ commit }, type) {
        console.log('getCareer', type);
        let text = '';
        await axios.get('https://rosatom.ru/career/').then((html) => {
            let $ = Cheerio.load(html.data)
            $('.article__body').each((i, elem) => {
                text += `${$(elem).text()}\n`
            })
        })
        commit('ADD_' + type.toUpperCase(), text);
    }
    // async getVkNews({ commit }, type) {
        
    // }
}


