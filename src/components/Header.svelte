<script context="module">
	import { session } from '$app/stores';
</script>

<nav>
	<a href="/" class="branding">SvltKt Blog</a>
	<ul>
		<li><a href="/blog">Blog</a></li>
		{#if $session?.user}
			<li>
				<a href="/profile">
					<img
						src={$session.user.connections.google.picture}
						alt={$session.user.connections.google.name}
						class="avatar"
					/>
				</a>
			</li>
		{:else}
			<li class="button"><a href="/api/auth/signin/google?redirect=/">Login with Google</a></li>
		{/if}
	</ul>
</nav>

<style lang="scss">
	nav {
		padding: 40px 0;
		margin: 0 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #f1f1f1;
		a.branding {
			text-decoration: none;
			color: var(--gray-light);
			font-weight: 500;
		}
		ul {
			list-style: none;
			display: flex;
			align-items: center;
			gap: 24px;
			li {
				a {
					font-weight: 500;
					text-decoration: none;
					color: var(--linkColor);
					display &:hover {
						text-decoration: underline;
					}
				}
				&.button a {
					border-radius: 16px;
					padding: 10px 24px;
					background-color: white;
					border: 1px solid #e1e1e1;
					transition: all ease-in-out 200ms;
					&:hover {
						background-color: #f9f9f9;
						text-decoration: none;
					}
					&:active {
						background-color: #e1e1e1;
					}
				}
			}
		}
	}
	.avatar {
		width: 30px;
		height: 30px;
		border-radius: 40px;
		overflow: hidden;
		display: block;
		margin-top: 2px;
	}
</style>
