import { Component, OnInit } from '@angular/core';
import {ConnexionService} from 'src/app/Services/connexion.service'

@Component({
  selector: 'app-coquillage',
  templateUrl: './coquillage.page.html',
  styleUrls: ['./coquillage.page.scss'],
})
export class CoquillagePage implements OnInit {
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
        if(i.category==1) {
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

}
