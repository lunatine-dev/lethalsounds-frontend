<script>
    export let text;

    export let value;
</script>

<input
    type="text"
    placeholder={text}
    bind:value
    class="bg-transparent border-2 border-temptress-600 h-3/4 p-1 pr-2 pl-2 placeholder-temptress-600/75 text-temptress-600 w-1/2"
/>
