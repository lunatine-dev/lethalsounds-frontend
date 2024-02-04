<script>
    import { font, sounds } from "$lib/client/stores/preferences";
    import { settings, legal } from "$lib/client/stores/modals";
    import Switch from "$lib/client/components/Form/Switch.svelte";
    import { version } from "$app/environment";

    import Modal from "$lib/client/components/Modal/Modal.svelte";

    let soundsChecked = $sounds;
    let fontsChecked = $font;
</script>

<div class="absolute"><span>v{version || "0.0.0"}</span></div>

<div
    class="h-full w-full bg-black text-white {$font
        ? 'font__lethal'
        : 'font__regular'}"
>
    <slot />
</div>

<Modal active={settings} title="Settings">
    <div class="p-5">
        <Switch
            bind:checked={soundsChecked}
            onChange={() => {
                sounds.set(soundsChecked);
            }}>Sounds</Switch
        >
        <Switch
            bind:checked={fontsChecked}
            onChange={() => {
                font.set(fontsChecked);
            }}>Custom Font</Switch
        >
    </div>
</Modal>

<Modal active={legal} title="Legal">
    <div class="p-5">
        <p>todo: legal stuffs</p>
    </div>
</Modal>
