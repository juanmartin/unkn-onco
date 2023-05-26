<script lang="ts">
	export let sub: string = '';
	export let title: string = '';
	export let text: string = '';
	export let img: string = '';
	export let infoClass: string = '';
</script>

<section class={infoClass + ' ' + 'flex flex-col md:flex-row relative max-w-5xl mx-auto p-8'}>
	<div class="md:pr-6 md:w-1/2">
		<h4 class=" text-secondary mb-6">{sub}</h4>
		<h2 class="text-primary text-4xl mb-6 leading-snug">{title}</h2>
		<img src={img} alt={img} class="md:hidden w-full mb-6" />
		<p class="text-grey font-medium leading-8 mb-8">{text}</p>
		<a href="/"><h3 class="font-bold text-grey">+ Learn more</h3></a>
	</div>
	<div class="md:w-1/2">
		<img src={img} alt={img} class="hidden md:block" />
	</div>
</section>
