<script>
	import Nav from "$lib/components/Nav.svelte";
	import logo from "$lib/assets/logo.png";
    import EventCard from "$lib/components/EventCard.svelte";
	const events = [1, 2, 3, 4, 5, 6]
</script>

<div class="main">
	<div class="header">
		<div class="logo" style="background-image: url({logo});"></div>
		<h1>TECHNICAL COUNCIL, IIT PALAKKAD</h1>
	</div>
	<div class="events">
	{#each events as e}
	<EventCard />
	{/each}
	</div>
</div>

<style>
	.events{
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
	}
	.main {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}
	.header{
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		align-items: center;
	}
	.logo {
		background-size: contain;
		background-position: center;
		width: 15rem;
		height: 15rem;
		background-repeat: no-repeat;
	}
	h1{
		margin: 0;
		font-size: 400%;
		line-height: 1;
		width: 60%;
		font-family: 'Roboto';
	}
</style>
