export function getLigneURL(nomLigne) {
    return `https://data.explore.star.fr/api/records/1.0/search/?dataset=tco-bus-topologie-parcours-td&q=&facet=idligne&facet=nomcourtligne&facet=type&facet=nomarretdepart&facet=nomarretarrivee&refine.nomcourtligne=${nomLigne}&refine.type=Principal`
}

export async function getLigneInfo(nomLigne) {
    let ligneUrl = getLigneURL(nomLigne)
    try {
        let ligneInfoResponse = await fetch(ligneUrl)
        let ligneInfo = await ligneInfoResponse.json()
        return ligneInfo
    } catch(e) {
        console.log(`Une erreur s'est produite, impossible de trouver la ligne ${nomLigne} - ${e}`)
    }
}

export function getLigneCoordinates(ligneInfo) {
    let ligneCoordinates = ligneInfo.records[0].fields.parcours.coordinates
    return lineCoordinatesWithProperLatLngOrder(ligneCoordinates)
}

export function getLigneCouleur(ligneInfo) {
    return ligneInfo.records[0].fields.couleurtrace
}

function lineCoordinatesWithProperLatLngOrder(originalData) {
    let transformedData = []
    originalData.forEach(point => {
        transformedData = [...transformedData, [point[1], point[0]]]
    })
    return transformedData
}