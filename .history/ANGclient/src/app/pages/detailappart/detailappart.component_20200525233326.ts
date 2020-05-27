import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailappart',
  templateUrl: './detailappart.component.html',
  styleUrls: ['./detailappart.component.css']
})
export class DetailappartComponent implements OnInit {
  id: number;
  private sub: any;
  constructor(
    public route: ActivatedRoute) {

    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
   });
  }

}
