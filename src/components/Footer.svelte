<script lang="typescript">
	const year = new Date().getFullYear();
</script>

<footer>
	<p>
		{year}. Created by <a href="https://kailoon.com" title="visit site">kailoon</a>. View on
		<a href="https://github.com/kailoon/sveltekit-auth-blog" title="view on github">Github</a>
	</p>
</footer>

<style lang="scss">
	footer {
		padding: 40px 20px;
		font-size: 14px;
		color: #aaa;
		a {
			font-weight: 500;
			color: #333;
		}
	}
</style>
