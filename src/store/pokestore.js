import { writable } from 'svelte/store';

export const pokemon = writable([]);

const fetchPokemon = async function () {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=151`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, i) => ({
		name: data.name,
		id: i + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
	}));

	console.log('loadedPokemon', loadedPokemon);
	pokemon.set(loadedPokemon);
};

fetchPokemon();
