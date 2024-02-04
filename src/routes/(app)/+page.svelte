<script>
    // Components
    import Page from "$lib/client/components/Layout/Page.svelte";
    import Footer from "$lib/client/components/Footer/Footer.svelte";

    import Button from "$lib/client/components/Menu/Button.svelte";
    import Divider from "$lib/client/components/Menu/Divider.svelte";
    // static files
    import logo from "$lib/assets/logo.webp";

    // stores
    import { legal } from "$lib/client/stores/modals";

    //data
    export let data;
</script>

<Page>
    <img
        slot="title"
        src={logo}
        alt="Lethal Sounds"
        class="object-contain h-full w-full"
    />
    <div slot="content" class="h-full">
        <div class="flex flex-col container gap-1 md:justify-center h-full">
            <Button href="/soundpacks">Browse Soundpacks</Button>
            {#if data?.user}
                <Button>Create Soundpack</Button>
            {:else}
                <Divider />
                <Button tooltip="To create soundpacks, you must be logged in"
                    >Login with Discord</Button
                >
            {/if}
            <Divider />
            <Button
                onClick={() => {
                    legal.set(true);
                }}>Legal</Button
            >
        </div>
    </div>
    <Footer slot="footer" />
</Page>
