import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pokemons } from '../models/pokemons.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) { }

  basUrl = environment.url;
  getAllPath = environment.getAll;

  getPokemons(): Observable<Pokemons> {
   
    return this.http.get<Pokemons>(this.basUrl+this.getAllPath);

  }
}
