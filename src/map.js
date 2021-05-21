import * as API from './starApi.js'
import * as P from './init.js'

export function getInitialisedMap() {
    let mymap = L.map('map')
    const tileLayer = L.tileLayer(P.TILE_LAYER_SOURCE, P.TILE_LAYER_PARAMS)   
    mymap.setView(P.CENTER_INITIAL_GPS, P.INITIAL_ZOOM);
    tileLayer.addTo(mymap);
    return mymap
}


export async function drawSelectedLine(map, ligne, clearAllFirst) {
    if(clearAllFirst) {
        clearAllDrawnLines(map)
    }
    let ligneInfo = await API.getLigneInfo(ligne)
    let ligneCoordinates = API.getLigneCoordinates(ligneInfo)
    let ligneColor = API.getLigneCouleur(ligneInfo)
    let polyLineOptions = {
        color: ligneColor
    }
    let polyline = L.polyline(ligneCoordinates, polyLineOptions)
    
    map.addLayer(polyline)
    map.fitBounds(polyline.getBounds())
}

function clearAllDrawnLines(map) {
    for(let i in map._layers) {
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