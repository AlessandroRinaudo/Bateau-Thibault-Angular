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

}
