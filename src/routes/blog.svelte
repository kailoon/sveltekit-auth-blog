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

<script lang="ts">
	import type { Article } from 'src/Types';
	export let articles: Article[];

	// captialize the titles
	const capitalize = (sentence: string) => {
		return sentence.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) => letter.toUpperCase());
	};
</script>

<div class="page-title">Blog Page</div>
<div>
	{#each articles as { title, id, body }}
		<article>
			<h3><a sveltekit:prefetch href={`/blog/${id}`}>{capitalize(title)}</a></h3>
			<p>{body}</p>
		</article>
	{/each}
</div>

<style lang="scss">
	.page-title {
		opacity: 0.5;
		font-size: 14px;
		text-transform: uppercase;
	}
	article {
		margin: 20px 0;
		padding: 20px 0;
		border-bottom: 1px solid #f1f1f1;
		h3 {
			font-size: 24px;
			font-weight: 600;
			line-height: 1.3;
			margin-bottom: 20px;
			a {
				color: var(--linkColor);
				text-decoration: none;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
</style>
