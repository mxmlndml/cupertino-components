<script lang="ts">
  import { onMount } from "svelte";
  import { resetThemeColor, setThemeColor } from "./helpers/themeColor";

  export let prefersLargeTitle = true;
  export let transparentSubheader = false;

  let header: HTMLElement;
  let title: HTMLParagraphElement;

  let headerHeight = -1;
  let titleOffset = 0;
  $: expanded = headerHeight < titleOffset;

  onMount(() => {
    headerHeight = Number.parseFloat(getComputedStyle(header).height);
    titleOffset = title.getBoundingClientRect().bottom;
  });

  const onScroll = () => {
    titleOffset = title.getBoundingClientRect().bottom;
  };

  $: expanded ? resetThemeColor() : setThemeColor("--fill-gray");
</script>

<svelte:window on:scroll={onScroll} />

<header bind:this={header} class:expanded class="main full-width">
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

<!-- subheader -->
{#if $$slots.subheader}
  <header
    style:--offset="{headerHeight}px"
    class:expanded
    class:transparent={transparentSubheader}
    class="subheader full-width"
  >
    <slot name="subheader" />
  </header>
{/if}

<style>
  header {
    background-color: var(--fill-gray);
    border-block: 0.5px solid var(--gray-900);
    z-index: var(--z-index-top);
  }
  header.expanded {
    background-color: var(--bg);
    border-color: transparent;
  }

  header.main {
    position: fixed;
    inset: 0 0 auto 0;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    border-top: none;
  }

  header.main:not(:last-of-type) {
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

  header.main.expanded h1 {
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

  header.subheader {
    position: sticky;
    inset: var(--offset) 0 auto 0;
  }
  header.subheader > :global(*) {
    margin: 0 auto;
    padding: var(--safe-area);
    padding-block: 0.5rem;
    max-width: var(--limited-width);
  }

  header.subheader:not(.transparent) {
    border-top: none;
  }

  header.subheader.transparent {
    border-bottom: none;
    background-color: transparent;
    backdrop-filter: contrast(90%) saturate(130%) blur(20px);
    -webkit-backdrop-filter: contrast(90%) saturate(130%) blur(20px);
  }

  header.subheader.expanded {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
</style>
