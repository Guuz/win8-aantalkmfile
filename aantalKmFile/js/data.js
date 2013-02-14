(function () {
	function getDataFromServer(callback) {
		WinJS.xhr({ url: 'http://verkeerstatic.anwb.nl/ANWBMap/anwb/GetStats?country=NL' }).done(
			function (result) {
				var rawData = window.JSON.parse(result.responseText)
				  , aantalKmFile = rawData.data.openlr.length

				callback(null, aantalKmFile);
			},
			function (result) {
				WinJS.log && WinJS.log("Could not retrieve data", "data", "error");
				callback('Could not retrieve data');
			}
		);
	}



	WinJS.Namespace.define("data", {
		getDataFromServer: getDataFromServer
	});
})();