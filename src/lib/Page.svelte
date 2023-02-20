<script lang="ts">
  export let dimmed = false;
</script>

<svelte:head>
  <meta name="color-scheme" content="dark light" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  />
  <link rel="stylesheet" href="./global.css" />
</svelte:head>

<div class:dimmed>
  <slot />
</div>

<style>
  div {
    --bg: var(--white, white);
    padding: max(0rem, env(safe-area-inset-top))
      max(0rem, env(safe-area-inset-right))
      max(0rem, env(safe-area-inset-bottom))
      max(0rem, env(safe-area-inset-left));
    background-color: var(--bg);
    min-height: 100dvh;
  }

  div > :global(*):not(.full-width) {
    max-width: 800px;
    margin: 0 auto;
    padding: max(0rem, env(safe-area-inset-top))
      max(0.75rem, env(safe-area-inset-right))
      max(0rem, env(safe-area-inset-bottom))
      max(0.75rem, env(safe-area-inset-left));
  }

  div.dimmed {
    --bg: #f2f2f6;
  }

  div::after {
    content: "";
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg);
    z-index: -1;
  }

  @media screen and (prefers-color-scheme: dark) {
    div,
    div.dimmed {
      --bg: var(--black, black);
    }
  }
</style>
