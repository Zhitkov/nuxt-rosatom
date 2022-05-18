const jsdom = require("jsdom");
const Parser = require('rss-parser');
const { JSDOM } = jsdom;


export const state = () => ({
    pageType: '',
    scrollValue: 0,
    pageModules: {
        rosatomNews: {
            news: {
                rss: 'https://www.rosenergoatom.ru/zhurnalistam/news/rss/',
                data: []
            },
            pages: {
                data: ''
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
            news: {
                rss: 'https://www.rosenergoatom.ru/zhurnalistam/novosti-otrasli/rss/',
                data: []
            },
            pages: {
                data: ''
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
            news: false,
            pages: {
                link: 'https://api.vk.com/method/wall.get?access_token=a64f8f813c55729b1f44d4c830938857fb1283c611c76bd034e3f99474cf9cdaece1cb622e03d160ae72d&owner_id=-37706009&domain=rosatomru&count=5&filter=owner&v=5.131',
                data: ''
            }
        }
    }
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
        if (state.scrollValue <= 0) {
            return state.scrollValue = 0;
        }
        state.scrollValue -= 300;
        console.log(state.scrollValue);
    },
    SCROLL_DOWN(state) {
        state.scrollValue += 300;
        console.log(state.scrollValue);
    },
    SCROLL_TO_ZERO(state) {
        console.log(state.scrollValue, 'ZERO');
        state.scrollValue = 0;
    },
    CHANGE_PAGE_TYPE(state, type) {
        state.pageType = type;
    },
    ADD_PAGES_INFO(state, { text }) {
        state.pageModules[state.pageType].pages.data = text
    },
    ADD_NEWS_INFO(state, { news }) {
        console.log(news, 'mutation news');
        news.forEach((e) => {
            state.pageModules[state.pageType].news.data.push({
                title: e.title,
                img: e.enclosure.url,
                link: e.link.split('.ru')[0] + '.ru',
                postfix: e.link.split('.ru')[1]
            })
        })
    },
}

export const actions = {
    addPageContent({ dispatch, getters }) {
        if (getters.currentPageNews) {
            if (getters.currentPageNews.rss) {
                dispatch('getRSS', getters.currentPageNews.rss)
            }
        } else {
            if (getters.currentPageParametres.postfix) {
                dispatch('getHTML', getters.currentPageParametres)
            } else {
                dispatch('getVk', getters.currentPageParametres.link)
            }
        }
    },
    async getHTML({ commit }, { link, postfix, selector }) {
        let text = '';
        var styleReg = / *(\.cell {)/;
        console.log('+++' + link + postfix + '+++');
        await this.$axios.$get(link + postfix).then((html) => {
            let dom = new JSDOM(html);
            let imgs = dom.window.document.images
            for (let i in imgs) {
                if (imgs[i].src) {
                    imgs.item(i).src = link + imgs.item(i).src
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
    async getVk({ commit }, link) {
        console.log('vkvkvkvkvkvkvk', link);
        let text = '';
        await this.$axios.$get(link).then((d) => {
            d.response.items.forEach((value) => {
                if (value.attachments[0].type === 'video') {
                    console.log(value.attachments[0]);
                    text += `<img src="${value.attachments[0].video.image[4].url}"/>\n`
                }
                if (value.attachments[0].type === 'photo') {
                    console.log(value.attachments[0]);
                    text += `<img src="${value.attachments[0].photo.sizes[4].url}"/>\n`
                }
                text += `<p>${value.text}</p>\n`
            })
            // console.log(text);
        });
        commit('ADD_PAGES_INFO', { text });
    },
    async getRSS({ commit }, link) {
        let parser = new Parser();
        let rss = await parser.parseURL(link);
        console.log(rss.items, 'content');
        commit('ADD_NEWS_INFO', { news: rss.items });
    },
}
