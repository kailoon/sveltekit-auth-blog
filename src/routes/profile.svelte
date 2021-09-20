<script context="module">
	import { session } from '$app/stores';
	import {} from 'svelte';
	import { signOut as authSignOut } from 'sk-auth/client';

	const signOut = () => {
		authSignOut().then(session.set);
	};

	export async function load({ session }) {
		const { user } = session;

		if (!user) {
			return {
				status: 302,
				redirect: '/'
			};
		}

		return {};
	}
</script>

<svelte:head>
	<title>Profile | SvelteKitAuth</title>
</svelte:head>

{#if $session?.user}
	<div class="page-title">Profile</div>
	<h2>Hello <span>{$session.user.connections.google.name}</span></h2>
	<p>
		<strong>Name</strong>: {$session.user.connections.google.name}<br />
		<strong>Email</strong>: {$session.user.connections.google.email}<br />
	</p>

	<button class="button" on:click={signOut}>Sign Out</button>
{/if}

<style lang="scss">
	.page-title {
		opacity: 0.5;
		font-size: 14px;
		text-transform: uppercase;
	}
	button {
		border-radius: 16px;
		padding: 10px 24px;
		background-color: white;
		border: 1px solid #e1e1e1;
		transition: all ease-in-out 200ms;
		&:hover {
			background-color: #f9f9f9;
			text-decoration: none;
		}
	}
	p {
		margin-bottom: 30px;
	}
</style>
