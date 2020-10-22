import { Component, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http'; 

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  constructor() { }

  // getElementFromClient (){
  //   this.http.Client
  //   .get<any[]>('../assets/data/data.json')
  //   .subscribe(
  //     (response) => {
  //       this.appareils = response;
  //       this.appareils = response ;
  //       this.emitAppareilSubject();
  //     },
  //     (error) => {
  //       console.log("Problème avec : "+error)
  //     }
  //   )

  // }

  ngOnInit() {
    // this.getData()
  }

}
