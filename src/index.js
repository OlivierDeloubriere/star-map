const ACCESS_TOKEN = 'pk.eyJ1Ijoib2RlbG91YiIsImEiOiJja29yNnN6bjMxMjNtMnJudXFsYWoxaTAxIn0._1UYvNTijQe_wxjwqtJMsg';
const IMAGERY = 'mapbox/streets-v11'
const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const TILE_LAYER_SOURCE = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
const MAX_ZOOM = 18
const TILE_SIZE = 512
const ZOOM_OFFSET = -1
const TILE_LAYER_PARAMS = {
    attribution: ATTRIBUTION,
    maxZoom: MAX_ZOOM,
    id: IMAGERY,
    tileSize: TILE_SIZE,
    zoomOffset: ZOOM_OFFSET,
    accessToken: ACCESS_TOKEN
}
const CENTER_INITIAL_GPS =[48.113, -1.67] //centered on Rennes
const ZOOM_INIT = 14

var mymap = L.map('map')
var tileLayer = L.tileLayer(TILE_LAYER_SOURCE, TILE_LAYER_PARAMS)

mymap.setView(CENTER_INITIAL_GPS, ZOOM_INIT);
tileLayer.addTo(mymap);






