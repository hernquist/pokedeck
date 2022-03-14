<!-- javascript -->
<script>
	import PokemanCard from '/src/components/pokemanCard.svelte';
	import { pokemon } from '/src/store/pokestore';

	let searchTerm = '';
	let filteredPokeman = [];

	$: {
		if (searchTerm) {
			filteredPokeman = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokeman = [...$pokemon]; // swap out the entire list
		}
	}
</script>

<!-- html -->
<h1 class="py-4 text-4xl text-center my-8 uppercase">Pokedex Get Ready!</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>

<div class="grid gap-4 md:grid-cols-3 grid-cols-1">
	{#each filteredPokeman as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>

<!-- meta -->
<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<!-- styles -->
<style>
	h1 {
		color: cornflowerblue;
	}

	p {
		color: grey;
		font-family: fantasy;
	}
</style>
