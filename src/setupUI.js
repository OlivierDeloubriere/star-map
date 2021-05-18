import * as API from './starApi.js'
import * as P from './init.js'
import * as M from './map.js'

const ddLignes = document.querySelector('#dd-ligne')

export function updateListOfLigne() {
    let dropDown = document.querySelector('#dd-ligne')
    dropDown.innerHTML = ''
    P.listeLignes.forEach((ligne) => {
        let option = document.createElement('option')
        option.value = ligne.nomcourt
        option.textContent = `${ligne.nomcourt} : ${ligne.nomlong}`
        dropDown.appendChild(option)
    })
}

export function initialiseUI(map) {
    updateListOfLigne()
    ddLignes.addEventListener('change', () => {
        M.drawSelectedLine(map, ddLignes.value, true)
    })
}
