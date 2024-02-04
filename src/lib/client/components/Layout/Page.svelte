<script>
    import objectToStyle from "$lib/client/util/objectToStyle";
    export let gap = 4;
    export let gaps = true;
</script>

<div class="page h-full w-full flex flex-col justify-space-between">
    <div
        class="title h-[10vh]"
        style={gaps
            ? objectToStyle({
                  "margin-top": `${gap}vh`,
                  "margin-bottom": `${gap}vh`,
              })
            : ""}
    >
        <slot name="title" />
    </div>
    <div
        class="content overflow-y-auto"
        style={objectToStyle({
            height: `${gaps ? 80 - gap * 3 : 80}vh`,
        })}
    >
        <slot name="content" />
    </div>
    <div
        class="footer h-[10vh]"
        style={gaps
            ? objectToStyle({
                  "margin-top": `${gap}vh`,
              })
            : ""}
    >
        <slot name="footer" />
    </div>
</div>

<style lang="scss">
    .page {
        .title,
        .footer {
            overflow: hidden;
        }
    }
</style>
