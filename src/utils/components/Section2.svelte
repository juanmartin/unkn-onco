<script lang="ts">
	export let sub: string = '';
	export let title: string = '';
	export let text: string = '';
	export let img: string = '';
	export let infoClass: string = '';
</script>

<section
	class={infoClass + ' ' + 'min-h-[800px] bg-center md:bg-[length:110%] relative'}
	style="background-image: url({img})"
>
	<!-- text -->
	<div class="px-8 pr-40 absolute md:left-1/2 top-1/2 -translate-y-1/2">
		<h4 class=" text-white mb-6">{sub}</h4>
		<h2 class="text-white text-4xl mb-6 leading-snug">{title}</h2>
		<p class="text-white font-medium leading-8 mb-8">{text}</p>
		<a href="/"><h3 class="font-bold text-white">+ Learn more</h3></a>
	</div>
</section>
