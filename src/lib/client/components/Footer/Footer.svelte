<script>
    // components
    import IconAction from "./IconAction.svelte";
    // icons
    import Settings from "~icons/carbon/settings";
    import LogoDiscord from "~icons/carbon/logo-discord";
    import CurrencyDollar from "~icons/carbon/currency-dollar";
    import LogoThunderstore from "~icons/simple-icons/thunderstore";
    // stores
    import { settings } from "$lib/client/stores/modals";
</script>

<div class="flex justify-evenly items-center h-full pb-1 flex-wrap">
    <span>&copy; astatine.moe</span>
    <div class="flex divide-x divide-solid divide-gray-600">
        <IconAction
            on:click={(e) => {
                e.preventDefault();
                settings.set(true);
            }}
            Icon={Settings}
            title="Settings"
        />
        <IconAction
            href="https://ko-fi.com/astatine"
            target="_blank"
            Icon={CurrencyDollar}
            title="Support me"
        />
        <IconAction
            href="https://ko-fi.com/astatine"
            target="_blank"
            Icon={LogoDiscord}
            title="Discord Server"
        />
        <IconAction
            href="https://ko-fi.com/astatine"
            target="_blank"
            Icon={LogoThunderstore}
            title="Mod Download"
        />
    </div>
</div>
