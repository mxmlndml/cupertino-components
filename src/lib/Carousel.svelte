<svelte:options accessors={true} />

<script lang="ts">
    import { onMount } from "svelte";

    let className = "";
    export { className as class };
    export let index = 0;

    export const getLength = () => container.children.length;
    export const scrollTo = (index: number) => {
        const child = container.children[index] as HTMLElement;
        container.scrollTo({
            left: child.offsetLeft - container.offsetLeft,
            behavior: "smooth",
        });
    };

    let container: HTMLDivElement;

    onMount(() => {
        const options = {
            root: container,
            rootMargin: "0px",
            threshold: 1,
        };
        const observer = new IntersectionObserver((entries) => {
            const intersectingEntries = entries.filter(
                (entry) => entry.isIntersecting
            );
            if (intersectingEntries.length !== 1) {
                return;
            }
            const entry = intersectingEntries[0];
            index = [...container.children].indexOf(entry.target);
        }, options);

        const targets = [...container.children];
        targets.forEach((target) => observer.observe(target));
    });
</script>

<div class={className}>
    <div class="container" bind:this={container}>
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
        scroll-snap-stop: always;
        min-width: 100%;
    }
    div.full-width > div.container > :global(*) {
        scroll-margin-inline: 0;
    }
</style>
