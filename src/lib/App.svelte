<script lang="ts">
  export let dimmed = false;
</script>

<svelte:head>
  <meta name="color-scheme" content="dark light" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  />
</svelte:head>

<div class:dimmed>
  <slot />
</div>

<style>
  /* resets */
  /* Box sizing rules */
  :global(*::before),
  :global(*::after) {
    box-sizing: border-box;
  }

  /* Remove default margin */
  :global(body),
  :global(h1),
  :global(h2),
  :global(h3),
  :global(h4),
  :global(p),
  :global(figure),
  :global(blockquote),
  :global(dl),
  :global(dd) {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  :global(ul[role="list"]),
  :global(ol[role="list"]) {
    list-style: none;
  }

  /* Set core root defaults */
  :global(html:focus-within) {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  :global(body) {
    min-height: 100vh;
    min-height: 100dvh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  :global(a:not([class])) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  :global(img),
  :global(picture) {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  :global(input),
  :global(button),
  :global(textarea),
  :global(select) {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    :global(html):focus-within {
      scroll-behavior: auto;
    }

    :global(*),
    :global(*::before),
    :global(*::after) {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* globals */
  :global(:root) {
    /* width */
    --limited-width: 800px;

    /* colors */
    --disabled: #999999;

    --fill-primary: #78788033;
    --fill-secondary: #78788029;
    --fill-tertiary: #7474801f;
    --fill-quaternary: #7474801f;
    --fill-gray: hsl(0, 0%, 97%);

    --gray-100: #2c2c2e;
    --gray-200: #3a3a3c;
    --gray-300: #48484a;
    --gray-400: #636366;
    --gray-500: #8e8e93;
    --gray-600: #aeaeb2;
    --gray-700: #c7c7cc;
    --gray-800: #d1d1d6;
    --gray-900: #e5e5ea;

    --red: rgb(255, 59, 48);
    --orange: rgb(255, 149, 0);
    --yellow: rgb(255, 204, 0);
    --green: rgb(52, 199, 89);
    --mint: rgb(0, 199, 190);
    --teal: rgb(48, 176, 199);
    --cyan: rgb(50, 173, 230);
    --blue: rgb(0, 122, 255);
    --indigo: rgb(88, 86, 214);
    --purple: rgb(175, 82, 222);
    --pink: rgb(255, 45, 85);
    --brown: rgb(162, 132, 94);
    --theme: var(--blue);

    /* padding */
    --safe-area-top: max(0rem, env(safe-area-inset-top));
    --safe-area-right: max(0.75rem, env(safe-area-inset-right));
    --safe-area-bottom: max(0rem, env(safe-area-inset-bottom));
    --safe-area-left: max(0.75rem, env(safe-area-inset-left));
    --safe-area-block: var(--safe-area-top) var(--safe-area-bottom);
    --safe-area-inline: var(--safe-area-right) var(--safe-area-left);
    --safe-area: var(--safe-area-top) var(--safe-area-right)
      var(--safe-area-bottom) var(--safe-area-left);

    /* border */
    --radius-round: 9999999999rem;

    /* easing */
    --quint-out: cubic-bezier(0.23, 1, 0.32, 1);

    /* z-index */
    --z-index-top: 9999999999;
  }

  @media screen and (prefers-color-scheme: dark) {
    :global(:root) {
      --disabled: #757575;

      --fill-primary: #7878805c;
      --fill-secondary: #78788052;
      --fill-tertiary: #7474803d;
      --fill-quaternary: #7474802e;
      --fill-gray: hsl(0, 0%, 8%);

      --gray-100: #e5e5ea;
      --gray-200: #d1d1d6;
      --gray-300: #c7c7cc;
      --gray-400: #aeaeb2;
      --gray-500: #8e8e93;
      --gray-600: #636366;
      --gray-700: #48484a;
      --gray-800: #3a3a3c;
      --gray-900: #2c2c2e;

      --red: rgb(255, 69, 58);
      --orange: rgb(255, 159, 10);
      --yellow: rgb(255, 214, 10);
      --green: rgb(48, 209, 88);
      --mint: rgb(99, 230, 226);
      --teal: rgb(64, 200, 224);
      --cyan: rgb(100, 210, 255);
      --blue: rgb(10, 132, 255);
      --indigo: rgb(94, 92, 230);
      --purple: rgb(191, 90, 242);
      --pink: rgb(255, 55, 95);
      --brown: rgb(172, 142, 104);
    }
  }

  :global(body) {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }

  :global(.visually-hidden) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  :global(.full-width) {
    width: 100%;
  }

  /* local */
  div {
    --bg: var(--white, white);
    background-color: var(--bg);
    min-height: 100dvh;
  }

  div > :global(*):not(.full-width) {
    max-width: var(--limited-width);
    margin: 0 auto;
    padding-inline: var(--safe-area-inline);
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
