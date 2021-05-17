const ACCESS_TOKEN = 'pk.eyJ1Ijoib2RlbG91YiIsImEiOiJja29yNnN6bjMxMjNtMnJudXFsYWoxaTAxIn0._1UYvNTijQe_wxjwqtJMsg';

var mymap = L.map('map').setView([48.113, -1.67], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: ACCESS_TOKEN
}).addTo(mymap);






