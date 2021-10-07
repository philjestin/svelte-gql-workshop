<script>
import Nav from "$lib/nav.svelte";
import { themeChange} from "theme-change"
import { onMount } from "svelte";
import "../app.css";

onMount(async () => {
  themeChange(false)
})
</script>

<Nav />
<main class="container max-w-xl mx-auto px-4">
  <slot></slot>
</main>