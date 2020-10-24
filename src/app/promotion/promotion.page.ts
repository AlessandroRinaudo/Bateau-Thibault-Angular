import { Component, OnInit } from '@angular/core';
import {ConnexionService} from 'src/app/Services/connexion.service'

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {
  fichier;
  liste =[];

  constructor(public connexion:ConnexionService) { }

  ngOnInit() {
    this.affichage()
  }

  affichage() {
    this.connexion.getFichier().subscribe((res)=> {
      this.fichier = res;
      for(let i of this.fichier) {
        if(i.sale) {
          this.liste.push(i)
        }
      }
      console.log(this.liste)
    })
  }

}
