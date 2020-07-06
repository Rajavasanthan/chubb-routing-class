import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  currentProductId;
  constructor(private activatedRout:ActivatedRoute) { 
    // this.currentProductId = this.activatedRout.snapshot.params.id
    this.activatedRout.params.subscribe((currentId) => {
      this.currentProductId = currentId.id;
    })
  }

  ngOnInit() {
  }

}
