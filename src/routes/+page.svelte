<script>
	import logo from "$lib/assets/sacLogo.png";
	import EventCard from "$lib/components/EventCard.svelte";
	import cardLogo from "$lib/assets/freshman.png";
	import cornerLogo from "$lib/assets/clubLogo.png";
	const events = [
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
	];
</script>

<div class="main">
	<div class="header">
		<div class="logo" style="background-image: url({logo});"></div>
		<h1>TECHNICAL COUNCIL, IIT PALAKKAD</h1>
	</div>
	<div class="events">
		{#each events as e}
			<EventCard logo={e.cardLogo} cornerLogo={e.cornerLogo} date={e.date} />
		{/each}
	</div>
</div>

<style>
	.events {
		display: flex;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 2rem;
		position: relative;
	}
	.main {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		margin-top: 2rem;
	}
	.header {
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
	h1 {
		margin: 0;
		font-size: 400%;
		line-height: 1;
		width: 60%;
		font-family: "Roboto";
	}
</style>
