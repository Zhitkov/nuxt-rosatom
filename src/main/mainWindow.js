import BrowserWinHandler from './BrowserWinHandler'

const winHandler =
  [
    new BrowserWinHandler({
      height: 600,
      width: 1000
    }),
    new BrowserWinHandler({
      height: 600,
      width: 1000
    })
  ]

winHandler.forEach((win, i, arr, links = ['/control', '/info']) => {
  win.onCreated(_browserWindow => {
    // _browserWindow.setMenuBarVisibility(false) 
    _browserWindow.webContents.session.webRequest.onHeadersReceived({ urls: ["*://*/*"] },
      (d, c) => {
        if (d.responseHeaders['X-Frame-Options']) {
          delete d.responseHeaders['X-Frame-Options'];
        } else if (d.responseHeaders['x-frame-options']) {
          delete d.responseHeaders['x-frame-options'];
        }

        c({ cancel: false, responseHeaders: d.responseHeaders });
      }
    );

    win.loadPage(links[i])
  })
})


export default winHandler
