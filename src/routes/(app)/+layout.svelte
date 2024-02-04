<script>
    import { font } from "$lib/client/stores/preferences";
    import { settings } from "$lib/client/stores/modals";

    import Modal from "$lib/client/components/Modal/Modal.svelte";
</script>

<div
    class="h-full w-full bg-black text-white {!$font
        ? 'font__lethal'
        : 'font__regular'}"
>
    <slot />
</div>

<Modal active={settings} title="Settings" />
