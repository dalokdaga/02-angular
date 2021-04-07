import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
    constructor(private activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private router:Router) { 

    }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {      
      this.heroes = this._heroesService.buscarHeroes(params['id']);
      this.termino = params['id'];
      //console.log(this.heroes)
    });
  }

}
