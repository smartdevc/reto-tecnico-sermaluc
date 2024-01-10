



export interface Pokemon {
    name: string;
    url: string;
    delete: any;
}


export interface Pokemons {
    count: number;
    next: string;
    previous: string;    
    results: Pokemon[];
}
