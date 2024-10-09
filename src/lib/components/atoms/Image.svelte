<script lang="ts">
	import { dev } from '$app/environment';
	import { images } from '$lib/data/blog-posts/utils';

	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;

	let newSrc;

	$: fileName = src.split('.')[0];

	const img = '/src/lib' + src;
	newSrc = images[img];
	// console.log(`from Image.svelte- src:`, img);
	// console.log(`from Image.svelte-newSrc:`, newSrc);
	// console.log(`from Image.svelte-images:`, images);
</script>

<enhanced:img src={newSrc} {alt} loading="lazy" decoding="async" class:full-bleed={fullBleed} />

<style lang="scss">
	picture img {
		width: var(--size);
		height: auto;
		object-fit: cover;
		margin: auto;
	}
</style>
