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

<script>
	export let article;
</script>

{#if $session?.user}
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
			letter-spacing: -2px;
			margin-bottom: 40px;
			font-size: 70px;
		}
	}
</style>
