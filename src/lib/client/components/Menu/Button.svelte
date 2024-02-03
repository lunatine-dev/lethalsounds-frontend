<script>
    export let active = false;
</script>

<div
    class="cursor-pointer {active
        ? 'bg-trinidad-500 text-black'
        : 'text-trinidad-500'}  text-2xl w-full hover:bg-trinidad-500 hover:text-black md:w-2/4 xl:w-2/6"
>
    <span>&gt;</span>
    <slot />
</div>
