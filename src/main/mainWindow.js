import BrowserWinHandler from './BrowserWinHandler'

const winHandler =
  [
    new BrowserWinHandler({
      height: 600,
      width: 1000
      // myLink: '/info'
    }),
    new BrowserWinHandler({
      height: 600,
      width: 1000
      // myLink: '/control'
    })
  ]
//   = new BrowserWinHandler({
//   height: 600,
//   width: 1000
// }, {
//   height: 600,
//   width: 1000
// })


// winHandler[0].onCreated(_browserWindow => {
//   winHandler[0].loadPage('/info')
//   winHandler[1].onCreated(_browserWindow => {
//     winHandler[1].loadPage('/control')
//   // Or load custom url
//   // _browserWindow.loadURL('https://google.com')
// })
// })

winHandler.forEach((win, i, arr, links = ['/control', '/info']) => {
  win.onCreated(_browserWindow => {
    _browserWindow.setMenuBarVisibility(false) 
    win.loadPage(links[i])
  })
})

// winHandler.onCreated((_browserWindow) => {
//   _browserWindow.forEach((win) => {
//     win.loadPage(win.mylink)
//   })
// })

// winHandler.onCreated().forEach((win) => {
//   win.loadPage(win.mylink)
// })



export default winHandler
