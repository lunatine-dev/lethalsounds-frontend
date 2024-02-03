<script>
    import { tooltip } from "@svelte-plugins/tooltips";

    export let Icon;
    export let href = "#";
    export let title;
    export let target;
</script>

<div class="pr-2 pl-2 last:pr-0 first:pl-0">
    <a
        {href}
        {title}
        {target}
        on:click
        use:tooltip
        class="text-gray-400 hover:text-trinidad-500"
    >
        <svelte:component this={Icon} />
    </a>
</div>
