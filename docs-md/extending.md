# Adding apps
...is very easy!
Extending openin is as easy as providing a regex of the URL that this app can open and a function that will generate a URL which will be used as a link
## Example
This example takes a Google Maps URL and converts it into an Apple Maps URL. This is already implemented in the library, but this is a pretty good example on how plugins work
::: warning
You must add plugins BEFORE you call `openin.auto()` or `openin.open()`
:::
```js
let iOS = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) && !window.MSStream;
if (iOS) { // Check if device is an iOS or macOS device because Apple Maps does not have a web UI
  openin.registerApp({
  	regex: /^https:\/\/www.google.com\/maps\/search\/\?api=1&query=(.*)/g, // Regex of the URL that app can open
  	generateLink(url) { // Method called to generate app link
  	    let query = url.match(/query=(.*)/g)[0].split('=')[1] // Extract the query out of URL
  		return {
  			url: 'http://maps.apple.com/?q='+query, // Generated url
  			alt: 'Google Maps', // For accessibility purposes
  			icon: 'https://cdn.jsdelivr.net/gh/gbougakov/openin/appicons/AppleMaps.png' // Icon URL
  		}
  	}
  })
}
```