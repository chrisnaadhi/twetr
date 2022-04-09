<script context="module" lang="ts">
	import { dev } from '$app/env'

	// load JavaScript in development for hot module replacement
	export const hydrate = dev

	// prerender static page in production
	export const prerender = true
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<div class="container">
	<h1>About</h1>
	<div class="content">
		<p>
			Lorem ipsum, dolor sit amet consectetur adipisicing
			elit. Cum nostrum consectetur eligendi omnis doloribus
			at consequatur, provident voluptas iste accusamus
			facere aliquid quidem excepturi quasi dolor laudantium
			sapiente quia placeat, reprehenderit maxime aut
			temporibus. Quam?
		</p>
	</div>
</div>

<style>
	h1 {
		font-size: var(--font-24);
	}

	p {
		color: var(--color-text-muted);
	}

	.container {
		display: grid;
		gap: var(--spacing-8);
		padding: var(--spacing-16);
	}

	.content {
		display: grid;
		gap: var(--spacing-16);
	}
</style>
