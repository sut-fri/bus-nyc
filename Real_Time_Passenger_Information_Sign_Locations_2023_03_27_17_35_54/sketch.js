var map = L.map("map").setView([40.7033, -73.8413], 11);

L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}).addTo(map);



let busInfo = L.geoJson(mainObj.features).bindPopup(function (layer) {
    return 'Data Provider: ' + layer.feature.properties.wireless_communication + '<br/>' + 'Direction: ' + layer.feature.properties.direction;
}).addTo(map);