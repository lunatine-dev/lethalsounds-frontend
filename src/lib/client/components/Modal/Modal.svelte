<script>
    // stores
    import { sounds, font } from "$lib/client/stores/preferences";

    // icons
    import CloseLarge from "~icons/carbon/close-large";

    export let active = false;
    export let title = "";

    let id = title.replace(/\s+/g, "-").toLowerCase();

    function handleKeyDown(event) {
        if (event.key === "Escape") {
            closeModal();
        }
    }
    function handleClickOutside(event) {
        const modalContainer = document.getElementById(id);
        if (modalContainer && !modalContainer.contains(event.target)) {
            closeModal();
        }
    }
    export function closeModal() {
        if ($sounds) {
            // play sound
        }
        active.set(false);
        window.removeEventListener("keydown", handleKeyDown);
    }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="absolute bg-black/90 w-full h-full z-[101] top-0 {$active
        ? 'block'
        : 'hidden'} {$font ? 'font__lethal' : 'font_regular'}"
    on:click={handleClickOutside}
    on:keydown={handleKeyDown}
>
    <div class="flex justify-center items-center w-full h-full">
        <div
            role="dialog"
            aria-modal="true"
            class="bg-temptress-800 p-1 border-4 border-temptress-600 relative w-full h-2/4 md:w-1/2"
            {id}
        >
            <a href="#" on:click|preventDefault={closeModal}>
                <CloseLarge
                    class="absolute right-5 top-5 text-trinidad-500 cursor-pointer hover:text-trinidad-600 z-100"
                    on:click={closeModal}
                /></a
            >
            <div class="border-[3px] border-temptress-600 p-5 h-full">
                <div
                    class="bg-temptress-700/50 pl-1 w-3/4 md:w-4/6 lg:w-2/4 mb-5"
                >
                    <h1 class="text-trinidad-600 tracking-wide text-3xl">
                        {title}
                    </h1>
                </div>
                <div
                    class="mt-5 bg-temptress-700/50 h-5/6 p-1 overflow-y-scroll text-trinidad-600 text-lg"
                >
                    <slot />
                </div>
            </div>
        </div>
    </div>
</div>
