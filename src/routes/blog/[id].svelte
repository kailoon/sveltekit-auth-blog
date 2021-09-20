<script context="module">
	import { session } from '$app/stores';
	import { page } from '$app/stores';

	export async function load({ page, fetch }) {
		const id = page.params.id;
		const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
		const res = await fetch(url);
		const article = await res.json();

		return {
			props: { article }
		};
	}
</script>

<script lang="typescript">
	export let article: { title: any; body: any };
	import { goto } from '$app/navigation';

	const goBack = () => {
		window.history.back();
	};
</script>

{#if $session?.user}
	<div><button on:click={goBack}>Back</button></div>
	<article>
		<h2>{article.title}</h2>
		{@html article.body}
	</article>
{:else}<p>
		You need to <a href={`/api/auth/signin/google?redirect=/blog/${$page.params.id}`}
			>login with Google</a
		>
		to read this article.
	</p>{/if}

<style lang="scss">
	article {
		max-width: 60ch;
		h2 {
			color: var(--linkColor);
			line-height: 1.1;
			letter-spacing: -1px;
			margin-bottom: 20px;
			font-size: 40px;
		}
	}
	button {
		padding: 4px 8px;
		margin-bottom: 20px;
	}
</style>
