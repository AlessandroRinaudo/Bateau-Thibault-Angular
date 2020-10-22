import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit() {
    // this.getData()
  }

}
