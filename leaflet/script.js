(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([37.782872, -122.221417], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //home
    var marker = L.marker([37.774243, -122.206507]).addTo(map);
    //alameda
    var circle = L.circle([37.770579, -122.248993], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
    }).addTo(map);
    //downtown chinatown
    var polygon = L.polygon([
    [37.802189, -122.277832],
    [37.809784, -122.266159],
    [37.796763, -122.264013]
    ]).addTo(map);

    marker.bindPopup("Childhood Home").openPopup();

    circle.bindPopup("Grandparents Home");
    polygon.bindPopup("Downtown + Chinatown visits weekly");

}());