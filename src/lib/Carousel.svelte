<script lang="ts">
    let className = "";
    export { className as class };
    export let size: "contain" | "cover" = "cover";
    export let page = 0;
</script>

<div class={className}>
    <div class="container {size}">
        <slot />
    </div>
</div>

<style>
    div.container {
        display: flex;
        overflow-y: scroll;
        scroll-snap-type: x mandatory;
    }

    div.container::-webkit-scrollbar {
        display: none;
    }

    div.container > :global(*) {
        scroll-snap-align: start;
    }
    div.full-width > div.container > :global(*) {
        scroll-margin-inline: 0;
    }

    div.container.cover > :global(*) {
        min-width: 100%;
    }
    div.container.contain > :global(*) {
        max-height: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
    }
</style>
