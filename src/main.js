import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    title: `Michael Snook's site`,
    description: `A personal weblog and project pad`,
  }
});

export default app;