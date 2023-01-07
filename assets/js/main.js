// const offset = 0;
// const limit = 5;
// const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

//função para pegar e alterar os tipos
//função substituida pelo objeto
// function convertPokemonTypesToLi(pokemonTypes){
//     return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
// }

//pegando item HTML
const pokemonList = document.getElementById('pokemonList');

const loadMoreButton = document.getElementById('loadMoreButton');

const limit = 5;
let offset = 0;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) =>
         `
            <li class="pokemon ${pokemon.type}">
            <span class="number">#0${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                   ${pokemon.types.map((type) => `<li class="type" ${type}>${type}</li>`).join('')}
    
                </ol>
                <img 
                src="${pokemon.photo}" 
                alt="${pokemon.name}"/>
            </div>
        </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
    

}
    
    //2. convertendo os pokemons da lista em html com função map
    // const newList = pokemons.map((pokemon) => {
    //     return covertPokemonToLi(pokemon);
    // })
    // const newHtml = newList.join('')
    // pokemonList.innerHTML += newHtml

    //1. convertendo os pokemons da lista em html com loop for
    // const listItens = [];
    //     for (let i = 0; i < pokemons.length; i++) {
    //         const pokemon = pokemons[i];
    //         listItens.push(covertPokemonToLi(pokemon))
    //pokemonList.innerHTML +=covertPokemonToLi(pokemon)
    //lista já em html
    //console.log(covertPokemonToHtml(pokemon))
    //     }
    
    //     console.log(listItens);

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit);
})

    
    

    
