<script>
    import Page from "$lib/client/components/Layout/Page.svelte";
    import Button from "$lib/client/components/Menu/Button.svelte";
    import TextInput from "$lib/client/components/Menu/TextInput.svelte";
    import Select from "$lib/client/components/Menu/Select.svelte";

    import Loader from "$lib/client/components/Menu/Loader.svelte";

    let search = "";
    let selected = "newest";
</script>

<div class="container">
    <Page gaps={false}>
        <div slot="title" class="flex items-end h-full pb-1">
            <div
                class="h-2/4 w-full flex flex-wrap justify-between items-center p-0"
            >
                <h1 class="text-trinidad-500 text-3xl hidden md:block">
                    Soundpacks
                </h1>
                <TextInput text="Search" value={search} />
                <Select
                    value={selected}
                    options={[
                        {
                            id: "popular_dl",
                            text: "Most Downloads",
                        },
                        {
                            id: "popular_likes",
                            text: "Most Liked",
                        },
                        {
                            id: "newest",
                            text: "Newest",
                        },
                        {
                            id: "oldest",
                            text: "Oldest",
                        },
                    ]}
                />
            </div>
        </div>

        <div
            slot="content"
            class="h-full border-[3px] border-temptress-500 p-5"
        >
            <Loader />
        </div>

        <div slot="footer" class="pt-5">
            <Button href="/">Back to menu</Button>
        </div>
    </Page>
</div>
