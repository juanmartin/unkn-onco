<script lang="ts">
	export let title: string = 'Hello';
	const bgHeroHome = 'bg-hero-home.jpg';
</script>

<section id="home-hero">
	<div class="img-container bg-img" style="background-image: url({bgHeroHome})" />
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<h1 class="text-7xl">{title}</h1>
		<div class="mt-8"><a href="/" class="font-bold">+ Learn more</a></div>
	</div>
</section>
