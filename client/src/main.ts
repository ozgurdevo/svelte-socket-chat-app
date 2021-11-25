import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		api: 'ws://localhost:3000'
	}
});

export default app;