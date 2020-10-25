import { Component, OnInit } from '@angular/core';
import {ConnexionService} from 'src/app/Services/connexion.service'

@Component({
  selector: 'app-poisson',
  templateUrl: './poisson.page.html',
  styleUrls: ['./poisson.page.scss'],
})
export class PoissonPage implements OnInit {

  fichier;
  liste =[];
  panier=[];
  constructor(public connexion:ConnexionService) { }

  ngOnInit() {
    this.affichage()
  }

  affichage() {
    this.connexion.getFichier().subscribe((res)=> {
      this.fichier = res;
      for(let i of this.fichier) {
        if(i.category==0) {
          this.liste.push(i)
        }
      }
      console.log(this.liste)
    })
  }

  ajouterAuPanier(i) {
    if(!this.panier.includes(i))
      this.panier.push(i)
    else {
      (this.panier).splice(i,1)
      }
    console.log(this.panier)
  }

}
