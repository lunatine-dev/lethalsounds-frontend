<script>
    export let options = [];

    export let value;
</script>

<select
    bind:value
    on:change
    class="bg-transparent border-2 border-temptress-600 p-1 pr-2 h-3/4 pl-2 placeholder-temptress-600/75 text-temptress-600 w-1/2 md:w-auto"
>
    {#each options as option}
        <option value={option.id} class="bg-black">{option.text}</option>
    {/each}
</select>
