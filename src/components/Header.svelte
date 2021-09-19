<script context="module">
	import { session } from '$app/stores';
	import { signOut as authSignOut } from 'sk-auth/client';

	const signOut = () => {
		authSignOut().then(session.set);
	};
</script>

<nav>
	<a href="/" class="branding">SvltKt Blog</a>
	<ul>
		<li><a href="/">Home</a></li>
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
			<button on:click={signOut}>Sign Out</button>
		{:else}
			<li class="button"><a href="/api/auth/signin/google?redirect=/">Login with Google</a></li>
		{/if}
	</ul>
</nav>

<style lang="scss">
	nav {
		padding: 40px 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		a.branding {
			text-decoration: none;
			color: black;
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
	button {
		cursor: pointer;
		padding: 4px 8px;
	}
</style>
