<script context="module" lang="ts">
	export type TMember = {
		name: string;
		sub: string;
		description: string;
		img: string;
	};
</script>

<script lang="ts">
	export let name: string = '';
	export let sub: string = '';
	export let description: string = '';
	export let img: string = '';
</script>

<div>
	<div>
		<img src={img} alt={name} />
	</div>
	<div>
		<h3>{name}</h3>
		<h2>{sub}</h2>
		<p>{description}</p>
	</div>
</div>
