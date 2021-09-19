<script context="module">
	export async function load({ fetch }) {
		const url = `https://jsonplaceholder.typicode.com/posts?_limit=20`;
		const res = await fetch(url);
		const articles = await res.json();

		return {
			props: { articles }
		};
	}
</script>

<script>
	export let articles;
</script>

<h1>Blog Page</h1>
<div>
	{#each articles as article}
		<article>
			<h3><a href={`/blog/${article.id}`}>{article.title}</a></h3>
			<p>{article.body}</p>
		</article>
	{/each}
</div>

<style lang="scss">
	article {
		margin: 20px 0;
		h3 {
			color: var(--linkColor);
		}
	}
</style>
