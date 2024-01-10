



export interface Pokemon {
    name: string;
    url: string;
    id: number;
}


export interface Pokemons {
    count: number;
    next: string;
    previous: string;    
    results: Pokemon[];
}
