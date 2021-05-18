export const listeLignes = [
    {nomcourt: 'C1', nomlong: "Cesson-Sévigné (Champs Blancs) <> Chantepie (Rosa Parks)"},
    {nomcourt: 'C2', nomlong: "Saint-Grégoire (Champ Daguet) <> Rennes (Haut Sancé)"},
    {nomcourt: 'C3', nomlong: "Rennes (Saint-Laurent) <> Rennes (Henri Fréville)"},
    {nomcourt: 'C4', nomlong: "Rennes (ZA Saint-Sulpice) <> Saint-Grégoire (Grand Quartier)"},
    {nomcourt: 'C5', nomlong: "Rennes (Patton) <> Rennes (Lycée Bréquigny)"},
    {nomcourt: 'C6', nomlong: "Cesson-Sévigné (Rigourdière) <> Saint-Jacques-de-la-Lande (Aéroport)"}
]

export const ACCESS_TOKEN = 'pk.eyJ1Ijoib2RlbG91YiIsImEiOiJja29yNnN6bjMxMjNtMnJudXFsYWoxaTAxIn0._1UYvNTijQe_wxjwqtJMsg';
export const IMAGERY = 'mapbox/streets-v11'
export const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
export const TILE_LAYER_SOURCE = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}'
export const MAX_ZOOM = 18
export const TILE_SIZE = 512
export const ZOOM_OFFSET = -1
export const TILE_LAYER_PARAMS = {
    attribution: ATTRIBUTION,
    maxZoom: MAX_ZOOM,
    id: IMAGERY,
    tileSize: TILE_SIZE,
    zoomOffset: ZOOM_OFFSET,
    accessToken: ACCESS_TOKEN
}
export const CENTER_INITIAL_GPS =[48.113, -1.67] //centered on Rennes
export const INITIAL_ZOOM = 14