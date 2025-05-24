/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",
	port: 8080,
	basePath: "/",
	ipWhitelist: ["127.0.0.1", "localhost", "::1", "::ffff:127.0.0.1"],
	useHttps: false,
	httpsPrivateKey: "",
	httpsCertificate: "",

	language: "de",
	locale: "de-DE",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"],
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Kalender",
			position: "top_left",
			config: {
				calendars: [
					{
						url: "https://calendar.google.com/calendar/ical/de.german%23holiday%40group.v.calendar.google.com/public/basic.ics",
						symbol: "calendar",
						maximumEntries: 20,
						maximumNumberOfDays: 90,
						displaySymbol: true,
						displayRepeatingCountTitle: true,
						defaultSymbol: "calendar",
						showEnd: true,
						tableClass: "small",
						fetchInterval: 10 * 1000
					}
				]
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Aktuelles Wetter",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 48.9475,
				lon: 8.8367,
				location: "Mühlacker",
				locationID: "",
				apiKey: "",
				units: "metric",
				updateInterval: 10 * 60 * 1000
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Wettervorhersage",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 48.9475,
				lon: 8.8367,
				location: "Mühlacker",
				locationID: "",
				apiKey: "",
				units: "metric",
				updateInterval: 10 * 60 * 1000,
				showPrecipitationAmount: true,
				showPrecipitationProbability: true
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Tagesschau",
						url: "https://www.tagesschau.de/xml/rss2",
						encoding: "UTF-8"
					},
					{
						title: "Spiegel Online",
						url: "https://www.spiegel.de/schlagzeilen/index.rss",
						encoding: "UTF-8"
					},
					{
						title: "Süddeutsche Zeitung",
						url: "https://rss.sueddeutsche.de/rss/Topthemen",
						encoding: "UTF-8"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				updateInterval: 10 * 60 * 1000,
				maxNewsItems: 5,
				showDescription: true,
				wrapTitle: true,
				showFullArticle: false
			}
		}
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
