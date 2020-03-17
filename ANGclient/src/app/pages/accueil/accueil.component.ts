import { Component, OnInit } from '@angular/core';
import {initMap} from '../../../map.js';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    initMap();


  }

}
