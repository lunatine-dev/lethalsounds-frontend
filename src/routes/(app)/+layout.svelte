<script>
    import { font, sounds } from "$lib/client/stores/preferences";
    import { settings, legal, user } from "$lib/client/stores/modals";
    import Switch from "$lib/client/components/Form/Switch.svelte";
    import { version } from "$app/environment";

    import Modal from "$lib/client/components/Modal/Modal.svelte";

    // preferences
    let soundsChecked = $sounds;
    let fontsChecked = $font;

    // user settings
    let anonymous = false;

    export let data;
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

{#if data.user}
    <Modal active={user} title="User Settings">
        <div class="p-5">
            <div
                class="flex gap-2 items-center justify-center border-b pb-4 mb-4 border-trinidad-500/75"
            >
                <img
                    src={data.user.avatar}
                    alt="Your Avatar"
                    class="h-20 w-20"
                />
                <div class="flex flex-col">
                    <h1>{anonymous ? "Anonymous" : data.user.displayName}</h1>
                    <span>{data.user.rank || "Employee"}</span>
                </div>
            </div>
            <Switch bind:checked={anonymous}>Hide name</Switch>
        </div>
    </Modal>
{/if}
