import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from '../../models/pokemons.interface';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrl: './pokemon-component.component.css',
})
export class PokemonComponent implements AfterViewInit {



  displayedColumns: string[] = ['name', 'url','delete'];
  dataSource = new MatTableDataSource<Pokemon>(this.elements);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  pokemons: any;
  elements?: Pokemon[];
  pokemonBuscado:any;

  constructor(private pokemonService: PokemonService, private _liveAnnouncer: LiveAnnouncer) {
    this.loadData();
  }

  loadData() {
    this.pokemonService.getPokemons()
      .subscribe(resp => {
        this.pokemons = resp.results;
        this.elements = this.pokemons;
        this.dataSource.data = this.pokemons;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }



deletePokemon(index:number){
  this.pokemons.splice(index, 1);
  this.updateDataSource();
}


updateDataSource() {
  this.dataSource.data = this.pokemons;
}

}
