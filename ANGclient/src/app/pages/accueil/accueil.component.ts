import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from '@angular/common/http';
import {markerClusterGroup} from '../../../../node_modules/leaflet.markercluster';
import 'leaflet';
import 'leaflet.markercluster';







@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})



export class AccueilComponent implements OnInit {
  logements;
  private coordonnéesurl = "https://opendata.paris.fr/api/records/1.0/search/?dataset=logements-sociaux-finances-a-paris&facet=annee&facet=bs&facet=mode_real&facet=arrdt&facet=nature_programme";
  private url2 = "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr_crous_logement_france_entiere&q=&facet=zone&refine.zone=Paris+18";



  constructor(private _httpClient: HttpClient) {}






  ngOnInit() {



  }
  }


  interface coordonnées{
    records: coordonnées[];
    geometry: coordonnées[];
    coordinates : coordonnées[];
  }



