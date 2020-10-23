import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor(public http: HttpClient) { }

  getElementFromClient (){
    this.http
    .get<any[]>('../assets/data/data.json')
    .subscribe(
      (response) => {
        
      },
      (error) => {
        console.log("Problème avec : "+error)
      }
    )

  }

  ngOnInit() {
    // this.getData()
  }

}
