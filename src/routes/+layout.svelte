<script>
    import "../global.css";
    import { ToastContainer, FlatToast } from "svelte-toasts";
    import { font } from "$lib/client/stores/preferences";
</script>

<slot />

<div class="parent {$font ? 'font__lethal' : 'font__regular'}">
    <ToastContainer placement="bottom-right" let:data>
        <FlatToast {data} />
    </ToastContainer>
</div>

<style lang="postcss">
    .parent :global(.st-toast.dark) {
        background: theme("colors.temptress.800") !important;
        border-left: 0 !important;
    }
    .parent :global(.st-toast.dark svg) {
        fill: theme("colors.trinidad.500") !important;
    }
    .parent :global(.st-toast.dark p) {
        color: theme("colors.trinidad.500") !important;
    }
    .parent :global(.st-toast.dark > progress::-webkit-progress-value) {
        background: theme("colors.temptress.600") !important;
    }
</style>
