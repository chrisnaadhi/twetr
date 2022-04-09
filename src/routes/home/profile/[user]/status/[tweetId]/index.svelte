<script lang="ts">
	import Tweet from '$root/components/tweet.svelte'
	import type { TweetType } from '$lib/types'

	export let tweet: TweetType

	const name = tweet.name
	const content = tweet.content.slice(0, 60)
</script>

<svelte:head>
	<title>{name} on Twetr: "{content}..."</title>
</svelte:head>

<Tweet {tweet} />
