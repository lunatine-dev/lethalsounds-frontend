<div class="w-full md:w-2/3 lg:w-1/2 mt-5 m-auto">
    <div class="progress-bar">
        <div class="progress-bar-value"></div>
    </div>
</div>

<style lang="postcss">
    .progress-bar {
        height: 4px;
        background-color: rgba(255, 255, 255, 0.3);
        width: 100%;
        overflow: hidden;
    }
    .progress-bar-value {
        width: 100%;
        height: 100%;
        background-color: theme("colors.temptress.600");
        animation: indeterminateAnimation 1s infinite linear;
        transform-origin: 0% 50%;
    }
    @keyframes indeterminateAnimation {
        0% {
            transform: translateX(0) scaleX(0);
        }
        40% {
            transform: translateX(0) scaleX(0.4);
        }
        100% {
            transform: translateX(100%) scaleX(0.5);
        }
    }
</style>
