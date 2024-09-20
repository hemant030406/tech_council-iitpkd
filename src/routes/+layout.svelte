<script lang="ts">
	import Nav from "$lib/components/Nav.svelte";
</script>

<main>
	<Nav/>
	<slot />
</main>

<style>
	:global(body) {
		background-color: black;
		color: white;
	}
</style>
