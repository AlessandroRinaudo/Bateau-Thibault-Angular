import { Component, OnInit } from '@angular/core';
import {ConnexionService} from 'src/app/Services/connexion.service'

@Component({
  selector: 'app-crustaces',
  templateUrl: './crustaces.page.html',
  styleUrls: ['./crustaces.page.scss'],
})
export class CrustacesPage implements OnInit {
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
        if(i.category==2) {
          this.liste.push(i)
        }
      }
      console.log(this.liste)
    })
  }

}
