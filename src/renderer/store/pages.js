const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export const state = () => ({
    pageType: '',
    scrollValue: 0,
    pageModules: {
        rosatomNews: {
            news: [
                {
                    link: 'https://rosatom.ru',
                    postfix: '/about/mission/',
                    selector: '.article__body',
                    data: '<div>debik</div>',
                },
                {
                    link: 'https://rosatom.ru',
                    postfix: '/about/mission/',
                    selector: '.article__body',
                    data: '<div>debik</div>',
                }
            ],
            pages: {

            }
        },
        mission: {
            news: false,
            pages: {
                link: 'https://rosatom.ru',
                postfix: '/about/mission/',
                selector: '.article__body',
                data: ''
            }
        },
        news: {
            news: [
                {
                    link: 'https://rosatom.ru',
                    postfix: '/about/mission/',
                    selector: '.article__body',
                    data: '<div>debik</div>',
                },
                {
                    link: 'https://rosatom.ru',
                    postfix: '/about/mission/',
                    selector: '.article__body',
                    data: '<div>debik</div>',
                }
            ],
            pages: {

            }
        },
        career: {
            news: false,
            pages: {
                link: 'https://rosatom.ru',
                postfix: '/career/',
                selector: '.article__body',
                data: ''
            }
        },
        vkNews: {
            news: [
                {
                    link: 'https://rosatom.ru',
                    postfix: '/about/mission/',
                    selector: '.article__body',
                    data: '<div>debik</div>',
                },
                {
                    link: 'https://rosatom.ru',
                    postfix: '/about/mission/',
                    selector: '.article__body',
                    data: '<div>debik</div>',
                }
            ],
            pages: {

            }
        }
    }
    // pageModules: {
    //     rosatomNews: {},
    //     mission: [],
    //     news: {},
    //     career: [],
    //     vkNews: {}
    // }
})

export const getters = {
    rosatomNews(s) {
        return s.pageModules.rosatomNews
    },
    mission(s) {
        return s.pageModules.mission
    },
    news(s) {
        return s.pageModules.news
    },
    career(s) {
        return s.pageModules.career
    },
    pageType(s) {
        return s.pageType
    },
    vkNews(s) {
        return s.pageModules.vkNews
    },
    pageModules(state) {
        return state.pageModules
    },
    currentPageNews(state) {
        if (state.pageType) {
            if (state.pageModules[state.pageType].news) {
                console.log(state.pageModules[state.pageType].news, 'state.pageModules[state.pageType].news');
                return state.pageModules[state.pageType].news 
            }
        } 
    },
    currentPageParametres(state) {
        return state.pageModules[state.pageType].pages;
    },
    scrollValue(state) {
        return state.scrollValue
    }

}

export const mutations = {
    SCROLL_UP(state) {
        state.scrollValue -= 5;
        console.log(state.scrollValue);
    },
    SCROLL_DOWN(state) {
        state.scrollValue += 5;
        console.log(state.scrollValue);
    },
    CHANGE_PAGE_TYPE(state, type) {
        state.pageType = type;
    },
    ADD_PAGES_INFO(state, { text }) {
        state.pageModules[state.pageType].pages.data = text
    },
    // ADD_NEWS_INFO(state, { news }) {
    //     console.log(type, 'mutation news');
    //     for (oneNew in news) {
    //         state.pageModules[state.pageType].news.push(oneNew);
    //     }
    // },
}

export const actions = {
    async addHTML({ commit }, { link, postfix, selector}) {
        let text = '';
        var styleReg = / *(\.cell {)/;
        console.log('+++'+link+postfix+'+++');
        await this.$axios.$get(link+postfix).then((html) => {
            let dom = new JSDOM(html);
            let imgs = dom.window.document.images
            for (let i in imgs) {
                if (imgs[i].src) {
                    imgs.item(i).src = link + imgs.item(i).src
                    // imgs[i].src = 'https://rosatom.ru' + imgs[i].src;
                }
            }
            dom.window.document.querySelector(selector).childNodes.forEach((e) => {
                if (e.innerHTML) {
                    if (styleReg.test(e.innerHTML)) {
                        text += `<style>${e.innerHTML}</style>\n`
                        return
                    }
                    text += `<p>${e.innerHTML}</p>\n`;
                }
            })
        })
        commit('ADD_PAGES_INFO', { text });
    },
    addPageContent({ dispatch, getters }) {
        if (getters.currentPageNews) {
            console.log('got news');
            // dispatch('addHTML')
        } else {
            console.log(getters.currentPageParametres);
            dispatch('addHTML', getters.currentPageParametres)
        }
    },
    // async getRosatomNews({ commit }, type) {

    // },
    // async addMission({ commit }, type) {
    //     let text = '';
    //     var styleReg = / *(\.cell {)/;
    //     await this.$axios.$get('https://rosatom.ru/about/mission/').then((html) => {
    //         let dom = new JSDOM(html);
    //         let imgs = dom.window.document.images
    //         for (let i in imgs) {
    //             if (imgs[i].src) {
    //                 imgs.item(i).src = 'https://rosatom.ru' + imgs.item(i).src
    //                 // imgs[i].src = 'https://rosatom.ru' + imgs[i].src;
    //                 console.log(imgs[i].src);
    //             }
    //         }
    //         dom.window.document.querySelector('.article__body').childNodes.forEach((e) => {
    //             if (e.innerHTML) {
    //                 if (styleReg.test(e.innerHTML)) {
    //                     text += `<style>${e.innerHTML}</style>\n`
    //                     return
    //                 }
    //                 text += `<p>${e.innerHTML}</p>\n`;
    //             }
    //         })
    //     })
    //     commit('ADD_PAGES_INFO', { text, type });
    // },
    // async getNews({ commit }, type) {

    // },
    // async addCareer({ commit }, type) {
    //     let text = '';
    //     var styleReg = / *(\.cell {)/;
    //     await this.$axios.$get('https://rosatom.ru/career/').then((html) => {
    //         let dom = new JSDOM(html);
    //         let imgs = dom.window.document.images
    //         for (let i in imgs) {
    //             if (imgs[i].src) {
    //                 imgs.item(i).src = 'https://rosatom.ru' + imgs.item(i).src
    //                 // imgs[i].src = 'https://rosatom.ru' + imgs[i].src;
    //                 console.log(imgs[i].src);
    //             }
    //         }
    //         dom.window.document.querySelector('.article__body').childNodes.forEach((e) => {
    //             if (e.innerHTML) {
    //                 if (styleReg.test(e.innerHTML)) {
    //                     text += `<style>${e.innerHTML}</style>\n`
    //                     return
    //                 }
    //                 text += `<p>${e.innerHTML}</p>\n`;
    //             }
    //         })
    //     })
    //     commit('ADD_PAGES_INFO', { text, type });
    // }
    // async getVkNews({ commit }, type) {

    // }
}


