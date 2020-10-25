import { Component, OnInit } from '@angular/core';
import {ConnexionService} from 'src/app/Services/connexion.service'
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../servizio/data.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {
  fichier;
  liste =[];
  panier=[];

  constructor(public connexion:ConnexionService, private router: Router, private dataService: DataService) { }

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
      // console.log(this.liste)
    })
  }

  ajouterAuPanier(i) {
    if(!this.panier.includes(i))
      this.panier.push(i)
    else {
     let panier2=[];
      for(let j of this.panier) {
        if(j!=i) 
          panier2.push(j);
      } 
        (this.panier).splice(i);
        this.panier=panier2;
      }
    console.log(this.panier)
  }

  openDetailsWithState() {
    let navigationExtras: NavigationExtras = {
      state: {
        panier:this.panier
      }
    };
    this.router.navigate(['panier'], navigationExtras);
  }
  
}
