import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';



declare var ol: any;
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;




@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})



export class AccueilComponent implements OnInit {
  logements;
  private coordonnéesurl = "https://opendata.paris.fr/api/records/1.0/search/?dataset=logements-sociaux-finances-a-paris&facet=annee&facet=bs&facet=mode_real&facet=arrdt&facet=nature_programme"
  map: any;

  constructor(private _httpClient: HttpClient) {}

  ngOnInit() {

    this._httpClient.get<any[]>(this.coordonnéesurl).subscribe(
      (response) =>{
        console.log(response);


      },

      (error) => {
        console.log('Erreur ! : ' + error);
      }

    )


    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    const mymap = L.map('map').setView([50.6311634, 3.0599573], 12);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Carte'
    }).addTo(mymap);


  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
  L.marker([50.6311634, 3.0599573], {icon: myIcon}).bindPopup('Je suis un Frugal Marqueur').addTo(mymap).openPopup();




  }
  }
