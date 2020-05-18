import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {markerClusterGroup} from '../../../node_modules/leaflet.markercluster';
import 'leaflet';
import 'leaflet.markercluster';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-openstreetmap',
  templateUrl: './openstreetmap.component.html',
  styleUrls: ['./openstreetmap.component.css']
})
export class OpenstreetmapComponent implements OnInit {
  logements;
  private coordonnéesurl = "https://opendata.paris.fr/api/records/1.0/search/?dataset=logements-sociaux-finances-a-paris&facet=annee&facet=bs&facet=mode_real&facet=arrdt&facet=nature_programme";
  private url2 = "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr_crous_logement_france_entiere&q=&facet=zone&refine.zone=Paris+18";



  constructor(private _httpClient : HttpClient) {

   }

  ngOnInit() {
    let test = [];
    this._httpClient.get<coordonnées>(this.url2).subscribe(
      (response) =>{


        //console.log(response.records[1]);
        //this.array_coordonnes = response.map( Objet => new coo )
        //console.log(this.array_coordonnes);


        for (let index = 0; index < response.records.length; index++) {
          //@ts-ignore
          test[index] = response.records[index].geometry.coordinates[index];
          console.log(response.records[index]);
          //console.log(response.records[index].geometry.coordinates);
          //console.log(response.records[index].geometry.coordinates);
          //console.log(response.records[index].geometry.coordinates[1]);
          for (let index = 0; index < test.length; index++) {
            //@ts-ignore
            //marqueurs.addLayer(L.marker([response.records[index].geometry.coordinates[1],response.records[index].geometry.coordinates[0]],{icon:myIcon})).bindPopup("Nom : "+ response.records[index].fields.title + " </br>Adresse :"+response.records[index].fields.address+"<br>Arrondissement : "+" </br> Photo : <img style = "+"width : 150px , height : 100px ;"+" src = "+response.records[index].fields.photo+" </br> Téléphone : "+response.records[index].fields.phone+"</br>Accés : "+ response.records[index].fields.services);
            marqueurs.addLayer(L.marker([response.records[index].geometry.coordinates[1],response.records[index].geometry.coordinates[0]],{icon:myIcon})).bindPopup("Nom : "+ response.records[index].fields.title + " </br>Adresse :"+response.records[index].fields.address+"<br>Arrondissement : "+" </br> Photo : "+response.records[index].fields.photo+" </br> Téléphone : "+response.records[index].fields.phone+"</br>Accés : "+ response.records[index].fields.services);
          }

        }



      },

      (error) => {
        console.log('Erreur ! : ' + error);
      }

    );


    // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
    var mymap = L.map('map', {
      //minZoom: 0,
      //maxZoom: 0
      zoom : 2000
  });

  mymap.setView([48.6099786377,2.467800617 ],11);


    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: 'Carte'
    }).addTo(mymap);


    const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });

    var marqueurs = L.markerClusterGroup();

  mymap.addLayer(marqueurs);
  }




}

interface coordonnées{
  records: coordonnées[];
  geometry: coordonnées[];
  coordinates : coordonnées[];
}
