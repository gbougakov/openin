(function () {
  let openin = {
    apps: [
      {
        regex: /^https:\/\/www.google.com\/maps\/search\/\?api=1&query=(.*)/g,
        generateLink (url) {
          // Google Maps
          return {
            url: url,
            alt: 'Google Maps',
            icon: 'https://cdn.jsdelivr.net/gh/gbougakov/openin/appicons/GoogleMaps.png'
          }
        }
      },
      {
        regex: /^https:\/\/www.google.com\/maps\/search\/\?api=1&query=(.*)/g,
        generateLink (url) {
          // Yandex Maps
          return {
            url: 'https://yandex.ru/maps/?mode=search&text=' + url.match(/query=(.*)/g)[0].split('=')[1],
            alt: 'Yandex Maps',
            icon: 'https://cdn.jsdelivr.net/gh/gbougakov/openin/appicons/YandexMaps.jpg'
          }
        }
      }
    ],
    open (url) {
      
      let openers = [] // We'll store links here
      for (let i = 0; i < openin.apps.length; i++) { // Iterate through a list of link types
        if (url.match(openin.apps[i].regex)) { // Check if link matches the expected type
          openers.push(openin.apps[i].generateLink(url))
          
        } else {
          
        }
      }
      
      if (!openers.length) {
        window.open(url)
        return
      }
      $('.openin-apps').html('')
      for (let i = 0; i < openers.length; i++) {
        $('.openin-apps').append('<div class="openin-app">\n' +
          '    <div>\n' +
          '        <a href="' + openers[i].url + '">\n' +
          '            <img src="' + openers[i].icon + '" alt="' + openers[i].alt + '" class="openin-app-icon"/>\n' +
          '        </a>\n' +
          '    </div>\n' +
          '</div>')
      }
      $('.openin').fadeIn(100)
    },
    auto () {
      $('a').each(function () { // Find every link that matches the selector
        $(this).click(function (e) { // Set a click handler
          e.preventDefault() // Prevent the browser from opening it
          
          openin.open($(this).attr('href'))
        })
      })
    }
  }
  $('body').append('<div class="openin">' +
    '    <div class="openin-bg"></div>' +
    '    <div class="openin-modal">' +
    '        <h2 class="openin-title">Open in</h2>' +
    '        <div class="openin-apps">' +
    '            ' +
    '        </div>' +
    '        <div class="openin-cancel">' +
    '            Cancel' +
    '        </div>' +
    '    </div>' +
    '</div>')
  $('.openin-cancel').click(function () {
    $('.openin').fadeOut(100)
  })
  window.openin = openin
})()