<script>
    // stores
    import { sounds } from "$lib/client/stores/preferences";
    // components
    import { tooltip } from "@svelte-plugins/tooltips";
    // sounds
    import { ButtonOpen } from "$lib/client/util/sounds";

    export let Icon;
    export let href = "#";
    export let title;
    export let target;
    export let onClick = () => {};
</script>

<div class="pr-2 pl-2 last:pr-0 first:pl-0">
    <a
        {href}
        {title}
        {target}
        on:click={() => {
            if ($sounds) {
                ButtonOpen.play();
            }
            onClick();
        }}
        use:tooltip
        class="text-gray-400 hover:text-trinidad-500"
    >
        <svelte:component this={Icon} />
    </a>
</div>
