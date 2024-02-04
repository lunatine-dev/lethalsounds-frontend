<script>
    // stores
    import { sounds } from "$lib/client/stores/preferences";
    // sounds
    import { ButtonOpen } from "$lib/client/util/sounds";
    export let active = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    role="button"
    tabindex="0"
    on:click={() => {
        if ($sounds) {
            ButtonOpen.play();
        }
    }}
    class="cursor-pointer {active
        ? 'bg-trinidad-500 text-black'
        : 'text-trinidad-500'}  text-2xl w-full hover:bg-trinidad-500 hover:text-black md:w-2/4 xl:w-2/6"
>
    <span>&gt;</span>
    <slot />
</div>
