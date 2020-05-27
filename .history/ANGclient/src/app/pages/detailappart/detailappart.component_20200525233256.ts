import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailappart',
  templateUrl: './detailappart.component.html',
  styleUrls: ['./detailappart.component.css']
})
export class DetailappartComponent implements OnInit {
  id: number;
  constructor(private router: Router,
    public route: ActivatedRoute) {

    }

  ngOnInit() {
  }

}
