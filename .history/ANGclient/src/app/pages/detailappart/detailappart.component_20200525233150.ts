import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailappart',
  templateUrl: './detailappart.component.html',
  styleUrls: ['./detailappart.component.css']
})
export class DetailappartComponent implements OnInit {

  constructor(private router: Router,
    public route: ActivatedRoute) {
      super();

        this.id = this.route.snapshot.paramMap.get('id'); //get id parameter
    }

  ngOnInit() {
  }

}
