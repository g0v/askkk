// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('map').setView([24.972637, 121.529514], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([24.972637, 121.6]).addTo(map)
    .bindPopup("希望有更多的公園綠地。<a href='#'>see more</a>")
    .openPopup();

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([24.972637, 121.45]).addTo(map)
    .bindPopup("如何解決房價問題？<a href='#'>see more</a>")
    .openPopup();

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([24.972637, 121.529514]).addTo(map)
    .bindPopup("請說明將如何處理美河市弊案，以及重新檢討相關不當圈地行為。<a href='#'>see more</a>")
    .openPopup();


