<script>import { onMount } from "svelte";
import { resetThemeColor, setThemeColor } from "./helpers/themeColor";
export let prefersLargeTitle = true;
let header;
let title;
let headerHeight = -1;
let titleOffset = 0;
$:
  expanded = headerHeight < titleOffset;
onMount(() => {
  headerHeight = Number.parseFloat(getComputedStyle(header).height);
  titleOffset = title.getBoundingClientRect().bottom;
});
const onScroll = () => {
  titleOffset = title.getBoundingClientRect().bottom;
};
$:
  expanded ? resetThemeColor() : setThemeColor("--fill-gray");
</script>

<svelte:window on:scroll={onScroll} />

<header bind:this={header} class:expanded class="full-width">
  <!-- left button group (eg. back navigation) -->
  <div class="left-button">
    <slot name="left-button" />
  </div>

  <!-- default slot for standard title -->
  <h1><slot /></h1>

  <!-- right button group (eg. edit button) -->
  <div class="right-button">
    <slot name="right-button" />
  </div>
</header>

<!-- default slot for large title -->
{#if prefersLargeTitle}
  <p aria-hidden="true" bind:this={title}><slot /></p>
{/if}

<style>
  header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 max(0.75rem, env(safe-area-inset-right)) 0
      max(0.75rem, env(safe-area-inset-left));
    background-color: var(--fill-gray);
    border-bottom: 0.5px solid var(--gray-900);
    z-index: var(--z-index-top);
  }

  header.expanded {
    background-color: var(--background);
    border-bottom-color: transparent;
  }

  .left-button {
    justify-self: start;
  }

  h1 {
    grid-column: 2;
    margin: 0.75rem 0;
    font-size: 1rem;
    font-weight: 600;
    opacity: 1;
    transition: opacity 0.4s linear;
  }

  header.expanded h1 {
    opacity: 0;
    pointer-events: none;
    transition: unset;
  }

  .right-button {
    justify-self: end;
  }

  p {
    font-size: 2rem;
    font-weight: bold;
    padding-top: 3.125rem;
  }
</style>
