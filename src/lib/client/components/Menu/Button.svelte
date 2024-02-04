<script>
    import { toasts } from "svelte-toasts";
    import { goto } from "$app/navigation";
    // stores
    import { sounds } from "$lib/client/stores/preferences";
    // sounds
    import { ButtonOpen } from "$lib/client/util/sounds";
    export let active = false;
    export let href;
    export let onClick;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
    role="button"
    tabindex="0"
    on:click={() => {
        if (!href && !onClick)
            return toasts.info(`Button not implemented`, {
                duration: 2000,
            });
        if ($sounds) {
            ButtonOpen.play();
        }
        if (onClick) {
            onClick();
        }
        if (href) {
            goto(href);
        }
    }}
    class="cursor-pointer {active
        ? 'bg-trinidad-500 text-black'
        : 'text-trinidad-500'}  text-2xl w-full hover:bg-trinidad-500 hover:text-black md:w-2/4 xl:w-2/6"
>
    <span>&gt;</span>
    <slot />
</div>
