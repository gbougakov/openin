# API Reference

### `openin.auto()`
Automatically find links on the page and turn them into “openin links”

### `openin.open(url: String)`
Open the app picker for the passed URL or if the URL is not recognised, just open the link

### `openin.registerApp(app)`
`app` - app object
```js
{
	regex: /^https:\/\/www.google.com\/maps\/search\/\?api=1&query=(.*)/g, // Regex of the URL that app can open
	generateLink(url) { // Method called to generate app link
		return {
			url: url, // Generated url
			alt: 'Google Maps', // For accessibility purposes
			icon: 'https://cdn.jsdelivr.net/gh/gbougakov/openin/appicons/GoogleMaps.png' // Icon URL
		}
	}
}
```
