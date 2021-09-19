<script lang="ts">
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>SveteKit Blog with Auth</title>
	<style lang="scss">
		@import '../styles/global.scss';
	</style>
</svelte:head>

<Header />
<main>
	<slot />
</main>
<Footer />
