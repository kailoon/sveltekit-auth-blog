<script context="module">
	import { session } from '$app/stores';
	import {} from 'svelte';

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
	<p>Profile</p>
	<h2>Hello <span>{$session.user.connections.google.name}</span></h2>
	<code>{JSON.stringify($session, null, 2)}</code>
{/if}
