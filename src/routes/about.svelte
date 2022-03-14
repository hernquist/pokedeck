<script>
	let name = 'something';
</script>

<h1 class="text-4xl text-center my-8 uppercase">HELLO KIDS FROM SMITHA</h1>

<input bind:value={name} />
<p>Hello {name}</p>

<svelte:head>
	<title>About Page - Pokedex</title>
</svelte:head>

<style>
	h1 {
		color: magenta;
	}
</style>
