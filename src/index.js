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
const INITIAL_ZOOM = 14

const listeLignes = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6']

var mymap = L.map('map')
var tileLayer = L.tileLayer(TILE_LAYER_SOURCE, TILE_LAYER_PARAMS)

mymap.setView(CENTER_INITIAL_GPS, INITIAL_ZOOM);
tileLayer.addTo(mymap);

function updateListOfLigne() {
    let dropDown = document.querySelector('#dd-ligne')
    dropDown.innerHTML = ''
    listeLignes.forEach((ligne) => {
        let option = document.createElement('option')
        option.value = ligne
        option.textContent = ligne
        dropDown.appendChild(option)
    })
}

updateListOfLigne()
document.querySelector('#dd-ligne').addEventListener('change', () => {
    drawSelectedLine()
})

function clearPolylines(map) {
    for(i in map._layers) {
        if(map._layers[i]._path != undefined) {
            try {
                map.removeLayer(map._layers[i]);
            }
            catch(e) {
                console.log("problem with " + e + map._layers[i]);
            }
        }
    }
}

function lineCoordinatesWithProperLatLngOrder(originalData) {
    let transformedData = []
    originalData.forEach(point => {
        transformedData = [...transformedData, [point[1], point[0]]]
    })
    return transformedData
}

async function drawSelectedLine() {
    clearPolylines(mymap)
    let ligne = document.querySelector('#dd-ligne').value
    let ligneUrl=`https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-topologie-parcours-td&q=&facet=idligne&facet=nomcourtligne&facet=type&facet=nomarretdepart&facet=nomarretarrivee&refine.nomcourtligne=${ligne}&refine.type=Principal`
    let lineInfoResponse = await fetch(ligneUrl)
    let lineInfo = await lineInfoResponse.json()
    let lineCoordinates = await lineInfo.records[0].fields.parcours.coordinates
    let lineCoordinatesTransformed = lineCoordinatesWithProperLatLngOrder(lineCoordinates)
    //lineCoordinatesTransformed = [[48.109, -1.7],[48.129, -1.63]]
    let lineColor = lineInfo.records[0].fields.couleurtrace
    let polyLineOptions = {color: lineColor}
    let polyline = L.polyline(lineCoordinatesTransformed, polyLineOptions)
    
    mymap.addLayer(polyline, {fill: false})
    mymap.fitBounds(polyline.getBounds())
}