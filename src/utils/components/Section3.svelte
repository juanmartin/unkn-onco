<script lang="ts">
	export let title: string = '';
	export let text: string = '';
	export let text2: string = '';
	export let img: string = '';
	export let infoClass: string = '';
</script>

<section class={infoClass + ' ' + 'flex justify-end w-full'}>
	<div
		class="min-h-[800px] w-full md:ml-[20%] md:mr-[14%] bg-center bg-cover bg-no-repeat relative"
		style="background-image: url({img})"
	>
		<!-- text -->
		<div class="md:pr-40 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
			<h2 class="text-white text-7xl font-bold mb-6 leading-snug">{title}</h2>
			<p class="text-white font-medium leading-8 mb-8">{text}</p>
			<p class="text-white font-medium leading-8 mb-8">{text2}</p>
			<a href="/"><h3 class="font-bold text-white">+ Learn more</h3></a>
		</div>
	</div>
</section>
